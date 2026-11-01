export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bunyane.example";

export const IMAGES = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  tower: "/images/tower.jpg",
  residence: "/images/residence.jpg",
  facade: "/images/facade.jpg",
  skyline: "/images/skyline.jpg",
  interior: "/images/interior.jpg",
  project1: "/images/project-1.jpg",
  project2: "/images/project-2.png",
  project3: "/images/project-3.jpg",
} as const;

export const SECTION_IDS = {
  home: "home",
  about: "about",
  services: "services",
  how: "how-it-works",
  opportunities: "opportunities",
  projects: "projects",
  faq: "faq",
  cta: "discover",
} as const;
