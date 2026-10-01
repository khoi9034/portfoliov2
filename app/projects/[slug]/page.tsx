import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileText, Layers3, ListChecks } from "lucide-react";
import { CaseStudySection } from "@/components/CaseStudySection";
import {
  ArchitectureFlow,
  AutoMapInterfaceVisual,
  AutoMapWorkflowVisual,
  HubBeforeAfterVisual,
  HubNavigationVisual,
  InterfaceConceptGrid,
} from "@/components/DashboardVisuals";
import { ProjectHero } from "@/components/ProjectHero";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Khoi Nguyen GIS Portfolio"
    };
  }

  const descriptions: Record<string, string> = {
    "cabarrus-futurescape":
      "Cabarrus Insights is a county-scale planning intelligence prototype focused on parcels, observed development activity, constraints, infrastructure context, governed data, and decision support.",
    automap:
      "AutoMap is a county GIS request engine with a reliable portfolio demo and an optional live map-composer workbench for backend-connected workflows.",
    "cabarrus-gis-hub":
      "Cabarrus County GIS Hub case study: professional internship work in ArcGIS Hub, ArcGIS Online, Enterprise/Portal, hosted layers, metadata, sharing settings, and public GIS workflows."
  };

  const description = descriptions[project.slug] ?? project.summary;

  return {
    title: `${project.title} | Khoi Nguyen GIS Portfolio`,
    description,
    openGraph: {
      title: `${project.title} | Khoi Nguyen GIS Portfolio`,
      description,
      images: ["/og-gis-portfolio.svg"]
    },
    twitter: {
      title: `${project.title} | Khoi Nguyen GIS Portfolio`,
      description,
      images: ["/og-gis-portfolio.svg"]
    }
  };
}

function BulletedList({ items }: { items: string[] }) {
  return (
    <ul className="detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const cfsValueCards = [
  {
    title: "What is it?",
    text: "A live personal prototype for county-scale planning intelligence and parcel-centered decision support."
  },
  {
    title: "Who is it for?",
    text: "GIS managers, planners, analysts, and public-sector teams reviewing growth pressure and development context."
  },
  {
    title: "What decisions does it support?",
    text: "Parcel review, hotspot identification, constraint review, infrastructure readiness triage, and executive planning summaries."
  },
  {
    title: "What data does it connect?",
    text: "Parcels, permits, addresses, zoning, flood review, school context, infrastructure proxies, and assessed-value context."
  }
];

const cabarrusInsightsWalkthrough = [
  {
    eyebrow: "Countywide exploration",
    title: "Start with location, activity, and infrastructure context",
    description:
      "The Analyst workspace brings live GIS layers, parcel search, map controls, and an intelligence panel into one review surface. Users can move from a countywide pattern to a specific area without switching between disconnected maps.",
    views: [
      {
        src: "/projects/cabarrus-insights/countywide-development-hotspots.png",
        alt: "Cabarrus Insights countywide map showing clustered development hotspots and the intelligence workspace",
        title: "Development activity map",
        text: "Clustered permit activity highlights where observed development records are concentrated. Layer controls let reviewers change the permit segment, time range, and display mode before selecting a map feature.",
        value:
          "Useful for locating areas that deserve closer review; the clusters summarize observed records and are not forecasts."
      },
      {
        src: "/projects/cabarrus-insights/countywide-infrastructure-context.png",
        alt: "Cabarrus Insights countywide map showing sewer proximity and infrastructure context",
        title: "Infrastructure readiness context",
        text: "The same map can emphasize sewer proximity, subbasin context, and other infrastructure-related overlays while clearly identifying unavailable official layers.",
        value:
          "Useful for asking better infrastructure follow-up questions without presenting proxy data as verified capacity."
      }
    ]
  },
  {
    eyebrow: "Management insights",
    title: "Translate GIS evidence into review-ready summaries",
    description:
      "Management views organize countywide indicators into focused planning and economic narratives. Each view keeps the analysis period, source context, and limitations visible so summary metrics remain connected to their evidence.",
    views: [
      {
        src: "/projects/cabarrus-insights/planning-insights.png",
        alt: "Cabarrus Insights planning dashboard with development hotspots, flood review, and school assignment context",
        title: "Planning Insights",
        text: "This view combines hotspot geography with flood-review counts and school assignment context. Selecting a hotspot opens its current observed evidence for follow-up in the Analyst workspace.",
        value:
          "Useful for first-pass growth review across development activity, constraints, and public-service context."
      },
      {
        src: "/projects/cabarrus-insights/economic-insights.png",
        alt: "Cabarrus Insights economic dashboard with development-linked activity trends and parcel review indicators",
        title: "Economic Insights",
        text: "A period-based activity trend sits above parcel and assessed-value indicators, including the share of parcels flagged for deeper economic review.",
        value:
          "Useful for identifying where parcel-level economic context may warrant investigation, not for making valuation or investment conclusions."
      }
    ]
  },
  {
    eyebrow: "Signals and model transparency",
    title: "Show the evidence behind attention signals",
    description:
      "The system separates operational indicators from historical model research. This keeps observed activity, preliminary capacity watches, relative ranking bands, and held-out evaluation evidence from being confused with official forecasts.",
    views: [
      {
        src: "/projects/cabarrus-insights/indicator-center.png",
        alt: "Cabarrus Insights indicator center showing permit activity and school utilization growth-pressure review signals",
        title: "Indicator Center",
        text: "The readiness strip surfaces observed permit activity and school-utilization-plus-permit context with coverage labels and plain-language explanations. Supporting panels break activity down by year, type, segment, and jurisdiction.",
        value:
          "Useful for prioritizing follow-up while preserving the caveat that school signals are preliminary planning context, not enrollment forecasts."
      },
      {
        src: "/projects/cabarrus-insights/development-signals.png",
        alt: "Cabarrus Insights development signals view showing relative historical bands, held-out results, and documented model inputs",
        title: "Development Signals",
        text: "The Model Lab documents relative historical signal bands, held-out aggregate results, and the parcel, planning, transportation, utility-proxy, and value inputs used in research variants.",
        value:
          "Useful for evaluating whether a ranking approach adds review value while making clear that bands are relative ranks, not parcel probabilities."
      }
    ]
  },
  {
    eyebrow: "Governed master data",
    title: "Make the source data inspectable and reusable",
    description:
      "Cabarrus Insights includes a governed data workflow rather than treating the map as the only product. Analysts can understand available datasets, choose approved fields, filter records, preview results, and export a documented extract.",
    views: [
      {
        src: "/projects/cabarrus-insights/master-data-catalog.png",
        alt: "Cabarrus Insights master data catalog listing governed parcels, permits, addresses, zoning, flood, and school datasets",
        title: "Dataset catalog",
        text: "The catalog presents curated parcel, permit, address, zoning, flood, and school datasets with geometry type, record count, source, update date, and readiness status.",
        value:
          "Useful for data discovery and governance because users can see what exists and where it came from before starting analysis."
      },
      {
        src: "/projects/cabarrus-insights/permit-data-preview.png",
        alt: "Cabarrus Insights permit dataset preview with field selection, filters, tabular records, and CSV or XLSX exports",
        title: "Filter, preview, and export",
        text: "The permit workflow lets users choose allowed fields, add filters, inspect matching records, control row previews, and export CSV or XLSX files.",
        value:
          "Useful for producing repeatable, reviewable extracts without manually rebuilding the same dataset for each request."
      }
    ]
  }
];

const cfsRankingExplanation = [
  "Documented research variants compare parcel history, observed permits, zoning, transportation, utility-proxy, and tax/value context to test relative development signals.",
  "The bands are relative historical ranks and the held-out results are aggregate research metrics. They are not parcel probabilities, final approvals, or deterministic predictions."
];

const automapValueCards = [
  {
    title: "What AutoMap Does",
    text: "Turns plain-language GIS requests into structured, reviewable map workflows."
  },
  {
    title: "Prompt-to-Map Workflow",
    text: "Connects user wording to a REST layer registry, approved source matching, recipe generation, and refinement."
  },
  {
    title: "Report Generation",
    text: "Produces analysis summaries, grouped statistics, warnings, and report history for review."
  },
  {
    title: "Customization Layer",
    text: "Supports safer customization of map outputs while keeping sources, limits, and assumptions visible."
  }
];

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="page-shell detail-page">
      <ProjectHero project={project} />

      {project.slug === "cabarrus-futurescape" ? (
        <section className="cfs-detail-primer" aria-labelledby="cfs-primer-title">
          <div className="cfs-primer-copy">
            <p className="eyebrow">Live prototype orientation</p>
            <h2 id="cfs-primer-title">What Cabarrus Insights Does</h2>
            <p>
              Cabarrus Insights helps users review parcel context, identify
              development hotspots, surface planning constraints, track
              infrastructure and school-capacity signals, and organize growth
              intelligence before development pressure becomes harder to
              manage.
            </p>
            <p>
              Live personal prototype. Not an official county system.
            </p>
          </div>

          <div className="cfs-value-grid" aria-label="Cabarrus Insights product value">
            {cfsValueCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

        </section>
      ) : null}

      {project.slug === "cabarrus-futurescape" ? (
        <section className="insights-product-tour" aria-labelledby="insights-tour-title">
          <header className="section-header centered-section-header">
            <p className="eyebrow">Real application walkthrough</p>
            <h2 id="insights-tour-title">Inside Cabarrus Insights</h2>
            <p>
              These live prototype views show how the platform moves from
              countywide exploration to management insights, transparent
              analytical signals, and governed data extracts.
            </p>
          </header>

          <div className="insights-tour-list">
            {cabarrusInsightsWalkthrough.map((section) => (
              <article className="insights-tour-section" key={section.title}>
                <div className="insights-tour-heading">
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
                <div className="insights-view-grid">
                  {section.views.map((view) => (
                    <figure className="insights-view" key={view.title}>
                      <a
                        aria-label={`Open full-size ${view.title} screenshot`}
                        className="insights-view-image"
                        href={view.src}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          alt={view.alt}
                          fill
                          sizes="(max-width: 860px) 100vw, 560px"
                          src={view.src}
                        />
                      </a>
                      <figcaption>
                        <span>Live prototype interface</span>
                        <h4>{view.title}</h4>
                        <p>{view.text}</p>
                        <p className="insights-view-value">
                          <strong>Why it is useful:</strong> {view.value}
                        </p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {project.slug === "automap" ? (
        <section className="automap-detail-primer" aria-labelledby="automap-primer-title">
          <div className="cfs-primer-copy">
            <p className="eyebrow">GIS automation engine</p>
            <h2 id="automap-primer-title">What AutoMap Does</h2>
            <p>
              AutoMap is a county GIS request engine that converts
              plain-English mapping requests into draft GIS previews, workflow
              interpretation, QA notes, and export-ready map concepts. The
              portfolio demo is static/cached for reliable review, while the
              live workbench demonstrates backend-connected workflows when
              services are available.
            </p>
          </div>

          <div className="cfs-value-grid" aria-label="AutoMap workflow value">
            {automapValueCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="detail-meta-grid" aria-label="Project details">
        <article>
          <span>Role</span>
          <strong>{project.role}</strong>
        </article>
        <article>
          <span>Category</span>
          <strong>{project.category}</strong>
        </article>
        <article>
          <span>Status</span>
          <strong>{project.status}</strong>
        </article>
      </section>

      {project.relatedCaseStudies?.length ? (
        <section className="related-link-panel" aria-label="Related case studies">
          <div>
            <p className="eyebrow">Related case studies</p>
            <h2>Problem framing and analytical context</h2>
          </div>
          <div className="related-link-list">
            {project.relatedCaseStudies.map((study) => (
              <Link className="text-link" href={study.href} key={study.href}>
                <span>{study.title}</span>
                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <div className="case-study-layout" id="case-study">
        <CaseStudySection eyebrow="Case study" title="What it is">
          <p>{project.caseStudy.whatItIs}</p>
        </CaseStudySection>

        <CaseStudySection title="Problem">
          <p>{project.caseStudy.problem}</p>
        </CaseStudySection>

        {project.architecture ? (
          <CaseStudySection
            title={
              project.slug === "cabarrus-futurescape"
                ? "Planning Intelligence Workflow"
                : "System concept"
            }
          >
            <ArchitectureFlow items={project.architecture} />
          </CaseStudySection>
        ) : null}

        {project.workflow ? (
          <CaseStudySection
            title={project.slug === "automap" ? "Prompt-to-Map Workflow" : "Workflow"}
          >
            <AutoMapWorkflowVisual workflow={project.workflow} />
            <AutoMapInterfaceVisual />
          </CaseStudySection>
        ) : null}

        {project.informationArchitecture ? (
          <CaseStudySection title="Information architecture">
            <HubBeforeAfterVisual items={project.informationArchitecture} />
            <HubNavigationVisual items={project.informationArchitecture} />
          </CaseStudySection>
        ) : null}

        {project.coreModules ? (
          <CaseStudySection
            title={project.slug === "cabarrus-futurescape" ? "Key Modules" : "Core modules"}
          >
            <div className="module-grid">
              {project.coreModules.map((module) => (
                <article key={module.title}>
                  <Layers3 size={20} />
                  <h3>{module.title}</h3>
                  <p>{module.description}</p>
                </article>
              ))}
            </div>
          </CaseStudySection>
        ) : null}

        {project.slug === "cabarrus-futurescape" ? (
          <CaseStudySection title="First-Pass Development Pressure Ranking">
            <BulletedList items={cfsRankingExplanation} />
          </CaseStudySection>
        ) : null}

        {project.slug === "automap" ? (
          <>
            <CaseStudySection title="Report Generation">
              <p>
                AutoMap reports are designed to make GIS automation reviewable:
                they summarize selected layers, grouped statistics, warnings,
                limitations, refinement context, and report history before a
                workflow is treated as reusable.
              </p>
            </CaseStudySection>
            <CaseStudySection title="Customization Layer">
              <p>
                The customization layer gives users a controlled way to adjust
                map outputs while keeping approved source matching, REST
                metadata validation, and recipe assumptions visible.
              </p>
            </CaseStudySection>
          </>
        ) : null}

        <CaseStudySection title="Approach">
          <BulletedList items={project.caseStudy.approach} />
        </CaseStudySection>

        <CaseStudySection title="System / workflow">
          <BulletedList items={project.caseStudy.system} />
        </CaseStudySection>

        {project.methods ? (
          <CaseStudySection
            title={project.slug === "cabarrus-futurescape" ? "Data Signals" : "Data / methods"}
          >
            <div className="method-grid">
              {project.methods.map((method) => (
                <span key={method}>{method}</span>
              ))}
            </div>
          </CaseStudySection>
        ) : null}

        {project.capabilities ? (
          <CaseStudySection title="Capabilities">
            <div className="method-grid">
              {project.capabilities.map((capability) => (
                <span key={capability}>{capability}</span>
              ))}
            </div>
          </CaseStudySection>
        ) : null}

        {project.technicalDetails ? (
          <CaseStudySection title="Technical details">
            <div className="technical-grid">
              {project.technicalDetails.map((detail) => (
                <code key={detail}>{detail}</code>
              ))}
            </div>
          </CaseStudySection>
        ) : null}

        {project.enterpriseSkills ? (
          <CaseStudySection title="Enterprise GIS skills demonstrated">
            <div className="method-grid">
              {project.enterpriseSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </CaseStudySection>
        ) : null}

        {project.interfaceConcepts ? (
          <CaseStudySection title="UI showcase">
            <InterfaceConceptGrid concepts={project.interfaceConcepts} />
          </CaseStudySection>
        ) : null}

        <section className="outcome-grid">
          <article>
            <FileText size={20} />
            <h2>Outputs</h2>
            <BulletedList items={project.caseStudy.outputs} />
          </article>
          <article>
            <ArrowRight size={20} />
            <h2>{project.slug === "cabarrus-futurescape" ? "Product Value" : "Why it matters"}</h2>
            <p>{project.caseStudy.whyItMatters}</p>
          </article>
          <article>
            <ListChecks size={20} />
            <h2>
              {project.slug === "cabarrus-futurescape"
                ? "Current Limitations / Next Steps"
                : "Next steps"}
            </h2>
            <BulletedList items={project.caseStudy.nextSteps} />
          </article>
        </section>
      </div>

      <section className="contact-cta">
        <div>
          <p className="eyebrow">Continue exploring</p>
          <h2>See how this fits into the full GIS portfolio.</h2>
        </div>
        <div className="contact-actions">
          <Link className="button primary" href="/projects">
            All Projects
          </Link>
          <Link className="button secondary" href="/experience">
            Experience
          </Link>
        </div>
      </section>
    </main>
  );
}
