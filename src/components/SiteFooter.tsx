import Link from "next/link";
import { GitBranch, Mail, Sparkles } from "lucide-react";
import { contact } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <span>Khoi Nguyen / GIS Portfolio</span>
        <small>Enterprise GIS / Digital Twin / Planning Intelligence</small>
      </div>
      <div className="footer-actions">
        <a href={`mailto:${contact.email}`}>
          <Mail size={16} />
          <span>Email</span>
        </a>
        <a href={contact.github}>
          <GitBranch size={16} />
          <span>GitHub</span>
        </a>
        <Link href="/projects/cabarrus-futurescape">
          <Sparkles size={16} />
          <span>FutureScape</span>
        </Link>
      </div>
    </footer>
  );
}
