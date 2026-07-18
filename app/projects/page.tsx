import type { Metadata } from "next";
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
        <p className="eyebrow">PROJECT TRACK EXPLORER</p>
        <h1>Choose Your Track</h1>
        <p>Select a professional track and follow the projects connected to it.</p>
      </section>

      <ProjectFilters projects={mainProjects} />
    </main>
  );
}
