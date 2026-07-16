import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Consulting Case Studies | Khoi Nguyen",
  description:
    "Consulting-style case studies covering GIS, spatial analytics, real estate screening, public-sector strategy, economic development, and data-driven decision support.",
  openGraph: {
    title: "Consulting Case Studies | Khoi Nguyen",
    description:
      "GIS, spatial analytics, public-sector strategy, real estate screening, and decision-support case studies.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "Consulting Case Studies | Khoi Nguyen",
    description:
      "Consulting-style case studies for GIS, spatial analytics, public-sector strategy, and location intelligence.",
    images: ["/og-gis-portfolio.svg"]
  }
};

export default function CaseStudiesPage() {
  return (
    <main className="page-shell case-studies-page">
      <section className="page-hero case-studies-hero">
        <p className="eyebrow">Consulting portfolio</p>
        <h1>Consulting Case Studies</h1>
        <p>
          Selected analyses showing how I use spatial data, economic reasoning,
          technology, and business judgment to investigate complex problems and
          recommend practical next steps.
        </p>
      </section>

      <section className="case-study-index" aria-label="Consulting case studies">
        {caseStudies.map((study) => (
          <Link className="case-study-card" href={study.href} key={study.slug}>
            <div className="case-study-visual" aria-hidden={!study.image}>
              {study.image ? (
                <Image
                  alt={study.image.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 420px"
                  src={study.image.src}
                />
              ) : (
                <FileText size={32} />
              )}
            </div>
            <div className="case-study-card-body">
              <div className="case-study-card-topline">
                <span>{study.category}</span>
                <span>{study.status}</span>
              </div>
              <h2>{study.title}</h2>
              <p>{study.problem}</p>
              <dl className="case-study-facts">
                <div>
                  <dt>Context</dt>
                  <dd>{study.context}</dd>
                </div>
                <div>
                  <dt>Methods</dt>
                  <dd>{study.methods.slice(0, 4).join(" / ")}</dd>
                </div>
                <div>
                  <dt>Deliverable</dt>
                  <dd>{study.deliverable}</dd>
                </div>
              </dl>
              <span className="case-study-link">
                <span>{study.published ? "Read case study" : "View overview"}</span>
                <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
