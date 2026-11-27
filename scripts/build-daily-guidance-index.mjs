import { readdir, readFile, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const dataDirectory = join(root, 'data')
const commandmentsDirectory = join(dataDirectory, 'ahkamat')

async function readJson(path) {
  return JSON.parse(await readFile(path, 'utf8'))
}

function referenceText(reference = {}) {
  const start = Number(reference.ayahStart)
  const end = Number(reference.ayahEnd)
  return `${Number(reference.surah)}:${start}${end && end !== start ? `–${end}` : ''}`
}

function commandmentIsComplete(commandment, surah) {
  if (!commandment?.id || !surah?.nameEnglish || !surah?.nameArabic || !surah?.nameUrdu) return false
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

const surahs = await readJson(join(dataDirectory, 'surahs.json'))
if (!Array.isArray(surahs) || surahs.length !== 114) {
  throw new Error('Expected the Surah catalogue to contain 114 records')
}

const files = await readdir(commandmentsDirectory)
const numberedFiles = files.filter((name) => /^surah-\d+\.json$/.test(name))
if (numberedFiles.length !== surahs.length) {
  throw new Error(`Expected ${surahs.length} numbered Surah files; found ${numberedFiles.length}`)
}

const ids = new Set()
const records = []
for (const surah of surahs) {
  const content = await readJson(join(commandmentsDirectory, `surah-${surah.number}.json`))
  if (Number(content.surahNumber) !== Number(surah.number) || !Array.isArray(content.ahkamat)) {
    throw new Error(`Invalid commandment file for Surah ${surah.number}`)
  }
  for (const commandment of content.ahkamat) {
    if (!commandment.id || ids.has(commandment.id)) {
      throw new Error(`Missing or duplicate commandment ID in Surah ${surah.number}`)
    }
    ids.add(commandment.id)
    if (commandmentIsComplete(commandment, surah)) {
      records.push({ id: commandment.id, surahNumber: Number(surah.number) })
    }
  }
}

const output = JSON.stringify({ version: 1, records }, null, 2) + '\n'
await writeFile(join(dataDirectory, 'daily-guidance-index.json'), output, 'utf8')
process.stdout.write(`Generated Daily Guidance index: ${records.length} records, ${Buffer.byteLength(output)} bytes.\n`)

const offlineFiles = [
  'data/surahs.json', 'data/duas.json', 'data/topics.json', 'data/daily-guidance-index.json',
  ...surahs.map((surah) => `data/ahkamat/surah-${surah.number}.json`)
]
const hash = createHash('sha256')
for (const file of ['index.html', 'app.js', 'styles.css', 'pwa-client.js', 'manifest.webmanifest', 'favicon.svg', 'icons/ayat-icon-192.svg', 'icons/ayat-icon-512.svg', 'icons/ayat-icon-maskable.svg', 'scripts/sw-template.js', ...offlineFiles]) {
  hash.update(file).update('\0').update(await readFile(join(root, file)))
}
const buildId = hash.digest('hex').slice(0, 16)
const offlineManifest = JSON.stringify({ version: buildId, files: offlineFiles }, null, 2) + '\n'
await writeFile(join(dataDirectory, 'offline-manifest.json'), offlineManifest, 'utf8')
const workerTemplate = await readFile(join(root, 'scripts', 'sw-template.js'), 'utf8')
await writeFile(join(root, 'sw.js'), workerTemplate.replaceAll('__BUILD_ID__', buildId), 'utf8')
process.stdout.write(`Generated offline content manifest: ${offlineFiles.length} files, build ${buildId}.\n`)
