"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RESUME_URL } from "@/lib/constants";
import type { SectionId } from "@/lib/constants";
import { LANGUAGES, SOCIAL_LINKS } from "@/lib/content";

interface AboutSectionProps {
  isActive: boolean;
  goToSection: (id: SectionId) => void;
}

export function AboutSection({ isActive, goToSection }: AboutSectionProps) {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section
      id="about"
      className={`section section-about ${isActive ? "active" : ""}`}
    >
      <div className="section-inner cover-page">
        <div className="cover-left">
          <div className="cover-avatar-wrap">
            {avatarError ? (
              <div
                className="cover-avatar-placeholder show"
                aria-hidden="true"
              />
            ) : (
              <Image
                src="/profile.jpg"
                alt="Giri Nithin Yogendra"
                width={160}
                height={160}
                className="cover-avatar"
                onError={() => setAvatarError(true)}
              />
            )}
          </div>
          <Link
            href={RESUME_URL}
            className="btn btn-resume view-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn-icon">📄</span> View Resume
          </Link>
          <button
            type="button"
            className="btn btn-connect connect-with-me"
            onClick={() => goToSection("contact")}
          >
            <span className="btn-icon">🔗</span> Connect With Me
          </button>
          <div className="cover-socials">
            {SOCIAL_LINKS.map(({ href, label, text }) => (
              <a
                key={label}
                href={href}
                className="social-link"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
        <div className="cover-center">
          <h1 className="cover-name">Giri Nithin Yogendra</h1>
          <p className="cover-tagline">
            Software Developer · Building reliable, user-centric applications
          </p>
          <div className="cover-bio">
            <p>
              Hi, I&apos;m a <strong>Software Developer</strong> focused on
              building reliable, user-centric applications.
            </p>
            <p>
              I enjoy turning complex problems into simple solutions. From
              backend systems to frontend interfaces, I like to work across the
              stack and keep learning.
            </p>
            <p>
              When I&apos;m not coding, I explore new tools, contribute to open
              source, and stay curious about technology and design.
            </p>
          </div>
        </div>
        <div className="cover-right">
          <div className="cover-stats-card">
            <h3 className="cover-stats-title">GitHub</h3>
            <ul className="cover-stats-list">
              <li>
                <span className="stat-value">—</span> Repos
              </li>
              <li>
                <span className="stat-value">—</span> Stars
              </li>
              <li>
                <span className="stat-value">—</span> Followers
              </li>
            </ul>
          </div>
          <div className="cover-stats-card">
            <h3 className="cover-stats-title">Languages</h3>
            <ul className="cover-lang-list">
              {LANGUAGES.map(({ name, color }) => (
                <li key={name}>
                  <span
                    className="lang-dot"
                    style={{ "--c": color } as React.CSSProperties}
                  />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
