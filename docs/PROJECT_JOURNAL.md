# These Parts — Project Journal and Working Specification

Last consolidated: July 27, 2026

## One-line description

**These Parts** is a personal, shareable guide to nearby places that rewards
looking again: beloved places, places still to visit, and places discovered
through friends.

## Why this project exists

The project began with the idea of collecting “portals”: places that shift the
atmosphere and make the ordinary world feel wider. Through visual and language
exploration, that premise became more grounded and hospitable.

The site is not about escaping into another world. It is about:

- hosting friends inside the maker’s version of home;
- exploring Somerville, Cambridge, Boston, and nearby places with more
  attention;
- seeing old or familiar things in new ways;
- noticing that what feels transporting may already be in the neighborhood;
- preserving the social trail of recommendations—who turned us on to a place.

The Dorothy/Oz “it was in your own backyard all along” idea remains an
influence, but it should be felt rather than quoted. There is also a light,
good-humored YIMBY/NIMBY inversion: yes, delight and strangeness belong around
here.

## Naming

### Chosen project name

**These Parts**

Why it works:

- local without being limited to Boston;
- colloquial, warm, and geographically flexible;
- personal without sounding proprietary;
- compatible with Somerville and the larger orbit around home;
- grounded enough to avoid mystical or wellness language.

### Supporting language

Current landing line:

> A collection of what’s here, actually.

Current supporting sentence:

> Places worth noticing close to home—found while wandering, recommended by
> friends, or waiting for another look.

“Here, actually” remains useful as an attitude or supporting phrase, not the
primary brand name.

## Product principles

1. **Personal, not comprehensive.** This is an authored collection, not a
   general-purpose city guide.
2. **Hospitable, not touristy.** It should feel like being shown around by a
   perceptive friend.
3. **Specific, not overexplained.** A place should be understandable quickly,
   with room for a personal reason.
4. **Local, not parochial.** Municipal boundaries should not define the
   collection.
5. **Useful, not database-like.** Search and filters are important, but the
   site should still feel like an artist-made object.
6. **Expandable without shoehorning.** The core content model stays small.
   Additional fields are not added until a real need appears.

## Core taxonomy

Every place uses the following structure:

### What

A literal, useful description of the place.

### Where

Area or neighborhood, street address, and a Google Maps link.

### Why

The personal description: why the maker loves the place or wants to go there.

### Status

- **Been**
- **Next**

### Via

The person, publication, walk, conversation, or other source that led to the
place.

### Updated

The longer-term model should support who last edited an entry and when. This is
not yet represented in the current static data.

There are intentionally no optional “Order,” “Bring,” “Look for,” or similar
fields in the first version.

## Current site scope

### Landing page

- Sticky, minimal **These Parts** header.
- Large title-free cut-paper splash image.
- Project name and short positioning language.
- Link down to the place index.

### Place index

- Text search across name, What, Why, area, address, and Via.
- Filters for:
  - Area
  - Status
  - Via
- A visible result count.
- Six image-led cards.
- Each card links to its own detail page.

### Place detail pages

- Stable, shareable hash URL:
  - `#/place/ether-dome`
  - `#/place/mapparium`
  - etc.
- Large approved illustration near the top.
- What / Where / Why sections.
- Status and Via.
- Google Maps link.
- “Share this place” button that copies the current URL.
- Links to other places in the collection.

Hash routes were chosen because they work reliably on static hosts such as
GitHub Pages without server-side routing rules.

## Approved launch collection

1. Ether Dome
2. Mapparium
3. Boston Athenaeum
4. Old South Church
5. All Saints Way
6. Metropolitan Waterworks Museum

The current text, Status, and Via values are draft content and should be
reviewed by the project owner before being treated as a factual personal record.

## Current technical shape

- Vite
- React
- TypeScript
- Static place data in `src/place-data.ts`
- No backend
- No account system
- No analytics
- No paid service dependency
- Relative asset paths for GitHub Pages compatibility

This version can run and be hosted at no ongoing software cost under normal
GitHub Pages limits.

## Deliberately unresolved decisions

These are future questions, not assumptions:

- Which current Been/Next values are accurate?
- Which Via attributions should be public?
- Is content editing done directly in source, through a simple form, or through
  a lightweight content system?
- Should friends eventually be able to suggest places?
- Should the project remain public, become unlisted, or contain a mixture?
- Should GitHub Pages deploy from a branch or through an automated workflow?
- Does the site need a map view, or is “Atlas” only a visual idea?

## Decision history

- Chose a website over a native app to avoid app-store complexity and ongoing
  platform costs.
- Chose GitHub Pages as the likely host.
- Rejected old-world library, aristocratic, childish, Geocities, tech-sales,
  gradient-heavy, and new-age wellness aesthetics.
- Reframed the project as local hospitality for friends.
- Explored punk/alternative loft-host energy.
- Chose the simple hand-cut paper collage direction.
- Chose **These Parts** over “Boston Portals.”
- Chose What / Where / Why over Short Story / Long Story.
- Rejected optional taxonomy fields for the first version.
- Established the red thread as the recurring connective motif.
- Chose a varied image system: some contained medallions and some open-field
  compositions.
