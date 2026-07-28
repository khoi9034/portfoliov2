import type { Metadata } from "next";
import { ProjectFilters } from "@/components/ProjectFilters";
import {
  getProjectBySlug,
  type ProfessionalTrack,
  type Project
} from "@/data/projects";

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

type ProjectsPageProps = {
  searchParams: Promise<{ track?: string }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const track = (await searchParams).track;
  const initialTrack: ProfessionalTrack =
    track === "utilities" ? "utilities" : "government";

  return (
    <main className="page-shell projects-page">
      <section className="projects-intro-compact" aria-labelledby="projects-title">
        <p className="eyebrow">Project Portfolio</p>
        <h1 id="projects-title">Selected Projects</h1>
        <p>
          GIS systems and analytical tools for public planning,
          infrastructure, and operational decision-making.
        </p>
      </section>

      <ProjectFilters initialTrack={initialTrack} projects={mainProjects} />
    </main>
  );
}
