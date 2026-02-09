"use client";

import { SKILLS_DATA } from "@/lib/content";

// jsDelivr serves simple-icons SVGs reliably (cdn.simpleicons.org can 404 for some slugs)
const SIMPLE_ICONS_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@11/icons";

interface SkillsSectionProps {
  isActive: boolean;
}

function TechIcon({ slug }: { slug: string }) {
  return (
    <img
      src={`${SIMPLE_ICONS_CDN}/${slug}.svg`}
      alt=""
      width={24}
      height={24}
      className="skill-tech-icon"
      loading="lazy"
    />
  );
}

export function SkillsSection({ isActive }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className={`section section-skills ${isActive ? "active" : ""}`}
    >
      <div className="section-inner section-inner--wide">
        <h1 className="section-title">Skills</h1>
        <div className="skills-grid">
          {SKILLS_DATA.map((skill) => (
            <div key={skill.title} className="skill-card">
              <h3 className="skill-card-title">{skill.title}</h3>
              <ul className="skill-tech-list">
                {skill.technologies.map((tech) => (
                  <li key={tech.name} className="skill-tech-item">
                    {tech.iconSlug ? (
                      <TechIcon slug={tech.iconSlug} />
                    ) : (
                      <span className="skill-tech-icon skill-tech-icon--placeholder" />
                    )}
                    <span className="skill-tech-name">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
