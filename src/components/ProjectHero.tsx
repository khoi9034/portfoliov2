import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { getProjectLaunch, projectLinks } from "@/data/links";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const launch = getProjectLaunch(project.slug);
  const isCabarrusHub = project.slug === "cabarrus-gis-hub";
  const openDataHref = isCabarrusHub ? projectLinks.cabarrusOpenData : "";
  const hasExternalPrimary = Boolean(launch || openDataHref);
  const externalPrimary = launch
    ? { href: launch.href, label: launch.label, status: launch.status }
    : openDataHref
      ? {
          href: openDataHref,
          label: "View Open Data Site",
          status: "Public Open Data / GIS Hub link."
        }
      : null;

  return (
    <section className="project-hero">
      <div className="project-hero-copy">
        <Link className="back-link" href="/projects">
          <ArrowLeft size={16} />
          <span>Projects</span>
        </Link>
        <p className="eyebrow">{project.type}</p>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <div className="status-banner">{project.status}</div>
        <p>{project.summary}</p>
        {project.implementationNote ? (
          <p className="implementation-note">{project.implementationNote}</p>
        ) : null}
        {externalPrimary ? (
          <div className="live-prototype-callout">
            <a
              className="button primary large-action launch-button"
              href={externalPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              <span>{externalPrimary.label}</span>
            </a>
            <span>{externalPrimary.status}</span>
          </div>
        ) : null}
        <div className="project-hero-actions">
          {isCabarrusHub && !openDataHref ? (
            <>
              <Link className="button primary" href="/projects">
                Back to Projects
              </Link>
              <Link className="button secondary" href="/contact">
                Contact for Details
              </Link>
            </>
          ) : (
            <>
              <a
                className={`button ${hasExternalPrimary ? "secondary" : "primary"}`}
                href="#case-study"
              >
                <FileText size={17} />
                <span>Technical Case Study</span>
              </a>
              <Link className={`button ${hasExternalPrimary ? "ghost" : "secondary"}`} href="/projects">
                Back to Projects
              </Link>
            </>
          )}
        </div>
      </div>
      <ProjectVisual project={project} />
    </section>
  );
}
