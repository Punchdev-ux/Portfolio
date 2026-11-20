export type ExperienceItem = {
  company: string;
  role: string;
  periodShort: string;
  periodLong: string;
  locationShort: string;
  locationLong: string;
  working?: boolean;
  details?: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Caledon Code",
    role: "Part-time Web Developer",
    periodShort: "Oct 25 – Nov 25",
    periodLong: "October 2025 – November 2025",
    locationShort: "Remote, PTA",
    locationLong: "Remote, Pretoria ",
    details: [
      "Refactored frontend components using React (Vite) and Tailwind CSS, accelerating page load speeds by 25% across 15+ pixel perfect, Figma-compliant UI components.",
      "Delivered a fully functional web prototype meeting 100% of client specifications within a 14-day rapid-delivery sprint, under real world client delivery pressure",
    ],
    tech: ["React", "Vite", "Tailwind CSS"],
  },
];
