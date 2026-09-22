"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import type { RoleResponsibility, RoleSlug, StageSlug } from "@/content/types";
import { roles, roleBySlug, responsibilityDescriptions } from "@/content/roles";
import { roleIndex } from "@/content/protocols";
import { stages } from "@/content/stages";
import { StageBadge } from "./ui";

const responsibilityOrder: RoleResponsibility[] = [
  "primary",
  "oversight",
  "supporting",
];

const responsibilityHeadings: Record<RoleResponsibility, string> = {
  primary: "Performs",
  oversight: "Oversees",
  supporting: "Supports",
};

function isRoleSlug(value: string | null): value is RoleSlug {
  return Boolean(value) && roles.some((r) => r.slug === value);
}

export default function RoleFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramRole = searchParams.get("role");

  const [selected, setSelected] = useState<RoleSlug>(
    isRoleSlug(paramRole) ? paramRole : "surgeon",
  );
  const [stageFilter, setStageFilter] = useState<StageSlug | "all">("all");

  const selectRole = (role: RoleSlug) => {
    setSelected(role);
    // Keep the URL shareable without a navigation.
    router.replace(`/roles?role=${role}`, { scroll: false });
  };

  const rows = useMemo(
    () =>
      roleIndex.filter(
        (r) =>
          r.role === selected &&
          (stageFilter === "all" || r.stage === stageFilter),
      ),
    [selected, stageFilter],
  );

  const grouped = useMemo(() => {
    const map = new Map<RoleResponsibility, typeof rows>();
    for (const responsibility of responsibilityOrder) {
      const matching = rows.filter((r) => r.responsibility === responsibility);
      if (matching.length) map.set(responsibility, matching);
    }
    return map;
  }, [rows]);

  const role = roleBySlug[selected];

  return (
    <div>
      {/* Role selector */}
      <div className="mb-8">
        <h2 id="role-selector" className="eyebrow text-steel mb-3">
          Select a role
        </h2>
        <div
          role="tablist"
          aria-labelledby="role-selector"
          className="flex flex-wrap gap-2"
        >
          {roles.map((r) => {
            const active = r.slug === selected;
            return (
              <button
                key={r.slug}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => selectRole(r.slug)}
                className={`px-3.5 py-2 text-sm border transition-colors ${
                  active
                    ? "bg-navy text-white border-navy"
                    : "bg-white text-text-muted border-warm-gray hover:border-navy hover:text-navy"
                }`}
              >
                {r.title}
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-l-[3px] border-steel bg-white px-5 py-4 mb-8">
        <h3 className="font-serif text-2xl text-navy leading-tight">
          {role.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed mt-2 prose-measure">
          {role.description}
        </p>
      </div>

      {/* Stage filter */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="eyebrow text-text-muted mr-1">Stage</span>
        <button
          type="button"
          onClick={() => setStageFilter("all")}
          aria-pressed={stageFilter === "all"}
          className={`px-3 py-1.5 text-xs border transition-colors ${
            stageFilter === "all"
              ? "bg-navy text-white border-navy"
              : "bg-white text-text-muted border-warm-gray hover:border-navy"
          }`}
        >
          All stages
        </button>
        {stages.map((stage) => {
          const count = roleIndex.filter(
            (r) => r.role === selected && r.stage === stage.slug,
          ).length;
          return (
            <button
              key={stage.slug}
              type="button"
              onClick={() => setStageFilter(stage.slug)}
              aria-pressed={stageFilter === stage.slug}
              disabled={count === 0}
              className={`px-3 py-1.5 text-xs border transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                stageFilter === stage.slug
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-text-muted border-warm-gray hover:border-navy"
              }`}
            >
              {stage.title} ({count})
            </button>
          );
        })}
      </div>

      <p className="text-sm text-text-muted mb-6" aria-live="polite">
        {rows.length} {rows.length === 1 ? "practice" : "practices"} involve{" "}
        {role.title.toLowerCase()}
        {stageFilter === "all"
          ? " across the whole pathway"
          : ` in ${stages.find((s) => s.slug === stageFilter)?.title}`}
        .
      </p>

      {rows.length === 0 ? (
        <div className="border border-warm-gray bg-white p-10 text-center">
          <p className="text-text-muted">
            No practices match this combination.
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          {responsibilityOrder.map((responsibility) => {
            const group = grouped.get(responsibility);
            if (!group) return null;
            return (
              <section key={responsibility}>
                <h3 className="font-serif text-2xl text-navy mb-1">
                  {responsibilityHeadings[responsibility]}
                  <span className="ml-2 text-base text-text-muted font-sans">
                    ({group.length})
                  </span>
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {responsibilityDescriptions[responsibility]}
                </p>
                <ul className="bg-white border border-warm-gray divide-y divide-warm-gray">
                  {group.map((row) => (
                    <li key={`${row.protocolSlug}-${row.practiceId}`}>
                      <Link
                        href={row.href}
                        className="block px-5 py-4 hover:bg-cream/60 transition-colors group"
                      >
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                          <StageBadge stage={row.stage} />
                          <span className="text-xs text-text-muted">
                            Protocol {row.protocolNumber} · {row.protocolTitle}
                          </span>
                        </div>
                        <p className="font-medium text-navy leading-snug group-hover:underline underline-offset-2">
                          {row.practiceTitle}
                        </p>
                        <p className="text-sm text-text-muted leading-relaxed mt-1">
                          {row.recommendedAction}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
