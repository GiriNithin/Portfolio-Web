"use client";

import { SKILLS_DATA } from "@/lib/content";

interface SkillsSectionProps {
  isActive: boolean;
}

export function SkillsSection({ isActive }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className={`section section-skills ${isActive ? "active" : ""}`}
    >
      <div className="section-inner">
        <h1 className="section-title">Skills</h1>
        <div className="skills-grid">
          {SKILLS_DATA.map((skill) => (
            <div key={skill.title} className="skill-card">
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
