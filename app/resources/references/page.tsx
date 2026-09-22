import type { Metadata } from "next";
import { references } from "@/content/references";
import { collectReferenceIds } from "@/content/protocols";
import { Breadcrumbs, Container } from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "Reference Library",
  description:
    "Every source cited across the VetSSI protocols, with its current verification status. Most entries were carried forward from VetSSI V1 and are pending an editorial check against source.",
  alternates: { canonical: "https://vetssi.com/resources/references" },
  openGraph: {
    title: "Reference Library | VetSSI",
    url: "https://vetssi.com/resources/references",
  },
};

export default function ReferencesPage() {
  const usedIds = new Set(collectReferenceIds());
  const verified = references.filter((r) => r.status === "verified");
  const unverified = references.filter((r) => r.status === "unverified");

  const renderList = (list: typeof references) => (
    <ol className="border-t border-warm-gray">
      {list.map((ref) => (
        <li key={ref.id} className="border-b border-warm-gray py-5">
          <p className="text-sm leading-relaxed">{ref.citation}</p>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            {ref.doi ? (
              <a
                href={`https://doi.org/${ref.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel underline underline-offset-2"
              >
                doi:{ref.doi}
              </a>
            ) : null}
            {ref.url ? (
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-steel underline underline-offset-2"
              >
                View source
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
            {!usedIds.has(ref.id) ? (
              <span className="text-text-muted">
                Not currently cited by any protocol
              </span>
            ) : null}
          </div>
          {ref.note ? (
            <p className="text-xs text-text-muted italic mt-2">{ref.note}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <section className="bg-white border-b border-warm-gray">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Reference library" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow text-steel mb-3">Reference</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-navy leading-tight mb-5">
              Reference library
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              {references.length} sources cited across the protocols, with their
              current verification status shown openly.
            </p>
          </div>
        </Container>
      </section>

      <Container size="narrow" className="py-14 sm:py-20">
        <div className="border-l-[3px] border-[#E2C596] bg-[#FAF0E2] px-5 py-5 mb-12">
          <h2 className="font-serif text-xl text-[#6B4A12] mb-2">
            Verification status
          </h2>
          <div className="text-sm text-[#6B4A12] leading-relaxed space-y-3">
            <p>
              Most of these references were carried forward from VetSSI V1.
              Their bibliographic details have not been re-checked against the
              published sources as part of the V2 rebuild, and several V1
              records held conflicting details for the same paper. Those
              conflicts are noted on the entries concerned.
            </p>
            <p>
              Until an entry has been checked, this site shows it as{" "}
              <em>pending verification</em> and does not treat it as
              established support for any recommendation. No reference in this
              library was newly authored for V2, and three V1 entries that were
              statements rather than citations were removed rather than carried
              forward.
            </p>
          </div>
        </div>

        <section className="mb-14">
          <h2 className="font-serif text-2xl text-navy mb-2">
            Verified
            <span className="ml-2 text-base text-text-muted font-sans">
              ({verified.length})
            </span>
          </h2>
          <p className="text-sm text-text-muted mb-4">
            Checked against a source held in this repository that resolves to a
            live, open URL.
          </p>
          {renderList(verified)}
        </section>

        <section>
          <h2 className="font-serif text-2xl text-navy mb-2">
            Pending verification
            <span className="ml-2 text-base text-text-muted font-sans">
              ({unverified.length})
            </span>
          </h2>
          <p className="text-sm text-text-muted mb-4">
            Carried forward from VetSSI V1, awaiting an editorial check against
            source.
          </p>
          {renderList(unverified)}
        </section>
      </Container>
    </>
  );
}
