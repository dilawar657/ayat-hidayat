(() => {
  const app = document.getElementById('app')
  const copy = {
    en: {
      home: 'Home',
      surahs: 'Surahs',
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
      dataError: 'Surah information could not be loaded. Check that the local JSON file is available.'
    },
    ur: {
      home: 'صفحۂ اول',
      surahs: 'سورتیں',
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
      dataError: 'سورتوں کی معلومات لوڈ نہیں ہو سکیں۔ مقامی JSON فائل کی دستیابی چیک کریں۔'
    }
  }

  let surahs = []
  let locale = 'en'
  let renderId = 0

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char])

  const currentPath = () => location.hash.replace(/^#\/?/, '').split('/').filter(Boolean)

  const routeHref = (path) => `#/${path}`

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

  function header() {
    const text = copy[locale]
    return `<header class="site-header"><div class="header-inner page-container">
      ${brand()}
      <nav class="main-nav" aria-label="${locale === 'ur' ? 'بنیادی نیویگیشن' : 'Main navigation'}">
        <a href="${routeHref('')}" data-route="home">${text.home}</a>
        <a href="${routeHref('surahs')}" data-route="surahs">${text.surahs}</a>
        <a href="${routeHref('purpose')}" data-route="purpose">${text.purpose}</a>
        <a href="${routeHref('about')}" data-route="about">${text.about}</a>
      </nav>
      <div class="header-actions">
        <button class="language-toggle" type="button" data-action="toggle-language" aria-label="${locale === 'en' ? 'اردو میں دیکھیں' : 'Switch to English'}">${locale === 'en' ? 'اردو' : 'EN'}</button>
        <a class="header-cta" href="${routeHref('surahs')}">${text.explore}<span aria-hidden="true">↗</span></a>
      </div>
    </div></header>`
  }

  function footer() {
    const text = copy[locale]
    return `<footer class="site-footer"><div class="page-container footer-inner">
      <div>${brand(true)}<p class="footer-tagline" lang="${locale}" dir="${locale === 'ur' ? 'rtl' : 'ltr'}">${text.footerLine}</p></div>
      <nav class="footer-links" aria-label="${locale === 'ur' ? 'اضافی صفحات' : 'Footer navigation'}">
        <a href="${routeHref('')}" data-route="home">${text.home}</a>
        <a href="${routeHref('surahs')}">${text.surahs}</a>
        <a href="${routeHref('purpose')}">${text.purpose}</a>
        <a href="${routeHref('about')}">${text.about}</a>
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
      </div>
    </section>`
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

  function ahkamCard(ahkam) {
    const text = copy[locale]
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
    const editorialNote = ahkam.editorialNoteUrdu
      ? `<div class="entry-editorial-note" lang="ur" dir="rtl"><p class="field-label">${text.editorialNote}</p><p>${escapeHtml(ahkam.editorialNoteUrdu)}</p></div>`
      : ''
    return `<article class="ahkam-card">
      <div class="ahkam-card-heading"><span class="reference-chip">${text.ayahReference} · ${escapeHtml(references)}</span></div>
      ${topic}
      ${verses}
      ${hasAyahs ? editorialNote : `<div class="explanation-grid">
        <div lang="ur" dir="rtl"><p class="field-label">${text.urduExplanation}</p><p>${escapeHtml(ahkam.explanationUrdu)}</p></div>
        <div lang="en" dir="ltr"><p class="field-label">${text.englishExplanation}</p><p>${escapeHtml(ahkam.explanationEnglish)}</p></div>
      </div>`}
      <div class="source-note"><span>${text.sources}</span><span>${sourceText(ahkam)}</span></div>
    </article>`
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
        ? `${disclaimer}<div class="detail-list-heading"><div><span class="eyebrow"><span class="eyebrow-line"></span>${text.detailEyebrow}</span><h2>${text.detailTitle}</h2></div><span class="entry-count">${ahkamat.length} ${ahkamat.length === 1 ? text.entry : text.entries}</span></div><div class="ahkam-list">${ahkamat.map(ahkamCard).join('')}</div>`
        : `<div class="surah-empty-state"><span class="empty-state-icon" aria-hidden="true">◇</span><h2>${text.emptyTitle}</h2><p>${text.emptyText}</p></div>`
      const detail = `<section class="surah-detail-page page-container"><a class="back-link" href="${routeHref('surahs')}">← ${text.allSurahs}</a>
        <header class="surah-detail-heading"><span class="surah-detail-number">${String(surah.number).padStart(3, '0')}</span><div><h1 class="detail-arabic" lang="ar" dir="rtl">${escapeHtml(surah.nameArabic)}</h1><p class="detail-title"><span lang="en" dir="ltr">${escapeHtml(surah.nameEnglish)}</span><span lang="ur" dir="rtl">${escapeHtml(surah.nameUrdu)}</span></p><p class="detail-subtitle">Surah ${surah.number} · ${escapeHtml(surah.nameEnglish)}</p></div></header>
        <div class="detail-content">${body}</div></section>`
      app.innerHTML = `${header()}<main>${detail}</main>${footer()}`
      setActiveNav('surah')
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

  async function render() {
    const requestId = ++renderId
    const [page, identifier] = currentPath()
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ur' ? 'rtl' : 'ltr'

    if (!surahs.length) {
      app.innerHTML = `${header()}<main><section class="directory-page page-container"><p class="error-message">${copy[locale].dataError}</p></section></main>${footer()}`
      return
    }
    if (!page || page === 'home') {
      app.innerHTML = `${header()}<main>${homePage()}</main>${footer()}`
      setActiveNav('home')
      return
    }
    if (page === 'surahs') {
      app.innerHTML = `${header()}<main>${surahsPage()}</main>${footer()}`
      setActiveNav('surahs')
      populateSurahList()
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

  app.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action="toggle-language"]')
    if (!button) return
    locale = locale === 'en' ? 'ur' : 'en'
    render()
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
