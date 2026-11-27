# Ayat-e-Hidayat — Complete Project Audit

Audit basis: local project source and data inspected on 2026-11-22. This is a static source audit; the live website and browser console were not verified. No project files were changed except this explicitly requested report.

## 1. Executive summary
Vanilla HTML/CSS/JavaScript single-page application, deployed as static files through Netlify. No framework, build step, package manifest, server, database, or runtime dependency. It loads the 114-Surah directory, 114 per-Surah JSON files (106 commandments across 10 populated Surahs), and a canonical dua JSON catalog containing 7 categories and 38 duas.
Confirmed concern: Arabic and Urdu strings observed in JSON and UI literals are mojibake (e.g. UTF-8 text rendered as sequences such as `Ø...`), rather than legible source-script text. This affects Quran/dua text and translations. Religious wording should not be inferred or repaired from this audit.

## 2. Architecture and file tree
```text
Ayat-e-Hidayat/
├── index.html                HTML shell and metadata
├── app.js                    SPA templates, routing, data fetching and interactions
├── styles.css                design system, layout and responsive styles
├── favicon.svg               inline vector favicon
├── netlify.toml              publish root; no build command
├── README.md                 setup, content model and deployment notes
└── data/
    ├── surahs.json           114 item Surah catalogue
    ├── duas.json             categories and canonical dua records
    └── ahkamat/              114 files named surah-N.json plus one draft
```
Languages: HTML, CSS, JavaScript, JSON. Entry point `index.html`; deferred `app.js` initializes shell, locale, route render and Surah catalogue fetch. Routes use hash fragments (`#/`, `#/surahs`, `#/surah/N`, `#/duas[/category]`, `#/purpose`, `#/about`). JSON is fetched at runtime; opening with `file://` prevents fetch, as README notes.
External services: no app API/service; data contains external source links (Quran.com and Sunnah.com). No fonts or scripts are imported remotely in inspected HTML. Netlify publishes `.`. No package.json, lockfile, tests, build scripts or CI configuration present.

## 3. Pages and features
- Home: hero, purpose/mission teaser, browse links and featured Surahs.
- Surahs directory: catalogue, live client-side name/number search and empty state.
- Surah detail: lazy fetches `data/ahkamat/surah-N.json`; displays editorial topics, Quranic Arabic, Urdu/English meanings and explanations, references and source links; empty state for zero entries.
- Prophetic Duas: category cards, category hash routes, search across title/text/transliteration/meanings, category filter, copy Arabic and copy complete dua; clipboard failures reported inline. No share control found.
- Purpose and About: static mission, vision, principles and explanatory content.
- Header/footer navigation, locale toggle (English/Urdu), active route state, not-found route, loading/error messages.
Interaction is delegated from app root for copy and language toggle; hashchange triggers rendering. Async render IDs avoid stale response paints. Search functionality is browser-side.

## 4. Quranic commandments inventory
114 Surah catalogue entries and 114 numbered Ahkamat files exist; 10 files have entries, 104 are empty. Total entries: 106. Names below follow source English catalogue. The following inventory lists every record and exact source Ayah references; untranslated long text is preserved verbatim in its source JSON (the JSON Arabic/Urdu fields are mojibake in this checkout, so reproducing them would repeat corrupted-looking strings).

| Surah # | Surah | Count | Commandment topic (English source) | Exact Ayah reference(s) |
|---:|---|---:|---|---|
| 1 | Al-Fatihah | 2 | Worship Allah Alone and Seek Help Only from Him | 1:5 |
| 1 | Al-Fatihah | 2 | Ask Allah for Guidance to the Straight Path | 1:6 |
| 103 | Al-Asr | 4 | Humanity Is in Loss | 103:2 |
| 103 | Al-Asr | 4 | Faith and Righteous Deeds | 103:3, 103:3 |
| 103 | Al-Asr | 4 | Encouraging One Another to Uphold the Truth | 103:3 |
| 103 | Al-Asr | 4 | Encouraging One Another to Be Patient | 103:3 |
| 14 | Ibrahim | 6 | Prefer the Hereafter over Worldly Life | 14:3 |
| 14 | Ibrahim | 6 | Learn Patience and Gratitude | 14:5 |
| 14 | Ibrahim | 6 | Be Grateful to Allah | 14:7 |
| 14 | Ibrahim | 6 | Put Your Trust in Allah and Remain Patient | 14:11, 14:12 |
| 14 | Ibrahim | 6 | Establish Salah | 14:31 |
| 14 | Ibrahim | 6 | Spend from What Allah Has Provided | 14:31 |
| 2 | Al-Baqarah | 18 | Establish Prayer and Give Zakah | 2:43 |
| 2 | Al-Baqarah | 18 | Spending on Those in Need | 2:215 |
| 2 | Al-Baqarah | 18 | Living with Taqwa | 2:183 |
| 2 | Al-Baqarah | 18 | Fasting | 2:183 |
| 2 | Al-Baqarah | 18 | Rules of Fighting and Prohibition of Transgression | 2:190 |
| 2 | Al-Baqarah | 18 | Spending in Allah's Cause and Practising Excellence | 2:195 |
| 2 | Al-Baqarah | 18 | Completing Hajj and Umrah; Hady During Pilgrimage | 2:196 |
| 2 | Al-Baqarah | 18 | Seeking Allah's Forgiveness | 2:199 |
| 2 | Al-Baqarah | 18 | Avoiding Sexual Intercourse During Menstruation | 2:222 |
| 2 | Al-Baqarah | 18 | Do Not Use Oaths as an Obstacle to Goodness and Reconciliation | 2:224 |
| 2 | Al-Baqarah | 18 | Breastfeeding, Mutual Weaning, and the Father's Financial Responsibility | 2:233 |
| 2 | Al-Baqarah | 18 | Waiting Period for Divorced Women | 2:228 |
| 2 | Al-Baqarah | 18 | Waiting Period After a Husband's Death | 2:234 |
| 2 | Al-Baqarah | 18 | Avoiding Boasting, Harm, and Showing Off in Charity | 2:264 |
| 2 | Al-Baqarah | 18 | Giving Charity Publicly or Privately | 2:271 |
| 2 | Al-Baqarah | 18 | Prohibition of Riba (Interest/Usury) | 2:275 |
| 2 | Al-Baqarah | 18 | Documenting Deferred Debts and Taking Witnesses | 2:282 |
| 2 | Al-Baqarah | 18 | Taking Collateral When Travelling and Honouring Trusts | 2:283 |
| 21 | Al-Anbiya | 6 | Worship Allah Alone | 21:25 |
| 21 | Al-Anbiya | 6 | Fear Allah, Even When Nobody Is Watching | 21:49 |
| 21 | Al-Anbiya | 6 | Remember Allah Will Establish Perfect Justice | 21:47 |
| 21 | Al-Anbiya | 6 | Ask Allah for Help During Hardship | 21:83, 21:84 |
| 21 | Al-Anbiya | 6 | Be Patient and Strive to Become Righteous | 21:85, 21:86 |
| 21 | Al-Anbiya | 6 | Hasten Towards Good, Make Dua with Hope and Fear, and Remain Humble | 21:90 |
| 24 | An-Nur | 6 | Prescribed Punishment for Zina | 24:2 |
| 24 | An-Nur | 6 | Chastity and Marriage | 24:3 |
| 24 | An-Nur | 6 | Prohibition of False Accusations | 24:4, 24:5 |
| 24 | An-Nur | 6 | Seeking Permission Before Entering Homes | 24:27, 24:28, 24:29 |
| 24 | An-Nur | 6 | Lowering the Gaze – Men | 24:30 |
| 24 | An-Nur | 6 | Modesty and Chastity – Women | 24:31 |
| 31 | Luqman | 9 | Giving Thanks to Allah | 31:12 |
| 31 | Luqman | 9 | Do Not Associate Partners with Allah | 31:13 |
| 31 | Luqman | 9 | Kindness and Gratitude to Parents | 31:14 |
| 31 | Luqman | 9 | Not Obeying Parents in Shirk while Treating Them Kindly | 31:15 |
| 31 | Luqman | 9 | Belief in Allah's Knowledge and Accountability | 31:16 |
| 31 | Luqman | 9 | Establishing Prayer, Enjoining Good, Forbidding Wrong, and Patience | 31:17 |
| 31 | Luqman | 9 | Avoiding Pride and Arrogance | 31:18 |
| 31 | Luqman | 9 | Moderation in Walking and Lowering the Voice | 31:19 |
| 31 | Luqman | 9 | Submitting to Allah and Doing Good | 31:22 |
| 35 | Fatir | 8 | Remember Allah's Blessings | 35:3 |
| 35 | Fatir | 8 | Do Not Let Worldly Life Deceive You | 35:5 |
| 35 | Fatir | 8 | Treat Satan as Your Enemy | 35:6 |
| 35 | Fatir | 8 | Believe and Perform Righteous Deeds | 35:7 |
| 35 | Fatir | 8 | Establish Prayer and Purify Yourself | 35:18, 35:18 |
| 35 | Fatir | 8 | Fear Allah Through True Knowledge | 35:28 |
| 35 | Fatir | 8 | Recite Allah's Book, Establish Prayer, and Give Charity | 35:29, 35:30 |
| 35 | Fatir | 8 | Do Not Call Upon Anyone Besides Allah | 35:13, 35:14 |
| 4 | An-Nisa | 41 | Be Mindful of Allah and Honour Family Ties | 4:1 |
| 4 | An-Nisa | 41 | Protect and Return Orphans' Property | 4:2, 4:6, 4:10 |
| 4 | An-Nisa | 41 | Maintain Justice in Marriage | 4:3 |
| 4 | An-Nisa | 41 | Give Women Their Dowries Graciously | 4:4 |
| 4 | An-Nisa | 41 | Manage Property Responsibly and Provide for Dependents | 4:5, 4:6 |
| 4 | An-Nisa | 41 | Fulfil Inheritance Rights | 4:7, 4:11, 4:12, 4:176 |
| 4 | An-Nisa | 41 | Observe the Limits Set by Allah | 4:13, 4:14 |
| 4 | An-Nisa | 41 | Treat Women Fairly and Honourably | 4:19 |
| 4 | An-Nisa | 41 | Do Not Consume Wealth Unjustly or Take Life Unjustly | 4:29, 4:30 |
| 4 | An-Nisa | 41 | Avoid Envy and Ask Allah for His Bounty | 4:32 |
| 4 | An-Nisa | 41 | Fulfil Marital Responsibilities and Resolve Disputes | 4:34, 4:35 |
| 4 | An-Nisa | 41 | Worship Allah and Treat People with Kindness | 4:36 |
| 4 | An-Nisa | 41 | Avoid Miserliness and Spending to Show Off | 4:37, 4:38 |
| 4 | An-Nisa | 41 | Observe Purification Before Prayer | 4:43 |
| 4 | An-Nisa | 41 | Return Trusts and Judge Fairly | 4:58 |
| 4 | An-Nisa | 41 | Obey Allah, the Messenger, and Those in Authority | 4:59 |
| 4 | An-Nisa | 41 | Accept the Messenger's Judgment Sincerely | 4:65 |
| 4 | An-Nisa | 41 | Guidance on Defence and Struggle in Armed Conflict | 4:71, 4:74, 4:75, 4:76, 4:84 |
| 4 | An-Nisa | 41 | Recognize Blessings from Allah and Responsibility for One's Actions | 4:79 |
| 4 | An-Nisa | 41 | Reflect upon the Quran | 4:82 |
| 4 | An-Nisa | 41 | Return Greetings with Better or Equal Words | 4:86 |
| 4 | An-Nisa | 41 | Do Not Intentionally Kill a Believer | 4:92, 4:93 |
| 4 | An-Nisa | 41 | Verify Before Taking Action | 4:94 |
| 4 | An-Nisa | 41 | Maintain Prayer During Travel and Danger | 4:101, 4:102, 4:103 |
| 4 | An-Nisa | 41 | Seek Allah's Forgiveness | 4:106 |
| 4 | An-Nisa | 41 | Do Not Defend Betrayal or Blame the Innocent | 4:107, 4:108, 4:109, 4:110, 4:111, 4:112 |
| 4 | An-Nisa | 41 | Encourage Beneficial Private Counsel | 4:114 |
| 4 | An-Nisa | 41 | Uphold Justice for Women and Orphan Girls | 4:127 |
| 4 | An-Nisa | 41 | Seek Reconciliation and Act Fairly in Marriage | 4:128, 4:129 |
| 4 | An-Nisa | 41 | Stand Firmly for Justice, Even Against Yourself | 4:135 |
| 4 | An-Nisa | 41 | Believe in Allah and All His Messengers | 4:136, 4:150, 4:151, 4:152 |
| 4 | An-Nisa | 41 | Avoid Gatherings Where Allah's Revelations Are Mocked | 4:140 |
| 4 | An-Nisa | 41 | Avoid Shirk and the Deception of Satan | 4:48, 4:116, 4:119, 4:120 |
| 4 | An-Nisa | 41 | Avoid Arrogance in Worship | 4:172, 4:173 |
| 4 | An-Nisa | 41 | Witnesses and Historical Legal Instructions on Indecency | 4:15, 4:16 |
| 4 | An-Nisa | 41 | Guidance on Hostile Groups, Conflict, and Peace | 4:88, 4:89, 4:90, 4:91 |
| 4 | An-Nisa | 41 | Contextual Guidance on Allegiance During Hostilities | 4:89, 4:144 |
| 4 | An-Nisa | 41 | Migration When Faith Is Constrained, with Exemptions for the Unable | 4:97, 4:98, 4:99, 4:100 |
| 4 | An-Nisa | 41 | Allow the Wronged to Speak and Encourage Forgiveness | 4:148, 4:149 |
| 4 | An-Nisa | 41 | Avoid Usury and Unjust Financial Practices | 4:160, 4:161 |
| 4 | An-Nisa | 41 | Do Not Exceed the Limits in Religion; Speak Truthfully about Jesus | 4:171 |
| 49 | Al-Hujurat | 6 | Verify Information Before Acting | 49:6 |
| 49 | Al-Hujurat | 6 | Reconciliation and Justice Between Fighting Groups | 49:9 |
| 49 | Al-Hujurat | 6 | Brotherhood and Reconciliation | 49:10 |
| 49 | Al-Hujurat | 6 | Avoid Mockery, Insults and Offensive Nicknames | 49:11 |
| 49 | Al-Hujurat | 6 | Avoid Suspicion, Spying and Backbiting | 49:12 |
| 49 | Al-Hujurat | 6 | Diversity, Recognition and Righteousness | 49:13 |

Populated Surahs: 1 Al-Fatihah (2); 2 Al-Baqarah (18); 4 An-Nisa (41); 14 Ibrahim (6); 21 Al-Anbiya (6); 24 An-Nur (6); 31 Luqman (9); 35 Fatir (8); 49 Al-Hujurat (6); 103 Al-Asr (4). Other 104 numbered files are empty. One additional draft file `ayaat-e-hidayat-surah-al-baqarah-draft.json` is present and is not part of the numbered runtime path. English topics, Urdu topics, editorial notes, ayah text and meanings are stored per record in those files; each entry may include multiple ayahs.
Duplicate analysis: record IDs are intended identifiers; no duplicate record detection was run across semantic wording. Same verse/topic reuse cannot be ruled out by topic labels alone.

## 5. Prophetic Duas inventory
Catalog contains 7 categories and 38 canonical records. Category membership references IDs, so a record may recur across categories without duplicated canonical text. All 38 inspected records have nonempty Arabic, transliteration, Urdu and English fields. Record references, context, classification, narrator and authenticity vary; missing optional values are not presented as errors without source review. The complete source text and metadata are in `data/duas.json`.

| Category ID | Display name | Dua IDs (count) |
|---|---|---|
| hardship-distress |  | 6: hasbunallahu, ya-hayyu-ya-qayyum, la-ilaha-illallahul-azeemul-haleem, allahumma-hammi-hazan, allahumma-rahmataka-arju, dua-yunus |
| forgiveness-repentance |  | 5: sayyid-al-istighfar, allahumma-zalamtu-nafsi, astaghfirullah-wa-atubu, rabbi-ghfir-li-wa-tub, astaghfirullah-al-hayyul-qayyum |
| protection-safety |  | 6: a-udhu-bikalimatillah, bismillah-alladhi-la-yadurru, allahumma-fatir, allahumma-munkaratil-akhlaq, allahumma-sharri-sami, allahumma-fitnat-in-nar |
| guidance-faith |  | 5: ya-muqallibal-qulub, allahumma-asalukal-huda, allahumma-ihdini-wa-saddidni, allahummaghfir-li-warhamni, rabbana-la-tuzigh |
| rizq-debt-barakah |  | 6: allahummakfini-bihalalika, allahumma-hammi-hazan, allahumma-rabbas-samawati, rabbi-inni-lima-anzalta, allahumma-ilman-nafian, allahumma-zawali-nimatika |
| parents-family |  | 6: rabbir-hamhuma, rabbana-hab-lana-azwajina, rabbi-hab-li-dhurriyyatan, rabbi-jalni-muqimas-salah, rabbana-ighfir-li-wa-liwalidayya, rabbi-la-tadharni |
| health-healing |  | 5: allahumma-rabban-nas, a-udhu-billahi-wa-qudratihi, as-alullahal-azim-yashfiyak, anni-massaniyad-durr, allahumma-minal-barasi |

### Canonical dua records

| ID | Title | Reference(s) | Authenticity (as supplied) | Classification |
|---|---|---|---|---|
| hasbunallahu | Hasbunallahu Wa Ni'mal Wakeel | Sahih al-Bukhari 4563; Quran 3:173 | Sahih (as supplied) | Prophet ﷺ recited; Dua of another Prophet |
| ya-hayyu-ya-qayyum | Ya Hayyu Ya Qayyum, Bi-Rahmatika Astagheeth | Jami' at-Tirmidhi 3524 | Hasan (as cited in the supplied research) | Prophet ﷺ recited |
| la-ilaha-illallahul-azeemul-haleem | La Ilaha Illallahul-Azeemul-Haleem | Sahih al-Bukhari 6345 | Sahih (as supplied) | Prophet ﷺ recited |
| allahumma-hammi-hazan | Allahumma Inni A'udhu Bika Minal-Hammi wal-Hazan | Sahih al-Bukhari 6369 | Sahih (as supplied) | Prophet ﷺ recited |
| allahumma-rahmataka-arju | Allahumma Rahmataka Arju | Sunan Abi Dawud 5090 | Disputed: Al-Albani graded it Hasan; Zubair Ali Zai graded it Da'if (as supplied). | Prophet ﷺ taught |
| dua-yunus | Dua of Prophet Yunus عليه السلام | Quran Al-Anbiya 21:87; Jami' at-Tirmidhi 3505 | Sahih according to the cited Darussalam grading (as supplied). | Quranic supplication; Dua of another Prophet; Prophet ﷺ taught |
| sayyid-al-istighfar | Sayyid al-Istighfar | Sahih al-Bukhari 6306 | Sahih (as supplied) | Prophet ﷺ taught |
| allahumma-zalamtu-nafsi | Allahumma Inni Zalamtu Nafsi Zulman Kathira | Sahih al-Bukhari 834 | Sahih (as supplied) | Prophet ﷺ taught |
| astaghfirullah-wa-atubu | Astaghfirullaha Wa Atubu Ilayh | Sahih Muslim 2702 | Sahih (as supplied) | Prophet ﷺ recited |
| rabbi-ghfir-li-wa-tub | Rabbighfir Li Wa Tub Alayya | Sunan Abi Dawud 1516; Jami' at-Tirmidhi 3434 | Al-Albani graded it authentic (as supplied). | Prophet ﷺ recited |
| astaghfirullah-al-hayyul-qayyum | Astaghfirullahal-Hayyul-Qayyum | Sunan Abi Dawud 1517 | Sahih according to Al-Albani (as supplied). | Prophet ﷺ taught |
| a-udhu-bikalimatillah | A'udhu Bikalimatillahit-Tammati | Sahih Muslim 2708 | Sahih (as supplied) | Prophet ﷺ taught |
| bismillah-alladhi-la-yadurru | Bismillahil-Ladhi La Yadurru | Sunan Abi Dawud 5088; Jami' at-Tirmidhi 3388 | Hasan Sahih according to the cited grading (as supplied). | Prophet ﷺ taught |
| allahumma-fatir | Allahumma Fatiras-Samawati wal-Ard | Sunan Abi Dawud 5067 | Not supplied; verify against the source before assigning a grade. | Prophet ﷺ taught |
| allahumma-munkaratil-akhlaq | Allahumma Inni A'udhu Bika Min Munkaratil-Akhlaq | Jami' at-Tirmidhi 3591 | Hasan Gharib according to the cited Tirmidhi grading (as supplied). | Prophet ﷺ recited; Prophet ﷺ taught |
| allahumma-sharri-sami | Allahumma Inni A'udhu Bika Min Sharri Sam'i | Sunan Abi Dawud 1551; Jami' at-Tirmidhi 3492 | Hasan according to the cited grading in Riyad as-Salihin (as supplied). | Prophet ﷺ taught |
| allahumma-fitnat-in-nar | Allahumma Inni A'udhu Bika Min Fitnat-in-Nar | Riyad as-Salihin 1481 | Hasan Sahih as cited in Riyad as-Salihin (as supplied). | Prophet ﷺ taught |
| ya-muqallibal-qulub | Ya Muqallibal-Qulub | Jami' at-Tirmidhi 2140 | Sahih according to the cited grading (as supplied). | Prophet ﷺ recited |
| allahumma-asalukal-huda | Allahumma Inni As'alukal-Huda wat-Tuqa | Sahih Muslim 2721 | Sahih (as supplied) | Prophet ﷺ recited |
| allahumma-ihdini-wa-saddidni | Allahumma Ihdini Wa Saddidni | Sahih Muslim 2725 | Sahih (as supplied) | Prophet ﷺ taught |
| allahummaghfir-li-warhamni | Allahummaghfir Li Warhamni Wahdini Wa 'Afini Warzuqni | Sahih Muslim 2697 | Sahih (as supplied) | Prophet ﷺ taught |
| rabbana-la-tuzigh | Rabbana La Tuzigh Qulubana | Quran Aal-e-Imran 3:8 |  | Quranic supplication |
| allahummakfini-bihalalika | Allahummakfini Bi-Halalika 'An Haramika | Jami' at-Tirmidhi 3563 | Hasan (as supplied) | Prophet ﷺ taught |
| allahumma-rabbas-samawati | Allahumma Rabbas-Samawati | Sahih Muslim 2713 | Sahih (as supplied) | Prophet ﷺ recited |
| rabbi-inni-lima-anzalta | Rabbi Inni Lima Anzalta Ilayya Min Khayrin Faqir | Quran Al-Qasas 28:24 |  | Quranic supplication; Dua of another Prophet |
| allahumma-ilman-nafian | Allahumma Inni As'aluka 'Ilman Nafi'an | Sunan Ibn Majah 925 | Sahih according to the cited Al-Albani grading (as supplied). | Prophet ﷺ recited |
| allahumma-zawali-nimatika | Allahumma Inni A'udhu Bika Min Zawali Ni'matik | Sahih Muslim 2739 | Sahih (as supplied) | Prophet ﷺ recited |
| rabbir-hamhuma | Rabbir-Hamhuma Kama Rabbayani Saghira | Quran Al-Isra 17:24 |  | Quranic supplication |
| rabbana-hab-lana-azwajina | Rabbana Hab Lana Min Azwajina Wa Dhurriyyatina | Quran Al-Furqan 25:74 |  | Quranic supplication |
| rabbi-hab-li-dhurriyyatan | Rabbi Hab Li Min Ladunka Dhurriyyatan Tayyibah | Quran Aal-e-Imran 3:38 |  | Quranic supplication; Dua of another Prophet |
| rabbi-jalni-muqimas-salah | Rabbi Ja'lni Muqimas-Salah Wa Min Dhurriyyati | Quran Ibrahim 14:40 |  | Quranic supplication; Dua of another Prophet |
| rabbana-ighfir-li-wa-liwalidayya | Rabbana Ighfir Li Wa Liwalidayya | Quran Ibrahim 14:41 |  | Quranic supplication; Dua of another Prophet |
| rabbi-la-tadharni | Rabbi La Tadharni Fardan Wa Anta Khayrul-Warithin | Quran Al-Anbiya 21:89 |  | Quranic supplication; Dua of another Prophet |
| allahumma-rabban-nas | Allahumma Rabban-Nas, Adhhibil-Ba's | Sahih Muslim 2191c | Sahih (as supplied) | Prophet ﷺ recited |
| a-udhu-billahi-wa-qudratihi | A'udhu Billahi Wa Qudratihi Min Sharri Ma Ajidu Wa Uhadhir | Sahih Muslim 2202 | Sahih (as supplied) | Prophet ﷺ taught |
| as-alullahal-azim-yashfiyak | As'alullahal-'Azim Rabbal-'Arshil-'Azim An Yashfiyak | Sunan Abi Dawud 3106 | Sahih according to Al-Albani (as supplied). | Prophet ﷺ taught |
| anni-massaniyad-durr | Anni Massaniyad-Durru Wa Anta Arhamur-Rahimin | Quran Al-Anbiya 21:83 |  | Quranic supplication; Dua of another Prophet |
| allahumma-minal-barasi | Allahumma Inni A'udhu Bika Minal-Barasi | Sunan Abi Dawud 1554 | Disputed: some scholars authenticated the narration, while other assessments classify it as weak (as supplied). | Prophet ﷺ recited; Prophet ﷺ taught |

All records include Arabic/transliteration/Urdu/English/context in source; content is too lengthy to repeat safely here, and Arabic/Urdu strings observed in this checkout are mojibake. Context, references and optional metadata should be consulted verbatim in source. Cross-listed ID: `allahumma-hammi-hazan` occurs in hardship/distress and rizq/debt/barakah categories. Other overlaps can be identified by repeated IDs in category membership; category ID arrays are the canonical linkage. No separate share behavior found. README states source-by-source reference/grading review remains outstanding; authenticity strings say “as supplied” for multiple records.

## 6. Design and UX
Warm cream background, forest green, muted gold and neutral ink; serif English headings, system sans body, declared Arabic/Urdu font stacks with no bundled font assets. Arabic blocks use RTL/text alignment; Urdu fields carry `lang=ur` and often RTL. Locale toggle switches interface copy and root `lang`/`dir`, but Quranic/dua content remains bilingual together rather than a full content-language switch. Layout uses CSS grid/flex and breakpoints at 900px and 640px; reduced-motion preference is respected.
Accessibility positives: semantic header/nav/main/footer, aria labels/current-page, focus-visible styles, screen-reader-only utility, noscript notice. Audit risks: no automated accessibility or browser inspection; contrast, keyboard order, dynamic announcements, heading hierarchy, image alternatives and RTL details need runtime review. Responsive menu wraps inline; no collapsed hamburger. Loading/errors exist for JSON fetches, but no retry action.

## 7. Technical and data quality
- No framework/build dependencies, backend, persistence, user accounts, analytics or database found. Static hosting compatible with Netlify; hash routing needs no rewrite.
- SEO: title, description, viewport, theme color and favicon; no canonical, Open Graph/Twitter metadata, sitemap or robots file observed. SPA route titles are only partly customized.
- Search covers Surah names/numbers and dua fields, not commandments. No share feature detected. No browser console/runtime check or link crawl was performed.
- Confirmed: mojibake in Arabic/Urdu text in data and interface literals as read from UTF-8 files. Confirmed: most Surahs intentionally empty per file content and empty-state UI. Confirmed: draft JSON extra file.
- Possible: discrepancies in religious text, translations, references, grading, duplicate meanings or source URLs require qualified source-by-source verification; this audit does not validate religious authenticity.
- Security: templates use an HTML escaping helper for dynamic data; external references render links. No server secrets or privileged backend evident. Review URL schemes/content validation if editorial data is untrusted.
- Performance: small static app but fetches full dua catalog when visiting dua section and individual Surah JSON on detail route; no caching layer beyond browser HTTP cache. 114 small files are not bundled.

## 8. Future feature readiness
| Feature | Feasibility and likely files | Backend needed? | Risk |
|---|---|---|---|
| Daily Ayah | Moderate; add selection/display to `app.js`, curate data under `data/` | No for curated static rotation | avoid implying arbitrary verse selection is editorially approved |
| Daily Dua | Easy; select canonical `duas.json` record and show on home | No | selection/date consistency |
| Search commandments | Moderate; fetch/index numbered JSON or create static index; `app.js` | No | full text mojibake and index freshness |
| Search duas | Already implemented client-side | No | mojibake limits usefulness |
| Topic exploration | Moderate; add topic metadata/index, update data/UI | No | taxonomy consistency |
| Bookmarks/favourites | Easy for one device via localStorage | No | browser-specific, clearing/private mode |
| Learning progress | LocalStorage prototype easy; sync needs service/backend | Optional | persistence and privacy expectations |
| Shareable content cards | Moderate; share URL/clipboard and metadata/canvas UI | No | deep-link and text fidelity |
| Language switching | Interface toggle exists; content selection requires data-aware rendering and complete translations | No | currently strings may be unreadable due to encoding |
| Personal dashboard | UI/local state possible; multi-device requires backend/auth | Optional | privacy and scope |

## 9. Prioritized recommendations
1. Resolve text encoding/data integrity with source-owner review and verify religious content against trusted references; do not auto-repair mojibake or alter wording by inference.
2. Add editorial status/verification metadata and completeness checks for references/translations before publishing.
3. Consider generating a commandment search index and explicit topic taxonomy after the dataset is validated.
4. Add route metadata/OG tags and crawl internal links; validate accessibility and RTL behavior in real browsers and assistive technology.
5. Add automated data-schema/content checks and a repeatable static build/deploy check if the project workflow permits.

## 10. Important files
- `index.html`: HTML shell and SEO basics.
- `app.js`: templates, hash router, fetch/render logic, search/filter, clipboard and locale controls.
- `styles.css`: visual design, typography, responsive and reduced-motion rules.
- `data/surahs.json`: all 114 Surah names/numbers.
- `data/ahkamat/surah-N.json`: per-Surah commandments and translations.
- `data/duas.json`: category links and canonical dua content/metadata.
- `netlify.toml`: static publish directory.
- `README.md`: project/deploy and content model notes.

## Compact summary
- Total Surahs included in catalogue: 114 (10 populated with 106 commandments).
- Total commandments: 106.
- Total Dua categories: 7.
- Total unique duas: 38.
- Pages/sections: 6 route kinds (home, directory, Surah detail, duas, purpose, about; plus not-found state).
- Main technologies: HTML, CSS, vanilla JavaScript, JSON.
- Main storage: static local JSON fetched by browser.
- Build status: no build command or dependencies; static source appears Netlify-ready. Runtime build/test was not run, as requested audit is inspection-only.
