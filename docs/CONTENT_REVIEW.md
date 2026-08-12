# These Parts — Content Review

Status: schema proposal; no content migration yet.

## What is wrong with the current shape

The present structure is serviceable but blurs several different jobs:

- `area` sometimes means neighborhood, sometimes city, and sometimes a broad
  corridor;
- practical warnings about hours or admission have leaked into `why`;
- the map link is stored beside editorial copy rather than with location data;
- image alternative text is generated generically instead of authored;
- there is no record of when an entry was updated.

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

For this pass, review and lock the factual fields first. Defer every **Why**
field until the end, then edit all of them together so the personal voice is
consistent across the collection.

## Ledger

| # | Place | Review status |
|---:|---|---|
| 1 | Ether Dome | Factual fields reviewed; Why deferred |
| 2 | Mapparium | Factual fields reviewed; Why deferred |
| 3 | Boston Athenaeum | Factual fields reviewed; Why deferred |
| 4 | Old South Church | Factual fields reviewed; Why deferred |
| 5 | All Saints Way | Factual fields reviewed; Why deferred |
| 6 | Metropolitan Waterworks Museum | Factual fields reviewed; Why deferred |
| 7 | McGrath Highway Overpass | Factual fields reviewed; Why deferred |
| 8 | Sherman Court | Factual fields reviewed; Why deferred |
| 9 | Forest Hills Cemetery | Factual fields reviewed; Why deferred |
| 10 | Alewife Brook Greenway | Factual fields reviewed; Why deferred |
| 11 | Ponyhenge | Factual fields reviewed; Why deferred |
| 12 | Cambridge Antique Market | Factual fields reviewed; Why deferred |
| 13 | Lehrhaus | Factual fields reviewed; Why deferred |
| 14 | Level99 | Factual fields reviewed; Why deferred |
| 15 | Red Fox Escapes | Factual fields reviewed; Why deferred |
| 16 | Fitchburg Cutoff Path | Factual fields reviewed; Why deferred |
| 17 | Mount Misery | Factual fields reviewed; Why deferred |
| 18 | deCordova Sculpture Park | Factual fields reviewed; Why deferred |
| 19 | Harvard Museum of Natural History | Factual fields reviewed; Why deferred |
| 20 | Miniature City | Factual fields reviewed; Why deferred |
| 21 | Grolier Poetry Book Shop | Factual fields reviewed; Why deferred |
| 22 | Sofra | Factual fields reviewed; Why deferred |
| 23 | Mount Auburn Cemetery | Factual fields reviewed; Why deferred |
| 24 | Buffalo Exchange — Somerville | Factual fields reviewed; Why deferred |
| 25 | Lucy Parsons Center | Factual fields reviewed; Why deferred |
| 26 | Free Play — Providence | Factual fields reviewed; Why deferred |
| 27 | Free Play — Worcester | Factual fields reviewed; Why deferred |

## 1. Ether Dome — reviewed facts

- **Slug:** `ether-dome`
- **Name:** Ether Dome
- **Been there?:** Done that.
- **What:** The historic surgical amphitheater at Massachusetts General
  Hospital where, in 1846, doctors staged the first successful public surgery
  using ether anesthesia. It houses a painting of the operation and early
  surgical tools. Also, there's a mummy?
- **Why:** Deferred to the final Why pass.
- **Good to know:** It remains in active use as a lecture and meeting hall—not
  a surgical theater—so access varies. Check with the Russell Museum before
  going.
- **Area:** West End / MGH
- **City:** Boston
- **Address:** 55 Fruit Street, Boston, MA 02114
- **Map link:** Existing Google Maps link retained.
- **Official link:** Massachusetts General Hospital Ether Dome visitor page.
- **Image:** Existing Ether Dome artwork retained.
- **Image description:** Cut-paper illustration of the Ether Dome's stepped
  amphitheater seating, domed ceiling, and central operating area, framed by a
  red border on cream paper.
- **Updated date:** August 11, 2026

## 2. Mapparium — reviewed facts

- **Slug:** `mapparium`
- **Name:** Mapparium
- **Been there?:** Done that.
- **What:** A three-story stained-glass globe built in 1935. A glass bridge
  crosses its center, surrounded by a world map frozen at the moment it was
  made—and some deeply strange acoustics.
- **Why:** Deferred to the final Why pass.
- **Good to know:** Entry to the Mapparium itself is a timed, ticketed tour,
  but tickets are cheap and the surrounding exhibits are free. Since it is part
  of the Christian Science Plaza campus, lingering may get you proselytized
  to—but linger away, it's worth it to explore.
- **Area:** Back Bay
- **City:** Boston
- **Address:** 210 Massachusetts Avenue, Boston, MA 02115
- **Map link:** Existing Google Maps link retained.
- **Official link:** How Do You See the World? visitor information page.
- **Image:** Existing Mapparium artwork retained.
- **Image description:** Cut-paper illustration of a luminous globe crossed by
  a narrow bridge, enclosed within a circular architectural frame.
- **Updated date:** August 11, 2026

## 3. Boston Athenaeum — reviewed facts

- **Slug:** `boston-athenaeum`
- **Name:** Boston Athenaeum
- **Been there?:** Not yet.
- **What:** An independent, member-supported library, museum, and cultural
  center founded in 1807. Its twelve levels contain book stacks, art, reading
  rooms, terraces, and rare collections inside a landmark Beacon Hill
  building.
- **Why:** Deferred to the final Why pass.
- **Good to know:** An $11 visitor ticket covers only the first floor.
  Full-building access requires a $40 day membership; tours and events provide
  other ways inside, but both sell out early.
- **Area:** Beacon Hill
- **City:** Boston
- **Address:** 10½ Beacon Street, Boston, MA 02108
- **Map link:** Existing Google Maps link retained.
- **Official link:** Boston Athenaeum visitor information page.
- **Image:** Existing Boston Athenaeum artwork retained.
- **Image description:** Cut-paper illustration of the Athenaeum's curved
  book-lined galleries and dramatic central staircase.
- **Updated date:** August 11, 2026

## 4. Old South Church — reviewed facts

- **Slug:** `old-south-church`
- **Name:** Old South Church
- **Been there?:** Done that.
- **What:** An Italian Gothic church built in 1875, filled with carved cherry
  wood, pale stone, pointed arches, saturated color, and tiny carved animals
  hidden around the sanctuary.
- **Why:** Deferred to the final Why pass.
- **Why-pass note:** Meditative escape while working next door.
- **Good to know:** Don't confuse it with the Old South Meeting House. Old
  South Church is the ornate Copley Square church nearby.
- **Area:** Copley Square
- **City:** Boston
- **Address:** 645 Boylston Street, Boston, MA 02116
- **Map link:** Existing Google Maps link retained.
- **Official link:** Old South Church visitor information page.
- **Image:** Existing Old South Church artwork retained.
- **Image description:** Cut-paper illustration of Old South Church's richly
  colored sanctuary, pointed arches, and carved interior details.
- **Updated date:** August 11, 2026

## 5. All Saints Way — reviewed facts

- **Slug:** `all-saints-way`
- **Name:** All Saints Way
- **Been there?:** Done that.
- **What:** A handmade street-side shrine created over decades by North End
  resident Peter Baldassari. It fills a narrow alley with portraits, statues,
  prayer cards, lights, flowers, and other Catholic devotional objects.
- **Why:** Deferred to the final Why pass.
- **Good to know:** This is private property, not a museum with regular hours.
  Much of the shrine is visible through the gate from Battery Street; getting
  inside depends on finding the gate open or a volunteer present. Baldassari
  died in 2025, and volunteers now maintain the collection.
- **Area:** North End
- **City:** Boston
- **Address:** 4 Battery Street, Boston, MA 02109
- **Map link:** Existing Google Maps link retained.
- **Official link:** None found; maintain using current local reporting.
- **Image:** Existing All Saints Way artwork retained.
- **Image description:** Cut-paper illustration of a narrow brick alley crowded
  with saint portraits, statues, flowers, lights, and devotional objects.
- **Updated date:** August 11, 2026

## 6. Metropolitan Waterworks Museum — reviewed facts

- **Slug:** `waterworks-museum`
- **Name:** Metropolitan Waterworks Museum
- **Been there?:** Not yet.
- **What:** A former high-service pumping station whose Great Engines Hall
  preserves three enormous coal-powered, steam-driven water pumps, each more
  than three stories tall.
- **Why:** Deferred to the final Why pass.
- **Why-pass note:** Via Kris, via Non-Event shows.
- **Good to know:** Regular admission is free Wednesday through Sunday. The
  paid Special Access Tour lets you climb onto the engines and descend into the
  basement pump chambers; it has age and height restrictions and sells out
  quickly.
- **Area:** Chestnut Hill
- **City:** Boston
- **Address:** 2450 Beacon Street, Boston, MA 02467
- **Map link:** Existing Google Maps link retained.
- **Official link:** Metropolitan Waterworks Museum visitor information page.
- **Image:** Existing Waterworks Museum artwork retained.
- **Image description:** Cut-paper illustration of towering steam engines,
  flywheels, pipes, and iron stairs inside the Great Engines Hall.
- **Updated date:** August 11, 2026

## 7. McGrath Highway Overpass — reviewed facts

- **Slug:** `mcgrath-highway-overpass`
- **Name:** McGrath Highway Overpass
- **Been there?:** Done that.
- **What:** The pedestrian bridge at Otis Street that crosses McGrath Highway.
- **Why:** Deferred to the final Why pass.
- **Why-pass note:** Childhood.
- **Good to know:** Get over there soon. MassDOT plans to remove the bridge
  during the McGrath Boulevard reconstruction and replace it with a
  street-level crossing. Structural elements containing artwork will likely
  remain at the playground.
- **Area:** East Somerville / Winter Hill
- **City:** Somerville
- **Address:** Beside Deanna Cremin Playground, 59 Otis Street, Somerville, MA
  02145
- **Map link:** Replace the generic McGrath/Broadway search with a pin at the
  Otis Street pedestrian bridge beside Deanna Cremin Playground.
- **Official link:** MassDOT McGrath Boulevard project FAQ.
- **Image:** Existing McGrath Highway Overpass artwork retained.
- **Image description:** Cut-paper illustration of the Otis Street pedestrian
  bridge arching across McGrath Highway beside the playground.
- **Updated date:** August 11, 2026

## 8. Sherman Court — reviewed facts

- **Slug:** `sherman-court`
- **Name:** Sherman Court
- **Been there?:** Done that.
- **What:** A short, narrow residential passage connecting Marshall Street and
  Sargent Avenue.
- **Why:** Deferred to the final Why pass.
- **Why-pass note:** Pandemic discovery.
- **Good to know:** This is just a residential passage, but there's something
  special about it.
- **Area:** Winter Hill
- **City:** Somerville
- **Address:** Sherman Court, Somerville, MA 02145
- **Map link:** Existing Google Maps link retained.
- **Official link:** None; this is an ordinary public passage rather than an
  institution or attraction.
- **Image:** Existing Sherman Court artwork retained.
- **Image description:** Cut-paper illustration of a narrow residential
  passage slipping between closely spaced Winter Hill houses.
- **Updated date:** August 11, 2026

## 9. Forest Hills Cemetery — reviewed facts

- **Slug:** `forest-hills-cemetery`
- **Name:** Forest Hills Cemetery
- **Been there?:** Not yet.
- **What:** A garden cemetery founded in 1848, with winding roads, wooded hills,
  a pond, memorial sculpture, and an extensive collection of nineteenth-century
  funerary art.
- **Why:** Deferred to the final Why pass.
- **Good to know:** It is an active burial ground. Walking is welcome, but dogs,
  bicycles, and jogging are prohibited. Gate closing times vary seasonally,
  and a self-guided visitor guide is available inside the main entrance.
- **Area:** Jamaica Plain
- **City:** Boston
- **Address:** 95 Forest Hills Avenue, Boston, MA 02130
- **Map link:** Existing Google Maps link retained.
- **Official link:** Forest Hills Cemetery visitor information page.
- **Image:** Existing Forest Hills Cemetery artwork retained.
- **Image description:** Cut-paper illustration of winding paths, mature trees,
  a pond, and sculptural memorials within the garden cemetery.
- **Updated date:** August 11, 2026

## 10. Alewife Brook Greenway — reviewed facts

- **Slug:** `alewife-brook-path`
- **Name:** Alewife Brook Greenway
- **Been there?:** Done that.
- **What:** A narrow greenway following Alewife Brook from Massachusetts Avenue
  to the Mystic River, screened by reeds and trees despite running beside
  Alewife Brook Parkway.
- **Why:** Deferred to the final Why pass.
- **Good to know:** Pay attention at street crossings; the path does not always
  line up cleanly on the other side. You can also take a nice cut-through via
  St. Paul Cemetery. Great running path.
- **Area:** Alewife Brook corridor
- **Cities:** Arlington / Cambridge / Somerville
- **Map link:** [Google Maps walking route](https://www.google.com/maps/dir/?api=1&origin=42.39851607480664%2C-71.14383379676585&destination=42.416595652206915%2C-71.12964630606469&travelmode=walking)
- **Official link:** DCR Alewife Brook Reservation page.
- **Image:** Existing Alewife Brook Path artwork retained.
- **Image description:** Cut-paper illustration of a narrow green path tucked
  between Alewife Brook, reeds, trees, and the adjacent parkway.
- **Updated date:** August 11, 2026

## 11. Ponyhenge — reviewed facts

- **Slug:** `ponyhenge`
- **Name:** Ponyhenge
- **Been there?:** Not yet.
- **What:** A changing roadside herd of discarded rocking horses and toy
  ponies, gathering in a Lincoln field since around 2010 and periodically
  rearranged by unknown hands.
- **Why:** Deferred to the final Why pass.
- **Good to know:** This is a quick roadside stop without formal visitor
  facilities. Parking is limited to a narrow shoulder on a busy road, so pull
  over carefully.
- **Area:** Lincoln
- **City:** Lincoln
- **Address:** 47 Old Sudbury Road, Lincoln, MA 01773
- **Map link:** Existing Google Maps link retained.
- **Official link:** None; maintain using current map listings and recent
  visitor reports.
- **Image:** Existing Ponyhenge artwork retained.
- **Image description:** Cut-paper illustration of a shifting circle of worn
  rocking horses and toy ponies in a roadside field.
- **Updated date:** August 11, 2026

## 12. Cambridge Antique Market — reviewed facts

- **Slug:** `cambridge-antique-market`
- **Name:** Cambridge Antique Market
- **Been there?:** Done that.
- **What:** Five floors of furniture, clothing, records, artwork, books,
  jewelry, ephemera, and odd finds from more than 150 dealers.
- **Why:** Deferred to the final Why pass.
- **Why-pass note:** Presidents' Day, via Rosalie.
- **Good to know:** Closed Mondays and open Tuesday through Sunday from 11am
  to 6pm. Five floors is a lot of rummaging, so give yourself time.
- **Area:** East Cambridge
- **City:** Cambridge
- **Address:** 201 Monsignor O'Brien Highway, Cambridge, MA 02141
- **Map link:** Existing Google Maps link retained.
- **Official link:** Cambridge Antique Market website.
- **Image:** Existing Cambridge Antique Market artwork retained.
- **Image description:** Cut-paper illustration of densely layered antique
  furniture, records, clothing, lamps, and odd objects across several floors.
- **Updated date:** August 11, 2026

## 13. Lehrhaus — reviewed facts

- **Slug:** `lehrhaus`
- **Name:** Lehrhaus
- **Been there?:** Done that.
- **What:** A nonprofit Jewish tavern and house of learning combining a kosher
  dairy restaurant with classes, workshops, events, and text study.
- **Why:** Deferred to the final Why pass.
- **Why-pass notes:** Rosalie knows the head of the restaurant; I used to play
  tuba with the head of the house of learning; the “What Does It Mean to Be
  Holy?” workshop with Alec.
- **Good to know:** You don't need to be Jewish to participate. Classes are
  ticketed separately, often on a pay-what-you-can basis; make a dining
  reservation if you want a meal before or afterward. The vegetarian Reuben
  and vegan desserts are incredible.
- **Area:** Union Square / Washington Street
- **City:** Somerville
- **Address:** 425 Washington Street, Somerville, MA 02143
- **Map link:** Existing Google Maps link retained.
- **Official link:** Lehrhaus website.
- **Image:** Existing Lehrhaus artwork retained.
- **Image description:** Cut-paper illustration combining a lively tavern
  table with books, study materials, drinks, and shared plates.
- **Updated date:** August 11, 2026

## 14. Level99 — reviewed facts

- **Slug:** `level99`
- **Name:** Level99
- **Been there?:** Done that.
- **What:** A collection of short escape-room-style challenges, some mental,
  some physical. Essentially a tech-enabled Boda Borg in a high-ceilinged, airy
  space that is actually pleasant to be in.
- **Why:** Deferred to the final Why pass.
- **Why-pass note:** Memories of going with the kids.
- **Good to know:** Go with two to six people. Wear sneakers. Getting in is
  annoying, so buy tickets, create an account, and sign the waiver before you
  go. It's connected to a Night Shift brewery and the mall food court.
- **Area:** Natick Mall
- **City:** Natick
- **Address:** 1235 Worcester Street, Suite 3330, Natick, MA 01760
- **Map link:** Existing Google Maps link retained.
- **Official link:** Level99 Natick website.
- **Image:** Existing Level99 artwork retained.
- **Image description:** Cut-paper illustration of doors leading into varied
  puzzle rooms, with climbing, balancing, pattern, and teamwork motifs.
- **Updated date:** August 11, 2026

## 15. Red Fox Escapes — reviewed facts

- **Slug:** `red-fox-escapes`
- **Name:** Red Fox Escapes
- **Been there?:** Done that.
- **What:** Three story-driven, hour-long escape rooms built around completing
  missions: The Body Shop, The Heist, and The U-Boat.
- **Why:** Deferred to the final Why pass.
- **Why-pass notes:** Going with the kids; Mom?; students.
- **Good to know:** Every booking is private. The Body Shop accommodates two to
  six people; The Heist and U-Boat are designed for four to ten, with a
  four-ticket minimum. Ring the bottom buzzer beneath the sign to get inside.
- **Area:** Central Square
- **City:** Cambridge
- **Address:** 614 Massachusetts Avenue, Cambridge, MA 02139
- **Map link:** Existing Google Maps link retained.
- **Official link:** Red Fox Escapes website.
- **Image:** Existing Red Fox Escapes artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026

## 16. Fitchburg Cutoff Path — reviewed facts

- **Slug:** `alewife-extension`
- **Name:** Fitchburg Cutoff Path
- **Been there?:** Done that.
- **What:** A shared-use path that slips west from Alewife Station beside the
  Fitchburg commuter-rail tracks, ending at Brighton Street in Belmont.
- **Why:** Deferred to the final Why pass.
- **Good to know:** The Alewife end connects directly into the Minuteman
  Bikeway network around Alewife Station. Revival Cafe + Kitchen is right off
  the path at 125 CambridgePark Drive.
- **Area:** Alewife
- **Cities:** Cambridge / Belmont
- **Route:** Alewife Station to Brighton Street
- **Map link:** Existing Google Maps link retained.
- **Official link:** Town of Belmont Community Path project description.
- **Image:** Existing `alewife-extension.png` composition retained with its
  embedded title changed to “FITCHBURG CUTOFF PATH.”
- **Image description:** Cut-paper illustration of a shared-use path running
  beside the Fitchburg Line, with a small platform, greenery, flowers, and a
  distant neighborhood skyline.
- **Updated date:** August 11, 2026

## 17. Mount Misery — reviewed facts

- **Slug:** `mount-misery`
- **Name:** Mount Misery
- **Been there?:** Done that.
- **What:** Lincoln's largest conservation area: 227 acres of wooded hills,
  agricultural fields, ponds, and wetlands beside the Sudbury River.
- **Why:** Deferred to the final Why pass.
- **Why-pass note:** Recommended by Cindy.
- **Good to know:** You walk down a path beside someone's property to get
  there; don't worry, you're in the right place. The paths feel looping, like
  you're going in circles, but in a good way.
- **Area:** Lincoln
- **City:** Lincoln
- **Address:** South Great Road / Route 117, Lincoln, MA 01773
- **Map link:** Existing Google Maps link retained.
- **Official link:** Lincoln Land Conservation Trust Mount Misery page.
- **Image:** Existing Mount Misery artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026

## 18. deCordova Sculpture Park — reviewed facts

- **Slug:** `decordova-sculpture-park`
- **Name:** deCordova Sculpture Park
- **Been there?:** Done that.
- **What:** A contemporary art museum and 30-acre outdoor sculpture park spread
  across rolling lawns, woods, gardens, and terraces beside Flint's Pond.
- **Why:** Deferred to the final Why pass.
- **Why-pass notes:** SOH performance; bike birthday; first time seeing Jethro
  Tull with the Arts Advisory Council at MIT.
- **Good to know:** The indoor galleries are closed through 2027 for
  renovations. The sculpture park, cafe, and store remain open; advance passes
  are strongly recommended.
- **Area:** Lincoln
- **City:** Lincoln
- **Address:** 51 Sandy Pond Road, Lincoln, MA 01773
- **Map link:** Existing Google Maps link retained.
- **Official link:** Trustees deCordova visitor page.
- **Image:** Existing deCordova Sculpture Park artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026

## 19. Harvard Museum of Natural History — reviewed facts

- **Slug:** `harvard-museum-natural-history`
- **Name:** Harvard Museum of Natural History
- **Been there?:** Done that.
- **What:** Harvard's natural-history museum, filled with minerals, meteorites,
  fossils, mounted animals, and the astonishingly precise Blaschka Glass
  Flowers.
- **Why:** Deferred to the final Why pass.
- **Good to know:** Admission also covers the connected Peabody Museum.
  Massachusetts residents can visit free Sundays from 9am to noon and
  Wednesdays from 3pm to 5pm with proof of residency. Tickets are sold only at
  the museum.
- **Area:** Harvard Square
- **City:** Cambridge
- **Address:** 26 Oxford Street, Cambridge, MA 02138
- **Map link:** Existing Google Maps link retained.
- **Official link:** Harvard Museum of Natural History visitor page.
- **Image:** Existing Harvard Museum of Natural History artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026

## 20. Miniature City — reviewed facts

- **Slug:** `miniature-city`
- **Name:** Miniature City
- **Been there?:** Done that.
- **What:** A fourteen-foot, glass-enclosed diorama of Venice's Palazzo Ducale,
  populated with gondolas and tiny figures recreating city life in the
  sixteenth century.
- **Why:** Deferred to the final Why pass.
- **Good to know:** It's permanently displayed inside the North End branch of
  the Boston Public Library, behind the bust of Dante. It's free to visit during
  regular library hours.
- **Area:** North End
- **City:** Boston
- **Address:** 25 Parmenter Street, Boston, MA 02113
- **Map link:** Existing Google Maps link retained.
- **Official link:** Boston Public Library article about the Ducal Palace
  diorama.
- **Image:** Existing Miniature City artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026

## 21. Grolier Poetry Book Shop — reviewed facts

- **Slug:** `grolier-poetry-book-shop`
- **Name:** Grolier Poetry Book Shop
- **Been there?:** Done that.
- **What:** The country's oldest continuously operated bookstore devoted solely
  to poetry, with thousands of volumes packed into one very small Harvard
  Square room.
- **Why:** Deferred to the final Why pass.
- **Good to know:** Open Wednesday through Saturday from 11am to 7pm and
  closed most federal holidays. Its readings sometimes happen elsewhere, so
  check the individual event listing.
- **Area:** Harvard Square
- **City:** Cambridge
- **Address:** 6 Plympton Street, Cambridge, MA 02138
- **Map link:** Existing Google Maps link retained.
- **Official link:** Grolier Poetry Book Shop website.
- **Image:** Existing Grolier Poetry Book Shop artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026

## 22. Sofra — reviewed facts

- **Slug:** `sofra`
- **Name:** Sofra
- **Been there?:** Done that.
- **What:** A Middle Eastern bakery and cafe serving pastries, breads, meze, and
  prepared dishes shaped by Turkish, Lebanese, and Greek traditions.
- **Why:** Deferred to the final Why pass.
- **Why-pass notes:** Going with the kids; walking with a special drink; more
  affordable sarma; muhammara mezze.
- **Good to know:** The Cambridge shop is small and seating is limited, though
  there are outdoor tables. It's directly across from Mount Auburn Cemetery,
  making the two an excellent double feature.
- **Area:** Cambridge / Watertown line
- **City:** Cambridge
- **Address:** 1 Belmont Street, Cambridge, MA 02138
- **Map link:** Existing Google Maps link retained.
- **Official link:** Sofra ordering site.
- **Image:** Existing Sofra artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026

## 23. Mount Auburn Cemetery — reviewed facts

- **Slug:** `mount-auburn-cemetery`
- **Name:** Mount Auburn Cemetery
- **Been there?:** Done that.
- **What:** A 175-acre active cemetery and arboretum of hills, ponds, winding
  paths, monuments, mature trees, and a stone tower overlooking Boston.
- **Why:** Deferred to the final Why pass.
- **Why-pass note:** Search for ponds and Freemasonry symbols.
- **Good to know:** Climb Washington Tower for the view; it opens seasonally.
  Bikes, running, dogs, and picnics aren't permitted, so this one is strictly a
  walk.
- **Area:** Cambridge / Watertown
- **Cities:** Cambridge / Watertown
- **Address:** 580 Mount Auburn Street, Cambridge, MA 02138
- **Map link:** Existing Google Maps link retained.
- **Official link:** Mount Auburn Cemetery visitor page.
- **Image:** Existing Mount Auburn Cemetery artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026

## 24. Buffalo Exchange — Somerville — reviewed facts

- **Slug:** `buffalo-exchange-somerville`
- **Name:** Buffalo Exchange — Somerville
- **Been there?:** Done that.
- **What:** A Davis Square buy-sell-trade shop for secondhand clothing and
  accessories.
- **Why:** Deferred to the final Why pass.
- **Why-pass notes:** Long-term development of personal style and excellent
  finds: product-of-divorce sweater; Kris's endless bad-sunglasses search; crop
  blazer; etc.
- **Good to know:** Gender is invisible andbut there are more women's clothes
  than men's. Beware of times when Tufts students might stampede.
- **Area:** Davis Square
- **City:** Somerville
- **Address:** 238 Elm Street, Somerville, MA 02144
- **Map link:** Existing Google Maps link retained.
- **Official link:** Buffalo Exchange Somerville location page.
- **Image:** Existing Buffalo Exchange — Somerville artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026

## 25. Lucy Parsons Center — reviewed facts

- **Slug:** `lucy-parsons-center`
- **Name:** Lucy Parsons Center
- **Been there?:** Done that.
- **What:** A collectively run radical bookstore and community space carrying
  political books, zines, and other independent media.
- **Why:** Deferred to the final Why pass.
- **Good to know:** It's volunteer-run, so hours are sporadic. Check its social
  media before making a special trip; the space also hosts readings,
  screenings, meetings, and other events.
- **Area:** Hyde Square
- **City:** Boston
- **Address:** 358A Centre Street, Jamaica Plain, MA 02130
- **Map link:** Existing Google Maps link retained.
- **Official link:** Omit until the apparently compromised official domain is
  restored.
- **Image:** Existing Lucy Parsons Center artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026

## 26. Free Play — Providence — reviewed facts

- **Slug:** `free-play-providence`
- **Name:** Free Play — Providence
- **Been there?:** Done that.
- **What:** A 21+ arcade bar with more than 160 classic arcade games, all set to
  free play after admission.
- **Why:** Deferred to the final Why pass.
- **Good to know:** Sister spot to Free Play, Worcester. Admission is $8 or $12
  depending on the day. It's usually 21+, but select Sunday Family Days are
  open to all ages. No re-entry. Most importantly, there's DDR!
- **Area:** Downtown Providence
- **City:** Providence
- **Address:** 182 Pine Street, Providence, RI 02903
- **Map link:** Existing Google Maps link retained.
- **Official link:** Free Play Providence location page.
- **Image:** Existing Free Play artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026

## 27. Free Play — Worcester — reviewed facts

- **Slug:** `free-play-worcester`
- **Name:** Free Play — Worcester
- **Been there?:** Done that.
- **What:** A downtown arcade bar with more than 100 classic arcade games, all
  set to free play after admission.
- **Why:** Deferred to the final Why pass.
- **Good to know:** Sister spot to Free Play, Providence. Admission is $8 or
  $12 depending on the day. It's usually 21+, but select Family Days are open
  to all ages. Karaoke on Fridays and the Saturday retro dance night are
  included with admission. No re-entry. Most importantly, there's DDR!
- **Area:** Downtown Worcester
- **City:** Worcester
- **Address:** 25 Union Street, Worcester, MA 01608
- **Map link:** Existing Google Maps link retained.
- **Official link:** Free Play Worcester location page.
- **Image:** Existing Free Play artwork retained.
- **Image description:** Existing image description to be migrated with the
  approved record.
- **Updated date:** August 11, 2026
