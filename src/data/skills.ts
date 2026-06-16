export type CapabilityGroup = {
  title: string;
  summary: string;
  skills: string[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Enterprise GIS & Web GIS",
    summary:
      "Operational GIS delivery across Esri desktop, enterprise, portal, hub, web map, metadata, and public data workflows.",
    skills: [
      "ArcGIS Pro",
      "ArcGIS Enterprise",
      "Portal",
      "ArcGIS Online",
      "ArcGIS Hub",
      "Hosted layers",
      "Web maps",
      "Feature service publishing",
      "Sharing settings",
      "Metadata",
      "Public data workflows"
    ]
  },
  {
    title: "Digital Twin & Spatial Intelligence",
    summary:
      "Planning intelligence interfaces that turn parcel, infrastructure, scenario, and operational layers into decision-ready systems.",
    skills: [
      "ArcGIS Maps SDK",
      "SceneView",
      "Next.js",
      "TypeScript",
      "Parcel intelligence",
      "Development dashboards",
      "Operational GIS layers",
      "Scenario planning",
      "Infrastructure awareness"
    ]
  },
  {
    title: "GIS Automation & Spatial Data Management",
    summary:
      "Repeatable geoprocessing and QA/QC workflows for county-scale spatial data management.",
    skills: [
      "ArcPy",
      "Python",
      "GeoPandas",
      "ModelBuilder",
      "Geodatabases",
      "Shapefiles",
      "Batch geoprocessing",
      "Schema validation",
      "Projection validation",
      "QA/QC",
      "Raster/vector processing"
    ]
  },
  {
    title: "Spatial Analysis & Modeling",
    summary:
      "Applied planning analysis using suitability modeling, spatial statistics, accessibility methods, and environmental data.",
    skills: [
      "Suitability modeling",
      "Spatial statistics",
      "LISA",
      "Hotspot analysis",
      "Buffers",
      "Spatial joins",
      "Near Table",
      "Accessibility analysis",
      "Google Earth Engine",
      "Landsat",
      "NDVI",
      "Land cover",
      "Flood/environmental analysis"
    ]
  },
  {
    title: "Data Engineering / Systems",
    summary:
      "GIS system architecture patterns for registries, catalogs, QA pipelines, cloud data organization, and REST metadata.",
    skills: [
      "PostGIS",
      "REST services",
      "Metadata registries",
      "Data catalogs",
      "QA pipelines",
      "Google Cloud Storage",
      "Reproducible workflows",
      "Field profiles",
      "Layer registries"
    ]
  },
  {
    title: "Planning / Research Communication",
    summary:
      "Turning technical GIS work into planning narratives, executive reporting, and public-facing communication.",
    skills: [
      "Urban planning analysis",
      "Parcel review",
      "Service equity",
      "Demographic clustering",
      "Executive reporting",
      "Public GIS communication",
      "Growth analysis",
      "Decision support"
    ]
  }
];
