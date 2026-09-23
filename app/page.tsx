import Link from "next/link";
import type { Metadata } from "next";
import { stages } from "@/content/stages";
import { getProtocolsByStage, protocols, practiceCount } from "@/content/protocols";
import { mosaicTiles } from "@/content/mosaic";
import { SOURCE } from "@/data/ssi-definitions";
import {
  ButtonLink,
  Container,
  SectionHeading,
  stageAccent,
} from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "VetSSI — The Mosaic of SSI Prevention",
  description:
    "Surgical site infection prevention depends on multiple protective barriers applied consistently before, during and after surgery. Four stages, twelve core protocols, and the practices that implement them.",
  alternates: { canonical: "https://vetssi.com" },
};

const whatEachProtocolProvides = [
  {
    title: "A clear standard",
    body: "One statement of what VetSSI considers good practice, written so a hospital can compare it directly with what it currently does.",
  },
  {
    title: "Individual practices",
    body: "The specific actions inside the protocol, each with a recommended action, implementation steps and the ways it commonly fails.",
  },
  {
    title: "Role ownership",
    body: "Who performs each practice, who oversees it and who supports it — so no step is left without an owner.",
  },
  {
    title: "A team checklist",
    body: "A short checklist drawn from the protocol's own practices, usable at the point of care and printable on its own.",
  },
  {
    title: "Evidence and rationale",
    body: "What the recommendation rests on, classified honestly, including where the evidence is limited or absent.",
  },
  {
    title: "Audit questions",
    body: "Three to six things an observer can actually look at, to find the gap between the written protocol and daily practice.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-navy text-white mosaic-grid-bg">
        <Container className="py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow text-steel-light mb-5">
              An independent educational resource for veterinary surgical teams
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
              The Mosaic of SSI Prevention
            </h1>
            <p className="text-xl sm:text-2xl font-serif text-white/90 leading-snug mb-6">
              Preventing surgical site infection takes more than one
              intervention.
            </p>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mb-10">
              Surgical site infection prevention depends on multiple protective
              barriers applied consistently before, during, and after
              surgery&mdash;and on measuring performance so that practice can
              continue to improve.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/pathway/before-surgery"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy px-6 py-3.5 text-sm font-medium hover:bg-cream transition-colors"
              >
                Explore the Prevention Pathway
              </Link>
              <Link
                href="/mosaic"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3.5 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Understand the Mosaic
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Pathway overview ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-b border-warm-gray">
        <Container>
          <SectionHeading
            eyebrow="The prevention pathway"
            title="Four stages, twelve core protocols"
            lead="Three stages follow the patient through surgery. The fourth surrounds all of them: without surveillance and audit, a hospital cannot tell whether any of the others are working."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage) => {
              const stageProtocols = getProtocolsByStage(stage.slug);
              return (
                <article
                  key={stage.slug}
                  className={`bg-white border border-warm-gray border-t-[3px] ${
                    stage.kind === "loop"
                      ? "border-t-stage-measure"
                      : stage.slug === "before-surgery"
                        ? "border-t-stage-before"
                        : stage.slug === "during-surgery"
                          ? "border-t-stage-during"
                          : "border-t-stage-after"
                  } flex flex-col`}
                >
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-baseline justify-between gap-2 mb-3">
                      <h3 className="font-serif text-2xl text-navy leading-tight">
                        {stage.title}
                      </h3>
                      <span
                        className={`eyebrow ${stageAccent[stage.slug]} whitespace-nowrap`}
                      >
                        {stageProtocols.length}{" "}
                        {stageProtocols.length === 1 ? "protocol" : "protocols"}
                      </span>
                    </div>

                    {stage.kind === "loop" ? (
                      <p className="eyebrow text-text-muted mb-3">
                        Feedback loop — not a phase
                      </p>
                    ) : null}

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
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── Mosaic explanation ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-b border-warm-gray">
        <Container>
          <div className="grid lg:grid-cols-[1fr,1.1fr] gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="The framework"
                title="Every practice is one tile"
              />
              <div className="space-y-4 text-text-primary leading-relaxed prose-measure">
                <p>
                  Surgical site infection can follow from several different
                  sources of contamination, and from patient, procedural,
                  environmental and team-related factors that interact with each
                  other. No single intervention addresses all of them.
                </p>
                <p>
                  That is what the Mosaic describes. Every individual practice
                  is one tile. No tile is sufficient by itself, and the strength
                  of the whole comes from applying them consistently across the
                  perioperative pathway rather than from any one being done
                  exceptionally well.
                </p>
                <p className="text-text-muted">
                  The Mosaic is a way of organising prevention. It does not
                  imply that every tile rests on the same weight of evidence
                  &mdash; and this site says, for each one, what it actually
                  rests on.
                </p>
              </div>
              <div className="mt-8">
                <ButtonLink href="/mosaic" variant="secondary">
                  Understand the Mosaic
                </ButtonLink>
              </div>
            </div>

            {/* Restrained tile grid: the motif appears once, here. */}
            <ul className="grid grid-cols-2 gap-px bg-warm-gray border border-warm-gray">
              {mosaicTiles.map((tile) => (
                <li key={tile.slug} className="bg-white">
                  <Link
                    href={`/mosaic#tile-${tile.slug}`}
                    className="block px-4 py-5 h-full hover:bg-cream transition-colors group"
                  >
                    <span className="block font-serif text-lg text-navy leading-snug group-hover:text-steel transition-colors">
                      {tile.name}
                    </span>
                    <span className="block text-xs text-text-muted mt-1.5">
                      {tile.protocols.length}{" "}
                      {tile.protocols.length === 1 ? "protocol" : "protocols"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ─── Practical implementation ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-b border-warm-gray">
        <Container>
          <SectionHeading
            eyebrow="How the protocols work"
            title="Built to be implemented, not just read"
            lead={`Each of the twelve protocols follows the same structure, so a team always knows where to find what it needs. Across them there are ${practiceCount} individual practices.`}
          />

          <ul className="grid gap-px bg-warm-gray border border-warm-gray sm:grid-cols-2 lg:grid-cols-3">
            {whatEachProtocolProvides.map((item) => (
              <li key={item.title} className="bg-white p-6">
                <h3 className="font-serif text-xl text-navy mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-text-muted prose-measure">
            Implementation guidance sits inside each practice, and{" "}
            <Link
              href="/roles"
              className="text-steel underline underline-offset-2"
            >
              every practice can be filtered by role
            </Link>{" "}
            so each member of the team can see their own responsibilities across
            the whole pathway.
          </p>
        </Container>
      </section>

      {/* ─── The consensus foundation ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 border-b border-warm-gray bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr,1.05fr] gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeading
                eyebrow="Shared terminology"
                title="Built on an international expert consensus"
              />
              <div className="space-y-4 text-text-primary leading-relaxed prose-measure">
                <p>
                  Surgical site infection rates cannot be compared &mdash;
                  between hospitals, or within one hospital over time &mdash;
                  unless everyone is counting the same thing. Until recently,
                  veterinary medicine had no agreed definition of what counted.
                </p>
                <p>
                  {SOURCE.method} published in the{" "}
                  {SOURCE.journal} changed that. {SOURCE.panelDescription} They
                  agreed {SOURCE.definitionsAgreed} definitions covering the
                  tissue-layer classifications of surgical site infection,
                  surgical wound classification, surveillance terms and
                  antimicrobial periods &mdash; {SOURCE.standing.toLowerCase()}
                </p>
                <p>
                  VetSSI&rsquo;s SSI Definitions Framework is built directly on
                  that consensus, and attributes it throughout. It is the
                  foundation of Protocol 11, SSI Surveillance, and the reason
                  that protocol carries more evidentiary weight than any other
                  on this site.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <ButtonLink href="/ssi-definitions">
                  Explore the SSI Definitions Framework
                </ButtonLink>
              </div>
            </div>

            <figure className="border border-warm-gray bg-cream/50 p-6 sm:p-8">
              <figcaption className="eyebrow text-steel mb-4">
                The source
              </figcaption>
              <blockquote className="font-serif text-xl sm:text-2xl text-navy leading-snug mb-5">
                {SOURCE.title}
              </blockquote>
              <p className="text-sm text-text-muted leading-relaxed mb-5">
                {SOURCE.authors} <br />
                <span className="italic">{SOURCE.journal}</span>, {SOURCE.year}.
              </p>

              <dl className="border-t border-warm-gray divide-y divide-warm-gray text-sm mb-6">
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="text-text-muted">Method</dt>
                  <dd className="text-navy text-right">{SOURCE.method}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="text-text-muted">Expert panel</dt>
                  <dd className="text-navy text-right">
                    {SOURCE.panelSize} specialists
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="text-text-muted">Definitions agreed</dt>
                  <dd className="text-navy text-right">
                    {SOURCE.definitionsAgreed}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="text-text-muted">Access</dt>
                  <dd className="text-navy text-right">{SOURCE.license}</dd>
                </div>
              </dl>

              <a
                href={SOURCE.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-steel underline underline-offset-2 hover:text-navy break-all"
              >
                doi:{SOURCE.doi}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </figure>
          </div>
        </Container>
      </section>

      {/* ─── Closing CTA ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="bg-navy text-white p-8 sm:p-12 lg:p-16">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight mb-5">
                Start with one part of your surgical pathway.
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                A hospital does not need to revise everything at once. Select a
                protocol, compare it with current practice, and identify the
                next practical improvement. The audit questions at the end of
                each protocol are written for exactly that purpose.
              </p>
              <Link
                href="/protocols"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy px-6 py-3.5 text-sm font-medium hover:bg-cream transition-colors"
              >
                View All {protocols.length} Protocols
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
