import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { stages, getStage, getNextStage } from "@/content/stages";
import { getProtocolsByStage, roleIndex } from "@/content/protocols";
import { roles, roleBySlug } from "@/content/roles";
import { resources } from "@/content/resources";
import { ProtocolRow } from "@/components/v2/ProtocolCard";
import PathwayDiagram from "@/components/v2/PathwayDiagram";
import {
  Breadcrumbs,
  Container,
  SectionHeading,
  DraftNotice,
} from "@/components/v2/ui";
import type { RoleSlug, StageSlug } from "@/content/types";

export function generateStaticParams() {
  return stages.map((stage) => ({ stage: stage.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { stage: string };
}): Metadata {
  const stage = getStage(params.stage);
  if (!stage) return {};
  const count = getProtocolsByStage(stage.slug).length;
  return {
    title: stage.title,
    description: `${stage.tagline} ${count} core ${count === 1 ? "protocol" : "protocols"} in the VetSSI prevention pathway.`,
    alternates: { canonical: `https://vetssi.com/pathway/${stage.slug}` },
    openGraph: {
      title: `${stage.title} | VetSSI`,
      description: stage.tagline,
      url: `https://vetssi.com/pathway/${stage.slug}`,
      type: "article",
    },
  };
}

/** Roles involved in this stage, ordered by how many practices they touch. */
function stageRoles(stage: StageSlug): { role: RoleSlug; count: number }[] {
  const counts = new Map<RoleSlug, number>();
  for (const row of roleIndex) {
    if (row.stage !== stage) continue;
    counts.set(row.role, (counts.get(row.role) ?? 0) + 1);
  }
  return roles
    .map((r) => ({ role: r.slug, count: counts.get(r.slug) ?? 0 }))
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count);
}

export default function StagePage({ params }: { params: { stage: string } }) {
  const stage = getStage(params.stage);
  if (!stage) notFound();

  const stageProtocols = getProtocolsByStage(stage.slug);
  const nextStage = getNextStage(stage.slug);
  const involved = stageRoles(stage.slug);
  const practiceTotal = stageProtocols.reduce(
    (sum, p) => sum + p.practices.length,
    0,
  );

  // Resources any protocol in this stage points to.
  const resourceIds = new Set(stageProtocols.flatMap((p) => p.resources));
  const stageResources = resources.filter((r) => resourceIds.has(r.id));

  return (
    <>
      <section className="bg-white border-b border-warm-gray">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            trail={[
              { label: "Home", href: "/" },
              { label: "Prevention pathway", href: "/protocols" },
              { label: stage.title },
            ]}
          />

          <div className="grid lg:grid-cols-[1.4fr,1fr] gap-10 lg:gap-16 mt-8 items-start">
            <div>
              <p className="eyebrow text-steel mb-3">
                {stage.kind === "loop"
                  ? "The feedback loop"
                  : `Stage ${stage.order} of 3`}
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl text-navy leading-tight mb-5">
                {stage.title}
              </h1>
              <p className="text-lg text-text-muted leading-relaxed prose-measure mb-6">
                {stage.intro}
              </p>
              <p className="text-sm text-text-muted">
                {stageProtocols.length}{" "}
                {stageProtocols.length === 1 ? "protocol" : "protocols"} ·{" "}
                {practiceTotal} practices
              </p>
            </div>

            <PathwayDiagram current={stage.slug} className="lg:pt-10" />
          </div>
        </Container>
      </section>

      {/* ─── Protocols ────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Core protocols"
            title={
              stageProtocols.length === 1
                ? "The protocol in this stage"
                : `The ${stageProtocols.length} protocols in this stage`
            }
            lead="Each protocol states one standard and contains the individual practices that meet it."
          />

          <ul className="border-t border-warm-gray">
            {stageProtocols.map((protocol) => (
              <ProtocolRow key={protocol.slug} protocol={protocol} />
            ))}
          </ul>

          <DraftNotice status="draft" className="mt-8 prose-measure" />
        </Container>
      </section>

      {/* ─── Roles ────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-y border-warm-gray">
        <Container>
          <SectionHeading
            eyebrow="Who is involved"
            title="Roles commonly involved in this stage"
            lead="Counted from the practices in this stage. Select a role to see its responsibilities across the whole pathway."
          />

          <ul className="grid gap-px bg-warm-gray border border-warm-gray sm:grid-cols-2 lg:grid-cols-3">
            {involved.map(({ role, count }) => (
              <li key={role} className="bg-white">
                <Link
                  href={`/roles?role=${role}`}
                  className="block p-5 h-full hover:bg-cream transition-colors group"
                >
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="font-serif text-lg text-navy leading-snug group-hover:text-steel transition-colors">
                      {roleBySlug[role].title}
                    </h3>
                    <span className="text-xs text-text-muted whitespace-nowrap tabular-nums">
                      {count} {count === 1 ? "practice" : "practices"}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {roleBySlug[role].description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ─── Resources ────────────────────────────────────────────────────── */}
      {stageResources.length ? (
        <section className="py-14 sm:py-20 border-b border-warm-gray">
          <Container>
            <SectionHeading
              eyebrow="Resources"
              title="Resources for this stage"
              lead="Items marked as planned do not exist yet. There are no download links for files that have not been produced."
            />
            <ul className="grid gap-px bg-warm-gray border border-warm-gray sm:grid-cols-2">
              {stageResources.map((resource) => (
                <li key={resource.id} className="bg-white p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-lg text-navy leading-snug">
                      {resource.status === "available" && resource.href ? (
                        <Link
                          href={resource.href}
                          className="hover:text-steel transition-colors underline-offset-2 hover:underline"
                        >
                          {resource.title}
                        </Link>
                      ) : (
                        resource.title
                      )}
                    </h3>
                    {resource.status === "planned" ? (
                      <span className="shrink-0 eyebrow text-[#7A5518] border border-[#E2C596] bg-[#FAF0E2] px-2 py-1">
                        Resource planned
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {resource.description}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* ─── Continue ─────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20">
        <Container>
          <Link
            href={`/pathway/${nextStage.slug}`}
            className="group block border border-warm-gray bg-white p-6 sm:p-8 hover:border-steel transition-colors"
          >
            <p className="eyebrow text-steel mb-2">
              {nextStage.order === 1
                ? "Back to the start of the pathway"
                : "Continue the pathway"}
            </p>
            <div className="flex items-center justify-between gap-6">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl text-navy leading-tight">
                  {nextStage.title}
                </h2>
                <p className="text-sm text-text-muted mt-2 max-w-xl leading-relaxed">
                  {nextStage.tagline}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="text-2xl text-text-muted group-hover:text-steel group-hover:translate-x-1 transition-all shrink-0"
              >
                →
              </span>
            </div>
          </Link>
        </Container>
      </section>
    </>
  );
}
