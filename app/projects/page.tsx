import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseBusiness } from "lucide-react";
import { ProjectFilters } from "@/components/ProjectFilters";
import { getProjectBySlug, type Project } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Khoi Nguyen",
  description:
    "GIS, planning intelligence, utility infrastructure, web applications, analytics, and operational data projects by Khoi Nguyen.",
  openGraph: {
    title: "Projects | Khoi Nguyen",
    description:
      "GIS, planning intelligence, utility infrastructure, web applications, analytics, and operational data projects by Khoi Nguyen.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "Projects | Khoi Nguyen",
    description:
      "Projects across GIS, planning intelligence, utilities, infrastructure, web applications, analytics, and operational data.",
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
        <h1>Selected Projects</h1>
        <p>
          Applications, analytical systems, and data workflows built for
          planning, infrastructure, GIS, business, and operational decision
          support.
        </p>
      </section>

      <ProjectFilters projects={mainProjects} />

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
