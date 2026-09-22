import type { Practice } from "@/content/types";
import { getReferences } from "@/content/references";
import { EvidenceBadge, RoleChip } from "./ui";

/**
 * Practices are rendered as native <details> elements: keyboard accessible
 * without any JavaScript, expandable, and printed expanded.
 */
export default function PracticeList({
  practices,
  protocolShortTitle,
}: {
  practices: Practice[];
  protocolShortTitle: string;
}) {
  return (
    <div className="border-t border-warm-gray">
      {practices.map((practice, index) => (
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
              {/* h3 keeps the document outline contiguous: the Practices
                  section is an h2, and the sub-blocks below are h4. */}
              <h3 className="font-serif text-lg sm:text-xl text-navy leading-snug">
                {practice.title}
              </h3>
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
                <h4 className="eyebrow text-steel mb-2">Recommended action</h4>
                <p className="text-base text-text-primary leading-relaxed">
                  {practice.recommendedAction}
                </p>
              </div>

              <div>
                <h4 className="eyebrow text-steel mb-2">How to implement it</h4>
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
                <h4 className="eyebrow text-steel mb-2">
                  Common failure points
                </h4>
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
                <h4 className="eyebrow text-steel mb-2">Who is involved</h4>
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
                <h4 className="eyebrow text-steel mb-2">Evidence</h4>
                <div className="mb-3">
                  <EvidenceBadge level={practice.evidenceLevel} />
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {practice.evidenceNote}
                </p>

                {practice.references?.length ? (
                  <div className="mt-4">
                    <h5 className="eyebrow text-text-muted mb-2">
                      References
                    </h5>
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
                  <h4 className="eyebrow text-steel mb-3">Media</h4>
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
      ))}
      <p className="sr-only">
        End of practices for {protocolShortTitle}.
      </p>
    </div>
  );
}
