import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Layers3,
  Mail,
  MapPinned,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";
import { FutureScapeShowcase } from "@/components/DashboardVisuals";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { contact, credibilityStack, systemsBuilt } from "@/data/profile";
import { featuredProjects, getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "Khoi Nguyen | County-Scale GIS Intelligence Systems",
  description:
    "Flagship GIS portfolio for Khoi Nguyen, focused on Cabarrus FutureScape, enterprise GIS, digital twin concepts, Web GIS, ArcPy automation, and planning intelligence.",
  openGraph: {
    title: "Khoi Nguyen | County-Scale GIS Intelligence Systems",
    description:
      "A premium portfolio for enterprise GIS, planning intelligence, and county-scale digital twin prototype work."
  },
  twitter: {
    title: "Khoi Nguyen | County-Scale GIS Intelligence Systems",
    description:
      "Enterprise GIS, digital twin, Web GIS, ArcPy automation, and planning intelligence portfolio."
  }
};

const systemIcons = [Layers3, Workflow, Database];
const cfs = getProjectBySlug("cabarrus-futurescape");
const homepageProjects = featuredProjects.slice(0, 4);

export default function Home() {
  if (!cfs) {
    return null;
  }

  return (
    <main className="page-shell home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Concord, NC / Enterprise GIS / Planning Intelligence</p>
          <h1>Building county-scale GIS intelligence systems for planning, growth, and decision support.</h1>
          <p className="hero-subtitle">
            I combine Enterprise GIS, Web GIS, ArcPy automation, spatial
            modeling, and digital twin concepts to turn fragmented county data
            into decision-ready planning tools.
          </p>
          <div className="hero-actions" aria-label="Homepage actions">
            <Link className="button primary" href="/projects/cabarrus-futurescape">
              <MapPinned size={18} />
              <span>Explore Cabarrus FutureScape</span>
            </Link>
            <Link className="button secondary" href="/projects">
              <Layers3 size={18} />
              <span>View Projects</span>
            </Link>
            <Link className="button ghost" href="/skills">
              <ShieldCheck size={18} />
              <span>View Skills</span>
            </Link>
          </div>
        </div>
        <FutureScapeShowcase />
      </section>

      <section className="flagship-section" aria-labelledby="flagship-title">
        <div className="flagship-copy">
          <p className="eyebrow">Flagship system</p>
          <h2 id="flagship-title">{cfs.title}</h2>
          <p>{cfs.homepageSummary}</p>
          <div className="status-banner">{cfs.status}</div>
          <Link className="text-link" href="/projects/cabarrus-futurescape">
            <span>Open flagship case study</span>
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="flagship-module-grid">
          {cfs.focus.map((item) => (
            <article key={item}>
              <span />
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader
          eyebrow="Systems I build"
          title="From GIS operations to planning intelligence"
          description="The portfolio is organized around systems, not disconnected school-project cards."
        />
        <div className="systems-grid">
          {systemsBuilt.map((system, index) => {
            const Icon = systemIcons[index] ?? Layers3;
            return (
              <CapabilityCard
                icon={Icon}
                key={system.title}
                signal={system.signal}
                summary={system.summary}
                title={system.title}
              />
            );
          })}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeader
          eyebrow="Project previews"
          title="A focused route into the deeper work"
          description="The homepage previews the biggest systems first. Full details live on dedicated project pages."
        />
        <div className="project-grid preview-grid">
          {homepageProjects.map((project) => (
            <ProjectCard compact key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="credibility-strip" aria-label="Technical credibility strip">
        {credibilityStack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="contact-cta">
        <div>
          <p className="eyebrow">Next conversation</p>
          <h2>GIS analyst work with a planning intelligence edge.</h2>
          <p>
            I am targeting GIS, planning analytics, Web GIS, automation, civic
            technology, digital twin, and spatial data roles.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${contact.email}`}>
            <Mail size={18} />
            <span>Contact Me</span>
          </a>
          <Link className="button secondary" href="/resume">
            View Resume
          </Link>
        </div>
      </section>
    </main>
  );
}
