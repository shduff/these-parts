# These Parts — Style Guide

This document is the reference for future design, image generation, copy, and
interface work.

## Brand character

**These Parts** should feel:

- grown-up whimsical;
- ecstatic without being mystical;
- local, attentive, and hospitable;
- made by an artist, not marketed by a tourism board;
- playful and nonlinear, but still legible;
- warm enough for friends and strange enough for weirdos.

It should not feel:

- old-world, aristocratic, or dark-academic;
- childish or craft-class cute;
- Geocities, nostalgic web, or intentionally “old internet”;
- like a technology sales site;
- like a new-age or wellness brand;
- like a generic punk-zine collage;
- like a conventional destination guide.

## Logo and naming

The primary wordmark is simply:

> These Parts

Use title case in running interface text. Large editorial treatments may use
stacked title case or uppercase when the typeface supports it.

Do not add a mystical icon, doorway logo, compass, star, moon, or map pin. The
imagery and red thread provide the visual identity.

## Typography

### Display

Current stack:

```css
"Bodoni 72", Didot, "Iowan Old Style", Georgia, serif
```

Use for:

- the These Parts title;
- place names;
- large section headings;
- editorial pull lines.

Characteristics:

- tall and expressive;
- elegant without antique-library styling;
- generous scale;
- tight line-height and slightly tight tracking at display sizes.

### Interface and body

Current stack:

```css
"Avenir Next", Avenir, "Segoe UI", sans-serif
```

Use for:

- body copy;
- search and filters;
- metadata;
- buttons;
- labels such as What / Where / Why.

Small labels are uppercase with generous tracking. Body text remains
sentence-case and conversational.

## Color system

| Token | Hex | Role |
|---|---:|---|
| Cream | `#f4eedf` | Page ground and paper |
| Paper | `#fffaf0` | Cards and light panels |
| Cobalt | `#123f9b` | Primary display color |
| Navy | `#092954` | Dark ground and navigation |
| Forest | `#175740` | Secondary ground and metadata |
| Vermilion | `#dc3826` | The red thread, emphasis, focus |
| Mustard | `#e5a813` | Warm accent and selected grounds |
| Lavender | `#b8acd8` | Soft field color |
| Ink | `#17263b` | Body text and rules |

### Color rules

- Use flat fields rather than gradients.
- Let one or two colors dominate each composition.
- Vermilion is the connective color and should remain distinctive.
- Cream is warm paper, not sterile white.
- Avoid pastel rainbows, glowing effects, and translucent “tech” gradients.

## Image system

### Medium

All place artwork should look like physical cut construction paper:

- broad, flat shapes;
- visible fibers;
- slightly imperfect scissor-cut edges;
- subtle natural paper shadows;
- no glossy rendering;
- no photorealistic miniatures.

### Complexity

Aim for roughly 10–16 major shapes. Recognition should come from silhouette and
one or two signature features, not exhaustive architectural detail.

### Space

Generous negative space is required. Do not fill every corner. A single large
gesture is stronger than many tiny objects.

### Red thread

A tactile vermilion thread passes through every place image.

It may:

- cross the full frame;
- loop once;
- disappear behind a shape and reappear;
- wrap around a contained medallion.

It should not:

- become a transit-map diagram;
- form a decorative knot collection;
- compete with the place silhouette;
- turn into a digital dotted path.

### Composition families

The collection intentionally mixes two families.

#### Contained medallions

A self-contained paper “island” or circular/organic medallion sits against a
full backdrop. Ether Dome and Waterworks Museum establish this family.

Use when:

- a place has a strong single emblem;
- a dense subject benefits from containment;
- the grid needs a visual anchor.

#### Open fields

Shapes extend directly across a colored or cream ground with more open space.
Mapparium, Boston Athenaeum, Old South Church, and All Saints Way establish this
family.

Use when:

- architecture suggests movement across the frame;
- typography needs a large area of its own;
- the collection needs contrast and rhythm.

Do not force every image into the same frame. Consistency comes from material,
palette, typography, simplicity, and the red thread.

### Place titles inside artwork

- Use the tall editorial serif.
- Use only the place name.
- Spell it exactly.
- Keep type large enough to survive card-size display.
- Avoid subtitles, dates, addresses, and explanatory labels.

### Landing artwork

The homepage splash is different from a place image:

- no place names;
- no labels or in-image copy;
- evocative local architecture rather than one exact landmark;
- enough open space for live page typography;
- more playful and atmospheric than informational.

## Image manifest

The foundational six define the place-art system:

| Place | File | Composition |
|---|---|---|
| Ether Dome | `public/art/places/ether-dome.png` | Contained medallion |
| Mapparium | `public/art/places/mapparium.png` | Open cream field |
| Boston Athenaeum | `public/art/places/boston-athenaeum.png` | Open lavender field |
| Old South Church | `public/art/places/old-south-church.png` | Open forest field |
| All Saints Way | `public/art/places/all-saints-way.png` | Open mustard field |
| Metropolitan Waterworks Museum | `public/art/places/waterworks-museum.png` | Contained medallion |

Landing art:

- `public/art/these-parts-hero.png`

Earlier experiments are not style references and are intentionally excluded
from the public repository.

The July 2026 expansion applies the same system with a deliberately varied
layout rhythm:

| Place | File | Composition |
|---|---|---|
| McGrath Highway Overpass | `mcgrath-highway-overpass.png` | Contained |
| Sherman Court | `sherman-court.png` | Open field |
| Forest Hills Cemetery | `forest-hills-cemetery.png` | Contained |
| Alewife Extension | `alewife-extension.png` | Contained |
| Alewife Brook Path | `alewife-brook-path.png` | Open field |
| Mount Misery | `mount-misery.png` | Open field |
| Ponyhenge | `ponyhenge.png` | Open field |
| deCordova Sculpture Park | `decordova-sculpture-park.png` | Contained |
| Harvard Museum of Natural History | `harvard-museum-natural-history.png` | Open field |
| Miniature City | `miniature-city.png` | Contained |
| Grolier Poetry Book Shop | `grolier-poetry-book-shop.png` | Open field |
| Sofra | `sofra.png` | Open field |
| Mount Auburn Cemetery | `mount-auburn-cemetery.png` | Contained |
| Cambridge Antique Market | `cambridge-antique-market.png` | Open field |
| Lehrhaus | `lehrhaus.png` | Open field |
| Buffalo Exchange — Somerville | `buffalo-exchange-somerville.png` | Open field |
| Lucy Parsons Center | `lucy-parsons-center.png` | Contained |
| Level99 | `level99.png` | Open field |
| Red Fox Escapes | `red-fox-escapes.png` | Contained |
| Free Play — Providence | `free-play.png` | Open field |
| Free Play — Worcester | `free-play-worcester.png` | Contained |

This expansion is intentionally near-even rather than mechanically alternating:
ten contained compositions and eleven open fields.

## Interface language

Preferred labels:

- **Index**
- **Find**
- **Area**
- **Status**
- **Via**
- **What**
- **Where**
- **Why**
- **Been**
- **Next**
- **Map**
- **Share this place**

Use ordinary words for core navigation. Personality comes from composition and
writing, not from making controls cryptic.

## Writing voice

The voice is:

- first-person when personal experience matters;
- concrete before poetic;
- affectionate, observant, and lightly dry;
- comfortable admitting “I haven’t been yet”;
- interested in what a place feels like, not just its credentials.

### What

Start literal. Explain what someone will encounter.

### Why

Be personal. Explain the attraction, memory, surprise, or desire.

### Via

Keep attribution compact:

- `Via Maya`
- `Via a friend`
- `Via walking by`

Do not invent an attribution when the source is unknown.

## Layout and components

### Cards

- Three-column grid on laptop and desktop screens.
- Two columns below 1080px; one column on phones.
- Artwork uses a 3:2 ratio.
- Strong rectangular borders and offset flat-color shadows.
- Show Status, Area, What, and Via.
- The entire card is a link.

### Detail pages

- Place image appears large near the top.
- Place name remains live text even though it appears in the artwork.
- What / Where / Why form the main rhythm.
- Share action copies the unique URL.
- Related-place links remain secondary.

### Shape language

- Square corners are preferred for interface panels.
- Offset shadows should feel like layered paper.
- Avoid pills, glassmorphism, blurred panels, and floating dashboard cards.

## Motion

- Subtle card lift or image scale on hover is enough.
- No parallax, floating particles, glowing portals, or looping decorative
  animation.
- Respect `prefers-reduced-motion`.

## Accessibility

- All place art receives useful alternative text.
- The decorative landing image has empty alt text.
- Keep live text for all titles and labels; do not rely on text inside images.
- Preserve visible focus states using vermilion.
- Maintain strong color contrast for body copy and controls.
- Every card and control must be usable by keyboard.

## Future image-generation brief

When adding a place:

1. Research only enough real imagery to identify one or two signature shapes.
2. Use one approved image as a complexity reference, not a rigid layout
   template.
3. Choose contained medallion or open field based on the subject and the balance
   of the existing grid.
4. Limit the major shapes.
5. Keep generous open space.
6. Include the red thread.
7. Add the exact place title and no other text.
8. Check spelling and visual consistency before adding the asset.

### Asset-production rule

Keep the best full-resolution generated file as a master. The site should use a
compressed web derivative with the same crop and color character. Do not
repeatedly recompress a web derivative. The longer-term storage workflow is
documented in `docs/MEDIA_STORAGE.md`.
