"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  FileText,
  GitBranch,
  X,
} from "lucide-react";
import { person, projects, type Project } from "../data/content";
import { Reveal } from "./Reveal";

function FolderCard({
  project,
  open,
  onOpen,
}: {
  project: Project;
  open: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      className="project-folder"
      data-folder-id={project.id}
      aria-expanded={open}
      aria-controls="project-details-panel"
      onClick={onOpen}
    >
      <span className="sr-only">{project.title}</span>
      <span className="folder-scene" aria-hidden="true">
        <span className="folder-back" />
        <span className="folder-paper folder-paper-back">
          <FileText size={18} />
          <span>Project overview</span>
          <span className="folder-paper-lines" />
        </span>
        <span className="folder-paper folder-paper-preview">
          <strong>{project.previewLabel}</strong>
          <span>{project.previewDetail}</span>
        </span>
        <span className="folder-paper folder-paper-front">
          <FileText size={18} />
          <span>Details &amp; source</span>
          <span className="folder-paper-lines" />
        </span>
        <span className="folder-front">
          <span className="folder-front-title">{project.title}</span>
          <span className="folder-open-icon">
            <ArrowUpRight size={18} />
          </span>
        </span>
      </span>
      <span className="folder-caption">
        <span>{project.category}</span>
        <span className="folder-caption-action">
          {project.captionAction} <ArrowUpRight size={15} />
        </span>
      </span>
    </button>
  );
}

function Study({ project }: { project: Project }) {
  return (
    <article className="project-study" aria-labelledby={`${project.id}-title`}>
      <a
        className="project-image-link"
        href={project.live || project.source || project.publication || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title}`}
      >
        <figure className="project-image">
          <div className="project-image-fallback">
            <strong>{project.title}</strong>
            <span>{project.category}</span>
          </div>
        </figure>
      </a>
      <div className="study-content">
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        <p className="project-category">{project.category}</p>
        <p className="study-description">{project.summary}</p>
        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        {project.outcome ? <p className="study-outcome">{project.outcome}</p> : null}
        <div className="project-links">
          {project.live ? (
            <a className="text-link" href={project.live} target="_blank" rel="noopener noreferrer">
              Live app <ArrowUpRight size={16} />
            </a>
          ) : null}
          {project.source ? (
            <a
              className="text-link"
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch size={15} /> Source <ArrowUpRight size={15} />
            </a>
          ) : null}
          {project.publication ? (
            <a
              className="text-link"
              href={project.publication}
              target="_blank"
              rel="noopener noreferrer"
            >
              Publication <ArrowUpRight size={15} />
            </a>
          ) : null}
        </div>
        <div className="detail-body">
          {project.bullets.map((bullet) => (
            <p key={bullet}>{bullet}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="projects" className="projects-section wrap section-pad">
      <Reveal>
        <div className="section-heading">
          <h2>
            Featured
            <br />
            Projects
          </h2>
          <a
            href={person.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            GitHub <ArrowUpRight size={18} />
          </a>
        </div>
        <p className="projects-intro">
          Independent projects and published writing. Open a folder to explore a project or
          publication.
        </p>
        <div className="project-folder-grid">
          {projects.map((project) => (
            <FolderCard
              key={project.id}
              project={project}
              open={activeId === project.id}
              onOpen={() => setActiveId(project.id)}
            />
          ))}
        </div>
      </Reveal>

      {active ? (
        <div
          id="project-details-panel"
          className="project-details-panel"
          tabIndex={-1}
          role="region"
        >
          <div className="project-panel-toolbar">
            <span>Project details</span>
            <button
              aria-label="Close project details"
              className="icon-button"
              type="button"
              onClick={() => setActiveId(null)}
              style={{ color: "var(--sc-ink)", border: "1px solid var(--line)" }}
            >
              <X size={18} />
            </button>
          </div>
          <Study project={active} />
        </div>
      ) : null}
    </section>
  );
}
