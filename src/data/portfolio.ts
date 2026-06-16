export type VisualVariant =
  | "cabarrus-futurescape"
  | "automap"
  | "cabarrus-hub"
  | "research";

export type Project = {
  id: string;
  title: string;
  type: string;
  status: string;
  role: string;
  summary: string;
  tools: string[];
  focus: string[];
  visual: {
    variant: VisualVariant;
    image?: string;
    alt: string;
  };
  featured: boolean;
  caseStudy: {
    problem: string;
    approach: string[];
    system: string[];
    outputs: string[];
    whyItMatters: string;
    nextSteps: string[];
  };
};

export const contact = {
  name: "Khoi Nguyen",
  location: "Concord, NC",
  email: "khoianhnguyen48@gmail.com",
  github: "https://github.com/khoi9034",
  resumePath: "/resume/KhoiNguyenResume.pdf"
};

export const impactSignals = [
  "County-scale GIS workflows",
  "Parcel intelligence",
  "ArcGIS Hub / Enterprise",
  "Automation-first QA/QC",
  "Web GIS dashboards",
  "Spatial modeling"
];

export const projects: Project[] = [
  {
    id: "cabarrus-futurescape",
    title: "Cabarrus FutureScape",
    type: "County Digital Twin & Growth Intelligence Platform",
    status:
      "Personal prototype / ongoing applied GIS platform. Not an official county system.",
    role: "Product strategy, spatial data architecture, dashboard concept, Web GIS prototype",
    summary:
      "A county-scale digital twin prototype for parcel intelligence, development activity, infrastructure awareness, growth pressure, and planning decision support.",
    tools: [
      "Next.js",
      "TypeScript",
      "ArcGIS Maps SDK",
      "SceneView",
      "PostGIS",
      "ArcGIS REST services",
      "Google Earth Engine",
      "GeoPandas",
      "ArcPy"
    ],
    focus: [
      "Parcel selection",
      "Growth pressure review",
      "Infrastructure readiness",
      "Constraint intelligence",
      "Environmental workflows"
    ],
    visual: {
      variant: "cabarrus-futurescape",
      alt: "Synthetic command-center map interface for Cabarrus FutureScape"
    },
    featured: true,
    caseStudy: {
      problem:
        "Planning teams need a clearer way to see how parcels, constraints, infrastructure, environmental signals, and development activity interact across a growing county.",
      approach: [
        "Designed a prototype information architecture around parcels, development pressure, zoning, ETJ, municipal boundaries, flood exposure, schools, and environmental constraints.",
        "Separated raw, derived, metadata, and QA outputs so future PostGIS ingestion and dashboard analytics can be handled cleanly.",
        "Framed the interface as an executive planning dashboard rather than a one-off map viewer."
      ],
      system: [
        "SceneView and Web GIS dashboard concept for county-scale spatial review.",
        "Parcel intelligence summaries tied to development, infrastructure, zoning, and environmental context.",
        "Environmental analysis concepts using Landsat surface temperature, NDVI, Dynamic World land cover, terrain, hydrology, rainfall, and flooding data."
      ],
      outputs: [
        "Interactive dashboard concept",
        "Parcel intelligence summary pattern",
        "Constraint and readiness layer model",
        "Future report concepts for planning review"
      ],
      whyItMatters:
        "The project demonstrates how county planning data can move from static layers into a decision-ready spatial intelligence system.",
      nextSteps: [
        "Connect stable public REST layers and local prototype data sources.",
        "Document assumptions and create a reproducible QA checklist before any public demo.",
        "Keep the project clearly labeled as a personal prototype unless an official public source says otherwise."
      ]
    }
  },
  {
    id: "automap",
    title: "AutoMap",
    type: "AI-assisted County Map Request / REST Layer Automation Engine",
    status: "Active personal project. Local development ports: frontend 3010, API 8010.",
    role: "Full-stack workflow design, deterministic request intelligence, GIS automation architecture",
    summary:
      "A ChatGPT-like map request engine for county GIS that ingests ArcGIS REST metadata, selects only relevant approved layers, drafts map recipes, supports refinement, and produces local review reports.",
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
      "Layer matching",
      "Prompt-to-recipe workflows",
      "Safe analysis planning",
      "Grouped statistics",
      "Review packets"
    ],
    visual: {
      variant: "automap",
      alt: "Synthetic AutoMap request-to-layer workflow interface"
    },
    featured: true,
    caseStudy: {
      problem:
        "County GIS requests often arrive as plain-language questions, while the actual work requires verified REST layers, safe filters, review steps, and clear limitations.",
      approach: [
        "Built a deterministic request intelligence flow that interprets map requests without inventing layers, fields, URLs, or data sources.",
        "Stored and validated layer metadata so recipes can be built from known ArcGIS REST services.",
        "Added local report generation for analysis runs and refinements so reviewers can understand counts, warnings, and data limitations."
      ],
      system: [
        "FastAPI backend with recipe, refinement, approval, analysis, and report endpoints.",
        "Next.js frontend with dashboard, map request, analysis, analysis reports, catalog, history, and system status pages.",
        "Guarded port model that reserves 3000/8000 for Cabarrus FutureScape and uses 3010/8010 for AutoMap."
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
    }
  },
  {
    id: "cabarrus-gis-hub",
    title: "Cabarrus County Open Data / GIS Hub Redesign",
    type: "Internship / Public GIS Infrastructure Work",
    status: "Professional experience through Cabarrus County GIS Analyst Internship.",
    role: "Independent hub redesign, content organization, GIS item management",
    summary:
      "Redesigned and reorganized a public GIS data hub from department-oriented navigation into user-intent navigation for public users, staff, planners, and external data consumers.",
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
      alt: "Synthetic ArcGIS Hub navigation architecture for public GIS data"
    },
    featured: true,
    caseStudy: {
      problem:
        "Public GIS data is only useful when people can discover it quickly, understand what it contains, and access the right hosted layer, map, or application.",
      approach: [
        "Reorganized navigation around user tasks instead of internal department structure.",
        "Managed public-facing GIS items through ArcGIS Hub, ArcGIS Online, and ArcGIS Enterprise/Portal.",
        "Reviewed hosted layers, web maps, metadata, sharing settings, access links, and public data workflows."
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
        "This is the practical enterprise GIS layer of the portfolio: public data stewardship, metadata quality, sharing controls, and user-centered GIS infrastructure.",
      nextSteps: [
        "Continue improving metadata consistency and public-facing descriptions.",
        "Document repeatable checks for hosted layer visibility, access links, and category placement."
      ]
    }
  },
  {
    id: "anime-retail-site-selection",
    title: "Anime Retail Site Selection in Japan",
    type: "Senior Thesis / Applied GIS Research Project",
    status: "Academic research project.",
    role: "Spatial analyst, ArcPy workflow designer, suitability modeling",
    summary:
      "Built an applied GIS framework to evaluate optimal locations for an anime retail store in Japan using spatial, demographic, transit, commercial, and cultural indicators.",
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
    caseStudy: {
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
    id: "elderly-access-services",
    title: "Elderly Access to Services",
    type: "GIS Accessibility / Planning Analysis",
    status: "Academic planning analysis.",
    role: "GIS analyst, accessibility mapping, ArcPy automation",
    summary:
      "Analyzed geographic access to long-term care facilities for Tokyo's elderly population using ward-level density, facility overlays, and reproducible GIS processing.",
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
    caseStudy: {
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
        "LTC facility overlay maps",
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
    id: "nc-working-age-lisa",
    title: "NC Working Age LISA Analysis in R",
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
      "County and tract patterns",
      "Demographic interpretation"
    ],
    visual: {
      variant: "research",
      image: "/project-images/working-age/LISA_Clusters.webp",
      alt: "North Carolina working-age LISA cluster map"
    },
    featured: false,
    caseStudy: {
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

export const skillGroups = [
  {
    title: "Enterprise GIS",
    skills: [
      "ArcGIS Pro",
      "ArcGIS Enterprise",
      "Portal",
      "ArcGIS Online",
      "ArcGIS Hub",
      "Feature service publishing",
      "Hosted layers",
      "Web maps",
      "Sharing settings",
      "Metadata",
      "Public data workflows"
    ]
  },
  {
    title: "Web GIS / Digital Twin",
    skills: [
      "Next.js",
      "TypeScript",
      "ArcGIS Maps SDK",
      "SceneView",
      "Parcel intelligence",
      "Development dashboards",
      "Operational GIS layers",
      "Scenario planning",
      "Infrastructure awareness"
    ]
  },
  {
    title: "GIS Automation",
    skills: [
      "ArcPy",
      "Python",
      "ModelBuilder",
      "Batch geoprocessing",
      "Schema validation",
      "Projection validation",
      "QA/QC",
      "Raster and vector processing"
    ]
  },
  {
    title: "Spatial Analysis / Modeling",
    skills: [
      "Google Earth Engine",
      "Spatial statistics",
      "Suitability modeling",
      "LISA",
      "Hotspot analysis",
      "Buffers",
      "Spatial joins",
      "Near Table workflows",
      "Accessibility analysis"
    ]
  },
  {
    title: "Data Engineering / QA",
    skills: [
      "GeoPandas",
      "PostGIS",
      "Geodatabases",
      "Shapefiles",
      "REST metadata review",
      "Layer catalogs",
      "Data dictionaries",
      "Quality gates"
    ]
  },
  {
    title: "Research / Planning",
    skills: [
      "Urban planning analysis",
      "Growth analysis",
      "Parcel review",
      "Service equity",
      "Demographic clustering",
      "Executive reporting",
      "Decision support"
    ]
  }
];

export const experience = {
  title: "GIS Analyst Intern",
  organization: "Cabarrus County, NC",
  dates: "March 2026 - Present",
  bullets: [
    "Independently designed and rebuilt Cabarrus County's public Open Data / GIS Hub, improving navigation, discoverability, and access to county GIS resources.",
    "Managed public-facing GIS items through ArcGIS Hub, ArcGIS Online, and ArcGIS Enterprise/Portal, including hosted layers, web maps, metadata, sharing settings, and access links.",
    "Used ArcPy and GIS data management workflows to review and standardize county-scale datasets, including parcels, addresses, boundaries, building outlines, zoning, and planning layers.",
    "Improved discoverability and usability of county GIS resources for public users, county staff, planners, and external data consumers through clearer structure and navigation."
  ]
};

export const education = {
  school: "University of North Carolina at Chapel Hill",
  degree: "B.A. Geography, Minor in GIS",
  graduation: "May 2026",
  gpa: "Major & Minor GPA: 3.3",
  languages: ["English fluent", "Vietnamese fluent"]
};
