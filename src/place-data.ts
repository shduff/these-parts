export type BeenThere = "Done that." | "Not yet.";

export type Place = {
  slug: string;
  name: string;
  what: string;
  why: string;
  goodToKnow?: string;
  beenThere: BeenThere;
  area: string;
  address: string;
  googleMapsUrl: string;
  image: string;
};

const basePlaces: Place[] = [
  {
    slug: "ether-dome",
    name: "Ether Dome",
    what:
      "A preserved nineteenth-century surgical amphitheater at Massachusetts General Hospital, where the first public demonstration of surgical anesthesia took place.",
    why:
      "An intact little room where the world quietly changed. It feels theatrical, eerie, and unexpectedly intimate.",
    beenThere: "Not yet.",
    area: "Beacon Hill",
    address: "55 Fruit Street, Boston, MA 02114",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ether+Dome+Boston",
    image: "./art/places/ether-dome.png",
  },
  {
    slug: "mapparium",
    name: "Mapparium",
    what:
      "A three-story stained-glass globe inside the Christian Science Plaza’s How Do You See the World? experience. You cross through its center on a glass bridge while the map surrounds you.",
    why:
      "Worth ducking into. Few places make walking across a room feel this transporting, and the strange acoustics complete the trick.",
    beenThere: "Done that.",
    area: "Back Bay",
    address: "210 Massachusetts Avenue, Boston, MA 02115",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mapparium+Boston",
    image: "./art/places/mapparium.png",
  },
  {
    slug: "boston-athenaeum",
    name: "Boston Athenaeum",
    what:
      "An independent library and cultural institution with art-filled rooms, a sculptural staircase, and quiet places to read.",
    why:
      "It is hiding in plain sight on Beacon Street: a place to climb, browse, sit down, and let an afternoon get away from you.",
    beenThere: "Not yet.",
    area: "Beacon Hill",
    address: "10½ Beacon Street, Boston, MA 02108",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Boston+Athenaeum",
    image: "./art/places/boston-athenaeum.png",
  },
  {
    slug: "old-south-church",
    name: "Old South Church",
    what:
      "The exuberant sanctuary of an 1875 Ruskinian Gothic church, filled with carved wood, pale stone, pointed arches, and saturated color.",
    why:
      "The outside is familiar Copley Square scenery; the inside is warmer, stranger, and far more colorful than the street lets on.",
    beenThere: "Done that.",
    area: "Copley Square",
    address: "645 Boylston Street, Boston, MA 02116",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Old+South+Church+Boston",
    image: "./art/places/old-south-church.png",
  },
  {
    slug: "all-saints-way",
    name: "All Saints Way",
    what:
      "A handmade street-side shrine assembled in a narrow North End alley from statues, prayer cards, flowers, lights, and contributed mementos.",
    why:
      "A private collection that slowly became part of the neighborhood—a whole world tucked behind an easy-to-miss gate.",
    beenThere: "Not yet.",
    area: "North End",
    address: "Between 4 and 8 Battery Street, Boston, MA 02109",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=All+Saints+Way+Boston",
    image: "./art/places/all-saints-way.png",
  },
  {
    slug: "waterworks-museum",
    name: "Metropolitan Waterworks Museum",
    what:
      "Three monumental steam-driven water pumps preserved inside the former Chestnut Hill High Service Pumping Station.",
    why:
      "A cathedral-sized room built around machinery: giant flywheels, iron stairs, pipes, and the civic drama of getting water uphill.",
    beenThere: "Not yet.",
    area: "Chestnut Hill",
    address: "2450 Beacon Street, Boston, MA 02467",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Metropolitan+Waterworks+Museum",
    image: "./art/places/waterworks-museum.png",
  },
  {
    slug: "mcgrath-highway-overpass",
    name: "McGrath Highway Overpass",
    what:
      "An overpass across McGrath Highway in Somerville, before Broadway when traveling toward I-93.",
    why:
      "I crossed it often as a kid, and it remains a very special place to me.",
    beenThere: "Done that.",
    area: "Somerville",
    address: "McGrath Highway near Broadway, Somerville, MA",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=McGrath+Highway+Broadway+Somerville+MA",
    image: "./art/places/mcgrath-highway-overpass.png",
  },
  {
    slug: "sherman-court",
    name: "Sherman Court",
    what:
      "A small walkthrough path in Winter Hill—an unassuming little urban nook.",
    why:
      "On some level it is nothing special, but that is exactly what I love about it.",
    beenThere: "Done that.",
    area: "Winter Hill",
    address: "Sherman Court, Somerville, MA 02145",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sherman+Court+Somerville+MA+02145",
    image: "./art/places/sherman-court.png",
  },
  {
    slug: "forest-hills-cemetery",
    name: "Forest Hills Cemetery",
    what:
      "A historic garden cemetery with winding paths, sculpture, mature trees, and a pond.",
    why: "I have never been and would really love to explore it.",
    beenThere: "Not yet.",
    area: "Jamaica Plain",
    address: "95 Forest Hills Avenue, Boston, MA 02130",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Forest+Hills+Cemetery+Boston",
    image: "./art/places/forest-hills-cemetery.png",
  },
  {
    slug: "alewife-brook-path",
    name: "Alewife Brook Path",
    what:
      "A tucked-away walking and running path along Route 16, screened by the brook, reeds, and trees.",
    why:
      "It feels surprisingly secluded beside a major road—good for walking, running, or simply disappearing for a while.",
    beenThere: "Done that.",
    area: "Alewife",
    address: "Alewife Brook Parkway, Cambridge and Somerville, MA",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Alewife+Brook+Path+Massachusetts",
    image: "./art/places/alewife-brook-path.png",
  },
  {
    slug: "ponyhenge",
    name: "Ponyhenge",
    what:
      "A changing roadside gathering of abandoned rocking horses arranged in a field.",
    why:
      "It has exactly the strange, communal, inexplicable energy this collection needs. I have not been yet.",
    beenThere: "Not yet.",
    area: "Lincoln",
    address: "47 Old Sudbury Road, Lincoln, MA 01773",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ponyhenge+Lincoln+MA",
    image: "./art/places/ponyhenge.png",
  },
  {
    slug: "cambridge-antique-market",
    name: "Cambridge Antique Market",
    what:
      "Five floors of furniture, clothing, records, ephemera, and odd finds from more than 150 dealers.",
    why:
      "It is such a fun spot. Their Presidents’ Day sale has also involved very cheap cherry pie, which is an excellent reason to go—check that it is happening before making a plan around it.",
    beenThere: "Done that.",
    area: "East Cambridge",
    address: "201 Monsignor O’Brien Highway, Cambridge, MA 02141",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Cambridge+Antique+Market",
    image: "./art/places/cambridge-antique-market.png",
  },
  {
    slug: "lehrhaus",
    name: "Lehrhaus",
    what:
      "A Jewish tavern and house of learning offering meals, drinks, classes, and workshops.",
    why:
      "Great vegan food, great vibes, and a place I have enjoyed both for workshops and meals. It is run by a former colleague of Rosalie’s.",
    beenThere: "Done that.",
    area: "Somerville",
    address: "425 Washington Street, Somerville, MA 02143",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Lehrhaus+Somerville",
    image: "./art/places/lehrhaus.png",
  },
  {
    slug: "level99",
    name: "Level99",
    what:
      "A large collection of short physical and mental challenge rooms designed for teams.",
    why:
      "A gleefully elaborate place to solve things, climb things, and get competitive with friends.",
    beenThere: "Done that.",
    area: "Natick",
    address: "1235 Worcester Street, Suite 3330, Natick, MA 01760",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Level99+Natick",
    image: "./art/places/level99.png",
  },
  {
    slug: "red-fox-escapes",
    name: "Red Fox Escapes",
    what: "Story-driven escape rooms in Central Square.",
    why:
      "A satisfying, immersive group puzzle that I have actually tried.",
    beenThere: "Done that.",
    area: "Central Square",
    address: "614 Massachusetts Avenue, Cambridge, MA 02139",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Red+Fox+Escapes+Cambridge",
    image: "./art/places/red-fox-escapes.png",
  },
  {
    slug: "alewife-extension",
    name: "Alewife Extension",
    what:
      "The path that continues straight beyond Alewife station toward Belmont when the more familiar route turns away.",
    why:
      "It is a surprisingly beautiful continuation hiding just beyond a route everyone thinks they already know.",
    beenThere: "Done that.",
    area: "Alewife",
    address: "Alewife Station to Brighton Street, Belmont, MA",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fitchburg+Cutoff+Path+Alewife+Belmont",
    image: "./art/places/alewife-extension.png",
  },
  {
    slug: "mount-misery",
    name: "Mount Misery",
    what:
      "A 227-acre conservation area of wooded hills, ponds, wetlands, and old agricultural fields.",
    why:
      "A nearby pocket of woods where the name is much more dramatic than the actual experience.",
    beenThere: "Done that.",
    area: "Lincoln",
    address: "South Great Road (Route 117), Lincoln, MA 01773",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mount+Misery+Lincoln+MA",
    image: "./art/places/mount-misery.png",
  },
  {
    slug: "decordova-sculpture-park",
    name: "deCordova Sculpture Park",
    what:
      "An outdoor sculpture park spread across lawns, woods, and the edge of Flint’s Pond.",
    why:
      "Art encountered as part of a rambling day outside, with enough space for the objects and the looking to loosen up.",
    beenThere: "Done that.",
    area: "Lincoln",
    address: "51 Sandy Pond Road, Lincoln, MA 01773",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=deCordova+Sculpture+Park",
    image: "./art/places/decordova-sculpture-park.png",
  },
  {
    slug: "harvard-museum-natural-history",
    name: "Harvard Museum of Natural History",
    what:
      "Harvard’s natural-history museum, with an especially important stop at the astonishingly precise glass flowers.",
    why:
      "The glass flowers turn scientific observation into something uncanny and beautiful. Massachusetts residents can currently visit free on Sundays from 9–noon and Wednesdays from 3–5 with proof of residency.",
    beenThere: "Done that.",
    area: "Harvard Square",
    address: "26 Oxford Street, Cambridge, MA 02138",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Harvard+Museum+of+Natural+History",
    image: "./art/places/harvard-museum-natural-history.png",
  },
  {
    slug: "miniature-city",
    name: "Miniature City",
    what:
      "A permanent scale model of Venice’s Palazzo Ducale displayed inside the North End branch of the Boston Public Library.",
    why:
      "Worth ducking into. It does not need to become a whole thing.",
    beenThere: "Done that.",
    area: "North End",
    address: "25 Parmenter Street, Boston, MA 02113",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=North+End+Branch+Boston+Public+Library",
    image: "./art/places/miniature-city.png",
  },
  {
    slug: "grolier-poetry-book-shop",
    name: "Grolier Poetry Book Shop",
    what:
      "A tiny Harvard Square bookshop devoted entirely to poetry, with thousands of volumes packed into a very small room.",
    why:
      "The hours are not great; in another sense, they are great. Check before making a special trip.",
    beenThere: "Done that.",
    area: "Harvard Square",
    address: "6 Plympton Street, Cambridge, MA 02138",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Grolier+Poetry+Book+Shop",
    image: "./art/places/grolier-poetry-book-shop.png",
  },
  {
    slug: "sofra",
    name: "Sofra",
    what:
      "A Middle Eastern bakery and cafe serving contemporary interpretations of food from Turkey, Lebanon, and Greece.",
    why:
      "The kind of place where a bakery counter can become the destination rather than the thing you stop at on the way.",
    beenThere: "Done that.",
    area: "Cambridge / Watertown",
    address: "1 Belmont Street, Cambridge, MA 02138",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sofra+Bakery+Cambridge",
    image: "./art/places/sofra.png",
  },
  {
    slug: "mount-auburn-cemetery",
    name: "Mount Auburn Cemetery",
    what:
      "A landscaped cemetery and arboretum of hills, ponds, paths, monuments, mature trees, and a tower with a view.",
    why: "A place for a good long walk.",
    beenThere: "Done that.",
    area: "Cambridge / Watertown",
    address: "580 Mount Auburn Street, Cambridge, MA 02138",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mount+Auburn+Cemetery",
    image: "./art/places/mount-auburn-cemetery.png",
  },
  {
    slug: "buffalo-exchange-somerville",
    name: "Buffalo Exchange — Somerville",
    what:
      "A Davis Square buy-sell-trade shop for secondhand clothing and accessories.",
    why:
      "A local place for the pleasure of finding something unexpected.",
    beenThere: "Done that.",
    area: "Davis Square",
    address: "238 Elm Street, Somerville, MA 02144",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Buffalo+Exchange+Somerville",
    image: "./art/places/buffalo-exchange-somerville.png",
  },
  {
    slug: "lucy-parsons-center",
    name: "Lucy Parsons Center",
    what:
      "A collectively run radical bookstore and community space in Jamaica Plain.",
    why:
      "A political, community-rooted place worth knowing about. The hours can be unusual, so check before going.",
    beenThere: "Done that.",
    area: "Jamaica Plain",
    address: "358A Centre Street, Jamaica Plain, MA 02130",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Lucy+Parsons+Center+Jamaica+Plain",
    image: "./art/places/lucy-parsons-center.png",
  },
  {
    slug: "free-play-providence",
    name: "Free Play — Providence",
    what:
      "A 21+ arcade bar with more than 160 classic cabinets, pinball machines, and other games set to free play after admission.",
    why:
      "A full-room dose of blinking, noisy, communal play.",
    beenThere: "Done that.",
    area: "Providence",
    address: "182 Pine Street, Providence, RI 02903",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Free+Play+Bar+Arcade+Providence",
    image: "./art/places/free-play.png",
  },
  {
    slug: "free-play-worcester",
    name: "Free Play — Worcester",
    what:
      "A 21+ downtown arcade bar filled with classic cabinets, pinball, and games set to free play after admission.",
    why:
      "A destination for an evening organized around play, with the Rewind Retro Dance Lounge folded into the same place.",
    beenThere: "Done that.",
    area: "Worcester",
    address: "25 Union Street, Worcester, MA 01608",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Free+Play+Bar+Arcade+Worcester",
    image: "./art/places/free-play-worcester.png",
  },
  {
    slug: "halibut-point",
    name: "Halibut Point",
    what:
      "A coastal park and reservation built around the former Babson Farm granite quarry, with rocky ledges, tide pools, winding trails, and ocean views stretching toward New Hampshire and Maine.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Cape Ann",
    address: "4 Gott Avenue, Rockport, MA 01966",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Halibut+Point+State+Park+4+Gott+Avenue+Rockport+MA",
    image: "./art/places/halibut-point.png",
  },
  {
    slug: "purgatory-chasm",
    name: "Purgatory Chasm",
    what:
      "A quarter-mile cleft through granite bedrock, with walls reaching 70 feet high and a trail that scrambles among enormous boulders and oddly named rock formations.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Central Massachusetts",
    address: "198 Purgatory Road, Sutton, MA 01590",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Purgatory+Chasm+State+Reservation+198+Purgatory+Road+Sutton+MA",
    image: "./art/places/purgatory-chasm.png",
  },
  {
    slug: "georges-island",
    name: "Georges Island",
    what:
      "A Boston Harbor island dominated by Fort Warren, a sprawling Civil War-era granite fort filled with passageways, ramparts, grassy courtyards, and harbor views.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Boston Harbor",
    address: "Georges Island, Boston, MA 02110",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Georges+Island+Boston+MA",
    image: "./art/places/georges-island.png",
  },
  {
    slug: "sarma",
    name: "Sarma",
    what:
      "A lively neighborhood restaurant serving modern Middle Eastern meze in waves of small, shared plates.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Winter Hill",
    address: "249 Pearl Street, Somerville, MA 02145",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sarma+249+Pearl+Street+Somerville+MA",
    image: "./art/places/sarma.png",
  },
  {
    slug: "the-loov",
    name: "The Loov",
    what:
      "A large shared arts studio and event space hosting figure drawing, open studios, performances, comedy, and assorted community programming.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "East Somerville",
    address: "72 Joy Street, Somerville, MA 02143",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=The+Loov+72+Joy+Street+Somerville+MA",
    image: "./art/places/the-loov.png",
  },
  {
    slug: "deer-island",
    name: "Deer Island",
    what:
      "The enormous Deer Island Wastewater Treatment Plant that helped transform Boston Harbor, surrounded by five miles of public paths with grassy hills, a fishing pier, industrial infrastructure, and wide views of the harbor, skyline, and airplanes approaching Logan.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Not yet.",
    area: "Boston Harbor",
    address: "190 Tafts Avenue, Winthrop, MA 02152",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Deer+Island+190+Tafts+Avenue+Winthrop+MA",
    image: "./art/places/deer-island.png",
  },
  {
    slug: "santarpios",
    name: "Santarpio's",
    what:
      "An old-school East Boston institution serving thin, blistered pizzas alongside charcoal-grilled meat skewers with bread and hot peppers.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "East Boston",
    address: "111 Chelsea Street, East Boston, MA 02128",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Santarpios+Pizza+111+Chelsea+Street+East+Boston+MA",
    image: "./art/places/santarpios.png",
  },
  {
    slug: "circus-cooperative-cafe",
    name: "Circus Cooperative Cafe",
    what:
      "A worker-owned cafe founded by former Darwin's employees, serving coffee, pastries, and sandwiches alongside zines, books, board games, and community programming.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Cambridgeport",
    address: "31 Putnam Avenue, Cambridge, MA 02139",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Circus+Cooperative+Cafe+31+Putnam+Avenue+Cambridge+MA",
    image: "./art/places/circus-cooperative-cafe.png",
  },
  {
    slug: "constitution-beach",
    name: "Constitution Beach",
    what:
      "A sandy East Boston beach directly across the water from Logan Airport, where planes descend and take off at gloriously unreasonable proximity.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "East Boston",
    address: "0 Barnes Avenue, East Boston, MA 02128",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Constitution+Beach+0+Barnes+Avenue+East+Boston+MA",
    image: "./art/places/constitution-beach.png",
  },
  {
    slug: "piers-park",
    name: "Piers Park",
    what:
      "A landscaped East Boston pier extending into the harbor, with pavilions, lawns, and beautiful skyline views across the water.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "East Boston",
    address: "95 Marginal Street, East Boston, MA 02128",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Piers+Park+95+Marginal+Street+East+Boston+MA",
    image: "./art/places/piers-park.png",
  },
  {
    slug: "comm-ave-promenade",
    name: "Comm Ave Promenade",
    what:
      "The long, tree-lined park running down the center of Commonwealth Avenue, connecting the Public Garden to the Back Bay Fens through a procession of paths, benches, statues, and memorials.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Back Bay",
    address: "Commonwealth Avenue between Arlington Street and Charlesgate East, Boston, MA",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Commonwealth+Avenue+Mall+Boston+MA",
    image: "./art/places/comm-ave-promenade.png",
  },
  {
    slug: "ica-steps",
    name: "ICA Steps",
    what:
      "The ICA's broad wooden grandstand descending from the museum to the Harborwalk, turning the building itself into public seating overlooking Boston Harbor.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Seaport",
    address: "25 Harbor Shore Drive, Boston, MA 02210",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=ICA+Boston+25+Harbor+Shore+Drive+Boston+MA",
    image: "./art/places/ica-steps.png",
  },
  {
    slug: "sci-fi-clubhouse",
    name: "Sci-Fi Clubhouse",
    what:
      "The New England Science Fiction Association's actual neighborhood clubhouse, containing a library of more than 20,000 science-fiction and fantasy books, magazines, audiobooks, and movies.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Not yet.",
    area: "Magoun Square",
    address: "504 Medford Street, Somerville, MA 02145",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=NESFA+Clubhouse+504+Medford+Street+Somerville+MA",
    image: "./art/places/sci-fi-clubhouse.png",
  },
  {
    slug: "brattle-theatre",
    name: "Brattle Theatre",
    what:
      "A single-screen nonprofit repertory cinema showing classic, international, independent, cult, and otherwise difficult-to-see films in a former theatrical playhouse.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Harvard Square",
    address: "40 Brattle Street, Cambridge, MA 02138",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Brattle+Theatre+40+Brattle+Street+Cambridge+MA",
    image: "./art/places/brattle-theatre.png",
  },
  {
    slug: "harvard-film-archive",
    name: "Harvard Film Archive",
    what:
      "Harvard's working archive of more than 40,000 motion-picture prints and audiovisual materials, with a public cinematheque screening rare, restored, international, and experimental films inside Le Corbusier's Carpenter Center.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Harvard Square",
    address: "24 Quincy Street, Cambridge, MA 02138",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Harvard+Film+Archive+24+Quincy+Street+Cambridge+MA",
    image: "./art/places/harvard-film-archive.png",
  },
  {
    slug: "castle-island",
    name: "Castle Island",
    what:
      "A former harbor island now connected to South Boston, dominated by the granite walls of Fort Independence and surrounded by a walking loop, beaches, fishing spots, and views of ships and low-flying planes.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "South Boston",
    address: "2010 William J. Day Boulevard, Boston, MA 02127",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Castle+Island+2010+William+J+Day+Boulevard+Boston+MA",
    image: "./art/places/castle-island.png",
  },
  {
    slug: "woodmans-of-essex",
    name: "Woodman's of Essex",
    what:
      "The century-old Essex clam shack where Chubby and Bessie Woodman are credited with inventing the New England fried clam in 1916, still serving whole-belly clams, chowder, lobster, and piles of fried seafood.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Cape Ann",
    address: "119 Main Street, Essex, MA 01929",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Woodmans+of+Essex+119+Main+Street+Essex+MA",
    image: "./art/places/woodmans-of-essex.png",
  },
  {
    slug: "arnold-arboretum",
    name: "Arnold Arboretum",
    what:
      "A 281-acre living museum and urban forest holding more than 15,000 documented plants, with winding roads, wooded footpaths, strange specimens, flowering collections, and broad views from Peters Hill.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Jamaica Plain",
    address: "125 Arborway, Boston, MA 02130",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Arnold+Arboretum+125+Arborway+Boston+MA",
    image: "./art/places/arnold-arboretum.png",
  },
  {
    slug: "sandy-beach",
    name: "Sandy Beach",
    what:
      "A sandy freshwater swimming beach on Upper Mystic Lake in Winchester, officially renamed Shannon Beach but still known locally by its old name.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Mystic Lakes",
    address: "481 Mystic Valley Parkway, Winchester, MA 01890",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Shannon+Beach+481+Mystic+Valley+Parkway+Winchester+MA",
    image: "./art/places/sandy-beach.png",
  },
  {
    slug: "spy-pond",
    name: "Spy Pond",
    what:
      "A large kettle pond tucked between Arlington neighborhoods and Route 2, with a waterfront park and paths that make the water feel surprisingly secluded.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Arlington",
    address: "Pond Lane, Arlington, MA 02474",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Spy+Pond+Park+Pond+Lane+Arlington+MA",
    image: "./art/places/spy-pond.png",
  },
  {
    slug: "middlesex-fells",
    name: "Middlesex Fells",
    what:
      "An urban wilderness containing rocky woods, ponds, reservoirs, towers, and more than 100 miles of trails across 2,575 acres.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "North of Boston",
    address: "4 Woodland Road, Stoneham, MA 02180",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Middlesex+Fells+Reservation",
    image: "./art/places/middlesex-fells.png",
  },
  {
    slug: "bit-bar",
    name: "Bit Bar",
    what:
      "A restaurant, bar, and old-school arcade in Salem with more than 50 rotating classic arcade games and pinball machines.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Salem",
    address: "278 Derby Street, Salem, MA 01970",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bit+Bar+278+Derby+Street+Salem+MA",
    image: "./art/places/bit-bar.png",
  },
  {
    slug: "high-tea-at-jolie",
    name: "High Tea at Jolie",
    what:
      "A full high-tea service inside a fanciful Salem tea salon, with tiered sandwiches, scones, pastries, and a personal pot of tea.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Salem",
    address: "316 Derby Street, Salem, MA 01970",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Jolie+Tea+Company+316+Derby+Street+Salem+MA",
    image: "./art/places/high-tea-at-jolie.png",
  },
  {
    slug: "iggys-bread",
    name: "Iggy's Bread",
    what:
      "The retail counter attached to Iggy's working Cambridge bakery, selling freshly baked breads, bagels, pastries, pizza, sandwiches, and other carbohydrates of consequence.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "North Cambridge",
    address: "130 Fawcett Street, Cambridge, MA 02138",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Iggys+Bread+130+Fawcett+Street+Cambridge+MA",
    image: "./art/places/iggys-bread.png",
  },
  {
    slug: "blue-hills",
    name: "Blue Hills",
    what:
      "A 7,000-acre reservation of wooded hills, ponds, rocky summits, and 125 miles of trails just south of Boston. Great Blue Hill, the tallest of its 22 hills, has panoramic views across the metropolitan area.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Blue Hills",
    address: "725 Hillside Street, Milton, MA 02186",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Blue+Hills+Reservation+725+Hillside+Street+Milton+MA",
    image: "./art/places/blue-hills.png",
  },
  {
    slug: "manray",
    name: "ManRay",
    what:
      "A resurrected Central Square nightclub devoted to goth, industrial, new wave, queer nightlife, and other nocturnal subcultures.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Central Square",
    address: "40 Prospect Street, Cambridge, MA 02139",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=ManRay+40+Prospect+Street+Cambridge+MA",
    image: "./art/places/manray.png",
  },
  {
    slug: "yafa-bakery",
    name: "Yafa Bakery",
    what:
      "A Palestinian-owned bakery and cafe serving breads, pastries, baklava, ma'amoul, knafeh, dates, mana'eesh, chai, and other foods rooted in Palestinian culinary traditions.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Ward Two",
    address: "594 Somerville Avenue, Somerville, MA 02143",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Yafa+Bakery+Cafe+594+Somerville+Avenue+Somerville+MA",
    image: "./art/places/yafa-bakery.png",
  },
  {
    slug: "north-point-park",
    name: "North Point Park",
    what:
      "A riverfront park of lawns, curving paths, small islands, and bridges beneath the Zakim Bridge. It was recently renamed Richard McKinnon State Park, but North Point Park remains the useful name.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "East Cambridge",
    address: "1 Education Circle, Cambridge, MA 02141",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=North+Point+Park+1+Education+Circle+Cambridge+MA",
    image: "./art/places/north-point-park.png",
  },
  {
    slug: "kowloon",
    name: "Kowloon",
    what:
      "An enormous, family-owned Route 1 institution serving Chinese, Thai, Japanese, and Polynesian food inside a sprawling palace of tropical rooms, fountains, neon, and theatrical kitsch.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Route 1",
    address: "948 Broadway, Saugus, MA 01906",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kowloon+Restaurant+948+Broadway+Saugus+MA",
    image: "./art/places/kowloon.png",
  },
  {
    slug: "mit-chapel",
    name: "MIT Chapel",
    what:
      "Eero Saarinen's small, windowless brick chapel, encircled by a shallow moat. Inside, light descends through a domed skylight and catches on Harry Bertoia's cascading metal altarpiece.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "MIT",
    address: "48 Massachusetts Avenue, Cambridge, MA 02139",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=MIT+Chapel+48+Massachusetts+Avenue+Cambridge+MA",
    image: "./art/places/mit-chapel.png",
  },
  {
    slug: "twin-bridge-and-king-kone",
    name: "Twin Bridge and King Kone",
    what:
      "A ramble through the hemlock woods and along Baboosic Brook at Twin Bridge Park, followed by an enormous soft-serve cone at a Merrimack institution.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Merrimack, New Hampshire",
    address: "Twin Bridge Park and King Kone, Merrimack, NH",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Twin+Bridge+Park+and+King+Kone+Merrimack+NH",
    image: "./art/places/twin-bridge-park-king-kone.png",
  },
  {
    slug: "mendon-drive-in",
    name: "Mendon Drive-In",
    what:
      "A seasonal drive-in theater showing double features on two enormous outdoor screens, with a snack bar, ice-cream stand, and beer garden between them.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Mendon",
    address: "35 Milford Street, Mendon, MA 01756",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mendon+Twin+Drive-In+35+Milford+Street+Mendon+MA",
    image: "./art/places/mendon-twin-drive-in.png",
  },
  {
    slug: "hampton-beach-boardwalk",
    name: "Hampton Beach Boardwalk",
    what:
      "A gloriously overstimulating strip of beach, arcades, fried food, souvenir shops, neon, motels, and people-watching along the New Hampshire coast.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "New Hampshire Seacoast",
    address: "160 Ocean Boulevard, Hampton, NH 03842",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hampton+Beach+Boardwalk+160+Ocean+Boulevard+Hampton+NH",
    image: "./art/places/hampton-beach-boardwalk.png",
  },
  {
    slug: "bike-and-boat-to-provincetown",
    name: "Bike and Boat to Provincetown",
    what:
      "A choose-your-own-ratio journey between Boston and Provincetown by bicycle and ferry: ride one way and sail the other, ferry with bikes and explore from Provincetown, or turn it into a longer round-trip expedition.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Not yet.",
    area: "Boston Harbor and Cape Cod",
    address: "MacMillan Pier, Provincetown, MA 02657",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=MacMillan+Pier+Provincetown+MA",
    image: "./art/places/bike-and-boat-to-provincetown.png",
  },
  {
    slug: "knight-moves-cafe",
    name: "Knight Moves Cafe",
    what:
      "A cozy cafe with hundreds of board games, food, and coffee, where you can stay as long as you want.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Coolidge Corner",
    address: "1402 Beacon Street, Brookline, MA 02446",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Knight+Moves+Cafe+1402+Beacon+Street+Brookline+MA",
    image: "./art/places/knight-moves.png",
  },
  {
    slug: "kickstand-cafe",
    name: "Kickstand Cafe",
    what:
      "An independent cafe directly beside the Minuteman Bikeway in Arlington Center, serving coffee, breakfast, pastries, and sandwiches.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Arlington Center",
    address: "594 Massachusetts Avenue, Arlington, MA 02476",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kickstand+Cafe+594+Massachusetts+Avenue+Arlington+MA",
    image: "./art/places/kickstand-cafe.png",
  },
  {
    slug: "chez-vous",
    name: "Chez-Vous",
    what:
      "A longtime Black family-owned roller rink in Dorchester, with DJs, public skate sessions, lessons, parties, and a snack bar.",
    why: "A place I want to return to and write about properly.",
    beenThere: "Done that.",
    area: "Dorchester",
    address: "11 Rhoades Street, Dorchester Center, MA 02124",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Chez-Vous+Roller+Skating+Rink+11+Rhoades+Street+Dorchester+MA",
    image: "./art/places/chez-vous.png",
  },
];

const expansionGoodToKnow: Record<string, string> = {
  "halibut-point": "The quarry overlook is ADA-accessible, with picnic tables and bathrooms nearby. The shore is rocky and requires some clambering; this is not a place to swim. Parking costs $5 for Massachusetts residents and $20 for nonresidents, and fills quickly when the weather is nice. Check the timing of low tide to find kelp and critters in tide pools!",
  "purgatory-chasm": "There's an accessible area to explore near the parking lot as well as trails to go deeper into the chasm. These trails require some scrambling, offer opportunities for climbing, and flatten out toward the back in a nice wooded area. Bring cardboard to speed-slide down the steep slope near the parking lot!",
  "georges-island": "Reachable by seasonal ferry from Long Wharf. There are charcoal grills, a little snack shack, and a small indoor museum with bathrooms, a bubbler, and AC. The fort contains dark corridors and acoustically incredible rooms. See if you can find a park ranger to tell you the island's ghost story!",
  sarma: "Reservations open 30 days ahead each morning at 10am and disappear quickly. If you show up between 4:30pm and 5pm, when they open, you can usually get a seat at the bar or even a walk-in table. You definitely want to go family-style, and leave room for the additional dishes circulating around the dining room.",
  "the-loov": "Check the calendar; this is an event space, not a gallery with regular drop-in hours. Recurring programming includes figure drawing, Sunday open-studio time, variety shows, comedy, and one-offs. It's accessible directly from the Community Path.",
  "deer-island": "The 2.6-mile paved perimeter path is accessible and open year-round from sunrise to sunset without a reservation. To enter the treatment plant itself, MWRA offers advance-reservation public tours monthly from April through November at 9:30am on Tuesdays and Fridays. Contact the tour office well ahead; security forms are due at least seven days before the tour. Park near the head of the island.",
  santarpios: "It's tucked beneath the Route 1A overpass. The pizza is great without cheese too, and the hot peppers are INCREDIBLE.",
  "circus-cooperative-cafe": "Feels very old Cambridge. Vegan options are excellent. Coffee is tasty. Bathrooms are filled with free community health resources, e.g. menstrual products, overdose kits, etc.",
  "constitution-beach": "On the Blue Line, across an ocean inlet from Logan, with planes flying overhead—picturesque. There are bathrooms, picnic areas, a playground, courts, and a parking lot.",
  "piers-park": "Great for a stroll, really great for a picnic. It also has a playground and splash pad for kiddos.",
  "comm-ave-promenade": "Beautiful in spring and summer, but iconic Boston when the lights go up and snow settles around the holidays.",
  "ica-steps": "The grandstand, plaza, and adjacent Harborwalk are public spaces, so no museum ticket is needed. Sit under the building's enormous cantilever for shade, watch the boats and planes, or check the ICA calendar for free outdoor music and events. The museum is worth the ticket, but the public steps are a good free option. Across the water, the ICA Watershed in the East Boston shipyard is also free; the ICA water shuttle between them requires a ticket.",
  "sci-fi-clubhouse": "The library is generally open to everyone on Wednesdays and Saturdays for browsing, reading, or chatting; borrowing requires an inexpensive NESFA membership. The clubhouse also hosts free game days, screenings, dances, and other fan gatherings. Check the calendar or call before dropping in.",
  "brattle-theatre": "Check the calendar rather than expecting a standard weeklong movie run. Programs often unfold as director, genre, or thematic series. The popcorn is vegan!",
  "harvard-film-archive": "Regular admission is $10 and there is no late seating. No food or drink is sold or allowed in the theater. There's often a small student art exhibit on the building's ground floor that you can poke around in for a few minutes before the film.",
  "castle-island": "You can bring charcoal grills. The playground has tree cover and shade for kiddos. The walking loop is exposed but lovely and leads to a little beach area for swimming and catching hermit crabs. Sullivan's snack shack is an institution. Parking is free but fills up like crazy on a beautiful day, and transit access is poor.",
  "woodmans-of-essex": "Eat in at the awesome old-school wooden cafeteria-style booths or take away to the beautiful outdoor seating. The ice cream stand out back has cotton candy/Smurf flavor. I don't think anything is actually vegan, even the fries, so make choices for yourself. A Blue Moon with an orange slice tastes better than it should here.",
  "arnold-arboretum": "Free and open daily. Start at the visitor center if you want a map or plant guidance, but entering through one of the smaller neighborhood gates makes it feel more like discovering a forest. Picnicking is normally prohibited except on Lilac Sunday.",
  "sandy-beach": "There is a bathhouse, playground, picnic grove, outdoor rinse stations, and limited parking. It's especially nice to reach by bike: the Mystic River Greenway and lakeside path have multiple access points along the water, including smaller entrances near unofficial swimming spots. They are also the way in for unofficial night swimming. Check the current swimming advisory before getting in; bacteria closures happen periodically after bad water tests.",
  "spy-pond": "There are benches and shoreline rocks where you can sit, stand, and wade into the water during the day. A beautiful path follows part of the pond and connects directly to the Minuteman Community Path. Swimming isn't officially allowed, but the pond is incredible at night.",
  "middlesex-fells": "The reservoirs are beautiful, and the loop around them is a great run. Sheepfold is really beautiful. Wright's Tower is an incredible place for lunch and a view of Boston during the day; at night it is a place to hang out, have a drink, and shoot the shit. There are flat, walkable fire roads as well as rougher-and-tumble trails like the Skyline Trail, which is good for a harder hike. Parking is free but spread among small lots and roadside pull-offs. Oh yeah, you can mountain bike!",
  "bit-bar": "The machines take quarters or tokens and generally cost between 25 cents and $1 per play. Accompanied minors are welcome before 8pm; after that, it's 21+. There are great vegan options. Definitely play Crazy Taxi and DDR.",
  "high-tea-at-jolie": "The high-tea experience is a little pricey, but it is so satisfying: tiny spoons, multilayered china sets with tiny snacks and delicacies, tea in champagne glasses, tea in pots. You can call ahead about allergies and dietary substitutions.",
  "iggys-bread": "Go earlier for the widest selection, although things continue emerging from the ovens throughout the day. It's primarily a grab-and-go operation, with a small parking lot outside. They stock a lot of local cafes, but sometimes you just want to go to the source. Get their pecan-walnut roll. Trust me!",
  "blue-hills": "The reservation is enormous, so choose your destination before going and be aware that you could get meaningfully lost lol. The Skyline Trail offers a rocky hike to Great Blue Hill and Eliot Tower. Houghton's Pond has swimming, picnicking, bathrooms, and free parking. The reservation is an awesome place for trail running, mountain biking, and way bigger than the Middlesex Fells.",
  manray: "It's a good night when you hear Tears for Fears' \"Pale Shelter\" and Orchestral Manoeuvres in the Dark's \"Enola Gay\" on the same night. Every night has its own music, crowd, cover, and sometimes dress code, so check the calendar before going. Most events are 19+. Creative attire is encouraged, and some nights require all black or fetishwear.",
  "yafa-bakery": "There are plenty of vegan options. Expect unusually generous samples and hospitality. My go-to order is a za'atar manaqeesh, no cheese, a Jerusalem bread, and a side of hummus.",
  "north-point-park": "There's a large playground, splash pad, riverfront seating, a skate park, and interesting lighting installations, especially over the bike bridge. Public bathrooms are available in the nearby EF building.",
  kowloon: "The building is more important than culinary restraint, so eat inside and wander around. It also hosts comedy, wrestling, music, and other live events. Redevelopment is planned for the property, with a smaller Kowloon expected to remain, but no firm closing date has been announced for the original labyrinth. Get there while you can!",
  "mit-chapel": "The public visiting windows are narrow: weekdays from 10am–11am and 1:30pm–2:30pm. A scheduled service can supersede those hours, so be prepared to return another day. It's non-denominational and intended as a quiet space.",
  "twin-bridge-and-king-kone": "Twin Bridge Park has paths along the brook, picnic tables, and Kids Kove, a sprawling wooden playground with multiple levels and lots of lookouts and turnarounds. King Kone has served Merrimack since 1972 and rotates its soft-serve flavors. I recommend vanilla soft serve with cherry dip. With these two spots, you really can't have one without the other.",
  "mendon-drive-in": "Admission is currently $38 per vehicle. Buy tickets ahead and arrive early, especially on weekends; parking spaces are first-come, first-served. Sound comes through your FM radio. Engines must remain off during the movies, so bring blankets if it's cold.",
  "hampton-beach-boardwalk": "Summer brings free nightly performances at the Seashell Stage, Monday beach movies, and Wednesday fireworks. There are several public bathhouses along the beach. Parking is metered and competitive, so arrive early on a beautiful day. Be sure to get a fried dough and then stop in at the Playland Arcade!",
  "bike-and-boat-to-provincetown": "Both Boston ferry operators carry bicycles, but add a bike ticket when reserving. The ferries run seasonally and take about 90 minutes. If riding the Outer Cape, don't assume the protected Cape Cod Rail Trail continues to Provincetown; it currently ends in South Wellfleet, with roads and separate trails beyond it. Around Provincetown, the hilly Province Lands loop connects to Race Point and Herring Cove.",
  "knight-moves-cafe": "The game fee is $10 on weekdays and $15 on weekends and holidays. It covers the entire day. You can come and go as you please.",
  "kickstand-cafe": "To be honest, this cafe is nothing special. The food is mid at best, with the exception of their Iggy's products. However, its location on the Community Path makes it a special stop on many an outdoor adventure.",
  "chez-vous": "Sessions are divided by day, time, and sometimes age, so check the schedule before going. Admission generally includes skate rental, but everyone entering must buy a ticket and sign a waiver, even if they aren't skating. Parking is free, and the snack bar does what it does well. There's pizza, fries, and what my partner considers some of the greatest chicken tenders in the area.",
};

export const places: Place[] = basePlaces.map((place) => ({
  ...place,
  ...(expansionGoodToKnow[place.slug]
    ? { goodToKnow: expansionGoodToKnow[place.slug] }
    : {}),
}));
