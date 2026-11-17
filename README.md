# Ayat-e-Hidayat (آیاتِ ہدایت)

A small, static website built with HTML, CSS, vanilla JavaScript, and local JSON files. It has no application server, framework, package dependencies, or build step.

## Run and deploy

For local testing, serve this folder with any static file server. For example, if Python is already installed:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`. A static HTTP origin is needed because browsers restrict `fetch()` of local JSON files when opening `index.html` directly with `file://`.

To deploy, push the project to GitHub and connect the repository to Netlify. The included `netlify.toml` sets the publish directory to `.` and defines no build command. Hash-based routes work without redirects.

## Files

- `index.html`, `styles.css`, and `app.js` are the complete website.
- `data/surahs.json` contains the Surah catalogue.
- `data/ahkamat/surah-N.json` contains the Ahkamat collection for Surah N. All 114 files are present. Current collections: Al-Baqarah (18), An-Nisa (41), Ibrahim (6), Al-Anbiya (6), An-Nur (6), Luqman (9), Al-Hujurat (6), and Al-Asr (4).

Each Surah file uses `surahNumber`, Surah names, an optional bilingual `editorialNote`, and an `ahkamat` array. Each entry can contain an `id`, Urdu and English topics, references, an `ayahs` array (reference, complete Quranic Arabic, and Urdu and English meanings), an optional Urdu editorial note, and source URLs. Keep Quranic text distinct from editorial meanings and notes. The website displays the supplied content and does not generate Quranic content.
