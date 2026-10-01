export const projectLinks = {
  cfs: "https://cabarrus-future-scape.vercel.app/",
  automap: "https://auto-map-cyan.vercel.app/demo",
  automapComposer: "https://auto-map-cyan.vercel.app/map-composer",
  cabarrusOpenData: "https://gis-cabarrus.opendata.arcgis.com/"
};

export const projectLaunches: Record<
  string,
  {
    href: string;
    label: string;
    status: string;
    secondary?: {
      href: string;
      label: string;
    };
  }
> = {
  "cabarrus-futurescape": {
    href: projectLinks.cfs,
    label: "Open Cabarrus Insights",
    status: "Live personal prototype. Not an official county system."
  },
  automap: {
    href: projectLinks.automap,
    label: "Reliable Demo",
    status: "Portfolio demo for reliable review. Active personal project.",
    secondary: {
      href: projectLinks.automapComposer,
      label: "Live Map Composer"
    }
  }
};

export function getProjectLaunch(slug: string) {
  return projectLaunches[slug] ?? null;
}
