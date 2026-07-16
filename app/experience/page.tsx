import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  GraduationCap,
  Layers3,
  Sparkles
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { education, experience } from "@/data/profile";
import { capabilityGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Experience & Capabilities | Khoi Nguyen",
  description:
    "Professional experience and GIS capabilities for Khoi Nguyen, covering enterprise GIS, public-sector data, planning intelligence, spatial analysis, and applied business problem-solving.",
  openGraph: {
    title: "Experience & Capabilities | Khoi Nguyen",
    description:
      "Enterprise GIS, public-sector data, planning intelligence, spatial analysis, and applied business problem-solving capabilities.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "Experience & Capabilities | Khoi Nguyen",
    description:
      "Experience and capabilities across enterprise GIS, planning intelligence, spatial analysis, and public-sector data workflows.",
    images: ["/og-gis-portfolio.svg"]
  }
};

const professionalBullets = [
  "Worked with ArcGIS Hub, ArcGIS Online, ArcGIS Enterprise / Portal, hosted layers, web maps, metadata, sharing settings, and public data access workflows.",
  "Supported clearer public GIS data discovery through user-centered navigation, dataset organization, and public-facing GIS resource structure.",
  "Reviewed county-scale GIS layers including parcels, addresses, boundaries, building outlines, zoning, and planning data.",
  "Used GIS data management and ArcPy-supported workflows for QA/QC, standardization, and repeatable spatial data review."
];

const selectedAppliedExperience = [
  {
    title: "Cabarrus FutureScape",
    label: "Independent planning intelligence prototype",
    text:
      "County-scale GIS intelligence system for parcel review, growth pressure, constraints, infrastructure context, and executive planning summaries.",
    href: "/projects/cabarrus-futurescape"
  },
  {
    title: "AutoMap",
    label: "Active GIS automation project",
    text:
      "Plain-language map request workflow that connects ArcGIS REST metadata, source validation, map recipes, refinements, and analysis reports.",
    href: "/projects/automap"
  },
  {
    title: "Cabarrus County GIS Hub",
    label: "Professional internship experience",
    text:
      "Public GIS infrastructure work focused on ArcGIS Hub organization, metadata, hosted items, web maps, and user-centered data discovery.",
    href: "/projects/cabarrus-gis-hub"
  },
  {
    title: "Applied GIS Case Studies",
    label: "UNC Chapel Hill research and consulting-style analysis",
    text:
      "Spatial analytics work covering retail location intelligence, long-term care access, urban heat, public-sector strategy, and planning review signals.",
    href: "/case-studies"
  }
];

export default function ExperiencePage() {
  return (
    <main className="page-shell experience-page">
      <section className="page-hero">
        <p className="eyebrow">Experience</p>
        <h1>Experience & Capabilities</h1>
        <p>
          My experience combines enterprise GIS, public-sector data, planning
          intelligence, spatial analysis, and practical business
          problem-solving.
        </p>
      </section>

      <section className="section-shell experience-section">
        <SectionHeader
          eyebrow="Professional Experience"
          title={`${experience.title} - ${experience.organization}`}
          description={`${experience.dates}. ${experience.label}`}
        />
        <article className="experience-feature">
          <div className="experience-feature-header">
            <BriefcaseBusiness size={22} />
            <div>
              <h2>Enterprise GIS and public data work</h2>
              <p>
                Practical county GIS experience across public data access,
                hosted content, metadata, and planning layers.
              </p>
            </div>
          </div>
          <ul className="detail-list">
            {professionalBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-shell experience-section">
        <SectionHeader
          eyebrow="Technical Capabilities"
          title="Capability map"
          description="The portfolio combines enterprise GIS operations, automation, web GIS, spatial modeling, data QA, and planning communication."
        />
        <div className="experience-capability-grid">
          {capabilityGroups.map((group) => (
            <article className="experience-capability-card" key={group.title}>
              <Layers3 size={20} />
              <h2>{group.title}</h2>
              <p>{group.summary}</p>
              <div className="method-grid">
                {group.skills.slice(0, 8).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell experience-section">
        <SectionHeader
          eyebrow="Education"
          title={education.school}
          description="Formal GIS and geography foundation supporting the portfolio's enterprise GIS, spatial analysis, and planning intelligence work."
        />
        <article className="experience-education-card">
          <GraduationCap size={24} />
          <div>
            <h2>Bachelor of Arts in Geography</h2>
            <p>Minor in Geographic Information Science</p>
            <p>Graduated May 2026</p>
            <p>{education.gpa}</p>
            <p>{education.languages.join(" / ")}</p>
          </div>
        </article>
      </section>

      <section className="section-shell experience-section">
        <SectionHeader
          eyebrow="Selected Applied Experience"
          title="Systems, analysis, and decision-support work"
          description="A compact view of the applied work behind the portfolio, separated from the product gallery and resume document."
        />
        <div className="experience-applied-grid">
          {selectedAppliedExperience.map((item) => (
            <Link className="experience-applied-card" href={item.href} key={item.title}>
              <Sparkles size={20} />
              <span>{item.label}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <strong>
                View context
                <ArrowRight size={15} />
              </strong>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
