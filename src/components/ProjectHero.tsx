import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import type { Project } from "@/data/projects";
import { FutureScapeShowcase } from "@/components/DashboardVisuals";
import { ProjectVisual } from "@/components/ProjectVisual";
import { cfsPrototypeUrl } from "@/data/profile";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const isCabarrusFutureScape = project.slug === "cabarrus-futurescape";

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
        {isCabarrusFutureScape ? (
          <div className="local-prototype-callout">
            <a className="button primary large-action" href={cfsPrototypeUrl}>
              View CFS
            </a>
            <span>Local prototype link for now. Public live link coming later.</span>
          </div>
        ) : null}
        <div className="project-hero-actions">
          <a
            className={`button ${isCabarrusFutureScape ? "secondary" : "primary"}`}
            href="#case-study"
          >
            <FileText size={17} />
            <span>Read Case Study</span>
          </a>
          <Link
            className={`button ${isCabarrusFutureScape ? "ghost" : "secondary"}`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
      {isCabarrusFutureScape ? (
        <FutureScapeShowcase />
      ) : (
        <ProjectVisual project={project} />
      )}
    </section>
  );
}
