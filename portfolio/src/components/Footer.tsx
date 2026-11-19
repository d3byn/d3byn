import { ArrowUp, ArrowUpRight } from "lucide-react";
import { person } from "../data/content";

const explore = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top wrap">
        <div className="footer-identity">
          <h2>{person.firstName}.</h2>
          <p>
            {person.tagline.replace(/\.$/, "")}.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <p>Explore</p>
          <div>
            {explore.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>
        <div className="footer-contact">
          <p>Get in touch</p>
          <a href={`mailto:${person.email}`}>
            {person.email} <ArrowUpRight size={16} />
          </a>
          <span>
            © {person.year} {person.fullName}
          </span>
        </div>
      </div>
      <div className="footer-finale">
        <div className="footer-finale-heading wrap">
          <p>See you around.</p>
          <a href="#">
            Back to top <ArrowUp size={16} />
          </a>
        </div>
        <p className="footer-name-mark" aria-hidden="true">
          {person.firstName.toUpperCase()}.
        </p>
        <div className="footer-scene-bottom wrap">
          <small>Built with care in Kolkata — thanks for scrolling this far.</small>
        </div>
      </div>
    </footer>
  );
}
