import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Layers3, MapPinned } from "lucide-react";
import { pathway } from "@/data/profile";

export const metadata: Metadata = {
  title: "Pathway | Khoi Nguyen GIS Portfolio",
  description:
    "Khoi Nguyen's career direction across enterprise GIS, planning intelligence, automation, digital twins, and urban analytics.",
  openGraph: {
    title: "Pathway | Khoi Nguyen GIS Portfolio",
    description:
      "Career pathway for enterprise GIS, planning intelligence, GIS automation, and public-sector spatial decision support."
  }
};

export default function PathwayPage() {
  return (
    <main className="page-shell">
      <section className="page-hero compact-hero">
        <p className="eyebrow">Career direction</p>
        <h1>{pathway.title}</h1>
        <p>{pathway.intro}</p>
      </section>

      <section className="pathway-grid">
        <article className="pathway-panel large">
          <Compass size={22} />
          <h2>Current focus</h2>
          <ul className="detail-list">
            {pathway.currentFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="pathway-panel">
          <Layers3 size={22} />
          <h2>Near-term roles</h2>
          <div className="method-grid">
            {pathway.nearTermRoles.map((role) => (
              <span key={role}>{role}</span>
            ))}
          </div>
        </article>

        <article className="pathway-panel">
          <MapPinned size={22} />
          <h2>Long-term direction</h2>
          <p>{pathway.longTermDirection}</p>
        </article>

        <article className="pathway-panel wide">
          <ArrowRight size={22} />
          <h2>Why this path</h2>
          <p>{pathway.why}</p>
          <Link className="text-link" href="/projects/cabarrus-futurescape">
            <span>See the flagship system</span>
            <ArrowRight size={16} />
          </Link>
        </article>
      </section>
    </main>
  );
}
