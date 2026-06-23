export const projectLinks = {
  cfs: "https://cabarrus-future-scape.vercel.app/",
  automap: "https://auto-map-cyan.vercel.app/",
  cabarrusOpenData: ""
};

export const projectLaunches: Record<
  string,
  {
    href: string;
    label: string;
    status: string;
  }
> = {
  "cabarrus-futurescape": {
    href: projectLinks.cfs,
    label: "Launch CFS",
    status: "Live personal prototype. Not an official county system."
  },
  automap: {
    href: projectLinks.automap,
    label: "Launch AutoMap",
    status: "Live personal prototype. Active personal project."
  }
};

export function getProjectLaunch(slug: string) {
  return projectLaunches[slug] ?? null;
}
