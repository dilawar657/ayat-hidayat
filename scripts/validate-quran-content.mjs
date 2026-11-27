import { readdir, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url))
const directory = join(root, 'data', 'ahkamat')
const files = (await readdir(directory)).filter((name) => /^surah-\d+\.json$/.test(name))
const suspiciousRuns = /\?{3,}/u
const errors = []
let recordsChecked = 0

for (const file of files) {
  const document = JSON.parse(await readFile(join(directory, file), 'utf8'))
  for (const commandment of document.ahkamat || []) {
    recordsChecked += 1
    const fields = [
      ['topicUrdu', commandment.topicUrdu],
      ['editorialNoteUrdu', commandment.editorialNoteUrdu],
      ['translationUrdu', commandment.translationUrdu],
      ...(commandment.ayahs || []).flatMap((ayah, index) => [
        [`ayahs[${index}].arabic`, ayah.arabic],
        [`ayahs[${index}].urduMeaning`, ayah.urduMeaning]
      ])
    ]
    for (const [field, value] of fields) {
      if (typeof value === 'string' && suspiciousRuns.test(value)) {
        errors.push(`${file} ${commandment.id} ${field} contains a run of three or more question marks`)
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log(`PASS Unicode corruption scan: ${recordsChecked} commandment records; no suspicious question-mark runs.`)
}
