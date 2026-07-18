"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import {
  additionalTechnicalBuilds,
  projectTrackPanels,
  sharedFoundationCapabilities,
  type ProfessionalTrack,
  type Project
} from "@/data/projects";

type ProjectFiltersProps = {
  projects: Project[];
};

const trackLabels: Record<ProfessionalTrack, string> = {
  government: "Government Technology",
  utilities: "Utilities & Network Infrastructure"
};

function isTrack(value: string | null): value is ProfessionalTrack {
  return value === "government" || value === "utilities";
}

function getInitialTrack() {
  if (typeof window === "undefined") {
    return null;
  }

  const queryTrack = new URLSearchParams(window.location.search).get("track");
  if (isTrack(queryTrack)) {
    return queryTrack;
  }

  const storedTrack = window.sessionStorage.getItem("portfolioTrack");
  return isTrack(storedTrack) ? storedTrack : null;
}

export function ProjectFilters({ projects }: ProjectFiltersProps) {
  const [selectedTrack, setSelectedTrack] = useState<ProfessionalTrack | null>(
    () => getInitialTrack()
  );
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const checkpointRefs = useRef(new Map<string, HTMLElement>());

  const publishedProjects = useMemo(
    () =>
      projects
        .filter((project) => project.published !== false)
        .sort((a, b) => a.routeOrder - b.routeOrder),
    [projects]
  );

  const visibleProjects = useMemo(
    () =>
      selectedTrack
        ? publishedProjects.filter((project) =>
            project.tracks.includes(selectedTrack)
          )
        : publishedProjects,
    [publishedProjects, selectedTrack]
  );

  const currentSlug = activeSlug ?? visibleProjects[0]?.slug ?? null;
  const activeIndex = Math.max(
    0,
    visibleProjects.findIndex((project) => project.slug === currentSlug)
  );
  const progress =
    selectedTrack && visibleProjects.length
      ? ((activeIndex + 1) / visibleProjects.length) * 100
      : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target instanceof HTMLElement) {
          setActiveSlug(visibleEntry.target.dataset.slug ?? null);
        }
      },
      { rootMargin: "-28% 0px -46% 0px", threshold: [0.2, 0.55] }
    );

    const nodes = [...checkpointRefs.current.values()];
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [visibleProjects]);

  function selectTrack(track: ProfessionalTrack) {
    const url = new URL(window.location.href);
    url.searchParams.set("track", track);
    window.history.replaceState(null, "", url);
    window.sessionStorage.setItem("portfolioTrack", track);
    setSelectedTrack(track);
  }

  function setCheckpointRef(slug: string, node: HTMLElement | null) {
    if (node) {
      checkpointRefs.current.set(slug, node);
    } else {
      checkpointRefs.current.delete(slug);
    }
  }

  return (
    <>
      <section className="track-explorer-start" aria-label="Professional track selection">
        <div className="gis-core-node">
          <p className="eyebrow">GIS Systems Core</p>
          <h2>GIS Systems Core</h2>
          <p>
            Enterprise GIS, spatial data engineering, automation, spatial
            databases, web GIS, analytical interfaces, and system integration.
          </p>
          <div className="track-panel-tags">
            {sharedFoundationCapabilities.slice(0, 6).map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </div>

        <div className="route-split" aria-hidden="true">
          <span />
          <span />
        </div>

        <div className="track-panel-grid">
          {projectTrackPanels.map((track) => (
            <button
              aria-pressed={selectedTrack === track.value}
              className={`track-panel is-${track.value}`}
              key={track.value}
              onClick={() => selectTrack(track.value)}
              type="button"
            >
              <span className="track-panel-kicker">Professional track</span>
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
                <span>Featured: {track.featuredProject}</span>
              </div>
              <strong>
                {track.action}
                <ArrowRight size={16} />
              </strong>
            </button>
          ))}
        </div>
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
        className={`route-explorer ${selectedTrack ? "is-selected" : "is-neutral"}`}
        aria-label="Project route explorer"
      >
        <aside className="route-status" aria-live="polite">
          <span>{selectedTrack ? trackLabels[selectedTrack] : "Choose a track"}</span>
          <strong>
            {visibleProjects.length ? activeIndex + 1 : 0} / {visibleProjects.length}
          </strong>
          <p>
            {visibleProjects[activeIndex]?.shortTitle ??
              visibleProjects[activeIndex]?.title ??
              "Select a route"}
          </p>
          <div>
            {projectTrackPanels.map((track) => (
              <button
                aria-pressed={selectedTrack === track.value}
                key={track.value}
                onClick={() => selectTrack(track.value)}
                type="button"
              >
                {track.value === "government" ? "Government" : "Utilities"}
              </button>
            ))}
          </div>
        </aside>

        <div className="route-path-shell">
          <div className="route-rail" aria-hidden="true">
            <span className="route-rail-fill" style={{ height: `${progress}%` }} />
            {selectedTrack ? (
              <span className="route-signal" style={{ top: `${progress}%` }} />
            ) : null}
          </div>

          <div className="route-checkpoint-list">
            {visibleProjects.map((project, index) => (
              <article
                className={`route-checkpoint ${
                  index % 2 === 0 ? "is-left" : "is-right"
                } ${project.slug === currentSlug ? "is-active" : ""} ${
                  project.junction ? "is-junction" : ""
                }`}
                data-slug={project.slug}
                key={project.slug}
                ref={(node) => setCheckpointRef(project.slug, node)}
              >
                <span className="route-node" aria-hidden="true" />
                <ProjectCard project={project} />
              </article>
            ))}
          </div>
        </div>

        {selectedTrack === "utilities" ? (
          <div className="developing-track-note">
            <p className="eyebrow">Expanding Infrastructure Track</p>
            <h2>Prototype-backed infrastructure intelligence is developing.</h2>
            <p>
              Applying an established enterprise GIS and planning-intelligence
              foundation to utility networks, telecom, service territories,
              infrastructure capacity, and asset workflows. No utility
              partnership or verified capacity finding is claimed.
            </p>
          </div>
        ) : null}
      </section>

      {additionalTechnicalBuilds.length ? (
        <section className="section-shell additional-builds" aria-labelledby="additional-builds-title">
          <div>
            <p className="eyebrow">Technical Lab</p>
            <h2 id="additional-builds-title">Technical Lab</h2>
            <p>
              Additional applications demonstrating full-stack development,
              data engineering, deployment, and practical problem-solving.
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
