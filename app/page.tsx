import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  Layers3,
  Network
} from "lucide-react";

export const metadata: Metadata = {
  title: "Khoi Nguyen | Enterprise GIS & Spatial Intelligence",
  description:
    "Portfolio of Khoi Nguyen featuring enterprise GIS, planning intelligence, government technology, utility infrastructure, spatial analytics, projects, and consulting case studies.",
  openGraph: {
    title: "Khoi Nguyen | Enterprise GIS & Spatial Intelligence",
    description:
      "Enterprise GIS, planning intelligence, government technology, utility infrastructure, spatial analytics, projects, and consulting case studies by Khoi Nguyen.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "Khoi Nguyen | Enterprise GIS & Spatial Intelligence",
    description:
      "Enterprise GIS, planning intelligence, utility infrastructure, spatial analytics, projects, and consulting case studies.",
    images: ["/og-gis-portfolio.svg"]
  }
};

const gatewayOptions = [
  {
    index: "01",
    title: "Explore Projects",
    description:
      "Systems, applications, and GIS workflows built for government technology, planning intelligence, utilities, and infrastructure.",
    href: "/projects",
    tone: "projects",
    Icon: Layers3
  },
  {
    index: "02",
    title: "Explore Case Studies",
    description:
      "Consulting-style analyses examining planning, infrastructure, real estate, and data-modernization decisions.",
    href: "/case-studies",
    tone: "cases",
    Icon: Network
  },
  {
    index: "03",
    title: "View Experience",
    description:
      "Professional experience, enterprise GIS capabilities, applied work, and education.",
    href: "/experience",
    tone: "experience",
    Icon: BriefcaseBusiness
  },
  {
    index: "04",
    title: "Open Resume",
    description:
      "Review or download a concise summary of experience, technical capabilities, education, and selected work.",
    href: "/resume",
    tone: "resume",
    Icon: FileText
  }
];

export default function Home() {
  return (
    <main className="page-shell home-page gateway-home">
      <section className="home-hero gateway-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow">Enterprise GIS / Spatial Intelligence</p>
          <h1 id="home-title">Khoi Nguyen</h1>
          <p className="hero-subtitle">
            I build GIS systems, planning-intelligence tools, and spatial
            decision-support applications for government, infrastructure, and
            operational workflows.
          </p>
        </div>
      </section>

      <section className="portfolio-gateway" aria-labelledby="gateway-title">
        <div className="gateway-heading">
          <p className="eyebrow">Portfolio Gateway</p>
          <h2 id="gateway-title">Choose where to start.</h2>
          <p>
            Fast paths for recruiters reviewing technical builds, consulting
            analysis, professional experience, and resume details.
          </p>
        </div>

        <nav className="gateway-console" aria-label="Portfolio destinations">
          {gatewayOptions.map(({ Icon, ...item }) => (
            <Link
              aria-label={`${item.title}: ${item.description}`}
              className={`gateway-option gateway-${item.tone}`}
              href={item.href}
              key={item.title}
            >
              <span className="gateway-index">{item.index}</span>
              <span className="gateway-icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <span className="gateway-copy">
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </span>
              <span className="gateway-direction" aria-hidden="true">
                <ArrowRight size={18} />
              </span>
              <span className="gateway-motif" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </Link>
          ))}
        </nav>
      </section>

      <section className="home-contact-transition" aria-label="Contact Khoi">
        <p>Have a role or project where spatial intelligence could help?</p>
        <Link href="/contact">
          Contact Khoi
          <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}
