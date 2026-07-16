export const contact = {
  name: "Khoi Nguyen",
  location: "Concord, NC",
  email: "khoianhnguyen48@gmail.com",
  github: "https://github.com/khoi9034",
  resumePath: "/resume/KhoiNguyenResume.pdf"
};

export const education = {
  school: "University of North Carolina at Chapel Hill",
  degree: "B.A. Geography | Minor in GIS",
  graduation: "May 2026",
  gpa: "Major & Minor GPA: 3.3",
  languages: ["English fluent", "Vietnamese fluent"]
};

export const experience = {
  title: "GIS Analyst Intern",
  organization: "Cabarrus County, NC",
  dates: "March 2026 - Present",
  label: "Professional experience through Cabarrus County GIS Analyst Internship.",
  bullets: [
    "Independently designed and rebuilt Cabarrus County's public Open Data / GIS Hub, improving navigation, discoverability, and access to county GIS resources.",
    "Managed public-facing GIS items through ArcGIS Hub, ArcGIS Online, and ArcGIS Enterprise/Portal, including hosted layers, web maps, metadata, sharing settings, and access links.",
    "Used ArcPy and GIS data management workflows to review and standardize county-scale datasets, including parcels, addresses, boundaries, building outlines, zoning, and planning layers.",
    "Improved discoverability and usability of county GIS resources for public users, county staff, planners, and external data consumers through clearer structure and navigation."
  ]
};

export const credibilityStack = [
  "Enterprise GIS",
  "ArcGIS Hub",
  "ArcGIS Enterprise",
  "ArcPy",
  "Next.js",
  "TypeScript",
  "ArcGIS Maps SDK",
  "Google Earth Engine",
  "PostGIS"
];

export const systemsBuilt = [
  {
    title: "Digital Twin & Planning Intelligence",
    summary:
      "County-scale interfaces that connect parcels, constraints, infrastructure context, environmental signals, and executive planning outputs.",
    signal: "Parcel intelligence / growth pressure / scenario planning"
  },
  {
    title: "GIS Automation & QA/QC",
    summary:
      "Repeatable ArcPy and Python workflows for schema validation, projection checks, batch geoprocessing, metadata review, and safer GIS operations.",
    signal: "Automation-first spatial data management"
  },
  {
    title: "Public GIS Infrastructure",
    summary:
      "User-centered ArcGIS Hub, Portal, hosted layer, web map, metadata, sharing, and open data workflows for public-sector GIS programs.",
    signal: "Discoverable county GIS resources"
  }
];

export const pathway = {
  title: "Pathway: Enterprise GIS, Planning Intelligence, and Urban Analytics",
  intro:
    "My goal is to grow into roles that connect county GIS operations, planning analytics, automation, digital twin systems, spatial decision support, and urban growth analysis.",
  currentFocus: [
    "Enterprise GIS and county data systems",
    "Public GIS infrastructure and metadata stewardship",
    "Cabarrus FutureScape digital twin prototype",
    "AutoMap county GIS request automation",
    "ArcPy QA/QC and reproducible spatial workflows"
  ],
  nearTermRoles: [
    "GIS Analyst",
    "Urban Planning Analyst",
    "Web GIS Analyst",
    "Spatial Data Analyst",
    "Planning Intelligence Analyst",
    "GIS Automation Analyst"
  ],
  longTermDirection:
    "Digital twin and geospatial intelligence systems for planning, infrastructure, economic development, and public-sector decision support.",
  why:
    "I want to build GIS systems that move beyond map display into analysis, prediction, scenario planning, and decision support."
};

export const navigation = [
  { href: "/projects", label: "Projects" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
];
