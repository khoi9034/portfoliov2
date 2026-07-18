"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import {
  projectFilterOptions,
  projectTrackPanels,
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
  const counts = useMemo(
    () =>
      Object.fromEntries(
        projectFilterOptions.map((option) => [
          option.value,
          projects.filter(
            (project) =>
              project.published !== false && matchesFilter(project, option.value)
          ).length
        ])
      ) as Record<ProjectFilterValue, number>,
    [projects]
  );

  function selectFilter(filter: ProjectFilterValue) {
    setActiveFilter(filter);
    window.requestAnimationFrame(() => {
      document.getElementById("project-collection")?.scrollIntoView({
        behavior: "smooth",
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
            className="track-panel"
            key={track.value}
            onClick={() => selectFilter(track.value)}
            type="button"
          >
            <span className="track-panel-kicker">Industry track</span>
            <h2>{track.title}</h2>
            <p>{track.description}</p>
            <strong>
              {track.action}
              <ArrowRight size={16} />
            </strong>
          </button>
        ))}
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
              <span>{option.label}</span>
              <small>{counts[option.value]}</small>
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
    </>
  );
}
