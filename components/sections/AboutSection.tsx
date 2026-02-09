"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RESUME_URL } from "@/lib/constants";
import type { SectionId } from "@/lib/constants";
import {
  LANGUAGES,
  SOCIAL_LINKS,
  ABOUT_TAGLINE,
  ABOUT_BIO,
  LOCATION,
} from "@/lib/content";

interface GitHubStats {
  repos: number;
  stars: number;
  followers: number;
}

interface AboutSectionProps {
  isActive: boolean;
  goToSection: (id: SectionId) => void;
}

export function AboutSection({ isActive, goToSection }: AboutSectionProps) {
  const [avatarError, setAvatarError] = useState(false);
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    fetch("/api/github-stats")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => data && setGithubStats(data))
      .catch(() => {});
  }, []);

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
          <p className="cover-tagline">{ABOUT_TAGLINE}</p>
          <p className="cover-handle">{LOCATION}</p>
          <div className="cover-bio">
            {ABOUT_BIO.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="cover-right">
          <div className="cover-stats-card">
            <h3 className="cover-stats-title">GitHub</h3>
            <ul className="cover-stats-list">
              <li>
                <span className="stat-value">
                  {githubStats != null ? githubStats.repos : "—"}
                </span>{" "}
                Repos
              </li>
              <li>
                <span className="stat-value">
                  {githubStats != null ? githubStats.stars : "—"}
                </span>{" "}
                Stars
              </li>
              <li>
                <span className="stat-value">
                  {githubStats != null ? githubStats.followers : "—"}
                </span>{" "}
                Followers
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
