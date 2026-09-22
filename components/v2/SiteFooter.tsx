import Link from "next/link";
import { stages } from "@/content/stages";

const exploreLinks = [
  { href: "/mosaic", label: "The Mosaic" },
  { href: "/protocols", label: "All 12 protocols" },
  { href: "/roles", label: "Responsibilities by role" },
  { href: "/search", label: "Search" },
];

const resourceLinks = [
  { href: "/resources", label: "Resources" },
  { href: "/ssi-definitions", label: "SSI Definitions Framework" },
  { href: "/resources/glossary", label: "Glossary" },
  { href: "/resources/references", label: "Reference library" },
];

const aboutLinks = [
  { href: "/about", label: "About VetSSI" },
  { href: "/contributors", label: "Contributors" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white no-print mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div
              className="font-serif text-2xl font-semibold mb-3"
              style={{ letterSpacing: "0.18em" }}
            >
              VETSSI
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              An independent educational resource for translating surgical site
              infection prevention evidence into consistent everyday practice.
            </p>
          </div>

          <div>
            <h2 className="eyebrow text-white/40 mb-4 font-sans">Pathway</h2>
            <ul className="flex flex-col gap-2.5">
              {stages.map((stage) => (
                <li key={stage.slug}>
                  <Link
                    href={`/pathway/${stage.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {stage.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-white/40 mb-4 font-sans">Explore</h2>
            <ul className="flex flex-col gap-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-white/40 mb-4 font-sans">Reference</h2>
            <ul className="flex flex-col gap-2.5">
              {resourceLinks.concat(aboutLinks).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 space-y-4">
          <p className="text-sm text-[#F0C98A] leading-relaxed max-w-3xl">
            VetSSI Version 2 is currently under expert review. Clinical content
            should not yet be treated as a finalized guideline.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs text-white/40 leading-relaxed max-w-2xl">
              This resource provides educational content for veterinary
              professionals. It does not replace patient-specific clinical
              judgment, and it does not override applicable regulatory
              requirements or a hospital&rsquo;s own protocols. VetSSI is
              independent and is not affiliated with any commercial entity.
            </p>
            <p className="text-xs text-white/30 whitespace-nowrap">
              © {new Date().getFullYear()} VetSSI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
