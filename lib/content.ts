import type { ExperienceItem, ProjectItem, SkillItem } from "./types";

export const SKILLS_DATA: SkillItem[] = [
  {
    title: "Languages",
    technologies: [
      { name: "C", iconSlug: "c" },
      { name: "C++", iconSlug: "cplusplus" },
      { name: "JavaScript", iconSlug: "javascript" },
      { name: "Java", iconSlug: "openjdk" },
      { name: "Python", iconSlug: "python" },
      { name: "SQL", iconSlug: "postgresql" },
      { name: "HTML", iconSlug: "html5" },
      { name: "CSS", iconSlug: "css3" },
      { name: "C#", iconSlug: "csharp" },
      { name: "PHP", iconSlug: "php" },
      { name: "TypeScript", iconSlug: "typescript" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    technologies: [
      { name: "React", iconSlug: "react" },
      { name: "Django", iconSlug: "django" },
      { name: "TensorFlow", iconSlug: "tensorflow" },
      { name: "PyTorch", iconSlug: "pytorch" },
      { name: "Node.js", iconSlug: "nodedotjs" },
      { name: "Express.js", iconSlug: "express" },
      { name: "Hadoop", iconSlug: "apachehadoop" },
      { name: "Spark", iconSlug: "apachespark" },
      { name: "ASP.NET Core", iconSlug: "dotnet" },
    ],
  },
  {
    title: "Developer Tools",
    technologies: [
      { name: "AWS", iconSlug: "amazonaws" },
      { name: "Linux", iconSlug: "linux" },
      { name: "Git", iconSlug: "git" },
      { name: "MySQL", iconSlug: "mysql" },
      { name: "PostgreSQL", iconSlug: "postgresql" },
      { name: "MongoDB", iconSlug: "mongodb" },
      { name: "Couchbase", iconSlug: "couchbase" },
      { name: "Snowflake", iconSlug: "snowflake" },
      { name: "Kafka", iconSlug: "apachekafka" },
      { name: "Databricks", iconSlug: "databricks" },
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "Open Glass",
    bullets: [
      "Designed and developed a full-stack web application enabling users to share and showcase projects or ideas, integrating JWT-based authentication for secure access.",
      "Improved performance by implementing lazy loading and optimizing API calls, reducing server response times by 30%.",
      "Implemented image and document storage using Amazon S3, optimizing upload speeds for large files.",
    ],
    tags: ["JavaScript", "React.js", "Express.js", "Node.js", "MongoDB"],
    link: "https://github.com/GiriNithin/cs546-group36-final-project",
  },
  {
    title: "Data Analysis QA Framework",
    bullets: [
      "Designed and implemented a data analysis QA framework using GPT-3.5-Turbo, achieving 100% data privacy by relying exclusively on dataframe metadata.",
      "Developed a multi-agent system using Microsoft Autogen, improving query response accuracy by 25% and reducing execution time for complex tasks by 30%.",
      "Evaluated the framework using 40+ NLP queries across different datasets, achieving 90%+ functionality matching and generating accurate Python code in a single prompt.",
    ],
    tags: ["Python", "GPT-3.5", "Pandas", "Scikit-learn"],
    link: "https://github.com/GiriNithin/Data-Analysis-QA-Framework",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    date: "Jan 2025 – Present",
    title: "Software Developer",
    company: "Paycom · Irving, TX",
    bullets: [
      "Built and enhanced high-performance PHP scripts to resolve data inconsistencies in 6M+ payroll check records across 18K+ clients, improving execution time from 72 hours to under 2 hours through query optimization and temporary tables.",
      "Developed an automated check printing solution to filter garnishment checks, reducing manual intervention and printing errors by 40%.",
      "Delivered prompt resolutions for critical and escalated client issues, contributing to a 15% increase in customer satisfaction.",
    ],
  },
  {
    date: "May 2024 – Aug 2024",
    title: "Software Developer Intern",
    company: "Paycom · Irving, TX",
    bullets: [
      "Built a full-stack dashboard for housing product enablement using C# ASP.NET Core and React.js, supporting a modular and scalable architecture.",
      "Designed and integrated APIs with Entity Framework, leveraging LINQ queries to optimize data access and reduce API response time by 20%, while improving query efficiency by 30%.",
    ],
  },
  {
    date: "Jan 2024 – Dec 2024",
    title: "Graduate Teaching Assistant",
    company: "The University of Texas at Arlington · Arlington, TX",
    bullets: [
      "Aided students in understanding concepts through regular office hours and in-class discussions, enhancing their comprehension and problem-solving skills.",
    ],
  },
  {
    date: "Jan 2023 – May 2023",
    title: "Research Assistant",
    company: "The University of Texas at Arlington · Arlington, TX",
    bullets: [
      "Developed a Python script to extract and process 325 Simulink model metrics from MATLAB Central and GitHub, automating data ingestion and storage in a SQL database.",
      "Redesigned and implemented a responsive front-end application using React.js, optimizing rendering performance and improving loading time by 25% for a seamless user experience.",
    ],
  },
];

export const LANGUAGES = [
  { name: "JavaScript", color: "#3572A5" },
  { name: "Python", color: "#3776AB" },
  { name: "TypeScript", color: "#F29111" },
  { name: "HTML/CSS", color: "#E34F26" },
  { name: "Java", color: "#B07219" },
  { name: "C#", color: "#239120" },
];

export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/girinithin/",
    label: "LinkedIn",
    text: "in",
  },
  { href: "https://github.com/GiriNithin", label: "GitHub", text: "gh" },
];

export const CONTACT_EMAIL = "girinithinyogendra@outlook.com";
export const CONTACT_PHONE = "551-344-7404";
export const LOCATION = "Irving, TX";

export const ABOUT_TAGLINE =
  "Software Developer · MS Computer Science @ UT Arlington";
export const ABOUT_BIO = [
  "I'm a Software Engineer with experience in designing and building intelligent, scalable systems to solve real world problems. I hold a Master's in Computer Science from The University of Texas at Arlington (4.0 GPA).",
  "Passionate about modern web technologies, cloud platforms, and AI-powered solutions, I enjoy creating efficient, user-focused software that delivers measurable impact.",
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    school: "The University of Texas at Arlington",
    location: "Arlington, TX",
    cgpa: "4.0/4.0",
    period: "Jan 2023 – Dec 2024",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Game Development",
    school: "Jawaharlal Nehru Architecture and Fine Arts University",
    location: "Hyderabad, India",
    cgpa: "8.1/10.0",
    period: "Aug 2018 – Jul 2022",
  },
];
