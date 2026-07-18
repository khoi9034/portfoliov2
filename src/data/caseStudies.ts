import { researchBriefs } from "./research";

export type CaseStudyCategory =
  | "government-planning"
  | "utilities-infrastructure"
  | "real-estate-location"
  | "gis-modernization";

export type CaseStudyFilterValue = "all" | CaseStudyCategory;
export type CaseStudyDecisionType =
  | "Growth and Capacity"
  | "Network Expansion"
  | "Data Modernization"
  | "Operational Efficiency"
  | "Site and Investment Screening"
  | "Public Service Delivery"
  | "Infrastructure Readiness";

export type CaseStudyTrack = "government" | "utilities";

export type CaseStudy = {
  slug: string;
  title: string;
  decisionQuestion: string;
  summary: string;
  problem: string;
  category: string;
  categorySlug: CaseStudyCategory;
  secondaryCategories?: CaseStudyCategory[];
  tracks: CaseStudyTrack[];
  decisionType: CaseStudyDecisionType;
  evidence: string[];
  cardRecommendation: string;
  context: string;
  methods: string[];
  deliverable: string;
  status: string;
  image?: {
    src: string;
    alt: string;
  };
  actions?: {
    label: string;
    href: string;
    external?: boolean;
  }[];
  href: string;
  relatedProject?: { title: string; href: string };
  routeOrder: number;
  junction?: boolean;
  featured: boolean;
  published: boolean;
  detail: {
    executiveSummary: string;
    contextAndConstraints: string[];
    approach: string[];
    dataAndTools: string[];
    keyFindings: string[];
    recommendation: string[];
    risksAndLimitations: string[];
    potentialImpact: string[];
    nextAnalysis: string[];
  };
};

const researchCategoryBySlug: Record<string, string> = {
  "anime-retail-site-selection-tokyo": "Location Intelligence / Market Analysis",
  "ltc-facilities-aging-population-japan":
    "Public Sector Analytics / Accessibility Planning",
  "thermal-mitigating-effects-urban-canopy":
    "Remote Sensing / Urban Heat Analysis"
};

const researchCategorySlugBySlug: Record<string, CaseStudyCategory> = {
  "anime-retail-site-selection-tokyo": "real-estate-location",
  "ltc-facilities-aging-population-japan": "government-planning",
  "thermal-mitigating-effects-urban-canopy": "government-planning"
};

const researchSecondaryCategoriesBySlug: Record<string, CaseStudyCategory[]> = {
  "thermal-mitigating-effects-urban-canopy": ["utilities-infrastructure"]
};

const researchDecisionTypeBySlug: Record<string, CaseStudyDecisionType> = {
  "anime-retail-site-selection-tokyo": "Site and Investment Screening",
  "ltc-facilities-aging-population-japan": "Public Service Delivery",
  "thermal-mitigating-effects-urban-canopy": "Growth and Capacity"
};

const researchDeliverableBySlug: Record<string, string> = {
  "anime-retail-site-selection-tokyo":
    "Research paper, hotspot maps, overlay analysis, and reusable ArcPy workflow.",
  "ltc-facilities-aging-population-japan":
    "Research paper, elderly density maps, LTC facility overlays, and accessibility interpretation.",
  "thermal-mitigating-effects-urban-canopy":
    "Research paper, NDVI/LST maps, regression analysis, and green-infrastructure recommendations."
};

const coreCaseStudies: CaseStudy[] = [
  {
    slug: "cabarrus-futurescape",
    title: "Cabarrus FutureScape: Growth and Infrastructure Intelligence",
    decisionQuestion:
      "How can county-scale parcel, permit, infrastructure, school, and constraint data be organized for earlier growth review?",
    summary:
      "How parcel-level GIS and public data can be organized into a planning intelligence platform for reviewing growth, development pressure, infrastructure context, and service constraints.",
    problem:
      "County growth information is distributed across parcels, permits, flood constraints, schools, transportation, utilities, and planning datasets, making coordinated review difficult.",
    category: "Public Sector Strategy / Spatial Analytics",
    categorySlug: "government-planning",
    secondaryCategories: ["utilities-infrastructure"],
    tracks: ["government", "utilities"],
    decisionType: "Growth and Capacity",
    evidence: [
      "Parcel context",
      "Permit activity",
      "Flood constraints",
      "School and utility context"
    ],
    cardRecommendation:
      "Use a planning-intelligence workflow to organize observed activity, constraints, and recommended follow-up before decisions become harder to coordinate.",
    context: "Independent portfolio case study for a county-scale planning intelligence prototype.",
    methods: [
      "GIS analysis",
      "Parcel intelligence",
      "Permit analysis",
      "PostGIS",
      "FastAPI",
      "Next.js",
      "ArcGIS Maps SDK",
      "Dashboard design",
      "Scenario planning"
    ],
    deliverable: "Planning intelligence platform concept and live prototype.",
    status: "Independent Portfolio Case Study",
    image: {
      src: "/projects/cfs-live-preview.png",
      alt: "Cabarrus FutureScape planning intelligence interface preview"
    },
    href: "/case-studies/cabarrus-futurescape",
    relatedProject: {
      title: "Cabarrus FutureScape",
      href: "/projects/cabarrus-futurescape"
    },
    routeOrder: 1,
    junction: true,
    featured: true,
    published: true,
    detail: {
      executiveSummary:
        "Cabarrus FutureScape frames county-scale GIS data as a decision-support system for reviewing parcel context, observed development activity, infrastructure signals, and planning constraints before decisions become harder to coordinate.",
      contextAndConstraints: [
        "The work is an independent portfolio prototype, not an official county system.",
        "The analysis depends on available public and portfolio-safe datasets.",
        "Outputs are intended as planning intelligence, not approval decisions."
      ],
      approach: [
        "Organize parcel, permit, infrastructure, environmental, and service context into reviewable planning signals.",
        "Show where observed activity and constraints overlap.",
        "Present assumptions and caveats in the interface rather than hiding them behind a single score."
      ],
      dataAndTools: [
        "Next.js",
        "FastAPI",
        "PostGIS",
        "ArcGIS Maps SDK",
        "Parcel and permit context",
        "Flood, school, infrastructure, and planning layers"
      ],
      keyFindings: [
        "Parcel review is easier when activity, constraints, and service context are shown together.",
        "Observed permit activity is useful as a planning review signal when paired with clear caveats.",
        "A dashboard-style interface can make cross-layer review easier than static map outputs."
      ],
      recommendation: [
        "Use the prototype as a planning intelligence framework, not a deterministic model.",
        "Prioritize stable data pipelines, metadata, and review workflows before adding stronger ranking logic.",
        "Keep public-facing language focused on observed activity, constraints, and recommended follow-up."
      ],
      risksAndLimitations: [
        "Public data coverage may be incomplete or delayed.",
        "The prototype does not include private review notes or student-level demographic data.",
        "Any ranking output should be treated as a preliminary review signal."
      ],
      potentialImpact: [
        "Faster first-pass parcel and growth review.",
        "Clearer conversations between GIS, planning, infrastructure, and leadership users.",
        "More transparent follow-up questions for development pressure and service constraints."
      ],
      nextAnalysis: [
        "Validate source data coverage and update cadence.",
        "Document assumptions for each planning signal.",
        "Add report-ready summaries that separate evidence, caveats, and recommended follow-up."
      ]
    }
  },
  {
    slug: "utility-capacity-development-review",
    title: "Utility Capacity and Development Review",
    decisionQuestion:
      "Where does observed growth pressure need utility and infrastructure follow-up before development review advances?",
    summary:
      "A utility-focused planning intelligence overview using CFS concepts to frame how parcel activity, development pressure, service context, and infrastructure constraints can guide follow-up review.",
    problem:
      "Development pressure can outpace the visibility of utility service, capacity, and infrastructure context when parcel, permit, and service-area signals are reviewed separately.",
    category: "Utilities & Infrastructure",
    categorySlug: "utilities-infrastructure",
    secondaryCategories: ["government-planning"],
    tracks: ["utilities"],
    decisionType: "Infrastructure Readiness",
    evidence: [
      "Parcel and permit context",
      "Utility service context",
      "Infrastructure readiness signals",
      "Planning constraints"
    ],
    cardRecommendation:
      "Treat utility capacity as an infrastructure-context review signal and identify where follow-up with authoritative utility data would be required.",
    context:
      "Case study in development based on Cabarrus FutureScape infrastructure-context concepts.",
    methods: [
      "Parcel review",
      "Permit activity review",
      "Service-area context",
      "Infrastructure readiness framing",
      "Data limitation review"
    ],
    deliverable: "Prototype-backed utility capacity and growth-context review framework.",
    status: "Case Study in Development",
    href: "/case-studies/utility-capacity-development-review",
    relatedProject: {
      title: "Cabarrus FutureScape",
      href: "/projects/cabarrus-futurescape"
    },
    routeOrder: 2,
    featured: false,
    published: true,
    detail: {
      executiveSummary:
        "This in-development overview explains how CFS-style parcel intelligence can support utility capacity follow-up without claiming official utility findings or verified capacity conclusions.",
      contextAndConstraints: [
        "This is not commissioned utility work.",
        "No official capacity finding, service commitment, or utility approval is claimed.",
        "Authoritative utility datasets and engineering review would be required before operational decisions."
      ],
      approach: [
        "Use parcel and permit activity to identify where growth pressure is visible.",
        "Layer infrastructure and service context as planning review signals.",
        "Separate observed activity from capacity assumptions and recommended follow-up."
      ],
      dataAndTools: [
        "Cabarrus FutureScape concept",
        "Parcel context",
        "Permit activity",
        "Infrastructure readiness framing",
        "PostGIS-ready data organization"
      ],
      keyFindings: [
        "Utility context is most useful when shown alongside parcel activity, development pressure, and constraints.",
        "The current portfolio supports infrastructure-context framing, not verified utility capacity conclusions."
      ],
      recommendation: [
        "Use the workflow as an early review framework for identifying where authoritative utility follow-up is needed.",
        "Document source coverage, update cadence, and assumptions before using any capacity-related signal operationally."
      ],
      risksAndLimitations: [
        "Verified utility capacity data is not included.",
        "Service areas and utility assets can be incomplete or restricted.",
        "Infrastructure signals should not be treated as engineering determinations."
      ],
      potentialImpact: [
        "Clearer first-pass identification of development areas needing utility follow-up.",
        "Better separation between planning intelligence, data caveats, and operational utility review."
      ],
      nextAnalysis: [
        "Identify public, non-sensitive utility context that can be safely shown.",
        "Define which signals require authoritative utility confirmation.",
        "Prepare a broadband or utility expansion case study only after real evidence is available."
      ]
    }
  },
  {
    slug: "automap",
    title: "AutoMap: GIS Request Automation and Operational Review",
    decisionQuestion:
      "How can repeated plain-language GIS requests become safer, more reviewable operational workflows?",
    summary:
      "How plain-language GIS requests can become reviewable map workflows through REST metadata, source validation, map recipes, customization, refinement, and analysis reports.",
    problem:
      "GIS requests often arrive as plain language, but teams still need a repeatable way to identify the right layers, validate sources, document assumptions, and produce reviewable outputs.",
    category: "GIS Modernization & Data Strategy",
    categorySlug: "gis-modernization",
    secondaryCategories: ["government-planning"],
    tracks: ["government"],
    decisionType: "Operational Efficiency",
    evidence: [
      "Plain-language requests",
      "ArcGIS REST metadata",
      "Layer registry",
      "Analysis reports"
    ],
    cardRecommendation:
      "Use source validation, recipe generation, refinement, and report history to make GIS request automation reviewable.",
    context: "Independent portfolio case study for a live GIS automation prototype.",
    methods: [
      "Plain-language request interpretation",
      "ArcGIS REST metadata review",
      "Approved source matching",
      "Map recipe generation",
      "Analysis report workflow"
    ],
    deliverable: "GIS request automation workflow and live AutoMap prototype.",
    status: "Independent Portfolio Case Study",
    image: {
      src: "/projects/automap-live-preview.png",
      alt: "AutoMap deployed interface preview"
    },
    href: "/case-studies/automap",
    relatedProject: {
      title: "AutoMap",
      href: "/projects/automap"
    },
    routeOrder: 4,
    featured: false,
    published: true,
    detail: {
      executiveSummary:
        "AutoMap frames repeated GIS map requests as operational workflows that can be interpreted, validated, refined, and documented before they become reusable outputs.",
      contextAndConstraints: [
        "The work is an active personal project and live prototype.",
        "The prototype does not claim to publish official county maps or replace GIS review.",
        "Outputs are intended to make requests more reviewable, not to remove analyst judgment."
      ],
      approach: [
        "Convert user wording into structured map intent.",
        "Match requested needs against known ArcGIS REST layer metadata.",
        "Keep selected sources, assumptions, customization choices, warnings, and report history visible."
      ],
      dataAndTools: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "Python",
        "ArcGIS REST",
        "Layer registry",
        "Analysis reports"
      ],
      keyFindings: [
        "Plain-language requests become safer when they are converted into explicit source, layer, and recipe choices.",
        "REST metadata validation helps avoid guessed layers and unsupported fields.",
        "Report history and warnings make automation easier to review."
      ],
      recommendation: [
        "Use AutoMap as a reviewable workflow pattern for repeated GIS requests.",
        "Keep approved sources, metadata limitations, and analyst review visible before operational use."
      ],
      risksAndLimitations: [
        "Layer metadata and available public sources may be incomplete or inconsistent.",
        "Automation output still needs GIS review before being treated as authoritative.",
        "The prototype should not be represented as an official production county system."
      ],
      potentialImpact: [
        "More repeatable request intake and map-building workflows.",
        "Clearer communication between requesters and GIS analysts.",
        "Better documentation of source choices, limitations, and recommended follow-up."
      ],
      nextAnalysis: [
        "Test the workflow against more sanitized public REST services.",
        "Separate request types that are safe for automation from those requiring manual GIS review."
      ]
    }
  },
  {
    slug: "real-estate-screening",
    title: "Turning County Data into a Real Estate Screening Framework",
    decisionQuestion:
      "Which parcel risks should be screened before a site is treated as attractive for investment or development?",
    summary:
      "A structured screening framework that combines spatial constraints, development activity, parcel characteristics, infrastructure context, and follow-up due diligence.",
    problem:
      "A parcel may appear attractive based on price or location while still carrying zoning, flood, infrastructure, entitlement, market, or service-delivery risks.",
    category: "Real Estate Strategy / Location Intelligence",
    categorySlug: "real-estate-location",
    secondaryCategories: ["utilities-infrastructure"],
    tracks: [],
    decisionType: "Site and Investment Screening",
    evidence: [
      "Parcel characteristics",
      "Zoning and flood constraints",
      "Infrastructure proximity",
      "Development activity"
    ],
    cardRecommendation:
      "Use a structured location-intelligence screen to surface risks and due-diligence questions before deeper review.",
    context: "Portfolio framework for real estate and location intelligence screening.",
    methods: [
      "Parcel screening",
      "Constraint review",
      "Infrastructure context",
      "Development activity review",
      "Due diligence framing"
    ],
    deliverable: "Screening checklist and location-intelligence analysis structure.",
    status: "Case Study in Development",
    href: "/case-studies/real-estate-screening",
    relatedProject: {
      title: "Cabarrus FutureScape",
      href: "/projects/cabarrus-futurescape"
    },
    routeOrder: 6,
    featured: false,
    published: true,
    detail: {
      executiveSummary:
        "This overview frames a defensible parcel screening workflow for identifying constraints, follow-up questions, and early location risks before deeper due diligence.",
      contextAndConstraints: [
        "No client, financial return, or acquisition outcome is claimed.",
        "The framework is intended for preliminary screening, not legal, appraisal, or entitlement advice."
      ],
      approach: [
        "Start with parcel and location basics.",
        "Layer zoning, flood, infrastructure, and service context.",
        "Convert findings into follow-up questions rather than unsupported go/no-go claims."
      ],
      dataAndTools: [
        "County parcel data",
        "Zoning and flood constraints",
        "Infrastructure proximity",
        "Observed development activity",
        "GIS screening maps"
      ],
      keyFindings: [
        "A low-friction screening structure can surface risks that are easy to miss in a price-and-location-only review."
      ],
      recommendation: [
        "Use the framework to triage parcels and identify due-diligence priorities."
      ],
      risksAndLimitations: [
        "Market, entitlement, and utility details require follow-up outside GIS.",
        "Screening outputs should not be treated as investment advice."
      ],
      potentialImpact: [
        "Clearer early-stage parcel comparisons.",
        "Better follow-up questions for real estate, planning, and infrastructure review."
      ],
      nextAnalysis: [
        "Test the framework on a small set of public example parcels.",
        "Separate hard constraints from softer location-intelligence signals."
      ]
    }
  },
  {
    slug: "school-pressure",
    title: "School Utilization and Development Pressure Review",
    decisionQuestion:
      "Where should planners review attendance-area development pressure when utilization context overlaps with observed permit activity?",
    summary:
      "Combining attendance-area utilization context with observed permit activity as a preliminary planning review signal.",
    problem:
      "Planners need an early review signal for areas where existing school utilization context overlaps with observed residential permit activity.",
    category: "Public Sector Analytics / Growth Planning",
    categorySlug: "government-planning",
    tracks: ["government"],
    decisionType: "Public Service Delivery",
    evidence: [
      "Utilization context",
      "Observed permit activity",
      "Attendance-area context",
      "Data coverage caveats"
    ],
    cardRecommendation:
      "Use the signal as preliminary planning review context and identify where official school-capacity follow-up is needed.",
    context: "Cabarrus FutureScape analysis concept.",
    methods: [
      "Attendance-area review",
      "Utilization context",
      "Observed permit activity",
      "Planning caveats",
      "GIS overlay analysis"
    ],
    deliverable: "Preliminary school capacity watch and planning review signal.",
    status: "Cabarrus FutureScape Analysis",
    href: "/case-studies/school-pressure",
    relatedProject: {
      title: "Cabarrus FutureScape",
      href: "/projects/cabarrus-futurescape"
    },
    routeOrder: 2,
    featured: false,
    published: true,
    detail: {
      executiveSummary:
        "This overview explains how school utilization context and observed residential permit activity can support early planning review without claiming to forecast enrollment.",
      contextAndConstraints: [
        "Not an official enrollment forecast.",
        "Not an overcrowding prediction.",
        "Not a student-level demographic model."
      ],
      approach: [
        "Pair utilization context with observed permit activity.",
        "Flag attendance-area development pressure as a review signal.",
        "Keep caveats visible so the signal is not confused with an official capacity determination."
      ],
      dataAndTools: [
        "Attendance-area context",
        "Observed residential permit activity",
        "GIS overlays",
        "Dashboard summary language"
      ],
      keyFindings: [
        "Utilization context becomes more useful when reviewed alongside observed permit activity.",
        "The signal is best used to guide follow-up, not to make official forecast claims."
      ],
      recommendation: [
        "Use safe language such as preliminary school capacity watch, observed permit activity, and planning review signal."
      ],
      risksAndLimitations: [
        "Student-level demographic data is not included.",
        "Permit activity does not equal actual student generation.",
        "Boundary, capacity, and timing assumptions require official review."
      ],
      potentialImpact: [
        "Earlier identification of areas that may need school-capacity follow-up.",
        "Clearer communication between planning, GIS, and service-capacity review."
      ],
      nextAnalysis: [
        "Document data coverage and update timing.",
        "Compare observed activity with official school planning inputs where appropriate."
      ]
    }
  },
  {
    slug: "gis-hub",
    title: "Improving Public Access to County GIS Data",
    decisionQuestion:
      "How should public GIS content be organized so residents, staff, planners, and data users can find the right resources faster?",
    summary:
      "Reorganizing public GIS content into clearer categories and improving discoverability of county datasets, maps, applications, planning resources, and property information.",
    problem:
      "Public GIS resources can be difficult to navigate when datasets, applications, maps, categories, metadata, and download options are inconsistently organized.",
    category: "GIS Modernization & Data Strategy",
    categorySlug: "gis-modernization",
    secondaryCategories: ["government-planning"],
    tracks: ["government"],
    decisionType: "Data Modernization",
    evidence: [
      "ArcGIS Hub structure",
      "Hosted items",
      "Metadata",
      "Public data navigation"
    ],
    cardRecommendation:
      "Organize public GIS resources around user intent, metadata quality, and clearer data-discovery paths.",
    context: "Professional experience through Cabarrus County GIS Analyst Internship.",
    methods: [
      "ArcGIS Hub",
      "ArcGIS Online",
      "Metadata review",
      "Hosted item organization",
      "User-centered navigation"
    ],
    deliverable: "Public GIS Hub information architecture and data-discovery improvements.",
    status: "Professional Experience",
    image: {
      src: "/projects/cabarrus-open-data-preview.png",
      alt: "Cabarrus County Open Data GIS Hub website preview"
    },
    href: "/case-studies/gis-hub",
    relatedProject: {
      title: "Cabarrus County Open Data / GIS Hub Redesign",
      href: "/projects/cabarrus-gis-hub"
    },
    routeOrder: 3,
    featured: false,
    published: true,
    detail: {
      executiveSummary:
        "This overview describes public GIS data-discovery work completed through internship experience, focusing on navigation, metadata, public access, and clearer paths to county GIS resources.",
      contextAndConstraints: [
        "This reflects professional experience through the internship.",
        "No private county information, internal contacts, or non-public data are disclosed.",
        "The wording avoids implying county approval or sole responsibility beyond stated resume experience."
      ],
      approach: [
        "Organize GIS resources around user intent.",
        "Improve discoverability of public datasets, maps, applications, planning resources, and property information.",
        "Review metadata, sharing settings, hosted layers, and access paths."
      ],
      dataAndTools: [
        "ArcGIS Hub",
        "ArcGIS Online",
        "ArcGIS Enterprise / Portal",
        "Hosted layers",
        "Web maps",
        "Metadata"
      ],
      keyFindings: [
        "Public data access improves when users can navigate by task rather than internal structure.",
        "Metadata and sharing settings are part of the user experience, not just back-office administration."
      ],
      recommendation: [
        "Keep public GIS categories clear, task-oriented, and metadata-supported."
      ],
      risksAndLimitations: [
        "Public-facing descriptions should avoid exposing internal workflows.",
        "Hub content must remain aligned with official county publishing practices."
      ],
      potentialImpact: [
        "Improved public access to GIS resources.",
        "Clearer discovery paths for residents, planners, staff, and external data users."
      ],
      nextAnalysis: [
        "Review search terms and user tasks that lead people to GIS resources.",
        "Continue metadata consistency checks for public items."
      ]
    }
  }
];

const researchCaseStudies: CaseStudy[] = researchBriefs.map((brief) => ({
  slug: brief.slug,
  title: brief.title,
  decisionQuestion: brief.questions[0] ?? brief.summary,
  summary: brief.summary,
  problem: brief.questions[0] ?? brief.summary,
  category:
    researchCategoryBySlug[brief.slug] ?? "Applied GIS Research / Spatial Analysis",
  categorySlug: researchCategorySlugBySlug[brief.slug] ?? "government-planning",
  secondaryCategories: researchSecondaryCategoriesBySlug[brief.slug],
  tracks: [],
  decisionType:
    researchDecisionTypeBySlug[brief.slug] ?? "Public Service Delivery",
  evidence: brief.outputs.slice(0, 4),
  cardRecommendation:
    brief.findings[0] ??
    "Use the spatial evidence as a starting point for follow-up analysis.",
  context: brief.context,
  methods: brief.methods,
  deliverable:
    researchDeliverableBySlug[brief.slug] ?? brief.outputs.slice(0, 3).join(" / "),
  status: "UNC Chapel Hill GIS Research",
  image:
    brief.visual.kind === "image"
      ? {
          src: brief.visual.src,
          alt: brief.visual.alt
        }
      : undefined,
  href: `/case-studies/${brief.slug}`,
  actions: brief.code ? [brief.pdf, brief.code] : [brief.pdf],
  routeOrder: 20,
  featured: false,
  published: true,
  detail: {
    executiveSummary: brief.summary,
    contextAndConstraints: [
      brief.subtitle,
      brief.context,
      "Academic research output; no client, adoption, or production impact is claimed."
    ],
    approach: brief.methods,
    dataAndTools: brief.methods,
    keyFindings: brief.findings,
    recommendation: [
      "Use the findings as analytical review signals and starting points for follow-up data collection, field validation, or stakeholder review.",
      "Treat map outputs as evidence for interpretation, not as standalone decisions."
    ],
    risksAndLimitations: [
      "Findings depend on source data coverage, assumptions, and available public or course datasets.",
      "The work is presented as UNC Chapel Hill applied GIS research, not a production planning system."
    ],
    potentialImpact: [
      "Demonstrates reproducible GIS methods for location intelligence, accessibility, remote sensing, and planning analysis.",
      "Shows how spatial evidence can support clearer questions and practical next-step recommendations."
    ],
    nextAnalysis: [
      "Validate source data currency and completeness.",
      "Compare outputs with additional local knowledge or official planning inputs where appropriate."
    ]
  }
}));

export const caseStudies: CaseStudy[] = [
  ...coreCaseStudies,
  ...researchCaseStudies
];

export const caseStudyFilterOptions: {
  value: CaseStudyFilterValue;
  label: string;
}[] = [
  { value: "all", label: "All Case Studies" },
  { value: "government-planning", label: "Government & Planning" },
  { value: "utilities-infrastructure", label: "Utilities & Infrastructure" },
  { value: "real-estate-location", label: "Real Estate & Location" },
  { value: "gis-modernization", label: "GIS Modernization" }
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
