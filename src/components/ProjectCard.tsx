import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
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
        <Link className="text-link" href={`/projects/${project.slug}`}>
          <span>View case study</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
