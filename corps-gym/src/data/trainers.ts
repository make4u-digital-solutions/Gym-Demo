export interface Trainer {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  bio: string;
  extendedBio: string;
  image: string;
  imageAlt: string;
  certifications: string[];
  accentColor: "red" | "orange";
  slug: string;
}

export const trainers: Trainer[] = [
  {
    id: "marcus-vance",
    name: "MARCUS VANCE",
    title: "Head Strength • Ex-SpecOps PT",
    specialization: "Absolute Strength & Compound Mechanics",
    experience: "12 YRS COACHING",
    bio: "Specializes in absolute strength development and heavy compound mechanics.",
    extendedBio:
      "Marcus Vance brings 12 years of elite coaching experience forged in military special operations physical training and competitive powerlifting. A former SpecOps PT instructor with national-level powerlifting credentials, Marcus applies military precision and progressive overload science to every athlete he coaches. His athletes consistently break personal records in squat, bench, and deadlift within their first 90-day block.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhhaZ-usftM5a6uWGhFMBYs3sSmf4EZcqWIj1kiP4mPKo59R5-RGJhUOwzgHZ6QGFqzQw-Zb_2S_2ktZUyvxsaIFY4Dfd2Ggg2_YjyiyusPVhbRJW6-1dkF9S7sSxOw8st81QTTPtvwHZS7BdGVBYYCVo4wfOM-tJvYj_CNBMPpobUBchNYbf4zxFTut1oQlWNmw0JgsKQEKUeZ2QoxM_iF4RTcAk0Qp1kUa9JvaUZ-tsam3RivEwNCQ",
    imageAlt: "Marcus Vance head strength coach under red lighting",
    certifications: [
      "NSCA Certified Strength & Conditioning Specialist (CSCS)",
      "USA Powerlifting Level 2 Coach",
      "Military PT Instructor — Former SpecOps",
      "FMS Level 2 Functional Movement Specialist",
    ],
    accentColor: "red",
    slug: "marcus-vance",
  },
  {
    id: "elena-rostova",
    name: "ELENA ROSTOVA",
    title: "Biomechanics & Hypertrophy",
    specialization: "Muscular Hypertrophy & Injury Mitigation",
    experience: "9 YRS COACHING",
    bio: "Expert in muscular hypertrophy, lever analysis, and injury mitigation.",
    extendedBio:
      "Elena Rostova is CORPS' lead biomechanics and hypertrophy specialist with a master's degree in Sports Science and 9 years of applied coaching. Her lever-analysis approach identifies each athlete's unique mechanical advantages and builds individualized volume blueprints that maximize hypertrophic response while protecting joints. She has helped over 300 athletes break training plateaus and recover from chronic lifting injuries.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpjElrzZpWGuBzH4BcySfyyT4ixOSLnXv0UyFlcfIOVL-Qg53YRdcTfwQ7E80r-S_VaLjs1WxANglw0adN-BjVOj_32MY5gbMmnYoP3a-i74rTk5hNfGjk0ADECyEQwQt6xRY5_dwK1A_WY4Cdx-gCIuTAoNDcYE8rfOnxeODfA3QVZlPEhP-mwkfZwLqtYlruOY3oE45hAYSt6vsEKmr6Z06OnvqGNTMMeVN1Ixj5Zp4ScgckMlWs_Q",
    imageAlt: "Elena Rostova biomechanics coach in red-lit gym",
    certifications: [
      "M.Sc. Sports Science — Biomechanics Specialization",
      "NASM Certified Personal Trainer (CPT)",
      "Precision Nutrition Level 2 Coach",
      "Functional Hypertrophy Coach — Renaissance Periodization",
    ],
    accentColor: "orange",
    slug: "elena-rostova",
  },
  {
    id: "david-chen",
    name: "DAVID CHEN",
    title: "Olympic Lifting Lead",
    specialization: "Explosive Triple Extension & Bar Trajectory",
    experience: "14 YRS COACHING",
    bio: "National powerlifter focused on explosive triple extension and bar trajectory.",
    extendedBio:
      "David Chen is a nationally ranked Olympic weightlifter and 14-year coaching veteran specializing in the snatch and clean & jerk. Trained under two national head coaches, David has guided more than 50 athletes to competition podiums at state and national levels. His technical eye for bar trajectory, catch positions, and triple extension mechanics is unmatched in the facility.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmHDzxJX-YA-EO5x0P5h-EcaiEi9WuDbwV8J45Iw1j6MRzBXe_o0h_m9JiORjFvnVMVamrZnPjUAgzmFfZiinFyRwJWODy_WTFC4Xn0GUe-ig-Xrhov9hiI6LfMO6Z22H_Z8J34FaK8bp-o1T6_V4xvI4JM1Xr1r4liKuvTylQxOcDTExl6HbUYcTSVG3AfDJPwUEiH7NfQvosKXtun5gl-LAhG0jHaIiLGQKMwkM-qAQlFZNzzjJJkg",
    imageAlt: "David Chen Olympic lifting coach chalking hands before platform",
    certifications: [
      "USA Weightlifting Level 2 National Coach",
      "NSCA CSCS — Olympic Movements Specialization",
      "National Podium Competitor — Snatch & Clean & Jerk",
      "EXOS Phase 4 Performance Specialist",
    ],
    accentColor: "red",
    slug: "david-chen",
  },
  {
    id: "sarah-jenkins",
    name: "SARAH JENKINS",
    title: "Metabolic Performance",
    specialization: "High-Density Conditioning & Active Recovery",
    experience: "8 YRS COACHING",
    bio: "Directs high-density interval warfare, metabolic output, and active recovery.",
    extendedBio:
      "Sarah Jenkins is CORPS' metabolic conditioning director with 8 years of coaching athletes across functional fitness, military fitness assessments, and elite body composition competitions. Her conditioning methodology fuses lactate threshold work, EPOC optimization, and active recovery protocols that keep athletes performing at their peak 5–6 days per week without accumulating systemic fatigue.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxjuzorIQ65dMIkJIcemE1yDjYML4genjqzm36knzSKqIOFqaT2yhLwDKiYFTpagpaK-ixnrGHqUBt-SciSBRIilFyuQYucIwNR_juPeQ1Kf2M-GzarMJ40JHOJGeVWOT2P75TYmSlQmaqNUr945jJ5fxVe11KEhXhQiUoMSv74S_J8cOdeGnFMoNTPZSrDgb51AkyO3O821yFelZd_Oftg2qvLbseMTUyoVwdKYO8KG5YaYC1v8AO7w",
    imageAlt: "Sarah Jenkins conditioning coach resting on kettlebell in dark red studio",
    certifications: [
      "NASM Performance Enhancement Specialist (PES)",
      "CrossFit Level 2 Trainer (CF-L2)",
      "USA Weightlifting Sport Performance Coach",
      "Precision Nutrition PN1 Certified Coach",
    ],
    accentColor: "orange",
    slug: "sarah-jenkins",
  },
];
