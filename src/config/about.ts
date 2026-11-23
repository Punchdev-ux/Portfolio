import { heroConfig } from "@/config/hero";

export const aboutConfig = {
  headline: ["From curious experiments", "to building with AI."],
  intro:
    "I'm Ndumiso Nkomo — a **full-stack developer** and **RAG engineer** I enjoy building products from rough ideas. I care about creating clean APIs, user-friendly interfaces, and systems that work well in practice and **ships**.",
  quote:
    "I believe the best builders learn openly, ship early, and keep improving until the product feels easy to use.",
  traits: ["Curious", "Builder", "Focused", "Persistent"] as const,
  traitStyles: {
    Curious:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300",
    Builder:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300",
    Focused:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300",
    Persistent:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300",
  },
  meta: [
    { label: "Location", value: heroConfig.location },
    { label: "Status", value: "Open to opportunities" },
    { label: "Focus", value: "Full-stack · RAG" },
  ],
  story: {
    title: "How it started",
    paragraphs: [
      "It all started in high school when we were given a final-year project to build a website. What began as just another assignment quickly became something more. As I worked on my own project and helped classmates with theirs, I realized how much I enjoyed coding. There was something satisfying about turning ideas into something real that people could use.",
      "That early interest grew into a genuine passion for technology and problem-solving. In college, I spent my time balancing coursework with personal projects, constantly experimenting with new tools and technologies. Not everything worked the first time. There were failed exams, unfinished projects, and plenty of mistakes along the way. But each setback taught me valuable lessons about persistence, problem-solving, and staying calm when things don't go according to plan.",
      "Today, I spend most of my time building at the intersection of **AI and software engineering**. I'm particularly interested in **LLM applications**, **RAG systems**, and full-stack products that connect powerful models to real-world user experiences. What excites me most isn't just the technology itself, but finding practical ways to turn complex ideas into tools that people actually find useful.",
      "I'm still learning, still experimenting, and still figuring things out. The difference now is that I do it by **building**.",
    ],
  },
  principles: {
    title: "How I work",
    items: [
      {
        title: "Stay curious",
        description:
          "AI moves fast. I learn by building, reading, and talking to people a few steps ahead of me.",
      },
      {
        title: "Ship, then refine",
        description:
          "A working prototype beats a perfect plan. I prefer real feedback over endless polishing.",
      },
      {
        title: "Sweat the details",
        description:
          "Loading states, edge cases, and clear UX matter as much as the model or API behind them.",
      },
      {
        title: "Build for humans",
        description:
          "Technology is a means to an end. If it doesn't solve a real problem, it doesn't count.",
      },
    ],
  },
  beyond: {
    title: "Beyond the code",
    paragraphs: [
      "Outside of work, you'll find me exploring new tools and I like **learning in public** and sharing what actually worked — and what didn't.",
      "I'm drawn to builders who combine **technical depth** with **clarity**. That's the kind of engineer I want to become.",
    ],
  },
  connectLinks: [
    {
      name: "Email",
      href: "mailto:nkomondumiso43@gmail.com",
      icon: "mail" as const,
    },
    
    {
      name: "GitHub",
      href: "https://github.com/Punchdev-ux",
      icon: "github" as const,
    },
  ],
};
