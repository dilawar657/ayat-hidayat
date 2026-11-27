const BUILD_ID = 'e12dee5f287736c2'
const SHELL_CACHE = `ayat-shell-${BUILD_ID}`
const STATE_CACHE = 'ayat-offline-state-v1'
const ACTIVE_KEY = new URL('__offline_active__', self.registration.scope).href
const OFFLINE_MANIFEST_URL = new URL('data/offline-manifest.json', self.registration.scope).href
const SHELL_FILES = [
  './', 'index.html', 'styles.css', 'app.js', 'pwa-client.js', 'manifest.webmanifest',
  'favicon.svg', 'icons/ayat-icon-192.svg', 'icons/ayat-icon-512.svg', 'icons/ayat-icon-maskable.svg'
]

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE)
    await cache.addAll(SHELL_FILES.map((path) => new URL(path, self.registration.scope).href))
    if (!self.registration.active) await self.skipWaiting()
  })())
})

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys.filter((key) => key.startsWith('ayat-shell-') && key !== SHELL_CACHE).map((key) => caches.delete(key)))
    await self.clients.claim()
    const clients = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
    clients.forEach((client) => client.postMessage({ type: 'APP_UPDATED', buildId: BUILD_ID }))
  })())
})

async function activePackageCache() {
  const state = await caches.open(STATE_CACHE)
  const active = await state.match(ACTIVE_KEY)
  if (!active) return null
  const version = (await active.text()).trim()
  return version ? caches.open(`ayat-offline-${version}`) : null
}

function isJsonRequest(url) {
  return url.pathname.endsWith('.json')
}

async function validJsonResponse(response) {
  if (!response || !response.ok) return false
  try { await response.clone().json(); return true } catch { return false }
}

async function validateContentFile(path, response) {
  if (!await validJsonResponse(response)) return false
  let data
  try { data = await response.clone().json() } catch { return false }
  if (path === 'data/surahs.json') return Array.isArray(data) && data.length === 114
  if (path === 'data/duas.json') return Array.isArray(data.categories) && data.categories.length > 0 && Array.isArray(data.duas)
  if (path === 'data/topics.json') return Array.isArray(data.topics) && data.topics.length === 12
  if (path === 'data/daily-guidance-index.json') return data.version === 1 && Array.isArray(data.records)
  const match = path.match(/^data\/ahkamat\/surah-(\d+)\.json$/)
  if (match) return Number(data.surahNumber) === Number(match[1]) && Array.isArray(data.ahkamat)
  return false
}

self.addEventListener('fetch', (event) => {
  const request = event.request
  const url = new URL(request.url)
  if (request.method !== 'GET' || url.origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request, { cache: 'no-store' }).catch(async () => {
      const shell = await caches.open(SHELL_CACHE)
      return (await shell.match(new URL('index.html', self.registration.scope))) || Response.error()
    }))
    return
  }

  if (isJsonRequest(url)) {
    event.respondWith((async () => {
      try {
        const response = await fetch(request, { cache: 'no-store' })
        if (await validJsonResponse(response)) {
          const shell = await caches.open(SHELL_CACHE)
          await shell.put(request, response.clone())
          return response
        }
        const offline = await activePackageCache()
        return (await offline?.match(request)) || response
      } catch {
        const offline = await activePackageCache()
        const shell = await caches.open(SHELL_CACHE)
        return (await offline?.match(request)) || (await shell.match(request)) || Response.error()
      }
    })())
    return
  }

  event.respondWith((async () => {
    const shell = await caches.open(SHELL_CACHE)
    const cached = await shell.match(request)
    if (cached) return cached
    try {
      const response = await fetch(request)
      if (response.ok && url.pathname.startsWith(new URL(self.registration.scope).pathname)) await shell.put(request, response.clone())
      return response
    } catch { return Response.error() }
  })())
})

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') { self.skipWaiting(); return }
  if (event.data?.type === 'GET_OFFLINE_STATUS') {
    event.waitUntil((async () => {
      const state = await caches.open(STATE_CACHE)
      const active = await state.match(ACTIVE_KEY)
      const version = active ? (await active.text()).trim() : ''
      const cache = version ? await caches.open(`ayat-offline-${version}`) : null
      event.ports[0]?.postMessage({ type: 'OFFLINE_STATUS', available: Boolean(version), count: cache ? (await cache.keys()).length : 0 })
    })())
    return
  }
  const manualDownload = event.data?.type === 'DOWNLOAD_OFFLINE_CONTENT'
  if (!manualDownload && event.data?.type !== 'SYNC_OFFLINE_IF_PRESENT') return
  const port = event.ports[0]
  event.waitUntil((async () => {
    let stageName = null
    try {
      const response = await fetch(OFFLINE_MANIFEST_URL, { cache: 'no-store' })
      if (!(await validJsonResponse(response))) throw new Error('Offline content manifest is unavailable or invalid.')
      const manifest = await response.json()
      if (!/^[a-f0-9]{16}$/.test(manifest.version) || !Array.isArray(manifest.files) || manifest.files.length < 118) throw new Error('Offline content manifest failed validation.')
      const state = await caches.open(STATE_CACHE)
      const activeResponse = await state.match(ACTIVE_KEY)
      const activeVersion = activeResponse ? (await activeResponse.text()).trim() : ''
      if (!manualDownload && !activeVersion) return
      if (activeVersion === manifest.version) {
        port?.postMessage({ type: 'COMPLETE', total: manifest.files.length, version: manifest.version })
        return
      }

      stageName = `ayat-offline-${manifest.version}`
      const cache = await caches.open(stageName)
      const total = manifest.files.length
      let complete = 0
      for (const path of manifest.files) {
        const url = new URL(path, self.registration.scope).href
        let cached = await cache.match(url)
        if (!await validateContentFile(path, cached)) {
          if (cached) await cache.delete(url)
          const fileResponse = await fetch(url, { cache: 'no-store' })
          if (!await validateContentFile(path, fileResponse)) throw new Error(`Could not validate ${path}`)
          cached = fileResponse.clone()
          await cache.put(url, cached)
        }
        complete += 1
        port?.postMessage({ type: manualDownload ? 'PROGRESS' : 'SYNC_PROGRESS', complete, total, file: path })
      }

      const written = await caches.open(stageName)
      for (const path of manifest.files) {
        if (!await validateContentFile(path, await written.match(new URL(path, self.registration.scope).href))) throw new Error(`Offline validation failed for ${path}`)
      }
      await state.put(ACTIVE_KEY, new Response(manifest.version, { headers: { 'Content-Type': 'text/plain' } }))
      const oldPackages = (await caches.keys()).filter((name) => /^ayat-offline-[a-f0-9]{16}$/.test(name) && name !== stageName)
      await Promise.all(oldPackages.map((name) => caches.delete(name)))
      port?.postMessage({ type: manualDownload ? 'COMPLETE' : 'SYNC_COMPLETE', total, version: manifest.version })
    } catch (error) {
      port?.postMessage({ type: manualDownload ? 'FAILED' : 'SYNC_FAILED', message: error instanceof Error ? error.message : 'Offline download failed.' })
    }
  })())
})
