# Encoding Investigation Report — Ayat-e-Hidayat

Investigation date: 2026-11-22. Scope: read-only source and byte inspection. No existing project file was changed, no packages installed, and no deployment or runtime/browser test was performed. Only this requested report was created.

## 1. Executive summary

The project files examined are valid UTF-8 at the byte level. The HTML declares `<meta charset="utf-8">`; JSON is loaded with `fetch()` and parsed via `Response.json()`; no application-side encoding conversion is applied. These facts do not explain or create the `Ø...` sequences.

The apparent issue is mixed and localized. Quranic Arabic, Urdu meanings, dua Arabic/Urdu, the Surah catalogue, interface Urdu and the populated commandment files inspected contain normal Unicode text. However, **104 of the 114 numbered `data/ahkamat/surah-N.json` files contain a Surah Arabic-name value stored literally as mojibake** (for example `Ø§Ù„Ø±Ø¹Ø¯` in `surah-13.json`). These are UTF-8-valid files containing the wrong Unicode characters in that field. Those files are empty of commandments; the affected values are their Surah-name metadata. The 10 populated commandment files do not contain the marker pattern. The 38 dua records and their Arabic and Urdu fields examined are normal Unicode.

Therefore, a broad diagnosis that all Arabic and Urdu content is corrupted is **not supported by this checkout**. Confirmed issue: literal mojibake in 104 empty Surah JSON files. The precise historical step that produced those string values cannot be proven from the current files alone. A reversible Windows-1252-to-UTF-8 interpretation yields a plausible original Surah name in a tested example, and `data/surahs.json` already supplies canonical names, but neither observation justifies a blind mass conversion.

## 2. Root cause and evidence

### Confirmed

- Strict UTF-8 decoding succeeded for all 119 inspected text/source files (HTML, JS, CSS, and JSON set); no invalid UTF-8 byte sequences were found.
- JSON syntax parsing succeeded for the data files inspected. There are 117 JSON files under `data/` (114 numbered Surah files, the draft, `surahs.json`, and `duas.json`).
- Literal mojibake markers occur in exactly 104 JSON files under `data/`, all of them numbered Surah files that have empty `ahkamat` arrays. The matching values are `surahNameArabic` metadata. The 10 numbered files with commandments are clean of these marker strings.
- `data/surahs.json` has properly rendered Arabic and Urdu names; `data/ahkamat/surah-1.json`, representative populated files, the draft, and `data/duas.json` also contain proper Arabic/Urdu in inspected samples.
- UTF-8 decoding of a corrupted value keeps it corrupted (it displays as `Ø...`), which proves this is not merely an editor failing to decode invalid UTF-8. The wrong characters are stored in the JSON string itself.
- Sample `surah-13.json`: stored value `Ø§Ù„Ø±Ø¹Ø¯`; a CP1252-byte interpretation followed by UTF-8 decoding produces `الرعد`. This is evidence consistent with a prior UTF-8-as-Windows-1252 decoding and re-save. It is a diagnostic candidate, not a blanket repair instruction.

### Not established

The repository does not record which editor, import, copy/paste, or encoding conversion created the 104 strings, so the historical origin is unconfirmed. There is no evidence that browser rendering, the HTML charset, `fetch()`, or JavaScript parsing corrupts the Arabic/Urdu text. A font may affect glyph appearance, but cannot turn the stored Unicode string `الرعد` into the distinct characters `Ø§Ù„Ø±Ø¹Ø¯`.

## 3. Files affected and inspected

Affected files: 104 numbered files in `data/ahkamat/`: every `surah-N.json` whose `surahNameArabic` is stored with the `Ø`/`Ù` mojibake pattern. The unaffected numbered files are the 10 populated collections: Surahs 1, 2, 4, 14, 21, 24, 31, 35, 49, and 103.

All inspected source/data files:

- `index.html`, `app.js`, `styles.css`, `netlify.toml`, `README.md`
- `data/surahs.json`, `data/duas.json`
- All 114 `data/ahkamat/surah-N.json` files
- `data/ahkamat/ayaat-e-hidayat-surah-al-baqarah-draft.json`

The report file itself and Git status were also checked to confirm the requested report is the only intended creation for this task.

## 4. Representative samples

| Field | Stored content in this checkout | Finding |
|---|---|---|
| Quranic Arabic, `data/ahkamat/surah-1.json` | `إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ` | Valid Arabic Unicode; not mojibake |
| Urdu meaning, same record | `ہم صرف تیری ہی عبادت کرتے ہیں اور صرف تجھ ہی سے مدد مانگتے ہیں۔` | Valid Urdu Unicode; not mojibake |
| Dua Arabic, first record of `data/duas.json` | `حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ` | Valid Arabic Unicode; not mojibake |
| Dua Urdu, same record | `ہمارے لیے اللہ کافی ہے اور وہ بہترین کارساز ہے۔` | Valid Urdu Unicode; not mojibake |
| Interface Urdu, `app.js` | `صفحۂ اول` | Valid Urdu Unicode; not mojibake |
| Affected Surah metadata, `data/ahkamat/surah-13.json` | `Ø§Ù„Ø±Ø¹Ø¯` | Mojibake characters stored literally in a valid UTF-8 JSON file |
| Diagnostic inverse candidate only | `الرعد` | Produced by a CP1252-byte interpretation then UTF-8 decoding; independently matches the Arabic name in `data/surahs.json` |

## 5. Recovery assessment

- Main Quranic Arabic, Urdu meanings, duas, and UI Urdu are already represented as proper Unicode in the inspected source; they do not need conversion based on the evidence here.
- The 104 affected values are limited to Surah Arabic-name metadata, and the catalogue provides a second source for corresponding names. The tested example also has a reversible-looking mojibake signature.
- This makes recovery **plausible for the affected metadata**, but the exact original encoding history is not provable from the current checkout. Some mojibake patterns can be lossy (replacement characters or unsupported code-page bytes); a general conversion could silently damage valid text. Do not apply a global replacement or conversion.
- For religious text that may be found corrupted in another version or deployment, restore from an approved source/repository version and verify it against trusted Quran/Hadith sources. Do not use inferred conversion to author or reconstruct religious wording.

## 6. Safe repair strategy (recommendation only; not performed)

1. Preserve a version-controlled backup and enumerate only the 104 exact affected JSON paths and fields. Preserve every record ID, array, key, English string, and unrelated metadata unchanged.
2. Compare each affected `surahNameArabic` directly with the matching `number`/`nameArabic` in `data/surahs.json`. Use that existing catalogue as the source of truth if the project owner confirms it. Treat CP1252 inversion only as a diagnostic comparison, never as an automatic transformation across files.
3. Make a field-level change set first and review every proposed value, including difficult names and Unicode diacritics, before writing. If a value differs from the catalogue or cannot be unambiguously matched, source it from an authoritative Surah-name source and obtain review.
4. For actual Quranic text, translations, dua text, or Hadith citations found corrupted in another source, restore from trusted original records and verify references and wording with qualified reviewers. Keep editorial translations distinct and do not alter English translations as part of Arabic/Urdu repair.
5. Serialize as UTF-8 (without lossy code-page conversion), preserve JSON schema and IDs, and inspect the diff to ensure only authorized Arabic/Urdu fields changed.

## 7. Rendering and presentation path

- `index.html` has `<meta charset="utf-8">`, positioned early in `<head>`.
- `app.js` uses `fetch('data/duas.json')`, `fetch('data/surahs.json')`, and per-Surah `fetch(...)`; responses are consumed with `.json()`. No `TextDecoder`, `decodeURIComponent`, manual byte conversion, or alternate charset parsing is present.
- Arabic/Urdu values are HTML-escaped, then placed in template strings used to set `app.innerHTML`. Escaping protects HTML syntax; it does not transliterate or alter Unicode characters. `escapeHtml()` replaces `& < > " '` only.
- Relevant elements set `lang="ar"`/`lang="ur"` and `dir="rtl"`. `render()` also sets document `lang` and `dir` from the UI locale. Direction is correctly scoped on the displayed Arabic and Urdu content.
- CSS declares fallback stacks including `"Noto Naskh Arabic"`, `"Traditional Arabic"`, `"Times New Roman"`, `"Noto Nastaliq Urdu"`, and `"Jameel Noori Nastaleeq"`, then generic serif. These fonts are not bundled or loaded remotely in the inspected files, so actual glyph shaping depends on the visitor system. This could affect appearance, not stored code points.
- The application does not contain an encoding conversion or text normalization that would account for the affected strings. Dua search uses Unicode NFKC normalization and removes Arabic diacritics for search matching only; it does not rewrite stored/rendered content.

## 8. Risks and precautions

- Do not globally replace strings beginning with `Ø` or `Ù`: they may occur in unrelated content, and conversion can be lossy or alter valid text.
- Do not modify Quranic or Prophetic wording based on visual similarity, transliteration, or an inferred inverse codec.
- Keep English fields, IDs, references, order, and JSON shape byte-for-byte or semantically unchanged in any later repair unless separately reviewed and authorized.
- Verify font rendering separately from data integrity; local font availability is environment-dependent.
- Compare deployed responses to repository bytes if a live deployment appears different. That network/runtime comparison was not part of this read-only local investigation.

## 9. Suggested testing procedure after an approved repair

No tests were run for this report. After an authorized field-level repair:

1. Strictly decode all changed files as UTF-8 and parse each as JSON; validate the existing schema and record IDs.
2. Confirm the changed paths and keys are exactly the approved `surahNameArabic` metadata values; assert all English fields, references, IDs, and collection counts remain unchanged.
3. Compare each corrected Surah name with `data/surahs.json`; review a diff in a Unicode-capable editor.
4. Serve locally over HTTP and inspect Surah directory/detail pages and language toggle in desktop and mobile browsers. Check Arabic/Urdu shaping, diacritics, bidi ordering, search, and copy behavior; do not rely on terminal rendering alone.
5. Verify Quranic/dua text and references against trusted sources whenever those fields are involved; obtain qualified review for religious text.
6. Inspect browser console and network responses for failed fetches or malformed JSON. If the hosted site is in scope, separately compare its response headers/body with local files.

## Conclusion

The general UTF-8 pipeline is configured correctly and the core Arabic/Urdu datasets inspected are already intact. The specific visible `Ø...` corruption is confirmed in 104 empty Surah JSON files' Arabic-name metadata, stored as literal mojibake in otherwise valid UTF-8. A likely CP1252/UTF-8 mojibake round trip is demonstrable for one sample, but the original historical operation is not established; a cautious catalogue-based metadata repair is feasible after review. No repair has been performed.