import {
  ArrowDown,
  Building2,
  Database,
  Download,
  FileText,
  GitBranch,
  Layers3,
  Mail,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { CommandCenterVisual } from "@/components/CommandCenterVisual";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import {
  contact,
  education,
  experience,
  impactSignals,
  projects,
  skillGroups
} from "@/data/portfolio";

const featuredProjects = projects.filter((project) => project.featured);

const capabilityIcons = [
  MapPinned,
  Layers3,
  Building2,
  ShieldCheck,
  Workflow,
  Database
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Khoi Nguyen home">
          <span>KN</span>
          <div>
            <strong>Khoi Nguyen</strong>
            <small>Enterprise GIS / Planning Intelligence</small>
          </div>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Concord, NC / GIS Analyst</p>
          <h1 className="hero-title">
            <span>GIS Analyst building</span>
            <span>planning intelligence</span>
            <span>systems, digital</span>
            <span>twins, and</span>
            <span>automated spatial</span>
            <span>workflows.</span>
          </h1>
          <p className="hero-subtitle">
            I combine Enterprise GIS, ArcPy automation, Web GIS, and spatial
            modeling to turn county-scale data into decision-ready planning
            tools.
          </p>
          <div className="hero-actions" aria-label="Portfolio actions">
            <a className="button primary" href="#projects">
              <ArrowDown size={18} />
              <span>View Projects</span>
            </a>
            <a className="button secondary" href="#resume">
              <FileText size={18} />
              <span>View Resume</span>
            </a>
            <a className="button ghost" href={`mailto:${contact.email}`}>
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
        <CommandCenterVisual />
      </section>

      <section className="signal-strip" aria-label="GIS capability signals">
        {impactSignals.map((signal, index) => {
          const Icon = capabilityIcons[index] ?? MapPinned;
          return (
            <article key={signal}>
              <Icon size={18} />
              <span>{signal}</span>
            </article>
          );
        })}
      </section>

      <section className="section-shell" id="projects">
        <SectionHeader
          eyebrow="Featured work"
          title="Enterprise GIS, automation, and planning intelligence projects"
          description="The portfolio leads with county-scale systems, public GIS infrastructure, and applied spatial analysis. Prototype work is labeled clearly."
        />
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="section-shell case-section" id="case-studies">
        <SectionHeader
          eyebrow="Case studies"
          title="How the work is structured"
          description="Each case study frames the planning problem, the workflow, the technical system, and the practical output."
        />
        <div className="case-list">
          {projects.map((project) => (
            <article className="case-study" id={`case-${project.id}`} key={project.id}>
              <div className="case-heading">
                <p className="eyebrow">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="case-status">{project.status}</div>
              </div>
              <div className="case-matrix">
                <div>
                  <h4>Problem</h4>
                  <p>{project.caseStudy.problem}</p>
                </div>
                <div>
                  <h4>Approach</h4>
                  <ul>
                    {project.caseStudy.approach.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>System / Workflow</h4>
                  <ul>
                    {project.caseStudy.system.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Outputs</h4>
                  <ul>
                    {project.caseStudy.outputs.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Why It Matters</h4>
                  <p>{project.caseStudy.whyItMatters}</p>
                </div>
                <div>
                  <h4>Next Steps</h4>
                  <ul>
                    {project.caseStudy.nextSteps.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell skills-section" id="skills">
        <SectionHeader
          eyebrow="Capability map"
          title="Technical skills organized around enterprise GIS delivery"
          description="The stack connects GIS operations, automation, spatial modeling, data QA, and modern Web GIS interfaces."
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell experience-section">
        <SectionHeader
          eyebrow="Experience"
          title="Public GIS infrastructure and county-scale data stewardship"
        />
        <article className="timeline-item">
          <div className="timeline-marker" />
          <div>
            <p className="eyebrow">{experience.dates}</p>
            <h3>
              {experience.title} / {experience.organization}
            </h3>
            <ul>
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section className="section-shell resume-section" id="resume">
        <div className="resume-panel">
          <div>
            <p className="eyebrow">Resume</p>
            <h2>ATS-friendly GIS analyst profile</h2>
            <p>
              Enterprise GIS, Web GIS, digital twin concepts, ArcPy automation,
              spatial data QA/QC, and applied planning analysis.
            </p>
            <div className="resume-actions">
              <a className="button primary" href={contact.resumePath} download>
                <Download size={18} />
                <span>Download Resume</span>
              </a>
              <a className="button secondary" href={`mailto:${contact.email}`}>
                <Mail size={18} />
                <span>Request Details</span>
              </a>
            </div>
          </div>
          <div className="resume-facts">
            <article>
              <h3>Education</h3>
              <p>{education.school}</p>
              <span>{education.degree}</span>
              <span>{education.graduation}</span>
              <span>{education.gpa}</span>
            </article>
            <article>
              <h3>Languages</h3>
              {education.languages.map((language) => (
                <span key={language}>{language}</span>
              ))}
            </article>
            <article>
              <h3>Technical Focus</h3>
              <span>Enterprise GIS and Web GIS</span>
              <span>Digital twin and spatial intelligence</span>
              <span>GIS automation and QA/QC</span>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Available for GIS analyst, planning intelligence, Web GIS, and spatial data roles.</h2>
          <p>
            Based in {contact.location}. I am especially interested in work
            that connects enterprise GIS operations with decision-ready planning
            tools.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${contact.email}`}>
            <Mail size={18} />
            <span>{contact.email}</span>
          </a>
          <a className="button secondary" href={contact.github}>
            <GitBranch size={18} />
            <span>GitHub</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <span>Khoi Nguyen / GIS Portfolio</span>
        <span>Enterprise GIS / Digital Twin / Planning Intelligence</span>
        <Sparkles size={16} aria-hidden="true" />
      </footer>
    </main>
  );
}
