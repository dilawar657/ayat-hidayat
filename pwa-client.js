(() => {
  const panel = document.getElementById('pwa-tools')
  const status = document.getElementById('pwa-status')
  const downloadButton = document.getElementById('pwa-download')
  const updateButton = document.getElementById('pwa-update')
  const installButton = document.getElementById('pwa-install')
  if (!panel || !('serviceWorker' in navigator)) {
    if (panel) { panel.hidden = false; status.textContent = 'Offline app support is unavailable in this browser.' }
    return
  }

  panel.hidden = false
  let registration
  let installPrompt
  let updatingFromUser = false
  let offlineCount = 0
  const askWorker = (type, payload = {}) => new Promise((resolve) => {
    const worker = navigator.serviceWorker.controller || registration?.active
    if (!worker) return resolve(null)
    const channel = new MessageChannel()
    const timeout = setTimeout(() => resolve(null), 10000)
    channel.port1.onmessage = (event) => {
      if (event.data?.type === type) { clearTimeout(timeout); resolve(event.data) }
    }
    worker.postMessage(payload, [channel.port2])
  })

  function showStatus(message) { status.textContent = message }

  async function refreshOfflineStatus() {
    const result = await askWorker('OFFLINE_STATUS', { type: 'GET_OFFLINE_STATUS' })
    offlineCount = result?.count || 0
    if (result?.available) showStatus(`Offline reading is ready (${offlineCount} files).`)
    else showStatus(navigator.onLine ? 'Offline reading is not downloaded yet.' : 'You are offline. Download the offline reading package when you reconnect.')
  }

  function inspectRegistration() {
    if (registration?.waiting) {
      showStatus('A new version of Ayat-e-Hidayat is available.')
      updateButton.hidden = false
    } else {
      updateButton.hidden = true
      if (!downloadButton.disabled) refreshOfflineStatus()
    }
  }

  function syncDownloadedContent() {
    const worker = navigator.serviceWorker.controller || registration?.active
    if (!worker || !navigator.onLine) return
    const channel = new MessageChannel()
    channel.port1.onmessage = ({ data }) => {
      if (data.type === 'SYNC_PROGRESS') showStatus(`Syncing saved offline content: ${data.complete} of ${data.total} files (${Math.round(data.complete / data.total * 100)}%).`)
      if (data.type === 'SYNC_COMPLETE') showStatus(`Offline reading is up to date (${data.total} files).`)
      if (data.type === 'SYNC_FAILED') showStatus('Offline content sync paused. Your previous downloaded package remains available; syncing will retry when you reconnect.')
    }
    worker.postMessage({ type: 'SYNC_OFFLINE_IF_PRESENT' }, [channel.port2])
  }

  navigator.serviceWorker.register('sw.js', { scope: './', updateViaCache: 'none' }).then((value) => {
    registration = value
    registration.addEventListener('updatefound', () => {
      const installing = registration.installing
      installing?.addEventListener('statechange', inspectRegistration)
    })
    registration.update().catch(() => {})
    inspectRegistration()
    fetch('./', { method: 'HEAD', cache: 'no-store' }).then((response) => {
      if (response.ok) syncDownloadedContent()
    }).catch(() => {})
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (updatingFromUser) location.reload()
      else refreshOfflineStatus()
    })
    refreshOfflineStatus()
  }).catch((error) => {
    console.error('Service worker registration failed:', error)
    showStatus('Offline app setup failed. Please reload while online.')
  })

  downloadButton.addEventListener('click', async () => {
    const worker = navigator.serviceWorker.controller || registration?.active
    if (!worker) { showStatus('Preparing offline reading. Please try again in a moment.'); return }
    downloadButton.disabled = true
    downloadButton.textContent = 'Downloading…'
    showStatus('Preparing offline content…')
    const channel = new MessageChannel()
    channel.port1.onmessage = async ({ data }) => {
      if (data.type === 'PROGRESS') {
        showStatus(`Downloading offline content: ${data.complete} of ${data.total} files (${Math.round(data.complete / data.total * 100)}%).`)
      } else if (data.type === 'COMPLETE') {
        offlineCount = data.total
        showStatus(`Offline reading is ready (${data.total} files).`)
        downloadButton.disabled = false
        downloadButton.textContent = 'Refresh Offline Content'
      } else if (data.type === 'FAILED') {
        showStatus(`Download paused: ${data.message} Retry to continue; valid downloaded files are kept.`)
        downloadButton.disabled = false
        downloadButton.textContent = offlineCount ? 'Retry Offline Update' : 'Retry Download'
      }
    }
    worker.postMessage({ type: 'DOWNLOAD_OFFLINE_CONTENT' }, [channel.port2])
  })

  updateButton.addEventListener('click', () => {
    if (!registration?.waiting) return
    updatingFromUser = true
    showStatus('Updating Ayat-e-Hidayat…')
    registration.waiting.postMessage({ type: 'SKIP_WAITING' })
  })

  window.addEventListener('online', () => {
    showStatus('Checking the website connection…')
    fetch('./', { method: 'HEAD', cache: 'no-store' }).then((response) => {
      if (!response.ok) throw new Error('Website is unavailable')
      registration?.update().catch(() => {})
      showStatus('Connected. Checking for updates…')
      refreshOfflineStatus()
      syncDownloadedContent()
    }).catch(() => showStatus('Website connection is unavailable. Previously downloaded reading remains available.'))
  })
  window.addEventListener('offline', () => showStatus('You are offline. Previously downloaded reading remains available.'))

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault()
    installPrompt = event
    installButton.hidden = false
  })
  installButton.addEventListener('click', async () => {
    if (!installPrompt) return
    installPrompt.prompt()
    await installPrompt.userChoice
    installPrompt = null
    installButton.hidden = true
  })
  window.addEventListener('appinstalled', () => { installButton.hidden = true; showStatus('Ayat-e-Hidayat is installed.') })
})()
