import type { Metadata } from "next";
import { stages } from "@/content/stages";
import { getProtocolsByStage, protocols, practiceCount } from "@/content/protocols";
import { ProtocolRow } from "@/components/v2/ProtocolCard";
import PathwayDiagram from "@/components/v2/PathwayDiagram";
import Link from "next/link";
import {
  Breadcrumbs,
  Container,
  DraftNotice,
  stageAccent,
} from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "All 12 Protocols",
  description:
    "The twelve core protocols of the VetSSI prevention pathway, grouped by stage. Each states one standard and contains the individual practices that meet it.",
  alternates: { canonical: "https://vetssi.com/protocols" },
  openGraph: {
    title: "All 12 Protocols | VetSSI",
    url: "https://vetssi.com/protocols",
  },
};

export default function ProtocolsIndexPage() {
  return (
    <>
      <section className="bg-white border-b border-warm-gray">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            trail={[{ label: "Home", href: "/" }, { label: "Protocols" }]}
          />
          <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-16 mt-8 items-start">
            <div>
              <p className="eyebrow text-steel mb-3">The prevention pathway</p>
              <h1 className="font-serif text-4xl sm:text-5xl text-navy leading-tight mb-5">
                The twelve core protocols
              </h1>
              <p className="text-lg text-text-muted leading-relaxed prose-measure">
                Twelve protocols across four stages, containing{" "}
                {practiceCount} individual practices. Start anywhere: pick the
                protocol closest to a part of your pathway you already have
                questions about, and compare it with what your hospital
                currently does.
              </p>
            </div>
            <PathwayDiagram className="lg:pt-8" />
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <DraftNotice status="draft" className="mb-12 prose-measure" />

        <div className="space-y-16">
          {stages.map((stage) => {
            const stageProtocols = getProtocolsByStage(stage.slug);
            return (
              <section key={stage.slug} id={stage.slug} className="scroll-mt-24">
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                  <h2 className="font-serif text-3xl text-navy leading-tight">
                    <Link
                      href={`/pathway/${stage.slug}`}
                      className="hover:text-steel transition-colors underline-offset-4 hover:underline"
                    >
                      {stage.title}
                    </Link>
                  </h2>
                  <span className={`eyebrow ${stageAccent[stage.slug]}`}>
                    {stageProtocols.length}{" "}
                    {stageProtocols.length === 1 ? "protocol" : "protocols"}
                    {stage.kind === "loop" ? " · feedback loop" : ""}
                  </span>
                </div>
                <p className="text-sm text-text-muted leading-relaxed prose-measure mb-6">
                  {stage.tagline}
                </p>
                <ul className="border-t border-warm-gray">
                  {stageProtocols.map((protocol) => (
                    <ProtocolRow key={protocol.slug} protocol={protocol} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="mt-16 border border-warm-gray bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-navy mb-3">
            Looking for something specific?
          </h2>
          <p className="text-sm text-text-muted leading-relaxed prose-measure mb-5">
            The {practiceCount} individual practices inside these{" "}
            {protocols.length} protocols are all searchable, and can be filtered
            by the role responsible for them.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/search"
              className="text-steel underline underline-offset-2 hover:text-navy"
            >
              Search everything
            </Link>
            <Link
              href="/roles"
              className="text-steel underline underline-offset-2 hover:text-navy"
            >
              Filter by role
            </Link>
            <Link
              href="/mosaic"
              className="text-steel underline underline-offset-2 hover:text-navy"
            >
              Understand the Mosaic
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
