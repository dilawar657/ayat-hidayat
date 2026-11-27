# Ayat-e-Hidayat (آیاتِ ہدایت)

A small, static website and installable Progressive Web App built with HTML, CSS, vanilla JavaScript, and local JSON files. It has no application server, framework, or package dependencies.

## Run and deploy

For local testing, serve this folder with any static file server. For example, if Python is already installed:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`. A static HTTP origin is needed because browsers restrict `fetch()` of local JSON files when opening `index.html` directly with `file://`.

To deploy, push the project to GitHub and connect the repository to Netlify. The included `netlify.toml` runs `node scripts/build-daily-guidance-index.mjs` before publishing the project root. The build derives the Daily Guidance index from authoritative Surah files and creates `data/offline-manifest.json` plus the deployment-specific `sw.js`. Run the generator after changing commandment data when serving locally. Hash-based routes work without redirects.

## Files

- `index.html`, `styles.css`, and `app.js` are the complete website.
- The Home, Surahs, Prophetic Duas, Purpose, and About areas are available through hash routes and include English and Urdu interface copy.
- `data/surahs.json` contains the Surah catalogue.
- `data/ahkamat/surah-N.json` contains the Ahkamat collection for Surah N. All 114 files are present. Current collections: Al-Fatihah (2), Al-Baqarah (18), An-Nisa (41), Al-Anfal (14), Ibrahim (6), Al-Anbiya (6), An-Nur (6), Luqman (9), Fatir (8), Al-Jathiyah (9), Al-Hujurat (6), and Al-Asr (4).
- `data/daily-guidance-index.json` is a generated lookup of complete commandment IDs and Surah numbers for Daily Guidance. `scripts/build-daily-guidance-index.mjs` regenerates it from the Surah catalogue and numbered commandment files; do not edit the generated index by hand.
- `data/duas.json` contains seven dua categories and 38 unique supplications. A dua can be associated with more than one category without duplicating its canonical record.
- `data/topics.json` contains the manually curated topic directory. Each link stores only a commandment `id` and `surahNumber`; the Arabic verse, meanings, and references continue to come from the existing `data/ahkamat/surah-N.json` record. Topic pages are available at `#/topics` and `#/topic/{topic-id}`.
- Commandment search is available from the homepage and header at `#/search?q=...`. Its in-memory index is built once per page session from the Surah catalogue and numbered Ahkamat JSON files; it does not depend on topic membership or duplicate commandment content.

Each Surah file uses `surahNumber`, Surah names, an optional bilingual `editorialNote`, and an `ahkamat` array. Each entry can contain an `id`, Urdu and English topics, references, an `ayahs` array (reference, complete Quranic Arabic, and Urdu and English meanings), an optional Urdu editorial note, and source URLs. Keep Quranic text distinct from editorial meanings and notes. The website displays the supplied content and does not generate Quranic content.

The dua catalog keeps categories and canonical dua records separate. It includes Arabic text, transliteration, Urdu and English meanings, context, references, optional narrator and authenticity notes, evidence classifications, and source-review status. Hadith references and gradings are marked for final source-by-source verification before publication.

## PWA architecture and offline reading

- `manifest.webmanifest` defines the standalone app, hash-compatible start URL, colors, and branded SVG icons. `icons/` contains the existing book-and-guidance mark rendered at 192 and 512 sizes, plus a safe-zone maskable variant.
- `sw.js` is generated for each build from `scripts/sw-template.js`. The build identifier includes the app shell and authoritative content files, so a deployment changes the worker bytes and triggers browser update checks. The worker precaches the shell, checks the network first for JSON, and uses the last complete content package when offline.
- The first install caches the app shell. Downloading all 118 content JSON files is an explicit user action via **Download for Offline Reading**; all Surah files are not fetched automatically.
- Package download reports file count and percentage. Each JSON is parsed and checked for its expected catalog shape. Files are staged in a versioned cache; the active version changes only after every file validates. A failed attempt leaves the prior package active and keeps valid staged files for retry.
- After a user downloads offline content, the app checks for a newer content manifest on reconnect and syncs in the background. App-shell updates are announced with **Update Now**; the page reloads only after the user chooses it, preserving the current hash route.
- Existing website JSON files remain the single source of truth. Add content to those files and deploy; the build regenerates the indexes. Visited JSON refreshes network-first, and the opted-in offline package syncs when its content version changes.
- Caches are local to each browser installation. Offline content is not shared across devices or browser profiles. Sharing and features requiring external websites may be limited offline.

### Install

- **Android / Chromium browsers:** open the site online and use the browser's Install app / Add to Home screen prompt or menu.
- **Desktop Chromium browsers:** open the site over HTTPS and select the install icon in the address bar or the browser's Install Ayat-e-Hidayat menu item.
- **iPhone / iPad:** open the site in Safari, tap **Share**, choose **Add to Home Screen**, then tap **Add**. iOS uses its own Home Screen flow.

Production installation requires HTTPS; `localhost` is treated as a secure origin for local development. The live site must be deployed at the root scope. Netlify applies revalidation headers to HTML, JSON, CSS, scripts, and the manifest, and disables browser caching for the service worker so deployments can be discovered.

### Local PWA and update checks

Run the generator, then serve the project through a local HTTP server:

```sh
node scripts/build-daily-guidance-index.mjs
python -m http.server 8000
```

Open `http://localhost:8000`. Service workers do not run from `file://`. To check a deployment update, change an app file or data JSON, rebuild, and serve the new files from the same origin. Reload or reconnect the installed site; a waiting shell update appears with **Update Now**. Previously downloaded content remains available while a new package is fetched and validated.

For headless Chrome offline integration checks, launch Chrome with remote debugging on port 9334 and the local site open at `http://127.0.0.1:8765/`, then run:

```sh
node scripts/test-pwa-browser.mjs
```

This downloads the offline package, verifies offline routes and reload, simulates a new content version, and checks that a failed package update cannot replace the active offline package. It temporarily edits only generated `data/offline-manifest.json` and restores the original file afterward.
