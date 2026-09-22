// VetSSI V2 — content model
//
// The site is built on one conceptual hierarchy:
//   Mosaic -> Stage -> Protocol -> Practice -> Implementation -> Evidence
//
// There are exactly four stages and twelve protocols. Individual practices
// live INSIDE protocols; they are never presented as standalone protocols.

// ─── Stages ──────────────────────────────────────────────────────────────────

export type StageSlug =
  | "before-surgery"
  | "during-surgery"
  | "after-surgery"
  | "measure-improve";

export type Stage = {
  slug: StageSlug;
  /** 1-3 for the chronological stages, 4 for the surrounding feedback loop. */
  order: number;
  title: string;
  /** Used where the full title is too long (badges, breadcrumbs). */
  shortTitle: string;
  /** One line for cards and navigation. */
  tagline: string;
  /** Two to four sentences for the stage landing page. */
  intro: string;
  /**
   * "Measure & Improve" is not a chronological phase — it is the feedback loop
   * that surrounds the whole pathway. The UI uses this to style it differently.
   */
  kind: "sequential" | "loop";
};

// ─── Roles ───────────────────────────────────────────────────────────────────

export type RoleSlug =
  | "surgeon"
  | "anaesthesia-team"
  | "prep-team"
  | "scrub-team"
  | "recovery-team"
  | "practice-leadership"
  | "surgical-team";

export type Role = {
  slug: RoleSlug;
  title: string;
  shortTitle: string;
  description: string;
};

/** How a role relates to a protocol or a practice. */
export type RoleResponsibility = "primary" | "oversight" | "supporting";

export type RoleAssignment = {
  role: RoleSlug;
  responsibility: RoleResponsibility;
};

// ─── Evidence ────────────────────────────────────────────────────────────────

export type EvidenceLevel =
  | "stronger"
  | "moderate"
  | "limited"
  | "consensus";

/**
 * Editorial state of a piece of clinical content.
 * `draft` content is visibly labelled across the site.
 */
export type ReviewStatus = "draft" | "in-review" | "reviewed";

export type Reference = {
  id: string;
  citation: string;
  doi?: string;
  url?: string;
  /**
   * `verified` means the V2 editorial process has checked the citation against
   * the source. `unverified` means it was carried forward from VetSSI V1 and
   * still needs that check. Nothing is marked verified without a resolvable
   * source held in this repository.
   */
  status: "verified" | "unverified";
  note?: string;
};

// ─── Practices ───────────────────────────────────────────────────────────────

export type PracticeMedia = {
  kind: "photo" | "video" | "diagram";
  caption: string;
  /** Media is planned but not yet produced; the UI renders a labelled slot. */
  status: "planned";
};

export type Practice = {
  /** Stable, URL-safe. Used as the in-page anchor: #practice-<id>. */
  id: string;
  title: string;
  /** One sentence shown in the collapsed accordion header. */
  summary: string;
  /** The single thing the team should do. Displayed prominently. */
  recommendedAction: string;
  implementationSteps: string[];
  commonFailurePoints: string[];
  roles: RoleAssignment[];
  evidenceLevel: EvidenceLevel;
  /** Honest statement of what is and is not established. */
  evidenceNote: string;
  references?: string[];
  media?: PracticeMedia[];
};

// ─── Protocols ───────────────────────────────────────────────────────────────

export type AuditQuestion = {
  id: string;
  question: string;
  /** What an observer should actually look at to answer it. */
  lookFor: string;
};

export type ChecklistItem = {
  id: string;
  label: string;
  /** Optional clarifier printed beneath the item. */
  note?: string;
  /** Links the checklist line back to the practice it came from. */
  practiceId?: string;
};

export type ResourceRef = {
  /** Matches a resource id in content/resources.ts */
  id: string;
};

export type Protocol = {
  slug: string;
  /** 1-12, stable and displayed throughout the site. */
  protocolNumber: number;
  title: string;
  /** Used in navigation, cards and breadcrumbs. */
  shortTitle: string;
  stage: StageSlug;
  summary: string;
  whyItMatters: string[];
  /** The concise statement of what VetSSI considers good practice. */
  standard: string;
  roles: RoleAssignment[];
  practices: Practice[];
  checklist: ChecklistItem[];
  evidenceSummary: string;
  /** Overall classification for the protocol as a whole. */
  evidenceLevel: EvidenceLevel;
  evidenceLimitations: string[];
  reviewStatus: ReviewStatus;
  auditQuestions: AuditQuestion[];
  relatedProtocols: string[];
  resources: string[];
  references: string[];
  glossaryTerms: string[];
  /** ISO date, or null where no editorial review has happened yet. */
  lastReviewed: string | null;
  /** Rough minutes to read the protocol and compare it with current practice. */
  reviewTimeMinutes: number;
};

// ─── Mosaic ──────────────────────────────────────────────────────────────────

export type MosaicTile = {
  slug: string;
  name: string;
  /** Why this area of care contributes to surgical site infection risk. */
  contribution: string;
  /** Protocol slugs that apply controls to this tile. */
  protocols: string[];
};

// ─── Glossary ────────────────────────────────────────────────────────────────

export type GlossaryTerm = {
  slug: string;
  term: string;
  definition: string;
  /** Where the definition comes from, when it is not VetSSI editorial. */
  source?: string;
  /** Internal link to the fuller treatment of the term. */
  href?: string;
};
