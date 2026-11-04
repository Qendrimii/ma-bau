# MA Bau – Handoff

Website for **MA Bau GmbH**, a construction company in Böblingen (Region Stuttgart).
Live at **http://www.ma-bau.com** (HTTPS does not work yet, see Open items).

## Stack

- React 18 + Vite 6, Tailwind CSS 3, React Router 7, lucide-react icons
- Static single-page app, no backend
- Hosted on IONOS shared hosting (Apache)
- Contact form opens the visitor's email app (`mailto:info@ma-bau.com`); nothing is sent through a server

## Getting started

Needs Node 20+.

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # serve the build locally
```

## Deploying

```bash
npm run deploy    # build, then upload dist/ to IONOS via SFTP (upload.js)
```

- Deploys run from a local machine. There is no CI/CD.
- `upload.js` reads SFTP credentials from `.env`, which is **not in the repo**.
  Copy `.env.example` to `.env` and ask the owner for the values. Never commit `.env`.
- Files go to `/web` on the server (`SFTP_REMOTE_DIR`).
- The upload only adds and overwrites files; it never deletes. Old hashed files in
  `/web/assets` pile up over time and can be cleaned out by hand.

## Project layout

| Path | What it is |
|---|---|
| `src/App.jsx` | Routes: `/`, `/projekt/:slug`, `/leistung/:slug`, `/impressum`, `/datenschutz`, `/agb` |
| `src/pages/` | One component per route |
| `src/components/` | Homepage sections: Navbar, Hero, Services, Projects, About, Contact, Footer |
| `src/data/services.js` | Text and images for each service page (Rohbau, Hochbau, Neubau, An-/Umbau …) |
| `src/data/projects.js` | Projects shown on the site, with photo galleries |
| `index.html` | Title, meta tags, Open Graph, JSON-LD business data, Google Fonts |
| `public/` | Copied as-is into the build: `.htaccess`, `robots.txt`, `sitemap.xml`, `llms.txt`, Google Search Console verification file, project photos |

`public/.htaccess` handles the apex → `www` redirect, the SPA fallback to `index.html`,
caching, gzip and security headers.

## Content rules

- **Only real content.** The site started from a template; fake team members, fake
  projects and a made-up review rating were removed. Don't add team bios, projects
  or review stars without real data from the owner.
- **One real project so far:** Ärztehaus mit 4 Wohnungen, Steinenbronn
  (photos `public/projekte/aerztehaus-steinenbronn/01.jpg`–`43.jpg`).
- The "15+ Jahre Erfahrung" and "200+ Projekte" figures are confirmed by the owner.
- Company facts (name, address, HRB, managing director) appear in several places.
  When one changes, update all of them: `src/pages/Impressum.jsx`, `index.html`
  (meta + JSON-LD), `public/llms.txt`, and the footer/contact components.

### Adding a project

1. Put photos in `public/projekte/<slug>/` named `01.jpg`, `02.jpg`, …
2. Add an entry to `src/data/projects.js` (copy the existing one)
3. Add `https://www.ma-bau.com/projekt/<slug>` to `public/sitemap.xml`
4. Mention it in `public/llms.txt`

## SEO / AI visibility

- Google Search Console ownership is verified through
  `public/googlea0d28f43b6bba827.html`. Don't delete that file.
- `public/sitemap.xml` lists all pages. Add new routes to it.
- `public/robots.txt` explicitly allows AI crawlers (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended, etc.), and `public/llms.txt` gives them a
  plain-text summary of the company. Keep `llms.txt` in sync with the site.

## Open items

In rough priority order:

1. **Rotate the SFTP password** in the IONOS panel, then update `.env`. Overdue;
   ask the owner for background.
2. **Turn on HTTPS.** `https://www.ma-bau.com` currently fails with an SSL error,
   but the canonical tag, sitemap and robots.txt already point to `https://` URLs.
   Steps: assign an SSL certificate to the domain in the IONOS panel → uncomment
   the "Force HTTPS" block in `public/.htaccess` → `npm run deploy`.
3. **Impressum placeholders** in `src/pages/Impressum.jsx`:
   - USt-IdNr. (`[BITTE ERGÄNZEN: DE123456789]`). Needed before promoting the site.
   - "Verantwortlich für den Inhalt" name (`[BITTE ERGÄNZEN: Name Geschäftsführer]`).
     The heading also cites § 55 Abs. 2 RStV, which has been replaced by
     § 18 Abs. 2 MStV.
4. **GDPR (DSGVO) review of third-party requests.** The site loads Google Fonts from
   Google's servers (`index.html`), embeds Google Maps without consent
   (`Contact.jsx`), and hotlinks stock photos from Unsplash. Self-hosting the fonts
   is the usual fix for the Google Fonts issue in Germany; the Maps embed needs a
   click-to-load or consent step, or should be replaced with a plain link.
5. **Stock photos.** Service pages and some homepage sections still use Unsplash
   images. Swap them for real company photos when available.
6. **Social links** in the JSON-LD (`facebook.com/mabaugmbh`, `instagram.com/mabaugmbh`,
   `linkedin.com/company/mabaugmbh`): confirm these profiles exist, or remove them.
7. Cosmetic: `package.json` still has the template name `kendrix-bau`.
