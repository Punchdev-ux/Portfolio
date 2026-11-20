export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  href: string;
  website?: string;
  featured?: boolean;
  /** Optional cover image for project cards */
  cover?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "Local-RAG-agent",
    title: "Local RAG Agent",
    date: "11.2026",
    description:
      "A locally hosted AI-powered document assistant that uses Retrieval-Augmented Generation (RAG) to search, retrieve, and generate intelligent answers from personal documents while keeping data processing private and local.",
    tech: ["Next.js", "FastAPI", "ChromaDB", "Docker", "Python"],
    href: "https://github.com/Punchdev-ux/Local-RAG-agent",
    website: "",
    featured: true,
    cover: "/assets/projects/Local-RAG-Agent.png",
    gradient: "from-blue-500/25 via-indigo-500/15 to-violet-500/25",
  },
 
  {
    slug: "Banking-app",
    title: "Banking App",
    date: "10.2026",
    description:
      "A full-stack banking management application built with Java, Spring Boot, React and MySQL that provides REST APIs for managing customer accounts, processing financial transactions and maintaining secure banking records.",
    tech: ["Java 17", "Spring Boot3.2.5", "Hibernate 6", "MySQL 8", "React 18", "vite"],
    href: "https://github.com/Punchdev-ux/Banking-app",
    website: "",
    featured: true,
    cover: "/assets/projects/banking-app.png",
    gradient: "from-emerald-500/25 via-green-500/15 to-lime-500/25",
  },
  {
    slug: "Two-Factor-Authentication-App",
    title: "Two-Factor Authentication App",
    date: "10.2025",
    description:
      "A secure Firebase authentication application that adds an extra verification layer to user sign-in with two-factor authentication.",
    tech: ["Firebase", "Java", "Firebase Auth", "Gradle"],
    href: "https://github.com/Punchdev-ux/firebaseAuth",
    website: "",
    cover: "/assets/projects/Two-Factor-Authentication-App.png",
    gradient: "from-orange-500/20 via-amber-500/15 to-yellow-500/20",
  },
];