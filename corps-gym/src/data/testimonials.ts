export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  division: string;
  duration: string;
  quote: string;
  highlight: string;
  initials: string;
  stats?: { label: string; value: string }[];
}

export const testimonials: Testimonial[] = [
  {
    id: "lucas-h",
    name: "Lucas H.",
    handle: "lucash_corps",
    division: "Heavy Division",
    duration: "18 Months In",
    quote: "I came here strictly to build muscle, but I ended up forging mental toughness that changed every single hour of my life.",
    highlight: "forging mental toughness",
    initials: "LH",
    stats: [
      { label: "Lean Tissue", value: "+12 KG" },
      { label: "Bench Press", value: "+55 KG" },
    ],
  },
  {
    id: "priya-m",
    name: "Priya M.",
    handle: "priyam_lifts",
    division: "Powerlifting Track",
    duration: "10 Months In",
    quote: "Every other gym I visited treated me like a number. CORPS treated me like a threat to be built. I hit my first 100kg squat in month four.",
    highlight: "threat to be built",
    initials: "PM",
    stats: [
      { label: "Squat PR", value: "100 KG" },
      { label: "Body Fat", value: "-9.1%" },
    ],
  },
  {
    id: "rajiv-s",
    name: "Rajiv S.",
    handle: "rajivs_iron",
    division: "Metabolic Warfare",
    duration: "6 Months In",
    quote: "I dropped 14 kilos of fat while gaining 6 kilos of muscle in six months. No other program had ever produced that kind of recomp for me.",
    highlight: "14 kilos of fat while gaining 6 kilos of muscle",
    initials: "RS",
    stats: [
      { label: "Fat Lost", value: "-14 KG" },
      { label: "Muscle Gained", value: "+6 KG" },
    ],
  },
  {
    id: "arjun-k",
    name: "Arjun K.",
    handle: "arjunk_corps",
    division: "Elite 1-on-1 Coaching",
    duration: "2 Years In",
    quote: "Coach Marcus doesn't let you make excuses. Period. I walked in weak and walked out with a 220kg deadlift total. That's the CORPS standard.",
    highlight: "220kg deadlift",
    initials: "AK",
    stats: [
      { label: "Deadlift", value: "220 KG" },
      { label: "Time", value: "2 YEARS" },
    ],
  },
];
