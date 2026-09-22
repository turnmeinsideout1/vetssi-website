import Link from "next/link";
import { stages, sequentialStages } from "@/content/stages";
import { getProtocolsByStage } from "@/content/protocols";
import { stageBg, stageAccent } from "./ui";
import type { StageSlug } from "@/content/types";

/**
 * A compact orientation device showing where a stage sits in the pathway, and
 * that Measure & Improve surrounds the other three rather than following them.
 *
 * Position is conveyed by text ("Stage 2 of 3") as well as by the visual, so
 * nothing depends on colour or shape alone.
 */
export default function PathwayDiagram({
  current,
  className = "",
}: {
  current?: StageSlug;
  className?: string;
}) {
  const loop = stages.find((s) => s.kind === "loop")!;
  const isLoopCurrent = current === loop.slug;
  const currentIndex = sequentialStages.findIndex((s) => s.slug === current);

  return (
    <div className={className}>
      <p className="sr-only">
        The prevention pathway runs Before Surgery, During Surgery, After
        Surgery. Measure &amp; Improve is a feedback loop surrounding all three
        rather than a fourth phase.
        {current
          ? isLoopCurrent
            ? " You are viewing Measure & Improve."
            : ` You are viewing stage ${currentIndex + 1} of 3.`
          : ""}
      </p>

      {/* Not aria-hidden: it contains links, and a focusable element inside an
          aria-hidden subtree is reachable by keyboard but invisible to screen
          readers. The links carry their own text instead. */}
      <nav
        aria-label="Pathway overview"
        className="border border-warm-gray bg-white p-4 sm:p-5"
      >
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {sequentialStages.map((stage, i) => {
            const active = stage.slug === current;
            const count = getProtocolsByStage(stage.slug).length;
            return (
              <Link
                key={stage.slug}
                href={`/pathway/${stage.slug}`}
                className={`block border p-2.5 sm:p-3 transition-colors ${
                  active
                    ? "border-navy bg-cream"
                    : "border-warm-gray hover:border-steel"
                }`}
              >
                <span
                  className={`block w-full h-1 mb-2 ${stageBg[stage.slug]} ${
                    active ? "" : "opacity-40"
                  }`}
                />
                <span
                  className={`block text-[11px] sm:text-xs font-medium leading-tight ${
                    active ? "text-navy" : "text-text-muted"
                  }`}
                >
                  {stage.title}
                </span>
                <span className="block text-[11px] sm:text-xs text-text-muted mt-0.5">
                  {count} {count === 1 ? "protocol" : "protocols"}
                </span>
                <span className="sr-only">
                  , stage {i + 1} of 3
                  {active ? ", currently viewing" : ""}
                </span>
              </Link>
            );
          })}
        </div>

        {/* The loop, drawn as a band enclosing the three stages above. */}
        <div className="mt-2 sm:mt-3 flex items-stretch gap-2 sm:gap-3">
          <span
            className={`w-1 shrink-0 ${stageBg[loop.slug]} ${
              isLoopCurrent ? "" : "opacity-40"
            }`}
          />
          <Link
            href={`/pathway/${loop.slug}`}
            className={`flex-1 border border-dashed p-2.5 sm:p-3 transition-colors ${
              isLoopCurrent
                ? "border-navy bg-cream"
                : "border-warm-gray hover:border-steel"
            }`}
          >
            <span
              className={`block text-[11px] sm:text-xs font-medium leading-tight ${
                isLoopCurrent ? "text-navy" : "text-text-muted"
              }`}
            >
              {loop.title}
            </span>
            <span className="block text-[11px] sm:text-xs text-text-muted mt-0.5">
              {getProtocolsByStage(loop.slug).length} protocols — feeds back
              into every stage above
            </span>
          </Link>
        </div>
      </nav>

      {current ? (
        <p className={`mt-3 text-xs ${stageAccent[current]}`}>
          {isLoopCurrent
            ? "Measure & Improve surrounds the pathway — it is not a fourth phase."
            : `Stage ${currentIndex + 1} of 3 in the perioperative pathway.`}
        </p>
      ) : null}
    </div>
  );
}
