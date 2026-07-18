import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, FileText, Layers3, ListChecks } from "lucide-react";
import { CaseStudySection } from "@/components/CaseStudySection";
import {
  ArchitectureFlow,
  AutoMapInterfaceVisual,
  AutoMapWorkflowVisual,
  CFSDataPipeline,
  CFSIntelligencePanels,
  CFSWhatItDoesGrid,
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
      "Cabarrus FutureScape is a county-scale planning intelligence and digital twin prototype focused on parcels, constraints, development activity, infrastructure signals, and executive planning support.",
    automap:
      "AutoMap is a GIS automation engine for turning plain-language map requests into verified ArcGIS REST workflows, map recipes, and analysis reports.",
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
    text: "Parcels, permits, zoning, school-capacity context, flood/environmental constraints, infrastructure signals, and remote-sensing indicators."
  }
];

const cfsRankingExplanation = [
  "The first model uses permit history, zoning-change signals, flood constraints, utility/infrastructure context, and other parcel-level factors to rank areas by relative development likelihood.",
  "The purpose is decision support and prioritization, not final approval or deterministic prediction."
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
            <h2 id="cfs-primer-title">What CFS Does</h2>
            <p>
              CFS is designed to help users review parcel context, identify
              development hotspots, surface planning constraints, track
              infrastructure and school-capacity signals, and organize growth
              intelligence before development pressure becomes harder to
              manage.
            </p>
            <p>
              Live personal prototype. Not an official county system.
            </p>
          </div>

          <div className="cfs-value-grid" aria-label="Cabarrus FutureScape product value">
            {cfsValueCards.map((card) => (
              <article key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

          <CFSWhatItDoesGrid />

          <CFSIntelligencePanels />

          {project.architecture ? (
            <CFSDataPipeline items={project.architecture} />
          ) : null}
        </section>
      ) : null}

      {project.slug === "automap" ? (
        <section className="automap-detail-primer" aria-labelledby="automap-primer-title">
          <div className="cfs-primer-copy">
            <p className="eyebrow">GIS automation engine</p>
            <h2 id="automap-primer-title">What AutoMap Does</h2>
            <p>
              AutoMap turns plain-language GIS requests into reviewable map
              workflows by connecting user intent, ArcGIS REST layer metadata,
              source validation, map recipes, customization options, and
              analysis report generation.
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
