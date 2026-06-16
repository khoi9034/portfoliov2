import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, GitBranch, ListChecks, MapPinned } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import { researchProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "UNC Chapel Hill GIS Research & Applied Spatial Analysis | Khoi Nguyen",
  description:
    "UNC Chapel Hill GIS research and applied spatial analysis projects by Khoi Nguyen, including site suitability, accessibility analysis, demographic clustering, and reproducible GIS methods.",
  openGraph: {
    title: "UNC Chapel Hill GIS Research & Applied Spatial Analysis",
    description:
      "Research brief page for UNC Chapel Hill geography and GIS coursework, spatial analysis, accessibility, LISA, and ArcPy workflows.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "UNC Chapel Hill GIS Research & Applied Spatial Analysis",
    description:
      "Applied GIS research briefs focused on site suitability, accessibility, spatial statistics, and reproducible methods.",
    images: ["/og-gis-portfolio.svg"]
  }
};

const researchContext: Record<
  string,
  {
    program: string;
    question: string;
    workflow: string[];
    methods: string[];
    relevance: string;
  }
> = {
  "anime-retail-site-selection": {
    program: "UNC Chapel Hill Geography / GIS",
    question:
      "How can demographic, transit, commercial, cultural, and competitor indicators be combined into a repeatable framework for anime retail site suitability in Japan?",
    workflow: [
      "Prepared Japan-focused retail, demographic, transit, cultural POI, and competitor inputs.",
      "Applied overlay analysis, buffers, spatial joins, Near Table workflows, projection checks, and schema validation.",
      "Built a weighted suitability model and repeatable ArcPy processing pattern to rank candidate areas."
    ],
    methods: [
      "Anime retail hotspot / site suitability",
      "Japan-focused retail location analysis",
      "Population density",
      "Transit accessibility",
      "Commercial clustering",
      "Cultural points of interest",
      "Competitor locations",
      "Overlay analysis",
      "Buffers",
      "Spatial joins",
      "Near Table workflows",
      "Weighted suitability model",
      "Projection checks",
      "Schema validation",
      "Repeatable ArcPy processing"
    ],
    relevance:
      "Shows how a retail site-selection problem can be translated into a reproducible GIS decision framework for comparing accessibility, demand, competition, and cultural fit."
  },
  "elderly-access-services": {
    program: "UNC Chapel Hill GIS coursework / applied planning analysis",
    question:
      "How well do long-term care facility locations align with Tokyo's elderly population distribution at the ward level?",
    workflow: [
      "Mapped Tokyo elderly population density by ward and overlaid long-term care facility locations.",
      "Used facility overlays, accessibility interpretation, and ArcPy automation to support repeatable outputs.",
      "Framed the results around service equity and applied planning interpretation."
    ],
    methods: [
      "Tokyo elderly population",
      "Long-term care access",
      "Ward-level density",
      "Facility overlays",
      "Service equity",
      "Accessibility interpretation",
      "ArcPy automation"
    ],
    relevance:
      "Connects demographic vulnerability, service locations, and accessibility interpretation to long-term care and public service equity planning."
  },
  "nc-working-age-lisa": {
    program: "UNC Chapel Hill spatial statistics / R analysis",
    question:
      "Where does North Carolina's working-age population show statistically meaningful local clustering patterns?",
    workflow: [
      "Prepared North Carolina demographic and boundary data for spatial statistics in R.",
      "Used LISA / Local Moran's I and local spatial autocorrelation workflows to detect high-high and low-low clustering.",
      "Interpreted demographic clustering patterns for planning and regional analysis communication."
    ],
    methods: [
      "North Carolina working-age population",
      "LISA / Local Moran's I",
      "Spatial autocorrelation",
      "High-high / low-low clusters",
      "Demographic planning interpretation",
      "R workflow"
    ],
    relevance:
      "Demonstrates how local spatial autocorrelation can support regional demographic interpretation beyond a basic statewide choropleth."
  }
};

export default function ResearchPage() {
  return (
    <main className="page-shell research-page">
      <section className="page-hero compact-hero">
        <p className="eyebrow">UNC Chapel Hill research</p>
        <h1>UNC Chapel Hill GIS Research & Applied Spatial Analysis</h1>
        <p>
          These projects were completed through UNC Chapel Hill geography/GIS
          coursework and research, focusing on spatial analysis, accessibility,
          demographic clustering, site suitability, and reproducible GIS
          methods.
        </p>
      </section>

      <section className="research-brief-list" aria-label="Research briefs">
        {researchProjects.map((project) => {
          const context = researchContext[project.slug];

          return (
            <article className="research-brief" key={project.slug}>
              <div className="research-brief-top">
                <div className="research-brief-copy">
                  <p className="eyebrow">{project.subtitle}</p>
                  <h2>{project.title}</h2>
                  <p className="research-context">{context.program}</p>
                  <p>{project.summary}</p>
                </div>

                <div className="research-visual-wrap">
                  <ProjectVisual project={project} />
                  <div className="research-note">
                    <MapPinned size={16} />
                    <span>UNC Chapel Hill applied GIS research / coursework</span>
                  </div>
                </div>
              </div>

              <div className="research-brief-body">
                <section className="research-question-panel">
                  <BookOpen size={18} />
                  <h3>Research question</h3>
                  <p>{context.question}</p>
                </section>

                <section className="research-info-panel">
                  <GitBranch size={18} />
                  <h3>Methods / workflow</h3>
                  <ul className="detail-list">
                    {context.workflow.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="research-info-panel">
                  <ListChecks size={18} />
                  <h3>Outputs</h3>
                  <ul className="detail-list">
                    {project.caseStudy.outputs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="research-relevance-panel">
                  <MapPinned size={18} />
                  <h3>Planning / analytical relevance</h3>
                  <p>{context.relevance}</p>
                </section>
              </div>

              <section className="research-methods-block">
                <h3>Methods and indicators</h3>
                <div className="method-grid" aria-label={`${project.title} methods`}>
                  {context.methods.map((method) => (
                    <span key={method}>{method}</span>
                  ))}
                </div>
              </section>

              <Link className="text-link" href={`/projects/${project.slug}`}>
                <span>Open project detail</span>
                <ArrowRight size={16} />
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
