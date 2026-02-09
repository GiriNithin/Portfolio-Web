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
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface SkillItem {
  icon: string;
  title: string;
  items: string;
}
