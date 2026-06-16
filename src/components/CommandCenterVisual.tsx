import {
  Activity,
  Database,
  Layers3,
  MapPinned,
  Radar,
  Satellite
} from "lucide-react";

const layers = [
  "Parcels",
  "Zoning",
  "Flood",
  "Schools",
  "ETJ",
  "Growth",
  "Surface temp",
  "NDVI"
];

export function CommandCenterVisual() {
  return (
    <div className="command-center" aria-label="Planning intelligence dashboard visual">
      <div className="command-topbar">
        <div>
          <span className="status-dot" />
          <span>County Planning Intelligence</span>
        </div>
        <span>SceneView / Parcel QA</span>
      </div>

      <div className="command-grid">
        <div className="map-console">
          <div className="map-grid" />
          <div className="parcel parcel-a" />
          <div className="parcel parcel-b" />
          <div className="parcel parcel-c" />
          <div className="parcel parcel-d" />
          <div className="route-line" />
          <div className="scanline" />
          <div className="map-pin pin-one" />
          <div className="map-pin pin-two" />
          <div className="map-overlay-card">
            <MapPinned size={18} />
            <div>
              <strong>Parcel intelligence</strong>
              <span>Growth, constraints, readiness</span>
            </div>
          </div>
        </div>

        <div className="console-side">
          <div className="signal-card">
            <Radar size={18} />
            <div>
              <strong>Constraint scan</strong>
              <span>Flood, zoning, ETJ, utilities</span>
            </div>
          </div>
          <div className="signal-card">
            <Database size={18} />
            <div>
              <strong>QA pipeline</strong>
              <span>Schema, projection, metadata</span>
            </div>
          </div>
          <div className="signal-card">
            <Satellite size={18} />
            <div>
              <strong>Remote sensing</strong>
              <span>NDVI, land cover, heat</span>
            </div>
          </div>
        </div>
      </div>

      <div className="layer-strip">
        {layers.map((layer) => (
          <span key={layer}>{layer}</span>
        ))}
      </div>

      <div className="command-footer">
        <span>
          <Layers3 size={16} />
          Operational layers
        </span>
        <span>
          <Activity size={16} />
          Planning signals
        </span>
      </div>
    </div>
  );
}
