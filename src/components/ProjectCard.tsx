import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { getProjectLaunch, projectLinks } from "@/data/links";
import { ProjectVisual } from "@/components/ProjectVisual";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const launch = getProjectLaunch(project.slug);
  const isCabarrusHub = project.slug === "cabarrus-gis-hub";
  const openDataHref = isCabarrusHub ? projectLinks.cabarrusOpenData : "";
  const detailHref = `/projects/${project.slug}`;
  const cardSummary = getProjectCardSummary(project);
  const statusLabel = launch
    ? "Live personal prototype"
    : isCabarrusHub
      ? "Professional internship work"
      : project.status;
  const primaryAction = {
    href: launch?.href ?? (openDataHref || detailHref),
    label: launch
      ? project.slug === "cabarrus-futurescape"
        ? "View CFS"
        : "View AutoMap"
      : openDataHref
        ? "View Open Data Site"
        : "Read Hub Details",
    external: Boolean(launch || openDataHref)
  };
  const detailLabel =
    project.slug === "cabarrus-futurescape"
      ? "Read CFS Details"
      : project.slug === "automap"
        ? "Read AutoMap Details"
        : isCabarrusHub
          ? "Read GIS Hub Details"
          : "Read Details";
  const showSecondaryDetail = Boolean(launch || openDataHref);
  const overlayContent = (
    <span className="project-card-overlay-pill">
      {primaryAction.external ? <ExternalLink size={17} /> : <ArrowRight size={17} />}
      <span>{primaryAction.label}</span>
    </span>
  );
  const relatedCaseStudy = project.relatedCaseStudies?.[0];

  return (
    <article className={`project-card ${compact ? "compact" : ""}`}>
      <div className="project-card-content">
        <div className="project-card-topline">
          <span>{project.primaryIndustry ?? project.type}</span>
          <span>{project.capabilityCategory ?? project.category}</span>
        </div>
        <span className={`project-status-inline ${launch ? "is-live" : "is-professional"}`}>
          {statusLabel}
        </span>
        <h3>{project.title}</h3>
        <p className="project-card-summary">{project.purpose ?? cardSummary}</p>
        <p className="project-card-role">{project.role}</p>
        <div className="tool-list" aria-label={`${project.title} focus tags`}>
          {project.industryTags.slice(0, compact ? 3 : 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-card-links">
          {showSecondaryDetail ? (
            <Link className="project-secondary-link" href={detailHref}>
              <span>{detailLabel}</span>
              <ArrowRight size={16} />
            </Link>
          ) : null}
          {relatedCaseStudy ? (
            <Link className="project-secondary-link" href={relatedCaseStudy.href}>
              <span>Related case study</span>
              <ArrowRight size={16} />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="project-card-preview">
        <ProjectVisual project={project} />
        {primaryAction.external ? (
          <a
            className="project-card-overlay"
            href={primaryAction.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${primaryAction.label} for ${project.title}`}
          >
            {overlayContent}
          </a>
        ) : (
          <Link
            className="project-card-overlay"
            href={primaryAction.href}
            aria-label={`${primaryAction.label} for ${project.title}`}
          >
            {overlayContent}
          </Link>
        )}
      </div>
    </article>
  );
}

function getProjectCardSummary(project: Project) {
  if (project.slug === "cabarrus-futurescape") {
    return "Parcel intelligence, development hotspots, school-capacity context, constraints, infrastructure readiness, environmental signals, and first-pass development pressure ranking.";
  }

  if (project.slug === "automap") {
    return "Turns plain-language GIS requests into validated ArcGIS REST workflows, customizable map recipes, refinement steps, and analysis reports.";
  }

  if (project.slug === "cabarrus-gis-hub") {
    return "Reorganized public GIS data access around user intent, improving navigation, metadata, hosted item organization, and public data discoverability.";
  }

  return project.summary;
}
