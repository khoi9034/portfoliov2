export type ResearchAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type ResearchVisual =
  | {
      kind: "image";
      src: string;
      alt: string;
      label: string;
    }
  | {
      kind: "thermal";
      alt: string;
      label: string;
    };

export type ResearchBrief = {
  slug: string;
  title: string;
  subtitle: string;
  context: string;
  summary: string;
  questions: string[];
  methods: string[];
  findings: string[];
  outputs: string[];
  pdf: ResearchAction;
  code?: ResearchAction;
  visual: ResearchVisual;
};

export const researchBriefs: ResearchBrief[] = [
  {
    slug: "anime-retail-site-selection-tokyo",
    title: "Spatial Determinants of Anime Store Locations in Tokyo",
    subtitle: "Senior Thesis / Applied GIS Research Project",
    context: "UNC Chapel Hill Geography / GIS - GEOG 697",
    summary:
      "A GIS-based cultural retail analysis examining why anime stores cluster in specific Tokyo districts. The project evaluates population density, commercial rent zones, proximity to established cultural districts, and store clustering patterns using a reproducible ArcPy workflow.",
    questions: [
      "What spatial characteristics explain where anime stores locate in Tokyo, especially in relation to population density, commercial rent zones, and cultural retail districts?"
    ],
    methods: [
      "Anime store point collection and geocoding",
      "Tokyo ward population density overlay",
      "Commercial rent zone overlay",
      "Random point comparison",
      "Generate Near Table distance analysis",
      "Getis-Ord Gi* / Optimized Hot Spot Analysis",
      "ArcPy automation and reproducible workflow design"
    ],
    findings: [
      "Anime stores were not evenly distributed across Tokyo.",
      "Significant clusters appeared around major cultural retail districts.",
      "Chiyoda/Akihabara formed the strongest hotspot.",
      "Toshima/Ikebukuro and Shibuya also appeared as important clusters.",
      "Cultural destination identity and consumer accessibility appeared more important than simple rent minimization."
    ],
    outputs: [
      "Store distribution maps",
      "Population density overlay",
      "Rent zone overlay",
      "Near Table comparison",
      "Gi* hotspot map",
      "Reusable ArcPy workflow"
    ],
    pdf: {
      label: "Read Full Research Paper",
      href: "/research/anime-retail-site-selection-tokyo.pdf"
    },
    code: {
      label: "View Code Notes",
      href: "https://docs.google.com/document/d/1rPmNx1lrjNZoV6rPq4pN6IQkBSssJbpHjWmFLY_NSdQ/edit?usp=sharing",
      external: true
    },
    visual: {
      kind: "image",
      src: "/project-images/anime/AnimeStoreHotSpot.webp",
      alt: "Anime store hotspot map output for Tokyo",
      label: "Hotspot output preview"
    }
  },
  {
    slug: "ltc-facilities-aging-population-japan",
    title:
      "Geographic Access to Long-Term Care Facilities for Japan's Aging Population",
    subtitle: "GIS Accessibility / Planning Analysis",
    context: "UNC Chapel Hill Geography / GIS - GEOG 446 Final Project",
    summary:
      "A spatial assessment of how long-term care facility locations align with elderly population density across Tokyo. The project uses ward-level demographic mapping, facility overlays, and accessibility interpretation to identify areas where LTC services may be misaligned with older adult population needs.",
    questions: [
      "What is the spatial distribution of elderly residents across Tokyo's wards?",
      "Where are LTC facilities located relative to elderly population concentrations?",
      "Which wards or regions may be underserved by LTC services?"
    ],
    methods: [
      "Ward-level elderly population density mapping",
      "General population density comparison",
      "LTC facility geocoding",
      "Facility overlay analysis",
      "Accessibility assessment",
      "ArcPy-assisted mapping and processing"
    ],
    findings: [
      "Central and suburban wards generally show stronger LTC coverage.",
      "Peripheral and low-density regions may face access challenges.",
      "Some wards with high elderly concentrations may require more targeted service planning.",
      "Age-specific GIS analysis is more useful than general population density alone for LTC planning."
    ],
    outputs: [
      "Tokyo population pyramid",
      "Elderly density choropleth",
      "General population density choropleth",
      "LTC facility overlay maps",
      "Accessibility interpretation"
    ],
    pdf: {
      label: "Read Full Research Paper",
      href: "/research/ltc-facilities-aging-population-japan.pdf"
    },
    visual: {
      kind: "image",
      src: "/project-images/ltc/FacilitiesOverlayPopDens65.webp",
      alt: "Long-term care facility overlay on elderly population density in Tokyo",
      label: "LTC access map preview"
    }
  },
  {
    slug: "thermal-mitigating-effects-urban-canopy",
    title: "Thermal Mitigating Effects of Urban Canopy",
    subtitle: "Advanced Remote Sensing / Urban Heat Island Analysis",
    context:
      "UNC Chapel Hill Geography / GIS - Advanced Remote Sensing, GEOG 577 - April 2026",
    summary:
      "A remote sensing analysis of how vegetation density affects land surface temperature across the UNC Chapel Hill campus and Franklin Street area. The project uses Landsat 9, NDVI, LST, NLCD land cover masks, and Google Earth Engine to quantify urban heat island patterns and cooling effects from tree canopy.",
    questions: [
      "How large is the temperature difference between developed and forested areas?",
      "How strongly is vegetation density related to land surface temperature?"
    ],
    methods: [
      "Google Earth Engine workflow",
      "Landsat 9 Collection 2 Level 2 imagery",
      "Summer 2025 median composite",
      "NDVI calculation",
      "Land Surface Temperature calculation",
      "NLCD high-intensity developed and deciduous forest masks",
      "500-point NDVI/LST regression sample",
      "Urban hotspot and forest cooling zone mapping"
    ],
    findings: [
      "High-intensity developed areas averaged about 42.54 degrees Celsius.",
      "Deciduous forest areas averaged about 31.48 degrees Celsius.",
      "Developed areas were about 11.06 degrees Celsius hotter than forested areas.",
      "NDVI explained about 60% of LST variation, with R-squared = 0.604.",
      "Each 0.1 increase in NDVI corresponded to roughly a 1.54 degrees Celsius decrease in surface temperature.",
      "Green infrastructure and tree canopy can meaningfully reduce heat stress around campus."
    ],
    outputs: [
      "NDVI map",
      "LST thermal map",
      "Urban hotspot vs forest cooling zone map",
      "NDVI/LST regression relationship",
      "Planning recommendations for campus green infrastructure"
    ],
    pdf: {
      label: "Read Full Research Paper",
      href: "/research/thermal-mitigating-effects-urban-canopy-unc.pdf"
    },
    code: {
      label: "Open Earth Engine Script",
      href: "https://code.earthengine.google.com/2933dd4951cfb5ff0675b0e0cdcaf4a4",
      external: true
    },
    visual: {
      kind: "thermal",
      alt: "Prototype visual panel showing NDVI, land surface temperature, and urban canopy cooling signals",
      label: "Remote sensing output concept"
    }
  }
];
