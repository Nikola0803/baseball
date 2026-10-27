export type MerchCategory =
  | "Apparel"
  | "Headwear"
  | "Equipment"
  | "Balls"
  | "Accessories";

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  category: MerchCategory;
  image: string;
  description: string;
  sizes?: string[];
  featured?: boolean;
  tag?: string;
}

export const merchCategories: MerchCategory[] = [
  "Apparel",
  "Headwear",
  "Equipment",
  "Balls",
  "Accessories",
];

export const merchItems: MerchItem[] = [
  {
    id: "t-shirt",
    name: "T-Shirt (Black / White)",
    price: 20,
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    tag: "Best seller",
    description:
      "Comfortable everyday tee available in black or white, with the Medvednica bear crest printed on the chest and the club wordmark on the back.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20two%20short%20sleeve%20cotton%20t-shirts%20side%20by%20side%2C%20one%20black%20and%20one%20white%2C%20each%20with%20a%20small%20white%20line%20art%20roaring%20bear%20head%20club%20crest%20printed%20on%20the%20chest%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20subtle%20contact%20shadow%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-tee-01&orientation=squarish",
  },
  {
    id: "jersey-top",
    name: "Baseball Jersey Top",
    price: 35,
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    tag: "New season",
    description:
      "Athletic jersey top inspired by classic baseball uniforms, with white piping down the front and the bear crest on the chest. Designed for fans and players.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20black%20button%20front%20baseball%20jersey%20with%20white%20piping%20along%20the%20placket%20and%20a%20white%20line%20art%20roaring%20bear%20head%20crest%20on%20the%20chest%2C%20front%20view%20on%20an%20invisible%20mannequin%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-jersey-02&orientation=squarish",
  },
  {
    id: "hoodie",
    name: "Hoodie",
    price: 40,
    category: "Apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
    description:
      "Warm fleece hoodie in solid black with the bear crest built large across the chest. For cold dugouts, travelling to games and everyday wear.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20solid%20black%20heavy%20fleece%20pullover%20hoodie%20with%20a%20large%20white%20line%20art%20roaring%20bear%20head%20crest%20printed%20across%20the%20chest%20and%20white%20drawstrings%2C%20front%20view%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20subtle%20shadow%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-hoodie-03&orientation=squarish",
  },
  {
    id: "baseball-cap",
    name: "Baseball Cap",
    price: 15,
    category: "Headwear",
    sizes: ["One size"],
    featured: true,
    tag: "Fan favourite",
    description:
      "Stylish and comfortable black cap with white Medvednica bear crest embroidery. Perfect for sunny game days and everyday wear.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20black%20structured%20six%20panel%20baseball%20cap%20with%20a%20white%20embroidered%20line%20art%20roaring%20bear%20head%20crest%20on%20the%20front%2C%20three%20quarter%20view%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20subtle%20contact%20shadow%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-cap-04&orientation=squarish",
  },
  {
    id: "beanie",
    name: "Beanie",
    price: 15,
    category: "Headwear",
    sizes: ["One size"],
    description:
      "A warm black knit beanie with the Medvednica bear logo on the cuff. Made for colder game days and everyday winter wear.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20black%20ribbed%20knit%20cuff%20beanie%20with%20a%20white%20line%20art%20roaring%20bear%20head%20patch%20stitched%20on%20the%20front%20of%20the%20cuff%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20subtle%20contact%20shadow%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-beanie-05&orientation=squarish",
  },
  {
    id: "sports-visor",
    name: "Sports Visor",
    price: 10,
    category: "Headwear",
    sizes: ["One size"],
    description:
      "Lightweight black visor that keeps the sun out of your eyes while showing support for Medvednica. A summer tournament staple.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20black%20open%20top%20performance%20sports%20visor%20with%20a%20white%20line%20art%20roaring%20bear%20head%20crest%20embroidered%20on%20the%20front%20panel%2C%20three%20quarter%20view%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-visor-06&orientation=squarish",
  },
  {
    id: "baseball-bat",
    name: "Baseball Bat",
    price: 35,
    category: "Equipment",
    featured: true,
    description:
      "Classic wooden baseball bat for training, collecting or displaying, with a small Medvednica bear engraving on the barrel. A must for every dedicated fan.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20natural%20light%20wood%20baseball%20bat%20standing%20diagonally%20with%20a%20small%20dark%20bear%20head%20engraving%20on%20the%20barrel%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20directional%20studio%20lighting%2C%20long%20soft%20shadow%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-bat-07&orientation=squarish",
  },
  {
    id: "batting-gloves",
    name: "Batting Gloves",
    price: 25,
    category: "Equipment",
    sizes: ["S", "M", "L", "XL"],
    tag: "Limited",
    description:
      "Comfortable batting gloves with black and white detailing, combining grip, protection and club style in the batter's box.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20pair%20of%20black%20and%20white%20leather%20palm%20baseball%20batting%20gloves%20laid%20flat%20slightly%20overlapping%2C%20white%20panel%20across%20the%20back%20of%20the%20hand%20and%20a%20small%20bear%20crest%20on%20the%20wrist%20strap%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-gloves-08&orientation=squarish",
  },
  {
    id: "baseball",
    name: "Baseball",
    price: 4,
    category: "Balls",
    description:
      "A classic leather baseball with Medvednica branding. A great collector piece for players, supporters and baseball enthusiasts.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20single%20white%20leather%20baseball%20with%20raised%20red%20stitching%20and%20a%20small%20printed%20black%20bear%20head%20club%20stamp%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20subtle%20contact%20shadow%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-baseball-09&orientation=squarish",
  },
  {
    id: "softball",
    name: "Softball",
    price: 5,
    category: "Balls",
    description:
      "A durable optic yellow softball with Medvednica branding — perfect for practice, games, or as a souvenir for every fan.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20single%20optic%20yellow%20softball%20with%20raised%20red%20seams%20and%20a%20small%20printed%20black%20bear%20head%20club%20stamp%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20subtle%20contact%20shadow%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-softball-10&orientation=squarish",
  },
  {
    id: "backpack",
    name: "Backpack",
    price: 40,
    category: "Accessories",
    featured: true,
    description:
      "Spacious and durable black backpack for training, school or everyday use, with several compartments and the Medvednica bear logo.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20black%20padded%20multi%20compartment%20backpack%20standing%20upright%20three%20quarter%20view%20with%20a%20white%20embroidered%20line%20art%20bear%20head%20crest%20on%20the%20front%20pocket%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20subtle%20contact%20shadow%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-backpack-11&orientation=squarish",
  },
  {
    id: "drawstring-bag",
    name: "Drawstring Bag",
    price: 12,
    category: "Accessories",
    description:
      "Lightweight black sports bag for carrying training gear, shoes and everyday essentials, printed with the Medvednica bear.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20black%20lightweight%20drawstring%20gym%20sack%20with%20white%20cords%20and%20a%20large%20white%20line%20art%20roaring%20bear%20head%20crest%20printed%20on%20the%20front%2C%20slightly%20stuffed%20upright%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-drawstring-12&orientation=squarish",
  },
  {
    id: "tote-bag",
    name: "Tote Bag",
    price: 10,
    category: "Accessories",
    description:
      "Reusable black everyday bag featuring the Medvednica club logo. Perfect for fans who want to represent the team off the field.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20black%20canvas%20tote%20bag%20with%20sturdy%20handles%20and%20a%20large%20white%20line%20art%20roaring%20bear%20head%20printed%20on%20the%20front%2C%20upright%20front%20view%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20subtle%20contact%20shadow%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-tote-13&orientation=squarish",
  },
  {
    id: "water-bottle",
    name: "Water Bottle",
    price: 18,
    category: "Accessories",
    featured: true,
    description:
      "Reusable matte black bottle with the Medvednica logo, ideal for practices, games and outdoor adventures.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20matte%20black%20insulated%20steel%20sports%20water%20bottle%20standing%20upright%20with%20a%20white%20line%20art%20bear%20head%20crest%20printed%20on%20the%20body%20and%20a%20black%20screw%20lid%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20long%20soft%20shadow%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-bottle-14&orientation=squarish",
  },
  {
    id: "coffee-mug",
    name: "Coffee Mug",
    price: 12,
    category: "Accessories",
    description:
      "A black ceramic mug with the Medvednica bear logo, perfect for players and fans at home or at work.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20glossy%20black%20ceramic%20coffee%20mug%20with%20a%20white%20line%20art%20roaring%20bear%20head%20printed%20on%20the%20side%2C%20handle%20turned%20to%20the%20right%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20subtle%20shadow%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-mug-15&orientation=squarish",
  },
  {
    id: "keychain",
    name: "Keychain",
    price: 4,
    category: "Accessories",
    description:
      "A compact Medvednica themed keychain in the shape of a miniature bat — the perfect little souvenir for fans to carry everywhere.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20miniature%20wooden%20baseball%20bat%20keychain%20with%20a%20silver%20metal%20ring%20and%20a%20small%20engraved%20bear%20head%2C%20laid%20diagonally%20on%20a%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20macro%20detail%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-keychain-16&orientation=squarish",
  },
  {
    id: "wristband",
    name: "Wristband",
    price: 3,
    category: "Accessories",
    description:
      "A simple, sporty black wristband featuring Medvednica branding. A small accessory that shows big team spirit.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20a%20single%20black%20terry%20cotton%20sports%20wristband%20lying%20as%20a%20soft%20ring%20with%20a%20small%20white%20bear%20head%20crest%20printed%20on%20it%2C%20plain%20light%20grey%20seamless%20backdrop%2C%20even%20studio%20lighting%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-wristband-17&orientation=squarish",
  },
  {
    id: "sticker-pack",
    name: "Sticker Pack",
    price: 5,
    category: "Accessories",
    description:
      "A collection of Medvednica bear, mountain and baseball themed stickers for laptops, water bottles and gear cases.",
    image:
      "https://readdy.ai/api/search-image?query=Studio%20product%20photo%20of%20die%20cut%20vinyl%20club%20stickers%20scattered%20flat%2C%20a%20white%20line%20art%20bear%20head%2C%20a%20mountain%20range%20outline%2C%20a%20baseball%20with%20crossed%20bats%20and%20a%20bold%20wordmark%20badge%2C%20black%20and%20white%20stickers%20on%20a%20plain%20light%20grey%20seamless%20backdrop%2C%20soft%20even%20studio%20lighting%2C%20crisp%20high%20detail%2C%20minimal%20black%20and%20white%20club%20merchandise%20e-commerce%20photography&width=800&height=800&seq=medvednica-real-stickers-18&orientation=squarish",
  },
];

export const featuredMerch = merchItems.filter((item) => item.featured);