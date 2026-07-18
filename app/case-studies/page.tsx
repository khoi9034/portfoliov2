import type { Metadata } from "next";
import { CaseStudyFilters } from "@/components/CaseStudyFilters";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Consulting Case Studies | Khoi Nguyen",
  description:
    "Consulting-style case studies covering government planning, utilities, infrastructure, location intelligence, GIS, and data-driven decision support.",
  openGraph: {
    title: "Consulting Case Studies | Khoi Nguyen",
    description:
      "Government planning, utilities, infrastructure, location intelligence, GIS, and data-driven decision-support case studies.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "Consulting Case Studies | Khoi Nguyen",
    description:
      "Consulting-style case studies for government planning, utilities, infrastructure, location intelligence, GIS, and decision support.",
    images: ["/og-gis-portfolio.svg"]
  }
};

export default function CaseStudiesPage() {
  return (
    <main className="page-shell case-studies-page">
      <section className="page-hero case-studies-hero">
        <p className="eyebrow">DECISION INTELLIGENCE</p>
        <h1>Consulting Case Studies</h1>
        <p>
          Spatial analysis, planning intelligence, infrastructure review, and
          decision-support work organized by strategic domain.
        </p>
      </section>

      <CaseStudyFilters studies={caseStudies} />
    </main>
  );
}
