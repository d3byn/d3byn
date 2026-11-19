import { person } from "../data/content";

function Letters({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((ch, i) => (
        <span className="hero-letter-window" key={`${ch}-${i}`}>
          <span className="hero-letter">{ch}</span>
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const codeSample = `const debayan = {
  role: "${person.role}",
  focus: ["RAG", "FastAPI", "Next.js", "React"],
  currentlyAt: "${person.currentlyAt.company}",
  projects: ["Cortex", "NexMind"],
  email: "${person.email}",
};

export default function Portfolio() {
  return (
    <main>
      {debayan.projects.map((p) => (
        <article key={p}>{p}</article>
      ))}
    </main>
  );
}`;

  return (
    <div className="hero wrap" data-hero-intro="ready">
      <div className="glyph-background hero-code-background" aria-hidden="true">
        <pre>{codeSample}</pre>
      </div>
      <a href="#biography" className="hero-portrait-link" aria-label={`About ${person.fullName}`}>
        <img src="/portrait.jpg" alt={`${person.fullName} portrait`} width={1280} height={1472} />
      </a>
      <div className="hero-heading-composition">
        <h1 className="hero-title hero-display-title" aria-label="Software Engineer">
          <span className="title-line" aria-hidden="true">
            <span className="hero-word">
              <span className="hero-code-open hero-code-mark" aria-hidden="true">
                <svg viewBox="20 0 110 160" fill="none" stroke="currentColor" strokeWidth="16">
                  <path opacity=".16" d="M105 30 48 80 105 130" transform="translate(5 6)" />
                  <path d="M105 30 48 80 105 130" />
                </svg>
              </span>
              <Letters text="SOFTWARE" />
            </span>
          </span>
          <span className="title-line" aria-hidden="true">
            <span className="hero-word">
              <Letters text="ENGINEER" />
              <span className="hero-code-close hero-code-mark" aria-hidden="true">
                <svg viewBox="0 0 180 160" fill="none" stroke="currentColor" strokeWidth="16">
                  <path
                    opacity=".16"
                    d="M65 30 25 130M100 30 157 80 100 130"
                    transform="translate(5 6)"
                  />
                  <path d="M65 30 25 130M100 30 157 80 100 130" />
                </svg>
              </span>
            </span>
          </span>
        </h1>
      </div>
      <div className="hero-footer">
        <span className="hero-year">©{person.year}</span>
        <span className="hero-focus">
          <span className="terminal-text">
            <span aria-hidden="true">{"{{ "}</span>
            <span>/{person.focus}</span>
            <span className="terminal-caret" aria-hidden="true" />
            <span aria-hidden="true">{" }}"}</span>
          </span>
        </span>
      </div>
    </div>
  );
}
