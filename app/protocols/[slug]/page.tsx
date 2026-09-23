import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  protocols,
  getProtocol,
  getProtocols,
  getAdjacentProtocols,
  getOrderedPractices,
} from "@/content/protocols";
import { stageBySlug } from "@/content/stages";
import { getReferences } from "@/content/references";
import { getGlossaryTerms } from "@/content/glossary";
import { getResources } from "@/content/resources";
import { roleBySlug, responsibilityDescriptions } from "@/content/roles";
import PracticeList from "@/components/v2/PracticeList";
import TeamChecklist from "@/components/v2/TeamChecklist";
import AuditQuestions from "@/components/v2/AuditQuestions";
import {
  Breadcrumbs,
  Container,
  DraftNotice,
  EvidenceBadge,
  RoleChip,
  SectionHeading,
  StageBadge,
  Standard,
  evidenceLabels,
} from "@/components/v2/ui";
import type { RoleResponsibility } from "@/content/types";

export function generateStaticParams() {
  return protocols.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const protocol = getProtocol(params.slug);
  if (!protocol) return {};
  return {
    title: `${protocol.protocolNumber}. ${protocol.title}`,
    description: protocol.summary,
    alternates: { canonical: `https://vetssi.com/protocols/${protocol.slug}` },
    openGraph: {
      title: `${protocol.title} | VetSSI`,
      description: protocol.summary,
      url: `https://vetssi.com/protocols/${protocol.slug}`,
      type: "article",
    },
  };
}

const sections = [
  { id: "why", label: "Why it matters" },
  { id: "standard", label: "The standard" },
  { id: "practices", label: "Practices" },
  { id: "checklist", label: "Team checklist" },
  { id: "responsibility", label: "Who is responsible" },
  { id: "evidence", label: "Evidence & rationale" },
  { id: "audit", label: "Audit this protocol" },
  { id: "related", label: "Related content" },
];

const responsibilityGroups: {
  key: RoleResponsibility;
  heading: string;
}[] = [
  { key: "primary", heading: "Primary" },
  { key: "oversight", heading: "Oversight" },
  { key: "supporting", heading: "Supporting" },
];

export default function ProtocolPage({
  params,
}: {
  params: { slug: string };
}) {
  const protocol = getProtocol(params.slug);
  if (!protocol) notFound();

  const stage = stageBySlug[protocol.stage];
  const { previous, next } = getAdjacentProtocols(protocol.slug);
  const related = getProtocols(protocol.relatedProtocols);
  const references = getReferences(protocol.references);
  const glossary = getGlossaryTerms(protocol.glossaryTerms);
  const protocolResources = getResources(protocol.resources);

  return (
    <>
      {/* ─── A. Header ────────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-warm-gray">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            trail={[
              { label: "Home", href: "/" },
              { label: stage.title, href: `/pathway/${stage.slug}` },
              { label: "Protocols", href: "/protocols" },
              { label: protocol.shortTitle },
            ]}
          />

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
            <StageBadge stage={protocol.stage} />
            <span aria-hidden="true" className="text-warm-gray">
              ·
            </span>
            <span className="eyebrow text-text-muted">
              Protocol {protocol.protocolNumber} of {protocols.length}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl text-navy leading-tight mb-5 max-w-4xl">
            {protocol.title}
          </h1>

          <p className="text-lg text-text-muted leading-relaxed prose-measure mb-6">
            {protocol.summary}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted mb-6">
            <span>{protocol.practices.length} practices</span>
            <span aria-hidden="true" className="text-warm-gray">·</span>
            <span>{protocol.checklist.length} checklist items</span>
            <span aria-hidden="true" className="text-warm-gray">·</span>
            <span>
              About {protocol.reviewTimeMinutes} minutes to read and compare
              with current practice
            </span>
          </div>

          <ul className="flex flex-wrap gap-2 mb-8 list-none">
            {protocol.roles.map((assignment) => (
              <li key={assignment.role}>
                <RoleChip
                  role={assignment.role}
                  responsibility={assignment.responsibility}
                  asLink
                />
              </li>
            ))}
          </ul>

          <DraftNotice status={protocol.reviewStatus} className="prose-measure" />
        </Container>
      </section>

      {/* ─── Section nav ──────────────────────────────────────────────────── */}
      <nav
        aria-label="Sections of this protocol"
        className="sticky top-16 z-30 bg-cream/95 backdrop-blur border-b border-warm-gray no-print"
      >
        <Container>
          <ul className="flex gap-5 overflow-x-auto py-3 text-xs">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="whitespace-nowrap text-text-muted hover:text-navy transition-colors"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <Container className="py-14 sm:py-20 space-y-20">
        {/* ─── B. Why it matters ──────────────────────────────────────────── */}
        <section id="why" className="scroll-mt-32">
          <SectionHeading eyebrow="Why it matters" title="Why this protocol exists" />
          <ul className="space-y-4 prose-measure">
            {protocol.whyItMatters.map((point, i) => (
              <li key={i} className="flex gap-4 leading-relaxed">
                <span
                  aria-hidden="true"
                  className="shrink-0 mt-2.5 w-1.5 h-1.5 bg-steel"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ─── C. The standard ────────────────────────────────────────────── */}
        <section id="standard" className="scroll-mt-32">
          <h2 className="sr-only">The standard</h2>
          <Standard>{protocol.standard}</Standard>
        </section>

        {/* ─── D. Practices ───────────────────────────────────────────────── */}
        <section id="practices" className="scroll-mt-32">
          <SectionHeading
            eyebrow="Practices"
            title={`${protocol.practices.length} practices within this protocol`}
            lead="These are the individual actions that meet the standard above. Each expands to show how to implement it, how it commonly fails, who is involved, and what the recommendation rests on."
          />
          <PracticeList
            groups={getOrderedPractices(protocol)}
            protocolShortTitle={protocol.shortTitle}
          />
        </section>

        {/* ─── E. Team checklist ──────────────────────────────────────────── */}
        <section id="checklist" className="scroll-mt-32">
          <SectionHeading
            eyebrow="Team checklist"
            title="At the point of care"
            lead="Drawn from this protocol's own practices. Print it on its own for use in the prep area or theatre."
          />
          <TeamChecklist
            items={protocol.checklist}
            protocolTitle={protocol.title}
            protocolNumber={protocol.protocolNumber}
            standard={protocol.standard}
          />
        </section>

        {/* ─── F. Who is responsible ──────────────────────────────────────── */}
        <section id="responsibility" className="scroll-mt-32">
          <SectionHeading
            eyebrow="Ownership"
            title="Who is responsible?"
            lead="Infection prevention fails most often where nobody owns the step. Individual practices may assign these differently — expand a practice to see its own roles."
          />

          <div className="grid gap-px bg-warm-gray border border-warm-gray sm:grid-cols-3">
            {responsibilityGroups.map((group) => {
              const assigned = protocol.roles.filter(
                (r) => r.responsibility === group.key,
              );
              return (
                <div key={group.key} className="bg-white p-5">
                  <h3 className="font-serif text-xl text-navy mb-1">
                    {group.heading}
                  </h3>
                  <p className="text-xs text-text-muted mb-4">
                    {responsibilityDescriptions[group.key]}
                  </p>
                  {assigned.length ? (
                    <ul className="space-y-3">
                      {assigned.map((assignment) => (
                        <li key={assignment.role}>
                          <Link
                            href={`/roles?role=${assignment.role}`}
                            className="font-medium text-navy text-sm hover:text-steel underline-offset-2 hover:underline"
                          >
                            {roleBySlug[assignment.role].title}
                          </Link>
                          <p className="text-xs text-text-muted leading-relaxed mt-1">
                            {roleBySlug[assignment.role].description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-text-muted">
                      None assigned at protocol level.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── G. Evidence & rationale ────────────────────────────────────── */}
        <section id="evidence" className="scroll-mt-32">
          <SectionHeading
            eyebrow="Evidence & rationale"
            title="What this protocol rests on"
          />

          <div className="bg-white border border-warm-gray">
            <div className="p-5 sm:p-7 border-b border-warm-gray">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <EvidenceBadge level={protocol.evidenceLevel} />
                <span className="text-xs text-text-muted">
                  Overall classification for this protocol
                </span>
              </div>
              <p className="leading-relaxed prose-measure">
                {protocol.evidenceSummary}
              </p>
            </div>

            <div className="p-5 sm:p-7 border-b border-warm-gray">
              <h3 className="eyebrow text-steel mb-3">
                Limitations and uncertainties
              </h3>
              <ul className="space-y-2.5 prose-measure">
                {protocol.evidenceLimitations.map((limitation, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden="true" className="shrink-0 text-text-muted">
                      —
                    </span>
                    <span className="text-text-muted">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 sm:p-7 border-b border-warm-gray">
              <h3 className="eyebrow text-steel mb-3">
                How evidence is classified on this site
              </h3>
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                {(
                  ["stronger", "moderate", "limited", "consensus"] as const
                ).map((level) => (
                  <div key={level} className="flex gap-2">
                    <dt className="sr-only">{evidenceLabels[level]}</dt>
                    <dd>
                      <EvidenceBadge level={level} short />
                      <span className="ml-2 text-text-muted text-xs">
                        {evidenceLabels[level]}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="p-5 sm:p-7">
              <h3 className="eyebrow text-steel mb-3">References</h3>
              <p className="text-xs text-text-muted mb-4 prose-measure">
                References marked <em>pending verification</em> were carried
                forward from VetSSI V1 and have not yet been checked against
                source as part of the V2 editorial review. They are shown so
                they can be verified, not as established support for the
                recommendations above.
              </p>
              <ol className="space-y-3">
                {references.map((ref) => (
                  <li
                    key={ref.id}
                    className="text-sm text-text-muted leading-relaxed"
                  >
                    {ref.citation}
                    {ref.doi ? (
                      <>
                        {" "}
                        <a
                          href={`https://doi.org/${ref.doi}`}
                          className="text-steel underline underline-offset-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          doi:{ref.doi}
                        </a>
                      </>
                    ) : null}
                    {ref.status === "unverified" ? (
                      <span className="ml-1.5 text-xs text-[#7A5518]">
                        [pending verification]
                      </span>
                    ) : (
                      <span className="ml-1.5 text-xs text-[#1C5340]">
                        [verified]
                      </span>
                    )}
                    {ref.note ? (
                      <span className="block text-xs mt-1 italic">
                        {ref.note}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ol>

              <p className="text-xs text-text-muted mt-6">
                Last editorial review:{" "}
                {protocol.lastReviewed ?? "not yet reviewed"}.
              </p>
            </div>
          </div>
        </section>

        {/* ─── H. Audit ───────────────────────────────────────────────────── */}
        <section id="audit" className="scroll-mt-32">
          <SectionHeading
            eyebrow="Audit"
            title="Audit this protocol"
            lead="A self-assessment for finding where your own practice differs from what is written above."
          />
          <AuditQuestions questions={protocol.auditQuestions} />
        </section>

        {/* ─── I. Related content ─────────────────────────────────────────── */}
        <section id="related" className="scroll-mt-32">
          <SectionHeading eyebrow="Related" title="Related content" />

          <div className="grid md:grid-cols-2 gap-px bg-warm-gray border border-warm-gray mb-10">
            {previous ? (
              <Link
                href={`/protocols/${previous.slug}`}
                className="bg-white p-5 hover:bg-cream transition-colors group"
              >
                <p className="eyebrow text-text-muted mb-2">
                  ← Previous protocol
                </p>
                <p className="font-serif text-xl text-navy leading-snug group-hover:text-steel transition-colors">
                  {previous.protocolNumber}. {previous.title}
                </p>
              </Link>
            ) : (
              <div className="bg-white p-5">
                <p className="eyebrow text-text-muted mb-2">Start</p>
                <p className="text-sm text-text-muted">
                  This is the first protocol in the pathway.
                </p>
              </div>
            )}
            {next ? (
              <Link
                href={`/protocols/${next.slug}`}
                className="bg-white p-5 hover:bg-cream transition-colors group md:text-right"
              >
                <p className="eyebrow text-text-muted mb-2">
                  Next protocol →
                </p>
                <p className="font-serif text-xl text-navy leading-snug group-hover:text-steel transition-colors">
                  {next.protocolNumber}. {next.title}
                </p>
              </Link>
            ) : (
              <div className="bg-white p-5 md:text-right">
                <p className="eyebrow text-text-muted mb-2">End</p>
                <p className="text-sm text-text-muted">
                  This is the last protocol. The loop returns to{" "}
                  <Link href="/protocols/patient-assessment-planning" className="text-steel underline underline-offset-2">
                    Patient Assessment &amp; Surgical Planning
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h3 className="eyebrow text-steel mb-4">Related protocols</h3>
              <ul className="space-y-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/protocols/${p.slug}`}
                      className="text-sm text-navy hover:text-steel underline-offset-2 hover:underline leading-snug"
                    >
                      {p.protocolNumber}. {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow text-steel mb-4">Resources</h3>
              <ul className="space-y-3">
                {protocolResources.map((resource) => (
                  <li key={resource.id} className="text-sm leading-snug">
                    {resource.status === "available" && resource.href ? (
                      <Link
                        href={resource.href}
                        className="text-navy hover:text-steel underline-offset-2 hover:underline"
                      >
                        {resource.title}
                      </Link>
                    ) : (
                      <span className="text-text-muted">
                        {resource.title}
                        <span className="ml-2 text-xs text-[#7A5518]">
                          Resource planned
                        </span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow text-steel mb-4">Glossary terms</h3>
              <ul className="space-y-3">
                {glossary.map((term) => (
                  <li key={term.slug} className="text-sm leading-snug">
                    <Link
                      href={`/resources/glossary#${term.slug}`}
                      className="text-navy hover:text-steel underline-offset-2 hover:underline"
                    >
                      {term.term}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="eyebrow text-steel mb-4 mt-8">Applicable roles</h3>
              <ul className="flex flex-wrap gap-2">
                {protocol.roles.map((assignment) => (
                  <li key={assignment.role}>
                    <RoleChip role={assignment.role} asLink />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
