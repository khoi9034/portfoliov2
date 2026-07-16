import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { getProjectBySlug, type Project } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Khoi Nguyen GIS Portfolio",
  description:
    "Live GIS product and project index for Khoi Nguyen, focused on Cabarrus FutureScape, AutoMap, enterprise GIS infrastructure, and automation systems.",
  openGraph: {
    title: "Projects | Khoi Nguyen GIS Portfolio",
    description:
      "Launch Cabarrus FutureScape and AutoMap, then review enterprise GIS infrastructure and public data case studies.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "Projects | Khoi Nguyen GIS Portfolio",
    description:
      "Live project index for enterprise GIS, planning intelligence, automation, and public-sector spatial data work.",
    images: ["/og-gis-portfolio.svg"]
  }
};

const mainProjectSlugs = [
  "cabarrus-futurescape",
  "automap",
  "cabarrus-gis-hub"
];

const mainProjects = mainProjectSlugs
  .map((slug) => getProjectBySlug(slug))
  .filter((project): project is Project => Boolean(project));

export default function ProjectsPage() {
  return (
    <main className="page-shell projects-page">
      <section className="page-hero projects-intro">
        <p className="eyebrow">Project system</p>
        <h1>Enterprise GIS systems, public data infrastructure, and automation.</h1>
        <p>
          The portfolio is organized around real professional signals: one
          flagship planning intelligence system, enterprise GIS infrastructure,
          and automation systems. Consulting and research-oriented analysis now
          lives in the case studies section.
        </p>
      </section>

      <section className="section-shell project-category">
        <SectionHeader
          eyebrow="Portfolio systems"
          title="Live products and enterprise GIS work"
          description="Three core portfolio signals shown with similar weight: a county digital twin prototype, a GIS automation engine, and public GIS infrastructure experience."
        />
        <div className="project-grid balanced-grid projects-main-grid">
          {mainProjects.map((project) => (
            <div key={project.slug}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell projects-research-cta">
        <div>
          <p className="eyebrow">Analysis archive</p>
          <h2>Consulting and applied research belong in Case Studies.</h2>
          <p>
            Applied GIS research, spatial analytics, strategy framing, and
            evidence-based recommendations are organized separately from the
            technical product index.
          </p>
        </div>
        <Link className="button secondary" href="/case-studies">
          <BriefcaseBusiness size={18} />
          <span>View Consulting Case Studies</span>
        </Link>
      </section>
    </main>
  );
}
