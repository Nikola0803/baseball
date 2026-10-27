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
    image:
      "https://readdy.ai/api/search-image?query=Bright%20sports%20photograph%20of%20a%20baseball%20batter%20completing%20a%20swing%20on%20a%20sunlit%20dirt%20field%2C%20clean%20white%20and%20red%20uniform%2C%20chalk%20dust%20in%20the%20air%2C%20clear%20sky%2C%20crisp%20afternoon%20light%2C%20shallow%20depth%20of%20field%2C%20editorial%20sports%20photography%2C%20natural%20colours%2C%20no%20text&width=1200&height=800&seq=medvednica-story-cup-day-21&orientation=landscape",
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
    image:
      "https://readdy.ai/api/search-image?query=Warm%20bright%20documentary%20photograph%20of%20a%20coach%20teaching%20young%20children%20how%20to%20hold%20a%20baseball%20bat%20on%20a%20green%20grass%20field%2C%20morning%20sunlight%2C%20cheerful%20atmosphere%2C%20clean%20white%20and%20red%20kit%2C%20shallow%20depth%20of%20field%2C%20editorial%20sports%20photography%2C%20no%20text&width=1200&height=800&seq=medvednica-story-academy-day-22&orientation=landscape",
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
    image:
      "https://readdy.ai/api/search-image?query=Flat%20lay%20editorial%20photograph%20of%20a%20baseball%20club%20merchandise%20collection%20including%20a%20black%20hoodie%2C%20red%20cap%2C%20baseball%20and%20canvas%20tote%20arranged%20on%20warm%20off-white%20surface%2C%20soft%20studio%20lighting%2C%20minimal%20styled%20composition%2C%20high%20detail&width=1200&height=800&seq=medvednica-story-merch-03&orientation=landscape",
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
    image:
      "https://readdy.ai/api/search-image?query=Bright%20sports%20photograph%20of%20a%20baseball%20pitcher%20mid%20wind-up%20on%20a%20sunlit%20mound%2C%20clean%20white%20and%20red%20uniform%2C%20crisp%20shadow%20across%20the%20dirt%2C%20clear%20sky%2C%20editorial%20sports%20photography%2C%20shallow%20depth%20of%20field%2C%20natural%20colours%2C%20no%20text&width=800&height=1000&seq=medvednica-gallery-pitcher-day-31&orientation=portrait",
  },
  {
    id: "g2",
    alt: "Infielders turning a double play",
    image:
      "https://readdy.ai/api/search-image?query=Action%20sports%20photograph%20of%20two%20baseball%20infielders%20turning%20a%20double%20play%2C%20dust%20kicking%20up%20from%20sunlit%20dirt%2C%20clean%20white%20and%20red%20uniforms%2C%20bright%20afternoon%20light%2C%20shallow%20depth%20of%20field%2C%20editorial%20sports%20photography%2C%20natural%20colours%2C%20no%20text&width=800&height=600&seq=medvednica-gallery-doubleplay-day-32&orientation=landscape",
  },
  {
    id: "g3",
    alt: "Team huddle before the first pitch",
    image:
      "https://readdy.ai/api/search-image?query=Documentary%20photograph%20of%20a%20baseball%20team%20huddle%20with%20arms%20around%20each%20other%20before%20the%20first%20pitch%2C%20clean%20white%20and%20red%20uniforms%2C%20bright%20soft%20overcast%20light%2C%20natural%20colours%2C%20editorial%20sports%20photography%2C%20high%20detail%2C%20no%20text&width=800&height=600&seq=medvednica-gallery-huddle-day-33&orientation=landscape",
  },
  {
    id: "g4",
    alt: "Home plate celebration",
    image:
      "https://readdy.ai/api/search-image?query=Documentary%20sports%20photograph%20of%20baseball%20players%20celebrating%20at%20home%20plate%20with%20raised%20arms%2C%20red%20helmets%2C%20sunlit%20dirt%20and%20light%20dust%2C%20bright%20evening%20light%2C%20shallow%20depth%20of%20field%2C%20editorial%20sports%20photography%2C%20natural%20colours%2C%20no%20text&width=800&height=1000&seq=medvednica-gallery-celebration-day-34&orientation=portrait",
  },
  {
    id: "g5",
    alt: "Empty field at sunrise",
    image:
      "https://readdy.ai/api/search-image?query=Quiet%20photograph%20of%20an%20empty%20baseball%20field%20at%20sunrise%20with%20mist%20over%20the%20grass%20and%20a%20wooden%20dugout%2C%20muted%20warm%20tones%2C%20wide%20composition%2C%20film%20grain%2C%20editorial%20sports%20photography&width=800&height=600&seq=medvednica-gallery-field-05&orientation=landscape",
  },
];