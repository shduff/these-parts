# These Parts

**These Parts** is a personal collection of places worth noticing close to
home—found while wandering, recommended by friends, or waiting for another
look.

This repository contains the first local draft: a title-free collage landing
page, a searchable and filterable index, and a shareable detail page for each
place.

## Current collection

- Ether Dome
- Mapparium
- Boston Athenaeum
- Old South Church
- All Saints Way
- Metropolitan Waterworks Museum

The six approved place illustrations are collected in
[`public/art/places`](public/art/places). Early image explorations are kept
locally but intentionally excluded from this repository.

## Run locally

You need Node.js 22 or newer.

```bash
npm install
npm run dev
```

Then open the local address printed in the terminal, normally
[http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

The production-ready static files are written to `dist/`. The Vite build uses
relative asset paths so it can later be hosted from a GitHub Pages repository
subpath.

## Editing places

The current entries live in [`src/place-data.ts`](src/place-data.ts). Each place
has:

- `name`
- `what`
- `where` information (`area`, `address`, and `googleMapsUrl`)
- `why`
- `status` (`Been` or `Next`)
- `via`
- a unique `slug` and approved image

See [`docs/PROJECT_JOURNAL.md`](docs/PROJECT_JOURNAL.md) for the product
specification and [`docs/STYLE_GUIDE.md`](docs/STYLE_GUIDE.md) for the visual
and writing system.

## Publishing

The intended host is GitHub Pages. Publishing is deliberately separate from
the local build and repository creation so deployment settings can be chosen
explicitly.
