export type VisualVariant =
  | "cabarrus-futurescape"
  | "automap"
  | "cabarrus-hub"
  | "research";

export type ProjectCategory =
  | "Flagship Systems"
  | "Enterprise GIS / Public Infrastructure"
  | "Automation Systems"
  | "Applied GIS / Research";

export type ProjectDepth = "flagship" | "platform" | "professional" | "research";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  type: string;
  status: string;
  role: string;
  summary: string;
  homepageSummary?: string;
  tools: string[];
  focus: string[];
  visual: {
    variant: VisualVariant;
    image?: string;
    alt: string;
  };
  featured: boolean;
  depth: ProjectDepth;
  implementationNote?: string;
  caseStudy: {
    whatItIs: string;
    problem: string;
    approach: string[];
    system: string[];
    outputs: string[];
    whyItMatters: string;
    nextSteps: string[];
  };
  architecture?: string[];
  coreModules?: { title: string; description: string }[];
  methods?: string[];
  interfaceConcepts?: { title: string; description: string; label?: string }[];
  workflow?: string[];
  capabilities?: string[];
  technicalDetails?: string[];
  informationArchitecture?: string[];
  enterpriseSkills?: string[];
};

export const projects: Project[] = [
  {
    slug: "cabarrus-futurescape",
    title: "Cabarrus FutureScape",
    subtitle: "County Digital Twin & Growth Intelligence Platform",
    category: "Flagship Systems",
    type: "County Digital Twin & Growth Intelligence Platform",
    status:
      "Personal prototype / ongoing applied GIS platform. Not an official county system.",
    role: "Product strategy, spatial data architecture, dashboard concept, Web GIS prototype",
    summary:
      "A county-scale digital twin prototype for Cabarrus County focused on parcel intelligence, development activity, infrastructure awareness, growth pressure, environmental constraints, and planning decision support.",
    homepageSummary:
      "The flagship portfolio system: a command-center concept for parcel intelligence, growth pressure, constraints, infrastructure readiness, environmental signals, and executive planning reports.",
    tools: [
      "Next.js",
      "TypeScript",
      "ArcGIS Maps SDK",
      "SceneView",
      "PostGIS",
      "ArcGIS REST services",
      "Google Earth Engine",
      "Google Cloud Storage",
      "Python",
      "GeoPandas",
      "ArcPy"
    ],
    focus: [
      "Parcel intelligence",
      "Development activity",
      "Growth pressure",
      "Infrastructure readiness",
      "Constraint intelligence",
      "Environmental signals",
      "Executive reporting"
    ],
    visual: {
      variant: "cabarrus-futurescape",
      alt: "Prototype command-center interface concept for Cabarrus FutureScape"
    },
    featured: true,
    depth: "flagship",
    caseStudy: {
      whatItIs:
        "A county-scale digital twin prototype for Cabarrus County focused on parcel intelligence, development activity, infrastructure awareness, growth pressure, environmental constraints, and planning decision support.",
      problem:
        "County planning data is spread across parcels, zoning, permits, flood layers, school zones, utility context, environmental rasters, and public REST services. Planning staff need clearer ways to understand what is happening, where growth pressure is forming, and what constraints affect each parcel.",
      approach: [
        "Designed a prototype information architecture around parcels, zoning, ETJ, municipal boundaries, flood exposure, schools, infrastructure context, environmental constraints, and development activity.",
        "Separated raw, derived, metadata, and QA outputs so future PostGIS ingestion and dashboard analytics can be handled cleanly.",
        "Framed the interface as an executive planning dashboard rather than a one-off map viewer."
      ],
      system: [
        "SceneView and Web GIS dashboard concept for county-scale spatial review.",
        "Parcel intelligence summaries tied to development, infrastructure, zoning, environmental context, and growth signals.",
        "Environmental workflow concepts using Landsat surface temperature, NDVI, Dynamic World land cover, terrain, hydrology, rainfall, and flooding data."
      ],
      outputs: [
        "Interactive Web GIS dashboard concept",
        "Parcel intelligence summary pattern",
        "Constraint and readiness layer model",
        "Executive-level insight and report concepts",
        "PostGIS-ready raw, derived, metadata, and QA output organization"
      ],
      whyItMatters:
        "Cabarrus FutureScape shows the ability to move beyond static maps into planning intelligence systems that combine data engineering, Web GIS, analysis, and decision support.",
      nextSteps: [
        "Connect stable data sources.",
        "Add parcel-level constraint scores.",
        "Build executive PDF report generation.",
        "Add a parcel-level prediction model later, after constraint data is stable.",
        "Add ML growth prediction only after source data, assumptions, and QA rules are documented."
      ]
    },
    architecture: [
      "Data Sources",
      "Ingestion / QA",
      "PostGIS / Registry",
      "Web GIS Dashboard",
      "Parcel Intelligence",
      "Executive Insight Reports"
    ],
    coreModules: [
      {
        title: "Parcel Intelligence",
        description:
          "Parcel selection, ownership/context summaries, land-use context, zoning intersections, and development-readiness signals."
      },
      {
        title: "Development Activity",
        description:
          "A planning layer concept for reviewing where activity is concentrated and how it relates to infrastructure and constraints."
      },
      {
        title: "Constraint Intelligence",
        description:
          "Flood exposure, zoning, ETJ, environmental, school, boundary, and other planning constraints surfaced together."
      },
      {
        title: "Infrastructure Awareness",
        description:
          "A readiness concept for seeing parcels in relation to utility, road, service, and operational context."
      },
      {
        title: "Environmental Signals",
        description:
          "Remote-sensing and environmental indicators including heat, vegetation, land cover, terrain, hydrology, rainfall, and flooding."
      },
      {
        title: "Executive Reporting",
        description:
          "Report concepts that translate spatial overlays into concise planning intelligence for decision review."
      }
    ],
    methods: [
      "ArcGIS REST services",
      "Parcel overlays",
      "Zoning / ETJ / municipal boundaries",
      "Flood exposure",
      "School zones",
      "Google Earth Engine",
      "Landsat surface temperature",
      "NDVI",
      "Dynamic World land cover",
      "Terrain / hydrology",
      "Rainfall / flooding data",
      "PostGIS-ready data organization",
      "QA folders: raw, derived, metadata, qa notes"
    ],
    interfaceConcepts: [
      {
        title: "Parcel Intelligence Console",
        description:
          "Selected parcel context, constraints, readiness indicators, and report actions in one review surface.",
        label: "Prototype interface concept"
      },
      {
        title: "Growth Pressure Review",
        description:
          "Layered dashboard concept for seeing development activity, land-use context, and pressure signals together.",
        label: "Prototype interface concept"
      },
      {
        title: "Environmental Signal Stack",
        description:
          "Remote sensing and hydrology outputs organized for future ingestion and planning analytics.",
        label: "Prototype interface concept"
      }
    ]
  },
  {
    slug: "automap",
    title: "AutoMap",
    subtitle: "AI-assisted county map request and ArcGIS REST automation engine",
    category: "Automation Systems",
    type: "AI-assisted County Map Request / REST Layer Automation Engine",
    status: "Active personal project.",
    role: "Full-stack workflow design, deterministic request intelligence, GIS automation architecture",
    summary:
      "AutoMap ingests ArcGIS REST service metadata and lets a user describe the map they want in plain language. The system selects needed layers, validates them, creates map recipes, supports refinement, and generates reviewable analysis reports.",
    homepageSummary:
      "A professional prompt-to-map automation engine for county GIS requests, approved REST layer selection, refinement, and analysis report generation.",
    implementationNote:
      "AutoMap is separate from Cabarrus FutureScape. Cabarrus FutureScape reserves ports 3000/8000; AutoMap uses frontend 3010 and backend/API 8010.",
    tools: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostGIS",
      "ArcGIS REST",
      "SQLite/PostgreSQL",
      "Local report exports"
    ],
    focus: [
      "REST layer registry",
      "Prompt interpretation",
      "Layer selection",
      "Map recipes",
      "Refinement workflows",
      "Analysis reports"
    ],
    visual: {
      variant: "automap",
      alt: "Prototype AutoMap prompt-to-map automation interface concept"
    },
    featured: true,
    depth: "platform",
    caseStudy: {
      whatItIs:
        "An ambitious county planning tool that ingests ArcGIS REST service URLs and layer metadata, stores them, and lets a user describe a desired map in plain language.",
      problem:
        "County GIS requests often arrive as plain language, but building the correct map requires knowing which REST layers, fields, filters, geometries, and limitations apply.",
      approach: [
        "Built a deterministic request intelligence flow that interprets map requests without inventing layers, fields, URLs, or data sources.",
        "Stored and validated layer metadata so recipes can be built from known ArcGIS REST services.",
        "Added local report generation for analysis runs and refinements so reviewers can understand counts, warnings, and data limitations."
      ],
      system: [
        "FastAPI backend with recipe, refinement, approval, analysis, and report endpoints.",
        "Next.js frontend with dashboard, map request, analysis, analysis reports, catalog, history, and system status pages.",
        "Guarded port model that keeps Cabarrus FutureScape and AutoMap development environments separate."
      ],
      outputs: [
        "AutoMap v2.3 analysis summary reports",
        "Local HTML, Markdown, JSON, CSV report packages",
        "Grouped statistics support using returnGeometry=false",
        "Frontend /analysis-reports workflow"
      ],
      whyItMatters:
        "AutoMap shows how planning and GIS teams could turn repeated map requests into reviewable, auditable, and safer automation workflows.",
      nextSteps: [
        "Keep real publishing behind explicit local CLI safeguards.",
        "Expand supported analysis operations only when feature limits and review rules are clear.",
        "Add public demo screenshots when a sanitized demo dataset is available."
      ]
    },
    workflow: [
      "Prompt",
      "Data gap / layer registry",
      "Candidate source evaluation",
      "Map recipe",
      "Map preview",
      "Refinement",
      "Analysis report"
    ],
    capabilities: [
      "REST layer registry",
      "Map request interpretation",
      "Layer selection",
      "Approved source workflow",
      "Analysis summary reports",
      "Grouped statistics",
      "returnGeometry=false optimization",
      "Frontend pages for reports/catalog/history/status",
      "CLI/API support"
    ],
    technicalDetails: [
      "AutoMap v2.3 analysis summary reports",
      "app/analysis_summary_models.py",
      "app/analysis_summary_engine.py",
      "app/analysis_report_exporter.py",
      "automap.analysis_report_history",
      "/api/analysis/reports",
      "/api/analysis/reports/from-refinement",
      "/analysis-reports frontend page"
    ],
    interfaceConcepts: [
      {
        title: "Plain-language Request",
        description:
          "User describes the needed county map while the system resolves intent into known GIS sources.",
        label: "Prototype interface concept"
      },
      {
        title: "Layer Selection",
        description:
          "Candidate sources are checked against approved metadata instead of relying on guessed layers.",
        label: "Prototype interface concept"
      },
      {
        title: "Analysis Report",
        description:
          "Reports summarize counts, warnings, fields, layers, and refinement context for review.",
        label: "Prototype interface concept"
      }
    ]
  },
  {
    slug: "cabarrus-gis-hub",
    title: "Cabarrus County Open Data / GIS Hub Redesign",
    subtitle: "Public GIS infrastructure, metadata, and user-centered data discovery",
    category: "Enterprise GIS / Public Infrastructure",
    type: "Internship / Public GIS Infrastructure Work",
    status: "Professional experience through Cabarrus County GIS Analyst Internship.",
    role: "Independent hub redesign, content organization, GIS item management",
    summary:
      "Redesigned and reorganized a public GIS data hub from department-oriented navigation into user-intent navigation for public users, staff, planners, and external data consumers.",
    homepageSummary:
      "Professional enterprise GIS work focused on ArcGIS Hub, hosted layers, public data access, metadata, sharing settings, and user-centered navigation.",
    tools: [
      "ArcGIS Hub",
      "ArcGIS Online",
      "ArcGIS Enterprise",
      "Portal",
      "Hosted layers",
      "Web maps",
      "Metadata",
      "Sharing settings"
    ],
    focus: [
      "Core GIS Data",
      "Planning & Zoning",
      "Property & Parcel",
      "Applications",
      "Data Portal",
      "Contact workflows"
    ],
    visual: {
      variant: "cabarrus-hub",
      alt: "Prototype ArcGIS Hub information architecture concept for public GIS data"
    },
    featured: true,
    depth: "professional",
    caseStudy: {
      whatItIs:
        "A public GIS infrastructure and data discovery redesign completed through the Cabarrus County GIS Analyst Internship.",
      problem:
        "Public GIS data needs to be findable, understandable, and organized around user needs rather than internal department structures.",
      approach: [
        "Independently designed and rebuilt Cabarrus County's public Open Data / GIS Hub.",
        "Improved navigation, discoverability, and access to GIS resources.",
        "Managed public-facing GIS items through ArcGIS Hub, ArcGIS Online, and ArcGIS Enterprise/Portal.",
        "Worked with hosted layers, web maps, metadata, sharing settings, and access links."
      ],
      system: [
        "Task-based hub categories for core data, planning and zoning, parcel data, applications, data portal access, and contact pathways.",
        "Public data management across parcels, addresses, boundaries, building outlines, zoning, ETJ, municipal zoning, historical zoning, and planning layers.",
        "Cleaner metadata and access patterns for public users and professional data consumers."
      ],
      outputs: [
        "Rebuilt public GIS Hub structure",
        "Improved navigation and discoverability",
        "Standardized public GIS item review pattern",
        "Clearer path from user intent to dataset or app"
      ],
      whyItMatters:
        "This work demonstrates practical enterprise GIS delivery: public data stewardship, metadata quality, hosted layer management, sharing controls, and user-centered GIS infrastructure.",
      nextSteps: [
        "Continue improving metadata consistency and public-facing descriptions.",
        "Document repeatable checks for hosted layer visibility, access links, and category placement."
      ]
    },
    informationArchitecture: [
      "Core GIS Data",
      "Planning & Zoning",
      "Property & Parcel",
      "Applications",
      "Data Portal",
      "Contact"
    ],
    enterpriseSkills: [
      "Public data stewardship",
      "Metadata quality",
      "Hosted layer management",
      "Sharing/access settings",
      "User-centered GIS design",
      "QA/QC workflows"
    ]
  },
  {
    slug: "anime-retail-site-selection",
    title: "Anime Retail Site Selection in Japan",
    subtitle: "Senior Thesis / Applied GIS Research Project",
    category: "Applied GIS / Research",
    type: "Senior Thesis / Applied GIS Research Project",
    status: "Academic research project.",
    role: "Spatial analyst, ArcPy workflow designer, suitability modeling",
    summary:
      "Developed an applied GIS research framework to evaluate optimal locations for an anime retail store in Japan using spatial, demographic, and commercial indicators.",
    tools: [
      "ArcGIS Pro",
      "ArcPy",
      "Spatial joins",
      "Buffers",
      "Near Table",
      "Weighted suitability",
      "Projection checks",
      "Schema validation"
    ],
    focus: [
      "Population density",
      "Transit accessibility",
      "Commercial clustering",
      "Cultural POIs",
      "Competitor locations"
    ],
    visual: {
      variant: "research",
      image: "/project-images/anime/AnimeStoreHotSpot.webp",
      alt: "Anime store hotspot map output"
    },
    featured: true,
    depth: "research",
    caseStudy: {
      whatItIs:
        "An applied GIS research project for evaluating candidate anime retail locations in Japan through repeatable suitability modeling.",
      problem:
        "Retail site selection needs more than a list of busy places; it needs a repeatable way to compare demand, access, competition, and cultural fit.",
      approach: [
        "Combined population density, transit accessibility, commercial clustering, cultural points of interest, and competitor locations.",
        "Used buffers, spatial joins, Near Table workflows, overlay analysis, and weighted suitability modeling.",
        "Built repeatable ArcPy processing with projection checks and schema validation."
      ],
      system: [
        "Input layers prepared and validated before suitability scoring.",
        "Proximity and clustering workflows used to evaluate competitor concentration and cultural retail strength.",
        "Candidate areas ranked by demand potential, foot-traffic proxies, competitive saturation, accessibility, and location strength."
      ],
      outputs: [
        "Ranked candidate area framework",
        "Hotspot and proximity maps",
        "Repeatable processing workflow",
        "Research narrative for planning and retail decisions"
      ],
      whyItMatters:
        "The project translates an academic GIS thesis into a decision-support workflow that resembles real commercial planning analysis.",
      nextSteps: [
        "Add network-based travel time if reliable data is available.",
        "Document sensitivity testing for suitability weights."
      ]
    }
  },
  {
    slug: "elderly-access-services",
    title: "Elderly Access to Services",
    subtitle: "GIS Accessibility / Planning Analysis",
    category: "Applied GIS / Research",
    type: "GIS Accessibility / Planning Analysis",
    status: "Academic planning analysis.",
    role: "GIS analyst, accessibility mapping, ArcPy automation",
    summary:
      "Analyzed geographic access to long-term care facilities for Tokyo's elderly population using ward-level density, facility overlays, GIS overlays, ArcPy automation, choropleth maps, and accessibility analysis.",
    tools: [
      "ArcGIS Pro",
      "ArcPy",
      "Choropleth mapping",
      "Overlay analysis",
      "Facility location mapping",
      "Accessibility analysis"
    ],
    focus: [
      "Elderly population density",
      "Long-term care access",
      "Service equity",
      "Ward-level planning",
      "Reproducible mapping"
    ],
    visual: {
      variant: "research",
      image: "/project-images/ltc/FacilitiesOverlayPopDens65.webp",
      alt: "Long-term care facility overlay on elderly population density"
    },
    featured: false,
    depth: "research",
    caseStudy: {
      whatItIs:
        "A GIS accessibility and planning analysis focused on long-term care service equity for Tokyo's elderly population.",
      problem:
        "Elderly service planning depends on whether long-term care facilities align with where older residents actually live.",
      approach: [
        "Mapped ward-level elderly density and facility locations to identify alignment and potential service gaps.",
        "Used GIS overlays, choropleth maps, facility points, and ArcPy automation for repeatable outputs.",
        "Kept the analysis focused on long-term care service equity rather than general demographic mapping."
      ],
      system: [
        "Ward boundaries and population attributes joined and checked before density mapping.",
        "Facility locations overlaid with elderly density to support access interpretation.",
        "Automated map exports and table outputs through ArcPy workflows."
      ],
      outputs: [
        "Elderly density maps",
        "Long-term care facility overlay maps",
        "Accessibility interpretation for planning",
        "Repeatable ArcPy workflow"
      ],
      whyItMatters:
        "This project shows how GIS can support social infrastructure planning and equitable service access for aging populations.",
      nextSteps: [
        "Incorporate travel-time or transit accessibility when network data is available.",
        "Add facility capacity if reliable source data can be obtained."
      ]
    }
  },
  {
    slug: "nc-working-age-lisa",
    title: "NC Working Age LISA Analysis in R",
    subtitle: "Spatial Statistics / Demographic Clustering",
    category: "Applied GIS / Research",
    type: "Spatial Statistics / Demographic Clustering",
    status: "Academic spatial statistics project.",
    role: "Spatial statistics analyst, R workflow author, map interpretation",
    summary:
      "Analyzed spatial clustering patterns in North Carolina's working-age population using LISA and local spatial autocorrelation workflows in R.",
    tools: [
      "R",
      "RStudio",
      "sf",
      "spdep",
      "rgeoda",
      "tmap",
      "ACS data",
      "TIGER/Line"
    ],
    focus: [
      "Local Moran's I",
      "High-High clusters",
      "Low-Low clusters",
      "County and regional patterns",
      "Demographic interpretation"
    ],
    visual: {
      variant: "research",
      image: "/project-images/working-age/LISA_Clusters.webp",
      alt: "North Carolina working-age LISA cluster map"
    },
    featured: false,
    depth: "research",
    caseStudy: {
      whatItIs:
        "A spatial statistics project using R to evaluate working-age demographic clustering patterns in North Carolina.",
      problem:
        "Statewide demographic patterns are hard to interpret from raw percentages alone; planners need to understand where working-age concentration is spatially clustered.",
      approach: [
        "Used R spatial workflows to calculate and map local spatial autocorrelation for working-age population patterns.",
        "Interpreted High-High, Low-Low, and outlier clusters in a demographic planning context.",
        "Corrected the previous portfolio issue where this project reused the Tokyo elderly access description."
      ],
      system: [
        "ACS estimates and TIGER/Line geometries prepared for spatial analysis.",
        "Spatial weights and Local Moran's I workflow used to classify cluster patterns.",
        "Maps and figures exported for interpretation and communication."
      ],
      outputs: [
        "Working-age choropleth",
        "LISA cluster map",
        "Cluster and outlier interpretation",
        "R-based reproducible workflow"
      ],
      whyItMatters:
        "The project demonstrates spatial statistics beyond visualization, with emphasis on demographic pattern detection and regional interpretation.",
      nextSteps: [
        "Add temporal ACS comparisons if a future workflow needs trend analysis.",
        "Integrate employment, commuting, or housing indicators for richer planning insight."
      ]
    }
  }
];

export const featuredProjects = projects.filter((project) => project.featured);

export const flagshipProject = projects.find(
  (project) => project.slug === "cabarrus-futurescape"
);

export const projectCategories: ProjectCategory[] = [
  "Flagship Systems",
  "Enterprise GIS / Public Infrastructure",
  "Automation Systems",
  "Applied GIS / Research"
];

export const researchProjects = projects.filter(
  (project) => project.category === "Applied GIS / Research"
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
