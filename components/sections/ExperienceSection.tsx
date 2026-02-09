"use client";

import { EXPERIENCE_DATA } from "@/lib/content";

interface ExperienceSectionProps {
  isActive: boolean;
}

export function ExperienceSection({ isActive }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className={`section section-experience ${isActive ? "active" : ""}`}
    >
      <div className="section-inner">
        <h1 className="section-title">Experience</h1>
        <div className="timeline">
          {EXPERIENCE_DATA.map((item) => (
            <div key={item.title + item.company} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
                <ul className="timeline-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
