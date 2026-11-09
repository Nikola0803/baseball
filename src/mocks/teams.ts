export interface Team {
  id: string;
  name: string;
  ageGroup: string;
  coach: string;
  training: string;
  record: string;
  blurb: string;
  image: string;
}

export const teams: Team[] = [
  {
    id: "seniors",
    name: "Medvednica Bears",
    ageGroup: "Senior men",
    coach: "Ivan Kovačević",
    training: "Tue & Thu · 18:30",
    record: "18 – 6",
    blurb:
      "The flagship squad competing in the Croatian national league, three-time regional finalists.",
    image: "/images/team-seniors.jpg",
  },
  {
    id: "softball",
    name: "Medvednica Reds",
    ageGroup: "Women's softball",
    coach: "Petra Novak",
    training: "Mon & Wed · 19:00",
    record: "14 – 8",
    blurb:
      "Fast-pitch softball squad and back-to-back winners of the Zagreb summer series.",
    image: "/images/team-softball.jpg",
  },
  {
    id: "juniors",
    name: "Medvednica Juniors",
    ageGroup: "U18",
    coach: "Marko Babić",
    training: "Wed & Fri · 17:00",
    record: "21 – 5",
    blurb:
      "Our development squad feeding the senior roster, with four players called up this season.",
    image: "/images/team-juniors.jpg",
  },
  {
    id: "little-league",
    name: "Little Bears",
    ageGroup: "U12",
    coach: "Ana Jurić",
    training: "Sat · 10:00",
    record: "12 – 3",
    blurb:
      "Where it all starts — tee-ball, first gloves and a lot of cheering from the stands.",
    image: "/images/team-kids.jpg",
  },
];

export const clubStats = [
  { value: "1994", label: "Founded on Medvednica" },
  { value: "4", label: "Competitive squads" },
  { value: "180+", label: "Active players" },
  { value: "27", label: "Trophies & titles" },
];
