import type { Metadata } from "next";
import SearchClient from "@/components/v2/SearchClient";
import { searchIndex } from "@/content/search";
import { Breadcrumbs, Container } from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search VetSSI protocols, individual practices, checklist items, stages, roles, resources, glossary terms and SSI definitions.",
  alternates: { canonical: "https://vetssi.com/search" },
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <>
      <section className="bg-white border-b border-warm-gray">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            trail={[{ label: "Home", href: "/" }, { label: "Search" }]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="font-serif text-4xl sm:text-5xl text-navy leading-tight mb-4">
              Search
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              {searchIndex.length} entries across protocols, practices,
              checklists, roles, resources, glossary terms and the SSI
              definitions.
            </p>
          </div>
        </Container>
      </section>

      <Container size="narrow" className="py-10 sm:py-14">
        <SearchClient />
      </Container>
    </>
  );
}
