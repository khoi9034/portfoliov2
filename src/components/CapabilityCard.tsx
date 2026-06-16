import type { LucideIcon } from "lucide-react";

type CapabilityCardProps = {
  title: string;
  summary: string;
  signal?: string;
  skills?: string[];
  icon: LucideIcon;
};

export function CapabilityCard({
  title,
  summary,
  signal,
  skills,
  icon: Icon
}: CapabilityCardProps) {
  return (
    <article className="capability-card">
      <div className="capability-icon">
        <Icon size={22} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
      {signal ? <span className="capability-signal">{signal}</span> : null}
      {skills ? (
        <div className="tool-list" aria-label={`${title} skills`}>
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
