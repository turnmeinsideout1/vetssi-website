// Migration map: VetSSI V1 routes -> V2 routes.
//
// V1 presented 47 topics as standalone protocols. Almost all of them are
// practices inside one of the twelve V2 protocols, so each old route redirects
// to the new protocol and, where there is a clean match, to the specific
// practice anchor within it.
//
// Three V1 slugs (antimicrobial-prophylaxis, surgical-team-preparation,
// ssi-surveillance) are also V2 protocol slugs and therefore MUST NOT appear in
// the map below — the URL is unchanged and now serves the V2 protocol.
// Next.js matches redirects on pathname only and ignores the fragment, so a
// self-referencing entry produces an infinite redirect loop. buildRedirects()
// throws if one is introduced.



/** old protocol slug -> "<new protocol slug>#practice-<id>" or "<new slug>" */
const protocolMap = {
  // ── into Protocol 1: Patient Assessment & Surgical Planning ──────────────
  "patient-risk-stratification":
    "patient-assessment-planning#practice-patient-risk-factors",
  "case-risk-stratification":
    "patient-assessment-planning#practice-patient-risk-factors",
  "preoperative-patient-screening":
    "patient-assessment-planning#practice-existing-infections",
  "procedure-specific-planning":
    "patient-assessment-planning#practice-case-specific-planning",

  // ── into Protocol 2: Antimicrobial Prophylaxis ──────────────────────────
  // "antimicrobial-prophylaxis" keeps its URL.
  "antimicrobial-prophylaxis-plan": "antimicrobial-prophylaxis#practice-indication",
  "postoperative-antibiotic-decisions":
    "antimicrobial-prophylaxis#practice-postoperative-stewardship",

  // ── into Protocol 3: Patient Preparation ────────────────────────────────
  "preoperative-skin-preparation":
    "patient-preparation#practice-initial-skin-cleaning",
  "clipping-timing-technique": "patient-preparation#practice-clipping-timing",
  "surgical-site-antisepsis":
    "patient-preparation#practice-antiseptic-application",
  "patient-admission-hygiene": "patient-preparation#practice-initial-skin-cleaning",
  "transfer-after-clipping": "patient-preparation#practice-transfer-protection",
  "patient-positioning-isolation": "patient-preparation#practice-positioning",

  // ── into Protocol 4: Surgical Team Preparation ──────────────────────────
  // "surgical-team-preparation" keeps its URL.
  "hand-hygiene": "surgical-team-preparation#practice-routine-hand-hygiene",
  "or-attire-standards": "surgical-team-preparation#practice-or-attire",
  "gloves-outside-sterile-field":
    "surgical-team-preparation#practice-glove-integrity",

  // ── into Protocol 5: Operating Theatre Preparation ──────────────────────
  "or-environment-setup":
    "operating-theatre-preparation#practice-cleaning-between-procedures",
  "or-ventilation-environment":
    "operating-theatre-preparation#practice-ventilation",
  "sterile-instrument-setup":
    "operating-theatre-preparation#practice-sterile-setup",
  "sterility-readiness-check":
    "operating-theatre-preparation#practice-readiness-check",
  "medication-handling":
    "operating-theatre-preparation#practice-medication-preparation",
  "infusion-line-preparation":
    "operating-theatre-preparation#practice-medication-preparation",
  "iv-catheter-placement":
    "operating-theatre-preparation#practice-medication-preparation",
  "anesthesia-vascular-access-control":
    "operating-theatre-preparation#practice-medication-preparation",

  // ── into Protocol 6: Surgical Field Isolation ───────────────────────────
  "draping-technique": "surgical-field-isolation#practice-draping-sequence",
  "sterile-field-maintenance":
    "surgical-field-isolation#practice-sterile-boundaries",
  "incisional-drape-policy": "surgical-field-isolation#practice-adhesive-drapes",
  "contamination-event-response":
    "surgical-field-isolation#practice-breached-field",
  "contamination-sensitive-phases":
    "surgical-field-isolation#practice-breached-field",

  // ── into Protocol 7: Instruments & Implant Protection ───────────────────
  "instrument-sterility":
    "instruments-implant-protection#practice-sterilization-verification",
  "implant-handling":
    "instruments-implant-protection#practice-no-touch-handling",

  // ── into Protocol 8: Aseptic OR Behaviour ───────────────────────────────
  "or-behavior-rules": "aseptic-or-behaviour#practice-sterile-nonsterile-boundaries",
  "or-traffic-control": "aseptic-or-behaviour#practice-door-openings",
  "glove-change-protocol": "aseptic-or-behaviour#practice-glove-change-indications",

  // ── into Protocol 9: Surgical Technique, Lavage & Closure ───────────────
  "closure-technique": "surgical-technique-lavage-closure#practice-layered-closure",

  // ── into Protocol 10: Postoperative Wound Care ──────────────────────────
  "wound-management": "postoperative-wound-care#practice-aseptic-wound-handling",
  "incision-monitoring": "postoperative-wound-care#practice-wound-monitoring",
  "patient-self-trauma-prevention":
    "postoperative-wound-care#practice-self-trauma-prevention",
  "owner-discharge-instructions":
    "postoperative-wound-care#practice-discharge-instructions",
  "recovery-room-hygiene": "postoperative-wound-care#practice-recovery-hygiene",
  "cage-ward-hygiene": "postoperative-wound-care#practice-recovery-hygiene",
  "follow-up-schedule": "postoperative-wound-care#practice-wound-monitoring",

  // ── into Protocol 11: SSI Surveillance ──────────────────────────────────
  // "ssi-surveillance" keeps its URL.
  "compliance-metrics": "ssi-surveillance#practice-overall-rate",

  // ── into Protocol 12: Audit, Review & Continuous Improvement ────────────
  "case-review-triggers":
    "audit-review-improvement#practice-morbidity-mortality-review",
  "protocol-deviations-escalation":
    "audit-review-improvement#practice-near-miss-reporting",
};

/** Whole sections of V1 that moved. */
const sectionRedirects = [
  // The nine V1 contamination pathways became the Mosaic tiles.
  { source: "/contamination-pathways", destination: "/mosaic", permanent: true },
  {
    source: "/contamination-pathways/:slug",
    destination: "/mosaic",
    permanent: true,
  },
  // V1 videos had no actual video behind them; the planned media now lives
  // under Resources, labelled as planned.
  { source: "/videos", destination: "/resources#media", permanent: true },
  { source: "/videos/:slug", destination: "/resources#media", permanent: true },
];

export function buildRedirects() {
  const protocolRedirects = Object.entries(protocolMap).map(
    ([oldSlug, destination]) => {
      // A redirect whose destination pathname equals its source loops forever,
      // because the fragment is not part of the match.
      const destSlug = destination.split("#")[0];
      if (destSlug === oldSlug) {
        throw new Error(
          `Redirect loop: /protocols/${oldSlug} redirects to itself. ` +
            `This slug exists in both V1 and V2, so it needs no redirect entry.`,
        );
      }
      return {
        source: `/protocols/${oldSlug}`,
        destination: `/protocols/${destination}`,
        permanent: true,
      };
    },
  );
  return [...protocolRedirects, ...sectionRedirects];
}

/** Exposed for the migration note and for tests. */
export const v1ProtocolRedirectMap = protocolMap;
