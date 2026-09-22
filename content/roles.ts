import type { Role, RoleSlug, RoleResponsibility } from "./types";

export const roles: Role[] = [
  {
    slug: "surgeon",
    title: "Surgeon",
    shortTitle: "Surgeon",
    description:
      "Accountable for case selection, the prophylaxis plan, intraoperative decisions about contamination, surgical technique and closure, and the instructions the patient goes home with.",
  },
  {
    slug: "anaesthesia-team",
    title: "Anaesthesia team",
    shortTitle: "Anaesthesia",
    description:
      "Responsible for vascular access, medication preparation and handling, delivery and timing of prophylaxis, and maintenance of body temperature.",
  },
  {
    slug: "prep-team",
    title: "Prep team",
    shortTitle: "Prep",
    description:
      "Carries out clipping, skin cleaning and antisepsis, protects the prepared site during transfer and positioning, and prepares and controls the theatre environment.",
  },
  {
    slug: "scrub-team",
    title: "Scrub team",
    shortTitle: "Scrub",
    description:
      "Steward of the sterile field: sterile setup, draping, instrument and implant handling, and recognition of breaks in the sterile barrier.",
  },
  {
    slug: "recovery-team",
    title: "Recovery team",
    shortTitle: "Recovery",
    description:
      "Owns the early postoperative window — incision protection, prevention of self-trauma, aseptic wound handling, ward hygiene and early recognition of concerning signs.",
  },
  {
    slug: "practice-leadership",
    title: "Practice leadership",
    shortTitle: "Leadership",
    description:
      "Responsible for written protocols, training and competency, surveillance, audit, and acting on what the data and observations show.",
  },
  {
    slug: "surgical-team",
    title: "Entire surgical team",
    shortTitle: "Whole team",
    description:
      "Shared responsibilities that no single role can hold alone — recognising and declaring contamination, controlling traffic and conversation, briefing and debriefing.",
  },
];

export const roleBySlug: Record<RoleSlug, Role> = roles.reduce(
  (acc, role) => {
    acc[role.slug] = role;
    return acc;
  },
  {} as Record<RoleSlug, Role>,
);

export function getRole(slug: string): Role | undefined {
  return roles.find((r) => r.slug === slug);
}

export const responsibilityLabels: Record<RoleResponsibility, string> = {
  primary: "Primary",
  oversight: "Oversight",
  supporting: "Supporting",
};

export const responsibilityDescriptions: Record<RoleResponsibility, string> = {
  primary: "Performs the practice.",
  oversight: "Confirms it was done and is accountable for the standard.",
  supporting: "Contributes to or enables the practice.",
};
