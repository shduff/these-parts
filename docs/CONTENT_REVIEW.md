# These Parts — Content Review

Status: schema proposal; no content migration yet.

## What is wrong with the current shape

The present structure is serviceable but blurs several different jobs:

- `area` sometimes means neighborhood, sometimes city, and sometimes a broad
  corridor;
- practical warnings about hours or admission have leaked into `why`;
- the map link is stored beside editorial copy rather than with location data;
- image alternative text is generated generically instead of authored;
- there is no record of when or by whom an entry was updated.

## Recommended structure

Keep the public taxonomy small. The site should still read as What / Where /
Why, not as municipal asset management software.

```ts
type Place = {
  slug: string;
  name: string;
  beenThere: "Done that." | "Not yet.";

  what: string;
  why: string;
  goodToKnow?: string;

  location: {
    area: string;
    city: string;
    address?: string;
    mapUrl: string;
  };

  officialUrl?: string;

  image: {
    src: string;
    alt: string;
  };

  updatedDate: string;
};
```

## Field rules

- **What:** literal and compact; one or two sentences describing what is
  physically or institutionally there.
- **Why:** unmistakably personal; memory, desire, atmosphere, recommendation,
  or affection. No opening hours or eligibility rules.
- **Good to know:** optional and practical. Use for limited hours, admission
  rules, seasonal access, reservations, or “duck in briefly” guidance.
- **Where:** area is the human-facing neighborhood or corridor; city is the
  normalized value used for filtering; address and map URL handle navigation.
- **Official URL:** optional but preferable for hours and changing visitor
  information.
- **Image alt:** describes the artwork’s meaningful subject rather than merely
  repeating “cut-paper portrait of [name].”
- **Updated date:** internal maintenance metadata. It need not appear
  prominently on the public page.

## Review method

Review one entry at a time in site order. For each entry:

1. Present the current values without rewriting them.
2. Identify factual uncertainty, misplaced logistics, or generic language.
3. Ask only for the missing personal information.
4. Draft the revised record.
5. Get explicit approval before marking it complete.

During review, confirm enough location information to support future
distance-based recommendations. Coordinates should be added systematically
rather than inferred inconsistently from freeform area labels.

## Ledger

| # | Place | Review status |
|---:|---|---|
| 1 | Ether Dome | Pending |
| 2 | Mapparium | Pending |
| 3 | Boston Athenaeum | Pending |
| 4 | Old South Church | Pending |
| 5 | All Saints Way | Pending |
| 6 | Metropolitan Waterworks Museum | Pending |
| 7 | McGrath Highway Overpass | Pending |
| 8 | Sherman Court | Pending |
| 9 | Forest Hills Cemetery | Pending |
| 10 | Alewife Brook Path | Pending |
| 11 | Ponyhenge | Pending |
| 12 | Cambridge Antique Market | Pending |
| 13 | Lehrhaus | Pending |
| 14 | Level99 | Pending |
| 15 | Red Fox Escapes | Pending |
| 16 | Alewife Extension | Pending |
| 17 | Mount Misery | Pending |
| 18 | deCordova Sculpture Park | Pending |
| 19 | Harvard Museum of Natural History | Pending |
| 20 | Miniature City | Pending |
| 21 | Grolier Poetry Book Shop | Pending |
| 22 | Sofra | Pending |
| 23 | Mount Auburn Cemetery | Pending |
| 24 | Buffalo Exchange — Somerville | Pending |
| 25 | Lucy Parsons Center | Pending |
| 26 | Free Play — Providence | Pending |
| 27 | Free Play — Worcester | Pending |

## First entry: Ether Dome

Current record:

- **Been there?:** Not yet.
- **What:** A preserved nineteenth-century surgical amphitheater at
  Massachusetts General Hospital, where the first public demonstration of
  surgical anesthesia took place.
- **Why:** An intact little room where the world quietly changed. It feels
  theatrical, eerie, and unexpectedly intimate.
- **Where:** Beacon Hill; 55 Fruit Street, Boston

Questions for review:

1. Is **Not yet.** still accurate?
2. The current Why was inferred rather than written from your experience. What
   specifically makes you want to go?
