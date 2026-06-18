import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, FileText, MapPinned } from "lucide-react";
import { FutureScapeShowcase } from "@/components/DashboardVisuals";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { cfsPrototypeUrl } from "@/data/profile";
import { getProjectBySlug, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Khoi Nguyen GIS Portfolio",
  description:
    "Project index for Khoi Nguyen, focused on Cabarrus FutureScape, enterprise GIS infrastructure, and automation systems, with UNC GIS research linked separately.",
  openGraph: {
    title: "Projects | Khoi Nguyen GIS Portfolio",
    description:
      "Cabarrus FutureScape, AutoMap, and Cabarrus GIS Hub project work, with UNC GIS research separated onto its own page.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "Projects | Khoi Nguyen GIS Portfolio",
    description:
      "Project index for enterprise GIS, planning intelligence, automation, and applied spatial analysis.",
    images: ["/og-gis-portfolio.svg"]
  }
};

const cfs = getProjectBySlug("cabarrus-futurescape");
const hub = getProjectBySlug("cabarrus-gis-hub");
const automationProjects = projects.filter(
  (project) => project.category === "Automation Systems"
);
const professionalProjects = [hub, ...automationProjects].filter(Boolean);

export default function ProjectsPage() {
  return (
    <main className="page-shell projects-page">
      <section className="page-hero projects-intro">
        <p className="eyebrow">Project system</p>
        <h1>Enterprise GIS systems, public data infrastructure, and automation.</h1>
        <p>
          The portfolio is organized around real professional signals: one
          flagship planning intelligence system, enterprise GIS infrastructure,
          and automation systems. UNC Chapel Hill research lives on a separate
          research page.
        </p>
      </section>

      {cfs ? (
        <section className="section-shell project-category" id="cabarrus-futurescape">
          <SectionHeader
            eyebrow="Flagship Systems"
            title="Cabarrus FutureScape"
            description="The primary system in the portfolio: a county-scale digital twin and planning intelligence prototype."
          />
          <article className="projects-cfs-spotlight">
            <div className="projects-cfs-copy">
              <p className="eyebrow">{cfs.subtitle}</p>
              <h2>County-scale parcel intelligence for planning review.</h2>
              <div className="status-banner">{cfs.status}</div>
              <p>
                Cabarrus FutureScape is a county-scale digital twin prototype
                that turns parcel, zoning, development, infrastructure,
                environmental, and constraint data into planning intelligence.
                The system is designed to help review parcel context, identify
                growth pressure, surface constraints, organize infrastructure
                readiness signals, and support executive-level planning
                summaries.
              </p>
              <div className="method-grid" aria-label="Cabarrus FutureScape modules">
                {[
                  "Parcel intelligence",
                  "Growth pressure",
                  "Constraint review",
                  "Infrastructure awareness",
                  "Environmental signals",
                  "Executive reporting"
                ].map((module) => (
                  <span key={module}>{module}</span>
                ))}
              </div>
              <div className="projects-cfs-actions">
                <a className="button primary large-action" href={cfsPrototypeUrl}>
                  <ExternalLink size={18} />
                  <span>View CFS</span>
                </a>
                <Link className="button secondary" href="/projects/cabarrus-futurescape">
                  <FileText size={18} />
                  <span>Read Case Study</span>
                </Link>
              </div>
              <p className="local-link-note">
                Local prototype link for now. Public live link coming later.
              </p>
            </div>
            <FutureScapeShowcase />
          </article>
        </section>
      ) : null}

      <section className="section-shell project-category">
        <SectionHeader
          eyebrow="Enterprise GIS / Automation"
          title="Public GIS infrastructure and automation systems"
          description="Professional and technical project work focused on ArcGIS Hub, hosted data access, REST metadata, safe layer selection, map recipes, and reviewable outputs."
        />
        <div className="project-grid balanced-grid">
          {professionalProjects.map((project) => (
            project ? (
              <div key={project.slug}>
                <ProjectCard project={project} />
              </div>
            ) : null
          ))}
        </div>
      </section>

      <section className="section-shell projects-research-cta">
        <div>
          <p className="eyebrow">Research archive</p>
          <h2>UNC Chapel Hill GIS research lives on its own page.</h2>
          <p>
            Applied GIS research, spatial statistics, site suitability, and
            accessibility analysis are separated from the professional project
            index for a cleaner portfolio hierarchy.
          </p>
        </div>
        <Link className="button secondary" href="/research">
          <MapPinned size={18} />
          <span>View UNC Chapel Hill GIS Research</span>
        </Link>
      </section>
    </main>
  );
}
