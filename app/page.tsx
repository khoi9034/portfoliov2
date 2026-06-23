import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Layers3
} from "lucide-react";
import { LiveProductFrame } from "@/components/LiveProductFrame";
import { projectLinks } from "@/data/links";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "Cabarrus FutureScape | Khoi Nguyen GIS Portfolio",
  description:
    "Khoi Nguyen is a GIS analyst focused on Enterprise GIS, Web GIS, planning intelligence, digital twin prototypes, ArcPy automation, and spatial decision-support systems.",
  openGraph: {
    title: "Cabarrus FutureScape | Khoi Nguyen GIS Portfolio",
    description:
      "Launch Cabarrus FutureScape, Khoi Nguyen's live county-scale digital twin and planning intelligence prototype.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "Cabarrus FutureScape | Khoi Nguyen GIS Portfolio",
    description:
      "Live county digital twin, parcel intelligence, constraints, growth pressure, and planning intelligence prototype.",
    images: ["/og-gis-portfolio.svg"]
  }
};

const cfs = getProjectBySlug("cabarrus-futurescape");

const cfsActions = [
  "Parcel context",
  "Growth pressure",
  "Constraints",
  "Executive planning summaries"
];

const additionalWork = [
  {
    title: "AutoMap",
    description: "Launch or review the live GIS automation engine.",
    href: "/projects/automap"
  },
  {
    title: "Projects",
    description: "See deployed systems and professional GIS infrastructure work.",
    href: "/projects"
  },
  {
    title: "Contact",
    description: "Reach out about GIS, planning intelligence, or automation roles.",
    href: "/contact"
  }
];

export default function Home() {
  if (!cfs) {
    return null;
  }

  return (
    <main className="page-shell home-page cfs-home">
      <section className="homepage-intro" aria-label="Professional introduction">
        <p className="eyebrow">Khoi Nguyen</p>
        <strong>GIS Analyst / Enterprise GIS / Planning Intelligence</strong>
        <p>
          Hi, I&apos;m Khoi Nguyen, a GIS analyst focused on Enterprise GIS,
          Web GIS, ArcPy automation, and planning intelligence systems. I build
          spatial workflows and digital twin prototypes that turn county-scale
          data into decision-ready tools for planning, growth, and public-sector
          decision support.
        </p>
      </section>

      <section className="home-hero cfs-hero">
        <div className="hero-copy">
          <p className="eyebrow">Flagship digital twin prototype</p>
          <h1>Cabarrus FutureScape</h1>
          <p className="project-subtitle">
            County Digital Twin & Planning Intelligence Platform
          </p>
          <div className="status-banner">{cfs.status}</div>
          <p className="hero-subtitle">
            Cabarrus FutureScape connects parcel context, development
            activity, school capacity, planning constraints, infrastructure
            readiness, environmental signals, and executive reporting into a
            county-scale decision-support interface.
          </p>
        </div>
        <div className="cfs-preview-stack">
          <LiveProductFrame
            src="/projects/cfs-live-preview.png"
            alt="Live Cabarrus FutureScape deployed prototype interface"
            caption="Live CFS prototype interface"
            href={projectLinks.cfs}
            label="Live Prototype"
            ctaLabel="View CFS"
          />
          <div className="cfs-preview-actions" aria-label="Cabarrus FutureScape supporting links">
            <Link className="button secondary" href="/projects/cabarrus-futurescape">
              <FileText size={18} />
              <span>Read CFS Case Study</span>
            </Link>
            <Link className="button ghost" href="/projects">
              <Layers3 size={18} />
              <span>View All Projects</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cfs-intelligence-section compact-strip-section" aria-labelledby="cfs-intel-title">
        <div className="section-header">
          <p className="eyebrow">Planning intelligence surface</p>
          <h2 id="cfs-intel-title">What FutureScape does.</h2>
          <p>
            A concise signal layer for the flagship prototype. Deeper details
            live in the case study.
          </p>
        </div>
        <div className="cfs-action-strip" aria-label="Cabarrus FutureScape capabilities">
          {cfsActions.map((action) => (
            <span key={action}>{action}</span>
          ))}
        </div>
      </section>

      <section className="additional-work" aria-labelledby="additional-work-title">
        <div>
          <p className="eyebrow">Additional work</p>
          <h2 id="additional-work-title">A few supporting paths.</h2>
        </div>
        <div className="additional-work-links">
          {additionalWork.map((item) => (
            <Link href={item.href} key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
              <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
