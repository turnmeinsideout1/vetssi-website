// VetSSI V2 — resources
//
// NOTHING here fabricates a downloadable clinical document. A resource is
// either `available` (it exists and this repository can actually serve or link
// to it) or `planned` (it does not exist yet and the UI says so plainly).
// There are no download buttons for files that do not exist.

export type ResourceCategory =
  | "checklists"
  | "protocols"
  | "definitions"
  | "audit-tools"
  | "posters"
  | "media"
  | "evidence"
  | "references"
  | "glossary";

export type Resource = {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  /**
   * `available` resources must carry an `href` to something real on this site
   * or an external source held in the repository. `planned` resources render
   * as a labelled placeholder with no action.
   */
  status: "available" | "planned";
  href?: string;
  external?: boolean;
  /** How the resource is used, when that is not obvious. */
  note?: string;
};

export const resourceCategories: {
  slug: ResourceCategory;
  title: string;
  description: string;
}[] = [
  {
    slug: "checklists",
    title: "Checklists",
    description:
      "Point-of-care checklists derived from the practices in each protocol. Every protocol page carries one, and each prints on its own.",
  },
  {
    slug: "protocols",
    title: "Protocol documents",
    description:
      "The twelve protocols in a form a hospital can adopt, adapt and file as its own written standard.",
  },
  {
    slug: "definitions",
    title: "SSI definitions",
    description:
      "Standardised terminology for classifying and reporting surgical site infection, based on the 2026 AJVR expert consensus.",
  },
  {
    slug: "audit-tools",
    title: "Audit tools",
    description:
      "Observation and self-assessment tools for checking whether written protocols match what happens in the theatre.",
  },
  {
    slug: "posters",
    title: "Posters",
    description: "Wall references for the prep area, theatre and ward.",
  },
  {
    slug: "media",
    title: "Photos and videos",
    description:
      "Demonstration material for techniques that are difficult to convey in text.",
  },
  {
    slug: "evidence",
    title: "Evidence summaries",
    description:
      "Short summaries of what is and is not established for the interventions in each protocol.",
  },
  {
    slug: "references",
    title: "Reference library",
    description:
      "The sources behind the protocol content, with their current verification status.",
  },
  {
    slug: "glossary",
    title: "Glossary",
    description: "Terms as they are used across this site.",
  },
];

export const resources: Resource[] = [
  // ── Available ──────────────────────────────────────────────────────────────
  {
    id: "protocol-checklists",
    title: "Team checklists for all twelve protocols",
    description:
      "Each protocol page includes a checklist built from its own practices, with an accessible print layout. Tick state is held in the browser for the current session only.",
    category: "checklists",
    status: "available",
    href: "/protocols",
  },
  {
    id: "all-protocols",
    title: "The twelve core protocols",
    description:
      "Every protocol on one page, grouped by stage, with its standard, practices, roles, checklist, evidence and audit questions.",
    category: "protocols",
    status: "available",
    href: "/protocols",
  },
  {
    id: "ssi-definitions-framework",
    title: "SSI Definitions Framework",
    description:
      "Core tissue-layer definitions, surgical wound classification with an interactive classifier, and the surveillance framework. Built on the 2026 AJVR expert consensus.",
    category: "definitions",
    status: "available",
    href: "/ssi-definitions",
  },
  {
    id: "ajvr-consensus",
    title: "Verwilghen et al., AJVR 2026 — SSI definitions consensus",
    description:
      "The open-access consensus paper that the definitions framework is built on. Opens on the publisher's site.",
    category: "definitions",
    status: "available",
    href: "https://doi.org/10.2460/ajvr.25.03.0099",
    external: true,
  },
  {
    id: "audit-questions",
    title: "Audit questions by protocol",
    description:
      "Each protocol page ends with three to six observable questions for self-assessment. They are written to be answered by looking, not by scoring.",
    category: "audit-tools",
    status: "available",
    href: "/protocols/audit-review-improvement",
  },
  {
    id: "reference-library",
    title: "Reference library",
    description:
      "Every source cited across the protocols, with its verification status shown. Most entries were carried forward from VetSSI V1 and are still pending an editorial check.",
    category: "references",
    status: "available",
    href: "/resources/references",
  },
  {
    id: "glossary",
    title: "Glossary",
    description:
      "Terms as they are used on this site, with consensus definitions attributed to their source.",
    category: "glossary",
    status: "available",
    href: "/resources/glossary",
  },
  {
    id: "role-view",
    title: "Responsibilities by role",
    description:
      "Filter every practice across the pathway by the role that performs, oversees or supports it.",
    category: "audit-tools",
    status: "available",
    href: "/roles",
  },

  // ── Planned ────────────────────────────────────────────────────────────────
  {
    id: "printable-protocol-pack",
    title: "Adoptable protocol pack",
    description:
      "The twelve protocols as editable documents a hospital can adapt and adopt as its own written standard.",
    category: "protocols",
    status: "planned",
    note: "Blocked on completion of expert review of the protocol content.",
  },
  {
    id: "laminated-checklist-set",
    title: "Laminated checklist set",
    description:
      "Print-ready checklist cards sized for the prep area, theatre and recovery.",
    category: "checklists",
    status: "planned",
  },
  {
    id: "observation-audit-form",
    title: "Direct observation audit form",
    description:
      "A structured form for recording what an observer sees during a procedure, aligned to the audit questions on each protocol page.",
    category: "audit-tools",
    status: "planned",
  },
  {
    id: "ssi-surveillance-log",
    title: "SSI surveillance log template",
    description:
      "A spreadsheet template for recording procedures, wound classification, follow-up and infection outcomes, so a practice can calculate its own rates.",
    category: "audit-tools",
    status: "planned",
  },
  {
    id: "poster-hand-prep",
    title: "Surgical hand preparation poster",
    description: "Wall reference for the scrub area.",
    category: "posters",
    status: "planned",
  },
  {
    id: "poster-patient-prep",
    title: "Patient preparation poster",
    description:
      "Clipping, cleaning, antisepsis and contact time, as a wall reference for the prep area.",
    category: "posters",
    status: "planned",
  },
  {
    id: "poster-theatre-discipline",
    title: "Theatre discipline poster",
    description: "Traffic, door openings and conversation, for the theatre door.",
    category: "posters",
    status: "planned",
  },
  {
    id: "video-patient-prep",
    title: "Patient preparation technique",
    description:
      "Demonstration of clipping, cleaning, antiseptic application and contact time.",
    category: "media",
    status: "planned",
  },
  {
    id: "video-draping",
    title: "Draping sequence and field isolation",
    description:
      "Demonstration of draping sequence, limb isolation and management of drape lift.",
    category: "media",
    status: "planned",
  },
  {
    id: "video-hand-prep",
    title: "Surgical hand preparation and closed gloving",
    description: "Demonstration of hand preparation, gowning and closed gloving.",
    category: "media",
    status: "planned",
  },
  {
    id: "evidence-summaries",
    title: "Evidence summaries by protocol",
    description:
      "Short structured summaries of what is established, what is supportive and what rests on consensus for each protocol.",
    category: "evidence",
    status: "planned",
    note: "Each protocol page currently carries a provisional evidence statement pending expert review.",
  },
];

export function getResources(ids: string[] = []): Resource[] {
  return ids
    .map((id) => resources.find((r) => r.id === id))
    .filter((r): r is Resource => Boolean(r));
}

export function getResourcesByCategory(category: ResourceCategory): Resource[] {
  return resources.filter((r) => r.category === category);
}
