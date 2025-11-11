# Portfolio Astro + React + Tailwind — v2 Custom

- Dark theme (inspi ROG), accents `#005A1E`
- SEO & OpenGraph intégrés (`src/components/Seo.astro`)
- Pages: Accueil, Projets, CV (Timeline + bouton CV PDF), Contact (Formspree), 404
- GitHub Pages ready (Actions)

## Déploiement GitHub Pages
- Mets `site` et éventuellement `base` dans `astro.config.mjs` :
```js
export default defineConfig({
  site: 'https://<user>.github.io/<repo>',
  base: '/<repo>'
});
```
- Commit & push sur `main`, Pages = GitHub Actions.

## Personnaliser
- Couleurs: `tailwind.config.cjs`
- Projets: `src/data/projects.json`
- CV: place `public/cv.pdf`
- Contact: remplace l’URL `Formspree` (ou supprime le form)
- Meta: passe `title/description/image` via le layout `Base.astro`

Bon build !
