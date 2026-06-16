"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/profile";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  if (href === "/projects") {
    return (
      pathname === "/projects" ||
      (pathname.startsWith("/projects/") &&
        pathname !== "/projects/cabarrus-futurescape")
    );
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Khoi Nguyen home">
        <span>KN</span>
        <div>
          <strong>Khoi Nguyen</strong>
          <small>Enterprise GIS / Planning Intelligence</small>
        </div>
      </Link>

      <nav aria-label="Primary navigation">
        {navigation.map((item) => {
          const active = isActive(pathname, item.href);

          return (
            <Link
              aria-current={active ? "page" : undefined}
              className={active ? "active" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
