export type VisitStatus = "Been" | "Next";

export type Place = {
  slug: string;
  name: string;
  what: string;
  why: string;
  status: VisitStatus;
  via: string;
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
      "A three-story stained-glass globe built in 1935. You cross through its center on a glass bridge while the map surrounds you.",
    why:
      "Few places make walking across a room feel this transporting. The strange acoustics complete the trick.",
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
];
