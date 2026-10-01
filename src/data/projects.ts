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
export type ProjectIndustryCategory =
  | "public-systems"
  | "utilities-infrastructure"
  | "gis-systems-automation";

export type ProjectFilterValue = "all" | ProjectIndustryCategory;
export type ProfessionalTrack = "government" | "utilities";

export type AdditionalTechnicalBuild = {
  title: string;
  summary: string;
  status: string;
  tags: string[];
};

export type Project = {
  slug: string;
  title: string;
  shortTitle?: string;
  subtitle: string;
  category: ProjectCategory;
  categories: ProjectIndustryCategory[];
  primaryTrack: ProfessionalTrack;
  tracks: ProfessionalTrack[];
  primaryIndustry?: string;
  capabilityCategory?: string;
  type: string;
  status: string;
  role: string;
  summary: string;
  purpose?: string;
  homepageSummary?: string;
  tools: string[];
  focus: string[];
  industryTags: string[];
  visual: {
    variant: VisualVariant;
    image?: string;
    alt: string;
    caption?: string;
  };
  featured: boolean;
  published?: boolean;
  depth: ProjectDepth;
  implementationNote?: string;
  relatedCaseStudies?: { title: string; href: string }[];
  routeOrder: number;
  junction?: boolean;
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
    title: "Cabarrus Insights",
    shortTitle: "Cabarrus Insights",
    subtitle: "County Planning Intelligence & GIS Decision-Support Platform",
    category: "Flagship Systems",
    categories: [
      "public-systems",
      "utilities-infrastructure",
      "gis-systems-automation"
    ],
    primaryTrack: "government",
    tracks: ["government", "utilities"],
    primaryIndustry: "Public Systems & Planning Intelligence",
    capabilityCategory: "Planning intelligence / infrastructure context",
    type: "County Planning Intelligence Platform",
    status:
      "Personal prototype / ongoing applied GIS platform. Not an official county system.",
    role: "Product strategy, spatial data architecture, full-stack implementation, Web GIS prototype",
    summary:
      "A county-scale GIS intelligence prototype connecting parcel context, observed development activity, planning and economic insights, infrastructure context, transparent analytical signals, and governed data workflows.",
    purpose:
      "Independent planning-intelligence prototype for parcel review, permit activity, growth context, planning constraints, school utilization context, and utility/service capacity awareness.",
    homepageSummary:
      "A live planning intelligence prototype for parcel review, development activity, constraints, infrastructure context, transparent analytical signals, and governed data workflows.",
    tools: [
      "Next.js",
      "TypeScript",
      "ArcGIS Maps SDK",
      "MapView",
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
      "Permit hotspots",
      "Development hotspots",
      "School capacity context",
      "Development activity",
      "Growth pressure",
      "Infrastructure readiness",
      "Constraint intelligence",
      "Economic review",
      "Governed master data",
      "Development pressure ranking",
      "Snapshot reporting"
    ],
    industryTags: [
      "Planning Intelligence",
      "Parcel Analytics",
      "Permitting",
      "Infrastructure Capacity"
    ],
    visual: {
      variant: "cabarrus-futurescape",
      image: "/projects/cabarrus-insights/countywide-development-hotspots.png",
      alt: "Live Cabarrus Insights countywide planning intelligence interface",
      caption: "Live Cabarrus Insights prototype"
    },
    featured: true,
    published: true,
    depth: "flagship",
    relatedCaseStudies: [
      {
        title: "Growth and Infrastructure Intelligence",
        href: "/case-studies/cabarrus-futurescape"
      },
      {
        title: "School Utilization and Development Pressure Review",
        href: "/case-studies/school-pressure"
      },
      {
        title: "Real Estate Screening Framework",
        href: "/case-studies/real-estate-screening"
      }
    ],
    routeOrder: 1,
    junction: true,
    caseStudy: {
      whatItIs:
        "A live county-scale planning intelligence prototype for Cabarrus County, focused on parcels, observed development activity, school context, infrastructure awareness, constraints, economic review, and governed data workflows.",
      problem:
        "County planning data is spread across parcels, zoning, permits, school context, flood layers, infrastructure sources, and public REST services. Planning teams need a clearer way to move from countywide patterns to parcel evidence, understand where observed activity is concentrated, and preserve the limitations behind each signal.",
      approach: [
        "Designed a product-oriented information architecture around Management, Analyst, and Master Data workspaces.",
        "Connected countywide map exploration with planning, economic, school, flood, permit, and infrastructure-context review.",
        "Made source coverage, unavailable official data, proxy limitations, and analytical caveats visible in the interface.",
        "Presented first-pass development signals as relative ranking evidence for prioritization, not deterministic parcel predictions or final approvals."
      ],
      system: [
        "2D Web GIS workspace for countywide parcel, permit, constraint, school, and infrastructure-context review.",
        "Management views for planning and economic summaries tied to a selected analysis period.",
        "Indicator Center and Model Lab views that separate observed activity, preliminary attention signals, relative bands, and held-out aggregate evidence.",
        "Governed Master Data workflow for dataset discovery, field selection, filtering, preview, and CSV or XLSX export."
      ],
      outputs: [
        "Live interactive Web GIS planning intelligence prototype",
        "Countywide development activity and infrastructure-context workspace",
        "Planning, economic, and indicator dashboards",
        "School-utilization and observed-permit review signals",
        "Transparent development-signal research view",
        "Governed parcel, permit, address, zoning, flood, and school catalog",
        "Filterable data previews with CSV and XLSX export"
      ],
      whyItMatters:
        "Cabarrus Insights shows the ability to move beyond static maps into a deployed planning intelligence system that combines governed data, Web GIS, transparent analysis, and decision support.",
      nextSteps: [
        "Continue documenting source coverage, update cadence, and field-level QA rules.",
        "Add official infrastructure-capacity layers only when verified data is available.",
        "Expand snapshot and report exports while keeping evidence and caveats visible.",
        "Improve the early development pressure ranking only after source data, assumptions, and QA rules are documented.",
        "Treat ranking outputs as planning prioritization signals, not final approvals or deterministic predictions."
      ]
    },
    architecture: [
      "Data Sources",
      "Ingestion / QA",
      "PostGIS / Registry",
      "2D Web GIS",
      "Management / Analyst Views",
      "Governed Exports"
    ],
    coreModules: [
      {
        title: "Countywide Map & Parcel Search",
        description:
          "2D map exploration, global parcel search, live layers, selected-feature context, and snapshot actions."
      },
      {
        title: "Permit Hotspots",
        description:
          "Permit and activity signals organized to show where review pressure is emerging."
      },
      {
        title: "Planning Insights",
        description:
          "Development hotspots, flood review, school assignment context, and follow-up links organized for management review."
      },
      {
        title: "School Capacity Context",
        description:
          "Preliminary school-capacity and service context used as a planning signal, not a final capacity determination."
      },
      {
        title: "Indicator Center",
        description:
          "Observed permit activity and preliminary school-utilization context with coverage labels and explainable signals."
      },
      {
        title: "Infrastructure Awareness",
        description:
          "Sewer proximity, subbasin, transportation, and service context presented with explicit proxy and data-availability caveats."
      },
      {
        title: "Economic Insights",
        description:
          "Selected-period development activity and parcel-value context used to identify where deeper economic review may be useful."
      },
      {
        title: "Governed Master Data",
        description:
          "Curated dataset catalog, allowed-field selection, filters, record previews, and documented CSV or XLSX exports."
      },
      {
        title: "Development Pressure Ranking",
        description:
          "First-pass relative development likelihood ranking for prioritization, using parcel-level signals without claiming deterministic prediction."
      }
    ],
    methods: [
      "ArcGIS REST services",
      "ArcGIS Maps SDK 2D MapView",
      "Parcel overlays",
      "Permit history",
      "Development activity signals",
      "Zoning / ETJ / municipal boundaries",
      "Flood exposure",
      "School assignment and utilization context",
      "Sewer proximity and infrastructure proxy context",
      "Economic and assessed-value review",
      "PostGIS-backed governed datasets",
      "Field selection and filtered exports",
      "First-pass relative development likelihood ranking",
      "Coverage notes and analytical caveats"
    ]
  },
  {
    slug: "automap",
    title: "AutoMap: County GIS Request Engine",
    shortTitle: "AutoMap",
    subtitle: "AI-assisted county map request and ArcGIS REST automation engine",
    category: "Automation Systems",
    categories: ["public-systems", "gis-systems-automation"],
    primaryTrack: "government",
    tracks: ["government"],
    primaryIndustry: "Public Systems & Planning Intelligence",
    capabilityCategory: "GIS systems & automation",
    type: "AI-assisted County Map Request / REST Layer Automation Engine",
    status: "Active personal project. Live deployed prototype.",
    role: "Full-stack workflow design, deterministic request intelligence, GIS automation architecture",
    summary:
      "AutoMap is a county GIS request engine that converts plain-English mapping requests into draft GIS previews, workflow interpretation, QA notes, and export-ready map concepts. The portfolio demo is static/cached for reliable review, while the live workbench demonstrates backend-connected workflows when services are available.",
    purpose:
      "County GIS request workflow for turning plain-language map needs into repeatable layer selection, map-generation, refinement, and review steps.",
    homepageSummary:
      "A live GIS automation engine for county map requests, approved REST layer selection, customizable map recipes, refinement, and analysis report generation.",
    implementationNote:
      "AutoMap is separate from Cabarrus Insights. The deployed prototype is designed for reviewable workflows and does not perform real county publishing actions.",
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
      "Approved source matching",
      "REST metadata validation",
      "Layer selection",
      "Map recipes",
      "Customization layer",
      "Refinement workflows",
      "Analysis reports",
      "Report history"
    ],
    industryTags: [
      "Automation",
      "ArcGIS REST",
      "Web GIS",
      "Data Validation"
    ],
    visual: {
      variant: "automap",
      image: "/projects/automap-live-preview.png",
      alt: "Live AutoMap deployed prototype interface",
      caption: "AutoMap deployed interface"
    },
    featured: true,
    published: true,
    depth: "platform",
    relatedCaseStudies: [
      {
        title: "GIS Request Automation and Operational Review",
        href: "/case-studies/automap"
      }
    ],
    routeOrder: 2,
    caseStudy: {
      whatItIs:
        "AutoMap is a county GIS request engine that converts plain-English mapping requests into draft GIS previews, workflow interpretation, QA notes, and export-ready map concepts. The portfolio demo is static/cached for reliable review, while the live workbench demonstrates backend-connected workflows when services are available.",
      problem:
        "County GIS requests often arrive as plain language, but building the correct map requires knowing which REST layers, fields, filters, geometries, and limitations apply.",
      approach: [
        "Built a deterministic request intelligence flow that translates user wording into structured map intent without inventing layers, fields, URLs, or data sources.",
        "Stored and validated layer metadata so recipes can be built from known ArcGIS REST services.",
        "Added customization options, refinement workflows, and report generation so reviewers can understand counts, warnings, and data limitations."
      ],
      system: [
        "FastAPI backend with recipe, refinement, approval, analysis, and report endpoints.",
        "Next.js frontend with dashboard, map request, analysis, analysis reports, catalog, history, methodology, and system status pages.",
        "Safer workflow pattern where approved source matching, REST metadata validation, recipe generation, and report history are reviewable before any operational use."
      ],
      outputs: [
        "Live deployed AutoMap prototype",
        "AutoMap v2.3 analysis summary reports",
        "Local HTML, Markdown, JSON, CSV report packages",
        "Grouped statistics support using returnGeometry=false",
        "Frontend report history and /analysis-reports workflow",
        "Customizable map recipe and refinement workflow"
      ],
      whyItMatters:
        "AutoMap shows how GIS teams could turn repeated plain-language map requests into reviewable, auditable, safer, and more repeatable automation workflows.",
      nextSteps: [
        "Keep real publishing behind explicit local CLI safeguards.",
        "Expand supported analysis operations only when feature limits and review rules are clear.",
        "Connect more sanitized demo sources and continue improving report history, customization, and source validation."
      ]
    },
    workflow: [
      "Prompt",
      "Data gap / layer registry",
      "Candidate source evaluation",
      "Map recipe",
      "Map preview",
      "Customization",
      "Refinement",
      "Analysis report"
    ],
    capabilities: [
      "REST layer registry",
      "Map request interpretation",
      "Layer selection",
      "Approved source matching",
      "REST metadata validation",
      "Approved source workflow",
      "Analysis summary reports",
      "Grouped statistics",
      "returnGeometry=false optimization",
      "Frontend pages for reports/catalog/history/status",
      "Customization options",
      "Refinement workflow",
      "Report history",
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
          "User wording becomes structured map intent that can be checked against known GIS sources.",
        label: "Live prototype workflow"
      },
      {
        title: "Source Validation",
        description:
          "Candidate sources are checked against approved REST metadata instead of relying on guessed layers.",
        label: "Live prototype workflow"
      },
      {
        title: "Analysis Report",
        description:
          "Reports summarize counts, warnings, fields, layers, customization choices, and refinement context for review.",
        label: "Live prototype workflow"
      }
    ]
  },
  {
    slug: "cabarrus-gis-hub",
    title: "Cabarrus County Open Data / GIS Hub Redesign",
    shortTitle: "Cabarrus GIS Hub",
    subtitle: "Public GIS infrastructure, metadata, and user-centered data discovery",
    category: "Enterprise GIS / Public Infrastructure",
    categories: ["public-systems", "gis-systems-automation"],
    primaryTrack: "government",
    tracks: ["government"],
    primaryIndustry: "Public Systems & Planning Intelligence",
    capabilityCategory: "GIS modernization / public data",
    type: "Internship / Public GIS Infrastructure Work",
    status: "Professional experience through Cabarrus County GIS Analyst Internship.",
    role: "Independent hub redesign, content organization, GIS item management",
    summary:
      "Redesigned and reorganized a public GIS data hub from department-oriented navigation into user-intent navigation for public users, staff, planners, and external data consumers.",
    purpose:
      "Professional contribution to public GIS data organization, metadata, hosted item structure, and public-sector information architecture.",
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
    industryTags: [
      "Enterprise GIS",
      "Public Data",
      "ArcGIS Hub",
      "Metadata",
      "Government IA"
    ],
    visual: {
      variant: "cabarrus-hub",
      image: "/projects/cabarrus-open-data-preview.png",
      alt: "Cabarrus County Open Data GIS Hub website preview",
      caption: "Cabarrus County Open Data website preview"
    },
    featured: true,
    published: true,
    depth: "professional",
    relatedCaseStudies: [
      {
        title: "Improving Public Access to County GIS Data",
        href: "/case-studies/gis-hub"
      }
    ],
    routeOrder: 3,
    caseStudy: {
      whatItIs:
        "A public GIS infrastructure and data discovery redesign completed through the Cabarrus County GIS Analyst Internship.",
      problem:
        "Public GIS data needs to be findable, understandable, and organized around user needs rather than internal department structures.",
      approach: [
        "Contributed to the design and rebuild of Cabarrus County's public Open Data / GIS Hub.",
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
    categories: ["gis-systems-automation"],
    primaryTrack: "government",
    tracks: ["government"],
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
    industryTags: [
      "Location Intelligence",
      "Site Selection",
      "Market Analysis",
      "ArcPy"
    ],
    visual: {
      variant: "research",
      image: "/project-images/anime/AnimeStoreHotSpot.webp",
      alt: "Anime store hotspot map output"
    },
    featured: true,
    published: false,
    depth: "research",
    relatedCaseStudies: [
      {
        title: "Spatial Determinants of Anime Store Locations in Tokyo",
        href: "/case-studies/anime-retail-site-selection-tokyo"
      }
    ],
    routeOrder: 99,
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
    categories: ["public-systems"],
    primaryTrack: "government",
    tracks: ["government"],
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
    industryTags: [
      "Accessibility",
      "Service Equity",
      "Planning Analysis",
      "ArcPy"
    ],
    visual: {
      variant: "research",
      image: "/project-images/ltc/FacilitiesOverlayPopDens65.webp",
      alt: "Long-term care facility overlay on elderly population density"
    },
    featured: false,
    published: false,
    depth: "research",
    relatedCaseStudies: [
      {
        title: "Geographic Access to Long-Term Care Facilities for Japan's Aging Population",
        href: "/case-studies/ltc-facilities-aging-population-japan"
      }
    ],
    routeOrder: 99,
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
    categories: ["public-systems"],
    primaryTrack: "government",
    tracks: ["government"],
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
    industryTags: [
      "Spatial Statistics",
      "Demographic Analysis",
      "R",
      "LISA"
    ],
    visual: {
      variant: "research",
      image: "/project-images/working-age/LISA_Clusters.webp",
      alt: "North Carolina working-age LISA cluster map"
    },
    featured: false,
    published: false,
    depth: "research",
    routeOrder: 99,
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

export const featuredProjects = projects.filter(
  (project) => project.featured && project.published !== false
);

export const flagshipProject = projects.find(
  (project) => project.slug === "cabarrus-futurescape"
);

export const projectCategories: ProjectCategory[] = [
  "Flagship Systems",
  "Enterprise GIS / Public Infrastructure",
  "Automation Systems",
  "Applied GIS / Research"
];

export const projectFilterOptions: { value: ProjectFilterValue; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "public-systems", label: "Public Systems" },
  { value: "utilities-infrastructure", label: "Utilities & Infrastructure" },
  { value: "gis-systems-automation", label: "GIS Systems & Automation" }
];

export const projectTrackPanels: {
  value: ProfessionalTrack;
  title: string;
  description: string;
  labels: string[];
  featuredProject: string;
  action: string;
}[] = [
  {
    value: "government",
    title: "Government Technology",
    description:
      "County GIS, planning intelligence, public data, permitting, automation, growth management, and digital government systems.",
    labels: ["County GIS", "Planning Systems", "Public Data", "GIS Automation"],
    featuredProject: "Cabarrus Insights",
    action: "Explore Government Technology"
  },
  {
    value: "utilities",
    title: "Utilities & Network Infrastructure",
    description:
      "Telecom, broadband, water and sewer systems, electric infrastructure, service territories, utility assets, capacity, and network expansion.",
    labels: [
      "Utility Networks",
      "Service Territories",
      "Infrastructure Capacity"
    ],
    featuredProject: "Infrastructure intelligence module",
    action: "Explore Infrastructure Systems"
  }
];

export const sharedFoundationCapabilities = [
  "ArcGIS Enterprise",
  "ArcGIS Pro",
  "PostGIS",
  "Python",
  "ArcPy",
  "Web GIS",
  "REST Services",
  "Data Integration"
];

export const additionalTechnicalBuilds: AdditionalTechnicalBuild[] = [
  {
    title: "Nimbus Teppanyaki",
    summary:
      "Independent small-business build focused on customer booking workflow, database integration, deployment, service-area communication, and customer experience.",
    status: "Independent technical build",
    tags: ["Full-stack", "Database", "Deployment", "Customer Workflow"]
  },
  {
    title: "StockPicker369",
    summary:
      "Independent data and analytics build kept separate from the primary GIS portfolio so the main story stays focused on public systems, infrastructure, and automation.",
    status: "Independent technical build",
    tags: ["Data Engineering", "Analytics", "Risk Analysis"]
  }
];

export const researchProjects = projects.filter(
  (project) => project.category === "Applied GIS / Research"
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
