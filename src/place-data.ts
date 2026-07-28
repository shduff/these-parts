export type VisitStatus = "Been" | "Next";

export type Place = {
  slug: string;
  name: string;
  what: string;
  why: string;
  status: VisitStatus;
  via?: string;
  area: string;
  address: string;
  googleMapsUrl: string;
  image: string;
};

export const places: Place[] = [
  {
    slug: "ether-dome",
    name: "Ether Dome",
    what:
      "A preserved nineteenth-century surgical amphitheater at Massachusetts General Hospital, where the first public demonstration of surgical anesthesia took place.",
    why:
      "An intact little room where the world quietly changed. It feels theatrical, eerie, and unexpectedly intimate.",
    status: "Next",
    via: "Atlas chat",
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
    status: "Been",
    via: "Maya",
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
    status: "Next",
    via: "Sam",
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
    status: "Been",
    via: "Walking by",
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
    status: "Next",
    via: "Atlas Obscura",
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
    status: "Next",
    via: "A friend",
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
    status: "Been",
    via: "personal history",
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
    status: "Been",
    via: "personal discovery",
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
    status: "Next",
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
    status: "Been",
    via: "personal discovery",
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
    status: "Next",
    via: "the initial ChatGPT thread",
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
    status: "Been",
    via: "personal discovery",
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
    status: "Been",
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
    status: "Been",
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
    status: "Been",
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
    status: "Been",
    via: "personal discovery",
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
    status: "Been",
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
    status: "Been",
    via: "the initial ChatGPT thread",
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
    status: "Been",
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
    status: "Been",
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
    status: "Been",
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
    status: "Been",
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
    status: "Been",
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
    status: "Been",
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
    status: "Been",
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
    status: "Been",
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
    status: "Been",
    area: "Worcester",
    address: "25 Union Street, Worcester, MA 01608",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Free+Play+Bar+Arcade+Worcester",
    image: "./art/places/free-play-worcester.png",
  },
];
