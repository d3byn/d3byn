import { journey } from "../data/content";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="experience-section section-pad">
      <div className="wrap">
        <Reveal>
          <div className="experience-heading">
            <h2>Experience.</h2>
            <p>
              Current work.
              <br /> Back to the foundations.
            </p>
          </div>
          <div className="journey-roadmap">
            <svg
              className="journey-road"
              viewBox="0 0 1000 80"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="journey-road-base"
                d="M20 40 C 140 10, 240 70, 360 40 S 580 10, 700 45 S 880 75, 980 35"
              />
              <path
                className="journey-road-ink"
                d="M20 40 C 140 10, 240 70, 360 40 S 580 10, 700 45 S 880 75, 980 35"
                pathLength={1}
              />
            </svg>
            {journey.map((stop) => (
              <article
                className="journey-stop"
                aria-labelledby={`${stop.id}-title`}
                key={stop.id}
              >
                <span className="journey-stop-marker" aria-hidden="true">
                  <span />
                </span>
                <div className="journey-stop-content">
                  <p className="journey-date">
                    {stop.badge ? <span className="journey-current">{stop.badge}</span> : null}
                    {stop.date}
                  </p>
                  <h3 id={`${stop.id}-title`}>{stop.title}</h3>
                  <p className="journey-place">
                    {stop.place}
                    {stop.placeMeta ? <span> {stop.placeMeta}</span> : null}
                  </p>
                  <p className="journey-description">{stop.description}</p>
                  {stop.credentialUrl ? (
                    <p className="journey-description">
                      <a
                        className="text-link"
                        href={stop.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View credential
                      </a>
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
