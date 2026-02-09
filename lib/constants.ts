// URLs are read from environment variables (see .env.example).
// Add your values in .env.local — that file is gitignored and never committed.

export const RESUME_URL =
  process.env.NEXT_PUBLIC_RESUME_URL ?? "";

export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

export type SectionId =
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact";

export const SECTIONS: { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
