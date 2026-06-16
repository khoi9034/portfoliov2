import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projectCategories, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Khoi Nguyen GIS Portfolio",
  description:
    "Project index for Khoi Nguyen, organized around flagship GIS systems, enterprise GIS infrastructure, and applied GIS research.",
  openGraph: {
    title: "Projects | Khoi Nguyen GIS Portfolio",
    description:
      "Cabarrus FutureScape, AutoMap, Cabarrus GIS Hub, and applied GIS research projects."
  }
};

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <section className="page-hero compact-hero">
        <p className="eyebrow">Project system</p>
        <h1>Enterprise GIS systems, public data infrastructure, and applied spatial analysis.</h1>
        <p>
          The work is organized by professional signal: flagship systems first,
          public GIS infrastructure next, and academic analysis projects as
          supporting evidence.
        </p>
      </section>

      {projectCategories.map((category) => {
        const categoryProjects = projects.filter(
          (project) => project.category === category
        );

        return (
          <section className="section-shell project-category" key={category}>
            <SectionHeader
              eyebrow="Portfolio category"
              title={category}
              description={
                category === "Flagship Systems"
                  ? "Systems-level projects that show product thinking, GIS architecture, automation, and planning intelligence."
                  : category === "Enterprise GIS / Public Infrastructure"
                    ? "Professional GIS infrastructure work focused on public data access, metadata, ArcGIS Hub, and user-centered navigation."
                    : "Applied analysis projects that demonstrate GIS research methods, spatial statistics, accessibility, and suitability modeling."
              }
            />
            <div className="project-grid">
              {categoryProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
