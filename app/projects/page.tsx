import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileText, MapPinned } from "lucide-react";
import { FutureScapeShowcase } from "@/components/DashboardVisuals";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { cfsPrototypeUrl } from "@/data/profile";
import { getProjectBySlug, projects, researchProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Khoi Nguyen GIS Portfolio",
  description:
    "Project index for Khoi Nguyen, organized around Cabarrus FutureScape, enterprise GIS infrastructure, automation systems, and applied GIS research.",
  openGraph: {
    title: "Projects | Khoi Nguyen GIS Portfolio",
    description:
      "Cabarrus FutureScape, AutoMap, Cabarrus GIS Hub, and applied GIS research projects.",
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

export default function ProjectsPage() {
  return (
    <main className="page-shell projects-page">
      <section className="page-hero projects-intro">
        <p className="eyebrow">Project system</p>
        <h1>Enterprise GIS systems, public data infrastructure, and applied spatial analysis.</h1>
        <p>
          The portfolio is organized around real professional signals: one
          flagship planning intelligence system, enterprise GIS infrastructure,
          automation systems, and a separate UNC Chapel Hill research lane.
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
                  <span>Case Study</span>
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

      {hub ? (
        <section className="section-shell project-category">
          <SectionHeader
            eyebrow="Enterprise GIS / Public Infrastructure"
            title="Cabarrus County GIS Hub Redesign"
            description="Professional internship work focused on public GIS data access, metadata, hosted layers, ArcGIS Hub, and user-centered discovery."
          />
          <div className="project-grid balanced-grid single-item-grid">
            <div>
              <ProjectCard project={hub} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell project-category">
        <SectionHeader
          eyebrow="Automation Systems"
          title="GIS request automation and REST layer intelligence"
          description="Automation work focused on request interpretation, REST metadata, safe layer selection, map recipes, and reviewable outputs."
        />
        <div className="project-grid balanced-grid">
          {automationProjects.map((project) => (
            <div
              className={automationProjects.length === 1 ? "span-wide" : undefined}
              key={project.slug}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell project-category research-preview-section">
        <div className="research-preview-heading">
          <SectionHeader
            eyebrow="Applied GIS / Research"
            title="UNC Chapel Hill applied GIS research"
            description="Short previews of academic research work. The dedicated research page holds the full research brief layout."
          />
          <Link className="button secondary" href="/research">
            <MapPinned size={18} />
            <span>View UNC GIS Research</span>
          </Link>
        </div>
        <div className="research-preview-grid">
          {researchProjects.map((project) => (
            <Link className="research-preview-card" href={`/projects/${project.slug}`} key={project.slug}>
              <strong>{project.title}</strong>
              <span>{project.type}</span>
              <p>{project.summary}</p>
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
