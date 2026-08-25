# Rehan Zahid — Portfolio

A single-page, frontend-only React portfolio (Vite + React) matching your
brand colors, fonts, and layout sketch.

## What's inside

- `src/App.jsx` — page layout (banner, intro pill, links section, tiles)
- `src/ExpandingPill.jsx` — the circular-photo-to-capsule scroll animation
- `src/icons.jsx` — small generic line icons used on the link tiles
- `src/index.css` — colors, fonts, layout, responsive rules
- `src/assets/banner.jpg`, `src/assets/pfp.png` — your images

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the static site.

## Deploy to GitHub Pages

**Option A — gh-pages package (easiest)**

1. Push this project to a GitHub repo.
2. In `vite.config.js`, set `base: '/your-repo-name/'` (replace with your
   actual repo name). Leave it as `'./'` only if you're deploying to a
   user/org page (`username.github.io`) or a custom domain.
3. Run:
   ```bash
   npm run deploy
   ```
   This builds the site and pushes `dist/` to a `gh-pages` branch.
4. In your repo settings → Pages, set the source to the `gh-pages` branch.

**Option B — GitHub Actions**

If you'd rather deploy automatically on every push to `main`, let me know
and I can add a workflow file for that too.

## Customizing

- **Colors / fonts**: all in the `:root` block at the top of `src/index.css`.
- **Pill capsule width**: pass a different `targetWidth` prop to
  `<ExpandingPill />` in `App.jsx`.
- **Links**: edit the `LINKS` object at the top of `App.jsx`.
- **Tile colors**: `.tile-linkedin`, `.tile-github`, `.tile-insta`,
  `.tile-facebook`, `.tile-threads`, `.tile-gmail` in `src/index.css`.
