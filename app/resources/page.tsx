import Link from "next/link";
import type { Metadata } from "next";
import {
  resourceCategories,
  getResourcesByCategory,
} from "@/content/resources";
import {
  Breadcrumbs,
  Container,
  SectionHeading,
} from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Checklists, protocol documents, SSI definitions, audit tools, posters, media, evidence summaries, the reference library and the glossary. Resources that do not exist yet are labelled as planned.",
  alternates: { canonical: "https://vetssi.com/resources" },
  openGraph: {
    title: "Resources | VetSSI",
    url: "https://vetssi.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-white border-b border-warm-gray">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            trail={[{ label: "Home", href: "/" }, { label: "Resources" }]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow text-steel mb-3">Resources</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-navy leading-tight mb-5">
              Resources
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Material to support implementation. This area is built to expand;
              several resources are planned but not yet produced.
            </p>
            <div className="mt-6 border-l-[3px] border-steel bg-cream px-5 py-4">
              <p className="text-sm leading-relaxed">
                <strong className="font-semibold">
                  Nothing here is a placeholder download.
                </strong>{" "}
                Where a resource does not exist yet it is labelled{" "}
                <span className="whitespace-nowrap">Resource planned</span> and
                has no action attached. There are no buttons that appear to
                download files that have not been written.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20 space-y-16">
        {resourceCategories.map((category) => {
          const items = getResourcesByCategory(category.slug);
          if (!items.length) return null;
          return (
            <section
              key={category.slug}
              id={category.slug}
              className="scroll-mt-24"
            >
              <SectionHeading
                title={category.title}
                lead={category.description}
                as="h2"
              />
              <ul className="grid gap-px bg-warm-gray border border-warm-gray sm:grid-cols-2">
                {items.map((resource) => (
                  <li key={resource.id} className="bg-white p-5 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-lg text-navy leading-snug">
                        {resource.status === "available" && resource.href ? (
                          resource.external ? (
                            <a
                              href={resource.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-steel transition-colors underline-offset-2 hover:underline"
                            >
                              {resource.title}
                              <span className="sr-only"> (opens in a new tab)</span>
                            </a>
                          ) : (
                            <Link
                              href={resource.href}
                              className="hover:text-steel transition-colors underline-offset-2 hover:underline"
                            >
                              {resource.title}
                            </Link>
                          )
                        ) : (
                          <span className="text-text-muted">
                            {resource.title}
                          </span>
                        )}
                      </h3>
                      {resource.status === "planned" ? (
                        <span className="shrink-0 eyebrow text-[#7A5518] border border-[#E2C596] bg-[#FAF0E2] px-2 py-1 whitespace-nowrap">
                          Resource planned
                        </span>
                      ) : null}
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed flex-1">
                      {resource.description}
                    </p>
                    {resource.note ? (
                      <p className="text-xs text-text-muted italic mt-3 pt-3 border-t border-warm-gray">
                        {resource.note}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </Container>
    </>
  );
}
