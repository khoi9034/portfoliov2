import Link from "next/link";
import { ArrowRight, BadgeCheck, ExternalLink } from "lucide-react";
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
  const detailLabel =
    project.slug === "cabarrus-futurescape"
      ? "Read CFS Details"
      : project.slug === "automap"
        ? "Read AutoMap Details"
        : isCabarrusHub
          ? "Read GIS Hub Details"
          : "Read Details";

  return (
    <article className={`project-card ${compact ? "compact" : ""}`}>
      <ProjectVisual project={project} />
      <div className="project-card-content">
        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="project-role">
          <BadgeCheck size={16} />
          <span>{project.role}</span>
        </div>
        <div className="tool-list" aria-label={`${project.title} tools`}>
          {project.tools.slice(0, compact ? 5 : 7).map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <div className="project-card-actions">
          {launch ? (
            <a
              className="button primary launch-button"
              href={launch.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span>{launch.label}</span>
            </a>
          ) : null}
          {openDataHref ? (
            <a
              className="button primary launch-button"
              href={openDataHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span>View Open Data Site</span>
            </a>
          ) : null}
          <Link
            className={launch || isCabarrusHub ? "button secondary" : "text-link"}
            href={`/projects/${project.slug}`}
          >
            <span>{detailLabel}</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
