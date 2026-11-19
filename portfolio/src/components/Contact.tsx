"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Copy } from "lucide-react";
import { person } from "../data/content";
import { Reveal } from "./Reveal";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

export function Contact() {
  const [status, setStatus] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setStatus("Email copied.");
    } catch {
      setStatus("Could not copy — use the mailto link.");
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const project = String(data.get("project") || "").trim();
    const subject = encodeURIComponent(`Portfolio note from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${project}`,
    );
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-section section-pad">
      <div className="wrap">
        <Reveal>
          <div className="contact-layout">
            <div className="contact-opening">
              <h2>Let&apos;s talk.</h2>
              <p>
                Whether it&apos;s an internship follow-up, a collab, or a full-time role, my inbox is
                open.
              </p>
              <div className="contact-details">
                <div className="email-block">
                  <a className="email-link" href={`mailto:${person.email}`}>
                    {person.email}
                    <ArrowUpRight size={20} />
                  </a>
                  <button
                    aria-label="Copy email address"
                    className="icon-button copy-email"
                    type="button"
                    onClick={copyEmail}
                    style={{ color: "var(--sc-ink)", border: "1px solid var(--line)" }}
                  >
                    <Copy size={18} />
                  </button>
                </div>
                <span className="copy-status" role="status">
                  {status}
                </span>
                <div className="social-links">
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon /> LinkedIn
                  </a>
                  <a href={person.github} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon /> GitHub
                  </a>
                  <a href={`tel:${person.phone.replace(/\s/g, "")}`}>{person.phone}</a>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="contact-field">
                <label htmlFor="inquiry-name">Your name</label>
                <input
                  id="inquiry-name"
                  name="name"
                  placeholder="What should I call you?"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="contact-field">
                <label htmlFor="inquiry-email">Email address</label>
                <input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="contact-field contact-message">
                <label htmlFor="inquiry-project">What do you have in mind?</label>
                <textarea
                  id="inquiry-project"
                  name="project"
                  placeholder="A little about your opportunity or project…"
                  rows={4}
                  required
                />
              </div>
              <div className="contact-submit">
                <button className="draft-button" type="submit">
                  Create email draft
                  <ArrowUpRight size={22} />
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
