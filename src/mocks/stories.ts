export interface Story {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
}

export const stories: Story[] = [
  {
    id: "s1",
    date: "14 Oct 2026",
    category: "Club",
    title: "Bears clinch the cup semi-final spot with a nine-run inning",
    excerpt:
      "A wild fifth inning at Medvednica Field turned the season around. Coach Kovačević on belief, patience and the long ball.",
    image: "/images/story-men.jpg",
    body: [
      "For four innings the semi-final looked like a pitching duel nobody wanted to blink during. Then the fifth arrived, the bases filled themselves on two errors and a walk, and the Bears stopped being polite.",
      "Nine runs later the dugout had emptied twice and the scoreboard operator had given up on the manual counter. The club is back in a cup semi-final for the first time since 2019.",
    ],
  },
  {
    id: "s2",
    date: "02 Oct 2026",
    category: "Academy",
    title: "Little Bears open the autumn tee-ball school",
    excerpt:
      "Free sessions every Saturday morning through November. Gloves and helmets provided — just bring a water bottle.",
    image: "/images/story-women.jpg",
    body: [
      "The Little Bears academy runs every Saturday from 10:00 until noon, and it is free for anyone between six and twelve years old. No equipment, no experience, no signing up three months in advance.",
      "Coaches Ana Jurić and Marko Babić run the sessions with a simple rule: everybody bats, everybody fields, everybody gets a turn at the water cooler. The autumn block runs until the end of November.",
    ],
  },
  {
    id: "s3",
    date: "21 Sep 2026",
    category: "Merch",
    title: "The 2026 club collection is here",
    excerpt:
      "Eighteen pieces, one palette. Everything on the merch page is available at the clubhouse on match days.",
    image: "/images/story-merch.jpg",
    body: [
      "Eighteen pieces, one palette: club red, bone white and black. The 2026 collection keeps the crest small, the fabric heavy and the price list honest — from a €3 wristband to a €40 backpack.",
      "Everything is stocked at the clubhouse and available on match days. Sizes can be swapped on the spot, and every euro sold goes into baseballs, junior travel and the drainage we keep promising to fix.",
    ],
  },
];

export const galleryImages = [
  {
    id: "g1",
    alt: "Pitcher winding up in the afternoon sun",
    image: "/images/gallery-pitcher.jpg",
  },
  {
    id: "g2",
    alt: "Batter driving the ball on a sunny afternoon",
    image: "/images/gallery-batter.jpg",
  },
  {
    id: "g3",
    alt: "Teams greeting each other after the game",
    image: "/images/gallery-team.jpg",
  },
  {
    id: "g4",
    alt: "Softball team celebrating together on the field",
    image: "/images/gallery-celebration.jpg",
  },
  {
    id: "g5",
    alt: "A game under way at Medvednica Field",
    image: "/images/gallery-field.jpg",
  },
];
