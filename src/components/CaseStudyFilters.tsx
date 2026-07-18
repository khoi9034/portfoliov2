"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import type { CaseStudy, CaseStudyTrack } from "@/data/caseStudies";

type CaseStudyFiltersProps = {
  studies: CaseStudy[];
};

type DecisionRoute = CaseStudyTrack | "all";

const routeLabels: Record<DecisionRoute, string> = {
  government: "Government Technology",
  utilities: "Utilities & Network Infrastructure",
  all: "View All Decisions"
};

function isTrack(value: string | null): value is CaseStudyTrack {
  return value === "government" || value === "utilities";
}

function getInitialRoute(): DecisionRoute {
  if (typeof window === "undefined") {
    return "all";
  }

  const queryTrack = new URLSearchParams(window.location.search).get("track");
  if (isTrack(queryTrack)) {
    return queryTrack;
  }

  const storedTrack = window.sessionStorage.getItem("portfolioTrack");
  return isTrack(storedTrack) ? storedTrack : "all";
}

function matchesRoute(study: CaseStudy, route: DecisionRoute) {
  return route === "all" || study.tracks.includes(route);
}

export function CaseStudyFilters({ studies }: CaseStudyFiltersProps) {
  const [selectedRoute, setSelectedRoute] = useState<DecisionRoute>(() =>
    getInitialRoute()
  );
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const checkpointRefs = useRef(new Map<string, HTMLElement>());

  const publishedStudies = useMemo(
    () =>
      studies
        .filter((study) => study.published !== false)
        .sort((a, b) => a.routeOrder - b.routeOrder),
    [studies]
  );
  const visibleStudies = useMemo(
    () => publishedStudies.filter((study) => matchesRoute(study, selectedRoute)),
    [publishedStudies, selectedRoute]
  );
  const currentSlug = activeSlug ?? visibleStudies[0]?.slug ?? null;
  const activeIndex = Math.max(
    0,
    visibleStudies.findIndex((study) => study.slug === currentSlug)
  );
  const progress = visibleStudies.length
    ? ((activeIndex + 1) / visibleStudies.length) * 100
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
  }, [visibleStudies]);

  function selectRoute(route: DecisionRoute) {
    const url = new URL(window.location.href);

    if (route === "all") {
      url.searchParams.delete("track");
    } else {
      url.searchParams.set("track", route);
      window.sessionStorage.setItem("portfolioTrack", route);
    }

    window.history.replaceState(null, "", url);
    setSelectedRoute(route);
  }

  function setCheckpointRef(slug: string, node: HTMLElement | null) {
    if (node) {
      checkpointRefs.current.set(slug, node);
    } else {
      checkpointRefs.current.delete(slug);
    }
  }

  return (
    <section className="decision-path-explorer" aria-label="Case study decision path">
      <div className="decision-route-selector" aria-label="Decision path selector">
        {(["government", "utilities", "all"] as DecisionRoute[]).map((route) => (
          <button
            aria-pressed={selectedRoute === route}
            key={route}
            onClick={() => selectRoute(route)}
            type="button"
          >
            {routeLabels[route]}
          </button>
        ))}
      </div>

      <div className="route-explorer decision-route">
        <aside className="route-status" aria-live="polite">
          <span>{routeLabels[selectedRoute]}</span>
          <strong>
            {visibleStudies.length ? activeIndex + 1 : 0} / {visibleStudies.length}
          </strong>
          <p>{visibleStudies[activeIndex]?.title ?? "Choose a decision path"}</p>
        </aside>

        <div className="route-path-shell">
          <div className="route-rail" aria-hidden="true">
            <span className="route-rail-fill" style={{ height: `${progress}%` }} />
            <span className="route-signal" style={{ top: `${progress}%` }} />
          </div>

          <div className="route-checkpoint-list">
            {visibleStudies.map((study, index) => (
              <article
                className={`route-checkpoint ${
                  index % 2 === 0 ? "is-left" : "is-right"
                    } ${study.slug === currentSlug ? "is-active" : ""} ${
                  study.junction ? "is-junction" : ""
                }`}
                data-slug={study.slug}
                key={study.slug}
                ref={(node) => setCheckpointRef(study.slug, node)}
              >
                <span className="route-node" aria-hidden="true" />
                <Link className="decision-card" href={study.href}>
                  <div className="case-study-card-topline">
                    <span>{study.category}</span>
                    <span>{study.decisionType}</span>
                  </div>
                  <p className="decision-question">{study.decisionQuestion}</p>
                  <h2>{study.title}</h2>
                  <dl className="case-study-facts case-study-decision-facts">
                    <div>
                      <dt>Evidence reviewed</dt>
                      <dd>{study.evidence.slice(0, 4).join(" / ")}</dd>
                    </div>
                    <div>
                      <dt>Recommendation</dt>
                      <dd>{study.cardRecommendation}</dd>
                    </div>
                    <div>
                      <dt>Limitations</dt>
                      <dd>{study.detail.risksAndLimitations[0]}</dd>
                    </div>
                  </dl>
                  {study.relatedProject ? (
                    <span className="case-study-related">
                      Related project: {study.relatedProject.title}
                    </span>
                  ) : null}
                  <span className="case-study-link">
                    <span>{study.status}</span>
                    <ArrowRight size={16} />
                  </span>
                  <div className="decision-card-visual" aria-hidden={!study.image}>
                    {study.image ? (
                      <Image
                        alt={study.image.alt}
                        fill
                        sizes="(max-width: 860px) 100vw, 220px"
                        src={study.image.src}
                      />
                    ) : (
                      <FileText size={28} />
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
