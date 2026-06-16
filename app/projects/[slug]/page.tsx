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
      "Cabarrus FutureScape case study: a personal county digital twin and planning intelligence prototype for parcel context, growth pressure, constraints, infrastructure signals, and executive planning summaries.",
    automap:
      "AutoMap case study: an active personal project for AI-assisted county map requests, ArcGIS REST metadata, source validation, map recipes, refinements, and analysis reports.",
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
            <p className="eyebrow">Prototype orientation</p>
            <h2 id="cfs-primer-title">What FutureScape is meant to do</h2>
            <p>
              Cabarrus FutureScape is a personal county digital twin prototype
              for turning fragmented parcel, zoning, infrastructure,
              environmental, and constraint data into planning intelligence.
            </p>
            <p>
              The interface is meant to help a reviewer select a parcel,
              understand its planning context, see growth pressure and
              constraints, and produce executive-level summaries without
              jumping between disconnected layers.
            </p>
          </div>

          <CFSWhatItDoesGrid />

          <CFSIntelligencePanels />

          {project.architecture ? (
            <CFSDataPipeline items={project.architecture} />
          ) : null}
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

      <div className="case-study-layout" id="case-study">
        <CaseStudySection eyebrow="Case study" title="What it is">
          <p>{project.caseStudy.whatItIs}</p>
        </CaseStudySection>

        <CaseStudySection title="Problem">
          <p>{project.caseStudy.problem}</p>
        </CaseStudySection>

        {project.architecture ? (
          <CaseStudySection title="System concept">
            <ArchitectureFlow items={project.architecture} />
          </CaseStudySection>
        ) : null}

        {project.workflow ? (
          <CaseStudySection title="Workflow">
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
          <CaseStudySection title="Core modules">
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

        <CaseStudySection title="Approach">
          <BulletedList items={project.caseStudy.approach} />
        </CaseStudySection>

        <CaseStudySection title="System / workflow">
          <BulletedList items={project.caseStudy.system} />
        </CaseStudySection>

        {project.methods ? (
          <CaseStudySection title="Data / methods">
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
            <h2>Why it matters</h2>
            <p>{project.caseStudy.whyItMatters}</p>
          </article>
          <article>
            <ListChecks size={20} />
            <h2>Next steps</h2>
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
          <Link className="button secondary" href="/skills">
            Skills
          </Link>
        </div>
      </section>
    </main>
  );
}
