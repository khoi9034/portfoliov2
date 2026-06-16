import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-gamma-six-p15gdz1e0v.vercel.app"),
  title: "Khoi Nguyen | Enterprise GIS & Planning Intelligence Portfolio",
  description:
    "Enterprise GIS, Web GIS, digital twin, ArcPy automation, planning intelligence, and spatial data portfolio for Khoi Nguyen.",
  keywords: [
    "Khoi Nguyen",
    "GIS Analyst",
    "Enterprise GIS",
    "ArcGIS Enterprise",
    "ArcPy",
    "Web GIS",
    "Digital Twin",
    "Urban Planning Analyst",
    "Planning Intelligence",
    "Spatial Data"
  ],
  authors: [{ name: "Khoi Nguyen" }],
  openGraph: {
    title: "Khoi Nguyen | Enterprise GIS & Planning Intelligence Portfolio",
    description:
      "A polished GIS portfolio focused on enterprise GIS, digital twins, Web GIS, ArcPy automation, and planning intelligence.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-gis-portfolio.svg",
        width: 1200,
        height: 630,
        alt: "Khoi Nguyen enterprise GIS portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Khoi Nguyen | Enterprise GIS & Planning Intelligence Portfolio",
    description:
      "Enterprise GIS, Web GIS, digital twin, automation, and spatial planning intelligence portfolio.",
    images: ["/og-gis-portfolio.svg"]
  },
  icons: {
    icon: "/icon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#071013",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
