"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import {
  additionalTechnicalBuilds,
  projectFilterOptions,
  projectTrackPanels,
  sharedFoundationCapabilities,
  type Project,
  type ProjectFilterValue
} from "@/data/projects";

type ProjectFiltersProps = {
  projects: Project[];
};

function matchesFilter(project: Project, filter: ProjectFilterValue) {
  return filter === "all" || project.categories.includes(filter);
}

export function ProjectFilters({ projects }: ProjectFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterValue>("all");
  const visibleProjects = useMemo(
    () =>
      projects.filter(
        (project) => project.published !== false && matchesFilter(project, activeFilter)
      ),
    [activeFilter, projects]
  );
  const trackCounts = useMemo(
    () =>
      Object.fromEntries(
        projectTrackPanels.map((track) => [
          track.value,
          projects.filter(
            (project) =>
              project.published !== false && project.categories.includes(track.value)
          ).length
        ])
      ) as Record<(typeof projectTrackPanels)[number]["value"], number>,
    [projects]
  );

  function selectFilter(filter: ProjectFilterValue) {
    setActiveFilter(filter);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.requestAnimationFrame(() => {
      document.getElementById("project-collection")?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });
    });
  }

  return (
    <>
      <section className="track-panel-grid" aria-label="Project industry tracks">
        {projectTrackPanels.map((track) => (
          <button
            aria-pressed={activeFilter === track.value}
            className={`track-panel is-${track.value}`}
            key={track.value}
            onClick={() => selectFilter(track.value)}
            type="button"
          >
            <span className="track-panel-kicker">Industry track</span>
            <div className="track-panel-visual" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <h2>{track.title}</h2>
              <p>{track.description}</p>
            </div>
            <div className="track-panel-tags" aria-label={`${track.title} capabilities`}>
              {track.labels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
            <div className="track-panel-meta">
              <span>
                {trackCounts[track.value]} relevant{" "}
                {trackCounts[track.value] === 1 ? "project" : "projects"}
              </span>
              <span>Featured: {track.featuredProject}</span>
            </div>
            <strong>
              {track.action}
              <ArrowRight size={16} />
            </strong>
          </button>
        ))}
      </section>

      <section className="shared-foundation" aria-labelledby="shared-foundation-title">
        <div>
          <p className="eyebrow">Cross-sector foundation</p>
          <h2 id="shared-foundation-title">
            Shared GIS Systems & Automation Foundation
          </h2>
          <p>
            Enterprise GIS, spatial databases, automation, data publishing, web
            GIS, and system integration support work across both professional
            tracks.
          </p>
        </div>
        <div className="shared-foundation-tags">
          {sharedFoundationCapabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
      </section>

      <section
        className="section-shell project-category"
        id="project-collection"
        aria-label="Filtered projects"
      >
        <div className="filter-bar" aria-label="Project filters">
          {projectFilterOptions.map((option) => (
            <button
              aria-pressed={activeFilter === option.value}
              className="filter-button"
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="project-grid balanced-grid projects-main-grid">
          {visibleProjects.map((project) => (
            <div key={project.slug}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {visibleProjects.length === 0 ? (
          <p className="filter-empty">
            No published projects are tagged for this track yet.
          </p>
        ) : null}
      </section>

      {additionalTechnicalBuilds.length ? (
        <section className="section-shell additional-builds" aria-labelledby="additional-builds-title">
          <div>
            <p className="eyebrow">Secondary technical work</p>
            <h2 id="additional-builds-title">Additional Technical Builds</h2>
            <p>
              Selected independent applications demonstrating full-stack
              development, data engineering, and practical problem-solving.
            </p>
          </div>
          <div className="additional-build-grid">
            {additionalTechnicalBuilds.map((build) => (
              <article className="additional-build-card" key={build.title}>
                <span>{build.status}</span>
                <h3>{build.title}</h3>
                <p>{build.summary}</p>
                <div className="tool-list">
                  {build.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
