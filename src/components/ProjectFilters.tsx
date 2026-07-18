"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Route } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import {
  projectTrackPanels,
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

function getInitialTrack(): ProfessionalTrack {
  if (typeof window === "undefined") {
    return "government";
  }

  const queryTrack = new URLSearchParams(window.location.search).get("track");
  if (isTrack(queryTrack)) {
    return queryTrack;
  }

  return "government";
}

export function ProjectFilters({ projects }: ProjectFiltersProps) {
  const [selectedTrack, setSelectedTrack] = useState<ProfessionalTrack>(
    () => getInitialTrack()
  );
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const checkpointRefs = useRef(new Map<string, HTMLElement>());
  const routeRef = useRef<HTMLElement | null>(null);

  const publishedProjects = useMemo(
    () =>
      projects
        .filter((project) => project.published !== false)
        .sort((a, b) => a.routeOrder - b.routeOrder),
    [projects]
  );

  const visibleProjects = useMemo(
    () =>
      publishedProjects.filter((project) => project.tracks.includes(selectedTrack)),
    [publishedProjects, selectedTrack]
  );

  const currentSlug = activeSlug ?? visibleProjects[0]?.slug ?? null;
  const activeIndex = Math.max(
    0,
    visibleProjects.findIndex((project) => project.slug === currentSlug)
  );
  const progress =
    visibleProjects.length
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
    setActiveSlug(null);
    setSelectedTrack(track);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.requestAnimationFrame(() => {
        routeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
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
        <div className="track-entry-system">
          <div className="track-origin-node" aria-hidden="true">
            <span />
          </div>
          {projectTrackPanels.map((track) => (
            <button
              aria-pressed={selectedTrack === track.value}
              className={`track-entry is-${track.value}`}
              key={track.value}
              onClick={() => selectTrack(track.value)}
              type="button"
            >
              <div>
                <span className="track-entry-state">
                  {selectedTrack === track.value ? "Current route" : "Track option"}
                </span>
                <strong>
                  {track.value === "government"
                    ? "Explore Government Projects"
                    : "Explore Utility Projects"}
                </strong>
                <small>
                  {track.value === "government"
                    ? "Planning / Public Data / GIS Automation"
                    : "Networks / Infrastructure / Service Territories"}
                </small>
              </div>
              <ArrowRight size={18} />
            </button>
          ))}
        </div>
      </section>

      <section
        className={`route-explorer is-selected is-${selectedTrack}`}
        aria-label="Project route explorer"
        ref={routeRef}
      >
        <aside className="route-status" aria-live="polite">
          <span>{trackLabels[selectedTrack]}</span>
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
            <span className="route-signal" style={{ top: `${progress}%` }} />
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
                <ProjectCard activeTrack={selectedTrack} project={project} />
              </article>
            ))}
          </div>
        </div>

        {selectedTrack === "utilities" ? (
          <div className="developing-track-note">
            <p className="eyebrow">Expanding Infrastructure Track</p>
            <h2>Prototype-backed infrastructure intelligence is developing.</h2>
            <p>
              Applying the CFS planning-intelligence foundation to utility
              service context, infrastructure readiness, and development
              review. No utility partnership or verified capacity finding is
              claimed.
            </p>
          </div>
        ) : null}

        <div className="route-complete-node">
          <Route size={18} />
          <div>
            <span>Project route complete</span>
            <p>Looking for the analysis behind the work?</p>
          </div>
          <Link href="/case-studies">
            Explore Case Studies
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
