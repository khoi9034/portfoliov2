import {
  Activity,
  BarChart3,
  ClipboardCheck,
  Database,
  FileText,
  GitBranch,
  Layers3,
  MapPinned,
  Radar,
  Route,
  Satellite,
  ShieldCheck,
  Workflow
} from "lucide-react";

type ArchitectureFlowProps = {
  items: string[];
};

type Concept = {
  title: string;
  description: string;
  label?: string;
};

export function FutureScapeShowcase() {
  const signals = [
    { label: "Parcel intelligence", value: "PIN / zoning / constraints", icon: MapPinned },
    { label: "Growth pressure", value: "Activity and readiness signals", icon: Activity },
    { label: "Constraints", value: "Flood / ETJ / schools / zoning", icon: ShieldCheck },
    { label: "Infrastructure readiness", value: "Service context and access", icon: Route },
    { label: "Environmental signals", value: "NDVI / heat / land cover", icon: Satellite },
    { label: "Executive reporting", value: "Briefs, summaries, next steps", icon: FileText }
  ];

  return (
    <div className="flagship-dashboard" aria-label="Cabarrus FutureScape command-center visual">
      <div className="dashboard-topline">
        <div>
          <span className="status-dot" />
          <span>Cabarrus FutureScape</span>
        </div>
        <span>Prototype interface concept</span>
      </div>
      <div className="dashboard-layout">
        <div className="dashboard-map">
          <div className="map-grid" />
          <div className="parcel parcel-a" />
          <div className="parcel parcel-b" />
          <div className="parcel parcel-c" />
          <div className="parcel parcel-d" />
          <div className="route-line" />
          <div className="heat-ring heat-one" />
          <div className="heat-ring heat-two" />
          <div className="map-overlay-card">
            <MapPinned size={18} />
            <div>
              <strong>Selected parcel</strong>
              <span>Growth score / constraints / readiness</span>
            </div>
          </div>
        </div>
        <div className="dashboard-side">
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <article key={signal.label}>
                <Icon size={17} />
                <div>
                  <strong>{signal.label}</strong>
                  <span>{signal.value}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="pipeline-strip">
        <span>ArcGIS REST</span>
        <span>PostGIS registry</span>
        <span>Google Earth Engine</span>
        <span>ArcPy QA/QC</span>
      </div>
    </div>
  );
}

export function ArchitectureFlow({ items }: ArchitectureFlowProps) {
  return (
    <ol className="architecture-flow" aria-label="System architecture flow">
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
        </li>
      ))}
    </ol>
  );
}

export function InterfaceConceptGrid({ concepts }: { concepts: Concept[] }) {
  return (
    <div className="mockup-grid">
      {concepts.map((concept) => (
        <article className="interface-panel" key={concept.title}>
          <div className="interface-panel-map">
            <div className="mock-parcel one" />
            <div className="mock-parcel two" />
            <div className="mock-parcel three" />
            <div className="mock-flow" />
          </div>
          <div className="interface-panel-copy">
            {concept.label ? <span>{concept.label}</span> : null}
            <h3>{concept.title}</h3>
            <p>{concept.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function AutoMapWorkflowVisual({ workflow }: { workflow: string[] }) {
  const icons = [FileText, Database, Radar, Workflow, MapPinned, GitBranch, BarChart3];

  return (
    <ol className="automap-workflow" aria-label="AutoMap prompt-to-report workflow">
      {workflow.map((step, index) => {
        const Icon = icons[index] ?? Workflow;

        return (
          <li key={step}>
            <Icon size={20} />
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </li>
        );
      })}
    </ol>
  );
}

export function PromptToMapMockup() {
  return (
    <div className="prompt-map-mockup" aria-label="AutoMap prompt-to-map interface mockup">
      <div className="prompt-pane">
        <span>Map request</span>
        <p>Show approved parcels near planned growth areas with flood and zoning constraints.</p>
      </div>
      <div className="recipe-pane">
        <article>
          <ClipboardCheck size={17} />
          <div>
            <strong>Candidate layers</strong>
            <span>Parcels / zoning / flood / municipal boundary</span>
          </div>
        </article>
        <article>
          <Layers3 size={17} />
          <div>
            <strong>Map recipe</strong>
            <span>Verified sources, fields, filters, warnings</span>
          </div>
        </article>
        <article>
          <BarChart3 size={17} />
          <div>
            <strong>Analysis report</strong>
            <span>Counts, grouped stats, limitations</span>
          </div>
        </article>
      </div>
    </div>
  );
}

export function HubNavigationVisual({ items }: { items: string[] }) {
  return (
    <div className="hub-nav-visual" aria-label="Cabarrus GIS Hub navigation architecture">
      {items.map((item, index) => (
        <article key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
        </article>
      ))}
    </div>
  );
}
