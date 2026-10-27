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
    image:
      "https://readdy.ai/api/search-image?query=Documentary%20sports%20photograph%20of%20adult%20baseball%20players%20in%20clean%20white%20and%20red%20uniforms%20standing%20together%20in%20a%20sunlit%20wooden%20dugout%2C%20relaxed%20confident%20poses%2C%20bright%20afternoon%20light%2C%20shallow%20depth%20of%20field%2C%20editorial%20sports%20photography%2C%20natural%20colours%2C%20high%20detail%2C%20no%20text&width=900&height=1100&seq=medvednica-team-seniors-day-11&orientation=portrait",
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
    image:
      "https://readdy.ai/api/search-image?query=Documentary%20sports%20photograph%20of%20a%20women&width=900&height=1100&seq=medvednica-team-softball-day-12&orientation=portrait's softball team celebrating together on a sunlit field in clean white and red uniforms, genuine laughter, bright golden light, shallow depth of field, editorial sports photography, natural colours, high detail, no text",
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
    image:
      "https://readdy.ai/api/search-image?query=Documentary%20sports%20photograph%20of%20teenage%20baseball%20players%20practising%20batting%20drills%20on%20a%20sunlit%20dirt%20field%2C%20clean%20white%20and%20red%20practice%20gear%2C%20light%20dust%20in%20the%20air%2C%20bright%20afternoon%20light%2C%20shallow%20depth%20of%20field%2C%20editorial%20sports%20photography%2C%20natural%20colours%2C%20no%20text&width=900&height=1100&seq=medvednica-team-juniors-day-13&orientation=portrait",
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
    image:
      "https://readdy.ai/api/search-image?query=Documentary%20sports%20photograph%20of%20young%20children%20in%20oversized%20baseball%20gloves%20laughing%20on%20a%20sunlit%20grass%20field%2C%20bright%20cheerful%20daylight%2C%20clean%20white%20and%20red%20uniforms%2C%20shallow%20depth%20of%20field%2C%20editorial%20sports%20photography%2C%20natural%20colours%2C%20high%20detail%2C%20no%20text&width=900&height=1100&seq=medvednica-team-kids-day-14&orientation=portrait",
  },
];

export const clubStats = [
  { value: "1994", label: "Founded on Medvednica" },
  { value: "4", label: "Competitive squads" },
  { value: "180+", label: "Active players" },
  { value: "27", label: "Trophies & titles" },
];