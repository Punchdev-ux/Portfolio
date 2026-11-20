export const headerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
] as const;

export const moreNav = [
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Education", href: "/achievements" },
  { label: "Books", href: "/books" },
  { label: "Favourites", href: "/favourites" },
] as const;

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Education", href: "/achievements" },
  { label: "Books", href: "/books" },
  { label: "Favourites", href: "/favourites" },
] as const;

export const commandItems = [
  ...footerNav.map((item) => ({ label: item.label, href: item.href })),
  { label: "X", href: "https://x.com/imdevPU23", external: true },
  { label: "Medium", href: "https://medium.com/@priyanshuurmaliya2003", external: true },
  { label: "GitHub", href: "https://github.com/Punchdev-ux", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ndumiso-nkomo-72230238b/", external: true },
  { label: "Email", href: "mailto:nkomondumiso43@gmail.com", external: true },
];
