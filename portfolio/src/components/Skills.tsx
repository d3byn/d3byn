import { skills } from "../data/content";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="skills-section section-pad">
      <div className="wrap">
        <Reveal>
          <div className="skills-heading">
            <h2>Tech Stack</h2>
            <p>
              The tools behind
              <br /> my work.
            </p>
          </div>
          <div className="skills-specimens">
            {skills.map((group) => (
              <article
                className="skills-specimen"
                aria-labelledby={`skills-${group.id}`}
                key={group.id}
              >
                <h3 id={`skills-${group.id}`}>{group.title}</h3>
                <p className="skills-specimen-note">{group.note}</p>
                <ul className="skills-type-mosaic">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
