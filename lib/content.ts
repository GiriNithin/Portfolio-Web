import type { ExperienceItem, ProjectItem, SkillItem } from "./types";

export const SKILLS_DATA: SkillItem[] = [
  {
    icon: "⌘",
    title: "Languages",
    items: "JavaScript, TypeScript, Python, Java, HTML/CSS, SQL",
  },
  {
    icon: "◇",
    title: "Frameworks & Libraries",
    items: "React, Node.js, Express, Next.js, Vue, Tailwind",
  },
  {
    icon: "◆",
    title: "Tools & Practices",
    items: "Git, Docker, CI/CD, REST APIs, Agile, Testing",
  },
  {
    icon: "◎",
    title: "Databases & Cloud",
    items: "PostgreSQL, MongoDB, Redis, AWS, Vercel",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "Project One",
    description:
      "A full-stack application with authentication, real-time updates, and a modern UI. Built with React and Node.js.",
    tags: ["React", "Node", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Project Two",
    description:
      "API and dashboard for data analytics. Handles large datasets and provides clear visualizations.",
    tags: ["Python", "FastAPI", "D3.js"],
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "Mobile-first web app for task management with offline support and sync.",
    tags: ["Vue", "PWA", "IndexedDB"],
    link: "#",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    date: "2023 – Present",
    title: "Software Developer",
    company: "Company Name",
    description:
      "Building and maintaining web applications, APIs, and internal tools. Collaborating with design and product teams.",
  },
  {
    date: "2021 – 2023",
    title: "Junior Developer",
    company: "Previous Company",
    description:
      "Developed features for customer-facing products, wrote tests, and participated in code reviews.",
  },
  {
    date: "2020 – 2021",
    title: "Intern / Trainee",
    company: "Tech Startup",
    description:
      "Learned industry practices, contributed to small features, and supported the engineering team.",
  },
];

export const LANGUAGES = [
  { name: "JavaScript", color: "#3572A5" },
  { name: "Python", color: "#3776AB" },
  { name: "TypeScript", color: "#F29111" },
  { name: "HTML/CSS", color: "#E34F26" },
  { name: "Java", color: "#B07219" },
];

export const SOCIAL_LINKS = [
  { href: "#", label: "LinkedIn", text: "in" },
  { href: "#", label: "GitHub", text: "gh" },
  { href: "#", label: "Twitter", text: "𝕏" },
];
