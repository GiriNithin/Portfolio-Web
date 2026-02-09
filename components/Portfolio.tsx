"use client";

import { useState, useEffect, useCallback } from "react";
import { FORMSPREE_ENDPOINT, type SectionId } from "@/lib/constants";
import type { Theme, ToastType } from "@/lib/types";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toast } from "./Toast";
import {
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection,
} from "./sections";

const THEME_KEY = "portfolio-theme";

export function Portfolio() {
  const [theme, setThemeState] = useState<Theme>("light");
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [toast, setToast] = useState<{
    message: string;
    type: ToastType;
    visible: boolean;
  }>({ message: "", type: "success", visible: false });
  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    const stored =
      (typeof window !== "undefined" &&
        (localStorage.getItem(THEME_KEY) as Theme | null)) ||
      (typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setThemeState(stored || "light");
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType = "success") => {
      setToast({ message, type, visible: true });
      const t = setTimeout(() => {
        setToast((prev) => ({ ...prev, visible: false }));
        setTimeout(() => {
          setToast((prev) => ({ ...prev, message: "" }));
        }, 300);
      }, 4000);
      return () => clearTimeout(t);
    },
    [],
  );

  const goToSection = useCallback((sectionId: SectionId) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleContactSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
      setFormSubmitting(true);
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        if (res.ok && !data.error) {
          showToast("Message sent! I'll get back to you soon.", "success");
          form.reset();
        } else {
          showToast(
            data.error || "Something went wrong. Please try again.",
            "error",
          );
        }
      } catch {
        showToast(
          "Failed to send. Check your connection and try again.",
          "error",
        );
      } finally {
        setFormSubmitting(false);
      }
    },
    [showToast],
  );

  return (
    <div className="page-wrap">
      <Header
        activeSection={activeSection}
        onThemeToggle={() => setTheme(theme === "dark" ? "light" : "dark")}
        onNavigate={goToSection}
      />

      <main className="main">
        <AboutSection
          isActive={activeSection === "about"}
          goToSection={goToSection}
        />
        <SkillsSection isActive={activeSection === "skills"} />
        <ProjectsSection isActive={activeSection === "projects"} />
        <ExperienceSection isActive={activeSection === "experience"} />
        <ContactSection
          isActive={activeSection === "contact"}
          onSubmit={handleContactSubmit}
          isSubmitting={formSubmitting}
        />
      </main>

      <Footer />

      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
      />
    </div>
  );
}
