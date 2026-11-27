import { readFile, writeFile } from 'node:fs/promises'

const endpoint = process.env.PWA_CDP_URL || 'http://127.0.0.1:9334'
const targets = await (await fetch(`${endpoint}/json/list`)).json()
const page = targets.find((target) => target.type === 'page' && target.url.startsWith('http://127.0.0.1:8765/'))
if (!page) throw new Error('Open the local site in headless Chrome with remote debugging port 9334 first.')

const socket = new WebSocket(page.webSocketDebuggerUrl)
await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject })
let commandId = 0
const pending = new Map()
socket.onmessage = ({ data }) => {
  const message = JSON.parse(data)
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
    await new Promise((resolve) => setTimeout(resolve, 300))
  }
  throw new Error(`Timed out waiting for ${label}`)
}

try {
  const manifest = await evaluate("(async()=>{const r=await fetch('manifest.webmanifest');const m=await r.json();return {name:m.name,display:m.display,start:m.start_url,icons:await Promise.all(m.icons.map(async i=>({src:i.src,ok:(await fetch(i.src)).ok})))}})()")
  if (manifest.display !== 'standalone' || manifest.icons.length < 3 || manifest.icons.some((icon) => !icon.ok)) throw new Error('Manifest or icon validation failed.')
  console.log(`PASS manifest: ${manifest.display}; ${manifest.icons.length} icons load`)
  const installability = await command('Page.getAppManifest')
  console.log(`Chrome manifest diagnostics: ${JSON.stringify(installability.errors || [])}`)

  const ready = await evaluate("(async()=>{const r=await navigator.serviceWorker.ready;return {scope:r.scope,state:r.active?.state,controller:Boolean(navigator.serviceWorker.controller)}})()")
  if (ready.state !== 'activated') throw new Error(`Service worker is not active: ${JSON.stringify(ready)}`)
  console.log(`PASS service worker active at ${ready.scope}`)

  await evaluate("document.querySelector('#pwa-download').click()", false)
  const offlineText = await waitFor("document.querySelector('#pwa-status')?.textContent.includes('Offline reading is ready')", 'offline package download', 120000)
  const offline = await evaluate("(async()=>{const ks=await caches.keys();const k=ks.find(x=>/^ayat-offline-[a-f0-9]{16}$/.test(x));return {text:document.querySelector('#pwa-status').textContent,files:k?await (await caches.open(k)).keys().then(x=>x.length):0,active:(await navigator.serviceWorker.getRegistration()).active.state}})()")
  if (offline.files !== 118) throw new Error(`Offline package count mismatch: ${offline.files}`)
  console.log(`PASS user-triggered offline download: ${offline.files} JSON files validated`)

  const activeVersion = await evaluate("(async()=>{const r=await navigator.serviceWorker.ready;const c=await caches.open('ayat-offline-state-v1');return (await (await c.match(new URL('__offline_active__',r.scope).href)).text()).trim()})()")
  const manifestPath = new URL('../data/offline-manifest.json', import.meta.url)
  const originalManifest = await readFile(manifestPath)
  try {
    const manifest = JSON.parse(originalManifest)
    manifest.version = '1111111111111111'
    await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
    const synced = await evaluate("new Promise(resolve=>{const ch=new MessageChannel();ch.port1.onmessage=e=>{if(e.data.type==='SYNC_COMPLETE')resolve(e.data.version);if(e.data.type==='SYNC_FAILED')resolve('failed')};const w=navigator.serviceWorker.controller;w.postMessage({type:'SYNC_OFFLINE_IF_PRESENT'},[ch.port2])})")
    if (synced !== manifest.version) throw new Error(`Automatic content sync did not activate the new package: ${synced}`)
    console.log('PASS automatic content sync switches to a fully validated new package')

    manifest.version = '2222222222222222'
    manifest.files = [...manifest.files, 'data/missing-pwa-test.json']
    await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n')
    await evaluate("document.querySelector('#pwa-download').click()", false)
    await waitFor("document.querySelector('#pwa-status')?.textContent.includes('Download paused:')", 'failed package validation', 120000)
    const preservedVersion = await evaluate("(async()=>{const r=await navigator.serviceWorker.ready;const c=await caches.open('ayat-offline-state-v1');const v=await c.match(new URL('__offline_active__',r.scope));return v?await v.text():''})()")
    if (preservedVersion !== synced) throw new Error('A failed package update replaced the previously active offline content.')
    console.log('PASS failed package update preserves the previously active offline content')
  } finally {
    await writeFile(manifestPath, originalManifest)
  }

  const workerPath = new URL('../sw.js', import.meta.url)
  const originalWorker = await readFile(workerPath)
  try {
    const workerSource = originalWorker.toString('utf8')
    const changedWorker = workerSource.replace(/const BUILD_ID = '[a-f0-9]{16}'/, "const BUILD_ID = 'abcdef0123456789'")
    if (changedWorker === workerSource) throw new Error('Could not prepare a test deployment version.')
    await writeFile(workerPath, changedWorker)
    await command('Page.navigate', { url: 'http://127.0.0.1:8765/#/surahs' })
    await waitFor("location.hash === '#/surahs' && document.querySelector('.directory-grid')", 'route before app update')
    const oldTimeOrigin = await evaluate('performance.timeOrigin')
    await evaluate("navigator.serviceWorker.getRegistration().then(r=>r.update())")
    await waitFor("navigator.serviceWorker.getRegistration().then(r=>r.waiting && !document.querySelector('#pwa-update').hidden)", 'waiting app update')
    await evaluate("document.querySelector('#pwa-update').click()", false)
    await waitFor(`performance.timeOrigin > ${oldTimeOrigin}`, 'user-approved app update reload')
    const updatedRoute = await evaluate('location.hash')
    if (updatedRoute !== '#/surahs') throw new Error(`App update did not preserve the current route: ${updatedRoute}`)
    console.log('PASS app update notification and Update Now preserve the current route')
  } finally {
    await writeFile(workerPath, originalWorker)
  }

  await command('Network.enable')
  await command('Network.emulateNetworkConditions', { offline: true, latency: 0, downloadThroughput: 0, uploadThroughput: 0, connectionType: 'none' })
  await command('Page.navigate', { url: 'http://127.0.0.1:8765/#/surah/2' })
  await waitFor("document.querySelector('.surah-detail-heading h1')?.textContent.trim()", 'offline Surah route')
  const surah = await evaluate("document.querySelector('.surah-detail-heading h1')?.textContent.trim()")
  if (!surah) throw new Error('Downloaded Surah did not render offline.')
  console.log('PASS offline route and downloaded Surah render')

  await command('Page.navigate', { url: 'http://127.0.0.1:8765/#/duas' })
  const dua = await waitFor("document.querySelector('.duas-page-heading h1')?.textContent.trim()", 'offline Dua catalog')
  if (!dua) throw new Error('Dua catalog did not render offline.')
  console.log('PASS offline Prophetic Duas page renders')

  await command('Page.navigate', { url: 'http://127.0.0.1:8765/#/topics' })
  const topics = await waitFor("document.querySelectorAll('.topic-card').length", 'offline topic directory')
  if (topics !== 12) throw new Error(`Expected 12 topics offline, found ${topics}`)
  console.log('PASS offline topic navigation renders all 12 categories')

  await command('Page.navigate', { url: 'http://127.0.0.1:8765/#/search?q=worship' })
  const search = await waitFor("document.querySelectorAll('.commandment-search-result').length", 'offline commandment search')
  if (search < 1) throw new Error('Offline search returned no results for the downloaded data.')
  console.log(`PASS offline search returns ${search} commandment results`)

  await command('Page.navigate', { url: 'http://127.0.0.1:8765/#/' })
  const daily = await waitFor("document.querySelector('.daily-featured-card')", 'offline Daily Guidance')
  if (!daily) throw new Error('Daily Guidance card did not render offline.')
  console.log('PASS offline Daily Guidance renders')

  await command('Page.reload', { ignoreCache: true })
  await waitFor("document.querySelector('#app')?.textContent.length > 100", 'offline shell reload')
  console.log('PASS offline shell reload')

  await command('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1, connectionType: 'wifi' })
  console.log('Browser integration checks passed.')
} finally {
  socket.close()
}
