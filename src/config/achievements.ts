export type Achievement = {
  slug: string;
  title: string;
  organization: string;
  year: string;
  periodShort: string;
  periodLong: string;
  details?: string[];
  /** Cover image for cards and detail header */
  image?: string;
  /** Pinterest-style photo gallery on the detail page */
  gallery?: string[];
  tech?: string[];
  featured?: boolean;
};

export const achievements: Achievement[] = [
  {
    slug: "Eduvos-Pretoria, Gauteng",
    title: "BSc. Information Technology (Software Engineering)",
    organization: "Eduvos",
    year: "2023-2026",
    periodShort: "feb 26 - may 26",
    periodLong: "Febuary 23 - May 26",
    details: [
      "Pursued a Bachelor of Science in Information Technology with a specialization in Software Engineering at Eduvos, Pretoria.",
      "The program emphasizes practical skills in software development, covering areas such as programming in Java, data structures and algorithms, mobile app development, and software architecture design. Through a blend of theoretical knowledge and hands-on projects, I am building a strong foundation to contribute effectively to the tech industry.",
    ],
    image: "/assets/achievements/sih-2025/og_eduvos.jpg",
    tech: ["Programming in Java", "Data Structures and Algorithms in Java", "Mobile App Development", "Database Systems", "Web Development & e-Commerce"],
    featured: true,
  },
];

export function getAchievement(slug: string) {
  return achievements.find((item) => item.slug === slug);
}
