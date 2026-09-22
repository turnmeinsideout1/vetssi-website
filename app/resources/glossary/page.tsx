import Link from "next/link";
import type { Metadata } from "next";
import { glossaryTerms } from "@/content/glossary";
import { Breadcrumbs, Container } from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "Terms as they are used across VetSSI, with consensus definitions attributed to the 2026 AJVR expert consensus where they derive from it.",
  alternates: { canonical: "https://vetssi.com/resources/glossary" },
  openGraph: {
    title: "Glossary | VetSSI",
    url: "https://vetssi.com/resources/glossary",
  },
};

export default function GlossaryPage() {
  const sorted = [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term),
  );

  return (
    <>
      <section className="bg-white border-b border-warm-gray">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Glossary" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow text-steel mb-3">Reference</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-navy leading-tight mb-5">
              Glossary
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              {sorted.length} terms as they are used on this site. Where a
              definition comes from the 2026 AJVR expert consensus it is
              attributed to it; everything else is VetSSI editorial wording.
            </p>
          </div>
        </Container>
      </section>

      <Container size="narrow" className="py-14 sm:py-20">
        <dl className="border-t border-warm-gray">
          {sorted.map((term) => (
            <div
              key={term.slug}
              id={term.slug}
              className="border-b border-warm-gray py-6 scroll-mt-24"
            >
              <dt className="font-serif text-xl text-navy leading-snug mb-2">
                {term.term}
              </dt>
              <dd className="text-text-primary leading-relaxed">
                {term.definition}
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                  {term.source ? (
                    <span className="text-text-muted">
                      Source: {term.source}
                    </span>
                  ) : null}
                  {term.href ? (
                    <Link
                      href={term.href}
                      className="text-steel underline underline-offset-2 hover:text-navy"
                    >
                      Read more
                    </Link>
                  ) : null}
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </>
  );
}
