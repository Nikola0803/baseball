export interface Fixture {
  id: string;
  date: string;
  day: string;
  month: string;
  opponent: string;
  competition: string;
  venue: string;
  location: "home" | "away";
  time: string;
  status: "final" | "upcoming";
  result?: string;
}

export const fixtures: Fixture[] = [
  {
    id: "f1",
    date: "2026-04-11",
    day: "11",
    month: "APR",
    opponent: "Zagreb Giants",
    competition: "National League · Round 1",
    venue: "Medvednica Field",
    location: "home",
    time: "14:00",
    status: "final",
    result: "W 7 – 3",
  },
  {
    id: "f2",
    date: "2026-04-18",
    day: "18",
    month: "APR",
    opponent: "SPAN",
    competition: "National League · Round 2",
    venue: "Poljud Grounds",
    location: "away",
    time: "16:30",
    status: "final",
    result: "L 4 – 6",
  },
  {
    id: "f3",
    date: "2026-05-02",
    day: "02",
    month: "MAY",
    opponent: "Špansko Panthers",
    competition: "National League · Round 3",
    venue: "Medvednica Field",
    location: "home",
    time: "13:00",
    status: "final",
    result: "W 11 – 5",
  },
  {
    id: "f4",
    date: "2026-09-12",
    day: "12",
    month: "SEP",
    opponent: "Zagreb Giants",
    competition: "Cup Semi-final",
    venue: "Medvednica Field",
    location: "home",
    time: "14:00",
    status: "upcoming",
  },
  {
    id: "f5",
    date: "2026-09-26",
    day: "26",
    month: "SEP",
    opponent: "Dubrava Bears",
    competition: "Cup Semi-final · Leg 2",
    venue: "Kantrida Park",
    location: "away",
    time: "12:30",
    status: "upcoming",
  },
  {
    id: "f6",
    date: "2026-10-10",
    day: "10",
    month: "OCT",
    opponent: "SPAN",
    competition: "National League · Final round",
    venue: "Medvednica Field",
    location: "home",
    time: "13:00",
    status: "upcoming",
  },
];
