import { ArrowUpRight } from "lucide-react";
import { person } from "../data/content";
import { Reveal } from "./Reveal";

export function Biography() {
  return (
    <Reveal>
      <div id="biography" className="biography wrap">
        <div className="bio-introduction">
          <h2>
            Hi, I&apos;m
            <br /> {person.firstName}.
          </h2>
          <p className="bio-role">{person.tagline}</p>
          <div className="bio-current">
            <span>Currently at</span>
            <p>
              <strong>{person.currentlyAt.company}</strong>
              <br />
              {person.currentlyAt.title}
              <br />
              <span>{person.currentlyAt.place}</span>
            </p>
          </div>
        </div>
        <figure className="bio-portrait">
          <img
            src="/portrait.jpg"
            alt={`Portrait of ${person.fullName}`}
            loading="lazy"
            width={1280}
            height={1472}
          />
        </figure>
        <div className="bio-description">
          <p className="bio-lead">
            I build <strong>RAG pipelines</strong> and ship{" "}
            <strong>production-ready product fixes</strong> across React, TypeScript, FastAPI, and
            Postgres.
          </p>
          <div className="bio-actions">
            <a className="bio-projects" href="#projects">
              Explore projects
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
