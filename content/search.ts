import { protocols } from "./protocols";
import { stages } from "./stages";
import { roles } from "./roles";
import { resources } from "./resources";
import { glossaryTerms } from "./glossary";
import { mosaicTiles } from "./mosaic";
import { coreDefinitions } from "@/data/ssi-definitions";

// A small static search index built at module load from the same content the
// pages render. No external search service: the whole index is a few hundred
// entries and is filtered in the browser.

export type SearchType =
  | "stage"
  | "protocol"
  | "practice"
  | "checklist"
  | "role"
  | "resource"
  | "glossary"
  | "definition"
  | "mosaic";

export type SearchEntry = {
  id: string;
  type: SearchType;
  title: string;
  /** One line shown beneath the title in results. */
  description: string;
  href: string;
  /** Human-readable location in the architecture, e.g. "Before Surgery · Protocol 3". */
  context: string;
  /** Lower-cased haystack. Not rendered. */
  keywords: string;
};

export const searchTypeLabels: Record<SearchType, string> = {
  stage: "Stage",
  protocol: "Protocol",
  practice: "Practice",
  checklist: "Checklist item",
  role: "Role",
  resource: "Resource",
  glossary: "Glossary",
  definition: "SSI definition",
  mosaic: "Mosaic tile",
};

function buildIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  const stageTitle = (slug: string) =>
    stages.find((s) => s.slug === slug)?.title ?? slug;

  for (const stage of stages) {
    entries.push({
      id: `stage-${stage.slug}`,
      type: "stage",
      title: stage.title,
      description: stage.tagline,
      href: `/pathway/${stage.slug}`,
      context: "Prevention pathway",
      keywords: `${stage.title} ${stage.tagline} ${stage.intro}`.toLowerCase(),
    });
  }

  for (const tile of mosaicTiles) {
    entries.push({
      id: `mosaic-${tile.slug}`,
      type: "mosaic",
      title: tile.name,
      description: tile.contribution,
      href: `/mosaic#tile-${tile.slug}`,
      context: "The Mosaic",
      keywords: `${tile.name} ${tile.contribution}`.toLowerCase(),
    });
  }

  for (const protocol of protocols) {
    const context = `${stageTitle(protocol.stage)} · Protocol ${protocol.protocolNumber}`;

    entries.push({
      id: `protocol-${protocol.slug}`,
      type: "protocol",
      title: protocol.title,
      description: protocol.summary,
      href: `/protocols/${protocol.slug}`,
      context,
      keywords:
        `${protocol.title} ${protocol.shortTitle} ${protocol.summary} ${protocol.standard}`.toLowerCase(),
    });

    for (const practice of protocol.practices) {
      entries.push({
        id: `practice-${protocol.slug}-${practice.id}`,
        type: "practice",
        title: practice.title,
        description: practice.summary,
        href: `/protocols/${protocol.slug}#practice-${practice.id}`,
        context: `${context} · ${protocol.shortTitle}`,
        keywords:
          `${practice.title} ${practice.summary} ${practice.recommendedAction} ${practice.implementationSteps.join(" ")} ${practice.commonFailurePoints.join(" ")}`.toLowerCase(),
      });
    }

    for (const item of protocol.checklist) {
      entries.push({
        id: `checklist-${protocol.slug}-${item.id}`,
        type: "checklist",
        title: item.label,
        description: `Checklist item — ${protocol.title}`,
        href: `/protocols/${protocol.slug}#checklist`,
        context: `${context} · Team checklist`,
        keywords: `${item.label} ${item.note ?? ""}`.toLowerCase(),
      });
    }
  }

  for (const role of roles) {
    entries.push({
      id: `role-${role.slug}`,
      type: "role",
      title: role.title,
      description: role.description,
      href: `/roles?role=${role.slug}`,
      context: "Responsibilities by role",
      keywords: `${role.title} ${role.shortTitle} ${role.description}`.toLowerCase(),
    });
  }

  for (const resource of resources) {
    entries.push({
      id: `resource-${resource.id}`,
      type: "resource",
      title: resource.title,
      description: resource.description,
      href: resource.status === "available" && resource.href ? resource.href : "/resources",
      context:
        resource.status === "planned" ? "Resources · Planned" : "Resources",
      keywords: `${resource.title} ${resource.description}`.toLowerCase(),
    });
  }

  for (const term of glossaryTerms) {
    entries.push({
      id: `glossary-${term.slug}`,
      type: "glossary",
      title: term.term,
      description: term.definition,
      href: `/resources/glossary#${term.slug}`,
      context: "Glossary",
      keywords: `${term.term} ${term.definition}`.toLowerCase(),
    });
  }

  for (const definition of coreDefinitions) {
    entries.push({
      id: `definition-${definition.slug}`,
      type: "definition",
      title: definition.title,
      description: definition.tagline,
      href: `/ssi-definitions/core/${definition.slug}`,
      context: "SSI Definitions Framework",
      keywords:
        `${definition.title} ${definition.short} ${definition.tagline} ${definition.consensus}`.toLowerCase(),
    });
  }

  return entries;
}

export const searchIndex: SearchEntry[] = buildIndex();

/** Ranked substring search. Title matches outrank body matches. */
export function search(query: string, limit = 40): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const terms = q.split(/\s+/).filter(Boolean);

  const scored = searchIndex
    .map((entry) => {
      const title = entry.title.toLowerCase();
      let score = 0;

      for (const term of terms) {
        if (!entry.keywords.includes(term) && !title.includes(term)) {
          return { entry, score: -1 };
        }
        if (title === term) score += 100;
        else if (title.startsWith(term)) score += 50;
        else if (title.includes(term)) score += 25;
        else score += 5;
      }

      // Prefer structural entries over individual checklist lines.
      if (entry.type === "protocol") score += 8;
      if (entry.type === "stage") score += 6;
      if (entry.type === "checklist") score -= 4;

      return { entry, score };
    })
    .filter((r) => r.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map((r) => r.entry);
}
