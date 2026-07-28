# These Parts

**These Parts** is a personal collection of places worth noticing close to
home—found while wandering, recommended by friends, or waiting for another
look.

The site includes a title-free collage landing page, a searchable and
filterable index, and a shareable detail page for each place.

- Live: [shaunalynn.org/these-parts](http://shaunalynn.org/these-parts/)
- Repository: [github.com/shduff/these-parts](https://github.com/shduff/these-parts)
- Current collection: 27 places

## Run locally

You need Node.js 22 or newer.

```bash
npm install
npm run dev
```

Then open the local address printed in the terminal, normally
[http://localhost:5173](http://localhost:5173).

## Build and publish

```bash
npm run build
```

The production files are written to `dist/`. Pushing `main` runs
`.github/workflows/deploy-pages.yml` and publishes the build to GitHub Pages.

## Editing

Places live in [`src/place-data.ts`](src/place-data.ts). Each place has a name,
What, Where, Why, Been/Next status, optional Via attribution, slug, map link,
and approved image.

Artwork lives in [`public/art/places`](public/art/places).

## Project handoff

Start with [`docs/CURRENT_STATUS.md`](docs/CURRENT_STATUS.md) for a concise
answer to “where are we?” and “where can we pick up?”

- [`docs/PROJECT_JOURNAL.md`](docs/PROJECT_JOURNAL.md): purpose, product model,
  and decision history
- [`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md): visual, image, interface, and
  writing system
- [`docs/NEW_PLACES.md`](docs/NEW_PLACES.md): expansion decisions and held
  discoveries
- [`docs/MEDIA_STORAGE.md`](docs/MEDIA_STORAGE.md): current and longer-term
  image-storage plan
