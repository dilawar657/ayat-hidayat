# Encoding Repair Report

Date: 2026-11-22. Repair used `data/surahs.json`, matched by the `surahNumber` field in each numbered file, and edited only `surahNameArabic`. No global conversion was used.

## Summary

- Files repaired: **104**.
- Numbered Surah files parsed: **114/114**; JSON parse errors: **0**.
- Canonical-name validation: **113/114 match**. The sole remaining mismatch is the pre-existing populated Surah 14 spelling documented below; it was deliberately not changed because populated files were explicitly excluded.
- Populated Surah files: **10**, unchanged. Commandments: **106** remain.
- Dua records: **38** remain; `data/duas.json` was not changed.
- Quranic Arabic, Urdu/English translations, references, explanations, topics, notes, IDs, order, and JSON structure: not modified.
- Git diff scope: exactly the 104 targeted numbered files; each diff changes only `surahNameArabic`. No other tracked path changed as part of the repair.

## Modified files and exact field changes

| File | Surah # | Before | After |
|---|---:|---|---|
| `surah-10.json` | 10 | ÙŠÙˆÙ†Ø³ | يونس |
| `surah-100.json` | 100 | Ø§Ù„Ø¹Ø§Ø¯ÙŠØ§Øª | العاديات |
| `surah-101.json` | 101 | Ø§Ù„Ù‚Ø§Ø±Ø¹Ø© | القارعة |
| `surah-102.json` | 102 | Ø§Ù„ØªÙƒØ§Ø«Ø± | التكاثر |
| `surah-104.json` | 104 | Ø§Ù„Ù‡Ù…Ø²Ø© | الهمزة |
| `surah-105.json` | 105 | Ø§Ù„ÙÙŠÙ„ | الفيل |
| `surah-106.json` | 106 | Ù‚Ø±ÙŠØ´ | قريش |
| `surah-107.json` | 107 | Ø§Ù„Ù…Ø§Ø¹ÙˆÙ† | الماعون |
| `surah-108.json` | 108 | Ø§Ù„ÙƒÙˆØ«Ø± | الكوثر |
| `surah-109.json` | 109 | Ø§Ù„ÙƒØ§ÙØ±ÙˆÙ† | الكافرون |
| `surah-11.json` | 11 | Ù‡ÙˆØ¯ | هود |
| `surah-110.json` | 110 | Ø§Ù„Ù†ØµØ± | النصر |
| `surah-111.json` | 111 | Ø§Ù„Ù…Ø³Ø¯ | المسد |
| `surah-112.json` | 112 | Ø§Ù„Ø¥Ø®Ù„Ø§Øµ | الإخلاص |
| `surah-113.json` | 113 | Ø§Ù„ÙÙ„Ù‚ | الفلق |
| `surah-114.json` | 114 | Ø§Ù„Ù†Ø§Ø³ | الناس |
| `surah-12.json` | 12 | ÙŠÙˆØ³Ù | يوسف |
| `surah-13.json` | 13 | Ø§Ù„Ø±Ø¹Ø¯ | الرعد |
| `surah-15.json` | 15 | Ø§Ù„Ø­Ø¬Ø± | الحجر |
| `surah-16.json` | 16 | Ø§Ù„Ù†Ø­Ù„ | النحل |
| `surah-17.json` | 17 | Ø§Ù„Ø¥Ø³Ø±Ø§Ø¡ | الإسراء |
| `surah-18.json` | 18 | Ø§Ù„ÙƒÙ‡Ù | الكهف |
| `surah-19.json` | 19 | Ù…Ø±ÙŠÙ… | مريم |
| `surah-20.json` | 20 | Ø·Ù‡ | طه |
| `surah-22.json` | 22 | Ø§Ù„Ø­Ø¬ | الحج |
| `surah-23.json` | 23 | Ø§Ù„Ù…Ø¤Ù…Ù†ÙˆÙ† | المؤمنون |
| `surah-25.json` | 25 | Ø§Ù„ÙØ±Ù‚Ø§Ù† | الفرقان |
| `surah-26.json` | 26 | Ø§Ù„Ø´Ø¹Ø±Ø§Ø¡ | الشعراء |
| `surah-27.json` | 27 | Ø§Ù„Ù†Ù…Ù„ | النمل |
| `surah-28.json` | 28 | Ø§Ù„Ù‚ØµØµ | القصص |
| `surah-29.json` | 29 | Ø§Ù„Ø¹Ù†ÙƒØ¨ÙˆØª | العنكبوت |
| `surah-3.json` | 3 | Ø¢Ù„ Ø¹Ù…Ø±Ø§Ù† | آل عمران |
| `surah-30.json` | 30 | Ø§Ù„Ø±ÙˆÙ… | الروم |
| `surah-32.json` | 32 | Ø§Ù„Ø³Ø¬Ø¯Ø© | السجدة |
| `surah-33.json` | 33 | Ø§Ù„Ø£Ø­Ø²Ø§Ø¨ | الأحزاب |
| `surah-34.json` | 34 | Ø³Ø¨Ø£ | سبأ |
| `surah-36.json` | 36 | ÙŠØ³ | يس |
| `surah-37.json` | 37 | Ø§Ù„ØµØ§ÙØ§Øª | الصافات |
| `surah-38.json` | 38 | Øµ | ص |
| `surah-39.json` | 39 | Ø§Ù„Ø²Ù…Ø± | الزمر |
| `surah-40.json` | 40 | ØºØ§ÙØ± | غافر |
| `surah-41.json` | 41 | ÙØµÙ„Øª | فصلت |
| `surah-42.json` | 42 | Ø§Ù„Ø´ÙˆØ±Ù‰ | الشورى |
| `surah-43.json` | 43 | Ø§Ù„Ø²Ø®Ø±Ù | الزخرف |
| `surah-44.json` | 44 | Ø§Ù„Ø¯Ø®Ø§Ù† | الدخان |
| `surah-45.json` | 45 | Ø§Ù„Ø¬Ø§Ø«ÙŠØ© | الجاثية |
| `surah-46.json` | 46 | Ø§Ù„Ø£Ø­Ù‚Ø§Ù | الأحقاف |
| `surah-47.json` | 47 | Ù…Ø­Ù…Ø¯ | محمد |
| `surah-48.json` | 48 | Ø§Ù„ÙØªØ­ | الفتح |
| `surah-5.json` | 5 | Ø§Ù„Ù…Ø§Ø¦Ø¯Ø© | المائدة |
| `surah-50.json` | 50 | Ù‚ | ق |
| `surah-51.json` | 51 | Ø§Ù„Ø°Ø§Ø±ÙŠØ§Øª | الذاريات |
| `surah-52.json` | 52 | Ø§Ù„Ø·ÙˆØ± | الطور |
| `surah-53.json` | 53 | Ø§Ù„Ù†Ø¬Ù… | النجم |
| `surah-54.json` | 54 | Ø§Ù„Ù‚Ù…Ø± | القمر |
| `surah-55.json` | 55 | Ø§Ù„Ø±Ø­Ù…Ù† | الرحمن |
| `surah-56.json` | 56 | Ø§Ù„ÙˆØ§Ù‚Ø¹Ø© | الواقعة |
| `surah-57.json` | 57 | Ø§Ù„Ø­Ø¯ÙŠØ¯ | الحديد |
| `surah-58.json` | 58 | Ø§Ù„Ù…Ø¬Ø§Ø¯Ù„Ø© | المجادلة |
| `surah-59.json` | 59 | Ø§Ù„Ø­Ø´Ø± | الحشر |
| `surah-6.json` | 6 | Ø§Ù„Ø£Ù†Ø¹Ø§Ù… | الأنعام |
| `surah-60.json` | 60 | Ø§Ù„Ù…Ù…ØªØ­Ù†Ø© | الممتحنة |
| `surah-61.json` | 61 | Ø§Ù„ØµÙ | الصف |
| `surah-62.json` | 62 | Ø§Ù„Ø¬Ù…Ø¹Ø© | الجمعة |
| `surah-63.json` | 63 | Ø§Ù„Ù…Ù†Ø§ÙÙ‚ÙˆÙ† | المنافقون |
| `surah-64.json` | 64 | Ø§Ù„ØªØºØ§Ø¨Ù† | التغابن |
| `surah-65.json` | 65 | Ø§Ù„Ø·Ù„Ø§Ù‚ | الطلاق |
| `surah-66.json` | 66 | Ø§Ù„ØªØ­Ø±ÙŠÙ… | التحريم |
| `surah-67.json` | 67 | Ø§Ù„Ù…Ù„Ùƒ | الملك |
| `surah-68.json` | 68 | Ø§Ù„Ù‚Ù„Ù… | القلم |
| `surah-69.json` | 69 | Ø§Ù„Ø­Ø§Ù‚Ø© | الحاقة |
| `surah-7.json` | 7 | Ø§Ù„Ø£Ø¹Ø±Ø§Ù | الأعراف |
| `surah-70.json` | 70 | Ø§Ù„Ù…Ø¹Ø§Ø±Ø¬ | المعارج |
| `surah-71.json` | 71 | Ù†ÙˆØ­ | نوح |
| `surah-72.json` | 72 | Ø§Ù„Ø¬Ù† | الجن |
| `surah-73.json` | 73 | Ø§Ù„Ù…Ø²Ù…Ù„ | المزمل |
| `surah-74.json` | 74 | Ø§Ù„Ù…Ø¯Ø«Ø± | المدثر |
| `surah-75.json` | 75 | Ø§Ù„Ù‚ÙŠØ§Ù…Ø© | القيامة |
| `surah-76.json` | 76 | Ø§Ù„Ø¥Ù†Ø³Ø§Ù† | الإنسان |
| `surah-77.json` | 77 | Ø§Ù„Ù…Ø±Ø³Ù„Ø§Øª | المرسلات |
| `surah-78.json` | 78 | Ø§Ù„Ù†Ø¨Ø£ | النبأ |
| `surah-79.json` | 79 | Ø§Ù„Ù†Ø§Ø²Ø¹Ø§Øª | النازعات |
| `surah-8.json` | 8 | Ø§Ù„Ø£Ù†ÙØ§Ù„ | الأنفال |
| `surah-80.json` | 80 | Ø¹Ø¨Ø³ | عبس |
| `surah-81.json` | 81 | Ø§Ù„ØªÙƒÙˆÙŠØ± | التكوير |
| `surah-82.json` | 82 | Ø§Ù„Ø§Ù†ÙØ·Ø§Ø± | الانفطار |
| `surah-83.json` | 83 | Ø§Ù„Ù…Ø·ÙÙÙŠÙ† | المطففين |
| `surah-84.json` | 84 | Ø§Ù„Ø§Ù†Ø´Ù‚Ø§Ù‚ | الانشقاق |
| `surah-85.json` | 85 | Ø§Ù„Ø¨Ø±ÙˆØ¬ | البروج |
| `surah-86.json` | 86 | Ø§Ù„Ø·Ø§Ø±Ù‚ | الطارق |
| `surah-87.json` | 87 | Ø§Ù„Ø£Ø¹Ù„Ù‰ | الأعلى |
| `surah-88.json` | 88 | Ø§Ù„ØºØ§Ø´ÙŠØ© | الغاشية |
| `surah-89.json` | 89 | Ø§Ù„ÙØ¬Ø± | الفجر |
| `surah-9.json` | 9 | Ø§Ù„ØªÙˆØ¨Ø© | التوبة |
| `surah-90.json` | 90 | Ø§Ù„Ø¨Ù„Ø¯ | البلد |
| `surah-91.json` | 91 | Ø§Ù„Ø´Ù…Ø³ | الشمس |
| `surah-92.json` | 92 | Ø§Ù„Ù„ÙŠÙ„ | الليل |
| `surah-93.json` | 93 | Ø§Ù„Ø¶Ø­Ù‰ | الضحى |
| `surah-94.json` | 94 | Ø§Ù„Ø´Ø±Ø­ | الشرح |
| `surah-95.json` | 95 | Ø§Ù„ØªÙŠÙ† | التين |
| `surah-96.json` | 96 | Ø§Ù„Ø¹Ù„Ù‚ | العلق |
| `surah-97.json` | 97 | Ø§Ù„Ù‚Ø¯Ø± | القدر |
| `surah-98.json` | 98 | Ø§Ù„Ø¨ÙŠÙ†Ø© | البينة |
| `surah-99.json` | 99 | Ø§Ù„Ø²Ù„Ø²Ù„Ø© | الزلزلة |

## Validation results

- All 114 numbered files were parsed as JSON after editing.
- For all changed files, `surahNumber` was used to select the canonical value from `data/surahs.json`; all 104 repaired values match exactly.
- The ten populated files were excluded and none appear in the Git diff. Their contents and all 106 commandments therefore remain unchanged.
- `data/duas.json` was untouched; its 38 canonical records remain unchanged.
- `git diff --check` reported no whitespace errors. The 104-file diff contains one line replacement per file, limited to `surahNameArabic`.

### Unresolved mismatch

`data/ahkamat/surah-14.json` contains 6 commandments and was not changed. Its existing `surahNameArabic` is `ابراهيم`, while canonical Surah 14 in `data/surahs.json` is `إبراهيم`. This is an orthographic spelling difference, not a mojibake value. The instruction forbids modifying populated Surah files, so it remains unchanged and is the only exact canonical-name mismatch. No other unresolved mismatch was found.

## Religious text and translations

Confirmed: no Quranic Arabic text or Urdu/English translations were modified. The only property changed in the 104 files was the Surah Arabic-name metadata. Populated Surah data, dua data, and catalogue data were left untouched.
