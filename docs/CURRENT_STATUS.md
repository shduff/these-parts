# These Parts — Current Status

Last updated: August 12, 2026

## Where things stand

**These Parts** is a working, public, static place guide with 64 entries. It has
a title-free collage landing page, searchable and filterable cards, and a
shareable detail page for every place.

- Live site: `http://shaunalynn.org/these-parts/`
- GitHub: `https://github.com/shduff/these-parts`
- Hosting: GitHub Pages
- Deployment: automatic from `main` through
  `.github/workflows/deploy-pages.yml`
- Ongoing software cost: none at the present scale

## Current collection

- **64 total places** (27 original + 37 newly published)
- **52 Done that.**
- **12 Not yet.**
- Approved cut-paper artwork is now in `public/art/places/` for the full collection.
- New entries have provisional Why copy so the cards and detail pages are usable;
  replace those placeholders during the next Why pass.

Alewife Extension and Alewife Brook Path are intentionally separate entries.
Buffalo Exchange — Jamaica Plain is not included because it closed. The
Worcester arcade is titled Free Play — Worcester.

## What works

- Text search across name, descriptions, location, and address.
- Area and Been there? filters.
- Responsive card grid.
- Hash-based detail URLs that work on GitHub Pages.
- Share button for each place.
- Google Maps links.
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
- Content-model proposal and entry-by-entry ledger: `docs/CONTENT_REVIEW.md`
- Second expansion intake and Lore list: `docs/CONTENT_REVIEW_ROUND_2.md`

## Remaining questions

1. Confirm the preferred Google Maps pin for McGrath Highway Overpass.
2. Confirm the preferred pin or segment for Alewife Brook Path.
3. Decide how Lehrhaus attribution should be phrased publicly.
4. Identify the held Providence tunnel and circular garden.
5. Decide whether future editing should stay in source or gain a simple
   content form/CMS.
6. Resolve the custom-domain HTTPS certificate mismatch if the site should use
   HTTPS at `shaunalynn.org`.
7. Replace the provisional Why copy on the 37 newly published entries in a
   deliberate entry-by-entry Why pass.
8. Return to the 11-item Lore list in `CONTENT_REVIEW_ROUND_2.md` only after
   the Why pass; clarify each item rather than guessing.
9. Create an About page explaining who made These Parts, why it exists, and how
   the collection grows. Explore **lore** there as the personal and social
   connective tissue of the project, rather than adding it as a required field
   to every place record.
10. Reintroduce lightweight categories for browsing and filtering, based on the
    original design vocabulary: food, shopping, quick stop, whole thing, and
    other useful categories that emerge from the collection. Keep categories
    editorial and permissive; do not force every place into a single box.

## Geographic proximity todo

- Add reliable coordinates to the location model.
- Replace the current arbitrary three-item related list with the geographically
  nearest places.
- When that replacement is complete, rename the related-place section to
  **Elsewhere in the index, nearby on the map**. Do not publish that promise
  while the recommendations are still arbitrary.
- Decide whether related links should show approximate distance, neighborhood,
  or walking/transit context.
- Use proximity more generally in browsing and filtering, while keeping the
  site useful without requiring a visitor's live location.
- Consider a future map view only after the underlying location data is clean.

## Media decision

Keep approved site images in the repo for now. Do not add a paid service yet.
When the collection starts to make the repository or deployments heavy, put
masters and web derivatives in Cloudflare R2 and keep their URLs in a small
manifest. Details and migration triggers are in `docs/MEDIA_STORAGE.md`.

## How to pick up next time

Ask Codex:

> Read `docs/CURRENT_STATUS.md`, `docs/PROJECT_JOURNAL.md`, and
> `docs/STYLE_GUIDE.md`, then help me continue These Parts.

Next recommended session: start the Why pass with Halibut Point, Purgatory Chasm,
and Georges Island, then continue in order through the new entries. Keep the
temporary sentence “A place I want to return to and write about properly.” only
until each entry gets its real personal note.

For a new place, provide: name, What, Why, Done that/Not yet, area,
address/map link if known, and any image detail that makes the place
recognizable.
