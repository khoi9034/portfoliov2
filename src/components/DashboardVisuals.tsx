import {
  Activity,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Database,
  FileText,
  GitBranch,
  Gauge,
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

const cfsWhatItDoes = [
  {
    title: "Reviews parcel context",
    description:
      "Connects selected parcels to zoning, land-use context, boundaries, and planning review signals.",
    icon: MapPinned
  },
  {
    title: "Surfaces planning constraints",
    description:
      "Brings flood exposure, ETJ, schools, zoning, and environmental constraints into one review surface.",
    icon: ShieldCheck
  },
  {
    title: "Organizes growth and infrastructure signals",
    description:
      "Turns development activity, service context, and infrastructure readiness into comparable planning indicators.",
    icon: Gauge
  },
  {
    title: "Supports executive planning summaries",
    description:
      "Translates parcel intelligence and spatial overlays into concise decision-support report concepts.",
    icon: FileText
  }
];

const cfsPanelData = [
  {
    title: "Parcel intelligence",
    metric: "PIN context",
    detail: "Zoning, boundaries, overlays, readiness",
    icon: MapPinned,
    tone: "cyan"
  },
  {
    title: "Constraint scan",
    metric: "Review queue",
    detail: "Flood, ETJ, school zones, environmental limits",
    icon: AlertTriangle,
    tone: "amber"
  },
  {
    title: "Growth pressure",
    metric: "Activity signal",
    detail: "Development activity and pressure patterns",
    icon: Activity,
    tone: "blue"
  },
  {
    title: "Infrastructure readiness",
    metric: "Service context",
    detail: "Road, utility, and operational readiness concepts",
    icon: Route,
    tone: "green"
  },
  {
    title: "Environmental signals",
    metric: "GEE stack",
    detail: "NDVI, surface temperature, land cover, hydrology",
    icon: Satellite,
    tone: "teal"
  },
  {
    title: "Executive report preview",
    metric: "Brief packet",
    detail: "Parcel summary, constraints, signals, next steps",
    icon: FileText,
    tone: "cyan"
  }
];

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
          <div className="contour-line contour-one" />
          <div className="contour-line contour-two" />
          <div className="parcel parcel-a" />
          <div className="parcel parcel-b" />
          <div className="parcel parcel-c" />
          <div className="parcel parcel-d" />
          <div className="route-line" />
          <div className="heat-ring heat-one" />
          <div className="heat-ring heat-two" />
          <div className="map-chip chip-growth">Growth pressure</div>
          <div className="map-chip chip-flood">Flood exposure</div>
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

export function CFSWhatItDoesGrid() {
  return (
    <div className="cfs-what-grid" aria-label="What Cabarrus FutureScape does">
      {cfsWhatItDoes.map((item) => {
        const Icon = item.icon;

        return (
          <article key={item.title}>
            <Icon size={20} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}

export function CFSIntelligencePanels() {
  return (
    <div className="cfs-panel-system" aria-label="Cabarrus FutureScape dashboard modules">
      <div className="cfs-panel-map">
        <div className="map-grid" />
        <div className="cfs-zone zone-one" />
        <div className="cfs-zone zone-two" />
        <div className="cfs-zone zone-three" />
        <div className="route-line" />
        <div className="scan-beam" />
        <div className="panel-map-callout">
          <CircleDot size={16} />
          <span>Selected parcel intelligence</span>
        </div>
      </div>
      <div className="cfs-panel-stack">
        {cfsPanelData.map((panel) => {
          const Icon = panel.icon;

          return (
            <article className={`cfs-system-card ${panel.tone}`} key={panel.title}>
              <Icon size={18} />
              <div>
                <span>{panel.metric}</span>
                <h3>{panel.title}</h3>
                <p>{panel.detail}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function CFSDataPipeline({ items }: ArchitectureFlowProps) {
  return (
    <div className="cfs-data-pipeline" aria-label="Cabarrus FutureScape data pipeline">
      {items.map((item, index) => (
        <article key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
          <div className="pipeline-node-line" />
        </article>
      ))}
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

export function AutoMapInterfaceVisual() {
  const steps = [
    { label: "Prompt", value: "Plain-language map request", icon: FileText },
    { label: "REST registry", value: "Known service metadata only", icon: Database },
    { label: "Validation", value: "Fields, filters, geometry limits", icon: CheckCircle2 },
    { label: "Recipe", value: "Layer order and query plan", icon: Workflow },
    { label: "Refinement", value: "Reviewer-safe adjustments", icon: GitBranch },
    { label: "Report", value: "Counts, warnings, outputs", icon: BarChart3 }
  ];

  return (
    <div className="automap-interface" aria-label="AutoMap prompt-to-report interface concept">
      <div className="automap-prompt-card">
        <span>Prototype interface concept</span>
        <h3>User map request</h3>
        <p>
          Build a map of growth-area parcels with flood, zoning, municipal
          boundary, and planning constraint context.
        </p>
      </div>
      <div className="automap-validation-panel">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article key={step.label}>
              <Icon size={17} />
              <div>
                <strong>{step.label}</strong>
                <span>{step.value}</span>
              </div>
            </article>
          );
        })}
      </div>
      <div className="automap-output-panel">
        <div>
          <strong>Generated map recipe</strong>
          <span>Approved layers / filters / warnings</span>
        </div>
        <div className="recipe-lines">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="report-chip">
          <BarChart3 size={15} />
          <span>Analysis report ready</span>
        </div>
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

export function HubBeforeAfterVisual({ items }: { items: string[] }) {
  const oldItems = [
    "Department folders",
    "Mixed apps and data",
    "Hidden metadata",
    "Unclear access path"
  ];

  return (
    <div className="hub-before-after" aria-label="ArcGIS Hub information architecture before and after">
      <section>
        <p className="eyebrow">Before</p>
        <h3>Department-oriented discovery</h3>
        <div className="hub-flow-list muted">
          {oldItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
      <div className="hub-transform-arrow">
        <ArrowIcon />
      </div>
      <section>
        <p className="eyebrow">After</p>
        <h3>User-centered GIS navigation</h3>
        <div className="hub-flow-list">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="flow-arrow-svg" viewBox="0 0 120 40">
      <path d="M4 20h96" />
      <path d="M82 7l20 13-20 13" />
    </svg>
  );
}
