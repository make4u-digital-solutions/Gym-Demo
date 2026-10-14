export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "facility" | "training" | "recovery" | "athletes";
  caption: string;
  span?: "wide" | "tall" | "normal";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Ho78ZzOaSsZ_s1qVN18v4ykoh3m7tp1sxQeK0yBqApNVQy9_3RZoWfukkyalDASMmekiQS6C2Y1kTOm0kQO4Wk8OoJ0cDsDQN1L-JytaJEPv93Bs2WFIv1wFo6gJMUvJOfHJRUw7Xlxqg1CBg71Oaj1GNkL8nsthvtlKn1dSGs_OpMnGtoTfVUmVMIfxJEnJUa9bDdfOYyhjTRbH8KOMV87BgFENBJ6GS7OM3SzN0E_tD9pdhKDh-w",
    alt: "Row of heavy black calibrated iron dumbbells in a gym rack with moody red LED illumination",
    category: "facility",
    caption: "Dumbbell Command Centre",
    span: "normal",
  },
  {
    id: "g2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd2XD2Z9QRAJ1V0ZsV7ZxqP5gOHEpEpARC93dONDw4cj4Jt0pFvASKmA3QiIcMEu60bMT4axGBe1DlFPoHoH-IRAt7Dg3ERJdA8UEa-DyOSND-cvO9aWkXy45pHAKO6ki_WP7yLR-lTYYrPrLX6hukqyyeL47AwBaGOyH9dK_Dj_H3RlhOjBen3yuAK5NpffTx96pU1-k3WJffyFQ2GGukWFpz4g3UV8ON_N8bo-mSminElp190yI_Gw",
    alt: "Custom power squat cages under overhead spotlights in dark industrial gym",
    category: "facility",
    caption: "Power Squat Platforms",
    span: "tall",
  },
  {
    id: "g3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJR7xXmcb-9fLCwHDgwibUCBlalkGe98JLXnaM0Wpv6tpwpfQeg9hcmJSYmDCYOJluPlqYEdWjMxKb7vwT1fhuw0YKtRy4hSkeOxP-hLkoH31bVkosiUHhNRNuS5JLfydgefZCPyJyaOhByVlOuv7eHdYvsutLf23JIhjvwASuI2uvHJksYn13en4wD0iicUqGpk68cs3zkm9DqQFln5y84tRJDvcG3D71tlCCUx6iTZH3bcf-sdN9UA",
    alt: "Cold plunge stainless steel ice tub with steam in luxury gym recovery setting",
    category: "recovery",
    caption: "4°C Cold Plunge Tanks",
    span: "normal",
  },
  {
    id: "g4",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuABbbQIsYc9_XUAKQyGT6yLwWvJH5rOZc8fcCJDoMhoz0d-sRZqTwrBJ1XaQoE8Y1t9xE1pELFnuthrLer-AhYItfjtV04fCvOAlssGRJEY5tiM7GKQkFRNBzKNLUej0hjPzLvmBhZ78iszpDw3SWpQjLcfi2iYRUZiGG7VMHDAL60AxljPVS1lGuDXeA0oOaa5BSCMKPbDGhcUYFTXIUjfwXKBBZAySrquWxLPS6Q-xOcDWyixiNF2Aw",
    alt: "Private cedar infrared dry sauna room with glowing warm red coals",
    category: "recovery",
    caption: "Infrared Cedar Saunas",
    span: "wide",
  },
  {
    id: "g5",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXAWDbqlyz6cMz1WGfMZocKiiSzcGwXaul09suNMsK5r18h7Eu_pivU5ocA1a_FOuOr47eEDqkBrO1RvAG0QWS4Bw08HJsVgrZB32DOnLSN51uwqOOLZxsiWkBG3FEq3dX50mbOuojukrYg9arymGCNV8NBBF-tk27jaN3-Q0RRC9bOrtBtHfY029YPsNd5KKp5TUPa3OvHLmNzmK6wL1E4gbmvhIlI2j360EOCmAsWRdcDWHQFcQAkQ",
    alt: "Bodybuilder performing heavy incline dumbbell chest press under warm spotlights",
    category: "training",
    caption: "Heavy Hypertrophy Session",
    span: "normal",
  },
  {
    id: "g6",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXeD3DVtrbcxpflLdBFor0gK9GuiziXh7OGr53s5H5pgZ--8-p363RS2rEnNrcB1TVzMR0JZ4VfbBBildt6VJaITZWz2iJ6BBo1EYaIF_SDwS3T7ydH--ujN2VSn67e8ScPqlWtBsDmHM3tH0oSOxyyef759XY2HjPalXHaYg_RsciI2hEXd0uZ35VGG5t4oohaOQ2sxBk3G2QxlnDAaTqpMMb_6IIuNRif549-sDu3mxcdI-Tk-cFwA",
    alt: "Powerlifter gripping heavy barbell on wooden deadlift platform with chalk flying",
    category: "training",
    caption: "Tactical Powerlifting",
    span: "tall",
  },
  {
    id: "g7",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX4g9aRE8S2IQ5zNB6qI6VCGtFTipvDI_kJs1uLugafHBGc4R-oyaWVrATczARcoLyVyIeRF8_Fm0yqzqS0AL5qybFdj2yRUsp89WBZ6UsczwbRIOtldOC5sDjccQSvw7M6gGGUrXU9ttVmmeV--jMG0KpVl-3C11aFCQPzuUadvywpvO3iF9J77JnVkgpuub1xxkCvyvnNobeivUTHTjEbYaUbNJc4e2ABtoNtW9cFX_TV4In94PfDA",
    alt: "Athlete executing high intensity heavy sled push in dark gym",
    category: "training",
    caption: "Metabolic Warfare Protocol",
    span: "wide",
  },
  {
    id: "g8",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-_t1LYkUbSRzmPuf6agQtSjJIKyT8MHEdJ1BI7issL0mUG82V3UVMAapvXpCNo5Rrh8PwqUZKorRNSyjsF2f70_Zu764QXcr_XQte_UV8eoznDm3fXL8ygyqttijSA0bti8jRwLmNnEKubcVtDOiFJiti_Wlls0Ceak_eylih-mfDoOBqgLYyBpD0VLwqVK0xqP456E455tMME6zFLRzTv_Z6C3eFtRn9wWtVyKT-ANl3X1G3pn2NVw",
    alt: "Head coach supervising athlete during 1-on-1 training session",
    category: "training",
    caption: "1-on-1 Cadre Coaching",
    span: "normal",
  },
  {
    id: "g9",
    src: "/images/hero-clean-hd.jpg",
    alt: "Three elite muscular bodybuilders training with red rim lighting and heavy iron",
    category: "athletes",
    caption: "The Corps Elite",
    span: "wide",
  },
];

export const galleryCategories = ["all", "facility", "training", "recovery", "athletes"] as const;
export type GalleryCategory = typeof galleryCategories[number];
