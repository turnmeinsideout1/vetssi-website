import { Suspense } from "react";
import type { Metadata } from "next";
import RoleFilter from "@/components/v2/RoleFilter";
import { practiceCount } from "@/content/protocols";
import { Breadcrumbs, Container, DraftNotice } from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "Responsibilities by Role",
  description:
    "Filter every practice across the VetSSI prevention pathway by the role that performs, oversees or supports it — surgeon, anaesthesia team, prep team, scrub team, recovery team, practice leadership, or the whole surgical team.",
  alternates: { canonical: "https://vetssi.com/roles" },
  openGraph: {
    title: "Responsibilities by Role | VetSSI",
    url: "https://vetssi.com/roles",
  },
};

export default function RolesPage() {
  return (
    <>
      <section className="bg-white border-b border-warm-gray">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            trail={[{ label: "Home", href: "/" }, { label: "By role" }]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow text-steel mb-3">Ownership</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-navy leading-tight mb-5">
              Responsibilities by role
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Infection prevention fails most often where nobody owns the step.
              Select a role to see every practice it is involved in across the
              whole pathway, and whether it performs, oversees or supports each
              one.
            </p>
            <p className="text-sm text-text-muted mt-4">
              Generated from the same structured content as the protocol pages,
              so this view cannot drift from the protocols themselves. All{" "}
              {practiceCount} practices are included.
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <DraftNotice status="draft" className="mb-10 prose-measure" />
        <Suspense
          fallback={
            <p className="text-text-muted">Loading responsibilities…</p>
          }
        >
          <RoleFilter />
        </Suspense>
      </Container>
    </>
  );
}
