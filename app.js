(() => {
  const app = document.getElementById('app')
  const copy = {
    en: {
      home: 'Home',
      surahs: 'Surahs',
      topics: 'Explore by Topic',
      topicsUrdu: 'موضوعات کے لحاظ سے احکامات',
      topicLoading: 'Loading topics…',
      browseBySurah: 'Explore by Surah',
      browseByTopic: 'Explore by Topic',
      topicDescription: 'Explore Quranic commandments through carefully selected themes.',
      topicCountLabel: 'commandments',
      topicAyahCountLabel: 'related Ayahs',
      topicLoadError: 'Topics could not be loaded. Please try again later.',
      backToTopics: 'All topics',
      originalSurah: 'View in Surah',
      commandmentSearch: 'Search',
      commandmentSearchTitle: 'Search Quranic Commandments',
      commandmentSearchDescription: 'Search the complete collection by verse text, translation, Surah, title, or reference.',
      commandmentSearchPlaceholder: 'Search commandments in English, Urdu or Arabic…',
      commandmentSearchPrompt: 'Enter a word, phrase, Surah name, or Ayah reference to begin.',
      commandmentSearchLoading: 'Searching all commandments…',
      commandmentSearchCount: 'matching commandments',
      commandmentSearchNone: 'No commandments found. Try another word or phrase.',
      commandmentSearchError: 'Commandments could not be loaded for search. Please try again later.',
      clearSearch: 'Clear search',
      shareAyah: 'Share Ayah',
      shareDownloadAyah: 'Share / Download Ayah',
      shareDownloadDua: 'Share / Download Dua',
      shareCardTitle: 'Share a Quranic reminder',
      shareCardHelp: 'Preview the card, choose a theme, then download or share the reference.',
      cardTheme: 'Card theme',
      emeraldTheme: 'Emerald',
      lightTheme: 'Light',
      downloadImage: 'Download Image',
      shareOnWhatsApp: 'Share on WhatsApp',
      shareNative: 'Share',
      closeDialog: 'Close preview',
      shareCardError: 'The card image could not be created in this browser.',
      shareImageFallback: 'Image downloaded. Attach it in WhatsApp to send it as a picture.',
      dailyGuidance: 'Daily Guidance',
      dailyGuidanceUrdu: 'آج کی قرآنی ہدایت',
      dailyGuidanceSubtitle: 'A reminder from the Quran to reflect upon and live by.',
      dailyDateLabel: 'Today · Asia/Karachi',
      dailyReadFull: 'Read Full Commandment',
      dailyRelatedTopics: 'Explore Related Topic',
      dailyRelatedTopicsPlural: 'Explore Related Topics',
      dailyLoading: 'Preparing today’s guidance…',
      dailyUnavailable: 'Today’s guidance is temporarily unavailable.',
      dailyEmpty: 'Daily guidance is not available right now.',
      dedication: 'Dedication',
      dedicationPageTitle: 'A Dedication of Prayer',
      dedicationBanner: 'Dedicated as Sadqah-e-Jariyah to all Muslims who have passed away, especially my beloved late father.',
      readDedication: 'Read the Dedication',
      duas: 'Prophetic Duas',
      purpose: 'Purpose',
      about: 'About',
      explore: 'Explore Surahs',
      homeEyebrow: 'A thoughtful companion to your Quran reading',
      heroFirst: 'Words of guidance,',
      heroSecond: 'for a life of purpose.',
      tagline: 'Understanding and Following the Commandments of Allah.',
      heroDescription: 'A calm place to explore the commandments of Allah in the Holy Quran.',
      browse: 'Browse the Surahs',
      purposeLink: 'Our purpose',
      verifiedNote: 'Only researched and verified content will be published.',
      purposeEyebrow: 'Our purpose',
      purposeTitle: 'Making Quranic guidance easier to understand and follow.',
      purposeText: 'A verse-by-verse collection of Quranic commandments with authentic references.',
      mission: 'As Muslims, we have a responsibility to understand and follow the commandments of Allah Almighty.',
      moreAbout: 'Read our full mission and vision',
      purposePageEyebrow: 'Purpose of Ayat-e-Hidayat',
      purposePageTitle: 'Helping every reader understand and live by Quranic guidance.',
      purposePageLead: 'Ayat-e-Hidayat brings selected Quranic commandments into a clear, calm, Ayah-based reading experience.',
      purposePageSections: [
        {
          title: 'Why this platform exists',
          paragraphs: [
            'The Holy Quran is guidance for life, not only a text to be recited. Our purpose is to help readers discover, understand, and remember the commandments of Allah with their relevant Surah and Ayah references.',
            'Ayat-e-Hidayat does not replace personal study, trusted translations, or the guidance of qualified scholars. It is a focused companion for reflection and practical learning.'
          ]
        },
        {
          title: 'From the Quran to daily life',
          paragraphs: [
            'The collection presents each commandment in a simple form, alongside its Quranic Arabic, Urdu and English meanings, references, and short explanations. The aim is to move from knowing a verse to understanding and applying its guidance.',
            'Where Quranic text or a reference has not been carefully verified, it is kept out of the public collection.'
          ]
        },
        {
          title: 'Careful, source-conscious content',
          paragraphs: [
            'Every published entry should have a clear Ayah reference and traceable source information. Editorial explanations are kept distinct from the exact words of the Quran.',
            'This careful distinction helps the reader reflect on the meaning without presenting a personal explanation as divine wording.'
          ]
        }
      ],
      purposePrinciplesTitle: 'Our guiding principles',
      purposePrinciples: [
        ['Authenticity', 'Quranic text and references are presented only after verification.'],
        ['Clarity', 'Complex guidance is organised around readable Surahs, Ayahs, meanings, and explanations.'],
        ['Practice', 'Reflection is connected with practical, responsible application in everyday life.'],
        ['Respect', 'Editorial interpretations remain clearly separate from the words of Allah.']
      ],
      importanceTitle: 'Read, reflect, practise',
      importanceText: 'Understanding Quranic guidance helps make reading a thoughtful part of everyday life.',
      browseEyebrow: 'The Holy Quran',
      browseTitle: 'Browse Surah by Surah',
      browseDescription: 'Choose from all 114 Surahs to begin exploring.',
      viewAll: 'View all Surahs',
      searchTitle: 'Explore the Surahs',
      searchDescription: 'Choose a Surah to explore the commandments associated with it.',
      searchPlaceholder: 'Search by Surah name or number',
      shown: 'shown',
      noMatches: 'No Surahs found',
      noMatchesText: 'Try another name or Surah number.',
      allSurahs: 'All Surahs',
      commandment: 'commandments',
      commandmentSingular: 'commandment',
      loading: 'Loading Surah content…',
      emptyTitle: 'Ahkamat for this Surah will be added soon.',
      emptyText: 'Entries will be published here after careful research and verification.',
      detailEyebrow: 'Verified collection',
      detailTitle: 'Commandments in this Surah',
      entry: 'entry',
      entries: 'entries',
      ayahReference: 'Surah & Ayah',
      urduTranslation: 'Simple Urdu translation',
      englishTranslation: 'Simple English translation',
      quranicArabic: 'Quranic Arabic',
      urduMeaning: 'Urdu meaning — editorial rendering',
      englishMeaning: 'English meaning — editorial rendering',
      urduExplanation: 'A short explanation',
      englishExplanation: 'A short explanation',
      editorialNote: 'Editorial note',
      editorialDisclaimer: 'Editorial translations and notes',
      sources: 'Sources & attribution',
      aboutEyebrow: 'About Ayat-e-Hidayat',
      aboutTitle: 'A journey toward understanding Quranic guidance.',
      aboutLead: 'Collecting Quranic commandments, Ayah by Ayah, for thoughtful reading.',
      contactTitle: 'Talk, suggest, or contribute research',
      contactDescription: 'If you would like to talk, share a suggestion, or offer research for consideration on Ayat-e-Hidayat, please contact Dilawar on WhatsApp.',
      contactWhatsApp: 'Contact Dilawar on WhatsApp',
      contactWhatsAppShort: 'WhatsApp · Dilawar',
      missionHeading: 'Our Mission',
      missionParagraphs: [
        'As Muslims, it is our responsibility to understand and follow the commandments of Allah Almighty.',
        'The Holy Quran was revealed not only to be recited for rewards, but also to be understood, reflected upon, and followed in our daily lives.',
        'Ayat-e-Hidayat is an initiative to collect and organize the commandments of Allah from the Holy Quran, Ayah by Ayah, with authentic Quranic references.',
        'Our goal is to make these commandments easily accessible so that everyone can read, understand, and implement Allah’s guidance in their lives, even if they do not have enough time to study the entire Quran with translation.'
      ],
      visionHeading: 'Our Vision',
      visionText: 'To make the commandments of the Holy Quran accessible to every Muslim and encourage a life guided by the teachings of Allah Almighty.',
      notFound: 'Page not found',
      notFoundText: 'The page you’re looking for doesn’t exist.',
      returnHome: 'Return home',
      footerLine: 'Understanding and following the commandments of Allah.',
      footerNote: 'Carefully collected. Shared with care.',
      loadingError: 'The Surah content could not be loaded. Please try again later.',
      dataError: 'Surah information could not be loaded. Check that the local JSON file is available.',
      duasTitle: 'Prophetic Duas',
      loadingDuas: 'Loading supplications…',
      duasTagline: 'Supplications taught by the Messenger ﷺ or recited by him',
      duasDescription: 'Explore supplications from the Quran and narrations, with attribution and source details kept distinct.',
      allCategories: 'All categories',
      browseCategories: 'Browse the categories',
      duaSearchPlaceholder: 'Search Arabic, transliteration, title or meaning',
      duaCountLabel: 'unique supplications',
      category: 'Category',
      dua: 'supplication',
      duasPlural: 'supplications',
      whenToRecite: 'When to recite / context',
      transliteration: 'Transliteration',
      reference: 'Reference',
      narrator: 'Narrator',
      authenticity: 'Authenticity grading',
      evidenceType: 'Evidence classification',
      copyArabic: 'Copy Arabic',
      copyComplete: 'Copy complete dua',
      copied: 'Copied',
      copyFailed: 'Could not copy. Please select and copy the text.',
      noDuaMatches: 'No supplications found',
      noDuaMatchesText: 'Try a different search or category.',
      backToDuas: 'All Prophetic Duas',
      loadDuasError: 'The dua collection could not be loaded. Please try again later.'
    },
    ur: {
      home: 'صفحۂ اول',
      surahs: 'سورتیں',
      topics: 'موضوعات کے لحاظ سے',
      topicsUrdu: 'موضوعات کے لحاظ سے احکامات',
      topicLoading: 'موضوعات لوڈ ہو رہے ہیں…',
      browseBySurah: 'سورت کے لحاظ سے دیکھیں',
      browseByTopic: 'موضوع کے لحاظ سے دیکھیں',
      topicDescription: 'قرآنی احکامات کو منتخب موضوعات کے ذریعے دریافت کریں۔',
      topicCountLabel: 'احکامات',
      topicAyahCountLabel: 'متعلقہ آیات',
      topicLoadError: 'موضوعات لوڈ نہیں ہو سکے۔ براہِ کرم بعد میں دوبارہ کوشش کریں۔',
      backToTopics: 'تمام موضوعات',
      originalSurah: 'سورت میں دیکھیں',
      commandmentSearch: 'تلاش',
      commandmentSearchTitle: 'قرآنی احکامات تلاش کریں',
      commandmentSearchDescription: 'آیات کے متن، ترجمے، سورت، عنوان یا حوالے سے مکمل مجموعے میں تلاش کریں۔',
      commandmentSearchPlaceholder: 'احکامات کو انگریزی، اردو یا عربی میں تلاش کریں…',
      commandmentSearchPrompt: 'تلاش شروع کرنے کے لیے کوئی لفظ، عبارت، سورت یا آیت کا حوالہ لکھیں۔',
      commandmentSearchLoading: 'تمام احکامات تلاش ہو رہے ہیں…',
      commandmentSearchCount: 'متعلقہ احکامات',
      commandmentSearchNone: 'کوئی حکم نہیں ملا۔ دوسرا لفظ یا عبارت آزمائیں۔',
      commandmentSearchError: 'تلاش کے لیے احکامات لوڈ نہیں ہو سکے۔ براہِ کرم بعد میں دوبارہ کوشش کریں۔',
      clearSearch: 'تلاش صاف کریں',
      shareAyah: 'آیت شیئر کریں',
      shareDownloadAyah: 'آیت شیئر / ڈاؤن لوڈ کریں',
      shareDownloadDua: 'دعا شیئر / ڈاؤن لوڈ کریں',
      shareCardTitle: 'قرآنی یاد دہانی شیئر کریں',
      shareCardHelp: 'کارڈ دیکھیں، تھیم منتخب کریں، پھر تصویر ڈاؤن لوڈ یا حوالہ شیئر کریں۔',
      cardTheme: 'کارڈ کا تھیم',
      emeraldTheme: 'زمردی',
      lightTheme: 'ہلکا',
      downloadImage: 'تصویر ڈاؤن لوڈ کریں',
      shareOnWhatsApp: 'واٹس ایپ پر شیئر کریں',
      shareNative: 'شیئر کریں',
      closeDialog: 'پیش منظر بند کریں',
      shareCardError: 'اس براؤزر میں کارڈ کی تصویر نہیں بن سکی۔',
      shareImageFallback: 'تصویر ڈاؤن لوڈ ہو گئی۔ بھیجنے کے لیے اسے واٹس ایپ میں منسلک کریں۔',
      dailyGuidance: 'آج کی قرآنی ہدایت',
      dailyGuidanceUrdu: 'آج کی قرآنی ہدایت',
      dailyGuidanceSubtitle: 'قرآن کی ایک یاد دہانی جس پر غور کریں اور عمل کریں۔',
      dailyDateLabel: 'آج · ایشیا/کراچی',
      dailyReadFull: 'مکمل حکم پڑھیں',
      dailyRelatedTopics: 'متعلقہ موضوع دیکھیں',
      dailyRelatedTopicsPlural: 'متعلقہ موضوعات دیکھیں',
      dailyLoading: 'آج کی ہدایت تیار ہو رہی ہے…',
      dailyUnavailable: 'آج کی ہدایت عارضی طور پر دستیاب نہیں۔',
      dailyEmpty: 'اس وقت روزانہ کی ہدایت دستیاب نہیں۔',
      dedication: 'ایصالِ ثواب',
      dedicationPageTitle: 'ایک دعا اور ایصالِ ثواب کی نیت',
      dedicationBanner: 'تمام مرحوم مسلمانوں، بالخصوص میرے پیارے مرحوم والد کے لیے صدقۂ جاریہ کی نیت سے۔',
      readDedication: 'ایصالِ ثواب کی دعا پڑھیں',
      duas: 'نبوی دعائیں',
      purpose: 'مقصد',
      about: 'تعارف',
      explore: 'سورتیں دیکھیں',
      homeEyebrow: 'قرآن کے مطالعے کا ایک پُرسکون ساتھی',
      heroFirst: 'ہدایت کے الفاظ،',
      heroSecond: 'زندگی کے لیے',
      tagline: 'Understanding and Following the Commandments of Allah.',
      heroDescription: 'قرآنِ پاک کے احکامات کو سمجھنے کے لیے ایک پُرسکون جگہ۔',
      browse: 'سورتیں دریافت کریں',
      purposeLink: 'ہمارا مقصد',
      verifiedNote: 'صرف تحقیق اور تصدیق شدہ مواد شامل کیا جائے گا۔',
      purposeEyebrow: 'ہمارا مقصد',
      purposeTitle: 'قرآنی ہدایت کو سمجھنا اور اس پر عمل آسان بنانا۔',
      purposeText: 'قرآنِ پاک کے احکامات کا آیت بہ آیت مستند حوالوں کے ساتھ مجموعہ۔',
      mission: 'بحیثیت مسلمان، ہم سب کی ذمہ داری ہے کہ اللہ تعالیٰ کے احکامات کو سمجھیں اور اپنی زندگیوں میں ان پر عمل کریں۔',
      moreAbout: 'مکمل مشن اور وژن پڑھیں',
      purposePageEyebrow: 'آیاتِ ہدایت کا مقصد',
      purposePageTitle: 'ہر قاری کو قرآنی ہدایت سمجھنے اور اس پر عمل کرنے میں مدد۔',
      purposePageLead: 'آیاتِ ہدایت منتخب قرآنی احکامات کو واضح، پُرسکون اور آیت وار مطالعے کا طریقہ فراہم کرتی ہے۔',
      purposePageSections: [
        {
          title: 'یہ پلیٹ فارم کیوں ہے',
          paragraphs: [
            'قرآنِ پاک زندگی کی ہدایت ہے، صرف تلاوت کی جانے والی نصوص کا مجموعہ نہیں۔ ہمارا مقصد قاری کو متعلقہ سورۃ اور آیت کی مستند حوالہ جات کے ساتھ اللہ تعالیٰ کے احکامات دریافت کرنے، سمجھنے اور یاد رکھنے میں مدد دینا ہے۔',
            'آیاتِ ہدایت باقاعدہ مطالعے، مستند تراجم یا اہلِ علم کی رہنمائی کا متبادل نہیں۔ یہ غور و فکر اور عملی تربیت کے لیے ایک مرکوز ہم سفر ہے۔'
          ]
        },
        {
          title: 'قرآن سے روزمرہ زندگی تک',
          paragraphs: [
            'ہر حکم کو آسان انداز میں قرآنِ پاک کی عربی نص، اردو اور انگریزی مفہوم، حوالہ جات اور مختصر وضاحتوں کے ساتھ پیش کیا جاتا ہے۔ مقصد صرف آیت کو جاننا نہیں، بلکہ اس کی ہدایت کو سمجھنا اور اس پر عمل کرنا ہے۔',
            'قرآن کی کوئی عبارت یا آیت کا حوالہ اگر احتیاط سے تصدیق نہ کیا جا سکے تو اسے عوامی مجموعے میں شامل نہیں کیا جاتا۔'
          ]
        },
        {
          title: 'احتیاط اور ماخذ کی بنیاد',
          paragraphs: [
            'شائع ہونے والی ہر اندراج میں واضح آیت کا حوالہ اور قابلِ جانچ ماخذ کی معلومات ہونی چاہیے۔ ادارتی وضاحت کو قرآن کی اصل الفاظ سے الگ رکھا جاتا ہے۔',
            'یہ واضح امتیاز قاری کو معنی پر غور کرنے میں مدد دیتا ہے اور کسی ذاتی وضاحت کو اللہ کے کلام کے طور پر پیش ہونے سے بچاتا ہے۔'
          ]
        }
      ],
      purposePrinciplesTitle: 'ہمارے بنیادی اصول',
      purposePrinciples: [
        ['مستندیت', 'قرآنی عبارت اور حوالہ جات صرف تصدیق کے بعد پیش کیے جاتے ہیں۔'],
        ['وضاحت', 'پیچیدہ ہدایت کو سورت، آیت، مفہوم اور وضاحت کے ساتھ مرتب کیا جاتا ہے۔'],
        ['عمل', 'غور و فکر کو روزمرہ زندگی میں ذمہ دار اور عملی اطلاق کے ساتھ جوڑا جاتا ہے۔'],
        ['احترام', 'ادارتی تشریحات اللہ کے کلام سے واضح طور پر الگ رہتی ہیں۔']
      ],
      importanceTitle: 'مطالعہ، غور و فکر، عمل',
      importanceText: 'قرآنی ہدایت کو سمجھنا مطالعے کو روزمرہ زندگی کا بامقصد حصہ بنانے میں مدد دیتا ہے۔',
      browseEyebrow: 'قرآنِ کریم',
      browseTitle: 'سورت وار مطالعہ',
      browseDescription: 'مطالعہ شروع کرنے کے لیے ۱۱۴ سورتوں میں سے منتخب کریں۔',
      viewAll: 'تمام سورتیں دیکھیں',
      searchTitle: 'سورتیں دریافت کریں',
      searchDescription: 'کسی سورت کو منتخب کریں اور اس سے متعلق احکامات دیکھیں۔',
      searchPlaceholder: 'سورت کے نام یا نمبر سے تلاش کریں',
      shown: 'نتائج',
      noMatches: 'کوئی سورت نہیں ملی',
      noMatchesText: 'دوسرا نام یا نمبر تلاش کریں۔',
      allSurahs: 'تمام سورتیں',
      commandment: 'احکامات',
      commandmentSingular: 'حکم',
      loading: 'سورت کا مواد لوڈ ہو رہا ہے…',
      emptyTitle: 'اس سورت کے احکامات جلد شامل کیے جائیں گے۔',
      emptyText: 'تحقیق اور تصدیق کے بعد مواد یہاں شائع کیا جائے گا۔',
      detailEyebrow: 'تصدیق شدہ مواد',
      detailTitle: 'اس سورت کے احکامات',
      entry: 'اندراج',
      entries: 'اندراجات',
      ayahReference: 'سورۃ و آیت',
      urduTranslation: 'آسان اردو ترجمہ',
      englishTranslation: 'سادہ انگریزی ترجمہ',
      quranicArabic: 'قرآنی عربی',
      urduMeaning: 'اردو مفہوم — ادارتی ترجمہ',
      englishMeaning: 'انگریزی مفہوم — ادارتی ترجمہ',
      urduExplanation: 'مختصر وضاحت',
      englishExplanation: 'مختصر انگریزی وضاحت',
      editorialNote: 'ادارتی نوٹ',
      editorialDisclaimer: 'ادارتی تراجم اور وضاحت',
      sources: 'مستند ماخذ اور مترجم',
      aboutEyebrow: 'آیاتِ ہدایت',
      aboutTitle: 'قرآنی ہدایت کو سمجھنے کا سفر',
      aboutLead: 'قرآنِ پاک کے احکامات کو آیت بہ آیت پڑھنے کی ایک کاوش۔',
      contactTitle: 'بات کریں، مشورہ دیں یا تحقیق میں حصہ لیں',
      contactDescription: 'اگر آپ بات کرنا، کوئی مشورہ دینا، یا آیاتِ ہدایت کے لیے اپنی تحقیق زیرِ غور پیش کرنا چاہتے ہیں تو دلاور سے واٹس ایپ پر رابطہ کریں۔',
      contactWhatsApp: 'واٹس ایپ پر دلاور سے رابطہ کریں',
      contactWhatsAppShort: 'واٹس ایپ · دلاور',
      missionHeading: 'ہمارا مشن',
      missionParagraphs: [
        'بحیثیت مسلمان، ہم سب کی ذمہ داری ہے کہ اللہ تعالیٰ کے احکامات کو سمجھیں اور اپنی زندگیوں میں ان پر عمل کریں۔',
        'قرآنِ پاک صرف تلاوت اور ثواب حاصل کرنے کے لیے نازل نہیں ہوا، بلکہ اس کا مقصد اسے سمجھنا، اس میں غور و فکر کرنا اور اس کی تعلیمات کو اپنی زندگی میں نافذ کرنا بھی ہے۔',
        'آیاتِ ہدایت ایک ایسی کاوش ہے جس کے ذریعے ہم قرآنِ پاک کا آیت بہ آیت مطالعہ کرتے ہوئے اللہ تعالیٰ کے احکامات کو مستند قرآنی حوالہ جات کے ساتھ جمع اور منظم کر رہے ہیں۔',
        'ہمارا مقصد ان احکامات کو ہر مسلمان کے لیے آسانی سے قابلِ رسائی بنانا ہے تاکہ وہ انہیں پڑھ سکیں، سمجھ سکیں اور اپنی زندگی میں ان پر عمل کر سکیں، چاہے ان کے پاس پورا قرآن ترجمے کے ساتھ پڑھنے کے لیے وقت کم ہی کیوں نہ ہو۔'
      ],
      visionHeading: 'ہمارا وژن',
      visionText: 'قرآنِ پاک کے احکامات کو ہر مسلمان تک پہنچانا اور اللہ تعالیٰ کی ہدایت کے مطابق زندگی گزارنے کی ترغیب دینا۔',
      notFound: 'صفحہ نہیں ملا',
      notFoundText: 'مطلوبہ صفحہ موجود نہیں۔',
      returnHome: 'صفحۂ اول پر جائیں',
      footerLine: 'اللہ کے احکامات کو سمجھنا اور ان پر عمل کرنا۔',
      footerNote: 'احتیاط سے جمع کیا گیا، خیرخواہی سے پیش کیا گیا۔',
      loadingError: 'سورت کا مواد لوڈ نہیں ہو سکا۔ براہِ کرم بعد میں دوبارہ کوشش کریں۔',
      dataError: 'سورتوں کی معلومات لوڈ نہیں ہو سکیں۔ مقامی JSON فائل کی دستیابی چیک کریں۔',
      duasTitle: 'أدعية نبوية — نبوی دعائیں',
      loadingDuas: 'دعائیں لوڈ ہو رہی ہیں…',
      duasTagline: 'دعائیں جو رسول اللہ ﷺ نے سکھائیں یا خود پڑھیں',
      duasDescription: 'قرآن اور روایات کی دعائیں، واضح نسبت اور ماخذ کے ساتھ ملاحظہ کریں۔',
      allCategories: 'تمام اقسام',
      browseCategories: 'اقسام دیکھیں',
      duaSearchPlaceholder: 'عربی، تلفظ، عنوان یا مفہوم سے تلاش کریں',
      duaCountLabel: 'منفرد دعائیں',
      category: 'قسم',
      dua: 'دعا',
      duasPlural: 'دعائیں',
      whenToRecite: 'موقع / سیاق',
      transliteration: 'تلفظ',
      reference: 'حوالہ',
      narrator: 'راوی',
      authenticity: 'درجۂ صحت',
      evidenceType: 'نسبت کی نوعیت',
      copyArabic: 'عربی نقل کریں',
      copyComplete: 'مکمل دعا نقل کریں',
      copied: 'نقل ہوگیا',
      copyFailed: 'نقل نہیں ہو سکا۔ براہِ کرم متن منتخب کرکے نقل کریں۔',
      noDuaMatches: 'کوئی دعا نہیں ملی',
      noDuaMatchesText: 'دوسری عبارت یا قسم سے تلاش کریں۔',
      backToDuas: 'تمام نبوی دعائیں',
      loadDuasError: 'دعاؤں کا مجموعہ لوڈ نہیں ہو سکا۔ براہِ کرم بعد میں دوبارہ کوشش کریں۔'
    }
  }

  let surahs = []
  let duasData = null
  let topicsData = null
  let searchIndexPromise = null
  const commandmentCache = new Map()
  const shareableCommandments = new Map()
  let shareReturnFocus = null
  let activeShareCanvas = null
  let activeShareRecord = null
  let activeShareTheme = 'emerald'
  let dailyGuidanceTimer = null
  let activeDailyDateKey = null

  const dedicationText = {
    english: {
      title: 'A Dedication of Prayer',
      paragraphs: [
        'This humble effort is dedicated as Sadqah-e-Jariyah to all Muslims who have passed away, and especially to my beloved late father.',
        'May Allah forgive them, shower His mercy upon them, illuminate their graves, grant them the highest place in Jannah, and accept this effort as a means of continuous benefit for those who read, learn, share, and act upon His guidance.',
        'May every word of goodness found here become a source of benefit, and may Allah accept this humble effort solely for His sake.'
      ],
      closing: 'Ameen.'
    },
    urdu: {
      title: 'ایک دعا اور ایصالِ ثواب کی نیت',
      paragraphs: [
        'یہ چھوٹی سی کوشش تمام مرحوم مسلمانوں، بالخصوص میرے پیارے مرحوم والد، کے لیے صدقۂ جاریہ کی نیت سے پیش ہے۔',
        'اللہ تعالیٰ ان سب کی مغفرت فرمائے، ان پر اپنی رحمت نازل فرمائے، ان کی قبروں کو نور سے بھر دے، انہیں جنت الفردوس میں اعلیٰ مقام عطا فرمائے، اور اس کوشش کو ان لوگوں کے لیے مسلسل فائدے کا ذریعہ بنائے جو یہاں سے اللہ کی ہدایت پڑھیں، سیکھیں، دوسروں تک پہنچائیں اور اپنی زندگیوں میں اس پر عمل کریں۔',
        'اللہ اس معمولی کوشش کو صرف اپنی رضا کے لیے قبول فرمائے۔'
      ],
      closing: 'آمین۔'
    }
  }
  const whatsappNumber = '923016728444'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`
  let locale = 'en'
  let renderId = 0

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char])

  const currentPath = () => location.hash.replace(/^#\/?/, '').split('?')[0].split('/').filter(Boolean)

  const currentSearchQuery = () => {
    const queryString = location.hash.split('?')[1] || ''
    return new URLSearchParams(queryString).get('q') || ''
  }

  const routeHref = (path) => `#/${path}`

  function dedicationBanner() {
    const text = copy[locale]
    const isUrdu = locale === 'ur'
    return `<aside class="dedication-banner" lang="${locale}" dir="${isUrdu ? 'rtl' : 'ltr'}"><p>${text.dedicationBanner}</p><a href="${routeHref('dedication')}">${text.readDedication}<span aria-hidden="true">↗</span></a></aside>`
  }

  function brand(compact = false) {
    return `<a class="brand${compact ? ' brand--compact' : ''}" href="${routeHref('')}" aria-label="Ayat-e-Hidayat home">
      <span class="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" focusable="false">
        <path d="M20 5V2.8M13.9 7.5 12.4 6M26.1 7.5 27.6 6" fill="none" stroke="#d5b779" stroke-linecap="round" stroke-width="1.5"/>
        <circle cx="20" cy="11" r="3.2" fill="#d5b779"/>
        <path d="M20 22.1c-3.1-3.1-8-4.1-13.2-3.4v12.7c5.1-.7 10.1.3 13.2 3.4 3.1-3.1 8.1-4.1 13.2-3.4V18.7c-5.2-.7-10.1.3-13.2 3.4Z" fill="#fffefa" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"/>
        <path d="M20 22.1v12.7m-10-12.3c2.9-.1 5.3.4 7.4 1.4m-7.4 2.8c2.9-.1 5.3.4 7.4 1.4m12.6-5.6c-2.9-.1-5.3.4-7.4 1.4m7.4 2.8c-2.9-.1-5.3.4-7.4 1.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1"/>
      </svg></span>
      <span class="brand-copy" dir="ltr"><span class="brand-name">Ayat-e-Hidayat</span><span class="brand-urdu" lang="ur" dir="rtl">آیاتِ ہدایت</span></span>
    </a>`
  }

  function pageHeader(text) {
    return `<span class="eyebrow"><span class="eyebrow-line"></span>${text}</span>`
  }

  function commandmentSearchMarkup(query = '') {
    const text = copy[locale]
    return `<form class="commandment-search-form" id="commandment-search-form" role="search">
      <div class="commandment-search-field"><label class="sr-only" for="commandment-search-input">${escapeHtml(text.commandmentSearchPlaceholder)}</label><span class="commandment-search-icon" aria-hidden="true">⌕</span><input id="commandment-search-input" type="search" value="${escapeHtml(query)}" placeholder="${escapeHtml(text.commandmentSearchPlaceholder)}" autocomplete="off" dir="auto"><button class="commandment-search-clear" id="commandment-search-clear" type="button" aria-label="${text.clearSearch}" hidden>×</button></div>
      <button class="button button-primary commandment-search-submit" type="submit">${text.commandmentSearch}<span aria-hidden="true">⌕</span></button>
    </form><div class="commandment-search-meta" id="commandment-search-meta" aria-live="polite">${text.commandmentSearchPrompt}</div><div class="commandment-search-results ahkam-list" id="commandment-search-results" aria-live="polite"></div>`
  }

  function header() {
    const text = copy[locale]
    return `<header class="site-header"><div class="header-inner page-container">
      ${brand()}
      <nav class="main-nav" aria-label="${locale === 'ur' ? 'بنیادی نیویگیشن' : 'Main navigation'}">
        <a href="${routeHref('')}" data-route="home">${text.home}</a>
        <a href="${routeHref('surahs')}" data-route="surahs">${text.surahs}</a>
        <a href="${routeHref('topics')}" data-route="topics">${text.topics}</a>
        <a href="${routeHref('duas')}" data-route="duas"><span lang="ar" dir="rtl">أدعية نبوية</span><span class="nav-dua-divider" aria-hidden="true"> | </span>${text.duas}</a>
        <a href="${routeHref('purpose')}" data-route="purpose">${text.purpose}</a>
        <a href="${routeHref('about')}" data-route="about">${text.about}</a>
        <a class="main-nav-search" href="${routeHref('search')}" data-route="search">⌕ ${text.commandmentSearch}</a>
      </nav>
      <div class="header-actions">
        <button class="language-toggle" type="button" data-action="toggle-language" aria-label="${locale === 'en' ? 'اردو میں دیکھیں' : 'Switch to English'}">${locale === 'en' ? 'اردو' : 'EN'}</button>
        <a class="header-cta" href="${routeHref('surahs')}">${text.explore}<span aria-hidden="true">↗</span></a>
      </div>
    </div></header>${dedicationBanner()}`
  }

  function footer() {
    const text = copy[locale]
    return `<footer class="site-footer"><div class="page-container footer-inner">
      <div>${brand(true)}<p class="footer-tagline" lang="${locale}" dir="${locale === 'ur' ? 'rtl' : 'ltr'}">${text.footerLine}</p></div>
      <nav class="footer-links" aria-label="${locale === 'ur' ? 'اضافی صفحات' : 'Footer navigation'}">
        <a href="${routeHref('')}" data-route="home">${text.home}</a>
        <a href="${routeHref('surahs')}">${text.surahs}</a>
        <a href="${routeHref('search')}" data-route="search">⌕ ${text.commandmentSearch}</a>
        <a href="${routeHref('topics')}" data-route="topics">${text.topics}</a>
        <a href="${routeHref('duas')}"><span lang="ar" dir="rtl">أدعية نبوية</span><span class="nav-dua-divider" aria-hidden="true"> | </span>${text.duas}</a>
        <a href="${routeHref('purpose')}">${text.purpose}</a>
        <a href="${routeHref('about')}">${text.about}</a>
        <a href="${routeHref('dedication')}">${text.dedication}</a>
        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">${text.contactWhatsAppShort}<span aria-hidden="true">↗</span></a>
      </nav>
      <p class="footer-note" lang="${locale}" dir="${locale === 'ur' ? 'rtl' : 'ltr'}">${text.footerNote}</p>
    </div></footer>`
  }

  function surahCard(surah) {
    return `<a class="surah-card" href="${routeHref(`surah/${surah.number}`)}" aria-label="${escapeHtml(surah.nameEnglish)} — ${escapeHtml(surah.nameUrdu)}">
      <span class="surah-number">${String(surah.number).padStart(3, '0')}</span>
      <span class="surah-card-copy">
        <span class="surah-arabic" lang="ar" dir="rtl">${escapeHtml(surah.nameArabic)}</span>
        <span class="surah-english" lang="en" dir="ltr">${escapeHtml(surah.nameEnglish)}</span>
        <span class="surah-urdu" lang="ur" dir="rtl">${escapeHtml(surah.nameUrdu)}</span>
      </span>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </a>`
  }

  function homePage() {
    const text = copy[locale]
    const isUrdu = locale === 'ur'
    return `<section class="hero-section"><div class="hero-pattern" aria-hidden="true"></div>
      <div class="page-container hero-grid">
        <div class="hero-copy">
          ${pageHeader(text.homeEyebrow)}
          <h1>${text.heroFirst}<br><span>${text.heroSecond}</span></h1>
          <p class="hero-tagline" lang="en" dir="ltr">${text.tagline}</p>
          <p class="hero-description">${text.heroDescription}</p>
          <div class="hero-actions"><a class="button button-primary" href="${routeHref('surahs')}">${text.browse}<span aria-hidden="true">→</span></a><a class="text-link" href="${routeHref('purpose')}">${text.purposeLink}<span aria-hidden="true">↓</span></a></div>
          <p class="hero-footnote"><span class="small-mark" aria-hidden="true">✦</span>${text.verifiedNote}</p>
        </div>
        <div class="hero-art" aria-hidden="true"><div class="art-ring art-ring-outer"></div><div class="art-ring art-ring-middle"></div>
          <div class="art-center"><span class="art-sparkle">✳</span><span class="art-arabic" lang="ar" dir="rtl">آیاتِ ہدایت</span><span class="art-rule"></span><span class="art-caption" lang="en" dir="ltr">REFLECTION · UNDERSTANDING · PRACTICE</span></div>
        </div>
      </div>
    </section>
    <section class="daily-guidance-section"><div class="page-container"><header class="daily-guidance-heading">${pageHeader(text.dailyGuidance)}<h2>${text.dailyGuidance}</h2><p lang="ur" dir="rtl">${text.dailyGuidanceUrdu}</p><span>${text.dailyGuidanceSubtitle}</span></header><div class="daily-guidance-content" id="daily-guidance-content" aria-live="polite"><p class="daily-guidance-status">${text.dailyLoading}</p></div></div></section>
    <section class="commandment-search-section"><div class="page-container"><div class="commandment-search-heading">${pageHeader(text.commandmentSearch)}<h2>${text.commandmentSearchTitle}</h2><p>${text.commandmentSearchDescription}</p></div>${commandmentSearchMarkup()}</div></section>
    <section class="purpose-section section-pad" id="purpose"><div class="page-container purpose-grid">
      <div><span class="eyebrow"><span class="eyebrow-line"></span>${text.purposeEyebrow}</span><h2 class="section-title">${text.purposeTitle}</h2></div>
      <div class="purpose-copy"><p>${text.purposeText}</p><p class="purpose-mission">${text.mission}</p><a class="inline-link" href="${routeHref('about')}">${text.moreAbout}<span aria-hidden="true">→</span></a></div>
    </div><div class="page-container value-grid">
      <article class="value-card"><span class="value-icon" aria-hidden="true">⌕</span><h3>${text.browseTitle}</h3><p>${text.browseDescription}</p></article>
      <article class="value-card"><span class="value-icon" aria-hidden="true">✓</span><h3>${isUrdu ? 'تحقیق اور تصدیق' : 'Carefully verified'}</h3><p>${text.verifiedNote}</p></article>
      <article class="value-card"><span class="value-icon" aria-hidden="true">✧</span><h3>${text.importanceTitle}</h3><p>${text.importanceText}</p></article>
    </div></section>
    <section class="browse-section section-pad"><div class="page-container">
      <div class="section-heading-row"><div><span class="eyebrow"><span class="eyebrow-line"></span>${text.browseEyebrow}</span><h2 class="section-title">${text.browseTitle}</h2><p>${text.browseDescription}</p></div><a class="inline-link" href="${routeHref('surahs')}">${text.viewAll}<span aria-hidden="true">→</span></a></div>
      <div class="surah-grid">${surahs.slice(0, 6).map(surahCard).join('')}</div>
    </div></section>`
    + `<section class="explore-methods section-pad"><div class="page-container"><div class="section-heading-row"><div><span class="eyebrow"><span class="eyebrow-line"></span>${text.browse}</span><h2 class="section-title">${isUrdu ? 'قرآنی احکامات دریافت کریں' : 'Explore Quranic Commandments'}</h2><p>${text.topicDescription}</p></div></div><div class="explore-method-grid"><a class="explore-method-card" href="${routeHref('surahs')}"><span class="explore-method-number">01</span><span><strong>${text.browseBySurah}</strong><small lang="ur" dir="rtl">سورت کے لحاظ سے</small></span><span aria-hidden="true">↗</span></a><a class="explore-method-card" href="${routeHref('topics')}"><span class="explore-method-number">02</span><span><strong>${text.browseByTopic}</strong><small lang="ur" dir="rtl">${copy.ur.topicsUrdu}</small></span><span aria-hidden="true">↗</span></a></div></div></section>`
    + `<section class="home-dedication-section"><div class="page-container"><header class="home-dedication-heading">${pageHeader(text.dedication)}<h2>${dedicationText.english.title}</h2></header>${dedicationContentMarkup()}</div></section>`
  }

  function surahsPage() {
    const text = copy[locale]
    return `<section class="directory-page page-container">
      <div class="page-heading">${pageHeader(text.browseEyebrow)}<h1>${text.searchTitle}</h1><p>${text.searchDescription}</p></div>
      <label class="search-field"><span aria-hidden="true">⌕</span><span class="sr-only">${text.searchTitle}</span><input id="surah-search" type="search" placeholder="${text.searchPlaceholder}" autocomplete="off" dir="${locale === 'ur' ? 'rtl' : 'ltr'}"></label>
      <div class="directory-meta"><span>114 ${text.surahs}</span><span id="search-count" aria-live="polite"></span></div>
      <div class="surah-grid directory-grid" id="surah-list"></div>
      <div class="no-results" id="no-results" hidden><span aria-hidden="true">⌕</span><h2>${text.noMatches}</h2><p>${text.noMatchesText}</p></div>
    </section>`
  }

  function aboutPage() {
    const text = copy[locale]
    const isUrdu = locale === 'ur'
    return `<section class="about-page">
      <div class="about-hero"><div class="page-container">${pageHeader(text.aboutEyebrow)}<h1>${text.aboutTitle}</h1><p>${text.aboutLead}</p></div></div>
      <div class="page-container about-content">
        <section class="about-story mission-story"><div><h2 class="section-title">${text.missionHeading}</h2></div>
          <div class="about-prose" lang="${locale}" dir="${locale === 'ur' ? 'rtl' : 'ltr'}">${text.missionParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}</div>
        </section>
        <section class="about-story about-vision"><div><h2 class="section-title">${text.visionHeading}</h2></div>
          <div class="about-prose" lang="${locale}" dir="${locale === 'ur' ? 'rtl' : 'ltr'}"><p>${text.visionText}</p></div>
        </section>
        <div class="about-cta"><div><h2>${isUrdu ? 'مطالعہ شروع کرنے کے لیے تیار ہیں؟' : 'Ready to begin exploring?'}</h2><p>${isUrdu ? 'اپنی پسند کی سورت منتخب کریں۔' : 'Choose a Surah and begin your reading journey.'}</p></div><a class="button button-primary" href="${routeHref('surahs')}">${text.browse}</a></div>
        <section class="about-contact" aria-labelledby="about-contact-title"><div><span class="eyebrow"><span class="eyebrow-line"></span>${isUrdu ? 'رابطہ' : 'Get in touch'}</span><h2 id="about-contact-title">${text.contactTitle}</h2><p lang="${locale}" dir="${isUrdu ? 'rtl' : 'ltr'}">${text.contactDescription}</p><span class="about-contact-name" dir="ltr">Dilawar · +92 301 6728444</span></div><a class="button button-primary about-contact-button" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">↗</span>${text.contactWhatsApp}</a></section>
      </div>
    </section>`
  }

  function dedicationPage() {
    const text = copy[locale]
    const english = dedicationText.english
    const urdu = dedicationText.urdu
    return `<section class="dedication-page page-container"><a class="back-link" href="${routeHref('')}">← ${text.home}</a><header class="dedication-heading">${pageHeader(text.dedication)}<span class="dedication-ornament" aria-hidden="true">✧</span><h1>${english.title}</h1><p lang="ur" dir="rtl">${urdu.title}</p></header>${dedicationContentMarkup()}</section>`
  }

  function dedicationContentMarkup() {
    const english = dedicationText.english
    const urdu = dedicationText.urdu
    return `<div class="dedication-content"><section class="dedication-language dedication-english" lang="en" dir="ltr" aria-labelledby="dedication-english-title"><h2 id="dedication-english-title">${english.title}</h2>${english.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}<p class="dedication-closing"><strong>${english.closing}</strong></p></section><section class="dedication-language dedication-urdu" lang="ur" dir="rtl" aria-labelledby="dedication-urdu-title"><h2 id="dedication-urdu-title">${urdu.title}</h2>${urdu.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}<p class="dedication-closing"><strong>${urdu.closing}</strong></p></section></div>`
  }

  function purposePage() {
    const text = copy[locale]
    const isUrdu = locale === 'ur'
    return `<section class="purpose-page">
      <div class="purpose-hero"><div class="page-container">
        ${pageHeader(text.purposePageEyebrow)}
        <h1>${text.purposePageTitle}</h1>
        <p lang="${locale}" dir="${isUrdu ? 'rtl' : 'ltr'}">${text.purposePageLead}</p>
      </div></div>
      <div class="page-container purpose-content">
        ${text.purposePageSections.map((section) => `<section class="purpose-story">
          <h2 class="section-title">${section.title}</h2>
          <div class="purpose-story-copy" lang="${locale}" dir="${isUrdu ? 'rtl' : 'ltr'}">
            ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
          </div>
        </section>`).join('')}
        <section class="purpose-principles">
          <h2 class="section-title">${text.purposePrinciplesTitle}</h2>
          <div class="purpose-principle-grid">
            ${text.purposePrinciples.map(([title, description]) => `<article class="purpose-principle">
              <span class="value-icon" aria-hidden="true">✦</span>
              <h3>${title}</h3>
              <p>${description}</p>
            </article>`).join('')}
          </div>
        </section>
        <div class="purpose-cta">
          <div><h2>${isUrdu ? 'قرآنی ہدایت دریافت کریں' : 'Explore Quranic guidance'}</h2><p>${isUrdu ? 'سورتوں کی فہرست سے مطالعہ شروع کریں۔' : 'Begin with the Surah index.'}</p></div>
          <a class="button button-primary" href="${routeHref('surahs')}">${text.browse}</a>
        </div>
      </div>
    </section>`
  }

  function validateDuaCatalog(data) {
    if (!data || !Array.isArray(data.categories) || !Array.isArray(data.duas) || data.categories.length !== 7) {
      throw new Error('Invalid Prophetic Duas catalog structure')
    }
    const duaIds = new Set()
    for (const dua of data.duas) {
      if (!dua.id || duaIds.has(dua.id)) throw new Error(`Missing or duplicate dua ID: ${dua.id || '(empty)'}`)
      duaIds.add(dua.id)
      for (const field of ['title', 'arabic', 'transliteration', 'urdu', 'english', 'context', 'references', 'classification']) {
        if (!dua[field]) throw new Error(`Missing ${field} for dua ${dua.id}`)
      }
      if (!Array.isArray(dua.references) || !Array.isArray(dua.classification)) {
        throw new Error(`Invalid references or classification for dua ${dua.id}`)
      }
    }
    const categoryIds = new Set()
    for (const category of data.categories) {
      if (!category.id || categoryIds.has(category.id) || !Array.isArray(category.duaIds)) {
        throw new Error(`Invalid or duplicate dua category: ${category.id || '(empty)'}`)
      }
      categoryIds.add(category.id)
      for (const id of category.duaIds) {
        if (!duaIds.has(id)) throw new Error(`Unknown dua ${id} in category ${category.id}`)
      }
    }
    return data
  }

  function duaCard(category, dua) {
    const text = copy[locale]
    const references = dua.references.map((reference) => {
      const label = `${escapeHtml(reference.collection)} · ${escapeHtml(reference.number)}`
      const url = /^https?:\/\//i.test(reference.url || '') ? reference.url : ''
      return url
        ? `<a lang="en" dir="ltr" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`
        : `<span lang="en" dir="ltr">${label}</span>`
    }).join('')
    const classifications = dua.classification.map((item) => `<span class="dua-tag" lang="en" dir="ltr">${escapeHtml(item)}</span>`).join('')
    const narrator = dua.narrator
      ? `<div class="dua-meta-item"><span class="field-label">${text.narrator}</span><span lang="en" dir="ltr">${escapeHtml(dua.narrator)}</span></div>`
      : ''
    const authenticity = dua.authenticity
      ? `<div class="dua-meta-item"><span class="field-label">${text.authenticity}</span><span lang="en" dir="ltr">${escapeHtml(dua.authenticity)}</span></div>`
      : `<div class="dua-meta-item"><span class="field-label">${text.authenticity}</span><span lang="en" dir="ltr">Quranic supplication — hadith grading not applicable</span></div>`
    const context = locale === 'ur' ? dua.context.ur : dua.context.en
    const cardId = escapeHtml(dua.id)
    const attributionNote = dua.attributionNote
      ? `<p class="dua-attribution-note" lang="en" dir="ltr">${escapeHtml(dua.attributionNote)}</p>`
      : ''
    const gradingNote = dua.gradingNote
      ? `<p class="dua-attribution-note" lang="en" dir="ltr">${escapeHtml(dua.gradingNote)}</p>`
      : ''
    return `<article class="dua-card" data-dua-card data-category-id="${escapeHtml(category.id)}">
      <div class="dua-card-topline"><span class="dua-category-label">${escapeHtml(locale === 'ur' ? category.title.ur : category.title.en)}</span><div class="dua-copy-actions">
        <button class="share-card-button" type="button" data-share-dua="${cardId}" aria-haspopup="dialog">${text.shareDownloadDua}</button>
        <button class="dua-copy-button" type="button" data-copy-dua="${cardId}" data-copy-part="arabic">${text.copyArabic}</button>
        <button class="dua-copy-button" type="button" data-copy-dua="${cardId}" data-copy-part="complete">${text.copyComplete}</button>
        <span class="dua-copy-status" aria-live="polite"></span>
      </div></div>
      <h3 class="dua-title" lang="en" dir="ltr">${escapeHtml(dua.title)}</h3>
      <p class="dua-arabic" lang="ar" dir="rtl">${escapeHtml(dua.arabic)}</p>
      <div class="dua-detail-block dua-transliteration" lang="en" dir="ltr"><span class="field-label">${text.transliteration}</span><p>${escapeHtml(dua.transliteration)}</p></div>
      <div class="dua-translation-grid">
        <div class="dua-detail-block" lang="ur" dir="rtl"><span class="field-label">${text.urduMeaning}</span><p>${escapeHtml(dua.urdu)}</p></div>
        <div class="dua-detail-block" lang="en" dir="ltr"><span class="field-label">${text.englishMeaning}</span><p>${escapeHtml(dua.english)}</p></div>
      </div>
      <div class="dua-context"><span class="field-label">${text.whenToRecite}</span><p lang="${locale}" dir="${locale === 'ur' ? 'rtl' : 'ltr'}">${escapeHtml(context)}</p></div>
      <div class="dua-metadata">
        <div class="dua-meta-item"><span class="field-label">${text.reference}</span><span class="dua-references">${references}</span></div>
        ${narrator}
        ${authenticity}
        <div class="dua-meta-item"><span class="field-label">${text.evidenceType}</span><span class="dua-tags">${classifications}</span></div>
      </div>
      ${attributionNote}${gradingNote}
    </article>`
  }

  async function duasPage(categoryId, requestId) {
    const text = copy[locale]
    app.innerHTML = `${header()}<main><section class="duas-page page-container"><p>${text.loadingDuas}</p></section></main>${footer()}`
    try {
      if (!duasData) {
        const response = await fetch('data/duas.json')
        if (!response.ok) throw new Error(`Could not load dua catalog: HTTP ${response.status}`)
        duasData = validateDuaCatalog(await response.json())
      }
      if (requestId !== renderId) return
      const selectedCategory = categoryId
        ? duasData.categories.find((category) => category.id === categoryId)
        : null
      if (categoryId && !selectedCategory) throw new Error(`Unknown dua category: ${categoryId}`)
      const categories = selectedCategory ? [selectedCategory] : duasData.categories
      const duaById = new Map(duasData.duas.map((dua) => [dua.id, dua]))
      const categoryCards = duasData.categories.map((category) => {
        const count = category.duaIds.length
        return `<a class="dua-category-card" href="${routeHref(`duas/${escapeHtml(category.id)}`)}">
          <span class="dua-category-card-arabic" lang="ar" dir="rtl">${escapeHtml(category.arabicTitle)}</span>
          <span class="dua-category-card-title">${escapeHtml(locale === 'ur' ? category.title.ur : category.title.en)}</span>
          <span class="dua-category-card-description" lang="${locale}" dir="${locale === 'ur' ? 'rtl' : 'ltr'}">${escapeHtml(locale === 'ur' ? category.description.ur : category.description.en)}</span>
          <span class="dua-category-count">${count} ${count === 1 ? text.dua : text.duasPlural}</span>
        </a>`
      }).join('')
      const options = duasData.categories.map((category) =>
        `<option value="${escapeHtml(category.id)}"${category.id === categoryId ? ' selected' : ''}>${escapeHtml(locale === 'ur' ? category.title.ur : category.title.en)}</option>`,
      ).join('')
      const sections = categories.map((category) => {
        const count = category.duaIds.length
        const cards = category.duaIds.map((id) => duaCard(category, duaById.get(id))).join('')
        return `<section class="dua-category-section" data-dua-category="${escapeHtml(category.id)}">
          <header class="dua-category-heading"><div><span class="dua-category-heading-arabic" lang="ar" dir="rtl">${escapeHtml(category.arabicTitle)}</span><h2>${escapeHtml(locale === 'ur' ? category.title.ur : category.title.en)}</h2><p lang="${locale}" dir="${locale === 'ur' ? 'rtl' : 'ltr'}">${escapeHtml(locale === 'ur' ? category.description.ur : category.description.en)}</p></div><span class="entry-count">${count} ${count === 1 ? text.dua : text.duasPlural}</span></header>
          <div class="dua-list">${cards}</div>
        </section>`
      }).join('')
      const backLink = selectedCategory
        ? `<a class="back-link" href="${routeHref('duas')}">← ${text.backToDuas}</a>`
        : ''
      app.innerHTML = `${header()}<main><section class="duas-page page-container">
        ${backLink}
        <header class="duas-page-heading"><span class="eyebrow"><span class="eyebrow-line"></span><span lang="ar" dir="rtl">أدعية نبوية</span> · ${text.duasTitle}</span><h1 lang="${locale}" dir="${locale === 'ur' ? 'rtl' : 'ltr'}">${text.duasTitle}</h1><p class="duas-tagline" lang="ar" dir="rtl">دعائیں جو رسول اللہ ﷺ نے سکھائیں یا خود پڑھیں</p><p lang="${locale}" dir="${locale === 'ur' ? 'rtl' : 'ltr'}">${text.duasDescription}</p><div class="dua-total-count">${duasData.duas.length} ${text.duaCountLabel}</div></header>
        <section class="dua-categories"><h2>${text.browseCategories}</h2><div class="dua-category-grid">${categoryCards}</div></section>
        <div class="dua-controls">
          <label class="search-field"><span aria-hidden="true">⌕</span><span class="sr-only">${text.duaSearchPlaceholder}</span><input id="dua-search" type="search" placeholder="${text.duaSearchPlaceholder}" autocomplete="off" dir="${locale === 'ur' ? 'rtl' : 'ltr'}"></label>
          <label class="dua-category-filter"><span>${text.category}</span><select id="dua-category-filter"><option value="">${text.allCategories}</option>${options}</select></label>
        </div>
        <div class="directory-meta"><span id="dua-result-count" aria-live="polite"></span></div>
        <div id="dua-sections">${sections}</div>
        <div class="no-results" id="dua-no-results" hidden><span aria-hidden="true">⌕</span><h2>${text.noDuaMatches}</h2><p>${text.noDuaMatchesText}</p></div>
      </section></main>${footer()}`
      setActiveNav('duas')
      populateDuaList(categoryId)
      document.title = locale === 'ur' ? 'أدعية نبوية — نبوی دعائیں | آیاتِ ہدایت' : 'Prophetic Duas | Ayat-e-Hidayat'
      window.scrollTo(0, 0)
    } catch (error) {
      if (requestId !== renderId) return
      console.error(error)
      app.innerHTML = `${header()}<main><section class="duas-page page-container"><div class="surah-empty-state"><h2>${text.loadDuasError}</h2></div></section></main>${footer()}`
      setActiveNav('duas')
    }
  }

  function normalizeDuaSearch(value) {
    return String(value || '').toLocaleLowerCase().normalize('NFKC').replace(/[\u064B-\u065F\u0670]/g, '').trim()
  }

  function populateDuaList(categoryId) {
    const input = document.getElementById('dua-search')
    const filter = document.getElementById('dua-category-filter')
    const count = document.getElementById('dua-result-count')
    const noResults = document.getElementById('dua-no-results')
    const sections = [...document.querySelectorAll('[data-dua-category]')]
    if (!input || !filter || !count || !noResults) return
    const update = () => {
      const query = normalizeDuaSearch(input.value)
      let total = 0
      for (const section of sections) {
        const categoryMatches = !filter.value || section.dataset.duaCategory === filter.value
        let visibleInSection = 0
        for (const card of section.querySelectorAll('[data-dua-card]')) {
          const matches = categoryMatches && normalizeDuaSearch(card.textContent).includes(query)
          card.hidden = !matches
          if (matches) visibleInSection += 1
        }
        section.hidden = visibleInSection === 0
        total += visibleInSection
      }
      count.textContent = `${total} ${total === 1 ? copy[locale].dua : copy[locale].duasPlural}`
      noResults.hidden = total > 0
    }
    input.addEventListener('input', update)
    filter.addEventListener('change', () => {
      if (categoryId) {
        location.hash = routeHref(filter.value ? `duas/${filter.value}` : 'duas')
      } else {
        update()
      }
    })
    update()
  }

  function referenceText(reference) {
    const start = Number(reference.ayahStart)
    const end = Number(reference.ayahEnd)
    return `${Number(reference.surah)}:${start}${end && end !== start ? `–${end}` : ''}`
  }

  function sourceText(ahkam) {
    const sources = []
    if (ahkam.translator) sources.push(escapeHtml(ahkam.translator))
    for (const source of ahkam.sources || []) {
      const url = typeof source === 'string' ? source : source.url
      const title = escapeHtml(typeof source === 'string' ? source : source.title || source.author || url || '')
      if (!title) continue
      if (url && /^https?:\/\//i.test(url)) {
        sources.push(`<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${title}</a>`)
      } else {
        sources.push(title)
      }
    }
    return sources.join(' · ')
  }

  function editorialDisclaimer(note) {
    if (!note || typeof note !== 'object') return ''
    const urdu = note.ur ? `<p lang="ur" dir="rtl">${escapeHtml(note.ur)}</p>` : ''
    const english = note.en ? `<p lang="en" dir="ltr">${escapeHtml(note.en)}</p>` : ''
    if (!urdu && !english) return ''
    return `<aside class="editorial-disclaimer"><h3>${copy[locale].editorialDisclaimer}</h3>${urdu}${english}</aside>`
  }

  function ahkamCard(ahkam, surahNumber = null, options = {}) {
    const text = copy[locale]
    const recordSurahNumber = Number(surahNumber || ahkam.surahNumber)
    const recordSurah = surahs.find((item) => item.number === recordSurahNumber)
    if (ahkam.id && recordSurah) {
      shareableCommandments.set(ahkam.id, { commandment: ahkam, surah: recordSurah })
    }
    const hasAyahs = Array.isArray(ahkam.ayahs)
    const references = hasAyahs
      ? (ahkam.references || ahkam.ayahs.map((ayah) => ayah.reference)).join(' · ')
      : referenceText(ahkam.reference || {})
    const ayahs = hasAyahs
      ? ahkam.ayahs
      : [{
          reference: referenceText(ahkam.reference || {}),
          arabic: ahkam.arabic,
          urduMeaning: ahkam.translationUrdu,
          englishMeaning: ahkam.translationEnglish
        }]
    const topic = hasAyahs
      ? `<h2 class="ahkam-title" lang="ur" dir="rtl">${escapeHtml(ahkam.topicUrdu)}</h2><p class="ahkam-title-english" lang="en" dir="ltr">${escapeHtml(ahkam.topicEnglish)}</p>`
      : `<h2 class="ahkam-title" lang="ur" dir="rtl">${escapeHtml(ahkam.titleUrdu)}</h2>`
    const verses = ayahs.map((ayah) => `<section class="ayah-block">
      <div class="ayah-heading"><span class="reference-chip">${text.ayahReference} · ${escapeHtml(ayah.reference)}</span><span class="field-label">${text.quranicArabic}</span></div>
      <p class="quran-text" lang="ar" dir="rtl">${escapeHtml(ayah.arabic)}</p>
      <div class="translation-block" lang="ur" dir="rtl"><p class="field-label">${hasAyahs ? text.urduMeaning : text.urduTranslation}</p><p>${escapeHtml(ayah.urduMeaning)}</p></div>
      <div class="translation-block" lang="en" dir="ltr"><p class="field-label">${hasAyahs ? text.englishMeaning : text.englishTranslation}</p><p>${escapeHtml(ayah.englishMeaning)}</p></div>
    </section>`).join('')
    const editorialNote = options.includeEditorial === false
      ? ''
      : ahkam.editorialNoteUrdu
      ? `<div class="entry-editorial-note" lang="ur" dir="rtl"><p class="field-label">${text.editorialNote}</p><p>${escapeHtml(ahkam.editorialNoteUrdu)}</p></div>`
      : ''
    return `<article class="ahkam-card"${ahkam.id ? ` id="commandment-${escapeHtml(ahkam.id)}"` : ''}>
      <div class="ahkam-card-heading"><span class="reference-chip">${text.ayahReference} · ${escapeHtml(references)}</span>${ahkam.id && recordSurah ? `<button class="share-card-button" type="button" data-share-commandment="${escapeHtml(ahkam.id)}" aria-haspopup="dialog" aria-label="${text.shareDownloadAyah}: ${escapeHtml(references)}">${text.shareDownloadAyah}<span aria-hidden="true">↗</span></button>` : ''}</div>
      ${topic}
      ${verses}
      ${options.includeEditorial === false ? '' : hasAyahs ? editorialNote : `<div class="explanation-grid">
        <div lang="ur" dir="rtl"><p class="field-label">${text.urduExplanation}</p><p>${escapeHtml(ahkam.explanationUrdu)}</p></div>
        <div lang="en" dir="ltr"><p class="field-label">${text.englishExplanation}</p><p>${escapeHtml(ahkam.explanationEnglish)}</p></div>
      </div>`}
      <div class="source-note"><span>${text.sources}</span><span>${sourceText(ahkam)}</span></div>
    </article>`
  }

  const shareCardFonts = {
    arabic: '"Noto Naskh Arabic", "Traditional Arabic", "Times New Roman", serif',
    urdu: '"Noto Nastaliq Urdu", "Noto Naskh Arabic", "Jameel Noori Nastaleeq", serif',
    english: 'Georgia, "Times New Roman", serif'
  }

  function wrapCardText(context, value, maxWidth, font, direction) {
    const text = String(value ?? '').trim()
    if (!text) return []
    context.font = font
    context.direction = direction
    const words = text.split(/\s+/u)
    const lines = []
    let line = ''
    for (const word of words) {
      const candidate = line ? `${line} ${word}` : word
      if (line && context.measureText(candidate).width > maxWidth) {
        lines.push(line)
        line = word
      } else {
        line = candidate
      }
    }
    if (line) lines.push(line)
    return lines
  }

  function buildShareCardLayout(record, width, measureContext) {
    const commandment = record.commandment
    const ayahs = Array.isArray(commandment.ayahs) && commandment.ayahs.length
      ? commandment.ayahs
      : [{
          reference: referenceText(commandment.reference || {}),
          arabic: commandment.arabic,
          urduMeaning: commandment.translationUrdu,
          englishMeaning: commandment.translationEnglish
        }]
    const references = Array.isArray(commandment.references) && commandment.references.length
      ? commandment.references.join(' · ')
      : ayahs.map((ayah) => ayah.reference).filter(Boolean).join(' · ')
    const title = commandment.topicEnglish || commandment.titleEnglish || commandment.title || ''
    let arabicSize = ayahs.length > 2 ? 34 : 44
    let urduSize = ayahs.length > 2 ? 20 : 25
    let englishSize = ayahs.length > 2 ? 19 : 23
    const minSizes = { arabic: 22, urdu: 17, english: 16 }
    const maxTextWidth = width - 180
    let layout
    while (true) {
      let y = 320
      const titleLines = title
        ? wrapCardText(measureContext, title, maxTextWidth, `500 28px ${shareCardFonts.english}`, 'ltr')
        : []
      if (titleLines.length) y += titleLines.length * 38 + 16
      const blocks = ayahs.map((ayah, index) => {
        const block = {
          arabic: wrapCardText(measureContext, ayah.arabic, maxTextWidth, `500 ${arabicSize}px ${shareCardFonts.arabic}`, 'rtl'),
          urdu: wrapCardText(measureContext, ayah.urduMeaning, maxTextWidth, `400 ${urduSize}px ${shareCardFonts.urdu}`, 'rtl'),
          english: wrapCardText(measureContext, ayah.englishMeaning, maxTextWidth, `400 ${englishSize}px ${shareCardFonts.english}`, 'ltr')
        }
        y += (index ? 5 : 0) + 23 + block.arabic.length * arabicSize * 1.75
        y += 23 + block.urdu.length * urduSize * 1.8
        y += 32 + block.english.length * englishSize * 1.55
        return block
      })
      layout = { title, titleLines, references, blocks, arabicSize, urduSize, englishSize, contentBottom: y }
      if (y + 170 <= 1310 || (arabicSize <= minSizes.arabic && urduSize <= minSizes.urdu && englishSize <= minSizes.english)) break
      arabicSize = Math.max(minSizes.arabic, arabicSize - 2)
      urduSize = Math.max(minSizes.urdu, urduSize - 1)
      englishSize = Math.max(minSizes.english, englishSize - 1)
    }
    layout.height = Math.max(1350, layout.contentBottom + 190)
    layout.ayahs = ayahs
    return layout
  }

  function drawShareCard(canvas, record, theme) {
    const width = 1080
    const context = canvas.getContext('2d')
    const layout = buildShareCardLayout(record, width, context)
    canvas.width = width
    canvas.height = layout.height
    const palette = theme === 'light'
      ? { background: '#f4f0e5', foreground: '#183e30', muted: '#596258', accent: '#a1834b', border: '#d5b779', inset: '#fffefa' }
      : { background: '#153f32', foreground: '#f4f0e5', muted: '#d6dfd4', accent: '#d5b779', border: '#d5b779', inset: '#1a4939' }
    context.fillStyle = palette.background
    context.fillRect(0, 0, width, canvas.height)
    context.strokeStyle = palette.border
    context.lineWidth = 2
    context.strokeRect(28, 28, width - 56, canvas.height - 56)
    context.globalAlpha = theme === 'light' ? 0.55 : 0.34
    context.lineWidth = 1
    context.strokeRect(43, 43, width - 86, canvas.height - 86)
    context.globalAlpha = 1
    const drawDiamond = (x, y, size) => {
      context.beginPath()
      context.moveTo(x, y - size)
      context.lineTo(x + size, y)
      context.lineTo(x, y + size)
      context.lineTo(x - size, y)
      context.closePath()
      context.strokeStyle = palette.accent
      context.lineWidth = 2
      context.stroke()
    }
    drawDiamond(78, 78, 13)
    drawDiamond(width - 78, 78, 13)
    drawDiamond(78, canvas.height - 78, 13)
    drawDiamond(width - 78, canvas.height - 78, 13)

    context.textAlign = 'center'
    context.direction = 'rtl'
    context.fillStyle = palette.accent
    context.font = `500 30px ${shareCardFonts.urdu}`
    context.fillText('آیاتِ ہدایت', width / 2, 103)
    context.direction = 'ltr'
    context.fillStyle = palette.muted
    context.font = `600 15px ${shareCardFonts.english}`
    context.fillText('QURANIC GUIDANCE', width / 2, 137)
    context.direction = 'rtl'
    context.fillStyle = palette.foreground
    context.font = `500 34px ${shareCardFonts.arabic}`
    context.fillText(record.surah.nameArabic, width / 2, 188)
    context.direction = 'ltr'
    context.font = `500 22px ${shareCardFonts.english}`
    context.fillText(record.surah.nameEnglish, width / 2, 222)
    context.direction = 'rtl'
    context.font = `400 22px ${shareCardFonts.urdu}`
    context.fillText(record.surah.nameUrdu, width / 2, 257)
    context.direction = 'ltr'
    context.fillStyle = palette.accent
    context.font = `600 17px ${shareCardFonts.english}`
    context.fillText(`${copy[locale].ayahReference} · ${layout.references}`, width / 2, 291)

    let y = 320
    if (layout.titleLines.length) {
      context.fillStyle = palette.foreground
      context.font = `500 28px ${shareCardFonts.english}`
      context.direction = 'ltr'
      for (const line of layout.titleLines) {
        y += 35
        context.fillText(line, width / 2, y)
      }
      y += 15
      context.beginPath()
      context.moveTo(380, y)
      context.lineTo(700, y)
      context.strokeStyle = palette.accent
      context.lineWidth = 1
      context.stroke()
      y += 18
    }
    const maxTextWidth = width - 180
    const drawLines = (lines, label, fontSize, lineHeight, font, direction, color) => {
      context.direction = 'ltr'
      context.textAlign = 'center'
      context.fillStyle = palette.accent
      context.font = `600 13px ${shareCardFonts.english}`
      y += 18
      context.fillText(label, width / 2, y)
      context.direction = direction
      context.fillStyle = color
      context.font = `400 ${fontSize}px ${font}`
      for (const line of lines) {
        y += lineHeight
        context.fillText(line, width / 2, y, maxTextWidth)
      }
      y += 5
    }
    layout.ayahs.forEach((ayah, index) => {
      if (index) {
        y += 5
        context.beginPath()
        context.moveTo(300, y)
        context.lineTo(780, y)
        context.strokeStyle = palette.accent
        context.globalAlpha = 0.55
        context.stroke()
        context.globalAlpha = 1
      }
      const block = layout.blocks[index]
      drawLines(block.arabic, 'QURANIC ARABIC', layout.arabicSize, layout.arabicSize * 1.75, shareCardFonts.arabic, 'rtl', palette.foreground)
      drawLines(block.urdu, 'URDU MEANING', layout.urduSize, layout.urduSize * 1.8, shareCardFonts.urdu, 'rtl', palette.foreground)
      drawLines(block.english, 'ENGLISH MEANING', layout.englishSize, layout.englishSize * 1.55, shareCardFonts.english, 'ltr', palette.foreground)
      y += 9
    })

    const footerY = Math.max(y + 35, canvas.height - 137)
    context.beginPath()
    context.moveTo(300, footerY - 34)
    context.lineTo(780, footerY - 34)
    context.strokeStyle = palette.accent
    context.lineWidth = 1
    context.stroke()
    context.fillStyle = palette.foreground
    context.direction = 'ltr'
    context.font = `600 20px ${shareCardFonts.english}`
    context.fillText('Ayat-e-Hidayat', width / 2, footerY)
    context.fillStyle = palette.muted
    context.font = `400 15px ${shareCardFonts.english}`
    context.fillText('https://ayat-hidayat.netlify.app/', width / 2, footerY + 28)
    return layout
  }

  function drawDuaShareCard(canvas, record, theme) {
    const dua = record.dua
    const width = 1080
    const height = 2200
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    const palette = theme === 'light'
      ? { background: '#f4f0e5', foreground: '#183e30', muted: '#596258', accent: '#a1834b', border: '#d5b779' }
      : { background: '#153f32', foreground: '#f4f0e5', muted: '#d6dfd4', accent: '#d5b779', border: '#d5b779' }
    context.fillStyle = palette.background
    context.fillRect(0, 0, width, height)
    context.strokeStyle = palette.border
    context.lineWidth = 2
    context.strokeRect(28, 28, width - 56, height - 56)
    const drawBlock = (value, label, font, size, direction, y, color = palette.foreground) => {
      context.textAlign = 'center'
      context.direction = 'ltr'
      context.fillStyle = palette.accent
      context.font = `600 17px ${shareCardFonts.english}`
      context.fillText(label, width / 2, y)
      const lines = wrapCardText(context, value, width - 160, `400 ${size}px ${font}`, direction)
      context.direction = direction
      context.fillStyle = color
      context.font = `400 ${size}px ${font}`
      let lineY = y + size + 14
      for (const line of lines) { context.fillText(line, width / 2, lineY); lineY += size * 1.65 }
      return lineY + 20
    }
    context.textAlign = 'center'
    context.fillStyle = palette.accent
    context.direction = 'rtl'
    context.font = `500 30px ${shareCardFonts.urdu}`
    context.fillText('آیاتِ ہدایت', width / 2, 100)
    context.direction = 'ltr'
    context.fillStyle = palette.muted
    context.font = `600 16px ${shareCardFonts.english}`
    context.fillText('PROPHETIC DUA', width / 2, 136)
    let y = 210
    y = drawBlock(dua.title, 'SUPPLICATION', shareCardFonts.english, 34, 'ltr', y)
    y = drawBlock(dua.arabic, 'ARABIC', shareCardFonts.arabic, 48, 'rtl', y)
    y = drawBlock(dua.transliteration, 'TRANSLITERATION', shareCardFonts.english, 24, 'ltr', y, palette.muted)
    y = drawBlock(dua.urdu, 'URDU MEANING', shareCardFonts.urdu, 27, 'rtl', y)
    y = drawBlock(dua.english, 'ENGLISH MEANING', shareCardFonts.english, 25, 'ltr', y)
    if (y < height - 125) drawBlock(locale === 'ur' ? dua.context.ur : dua.context.en, 'WHEN TO RECITE', shareCardFonts.english, 19, 'ltr', y, palette.muted)
    context.fillStyle = palette.accent
    context.font = `500 17px ${shareCardFonts.english}`
    context.direction = 'ltr'
    context.fillText(`Ayat-e-Hidayat · ${dua.references.map((item) => `${item.collection} ${item.number}`).join(' · ')}`, width / 2, height - 75)
  }

  function shareableUrl(record) {
    const fragment = routeHref(`surah/${record.surah.number}?commandment=${encodeURIComponent(record.commandment.id)}`)
    return new URL(fragment, window.location.href).href
  }

  function shareMessage(record) {
    const ayahs = Array.isArray(record.commandment.ayahs) ? record.commandment.ayahs : []
    const references = Array.isArray(record.commandment.references) && record.commandment.references.length
      ? record.commandment.references.join(', ')
      : ayahs.map((ayah) => ayah.reference).filter(Boolean).join(', ')
    return `One beautiful reminder from the Quran:\n\n${record.surah.nameEnglish} — Ayah ${references}\n\nExplore more Quranic guidance:\n${shareableUrl(record)}`
  }

  async function refreshSharePreview() {
    const preview = document.getElementById('share-card-preview')
    const canvas = document.createElement('canvas')
    try {
      if (document.fonts && document.fonts.ready) await document.fonts.ready
      if (!preview || !activeShareRecord || !document.getElementById('share-card-modal')) return
      if (activeShareRecord.kind === 'dua') drawDuaShareCard(canvas, activeShareRecord, activeShareTheme)
      else drawShareCard(canvas, activeShareRecord, activeShareTheme)
      activeShareCanvas = canvas
      preview.src = canvas.toDataURL('image/png')
      preview.alt = activeShareRecord.kind === 'dua' ? `${activeShareRecord.dua.title} dua share card preview` : `${activeShareRecord.surah.nameEnglish} ${copy[locale].ayahReference} share card preview`
      const size = document.getElementById('share-card-dimensions')
      if (size) size.textContent = `${canvas.width} × ${canvas.height}px`
    } catch (error) {
      console.error(error)
      const status = document.getElementById('share-card-status')
      if (status) status.textContent = copy[locale].shareCardError
    }
  }

  async function openShareModal(record, trigger) {
    shareReturnFocus = trigger
    activeShareRecord = record
    activeShareTheme = 'emerald'
    const text = copy[locale]
    app.insertAdjacentHTML('beforeend', `<div class="share-modal-backdrop" id="share-card-modal">
      <section class="share-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="share-card-title" aria-describedby="share-card-help" tabindex="-1">
        <header class="share-modal-header"><div><h2 id="share-card-title">${text.shareCardTitle}</h2><p id="share-card-help">${text.shareCardHelp}</p></div><button class="share-modal-close" type="button" data-share-action="close" aria-label="${text.closeDialog}">×</button></header>
        <div class="share-card-theme-row"><span>${text.cardTheme}</span><div role="group" aria-label="${text.cardTheme}"><button type="button" class="share-theme-button is-active" data-share-theme="emerald" aria-pressed="true">${text.emeraldTheme}</button><button type="button" class="share-theme-button" data-share-theme="light" aria-pressed="false">${text.lightTheme}</button></div></div>
        <div class="share-card-preview-wrap"><img id="share-card-preview" alt="" /><span id="share-card-dimensions"></span></div>
        <p class="share-card-status" id="share-card-status" aria-live="polite"></p>
        <div class="share-modal-actions"><button class="button button-primary" type="button" data-share-action="download">${text.downloadImage}</button><button class="button button-secondary" type="button" data-share-action="whatsapp">${text.shareOnWhatsApp}</button><button class="button button-secondary" type="button" data-share-action="native">${text.shareNative}</button></div>
      </section>
    </div>`)
    await refreshSharePreview()
    document.querySelector('#share-card-modal .share-modal-close')?.focus()
  }

  function closeShareModal(restoreFocus = true) {
    const modal = document.getElementById('share-card-modal')
    if (!modal) return
    modal.remove()
    activeShareCanvas = null
    activeShareRecord = null
    if (restoreFocus && shareReturnFocus && shareReturnFocus.isConnected) shareReturnFocus.focus()
    shareReturnFocus = null
  }

  function downloadShareCard() {
    if (!activeShareCanvas || !activeShareRecord) return
    const canvas = activeShareCanvas
    const record = activeShareRecord
    canvas.toBlob((blob) => {
      if (!blob) {
        const status = document.getElementById('share-card-status')
        if (status) status.textContent = copy[locale].shareCardError
        return
      }
      const anchor = document.createElement('a')
      if (record.kind === 'dua') {
        anchor.download = `ayat-hidayat-dua-${record.dua.id}.png`
      } else {
        const surahSlug = record.surah.nameEnglish.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        const ayahs = Array.isArray(record.commandment.ayahs) ? record.commandment.ayahs : []
        const references = record.commandment.references || ayahs.map((ayah) => ayah.reference)
        const ref = references.join('-').replace(/[^0-9a-z-]+/gi, '-')
        anchor.download = `ayat-hidayat-${surahSlug}-${ref}.png`
      }
      const objectUrl = URL.createObjectURL(blob)
      anchor.href = objectUrl
      document.body.append(anchor)
      anchor.click()
      anchor.remove()
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)
    }, 'image/png')
  }

  function openWhatsAppShare() {
    if (!activeShareRecord) return
    shareImageToWhatsApp()
  }

  async function shareImageToWhatsApp() {
    if (!activeShareCanvas || !activeShareRecord) return
    const status = document.getElementById('share-card-status')
    const blob = await new Promise((resolve) => activeShareCanvas.toBlob(resolve, 'image/png'))
    if (!blob) {
      if (status) status.textContent = copy[locale].shareCardError
      return
    }
    const file = new File([blob], 'ayat-hidayat.png', { type: 'image/png' })
    if (typeof navigator.share === 'function' && typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: copy[locale].shareCardTitle, text: activeShareRecord.kind === 'dua' ? activeShareRecord.dua.title : shareMessage(activeShareRecord) })
        return
      } catch (error) { if (error.name === 'AbortError') return }
    }
    downloadShareCard()
    const url = activeShareRecord.kind === 'dua' ? window.location.href : shareableUrl(activeShareRecord)
    window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer')
    if (status) status.textContent = copy[locale].shareImageFallback
  }

  async function shareCommandment() {
    if (!activeShareRecord) return
    if (activeShareRecord.kind === 'dua') {
      await shareImageToWhatsApp()
      return
    }
    const payload = {
      title: `Quranic reminder — ${activeShareRecord.surah.nameEnglish}`,
      text: shareMessage(activeShareRecord),
      url: shareableUrl(activeShareRecord)
    }
    if (typeof navigator.share !== 'function') {
      openWhatsAppShare()
      return
    }
    try {
      await navigator.share(payload)
    } catch (error) {
      if (error.name !== 'AbortError') console.error(error)
    }
  }

  function normalizeSearchText(value) {
    return String(value ?? '')
      .normalize('NFKC')
      .toLocaleLowerCase()
      .replace(/[\u0640\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/[ک]/g, 'ك')
      .replace(/[ی]/g, 'ي')
      .replace(/[^\p{L}\p{N}]+/gu, ' ')
      .trim()
  }

  function buildCommandmentSearchIndex() {
    if (searchIndexPromise) return searchIndexPromise
    const request = Promise.all(surahs.map(async (surah) => {
      const response = await fetch(`data/ahkamat/surah-${surah.number}.json`)
      if (!response.ok) throw new Error(`Could not load Surah ${surah.number} for search: HTTP ${response.status}`)
      const data = await response.json()
      if (Number(data.surahNumber) !== surah.number || !Array.isArray(data.ahkamat)) {
        throw new Error(`Invalid Ahkamat data for Surah ${surah.number}`)
      }
      return data.ahkamat.map((commandment) => {
        const ayahs = Array.isArray(commandment.ayahs) ? commandment.ayahs : []
        const references = Array.isArray(commandment.references)
          ? commandment.references
          : ayahs.map((ayah) => ayah.reference)
        const searchable = [
          surah.number,
          surah.nameEnglish,
          surah.nameUrdu,
          surah.nameArabic,
          commandment.topicEnglish,
          commandment.topicUrdu,
          commandment.titleEnglish,
          commandment.titleUrdu,
          commandment.title,
          referenceText(commandment.reference || {}),
          ...references,
          ...ayahs.flatMap((ayah) => [ayah.reference, ayah.arabic, ayah.urduMeaning, ayah.englishMeaning]),
          commandment.arabic,
          commandment.translationUrdu,
          commandment.translationEnglish
        ].filter(Boolean).join(' ')
        return { surah, commandment, searchText: normalizeSearchText(searchable) }
      })
    })).then((collections) => {
      const records = collections.flat()
      const ids = new Set()
      for (const record of records) {
        if (!record.commandment.id || ids.has(record.commandment.id)) {
          throw new Error(`Missing or duplicate commandment ID in Surah ${record.surah.number}`)
        }
        ids.add(record.commandment.id)
      }
      return records
    })
    searchIndexPromise = request.catch((error) => {
      searchIndexPromise = null
      throw error
    })
    return searchIndexPromise
  }

  function karachiDateKey(date = new Date()) {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Karachi', year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(date)
    const values = Object.fromEntries(parts.filter((part) => part.type !== 'literal').map((part) => [part.type, part.value]))
    return `${values.year}-${values.month}-${values.day}`
  }

  function commandmentIsCompleteForDailyGuidance(item) {
    if (!item?.commandment?.id || !item.surah?.nameEnglish || !item.surah?.nameArabic || !item.surah?.nameUrdu) return false
    const commandment = item.commandment
    const ayahs = Array.isArray(commandment.ayahs) && commandment.ayahs.length
      ? commandment.ayahs
      : [{
          reference: referenceText(commandment.reference || {}),
          arabic: commandment.arabic,
          urduMeaning: commandment.translationUrdu,
          englishMeaning: commandment.translationEnglish
        }]
    return ayahs.length > 0 && ayahs.every((ayah) =>
      typeof ayah.reference === 'string' && ayah.reference.trim() &&
      typeof ayah.arabic === 'string' && ayah.arabic.trim() &&
      typeof ayah.urduMeaning === 'string' && ayah.urduMeaning.trim() &&
      typeof ayah.englishMeaning === 'string' && ayah.englishMeaning.trim(),
    )
  }

  function selectDailyCommandment(records, dateKey) {
    const pool = records
      .filter(commandmentIsCompleteForDailyGuidance)
      .slice()
      .sort((left, right) => left.commandment.id < right.commandment.id ? -1 : left.commandment.id > right.commandment.id ? 1 : 0)
    if (!pool.length) return null
    const [year, month, day] = dateKey.split('-').map(Number)
    const dayNumber = Math.floor(Date.UTC(year, month - 1, day) / 86400000)
    const index = ((dayNumber % pool.length) + pool.length) % pool.length
    return pool[index]
  }

  function formatKarachiDate(dateKey) {
    const date = new Date(`${dateKey}T12:00:00+05:00`)
    return new Intl.DateTimeFormat(locale === 'ur' ? 'ur-PK' : 'en-GB', {
      timeZone: 'Asia/Karachi', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }).format(date)
  }

  function renderDailyGuidance(entry, dateKey, topicData) {
    const container = document.getElementById('daily-guidance-content')
    if (!container) return
    const text = copy[locale]
    const commandment = entry.commandment
    const topicLinks = (topicData?.topics || []).filter((topic) =>
      topic.commandments.some((reference) => reference.id === commandment.id),
    )
    const topicNav = topicLinks.length
      ? `<nav class="daily-related-topics" aria-label="${text.dailyRelatedTopics}"><span>${topicLinks.length > 1 ? text.dailyRelatedTopicsPlural : text.dailyRelatedTopics}:</span>${topicLinks.map((topic) => `<a href="${routeHref(`topic/${encodeURIComponent(topic.id)}`)}">${escapeHtml(locale === 'ur' ? topic.title.ur : topic.title.en)}<span aria-hidden="true">↗</span></a>`).join('')}</nav>`
      : ''
    const dateLabel = formatKarachiDate(dateKey)
    container.innerHTML = `<div class="daily-featured-card"><div class="daily-featured-meta"><span class="daily-featured-label"><span aria-hidden="true">✧</span>${text.dailyGuidance}</span><time datetime="${dateKey}">${escapeHtml(text.dailyDateLabel)} · ${escapeHtml(dateLabel)}</time></div>${ahkamCard(commandment, entry.surah.number, { includeEditorial: false })}<div class="daily-featured-actions"><a class="button button-primary" href="${routeHref(`surah/${entry.surah.number}?commandment=${encodeURIComponent(commandment.id)}`)}">${text.dailyReadFull}<span aria-hidden="true">↗</span></a>${topicNav}</div></div>`
  }

  async function populateDailyGuidance(requestId) {
    const container = document.getElementById('daily-guidance-content')
    if (!container) return
    try {
      const records = await buildCommandmentSearchIndex()
      if (requestId !== renderId || document.getElementById('daily-guidance-content') !== container) return
      const validRecords = records.filter(commandmentIsCompleteForDailyGuidance)
      if (!validRecords.length) {
        container.innerHTML = `<p class="daily-guidance-status">${copy[locale].dailyEmpty}</p>`
        return
      }
      let topicData = null
      try { topicData = await loadTopics() } catch { /* Daily guidance remains available when topic metadata fails. */ }
      if (requestId !== renderId || document.getElementById('daily-guidance-content') !== container) return
      const updateForToday = () => {
        if (requestId !== renderId || document.getElementById('daily-guidance-content') !== container) return
        try {
          const dateKey = karachiDateKey()
          const entry = selectDailyCommandment(validRecords, dateKey)
          if (!entry) {
            container.innerHTML = `<p class="daily-guidance-status">${copy[locale].dailyEmpty}</p>`
            return
          }
          activeDailyDateKey = dateKey
          renderDailyGuidance(entry, dateKey, topicData)
        } catch (error) {
          console.error(error)
          container.innerHTML = `<p class="daily-guidance-status">${copy[locale].dailyUnavailable}</p>`
        }
      }
      updateForToday()
      if (dailyGuidanceTimer) window.clearInterval(dailyGuidanceTimer)
      dailyGuidanceTimer = window.setInterval(() => {
        try {
          if (requestId !== renderId || document.getElementById('daily-guidance-content') !== container) {
            window.clearInterval(dailyGuidanceTimer)
            dailyGuidanceTimer = null
            return
          }
          if (karachiDateKey() !== activeDailyDateKey) updateForToday()
        } catch (error) {
          console.error(error)
        }
      }, 60000)
    } catch (error) {
      if (requestId !== renderId || document.getElementById('daily-guidance-content') !== container) return
      console.error(error)
      container.innerHTML = `<p class="daily-guidance-status">${copy[locale].dailyUnavailable}</p>`
    }
  }

  function bindCommandmentSearch(syncUrl = false) {
    const input = document.getElementById('commandment-search-input')
    const clear = document.getElementById('commandment-search-clear')
    const form = document.getElementById('commandment-search-form')
    const meta = document.getElementById('commandment-search-meta')
    const results = document.getElementById('commandment-search-results')
    if (!input || !clear || !form || !meta || !results) return

    let index = null
    let loading = false
    const updateUrl = () => {
      if (!syncUrl || !window.history || !window.history.replaceState) return
      const query = input.value.trim()
      const suffix = query ? `?q=${encodeURIComponent(query)}` : ''
      window.history.replaceState(null, '', `${routeHref('search')}${suffix}`)
    }
    const showResults = () => {
      const query = normalizeSearchText(input.value)
      const terms = query.split(' ').filter(Boolean)
      clear.hidden = !input.value.length
      if (!terms.length) {
        meta.textContent = copy[locale].commandmentSearchPrompt
        results.innerHTML = ''
        return
      }
      if (!index) {
        meta.textContent = copy[locale].commandmentSearchLoading
        results.innerHTML = ''
        return
      }
      const matches = index.filter((item) => terms.every((term) => item.searchText.includes(term)))
      meta.textContent = `${matches.length} ${copy[locale].commandmentSearchCount}`
      if (!matches.length) {
        results.innerHTML = `<div class="no-results"><span aria-hidden="true">⌕</span><p>${copy[locale].commandmentSearchNone}</p></div>`
        return
      }
      results.innerHTML = matches.map(({ surah, commandment }) => {
        return `<div class="commandment-search-result"><div class="commandment-search-source"><a href="${routeHref(`surah/${surah.number}`)}"><span lang="ar" dir="rtl">${escapeHtml(surah.nameArabic)}</span> · ${escapeHtml(surah.nameEnglish)} · <span lang="ur" dir="rtl">${escapeHtml(surah.nameUrdu)}</span></a></div>${ahkamCard(commandment, surah.number)}</div>`
      }).join('')
    }
    input.addEventListener('input', () => {
      updateUrl()
      showResults()
      if (!index && !loading && input.value.trim()) {
        loading = true
        buildCommandmentSearchIndex().then((records) => {
          if (document.getElementById('commandment-search-input') !== input) return
          index = records
          loading = false
          showResults()
        }).catch((error) => {
          if (document.getElementById('commandment-search-input') !== input) return
          loading = false
          console.error(error)
          meta.textContent = copy[locale].commandmentSearchError
        })
      }
    })
    clear.addEventListener('click', () => {
      input.value = ''
      updateUrl()
      showResults()
      input.focus()
    })
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const query = input.value.trim()
      if (!syncUrl) {
        const suffix = query ? `?q=${encodeURIComponent(query)}` : ''
        location.hash = `${routeHref('search')}${suffix}`
      } else {
        updateUrl()
      }
    })
    showResults()
    if (input.value.trim()) {
      loading = true
      buildCommandmentSearchIndex().then((records) => {
        if (document.getElementById('commandment-search-input') !== input) return
        index = records
        loading = false
        showResults()
      }).catch((error) => {
        if (document.getElementById('commandment-search-input') !== input) return
        loading = false
        console.error(error)
        meta.textContent = copy[locale].commandmentSearchError
      })
    }
  }

  function searchPage(query, requestId) {
    const text = copy[locale]
    app.innerHTML = `${header()}<main><section class="commandment-search-page page-container"><a class="back-link" href="${routeHref('')}">← ${text.home}</a><header class="commandment-search-heading">${pageHeader(text.commandmentSearch)}<h1>${text.commandmentSearchTitle}</h1><p>${text.commandmentSearchDescription}</p></header>${commandmentSearchMarkup(query)}</section></main>${footer()}`
    setActiveNav('search')
    bindCommandmentSearch(true)
    if (requestId !== renderId) return
    window.scrollTo(0, 0)
  }

  async function surahPage(surah, requestId) {
    const text = copy[locale]
    const loading = `<section class="surah-detail-page page-container"><a class="back-link" href="${routeHref('surahs')}">← ${text.allSurahs}</a><header class="surah-detail-heading"><span class="surah-detail-number">${String(surah.number).padStart(3, '0')}</span><div><h1 class="detail-arabic" lang="ar" dir="rtl">${escapeHtml(surah.nameArabic)}</h1><p class="detail-title"><span lang="en" dir="ltr">${escapeHtml(surah.nameEnglish)}</span><span lang="ur" dir="rtl">${escapeHtml(surah.nameUrdu)}</span></p></div></header><div class="detail-content"><p>${text.loading}</p></div></section>`
    app.innerHTML = `${header()}<main>${loading}</main>${footer()}`
    try {
      const response = await fetch(`data/ahkamat/surah-${surah.number}.json`)
      if (!response.ok) throw new Error(`Could not load Surah ${surah.number}: HTTP ${response.status}`)
      const content = await response.json()
      if (requestId !== renderId) return
      if (Number(content.surahNumber) !== surah.number || !Array.isArray(content.ahkamat)) {
        throw new Error(`Invalid Ahkamat data for Surah ${surah.number}`)
      }
      const ahkamat = content.ahkamat
      const disclaimer = editorialDisclaimer(content.editorialNote)
      const body = ahkamat.length
        ? `${disclaimer}<div class="detail-list-heading"><div><span class="eyebrow"><span class="eyebrow-line"></span>${text.detailEyebrow}</span><h2>${text.detailTitle}</h2></div><span class="entry-count">${ahkamat.length} ${ahkamat.length === 1 ? text.entry : text.entries}</span></div><div class="ahkam-list">${ahkamat.map((item) => ahkamCard(item, surah.number)).join('')}</div>`
        : `<div class="surah-empty-state"><span class="empty-state-icon" aria-hidden="true">◇</span><h2>${text.emptyTitle}</h2><p>${text.emptyText}</p></div>`
      const detail = `<section class="surah-detail-page page-container"><a class="back-link" href="${routeHref('surahs')}">← ${text.allSurahs}</a>
        <header class="surah-detail-heading"><span class="surah-detail-number">${String(surah.number).padStart(3, '0')}</span><div><h1 class="detail-arabic" lang="ar" dir="rtl">${escapeHtml(surah.nameArabic)}</h1><p class="detail-title"><span lang="en" dir="ltr">${escapeHtml(surah.nameEnglish)}</span><span lang="ur" dir="rtl">${escapeHtml(surah.nameUrdu)}</span></p><p class="detail-subtitle">Surah ${surah.number} · ${escapeHtml(surah.nameEnglish)}</p></div></header>
        <div class="detail-content">${body}</div></section>`
      app.innerHTML = `${header()}<main>${detail}</main>${footer()}`
      setActiveNav('surah')
      const requestedCommandment = new URLSearchParams(location.hash.split('?')[1] || '').get('commandment')
      if (requestedCommandment && ahkamat.some((item) => item.id === requestedCommandment)) {
        document.getElementById(`commandment-${requestedCommandment}`)?.scrollIntoView({ block: 'center' })
      }
    } catch (error) {
      if (requestId !== renderId) return
      console.error(error)
      app.innerHTML = `${header()}<main><section class="surah-detail-page page-container"><a class="back-link" href="${routeHref('surahs')}">← ${text.allSurahs}</a><div class="surah-empty-state"><h2>${text.loadingError}</h2></div></section></main>${footer()}`
      setActiveNav('surah')
    }
  }

  function setActiveNav(route) {
    document.querySelectorAll('.main-nav [data-route]').forEach((link) => {
      if (link.dataset.route === route) link.setAttribute('aria-current', 'page')
      else link.removeAttribute('aria-current')
    })
  }

  async function loadTopics() {
    if (topicsData) return topicsData
    const response = await fetch('data/topics.json')
    if (!response.ok) throw new Error(`Could not load topic mapping: HTTP ${response.status}`)
    const data = await response.json()
    if (!data || !Array.isArray(data.topics)) throw new Error('Invalid topic mapping structure')
    const topicIds = new Set()
    for (const topic of data.topics) {
      if (!topic.id || !topic.title || !Array.isArray(topic.commandments) || topicIds.has(topic.id)) {
        throw new Error('Invalid or duplicate topic record')
      }
      topicIds.add(topic.id)
      const commandmentIds = new Set()
      for (const reference of topic.commandments) {
        if (!reference.id || !Number.isInteger(reference.surahNumber) || commandmentIds.has(reference.id)) {
          throw new Error(`Invalid or duplicate commandment reference in topic ${topic.id}`)
        }
        commandmentIds.add(reference.id)
      }
    }
    topicsData = data
    return topicsData
  }

  async function loadCommandmentsForSurah(number) {
    if (!commandmentCache.has(number)) {
      const request = fetch(`data/ahkamat/surah-${number}.json`).then((response) => {
        if (!response.ok) throw new Error(`Could not load Surah ${number}: HTTP ${response.status}`)
        return response.json()
      }).then((content) => {
        if (Number(content.surahNumber) !== number || !Array.isArray(content.ahkamat)) {
          throw new Error(`Invalid Ahkamat data for Surah ${number}`)
        }
        return content.ahkamat
      })
      commandmentCache.set(number, request)
    }
    return commandmentCache.get(number)
  }

  async function topicsPage(topicId, requestId) {
    const text = copy[locale]
    app.innerHTML = `${header()}<main><section class="topics-page page-container"><p>${text.topicLoading}</p></section></main>${footer()}`
    try {
      const data = await loadTopics()
      if (requestId !== renderId) return
      if (!topicId) {
        const cards = data.topics.map((topic) => `<a class="topic-card" href="${routeHref(`topic/${encodeURIComponent(topic.id)}`)}">
          <span class="topic-card-mark" aria-hidden="true">✧</span>
          <span class="topic-card-title">${escapeHtml(topic.title.en)}</span>
          <span class="topic-card-urdu" lang="ur" dir="rtl">${escapeHtml(topic.title.ur)}</span>
          <span class="topic-card-count">${topic.commandments.length} ${text.topicCountLabel}</span>
        </a>`).join('')
        app.innerHTML = `${header()}<main><section class="topics-page page-container"><header class="page-heading">${pageHeader(text.topics)}<h1>${text.browseByTopic}</h1><p>${text.topicDescription}</p></header><div class="topic-grid">${cards}</div></section></main>${footer()}`
        setActiveNav('topics')
        return
      }

      const topic = data.topics.find((item) => item.id === topicId)
      if (!topic) {
        app.innerHTML = `${header()}<main><section class="not-found-page page-container"><span class="not-found-code">404</span><h1>${text.notFound}</h1><p>${text.notFoundText}</p><a class="button button-primary" href="${routeHref('topics')}">${text.backToTopics}</a></section></main>${footer()}`
        setActiveNav('topics')
        return
      }
      const linkedRecords = await Promise.all(topic.commandments.map(async (reference) => {
        const records = await loadCommandmentsForSurah(reference.surahNumber)
        const commandment = records.find((record) => record.id === reference.id)
        if (!commandment) throw new Error(`Topic ${topic.id} references missing commandment ${reference.id}`)
        const surah = surahs.find((item) => item.number === reference.surahNumber)
        if (!surah) throw new Error(`Missing catalogue entry for Surah ${reference.surahNumber}`)
        return { commandment, surah }
      }))
      if (requestId !== renderId) return
      const ayahCount = linkedRecords.reduce((count, item) => count + (Array.isArray(item.commandment.ayahs) ? item.commandment.ayahs.length : 1), 0)
      const cards = linkedRecords.map(({ commandment, surah }) => {
        const refs = (commandment.ayahs || []).map((ayah) => ayah.reference).join(' · ')
        return `<div class="topic-entry"><div class="topic-source"><a href="${routeHref(`surah/${surah.number}`)}">${text.originalSurah}: <span lang="ar" dir="rtl">${escapeHtml(surah.nameArabic)}</span> · ${escapeHtml(surah.nameEnglish)} · <span lang="ur" dir="rtl">${escapeHtml(surah.nameUrdu)}</span></a><span>${escapeHtml(refs)}</span></div>${ahkamCard(commandment, surah.number)}</div>`
      }).join('')
      app.innerHTML = `${header()}<main><section class="topic-detail-page page-container"><a class="back-link" href="${routeHref('topics')}">← ${text.backToTopics}</a><header class="topic-detail-heading"><span class="eyebrow"><span class="eyebrow-line"></span>${text.topics}</span><h1>${escapeHtml(topic.title.en)}</h1><p lang="ur" dir="rtl">${escapeHtml(topic.title.ur)}</p><span class="entry-count">${topic.commandments.length} ${text.topicCountLabel} · ${ayahCount} ${text.topicAyahCountLabel}</span></header><div class="ahkam-list">${cards}</div></section></main>${footer()}`
      setActiveNav('topics')
    } catch (error) {
      if (requestId !== renderId) return
      console.error(error)
      app.innerHTML = `${header()}<main><section class="topics-page page-container"><a class="back-link" href="${routeHref('topics')}">← ${text.backToTopics}</a><p class="error-message">${text.topicLoadError}</p></section></main>${footer()}`
      setActiveNav('topics')
    }
  }

  async function render() {
    if (document.getElementById('share-card-modal')) closeShareModal(false)
    if (dailyGuidanceTimer) {
      window.clearInterval(dailyGuidanceTimer)
      dailyGuidanceTimer = null
    }
    const requestId = ++renderId
    const [page, identifier] = currentPath()
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ur' ? 'rtl' : 'ltr'
    document.title = locale === 'ur' ? 'آیاتِ ہدایت' : 'Ayat-e-Hidayat — آیاتِ ہدایت'

    if (!surahs.length) {
      app.innerHTML = `${header()}<main><section class="directory-page page-container"><p class="error-message">${copy[locale].dataError}</p></section></main>${footer()}`
      return
    }
    if (!page || page === 'home') {
      app.innerHTML = `${header()}<main>${homePage()}</main>${footer()}`
      setActiveNav('home')
      bindCommandmentSearch(false)
      populateDailyGuidance(requestId)
      return
    }
    if (page === 'surahs') {
      app.innerHTML = `${header()}<main>${surahsPage()}</main>${footer()}`
      setActiveNav('surahs')
      populateSurahList()
      return
    }
    if (page === 'search') {
      searchPage(currentSearchQuery(), requestId)
      return
    }
    if (page === 'topics') {
      await topicsPage(null, requestId)
      return
    }
    if (page === 'topic') {
      await topicsPage(identifier, requestId)
      return
    }
    if (page === 'duas') {
      await duasPage(identifier, requestId)
      return
    }
    if (page === 'purpose') {
      app.innerHTML = `${header()}<main>${purposePage()}</main>${footer()}`
      setActiveNav('purpose')
      document.title = locale === 'ur'
        ? 'ہمارا مقصد | آیاتِ ہدایت'
        : 'Our Purpose | Ayat-e-Hidayat'
      window.scrollTo(0, 0)
      return
    }
    if (page === 'surah' && /^\d+$/.test(identifier || '')) {
      const surah = surahs.find((item) => item.number === Number(identifier))
      if (surah) {
        await surahPage(surah, requestId)
        return
      }
    }
    if (page === 'about') {
      app.innerHTML = `${header()}<main>${aboutPage()}</main>${footer()}`
      setActiveNav('about')
      return
    }
    if (page === 'dedication') {
      app.innerHTML = `${header()}<main>${dedicationPage()}</main>${footer()}`
      document.title = `${copy[locale].dedication} | Ayat-e-Hidayat`
      return
    }
    app.innerHTML = `${header()}<main><section class="not-found-page page-container"><span class="not-found-code">404</span><h1>${copy[locale].notFound}</h1><p>${copy[locale].notFoundText}</p><a class="button button-primary" href="${routeHref('')}">${copy[locale].returnHome}</a></section></main>${footer()}`
  }

  function populateSurahList() {
    const list = document.getElementById('surah-list')
    const input = document.getElementById('surah-search')
    const count = document.getElementById('search-count')
    const noResults = document.getElementById('no-results')
    if (!list || !input || !count || !noResults) return
    const update = () => {
      const query = input.value.trim().toLocaleLowerCase()
      const matches = surahs.filter((surah) =>
        [surah.nameArabic, surah.nameEnglish, surah.nameUrdu, String(surah.number)]
          .some((value) => String(value).toLocaleLowerCase().includes(query)),
      )
      list.innerHTML = matches.map(surahCard).join('')
      count.textContent = `${matches.length} ${copy[locale].shown}`
      noResults.hidden = matches.length > 0
      list.hidden = matches.length === 0
    }
    input.addEventListener('input', update)
    update()
  }

  app.addEventListener('click', async (event) => {
    const shareButton = event.target.closest('[data-share-commandment]')
    if (shareButton) {
      const record = shareableCommandments.get(shareButton.dataset.shareCommandment)
      if (record) await openShareModal(record, shareButton)
      return
    }
    const duaShareButton = event.target.closest('[data-share-dua]')
    if (duaShareButton) {
      const dua = duasData?.duas.find((item) => item.id === duaShareButton.dataset.shareDua)
      if (dua) await openShareModal({ kind: 'dua', dua }, duaShareButton)
      return
    }
    const shareAction = event.target.closest('[data-share-action]')
    if (shareAction) {
      const action = shareAction.dataset.shareAction
      if (action === 'close') closeShareModal()
      else if (action === 'download') downloadShareCard()
      else if (action === 'whatsapp') openWhatsAppShare()
      else if (action === 'native') await shareCommandment()
      return
    }
    const themeButton = event.target.closest('[data-share-theme]')
    if (themeButton && activeShareRecord) {
      activeShareTheme = themeButton.dataset.shareTheme
      document.querySelectorAll('[data-share-theme]').forEach((button) => {
        const active = button.dataset.shareTheme === activeShareTheme
        button.classList.toggle('is-active', active)
        button.setAttribute('aria-pressed', String(active))
      })
      await refreshSharePreview()
      return
    }
    if (event.target.id === 'share-card-modal') {
      closeShareModal()
      return
    }
    const copyButton = event.target.closest('[data-copy-dua]')
    if (copyButton) {
      const dua = duasData && duasData.duas.find((item) => item.id === copyButton.dataset.copyDua)
      const status = copyButton.closest('.dua-card').querySelector('.dua-copy-status')
      if (!dua) {
        console.error(`Could not find dua to copy: ${copyButton.dataset.copyDua}`)
        status.textContent = copy[locale].copyFailed
        return
      }
      const copiedText = copyButton.dataset.copyPart === 'arabic'
        ? dua.arabic
        : [
            dua.title,
            dua.arabic,
            dua.transliteration,
            `اردو: ${dua.urdu}`,
            `English: ${dua.english}`,
            `Context: ${locale === 'ur' ? dua.context.ur : dua.context.en}`,
            `Reference: ${dua.references.map((reference) => `${reference.collection} ${reference.number}`).join('; ')}`
          ].join('\n\n')
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard access is unavailable in this browser context')
        await navigator.clipboard.writeText(copiedText)
        status.textContent = copy[locale].copied
      } catch (error) {
        console.error(error)
        status.textContent = copy[locale].copyFailed
      }
      return
    }
    const button = event.target.closest('[data-action="toggle-language"]')
    if (!button) return
    locale = locale === 'en' ? 'ur' : 'en'
    render()
  })

  document.addEventListener('keydown', (event) => {
    const modal = document.getElementById('share-card-modal')
    if (!modal) return
    if (event.key === 'Escape') {
      closeShareModal()
      return
    }
    if (event.key !== 'Tab') return
    const focusable = [...modal.querySelectorAll('button:not([disabled])')]
    if (!focusable.length) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })

  window.addEventListener('hashchange', render)

  fetch('data/surahs.json')
    .then((response) => {
      if (!response.ok) throw new Error(`Could not load Surah list: HTTP ${response.status}`)
      return response.json()
    })
    .then((data) => {
      if (!Array.isArray(data) || data.length !== 114) throw new Error('Surah list must contain 114 entries')
      surahs = data
      render()
    })
    .catch((error) => {
      console.error(error)
      render()
    })
})()
