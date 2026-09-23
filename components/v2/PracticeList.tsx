import type { Practice } from "@/content/types";
import { getReferences } from "@/content/references";
import { EvidenceBadge, RoleChip } from "./ui";

/**
 * Practices are rendered as native <details> elements: keyboard accessible
 * without any JavaScript, expandable, and printed expanded.
 *
 * Where a protocol defines practice groups, they are rendered as labelled
 * clusters. Numbering runs continuously across the whole protocol regardless
 * of grouping, so "practice 07" means the same thing everywhere.
 */
export default function PracticeList({
  groups,
  protocolShortTitle,
}: {
  groups: {
    group: { id: string; title: string; summary?: string } | null;
    practices: Practice[];
  }[];
  protocolShortTitle: string;
}) {
  let runningIndex = 0;

  return (
    <div>
      {groups.map(({ group, practices }) => {
        const startIndex = runningIndex;
        runningIndex += practices.length;
        return (
          <section
            key={group?.id ?? "all"}
            aria-labelledby={group ? `group-${group.id}` : undefined}
            className="mb-10 last:mb-0"
          >
            {group ? (
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                <h3
                  id={`group-${group.id}`}
                  className="font-serif text-2xl text-navy leading-tight"
                >
                  {group.title}
                </h3>
                <span className="text-xs text-text-muted tabular-nums">
                  {practices.length}{" "}
                  {practices.length === 1 ? "practice" : "practices"}
                </span>
              </div>
            ) : null}
            {group?.summary ? (
              <p className="text-sm text-text-muted leading-relaxed prose-measure mb-4">
                {group.summary}
              </p>
            ) : null}
            <PracticeRows
              practices={practices}
              startIndex={startIndex}
              headingLevel={group ? 4 : 3}
            />
          </section>
        );
      })}
      <p className="sr-only">
        End of practices for {protocolShortTitle}.
      </p>
    </div>
  );
}

function PracticeRows({
  practices,
  startIndex,
  headingLevel,
}: {
  practices: Practice[];
  startIndex: number;
  headingLevel: 3 | 4;
}) {
  // Keeps the document outline contiguous: h3 when the practices sit directly
  // under the section h2, h4 when a group heading (h3) sits between.
  const Heading = headingLevel === 3 ? "h3" : "h4";
  const SubHeading = headingLevel === 3 ? "h4" : "h5";

  return (
    <div className="border-t border-warm-gray">
      {practices.map((practice, i) => {
        const index = startIndex + i;
        return (
        <details
          key={practice.id}
          id={`practice-${practice.id}`}
          className="group border-b border-warm-gray bg-white print-break-avoid scroll-mt-20"
        >
          <summary className="flex items-start gap-4 px-4 sm:px-6 py-4 cursor-pointer list-none hover:bg-cream/60 transition-colors [&::-webkit-details-marker]:hidden">
            <span
              aria-hidden="true"
              className="shrink-0 mt-0.5 font-sans text-xs text-text-muted tabular-nums w-6"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 min-w-0">
              <Heading className="font-serif text-lg sm:text-xl text-navy leading-snug">
                {practice.title}
              </Heading>
              <span className="block text-sm text-text-muted mt-1 leading-relaxed">
                {practice.summary}
              </span>
            </span>
            <span
              aria-hidden="true"
              className="shrink-0 mt-1 text-text-muted transition-transform group-open:rotate-45 text-xl leading-none no-print"
            >
              +
            </span>
          </summary>

          <div className="px-4 sm:px-6 pb-8 pt-2 sm:pl-16">
            <div className="prose-measure space-y-6">
              <div>
                <SubHeading className="eyebrow text-steel mb-2">Recommended action</SubHeading>
                <p className="text-base text-text-primary leading-relaxed">
                  {practice.recommendedAction}
                </p>
              </div>

              <div>
                <SubHeading className="eyebrow text-steel mb-2">How to implement it</SubHeading>
                <ol className="space-y-2">
                  {practice.implementationSteps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="shrink-0 text-text-muted tabular-nums">
                        {i + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <SubHeading className="eyebrow text-steel mb-2">
                  Common failure points
                </SubHeading>
                <ul className="space-y-2">
                  {practice.commonFailurePoints.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span aria-hidden="true" className="shrink-0 text-text-muted">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <SubHeading className="eyebrow text-steel mb-2">Who is involved</SubHeading>
                <ul className="flex flex-wrap gap-2 list-none">
                  {practice.roles.map((assignment) => (
                    <li key={assignment.role}>
                      <RoleChip
                        role={assignment.role}
                        responsibility={assignment.responsibility}
                        asLink
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-warm-gray pt-5">
                <SubHeading className="eyebrow text-steel mb-2">Evidence</SubHeading>
                <div className="mb-3">
                  <EvidenceBadge level={practice.evidenceLevel} />
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {practice.evidenceNote}
                </p>

                {practice.references?.length ? (
                  <div className="mt-4">
                    <p className="eyebrow text-text-muted mb-2">
                      References
                    </p>
                    <ul className="space-y-1.5">
                      {getReferences(practice.references).map((ref) => (
                        <li
                          key={ref.id}
                          className="text-xs text-text-muted leading-relaxed"
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
                            <span className="ml-1.5 text-[#7A5518]">
                              [pending verification]
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              {practice.media?.length ? (
                <div className="border-t border-warm-gray pt-5 no-print">
                  <SubHeading className="eyebrow text-steel mb-3">Media</SubHeading>
                  <ul className="space-y-2">
                    {practice.media.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 border border-dashed border-warm-gray bg-cream/60 px-4 py-3"
                      >
                        <span className="eyebrow text-text-muted shrink-0 mt-0.5">
                          Planned
                        </span>
                        <span className="text-sm text-text-muted leading-relaxed">
                          {item.kind === "video"
                            ? "Video"
                            : item.kind === "photo"
                              ? "Photograph"
                              : "Diagram"}
                          : {item.caption}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </details>
        );
      })}
    </div>
  );
}
