"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import {
  caseStudyFilterOptions,
  type CaseStudy,
  type CaseStudyFilterValue
} from "@/data/caseStudies";

type CaseStudyFiltersProps = {
  studies: CaseStudy[];
};

function matchesFilter(study: CaseStudy, filter: CaseStudyFilterValue) {
  return (
    filter === "all" ||
    study.categorySlug === filter ||
    study.secondaryCategories?.includes(filter)
  );
}

export function CaseStudyFilters({ studies }: CaseStudyFiltersProps) {
  const [activeFilter, setActiveFilter] = useState<CaseStudyFilterValue>("all");
  const publishedStudies = useMemo(
    () => studies.filter((study) => study.published !== false),
    [studies]
  );
  const visibleStudies = useMemo(
    () => publishedStudies.filter((study) => matchesFilter(study, activeFilter)),
    [activeFilter, publishedStudies]
  );
  const counts = useMemo(
    () =>
      Object.fromEntries(
        caseStudyFilterOptions.map((option) => [
          option.value,
          publishedStudies.filter((study) => matchesFilter(study, option.value))
            .length
        ])
      ) as Record<CaseStudyFilterValue, number>,
    [publishedStudies]
  );

  return (
    <section className="case-study-filter-section" aria-label="Filtered case studies">
      <div className="filter-bar" aria-label="Case-study filters">
        {caseStudyFilterOptions.map((option) => (
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

      <div className="case-study-index">
        {visibleStudies.map((study) => (
          <Link className="case-study-card" href={study.href} key={study.slug}>
            <div className="case-study-visual" aria-hidden={!study.image}>
              {study.image ? (
                <Image
                  alt={study.image.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 420px"
                  src={study.image.src}
                />
              ) : (
                <FileText size={32} />
              )}
            </div>
            <div className="case-study-card-body">
              <div className="case-study-card-topline">
                <span>{study.category}</span>
                <span>{study.status}</span>
              </div>
              <h2>{study.title}</h2>
              <p>{study.problem}</p>
              <dl className="case-study-facts">
                <div>
                  <dt>Context</dt>
                  <dd>{study.context}</dd>
                </div>
                <div>
                  <dt>Methods</dt>
                  <dd>{study.methods.slice(0, 4).join(" / ")}</dd>
                </div>
                <div>
                  <dt>Deliverable</dt>
                  <dd>{study.deliverable}</dd>
                </div>
              </dl>
              {study.relatedProject ? (
                <span className="case-study-related">
                  Related project: {study.relatedProject.title}
                </span>
              ) : null}
              <span className="case-study-link">
                <span>Read case study</span>
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {visibleStudies.length === 0 ? (
        <p className="filter-empty">
          No published case studies are tagged for this track yet.
        </p>
      ) : null}
    </section>
  );
}
