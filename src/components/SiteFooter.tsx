import Link from "next/link";
import {
  BriefcaseBusiness,
  FileText,
  GitBranch,
  Layers3,
  Mail,
  Send,
  Sparkles,
  UserRound
} from "lucide-react";
import { projectLinks } from "@/data/links";
import { contact } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <span>Khoi Nguyen / GIS Portfolio</span>
        <small>Enterprise GIS / Digital Twin / Planning Intelligence</small>
      </div>
      <div className="footer-actions">
        <Link href="/projects">
          <Layers3 size={16} />
          <span>Projects</span>
        </Link>
        <Link href="/case-studies">
          <BriefcaseBusiness size={16} />
          <span>Case Studies</span>
        </Link>
        <Link href="/experience">
          <UserRound size={16} />
          <span>Experience</span>
        </Link>
        <Link href="/resume">
          <FileText size={16} />
          <span>Resume</span>
        </Link>
        <Link href="/contact">
          <Send size={16} />
          <span>Contact</span>
        </Link>
        <a href={`mailto:${contact.email}`}>
          <Mail size={16} />
          <span>Email</span>
        </a>
        <a href={contact.github} rel="noopener noreferrer" target="_blank">
          <GitBranch size={16} />
          <span>GitHub</span>
        </a>
        <a href={projectLinks.cfs} rel="noopener noreferrer" target="_blank">
          <Sparkles size={16} />
          <span>Cabarrus FutureScape</span>
        </a>
      </div>
    </footer>
  );
}
