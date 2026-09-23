import Link from "next/link";
import type { Metadata } from "next";
import { stages, sequentialStages } from "@/content/stages";
import { getProtocolsByStage, practiceCount } from "@/content/protocols";
import PathwayDiagram from "@/components/v2/PathwayDiagram";
import {
  Breadcrumbs,
  Container,
  DraftNotice,
  SectionHeading,
  stageAccent,
  stageBg,
} from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "The Prevention Pathway",
  description:
    "Three stages follow the patient through surgery — before, during and after — with Measure & Improve as the feedback loop around all of them. Twelve core protocols in total.",
  alternates: { canonical: "https://vetssi.com/pathway" },
  openGraph: {
    title: "The Prevention Pathway | VetSSI",
    url: "https://vetssi.com/pathway",
    type: "article",
  },
};

export default function PathwayHubPage() {
  const loop = stages.find((s) => s.kind === "loop")!;
  const loopProtocols = getProtocolsByStage(loop.slug);

  return (
    <>
      <section className="bg-white border-b border-warm-gray">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            trail={[{ label: "Home", href: "/" }, { label: "Prevention pathway" }]}
          />
          <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-16 mt-8 items-start">
            <div>
              <p className="eyebrow text-steel mb-3">The prevention pathway</p>
              <h1 className="font-serif text-4xl sm:text-5xl text-navy leading-tight mb-5">
                Three stages, and the loop around them
              </h1>
              <p className="text-lg text-text-muted leading-relaxed prose-measure">
                The pathway follows the patient through surgery in three stages.
                Measure &amp; Improve is not a fourth stage &mdash; it surrounds
                the other three and feeds back into every one of them. Together
                they hold twelve core protocols and {practiceCount} individual
                practices.
              </p>
            </div>
            <PathwayDiagram className="lg:pt-8" />
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <DraftNotice status="draft" className="mb-12 prose-measure" />

        {/* ─── The three chronological stages ──────────────────────────────── */}
        <SectionHeading
          eyebrow="Follow the patient"
          title="The three stages of surgical care"
          lead="Work done in one stage cannot usually be recovered in a later one. Start wherever your own pathway is weakest."
        />

        <ol className="grid gap-5 md:grid-cols-3 mb-20">
          {sequentialStages.map((stage) => {
            const stageProtocols = getProtocolsByStage(stage.slug);
            return (
              <li key={stage.slug} className="flex">
                <article className="bg-white border border-warm-gray flex flex-col w-full">
                  <span
                    aria-hidden="true"
                    className={`block h-1 w-full ${stageBg[stage.slug]}`}
                  />
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-baseline justify-between gap-3 mb-3">
                      <h3 className="font-serif text-2xl text-navy leading-tight">
                        <Link
                          href={`/pathway/${stage.slug}`}
                          className="hover:text-steel transition-colors"
                        >
                          {stage.title}
                        </Link>
                      </h3>
                      <span
                        className={`eyebrow whitespace-nowrap ${stageAccent[stage.slug]}`}
                      >
                        Stage {stage.order} of 3
                      </span>
                    </div>

                    <p className="text-sm text-text-muted leading-relaxed mb-5">
                      {stage.tagline}
                    </p>

                    <ol className="space-y-2 mb-6 flex-1">
                      {stageProtocols.map((p) => (
                        <li key={p.slug} className="flex gap-2.5 text-sm">
                          <span className="text-text-muted tabular-nums shrink-0">
                            {p.protocolNumber}.
                          </span>
                          <Link
                            href={`/protocols/${p.slug}`}
                            className="text-navy hover:text-steel underline-offset-2 hover:underline leading-snug"
                          >
                            {p.title}
                          </Link>
                        </li>
                      ))}
                    </ol>

                    <Link
                      href={`/pathway/${stage.slug}`}
                      className="text-sm font-medium text-steel hover:text-navy transition-colors inline-flex items-center gap-1.5 mt-auto"
                    >
                      Explore {stage.title}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        {/* ─── The loop ────────────────────────────────────────────────────── */}
        <div className="border-l-[3px] border-stage-measure bg-white">
          <div className="p-6 sm:p-10">
            <p className="eyebrow text-stage-measure mb-3">
              The feedback loop — not a fourth stage
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-navy leading-tight mb-4">
              <Link
                href={`/pathway/${loop.slug}`}
                className="hover:text-steel transition-colors"
              >
                {loop.title}
              </Link>
            </h2>
            <p className="text-text-muted leading-relaxed prose-measure mb-6">
              {loop.intro}
            </p>

            <ol className="grid sm:grid-cols-2 gap-4 mb-8">
              {loopProtocols.map((p) => (
                <li
                  key={p.slug}
                  className="border border-warm-gray p-4 bg-cream/40"
                >
                  <Link
                    href={`/protocols/${p.slug}`}
                    className="font-serif text-xl text-navy leading-snug hover:text-steel transition-colors"
                  >
                    {p.protocolNumber}. {p.title}
                  </Link>
                  <p className="text-sm text-text-muted leading-relaxed mt-2">
                    {p.summary}
                  </p>
                </li>
              ))}
            </ol>

            <Link
              href={`/pathway/${loop.slug}`}
              className="text-sm font-medium text-steel hover:text-navy transition-colors inline-flex items-center gap-1.5"
            >
              Explore {loop.title}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm">
          <Link
            href="/protocols"
            className="text-steel underline underline-offset-2 hover:text-navy"
          >
            View all 12 protocols
          </Link>
          <Link
            href="/roles"
            className="text-steel underline underline-offset-2 hover:text-navy"
          >
            Filter practices by role
          </Link>
          <Link
            href="/mosaic"
            className="text-steel underline underline-offset-2 hover:text-navy"
          >
            Understand the Mosaic
          </Link>
        </div>
      </Container>
    </>
  );
}
