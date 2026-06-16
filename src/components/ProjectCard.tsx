import { ArrowRight, BadgeCheck } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectVisual } from "@/components/ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
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
          {project.tools.slice(0, 7).map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
        <a className="text-link" href={`#case-${project.id}`}>
          <span>View case study</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </article>
  );
}
