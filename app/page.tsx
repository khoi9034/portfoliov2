import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileText,
  Mail,
  MapPinned,
  Radar,
  Satellite,
  ShieldCheck
} from "lucide-react";
import { FutureScapeShowcase } from "@/components/DashboardVisuals";
import { getProjectBySlug } from "@/data/projects";

export const metadata: Metadata = {
  title: "Cabarrus FutureScape | Khoi Nguyen GIS Portfolio",
  description:
    "Cabarrus FutureScape is Khoi Nguyen's flagship county digital twin and planning intelligence prototype for parcel intelligence, growth pressure, constraints, environmental signals, and executive planning support.",
  openGraph: {
    title: "Cabarrus FutureScape | Khoi Nguyen GIS Portfolio",
    description:
      "A premium GIS portfolio homepage focused on Cabarrus FutureScape, a personal county-scale digital twin and planning intelligence prototype."
  },
  twitter: {
    title: "Cabarrus FutureScape | Khoi Nguyen GIS Portfolio",
    description:
      "County digital twin, parcel intelligence, constraints, growth pressure, and planning intelligence prototype."
  }
};

const cfs = getProjectBySlug("cabarrus-futurescape");

const intelligencePanels = [
  {
    title: "Parcel intelligence",
    description: "Parcel selection, land-use context, zoning intersections, and readiness signals.",
    icon: MapPinned
  },
  {
    title: "Constraints",
    description: "Flood exposure, ETJ, zoning, school, boundary, and environmental planning context.",
    icon: ShieldCheck
  },
  {
    title: "Growth pressure",
    description: "Development activity and spatial pressure indicators organized for county review.",
    icon: Radar
  },
  {
    title: "Environmental signals",
    description: "NDVI, surface temperature, land cover, terrain, hydrology, rainfall, and flood signals.",
    icon: Satellite
  },
  {
    title: "Executive insight",
    description: "Planning intelligence summaries and report concepts for decision support.",
    icon: FileText
  },
  {
    title: "Infrastructure awareness",
    description: "Service context and readiness concepts for parcel-level planning review.",
    icon: Building2
  }
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
      <section className="home-hero cfs-hero">
        <div className="hero-copy">
          <p className="eyebrow">Flagship digital twin prototype</p>
          <h1>Cabarrus FutureScape</h1>
          <p className="project-subtitle">
            County Digital Twin & Planning Intelligence Platform
          </p>
          <div className="status-banner">{cfs.status}</div>
          <p className="hero-subtitle">
            A personal prototype and ongoing applied GIS platform focused on
            parcel intelligence, growth pressure, constraints, infrastructure
            awareness, environmental signals, and executive planning support.
          </p>
          <div className="hero-actions" aria-label="Cabarrus FutureScape actions">
            <Link className="button primary" href="/projects#cabarrus-futurescape">
              <MapPinned size={18} />
              <span>Learn More About CFS</span>
            </Link>
            <Link className="button secondary" href="/projects/cabarrus-futurescape">
              <FileText size={18} />
              <span>View CFS Case Study</span>
            </Link>
            <Link className="button ghost" href="/contact">
              <Mail size={18} />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
        <FutureScapeShowcase />
      </section>

      <section className="cfs-intelligence-section" aria-labelledby="cfs-intel-title">
        <div className="section-header">
          <p className="eyebrow">Planning intelligence surface</p>
          <h2 id="cfs-intel-title">One system view for county-scale planning signals.</h2>
          <p>
            The homepage stays focused on FutureScape. Deeper project, skills,
            resume, and research content lives on dedicated pages.
          </p>
        </div>
        <div className="cfs-intel-grid">
          {intelligencePanels.map((panel) => {
            const Icon = panel.icon;

            return (
              <article key={panel.title}>
                <Icon size={20} />
                <div>
                  <h3>{panel.title}</h3>
                  <p>{panel.description}</p>
                </div>
              </article>
            );
          })}
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
