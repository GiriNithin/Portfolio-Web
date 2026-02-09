"use client";

import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/content";

interface ContactSectionProps {
  isActive: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

export function ContactSection({
  isActive,
  onSubmit,
  isSubmitting,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`section section-contact ${isActive ? "active" : ""}`}
    >
      <div className="section-inner">
        <h1 className="section-title">Contact Me</h1>
        <p className="contact-intro">
          Have a project in mind or want to say hi? Reach me at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">{CONTACT_EMAIL}</a>
          {" "}or{" "}
          <a href={`tel:${CONTACT_PHONE.replace(/\D/g, "")}`} className="contact-link">{CONTACT_PHONE}</a>
          , or send a message below.
        </p>
        <form
          className="contact-form"
          onSubmit={onSubmit}
          method="post"
        >
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
