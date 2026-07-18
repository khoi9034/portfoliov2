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
        <h1>Follow a Decision Path</h1>
        <p>
          Explore how spatial evidence, infrastructure context, and analytical
          reasoning were used to examine planning and operational decisions.
        </p>
      </section>

      <CaseStudyFilters studies={caseStudies} />
    </main>
  );
}
