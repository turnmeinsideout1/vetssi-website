import Link from "next/link";
import type { Protocol } from "@/content/types";
import { EvidenceBadge, StageBadge } from "./ui";

export default function ProtocolCard({
  protocol,
  showStage = false,
}: {
  protocol: Protocol;
  showStage?: boolean;
}) {
  return (
    <article className="group bg-white border border-warm-gray hover:border-steel transition-colors flex flex-col h-full">
      <div className="px-5 py-5 flex-1 flex flex-col">
        <div className="flex items-baseline justify-between gap-3 mb-3">
          <span className="font-serif text-3xl text-warm-gray leading-none tabular-nums group-hover:text-steel-light transition-colors">
            {String(protocol.protocolNumber).padStart(2, "0")}
          </span>
          {showStage ? <StageBadge stage={protocol.stage} /> : null}
        </div>

        <h3 className="font-serif text-xl text-navy leading-snug mb-2">
          <Link
            href={`/protocols/${protocol.slug}`}
            className="after:absolute after:inset-0 focus:outline-none"
          >
            {protocol.title}
          </Link>
        </h3>

        <p className="text-sm text-text-muted leading-relaxed flex-1">
          {protocol.summary}
        </p>

        <div className="mt-4 pt-4 border-t border-warm-gray flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="text-xs text-text-muted">
            {protocol.practices.length} practices
          </span>
          <span aria-hidden="true" className="text-warm-gray">
            ·
          </span>
          <EvidenceBadge level={protocol.evidenceLevel} short />
        </div>
      </div>
    </article>
  );
}

/** Compact row used in stage pages and related-content lists. */
export function ProtocolRow({ protocol }: { protocol: Protocol }) {
  return (
    <li className="border-b border-warm-gray last:border-0">
      <Link
        href={`/protocols/${protocol.slug}`}
        className="group flex items-start gap-4 sm:gap-6 py-5 hover:bg-white/70 transition-colors -mx-4 px-4"
      >
        <span className="font-serif text-2xl sm:text-3xl text-warm-gray leading-none tabular-nums shrink-0 mt-1 group-hover:text-steel transition-colors">
          {String(protocol.protocolNumber).padStart(2, "0")}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-serif text-lg sm:text-xl text-navy leading-snug">
            {protocol.title}
          </span>
          <span className="block text-sm text-text-muted leading-relaxed mt-1">
            {protocol.summary}
          </span>
          <span className="block text-xs text-text-muted mt-2">
            {protocol.practices.length} practices ·{" "}
            {protocol.checklist.length} checklist items ·{" "}
            {protocol.reviewTimeMinutes} min review
          </span>
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 text-text-muted group-hover:text-steel group-hover:translate-x-0.5 transition-all mt-2"
        >
          →
        </span>
      </Link>
    </li>
  );
}
