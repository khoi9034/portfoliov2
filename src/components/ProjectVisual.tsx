import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
};

export function ProjectVisual({ project }: ProjectVisualProps) {
  if (project.visual.image) {
    return (
      <div className="project-image">
        <Image
          src={project.visual.image}
          alt={project.visual.alt}
          fill
          sizes="(max-width: 768px) 100vw, 520px"
        />
        {project.visual.caption ? (
          <span className="live-preview-caption">{project.visual.caption}</span>
        ) : null}
      </div>
    );
  }

  return (
    <div className={`project-mockup ${project.visual.variant}`}>
      <div className="mockup-header">
        <span />
        <span />
        <span />
      </div>
      <div className="mockup-body">
        <div className="mock-map">
          <div className="mock-parcel one" />
          <div className="mock-parcel two" />
          <div className="mock-parcel three" />
          <div className="mock-parcel four" />
          <div className="mock-flow" />
        </div>
        <div className="mock-panel">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="mockup-caption">
        {project.visual.variant === "automap"
          ? "Prompt -> verified layers -> review report"
          : project.visual.variant === "cabarrus-hub"
            ? "User intent -> data category -> hosted item"
            : "Parcel context -> constraints -> planning signal"}
      </div>
    </div>
  );
}
