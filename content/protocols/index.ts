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

export function getProtocol(slug: string): Protocol | undefined {
  return protocols.find((p) => p.slug === slug);
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
