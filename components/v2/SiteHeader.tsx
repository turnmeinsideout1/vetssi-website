"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Search } from "lucide-react";

// The three chronological stages sit under one Prevention Pathway tab, and
// Measure & Improve stays beside it rather than inside it — it is the feedback
// loop around the pathway, not its final phase. This mirrors PathwayDiagram,
// which draws it as a band enclosing the other three.
const primaryNav = [
  { href: "/mosaic", label: "The Mosaic" },
  {
    href: "/pathway",
    label: "Prevention Pathway",
    // Active for the hub and for the three chronological stages, but not for
    // the loop, which has its own tab below.
    isActive: (path: string) =>
      path === "/pathway" ||
      path.startsWith("/pathway/before-surgery") ||
      path.startsWith("/pathway/during-surgery") ||
      path.startsWith("/pathway/after-surgery") ||
      path === "/protocols" ||
      path.startsWith("/protocols/"),
  },
  { href: "/pathway/measure-improve", label: "Measure & Improve" },
  { href: "/ssi-definitions", label: "SSI Definitions" },
  { href: "/about", label: "About VetSSI" },
];

/** Reachable from within the architecture, not competing for primary nav space. */
const secondaryNav = [
  { href: "/protocols", label: "All 12 protocols" },
  { href: "/pathway/before-surgery", label: "Before Surgery" },
  { href: "/pathway/during-surgery", label: "During Surgery" },
  { href: "/pathway/after-surgery", label: "After Surgery" },
  { href: "/roles", label: "By role" },
  { href: "/resources", label: "Resources" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close the drawer on navigation.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Escape closes the drawer.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const isActive = (link: (typeof primaryNav)[number]) => {
    if (link.isActive) return link.isActive(pathname);
    return pathname === link.href || pathname.startsWith(link.href + "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-warm-gray no-print">
      <nav aria-label="Primary">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <Link
              href="/"
              className="font-serif text-xl sm:text-2xl font-semibold text-navy shrink-0"
              style={{ letterSpacing: "0.18em" }}
            >
              VETSSI
            </Link>

            <ul className="hidden lg:flex items-center gap-5 2xl:gap-6">
              {primaryNav.map((link) => {
                const active = isActive(link);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`nav-link whitespace-nowrap transition-colors border-b-2 pb-0.5 ${
                        active
                          ? "text-navy border-steel"
                          : "text-text-muted border-transparent hover:text-navy"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/search"
                  aria-label="Search"
                  className="flex items-center text-text-muted hover:text-navy transition-colors"
                >
                  <Search size={17} aria-hidden="true" />
                </Link>
              </li>
            </ul>

            <div className="flex items-center gap-1 lg:hidden">
              <Link
                href="/search"
                aria-label="Search"
                className="p-2 text-navy"
              >
                <Search size={20} aria-hidden="true" />
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                className="p-2 text-navy"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? (
                  <X size={22} aria-hidden="true" />
                ) : (
                  <Menu size={22} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen ? (
          <div
            id="mobile-nav"
            className="lg:hidden bg-white border-t border-warm-gray max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <ul className="px-5 sm:px-6 py-4 flex flex-col">
              {primaryNav.map((link) => {
                const active = isActive(link);
                return (
                  <li key={link.href} className="border-b border-warm-gray/60 last:border-0">
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`block py-3.5 text-base ${
                        active ? "text-navy font-medium" : "text-text-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="px-5 sm:px-6 pb-6 pt-4 border-t border-warm-gray bg-cream">
              <p className="eyebrow text-text-muted mb-3">Also in VetSSI</p>
              <ul className="flex flex-col gap-3">
                {secondaryNav.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-navy underline-offset-2 hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
