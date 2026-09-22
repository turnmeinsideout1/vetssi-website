"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { search, searchTypeLabels, type SearchType } from "@/content/search";

const filterableTypes: SearchType[] = [
  "protocol",
  "practice",
  "checklist",
  "stage",
  "role",
  "definition",
  "resource",
  "glossary",
];

export default function SearchClient() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<SearchType | "all">("all");

  const results = useMemo(() => search(query, 60), [query]);

  const visible = useMemo(
    () =>
      typeFilter === "all"
        ? results
        : results.filter((r) => r.type === typeFilter),
    [results, typeFilter],
  );

  const typeCounts = useMemo(() => {
    const counts = new Map<SearchType, number>();
    for (const r of results) counts.set(r.type, (counts.get(r.type) ?? 0) + 1);
    return counts;
  }, [results]);

  const hasQuery = query.trim().length >= 2;

  return (
    <div>
      <div className="relative mb-6">
        <SearchIcon
          size={18}
          aria-hidden="true"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
        />
        <label htmlFor="site-search" className="sr-only">
          Search protocols, practices, roles, resources and definitions
        </label>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search protocols, practices, roles, definitions…"
          autoComplete="off"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          className="w-full border border-warm-gray bg-white pl-11 pr-4 py-3.5 text-base placeholder:text-text-muted focus:border-steel"
        />
      </div>

      {hasQuery ? (
        <>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              type="button"
              onClick={() => setTypeFilter("all")}
              aria-pressed={typeFilter === "all"}
              className={`px-3 py-1.5 text-xs border transition-colors ${
                typeFilter === "all"
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-text-muted border-warm-gray hover:border-navy"
              }`}
            >
              All ({results.length})
            </button>
            {filterableTypes.map((type) => {
              const count = typeCounts.get(type) ?? 0;
              if (count === 0) return null;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setTypeFilter(type)}
                  aria-pressed={typeFilter === type}
                  className={`px-3 py-1.5 text-xs border transition-colors ${
                    typeFilter === type
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-text-muted border-warm-gray hover:border-navy"
                  }`}
                >
                  {searchTypeLabels[type]} ({count})
                </button>
              );
            })}
          </div>

          <p className="text-sm text-text-muted mb-4" aria-live="polite">
            {visible.length} {visible.length === 1 ? "result" : "results"} for
            &ldquo;{query.trim()}&rdquo;
          </p>

          {visible.length === 0 ? (
            <div className="border border-warm-gray bg-white p-10 text-center">
              <p className="text-text-muted">
                Nothing matched. Try a shorter term, or browse{" "}
                <Link href="/protocols" className="text-steel underline underline-offset-2">
                  all twelve protocols
                </Link>
                .
              </p>
            </div>
          ) : (
            <ul className="bg-white border border-warm-gray divide-y divide-warm-gray">
              {visible.map((entry) => (
                <li key={entry.id}>
                  <Link
                    href={entry.href}
                    className="block px-5 py-4 hover:bg-cream/60 transition-colors group"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="eyebrow text-steel">
                        {searchTypeLabels[entry.type]}
                      </span>
                      <span aria-hidden="true" className="text-warm-gray">
                        ·
                      </span>
                      <span className="text-xs text-text-muted">
                        {entry.context}
                      </span>
                    </div>
                    <p className="font-medium text-navy leading-snug group-hover:underline underline-offset-2">
                      {entry.title}
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed mt-1 line-clamp-2">
                      {entry.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <div className="border border-warm-gray bg-white p-6 sm:p-8">
          <p className="text-sm text-text-muted leading-relaxed prose-measure">
            Search covers protocol titles, individual practices, checklist
            items, stage names, roles, resource titles, glossary terms and the
            SSI definitions. Results show what kind of content each match is and
            where it sits in the pathway.
          </p>
        </div>
      )}
    </div>
  );
}
