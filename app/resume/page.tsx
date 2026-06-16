import type { Metadata } from "next";
import Link from "next/link";
import { Download, GitBranch, Mail } from "lucide-react";
import { contact, education, experience } from "@/data/profile";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Resume | Khoi Nguyen GIS Portfolio",
  description:
    "Resume page for Khoi Nguyen, GIS analyst focused on enterprise GIS, Web GIS, ArcPy automation, digital twin concepts, and spatial analysis.",
  openGraph: {
    title: "Resume | Khoi Nguyen GIS Portfolio",
    description:
      "Education, experience, projects, technical profile, and resume download for Khoi Nguyen."
  }
};

const resumeProjects = [
  "cabarrus-futurescape",
  "automap",
  "anime-retail-site-selection"
]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean);

export default function ResumePage() {
  return (
    <main className="page-shell">
      <section className="page-hero resume-hero">
        <div>
          <p className="eyebrow">Resume</p>
          <h1>{contact.name}</h1>
          <p>
            GIS analyst focused on enterprise GIS, Web GIS, digital twin
            concepts, ArcPy automation, spatial data QA/QC, and applied
            planning analysis.
          </p>
          <div className="hero-actions">
            <a className="button primary" download href={contact.resumePath}>
              <Download size={18} />
              <span>Download PDF</span>
            </a>
            <a className="button secondary" href={`mailto:${contact.email}`}>
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a className="button ghost" href={contact.github}>
              <GitBranch size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <aside className="resume-contact-card" aria-label="Contact details">
          <span>{contact.location}</span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.github}>github.com/khoi9034</a>
        </aside>
      </section>

      <section className="resume-layout">
        <article className="resume-panel-block">
          <h2>Education</h2>
          <p>{education.school}</p>
          <span>{education.degree}</span>
          <span>{education.graduation}</span>
          <span>{education.gpa}</span>
        </article>

        <article className="resume-panel-block">
          <h2>Experience</h2>
          <p>
            {experience.title} - {experience.organization}
          </p>
          <span>{experience.dates}</span>
          <ul className="detail-list">
            {experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>

        <article className="resume-panel-block">
          <h2>Selected projects</h2>
          <div className="resume-project-list">
            {resumeProjects.map((project) =>
              project ? (
                <Link href={`/projects/${project.slug}`} key={project.slug}>
                  <strong>{project.title}</strong>
                  <span>{project.type}</span>
                </Link>
              ) : null
            )}
          </div>
        </article>

        <article className="resume-panel-block">
          <h2>Languages</h2>
          {education.languages.map((language) => (
            <span key={language}>{language}</span>
          ))}
        </article>
      </section>
    </main>
  );
}
