import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
  Code2,
  ExternalLink,
  FileText,
  GitBranch,
  ListChecks,
  MapPinned
} from "lucide-react";
import { researchBriefs, type ResearchVisual } from "@/data/research";

export const metadata: Metadata = {
  title: "UNC Chapel Hill GIS Research & Applied Spatial Analysis | Khoi Nguyen",
  description:
    "UNC Chapel Hill GIS research papers by Khoi Nguyen, including Tokyo anime retail clustering, long-term care accessibility in Japan, and remote sensing analysis of urban canopy cooling.",
  openGraph: {
    title: "UNC Chapel Hill GIS Research & Applied Spatial Analysis",
    description:
      "A polished archive of UNC Chapel Hill GIS research papers with methods, findings, outputs, and full PDF links.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "UNC Chapel Hill GIS Research & Applied Spatial Analysis",
    description:
      "GIS research archive focused on site suitability, accessibility, remote sensing, and reproducible spatial methods.",
    images: ["/og-gis-portfolio.svg"]
  }
};

function ResearchVisualPanel({ visual }: { visual: ResearchVisual }) {
  if (visual.kind === "image") {
    return (
      <figure className="research-preview-panel">
        <div className="research-preview-image">
          <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 860px) 100vw, 440px" />
        </div>
        <figcaption>{visual.label}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="research-preview-panel thermal-preview-panel">
      <div className="thermal-preview" role="img" aria-label={visual.alt}>
        <div className="thermal-map-grid" />
        <div className="thermal-zone heat-a" />
        <div className="thermal-zone heat-b" />
        <div className="thermal-zone canopy-a" />
        <div className="thermal-zone canopy-b" />
        <div className="thermal-regression">
          <span>NDVI / LST regression</span>
          <strong>R-squared 0.604</strong>
          <div>
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="thermal-legend">
          <span>Urban heat</span>
          <span>Canopy cooling</span>
        </div>
      </div>
      <figcaption>{visual.label}</figcaption>
    </figure>
  );
}

export default function ResearchPage() {
  return (
    <main className="page-shell research-page">
      <section className="page-hero compact-hero">
        <p className="eyebrow">UNC Chapel Hill research archive</p>
        <h1>UNC Chapel Hill GIS Research & Applied Spatial Analysis</h1>
        <p>
          These projects were completed through UNC Chapel Hill geography/GIS
          coursework and research, focusing on spatial analysis, accessibility,
          demographic clustering, site suitability, remote sensing, and
          reproducible GIS methods.
        </p>
      </section>

      <section className="research-archive-list" aria-label="Research papers">
        {researchBriefs.map((brief) => (
          <article className="research-archive-card" id={brief.slug} key={brief.slug}>
            <div className="research-archive-top">
              <div className="research-archive-copy">
                <p className="eyebrow">{brief.subtitle}</p>
                <h2>{brief.title}</h2>
                <p className="research-context">{brief.context}</p>
                <p>{brief.summary}</p>
              </div>
              <ResearchVisualPanel visual={brief.visual} />
            </div>

            <div className="research-evidence-grid">
              <section className="research-evidence-panel research-question-panel">
                <BookOpen size={18} />
                <h3>Research question</h3>
                <ul className="detail-list">
                  {brief.questions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </section>

              <section className="research-evidence-panel">
                <GitBranch size={18} />
                <h3>Methods / workflow</h3>
                <ul className="detail-list">
                  {brief.methods.map((method) => (
                    <li key={method}>{method}</li>
                  ))}
                </ul>
              </section>

              <section className="research-evidence-panel">
                <MapPinned size={18} />
                <h3>Key findings</h3>
                <ul className="detail-list">
                  {brief.findings.map((finding) => (
                    <li key={finding}>{finding}</li>
                  ))}
                </ul>
              </section>

              <section className="research-evidence-panel">
                <ListChecks size={18} />
                <h3>Outputs</h3>
                <ul className="detail-list">
                  {brief.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="research-actions" aria-label={`${brief.title} links`}>
              <a
                className="button primary"
                href={brief.pdf.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} />
                <span>{brief.pdf.label}</span>
              </a>
              {brief.code ? (
                <a
                  className="button secondary"
                  href={brief.code.href}
                  target={brief.code.external ? "_blank" : undefined}
                  rel={brief.code.external ? "noopener noreferrer" : undefined}
                >
                  {brief.code.external ? <ExternalLink size={18} /> : <Code2 size={18} />}
                  <span>{brief.code.label}</span>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
