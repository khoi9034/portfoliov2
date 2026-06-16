type CaseStudySectionProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export function CaseStudySection({
  eyebrow,
  title,
  children
}: CaseStudySectionProps) {
  return (
    <section className="case-block">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      <div className="case-block-body">{children}</div>
    </section>
  );
}
