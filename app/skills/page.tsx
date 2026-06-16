import type { Metadata } from "next";
import { BarChart3, Database, Layers3, MapPinned, Network, Workflow } from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";
import { SectionHeader } from "@/components/SectionHeader";
import { capabilityGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills | Khoi Nguyen GIS Portfolio",
  description:
    "Enterprise GIS, Web GIS, digital twin, GIS automation, spatial modeling, data engineering, and planning communication capabilities for Khoi Nguyen.",
  openGraph: {
    title: "Skills | Khoi Nguyen GIS Portfolio",
    description:
      "A capability map for enterprise GIS, planning intelligence, automation, spatial analysis, and public GIS communication."
  }
};

const icons = [Layers3, MapPinned, Workflow, BarChart3, Database, Network];

export default function SkillsPage() {
  return (
    <main className="page-shell">
      <section className="page-hero compact-hero">
        <p className="eyebrow">Capability map</p>
        <h1>Enterprise GIS capabilities organized around delivery.</h1>
        <p>
          The skill set is built around the systems Khoi wants to work on:
          county GIS operations, Web GIS, automation, digital twin concepts,
          spatial modeling, and planning intelligence.
        </p>
      </section>

      <section className="section-shell">
        <SectionHeader
          eyebrow="Technical foundation"
          title="GIS, automation, data systems, and planning communication"
          description="Each group connects tools to the work they support, rather than listing software in isolation."
        />
        <div className="capability-map">
          {capabilityGroups.map((group, index) => {
            const Icon = icons[index] ?? Layers3;

            return (
              <CapabilityCard
                icon={Icon}
                key={group.title}
                skills={group.skills}
                summary={group.summary}
                title={group.title}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
