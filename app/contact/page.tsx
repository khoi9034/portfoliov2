import type { Metadata } from "next";
import Link from "next/link";
import { FileText, GitBranch, Mail } from "lucide-react";
import { contact } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact | Khoi Nguyen GIS Portfolio",
  description:
    "Contact Khoi Nguyen for GIS analyst, planning intelligence, Web GIS, automation, civic technology, and spatial data roles.",
  openGraph: {
    title: "Contact | Khoi Nguyen GIS Portfolio",
    description:
      "Professional contact page for Khoi Nguyen, GIS analyst in Concord, NC.",
    images: ["/og-gis-portfolio.svg"]
  },
  twitter: {
    title: "Contact | Khoi Nguyen GIS Portfolio",
    description:
      "Contact Khoi Nguyen for GIS analyst, planning intelligence, Web GIS, automation, and spatial data roles.",
    images: ["/og-gis-portfolio.svg"]
  }
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="contact-page-grid">
        <div className="page-hero compact-hero">
          <p className="eyebrow">Contact</p>
          <h1>Connect on GIS and spatial intelligence work.</h1>
          <p>
            Based in {contact.location}. The best fit is work that connects GIS
            operations, public data infrastructure, automation, Web GIS,
            planning analytics, or digital twin concepts.
          </p>
        </div>

        <aside className="contact-card" aria-label="Contact options">
          <a className="contact-method" href={`mailto:${contact.email}`}>
            <Mail size={20} />
            <div>
              <strong>Email</strong>
              <span>{contact.email}</span>
            </div>
          </a>
          <a
            className="contact-method"
            href={contact.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitBranch size={20} />
            <div>
              <strong>GitHub</strong>
              <span>github.com/khoi9034</span>
            </div>
          </a>
          <Link className="contact-method" href="/resume">
            <FileText size={20} />
            <div>
              <strong>Resume</strong>
              <span>Review experience, education, and selected work</span>
            </div>
          </Link>
        </aside>
      </section>
    </main>
  );
}
