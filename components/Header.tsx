"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { RESUME_URL, SECTIONS } from "@/lib/constants";
import type { SectionId } from "@/lib/constants";

interface HeaderProps {
  activeSection: SectionId;
  onThemeToggle: () => void;
  onNavigate: (id: SectionId) => void;
}

export function Header({
  activeSection,
  onThemeToggle,
  onNavigate,
}: HeaderProps) {
  return (
    <header className="header">
      <Logo onClick={() => onNavigate("about")} />
      <nav className="nav" aria-label="Main navigation">
        {SECTIONS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`nav-link ${activeSection === id ? "active" : ""}`}
            onClick={() => onNavigate(id)}
            aria-current={activeSection === id ? "true" : undefined}
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="header-actions">
        <button
          type="button"
          className="theme-toggle"
          aria-label="Toggle dark mode"
          onClick={onThemeToggle}
        >
          <span className="theme-icon sun" aria-hidden="true">
            ☀
          </span>
          <span className="theme-icon moon" aria-hidden="true">
            ☽
          </span>
        </button>
        <Link
          href={RESUME_URL}
          className="btn btn-primary resume-download"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
      </div>
    </header>
  );
}
