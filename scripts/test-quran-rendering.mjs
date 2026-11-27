import { readFile, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const endpoint = process.env.PWA_CDP_URL || 'http://127.0.0.1:9334'
const origin = (process.env.PWA_TEST_ORIGIN || 'http://127.0.0.1:8765').replace(/\/$/u, '')
const targets = await (await fetch(`${endpoint}/json/list`)).json()
const page = targets.find((target) => target.type === 'page' && target.url.startsWith(origin))
if (!page) throw new Error('Open the local site in headless Chrome with remote debugging port 9334 first.')

const socket = new WebSocket(page.webSocketDebuggerUrl)
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject })
let commandId = 0
const pending = new Map()
const consoleErrors = []
const runtimeErrors = []
const failedRequests = []
const requestUrls = new Map()
socket.onmessage = ({ data }) => {
  const message = JSON.parse(data)
  if (message.method === 'Log.entryAdded' && message.params.entry.level === 'error') consoleErrors.push({ text: message.params.entry.text, url: message.params.entry.url, source: message.params.entry.source })
  if (message.method === 'Runtime.exceptionThrown') runtimeErrors.push(message.params.exceptionDetails.text)
  if (message.method === 'Network.requestWillBeSent') requestUrls.set(message.params.requestId, message.params.request.url)
  if (message.method === 'Network.loadingFailed') failedRequests.push({ url: requestUrls.get(message.params.requestId), error: message.params.errorText, canceled: message.params.canceled })
  if (message.method === 'Network.responseReceived' && message.params.response.status >= 400) failedRequests.push({ url: message.params.response.url, status: message.params.response.status })
  if (!message.id || !pending.has(message.id)) return
  const { resolve, reject } = pending.get(message.id)
  pending.delete(message.id)
  if (message.error) reject(new Error(message.error.message))
  else resolve(message.result)
}
function command(method, params = {}) {
  const id = ++commandId
  socket.send(JSON.stringify({ id, method, params }))
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }))
}
async function evaluate(expression, awaitPromise = true) {
  const response = await command('Runtime.evaluate', { expression, awaitPromise, returnByValue: true })
  if (response.exceptionDetails) throw new Error(response.exceptionDetails.text)
  return response.result.value
}
async function waitFor(expression, label, timeout = 30000) {
  const started = Date.now()
  while (Date.now() - started < timeout) {
    const result = await evaluate(expression)
    if (result) return result
    await new Promise((resolve) => setTimeout(resolve, 250))
  }
  throw new Error(`Timed out waiting for ${label}`)
}

try {
  await command('Runtime.enable')
  await command('Log.enable')
  await command('Network.enable')
  await command('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false })
  await command('Page.navigate', { url: `${origin}/#/` })
  await waitFor("document.querySelector('.community-section') && document.querySelector('.community-banner a')", 'homepage WhatsApp community invitation')
  const communityLinks = await evaluate(`(()=>[...document.querySelectorAll('.community-banner a, .community-section a.button-community, .footer-community-link')].map(a=>({href:a.href,target:a.target,rel:a.rel,label:a.getAttribute('aria-label'),direction:a.closest('[dir]')?.getAttribute('dir')})))()`)
  if (communityLinks.length !== 3 || communityLinks.some((link) => link.href !== 'https://chat.whatsapp.com/G59zMmNWFcD20steVXYVvA' || link.target !== '_blank' || !link.rel.includes('noopener') || !link.rel.includes('noreferrer') || !link.label)) {
    throw new Error(`WhatsApp community CTA check failed: ${JSON.stringify(communityLinks)}`)
  }
  console.log('PASS desktop homepage, site-wide banner, footer, and exact accessible WhatsApp community links')
  await evaluate("document.querySelector('.language-toggle').click()", false)
  await waitFor("document.documentElement.lang === 'ur' && document.querySelector('.community-section [dir=rtl]')", 'Urdu community invitation')
  const urduCommunity = await evaluate("({heading:document.querySelector('#community-section-title')?.textContent.trim(),direction:document.querySelector('.community-panel')?.getAttribute('dir'),url:document.querySelector('.community-section a.button-community')?.href})")
  if (urduCommunity.direction !== 'rtl' || !urduCommunity.heading || urduCommunity.url !== 'https://chat.whatsapp.com/G59zMmNWFcD20steVXYVvA') throw new Error(`Urdu community invitation check failed: ${JSON.stringify(urduCommunity)}`)
  await evaluate("document.querySelector('.language-toggle').click()", false)
  await waitFor("document.documentElement.lang === 'en'", 'English community invitation')
  console.log('PASS Urdu and English community invitation language and RTL switching')
  await evaluate("document.querySelector('.language-toggle').focus()", false)
  await command('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Enter', code: 'Enter', text: '\r', windowsVirtualKeyCode: 13, nativeVirtualKeyCode: 13 })
  await command('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, nativeVirtualKeyCode: 13 })
  await waitFor("document.documentElement.lang === 'ur'", 'keyboard language toggle')
  await evaluate("document.querySelector('.language-toggle').focus()", false)
  await command('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Enter', code: 'Enter', text: '\r', windowsVirtualKeyCode: 13, nativeVirtualKeyCode: 13 })
  await command('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13, nativeVirtualKeyCode: 13 })
  await waitFor("document.documentElement.lang === 'en'", 'keyboard language toggle reset')
  console.log('PASS keyboard activation of the language toggle')
  await waitFor("document.querySelector('.daily-featured-card')", 'Daily Guidance on homepage')

  const routeChecks = [
    ['#/surahs', '.directory-grid', 'Surah directory'],
    ['#/topics', '.topic-card', 'topic directory'],
    ['#/topic/worship-faith', '.topic-detail-heading', 'topic detail'],
    ['#/duas', '.duas-page-heading h1', 'Prophetic Duas'],
    ['#/purpose', '.purpose-hero h1', 'Purpose'],
    ['#/about', '.about-page h1', 'About'],
    ['#/dedication', '.dedication-page h1', 'Dedication'],
    ['#/surah/1', '.ahkam-card', 'Al-Fatihah'],
    ['#/surah/2', '.ahkam-card', 'Al-Baqarah'],
    ['#/surah/4', '.ahkam-card', 'An-Nisa']
  ]
  for (const [route, selector, label] of routeChecks) {
    await command('Page.navigate', { url: `${origin}/${route}` })
    await waitFor(`document.querySelector('${selector}')`, label)
  }
  console.log('PASS homepage navigation to Surah, topic, Dua, Purpose, About, and Dedication routes')

  const populatedFiles = (await readdir(join(root, 'data/ahkamat'))).filter((name) => /^surah-\d+\.json$/.test(name))
  const populatedSurahs = []
  for (const name of populatedFiles) {
    const source = JSON.parse(await readFile(join(root, 'data/ahkamat', name), 'utf8'))
    if (!source.ahkamat.length) continue
    const number = source.surahNumber
    await command('Page.navigate', { url: `${origin}/#/surah/${number}` })
    await waitFor(`document.querySelectorAll('.ahkam-card').length === ${source.ahkamat.length}`, `populated Surah ${number}`)
    populatedSurahs.push(number)
  }
  if (populatedSurahs.length !== 12) throw new Error(`Expected 12 populated Surahs, rendered ${populatedSurahs.length}`)
  console.log(`PASS all populated Surah routes render their expected card counts: ${populatedSurahs.join(', ')}`)

  await command('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true })
  await command('Page.navigate', { url: `${origin}/#/` })
  await waitFor("document.querySelector('#mobile-menu-toggle')", 'mobile navigation button')
  await evaluate("document.querySelector('#mobile-menu-toggle').click()", false)
  await waitFor("document.querySelector('#mobile-menu-toggle')?.getAttribute('aria-expanded') === 'true' && getComputedStyle(document.querySelector('#main-nav')).display !== 'none'", 'expanded mobile navigation')
  await command('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape' })
  await command('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape' })
  await waitFor("document.querySelector('#mobile-menu-toggle')?.getAttribute('aria-expanded') === 'false'", 'closed mobile navigation')
  console.log('PASS mobile navigation opens and Escape closes it')

  for (const number of [8, 45]) {
    const source = JSON.parse(await readFile(join(root, `data/ahkamat/surah-${number}.json`), 'utf8'))
    const expected = source.ahkamat
    await command('Page.navigate', { url: `${origin}/#/surah/${number}` })
    await waitFor(`document.querySelectorAll('.ahkam-card').length === ${expected.length}`, `Surah ${number} cards`)
    const rendered = await evaluate(`(()=>{
      const cards=[...document.querySelectorAll('.ahkam-card')]
      return cards.map(card=>({
        id:card.id.replace('commandment-',''),
        ayahs:[...card.querySelectorAll('.ayah-block')].map(block=>({
          reference:block.querySelector('.ayah-heading .reference-chip')?.textContent.trim(),
          arabic:block.querySelector('.quran-text')?.textContent.trim(),
          arabicDirection:block.querySelector('.quran-text')?.getAttribute('dir'),
          urdu:block.querySelector('.translation-block[lang="ur"] p:last-child')?.textContent.trim(),
          urduDirection:block.querySelector('.translation-block[lang="ur"]')?.getAttribute('dir'),
          english:block.querySelector('.translation-block[lang="en"] p:last-child')?.textContent.trim(),
          englishDirection:block.querySelector('.translation-block[lang="en"]')?.getAttribute('dir')
        }))
      }))
    })()`)
    if (rendered.length !== expected.length) throw new Error(`Surah ${number}: expected ${expected.length} cards, got ${rendered.length}`)
    for (let i = 0; i < expected.length; i++) {
      const actual = rendered[i]
      const record = expected[i]
      if (actual.id !== record.id || actual.ayahs.length !== record.ayahs.length) throw new Error(`Surah ${number}: order or Ayah count mismatch at ${record.id}`)
      for (let j = 0; j < record.ayahs.length; j++) {
        const actualAyah = actual.ayahs[j]
        const expectedAyah = record.ayahs[j]
        if (!actualAyah.reference.includes(expectedAyah.reference) || actualAyah.arabic !== expectedAyah.arabic || actualAyah.urdu !== expectedAyah.urduMeaning || actualAyah.english !== expectedAyah.englishMeaning) {
          throw new Error(`Surah ${number}: rendered content differs at ${record.id} ${expectedAyah.reference}`)
        }
        if (actualAyah.arabicDirection !== 'rtl' || actualAyah.urduDirection !== 'rtl' || actualAyah.englishDirection !== 'ltr') {
          throw new Error(`Surah ${number}: incorrect text direction at ${expectedAyah.reference}`)
        }
        if (/\?{3,}/u.test(actualAyah.arabic) || /\?{3,}/u.test(actualAyah.urdu)) {
          throw new Error(`Surah ${number}: suspicious question-mark run at ${expectedAyah.reference}`)
        }
      }
    }
    console.log(`PASS desktop Surah ${number}: ${rendered.length} cards and ${rendered.reduce((n, c) => n + c.ayahs.length, 0)} complete RTL/LTR Ayah blocks render in source order`)
  }

  await command('Page.navigate', { url: `${origin}/#/surah/8` })
  await waitFor("document.getElementById('commandment-anfal-battlefield-steadfastness-015-016')", 'battlefield multi-Ayah entry')
  await evaluate("document.querySelector('[data-share-commandment=\\\"anfal-taqwa-reconcile-obey-001\\\"]').click()", false)
  await waitFor("document.querySelector('#share-card-preview')?.complete && document.querySelector('#share-card-preview')?.naturalWidth > 0", 'Unicode share card image')
  console.log('PASS shareable card image renders with the restored Arabic and Urdu content')
  await evaluate("document.querySelector('#share-card-modal .share-modal-close')?.click()", false)

  for (const number of [8, 45]) {
    const source = JSON.parse(await readFile(join(root, `data/ahkamat/surah-${number}.json`), 'utf8'))
    const record = source.ahkamat[0]
    const queries = [record.ayahs[0].arabic.split(/\s+/u).slice(0, 2).join(' '), record.topicUrdu.split(/\s+/u).slice(0, 3).join(' '), record.ayahs[0].englishMeaning.split(/\s+/u).slice(0, 3).join(' ')]
    for (const query of queries) {
      const url = `${origin}/#/search?q=${encodeURIComponent(query)}`
      await command('Page.navigate', { url })
      await waitFor(`document.getElementById('commandment-${record.id}')`, `Surah ${number} search for ${query.slice(0, 18)}`)
    }
    console.log(`PASS Surah ${number} searches find its Arabic, Urdu, and English entry`)
  }

  await command('Page.navigate', { url: `${origin}/#/topic/worship-faith` })
  await waitFor("document.getElementById('commandment-jathiyah-gratitude-to-allah-012')", 'mapped Al-Jathiyah topic entry')
  await waitFor("document.getElementById('commandment-anfal-taqwa-reconcile-obey-001')", 'mapped Al-Anfal topic entry')
  console.log('PASS topic detail renders mapped entries from both Surahs')

  for (const width of [320, 375, 390, 430, 768, 1024, 1440]) {
    const mobile = width <= 430
    await command('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile })
    for (const number of [8, 45]) {
      await command('Page.navigate', { url: `${origin}/#/surah/${number}` })
      await waitFor(`document.querySelectorAll('.ahkam-card').length > 0`, `Surah ${number} at ${width}px`)
      const layout = await evaluate(`(()=>({cards:document.querySelectorAll('.ahkam-card').length,width:innerWidth,scrollWidth:document.documentElement.scrollWidth,arabic:getComputedStyle(document.querySelector('.quran-text')).direction,urdu:getComputedStyle(document.querySelector('.translation-block[lang="ur"]')).direction,overflow:[...document.querySelectorAll('body *')].map(e=>({tag:e.tagName,cls:typeof e.className==='string'?e.className:'',id:e.id,left:Math.round(e.getBoundingClientRect().left),right:Math.round(e.getBoundingClientRect().right),width:Math.round(e.getBoundingClientRect().width)})).filter(e=>e.right>innerWidth+1||e.left< -1).slice(0,8)}))()`)
      if (layout.cards === 0 || layout.scrollWidth > layout.width || layout.arabic !== 'rtl' || layout.urdu !== 'rtl') throw new Error(`Surah ${number} layout failed at ${width}px: ${JSON.stringify(layout)}`)
    }
    console.log(`PASS Al-Anfal and Al-Jathiyah layout at ${width}px: no horizontal overflow, Arabic and Urdu RTL`)
  }
  const responsiveRoutes = [
    ['#/', '.community-section', 'home'],
    ['#/surahs', '.directory-grid', 'Surah directory'],
    ['#/surah/8', '.ahkam-card', 'Al-Anfal'],
    ['#/surah/45', '.ahkam-card', 'Al-Jathiyah'],
    ['#/topics', '.topic-card', 'topic directory'],
    ['#/topic/worship-faith', '.topic-detail-heading', 'topic detail'],
    ['#/duas', '.duas-page-heading h1', 'Duas'],
    ['#/search?q=worship', '.commandment-search-results', 'search'],
    ['#/dedication', '.dedication-page h1', 'Dedication'],
    ['#/purpose', '.purpose-hero h1', 'Purpose'],
    ['#/about', '.about-page h1', 'About']
  ]
  for (const width of [390, 1440]) {
    await command('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width < 600 })
    for (const [route, selector, label] of responsiveRoutes) {
      await command('Page.navigate', { url: `${origin}/${route}` })
      await waitFor(`document.querySelector('${selector}')`, `${label} at ${width}px`)
      const layout = await evaluate('({width:innerWidth,scrollWidth:document.documentElement.scrollWidth})')
      if (layout.scrollWidth > layout.width) throw new Error(`${label} overflows at ${width}px: ${JSON.stringify(layout)}`)
    }
    console.log(`PASS all requested page routes at ${width}px without horizontal overflow`)
  }
  if (consoleErrors.length || runtimeErrors.length || failedRequests.some((request) => !request.canceled)) {
    throw new Error(`Browser errors: ${JSON.stringify({ consoleErrors, runtimeErrors, failedRequests: failedRequests.filter((request) => !request.canceled) })}`)
  }
  console.log(`PASS browser diagnostics: no console/runtime errors or failed requests (${failedRequests.length} canceled navigations ignored)`)
} finally {
  await command('Emulation.clearDeviceMetricsOverride').catch(() => {})
  socket.close()
}
