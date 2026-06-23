import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { getProjectLaunch } from "@/data/links";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const launch = getProjectLaunch(project.slug);

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
        {launch ? (
          <div className="live-prototype-callout">
            <a
              className="button primary large-action launch-button"
              href={launch.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
              <span>{launch.label}</span>
            </a>
            <span>{launch.status}</span>
          </div>
        ) : null}
        <div className="project-hero-actions">
          <a
            className={`button ${launch ? "secondary" : "primary"}`}
            href="#case-study"
          >
            <FileText size={17} />
            <span>Technical Case Study</span>
          </a>
          <Link className={`button ${launch ? "ghost" : "secondary"}`} href="/projects">
            Back to Projects
          </Link>
        </div>
      </div>
      <ProjectVisual project={project} />
    </section>
  );
}
