import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug
  }));
}

export async function generateMetadata({
  params
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Khoi Nguyen"
    };
  }

  return {
    title: `${study.title} | Khoi Nguyen`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | Khoi Nguyen`,
      description: study.summary,
      images: ["/og-gis-portfolio.svg"]
    },
    twitter: {
      title: `${study.title} | Khoi Nguyen`,
      description: study.summary,
      images: ["/og-gis-portfolio.svg"]
    }
  };
}

function DetailBlock({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="consulting-detail-block">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function CaseStudyDetailPage({
  params
}: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="page-shell case-study-detail-page">
      <section className="page-hero consulting-detail-hero">
        <Link className="back-link" href="/case-studies">
          <ArrowLeft size={16} />
          <span>Case Studies</span>
        </Link>
        <p className="eyebrow">{study.category}</p>
        <h1>{study.title}</h1>
        <p>{study.summary}</p>
        <div className="status-banner">
          {study.published ? study.status : `${study.status} / Overview`}
        </div>
        {study.actions?.length ? (
          <div className="hero-actions">
            {study.actions.map((action) => (
              <a
                className="button secondary"
                href={action.href}
                key={action.href}
                rel={action.external ? "noopener noreferrer" : undefined}
                target={action.external ? "_blank" : undefined}
              >
                {action.label}
              </a>
            ))}
          </div>
        ) : null}
      </section>

      {study.image ? (
        <figure className="consulting-visual">
          <Image
            alt={study.image.alt}
            fill
            priority={study.slug === "cabarrus-futurescape"}
            sizes="(max-width: 860px) 100vw, 1180px"
            src={study.image.src}
          />
        </figure>
      ) : null}

      <section className="consulting-summary-grid" aria-label="Case study summary">
        <article>
          <span>Problem</span>
          <p>{study.problem}</p>
        </article>
        <article>
          <span>Context</span>
          <p>{study.context}</p>
        </article>
        <article>
          <span>Key deliverable</span>
          <p>{study.deliverable}</p>
        </article>
      </section>

      <div className="consulting-detail-grid">
        <DetailBlock title="Executive Summary">
          <p>{study.detail.executiveSummary}</p>
        </DetailBlock>

        <DetailBlock title="The Problem">
          <p>{study.problem}</p>
        </DetailBlock>

        <DetailBlock title="Context and Constraints">
          <DetailList items={study.detail.contextAndConstraints} />
        </DetailBlock>

        <DetailBlock title="Analytical Approach">
          <DetailList items={study.detail.approach} />
        </DetailBlock>

        <DetailBlock title="Data and Tools">
          <div className="method-grid">
            {study.detail.dataAndTools.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </DetailBlock>

        <DetailBlock title="Key Findings">
          <DetailList items={study.detail.keyFindings} />
        </DetailBlock>

        <DetailBlock title="Recommendation">
          <DetailList items={study.detail.recommendation} />
        </DetailBlock>

        <DetailBlock title="Risks and Limitations">
          <DetailList items={study.detail.risksAndLimitations} />
        </DetailBlock>

        <DetailBlock title="Potential Impact">
          <DetailList items={study.detail.potentialImpact} />
        </DetailBlock>

        <DetailBlock title="What I Would Analyze Next">
          <DetailList items={study.detail.nextAnalysis} />
        </DetailBlock>
      </div>
    </main>
  );
}
