import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  FileText,
  Mail
} from "lucide-react";
import { FutureScapeShowcase } from "@/components/DashboardVisuals";
import { cfsPrototypeUrl } from "@/data/profile";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "Cabarrus FutureScape | Khoi Nguyen GIS Portfolio",
  description:
    "Cabarrus FutureScape is Khoi Nguyen's flagship county digital twin and planning intelligence prototype for parcel intelligence, growth pressure, constraints, environmental signals, and executive planning support.",
  openGraph: {
    title: "Cabarrus FutureScape | Khoi Nguyen GIS Portfolio",
    description:
      "A premium GIS portfolio homepage focused on Cabarrus FutureScape, a personal county-scale digital twin and planning intelligence prototype.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "Cabarrus FutureScape | Khoi Nguyen GIS Portfolio",
    description:
      "County digital twin, parcel intelligence, constraints, growth pressure, and planning intelligence prototype.",
    images: ["/og-gis-portfolio.svg"]
  }
};

const cfs = getProjectBySlug("cabarrus-futurescape");

const cfsActions = [
  "Reviews parcel context",
  "Surfaces planning constraints",
  "Tracks growth pressure",
  "Supports executive planning summaries"
];

const additionalWork = [
  {
    title: "AutoMap",
    description: "AI-assisted county map request and ArcGIS REST automation engine.",
    href: "/projects/automap"
  },
  {
    title: "Cabarrus County GIS Hub Redesign",
    description: "Professional internship work in public GIS infrastructure and data discovery.",
    href: "/projects/cabarrus-gis-hub"
  },
  {
    title: "UNC GIS Research",
    description: "Applied GIS research in suitability, accessibility, and spatial statistics.",
    href: "/research"
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
            Cabarrus FutureScape is a county-scale GIS intelligence prototype
            that connects parcel context, growth pressure, planning
            constraints, infrastructure readiness, environmental signals, and
            executive reporting into one decision-support interface.
          </p>
          <div className="hero-actions" aria-label="Cabarrus FutureScape actions">
            <a className="button primary large-action" href={cfsPrototypeUrl}>
              <ExternalLink size={18} />
              <span>View CFS</span>
            </a>
            <Link className="button secondary" href="/projects/cabarrus-futurescape">
              <FileText size={18} />
              <span>Read Case Study</span>
            </Link>
            <Link className="button ghost" href="/contact">
              <Mail size={18} />
              <span>Contact Me</span>
            </Link>
          </div>
          <p className="local-link-note">
            Local prototype link for now. Public live link coming later.
          </p>
        </div>
        <FutureScapeShowcase />
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
