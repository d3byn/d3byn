"use client";

import { useEffect, useRef, useState } from "react";
import { Ellipsis, Moon, Sun, X } from "lucide-react";
import { navPrimary, navSecondary, person } from "../data/content";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

export function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-theme");
    const next = stored === "dark" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
  };

  const closeAndGo = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#about" aria-label={`${person.fullName}, home`}>
            <span className="wordmark-text">{person.firstName}</span>
          </a>
          <div className="header-actions">
            <button
              type="button"
              aria-label="Toggle dark mode"
              aria-pressed={theme === "dark"}
              className="icon-button theme-toggle"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              className="icon-button nav-menu-trigger"
              aria-label="Navigation menu"
              aria-expanded={open}
              aria-controls="navigation-panel"
              aria-haspopup="dialog"
              onClick={() => setOpen(true)}
            >
              <Ellipsis size={22} />
            </button>
          </div>
        </div>
      </header>

      <dialog
        id="navigation-panel"
        className="nav-dialog"
        aria-label="Navigation menu"
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setOpen(false);
        }}
      >
        <div className="nav-panel">
          <div className="nav-panel-top">
            <button
              type="button"
              className="nav-panel-close"
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
            >
              <span>close</span>
              <span className="nav-close-circle">
                <X size={18} />
              </span>
            </button>
          </div>
          <nav className="nav-panel-links" aria-label="Site navigation">
            <div className="nav-menu-primary">
              {navPrimary.map((item) => (
                <a key={item.href + item.label} href={item.href} onClick={closeAndGo}>
                  {item.label}
                </a>
              ))}
            </div>
            <div className="nav-menu-secondary">
              {navSecondary.map((item) => (
                <a key={item.href + item.label} href={item.href} onClick={closeAndGo}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
          <div className="nav-panel-footer">
            <a className="nav-panel-email" href={`mailto:${person.email}`}>
              {person.email}
            </a>
            <div className="nav-panel-socials">
              <a href={person.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
              <a
                href={person.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
