export interface Program {
  id: string;
  track: string;
  badge: string;
  title: string;
  subtitle: string;
  frequency: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  features: string[];
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  color: "red" | "orange";
  slug: string;
}

export const programs: Program[] = [
  {
    id: "heavy-hypertrophy",
    track: "TRACK 01",
    badge: "TRACK 01",
    title: "HEAVY HYPERTROPHY",
    subtitle: "Maximum Muscular Volume",
    frequency: "5 DAYS / WK • 75 MIN",
    description:
      "Mechanical tension optimization, eccentric overload control, and calibrated volume splits for maximum muscle cross-sectional area.",
    longDescription:
      "The Heavy Hypertrophy protocol is engineered for athletes committed to building significant lean tissue. We apply progressive overload algorithms, deliberate micro-tearing protocols, and periodized intensity cycles across a 12-week macro block. Every session is structured around compound movement priming followed by isolation-driven finishers targeting lagging muscle groups.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXAWDbqlyz6cMz1WGfMZocKiiSzcGwXaul09suNMsK5r18h7Eu_pivU5ocA1a_FOuOr47eEDqkBrO1RvAG0QWS4Bw08HJsVgrZB32DOnLSN51uwqOOLZxsiWkBG3FEq3dX50mbOuojukrYg9arymGCNV8NBBF-tk27jaN3-Q0RRC9bOrtBtHfY029YPsNd5KKp5TUPa3OvHLmNzmK6wL1E4gbmvhIlI2j360EOCmAsWRdcDWHQFcQAkQ",
    imageAlt: "Bodybuilder performing heavy incline dumbbell chest press",
    features: [
      "Periodized hypertrophy programming across 12-week macro blocks",
      "Mechanical tension + metabolic stress dual-pathway protocols",
      "Weekly progressive overload targets with biofeedback adjustments",
      "Dedicated arm, back, legs, chest, and shoulder specialization days",
      "CORPS Performance App tracking with session analytics",
    ],
    level: "Intermediate",
    color: "red",
    slug: "heavy-hypertrophy",
  },
  {
    id: "tactical-powerlifting",
    track: "TRACK 02",
    badge: "TRACK 02",
    title: "TACTICAL POWERLIFTING",
    subtitle: "Raw Strength Domination",
    frequency: "4 DAYS / WK • 90 MIN",
    description:
      "Raw concentric force generation targeting the Big Three: Squat, Bench, and Deadlift. Master rate of force development and CNS adaptation.",
    longDescription:
      "Tactical Powerlifting centers on absolute strength expression through the squat, bench press, and deadlift. Our coaches apply velocity-based training technology, conjugate periodization, and competition-style intensity cycles. CNS recovery windows are carefully managed to prevent overtraining while maximizing peak force output.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBXeD3DVtrbcxpflLdBFor0gK9GuiziXh7OGr53s5H5pgZ--8-p363RS2rEnNrcB1TVzMR0JZ4VfbBBildt6VJaITZWz2iJ6BBo1EYaIF_SDwS3T7ydH--ujN2VSn67e8ScPqlWtBsDmHM3tH0oSOxyyef759XY2HjPalXHaYg_RsciI2hEXd0uZ35VGG5t4oohaOQ2sxBk3G2QxlnDAaTqpMMb_6IIuNRif549-sDu3mxcdI-Tk-cFwA",
    imageAlt: "Powerlifter gripping heavy barbell for deadlift lockout",
    features: [
      "Conjugate & linear periodization for peak strength expression",
      "Velocity-based training with bar speed feedback",
      "Big Three technique coaching from certified strength coaches",
      "Competition prep cycles for raw & equipped powerlifting",
      "CNS recovery monitoring and deload week scheduling",
    ],
    level: "Intermediate",
    color: "orange",
    slug: "tactical-powerlifting",
  },
  {
    id: "metabolic-warfare",
    track: "TRACK 03",
    badge: "TRACK 03",
    title: "METABOLIC WARFARE",
    subtitle: "Peak Conditioning Output",
    frequency: "5 DAYS / WK • 45 MIN",
    description:
      "High-density lactate threshold intervals, heavy sled pushing, skiergs, and kettlebell ballistic complexes to maximize VO2 and leanness.",
    longDescription:
      "Metabolic Warfare is not cardio. It is a structured assault on your aerobic and anaerobic energy systems using heavy sleds, battle ropes, assault bikes, and timed barbell complexes. Designed to strip body fat while preserving hard-earned muscle, this protocol elevates EPOC and metabolic rate for 24–48 hours post-session.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCX4g9aRE8S2IQ5zNB6qI6VCGtFTipvDI_kJs1uLugafHBGc4R-oyaWVrATczARcoLyVyIeRF8_Fm0yqzqS0AL5qybFdj2yRUsp89WBZ6UsczwbRIOtldOC5sDjccQSvw7M6gGGUrXU9ttVmmeV--jMG0KpVl-3C11aFCQPzuUadvywpvO3iF9J77JnVkgpuub1xxkCvyvnNobeivUTHTjEbYaUbNJc4e2ABtoNtW9cFX_TV4In94PfDA",
    imageAlt: "Athlete executing high-intensity heavy sled push under red lighting",
    features: [
      "Lactate threshold & VO2 max conditioning protocols",
      "Sled pushes, battle ropes, skierg, and assault bike circuits",
      "EPOC-driven sessions for 24–48hr elevated metabolic rate",
      "Tabata, EMOM, and AMRAP structured conditioning blocks",
      "Heart rate zone monitoring for precision intensity control",
    ],
    level: "All Levels",
    color: "red",
    slug: "metabolic-warfare",
  },
  {
    id: "elite-coaching",
    track: "TRACK 04",
    badge: "ELITE CADRE",
    title: "1-ON-1 CADRE COACHING",
    subtitle: "Bespoke Elite Programming",
    frequency: "CUSTOM FREQUENCY",
    description:
      "Bespoke periodization, continuous video kinematic review, personalized micronutrient scheduling, and direct 24/7 accountability.",
    longDescription:
      "The 1-on-1 Cadre Coaching program pairs you with a dedicated CORPS master coach for a fully personalized athletic development system. From bespoke periodization blocks to weekly video form analysis, hormonal timing nutrition protocols, and direct coach communication — this is the highest-tier athletic support available at CORPS.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-_t1LYkUbSRzmPuf6agQtSjJIKyT8MHEdJ1BI7issL0mUG82V3UVMAapvXpCNo5Rrh8PwqUZKorRNSyjsF2f70_Zu764QXcr_XQte_UV8eoznDm3fXL8ygyqttijSA0bti8jRwLmNnEKubcVtDOiFJiti_Wlls0Ceak_eylih-mfDoOBqgLYyBpD0VLwqVK0xqP456E455tMME6zFLRzTv_Z6C3eFtRn9wWtVyKT-ANl3X1G3pn2NVw",
    imageAlt: "Head coach supervising athlete on lifting platform",
    features: [
      "Bespoke periodized programming rebuilt every 4 weeks",
      "Weekly video kinematic analysis and technique correction",
      "Custom macronutrient and supplement protocol",
      "24/7 direct coach message access for real-time accountability",
      "Monthly biometric InBody composition assessment",
    ],
    level: "All Levels",
    color: "orange",
    slug: "elite-coaching",
  },
];
