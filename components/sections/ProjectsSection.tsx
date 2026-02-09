"use client";

import Link from "next/link";
import { PROJECTS_DATA } from "@/lib/content";

interface ProjectsSectionProps {
  isActive: boolean;
}

export function ProjectsSection({ isActive }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className={`section section-projects ${isActive ? "active" : ""}`}
    >
      <div className="section-inner">
        <h1 className="section-title">Projects</h1>
        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <ul className="project-bullets">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <Link
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View project →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
