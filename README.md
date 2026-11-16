# Ayat-e-Hidayat (آیاتِ ہدایت)

A small, static website built with HTML, CSS, vanilla JavaScript, and local JSON files. It has no application server, framework, package dependencies, or build step. Quranic commandment collections start empty; only content you supply should be added.

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
- `data/ahkamat/surah-N.json` contains the Ahkamat collection for Surah N. All 114 files are present and currently have an empty `ahkamat` array.

When adding an entry, include only researched content you provide. Keep the Quranic Arabic, reference, translations, explanation, and source attribution together in the matching Surah JSON file. The website displays the entries in that file and does not generate Quranic content.
