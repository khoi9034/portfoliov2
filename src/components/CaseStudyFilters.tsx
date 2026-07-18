import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import type { CaseStudy, CaseStudyCategory } from "@/data/caseStudies";

type CaseStudyFiltersProps = {
  studies: CaseStudy[];
};

type CategoryMeta = {
  slug: CaseStudyCategory;
  label: string;
  descriptor: string;
};

const categoryMeta: CategoryMeta[] = [
  {
    slug: "government-planning",
    label: "Government & Planning",
    descriptor: "Growth, public service, and planning review decisions."
  },
  {
    slug: "utilities-infrastructure",
    label: "Utilities & Infrastructure",
    descriptor: "Infrastructure readiness, service context, and capacity follow-up."
  },
  {
    slug: "real-estate-location",
    label: "Real Estate & Location Intelligence",
    descriptor: "Site screening, market context, and location-risk framing."
  },
  {
    slug: "gis-modernization",
    label: "GIS Modernization & Data Strategy",
    descriptor: "Public data, workflow modernization, and GIS operating models."
  }
];

const categoryLabels = new Map(
  categoryMeta.map((category) => [category.slug, category.label])
);

function getCategoryLabel(slug: CaseStudyCategory) {
  return categoryLabels.get(slug) ?? slug;
}

function getCategoryClass(slug: CaseStudyCategory) {
  return `case-category-${slug}`;
}

export function CaseStudyFilters({ studies }: CaseStudyFiltersProps) {
  const publishedStudies = studies
    .filter((study) => study.published !== false)
    .sort((a, b) => a.routeOrder - b.routeOrder);
  const featuredStudy =
    publishedStudies.find((study) => study.featured) ?? publishedStudies[0];
  const groupedStudies = categoryMeta
    .map((category) => ({
      ...category,
      studies: publishedStudies.filter(
        (study) => study.categorySlug === category.slug
      )
    }))
    .filter((category) => category.studies.length);

  return (
    <section className="case-intelligence-catalog" aria-label="Case study catalog">
      <div className="case-domain-overview" aria-label="Case study domains">
        {groupedStudies.map((category) => {
          const featured = category.studies.find((study) => study.featured);

          return (
            <a
              className={`case-domain-card ${getCategoryClass(category.slug)}`}
              href={`#case-${category.slug}`}
              key={category.slug}
            >
              <span className="case-domain-count">
                {category.studies.length} case
                {category.studies.length === 1 ? "" : "s"}
              </span>
              <strong>{category.label}</strong>
              <p>{category.descriptor}</p>
              <small>
                {featured ? `Featured: ${featured.title}` : "Domain catalog"}
              </small>
            </a>
          );
        })}
      </div>

      {featuredStudy ? (
        <article
          className={`case-featured-panel ${getCategoryClass(
            featuredStudy.categorySlug
          )}`}
        >
          <div className="case-featured-copy">
            <p className="case-panel-label">Featured Decision Brief</p>
            <span>{featuredStudy.decisionType}</span>
            <h2>{featuredStudy.title}</h2>
            <p>{featuredStudy.decisionQuestion}</p>
            <dl className="case-featured-facts">
              <div>
                <dt>Evidence</dt>
                <dd>{featuredStudy.evidence.slice(0, 4).join(" / ")}</dd>
              </div>
              <div>
                <dt>Deliverable</dt>
                <dd>{featuredStudy.deliverable}</dd>
              </div>
            </dl>
            <div className="case-featured-actions">
              <Link href={featuredStudy.href}>
                Open Featured Brief
                <ArrowRight size={16} />
              </Link>
              {featuredStudy.relatedProject ? (
                <Link href={featuredStudy.relatedProject.href}>
                  Related Project
                  <ArrowRight size={16} />
                </Link>
              ) : null}
            </div>
          </div>
          <CaseVisual study={featuredStudy} priority />
        </article>
      ) : null}

      <div className="case-domain-sections">
        {groupedStudies.map((category) => (
          <section
            className={`case-domain-section ${getCategoryClass(category.slug)}`}
            id={`case-${category.slug}`}
            key={category.slug}
          >
            <div className="case-domain-heading">
              <p className="case-panel-label">{category.label}</p>
              <h2>{category.descriptor}</h2>
            </div>
            <div className="case-analysis-grid">
              {category.studies.map((study) => (
                <Link
                  aria-label={`Open case study: ${study.title}`}
                  className="case-analysis-card"
                  href={study.href}
                  key={study.slug}
                >
                  <span className="case-card-bar" aria-hidden="true" />
                  <div className="case-card-topline">
                    <span>{getCategoryLabel(study.categorySlug)}</span>
                    <span>{study.decisionType}</span>
                  </div>
                  <h3>{study.title}</h3>
                  <p>{study.decisionQuestion}</p>
                  <dl>
                    <div>
                      <dt>Evidence reviewed</dt>
                      <dd>{study.evidence.slice(0, 3).join(" / ")}</dd>
                    </div>
                    <div>
                      <dt>Recommendation</dt>
                      <dd>{study.cardRecommendation}</dd>
                    </div>
                  </dl>
                  <div className="case-card-footer">
                    <span>{study.status}</span>
                    {study.relatedProject ? (
                      <small>Related: {study.relatedProject.title}</small>
                    ) : null}
                    <ArrowRight size={17} />
                  </div>
                  {study.secondaryCategories?.length ? (
                    <span className="case-secondary-relevance">
                      Also relevant:{" "}
                      {study.secondaryCategories.map(getCategoryLabel).join(" / ")}
                    </span>
                  ) : null}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function CaseVisual({
  study,
  priority = false
}: {
  study: CaseStudy;
  priority?: boolean;
}) {
  return (
    <figure className="case-featured-visual">
      {study.image ? (
        <Image
          alt={study.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 860px) 100vw, 420px"
          src={study.image.src}
        />
      ) : (
        <FileText size={34} />
      )}
    </figure>
  );
}
