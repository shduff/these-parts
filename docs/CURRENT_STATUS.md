# These Parts — Current Status

Last updated: July 27, 2026

## Where things stand

**These Parts** is a working, public, static place guide with 27 entries. It has
a title-free collage landing page, searchable and filterable cards, and a
shareable detail page for every place.

- Live site: `http://shaunalynn.org/these-parts/`
- GitHub: `https://github.com/shduff/these-parts`
- Hosting: GitHub Pages
- Deployment: automatic from `main` through
  `.github/workflows/deploy-pages.yml`
- Ongoing software cost: none at the present scale

## Current collection

- **27 total places**
- **21 Been**
- **6 Next**
- **21 new images** added in the July 2026 expansion
- **6 foundational images** retained exactly as the original visual references

Alewife Extension and Alewife Brook Path are intentionally separate entries.
Buffalo Exchange — Jamaica Plain is not included because it closed. The
Worcester arcade is titled Free Play — Worcester.

## What works

- Text search across name, descriptions, location, address, and attribution.
- Area, Status, and Via filters.
- Responsive card grid.
- Hash-based detail URLs that work on GitHub Pages.
- Share button for each place.
- Google Maps links.
- Optional Via values; missing attribution does not display fake copy.
- Mixed cut-paper image system: contained illustrations and open-field
  compositions, all connected by the red thread.

## Where to edit

- Places and copy: `src/place-data.ts`
- Interface: `src/App.tsx`
- Styles: `src/styles.css`
- Approved artwork: `public/art/places/`
- Product history and decisions: `docs/PROJECT_JOURNAL.md`
- Visual and writing rules: `docs/STYLE_GUIDE.md`
- Expansion intake and held discoveries: `docs/NEW_PLACES.md`
- Media plan: `docs/MEDIA_STORAGE.md`

## Remaining questions

1. Confirm the preferred Google Maps pin for McGrath Highway Overpass.
2. Confirm the preferred pin or segment for Alewife Brook Path.
3. Decide how Lehrhaus attribution should be phrased publicly.
4. Identify the held Providence tunnel and circular garden.
5. Decide whether future editing should stay in source or gain a simple
   content form/CMS.
6. Resolve the custom-domain HTTPS certificate mismatch if the site should use
   HTTPS at `shaunalynn.org`.

## Media decision

Keep approved site images in the repo for now. Do not add a paid service yet.
When the collection starts to make the repository or deployments heavy, put
masters and web derivatives in Cloudflare R2 and keep their URLs in a small
manifest. Details and migration triggers are in `docs/MEDIA_STORAGE.md`.

## How to pick up next time

Ask Codex:

> Read `docs/CURRENT_STATUS.md`, `docs/PROJECT_JOURNAL.md`, and
> `docs/STYLE_GUIDE.md`, then help me continue These Parts.

For a new place, provide: name, What, Why, Been/Next, Via if any, area,
address/map link if known, and any image detail that makes the place
recognizable.
