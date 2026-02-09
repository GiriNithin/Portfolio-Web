export type Theme = "light" | "dark";

export type ToastType = "success" | "error";

export interface ToastState {
  message: string;
  type: ToastType;
  visible: boolean;
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  bullets: string[];
  tags: string[];
  link: string;
}

export interface SkillTech {
  name: string;
  iconSlug?: string; // simpleicons.org slug for cdn.simpleicons.org
}

export interface SkillItem {
  title: string;
  technologies: SkillTech[];
}
