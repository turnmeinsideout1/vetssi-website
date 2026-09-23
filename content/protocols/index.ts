import type { Protocol, StageSlug, RoleSlug, RoleResponsibility, Practice } from "../types";

import { patientAssessmentPlanning } from "./patient-assessment-planning";
import { antimicrobialProphylaxis } from "./antimicrobial-prophylaxis";
import { patientPreparation } from "./patient-preparation";
import { surgicalTeamPreparation } from "./surgical-team-preparation";
import { operatingTheatrePreparation } from "./operating-theatre-preparation";
import { surgicalFieldIsolation } from "./surgical-field-isolation";
import { instrumentsImplantProtection } from "./instruments-implant-protection";
import { asepticOrBehaviour } from "./aseptic-or-behaviour";
import { surgicalTechniqueLavageClosure } from "./surgical-technique-lavage-closure";
import { postoperativeWoundCare } from "./postoperative-wound-care";
import { ssiSurveillance } from "./ssi-surveillance";
import { auditReviewImprovement } from "./audit-review-improvement";

/** The twelve core protocols, in protocol-number order. */
export const protocols: Protocol[] = [
  patientAssessmentPlanning,
  antimicrobialProphylaxis,
  patientPreparation,
  surgicalTeamPreparation,
  operatingTheatrePreparation,
  surgicalFieldIsolation,
  instrumentsImplantProtection,
  asepticOrBehaviour,
  surgicalTechniqueLavageClosure,
  postoperativeWoundCare,
  ssiSurveillance,
  auditReviewImprovement,
];

/**
 * Practice groups drive what the protocol page renders, so a practice left out
 * of every group would silently disappear and a typo'd id would render an
 * empty row. Both are caught here, at module load, which means the build fails
 * rather than shipping a protocol with missing content.
 */
function validatePracticeGroups(): void {
  for (const protocol of protocols) {
    if (!protocol.practiceGroups) continue;

    const practiceIds = protocol.practices.map((p) => p.id);
    const grouped = protocol.practiceGroups.flatMap((g) => g.practices);

    const unknown = grouped.filter((id) => !practiceIds.includes(id));
    if (unknown.length) {
      throw new Error(
        `Protocol "${protocol.slug}": practiceGroups reference unknown practice ids: ${unknown.join(", ")}`,
      );
    }

    const ungrouped = practiceIds.filter((id) => !grouped.includes(id));
    if (ungrouped.length) {
      throw new Error(
        `Protocol "${protocol.slug}": these practices are in no group and would not render: ${ungrouped.join(", ")}`,
      );
    }

    const seen: string[] = [];
    const duplicates: string[] = [];
    for (const id of grouped) {
      if (seen.includes(id)) {
        if (!duplicates.includes(id)) duplicates.push(id);
      } else {
        seen.push(id);
      }
    }
    if (duplicates.length) {
      throw new Error(
        `Protocol "${protocol.slug}": practices appear in more than one group: ${duplicates.join(", ")}`,
      );
    }
  }
}

validatePracticeGroups();

export function getProtocol(slug: string): Protocol | undefined {
  return protocols.find((p) => p.slug === slug);
}

/**
 * Practices in display order — group order when groups are defined, otherwise
 * the protocol's own array order. Used by the protocol page and by anything
 * that needs to mirror what a reader actually sees.
 */
export function getOrderedPractices(protocol: Protocol): {
  group: { id: string; title: string; summary?: string } | null;
  practices: Protocol["practices"];
}[] {
  if (!protocol.practiceGroups) {
    return [{ group: null, practices: protocol.practices }];
  }
  const byId = new Map(protocol.practices.map((p) => [p.id, p]));
  return protocol.practiceGroups.map((group) => ({
    group: { id: group.id, title: group.title, summary: group.summary },
    practices: group.practices
      .map((id) => byId.get(id))
      .filter((p): p is Protocol["practices"][number] => Boolean(p)),
  }));
}

export function getProtocolsByStage(stage: StageSlug): Protocol[] {
  return protocols.filter((p) => p.stage === stage);
}

/** Previous and next protocol by number, for sequential navigation. */
export function getAdjacentProtocols(slug: string): {
  previous: Protocol | null;
  next: Protocol | null;
} {
  const index = protocols.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? protocols[index - 1] : null,
    next: index < protocols.length - 1 ? protocols[index + 1] : null,
  };
}

export function getProtocols(slugs: string[] = []): Protocol[] {
  return slugs
    .map((s) => getProtocol(s))
    .filter((p): p is Protocol => Boolean(p));
}

// ─── Role index ──────────────────────────────────────────────────────────────
//
// Derived from the same protocol data the protocol pages render, so the role
// view can never drift from the protocols themselves.

export type RoleAssignmentRow = {
  role: RoleSlug;
  responsibility: RoleResponsibility;
  stage: StageSlug;
  protocolSlug: string;
  protocolTitle: string;
  protocolNumber: number;
  practiceId: string;
  practiceTitle: string;
  practiceSummary: string;
  recommendedAction: string;
  href: string;
};

function buildRoleIndex(): RoleAssignmentRow[] {
  const rows: RoleAssignmentRow[] = [];
  for (const protocol of protocols) {
    for (const practice of protocol.practices) {
      for (const assignment of practice.roles) {
        rows.push({
          role: assignment.role,
          responsibility: assignment.responsibility,
          stage: protocol.stage,
          protocolSlug: protocol.slug,
          protocolTitle: protocol.title,
          protocolNumber: protocol.protocolNumber,
          practiceId: practice.id,
          practiceTitle: practice.title,
          practiceSummary: practice.summary,
          recommendedAction: practice.recommendedAction,
          href: `/protocols/${protocol.slug}#practice-${practice.id}`,
        });
      }
    }
  }
  return rows;
}

export const roleIndex: RoleAssignmentRow[] = buildRoleIndex();

export function getRoleAssignments(role: RoleSlug): RoleAssignmentRow[] {
  return roleIndex.filter((r) => r.role === role);
}

/** Count of practices a role is involved in, by responsibility. */
export function getRoleSummary(
  role: RoleSlug,
): Record<RoleResponsibility, number> {
  const rows = getRoleAssignments(role);
  return {
    primary: rows.filter((r) => r.responsibility === "primary").length,
    oversight: rows.filter((r) => r.responsibility === "oversight").length,
    supporting: rows.filter((r) => r.responsibility === "supporting").length,
  };
}

// ─── Aggregate helpers ───────────────────────────────────────────────────────

export const allPractices: (Practice & {
  protocolSlug: string;
  protocolTitle: string;
  protocolNumber: number;
  stage: StageSlug;
})[] = protocols.flatMap((protocol) =>
  protocol.practices.map((practice) => ({
    ...practice,
    protocolSlug: protocol.slug,
    protocolTitle: protocol.title,
    protocolNumber: protocol.protocolNumber,
    stage: protocol.stage,
  })),
);

export const practiceCount = allPractices.length;

/** Every reference id used anywhere in protocol content. */
export function collectReferenceIds(): string[] {
  const ids = new Set<string>();
  for (const protocol of protocols) {
    protocol.references.forEach((id) => ids.add(id));
    for (const practice of protocol.practices) {
      (practice.references ?? []).forEach((id) => ids.add(id));
    }
  }
  return Array.from(ids);
}

export {
  patientAssessmentPlanning,
  antimicrobialProphylaxis,
  patientPreparation,
  surgicalTeamPreparation,
  operatingTheatrePreparation,
  surgicalFieldIsolation,
  instrumentsImplantProtection,
  asepticOrBehaviour,
  surgicalTechniqueLavageClosure,
  postoperativeWoundCare,
  ssiSurveillance,
  auditReviewImprovement,
};
