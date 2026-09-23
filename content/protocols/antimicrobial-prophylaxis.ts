import type { Protocol } from "../types";

export const antimicrobialProphylaxis: Protocol = {
  slug: "antimicrobial-prophylaxis",
  protocolNumber: 2,
  title: "Antimicrobial Prophylaxis",
  shortTitle: "Prophylaxis",
  stage: "before-surgery",
  summary:
    "Deciding whether prophylaxis is indicated, and where it is, giving the right agent at the right time and stopping it when it should stop.",
  whyItMatters: [
    "Prophylaxis is an adjunct to aseptic practice, not a substitute for it. It cannot compensate for a break in the sterile field, a shortened antiseptic contact time or a contaminated implant.",
    "Timing determines whether prophylaxis does anything at all. An agent given after the incision is largely wasted, and one given too early has fallen below useful concentration by the time it is needed.",
    "Prophylaxis continued after surgery without indication is the most common antimicrobial stewardship failure in surgical practice, and it does not reduce infection.",
  ],
  standard:
    "Antimicrobial prophylaxis should be given only where the procedure's risk justifies it, using a documented agent and dose, administered within the interval before incision that achieves tissue concentration at the time of surgery, redosed according to a predefined interval, and discontinued at the end of the procedure unless there is a recorded reason to continue.",
  roles: [
    { role: "surgeon", responsibility: "primary" },
    { role: "anaesthesia-team", responsibility: "primary" },
    { role: "practice-leadership", responsibility: "oversight" },
  ],
  reviewTimeMinutes: 9,
  reviewStatus: "draft",
  lastReviewed: null,
  practiceGroups: [
    {
      id: "decide",
      title: "Decide whether, and what",
      summary:
        "Prophylaxis is not automatic. These practices establish whether it is indicated and which agent fits.",
      practices: [
        "indication",
        "agent-selection",
        "patient-considerations",
        "local-resistance",
      ],
    },
    {
      id: "deliver",
      title: "Deliver it correctly",
      summary:
        "Timing is the variable that determines whether prophylaxis does anything at all.",
      practices: [
        "dose",
        "timing",
        "redosing",
      ],
    },
    {
      id: "stop-and-record",
      title: "Stop it, and record it",
      summary:
        "Prophylaxis ends with the procedure unless there is a recorded reason otherwise.",
      practices: [
        "discontinuation",
        "postoperative-stewardship",
        "documentation",
      ],
    },
  ],
  practices: [
    {
      id: "indication",
      title: "Indication for prophylaxis",
      summary:
        "Decide case by case against written criteria — not by default in either direction.",
      recommendedAction:
        "Decide whether prophylaxis is indicated using written criteria based on procedure type, duration, implant involvement and patient risk, and record the decision either way.",
      implementationSteps: [
        "Write criteria for when prophylaxis is and is not indicated in this practice.",
        "Record the decision in the surgical record for every case, including decisions not to give it.",
        "Review the criteria against the practice's own surveillance and resistance data periodically.",
      ],
      commonFailurePoints: [
        "Prophylaxis given to every surgical patient regardless of procedure.",
        "The decision made but not recorded, so it cannot be audited.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Veterinary and human guidance supports selective rather than universal prophylaxis, based on procedure type and risk. The specific thresholds vary between guidance documents and are not settled for veterinary surgery.",
      references: ["weese-2008", "guardabassi-2010", "mangram-1999"],
    },
    {
      id: "agent-selection",
      title: "Agent selection",
      summary:
        "Match the agent to the likely organisms, and keep it as narrow as the case allows.",
      recommendedAction:
        "Select the prophylactic agent according to the organisms most likely to contaminate the procedure, using the narrowest appropriate spectrum, and record the standard choice in the written protocol.",
      implementationSteps: [
        "Define a default agent for each common procedure type in the written protocol.",
        "Base the choice on likely contaminating organisms rather than on breadth of cover.",
        "Reserve agents of last resort for treatment, not prophylaxis.",
      ],
      commonFailurePoints: [
        "Broad-spectrum agents used prophylactically because they feel safer.",
        "Agent choice varying by individual preference with no written default.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Veterinary antimicrobial use guidance supports narrow-spectrum, organism-directed selection for prophylaxis. Comparative outcome data between specific agents in veterinary surgical prophylaxis is limited.",
      references: ["guardabassi-2010", "weese-2011-uti", "weese-2008"],
    },
    {
      id: "dose",
      title: "Dose",
      summary: "Dose on accurate current weight, not on the last recorded one.",
      recommendedAction:
        "Calculate the dose on an accurate current body weight and record the dose actually given.",
      implementationSteps: [
        "Weigh the patient on admission rather than using a previously recorded weight.",
        "Record the calculated dose and the dose administered as separate entries.",
        "Note any dose adjustment for the patient and the reason for it.",
      ],
      commonFailurePoints: [
        "Historical weight used for a patient whose weight has changed.",
        "Dose prescribed but the administered amount never recorded.",
      ],
      roles: [{ role: "anaesthesia-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Standard pharmacological practice. Evidence specific to prophylactic dosing accuracy and infection outcomes in veterinary surgery is limited.",
    },
    {
      id: "timing",
      title: "Timing before incision",
      summary: "The single most important variable in this protocol.",
      recommendedAction:
        "Administer prophylaxis within the interval before incision that achieves effective tissue concentration at the time of surgery, and record the administration time and the incision time separately.",
      implementationSteps: [
        "Define the target interval for each agent used, in the written protocol.",
        "Assign responsibility for administration explicitly, so it is not assumed by two people or by neither.",
        "Record administration time and incision time as separate timestamps so the interval can be audited.",
        "Include confirmation of prophylaxis timing in the pre-incision check.",
      ],
      commonFailurePoints: [
        "Prophylaxis given at induction regardless of how long preparation then takes.",
        "Given after incision, which largely defeats the purpose.",
        "Only one timestamp recorded, so the interval cannot be checked.",
      ],
      roles: [{ role: "anaesthesia-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "The principle that prophylaxis must achieve tissue concentration before incision is well established and consistent across guidance. The precise optimal interval varies by agent and has been studied mainly in human surgery.",
      references: ["mangram-1999", "berrios-torres-2017", "weese-2008"],
    },
    {
      id: "redosing",
      title: "Intraoperative redosing",
      summary:
        "Set the interval before the case, and make someone responsible for the clock.",
      recommendedAction:
        "Define a redosing interval for the agent in use, assign responsibility for tracking it, and redose during prolonged procedures or significant blood loss.",
      implementationSteps: [
        "Record the redosing interval in the anaesthesia record at the start of the case.",
        "Assign one person responsibility for tracking it, and say who at the briefing.",
        "Use a timer or alarm rather than relying on someone noticing.",
        "Consider redosing after significant blood loss as well as on elapsed time.",
      ],
      commonFailurePoints: [
        "Redosing interval worked out mid-procedure rather than set in advance.",
        "Everyone assuming someone else is watching the clock.",
        "Blood loss not treated as a redosing trigger.",
      ],
      roles: [{ role: "anaesthesia-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Redosing during prolonged procedures is supported by pharmacokinetic reasoning and human surgical guidance. Direct veterinary outcome evidence is limited.",
      references: ["berrios-torres-2017", "mangram-1999"],
    },
    {
      id: "patient-considerations",
      title: "Patient-specific considerations",
      summary:
        "Known reactions, organ function and concurrent medication all change the choice.",
      recommendedAction:
        "Check for known adverse reactions, relevant organ dysfunction and interacting medication before selecting and dosing the agent.",
      implementationSteps: [
        "Check the record for previously documented adverse drug reactions.",
        "Adjust agent or dose for renal or hepatic dysfunction where indicated.",
        "Review concurrent medication for interactions before administration.",
      ],
      commonFailurePoints: [
        "A documented reaction in the history not checked before administration.",
        "Standard dosing applied to a patient with significant organ dysfunction.",
      ],
      roles: [{ role: "anaesthesia-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard clinical practice. Not specific to infection outcomes.",
    },
    {
      id: "local-resistance",
      title: "Local resistance patterns",
      summary:
        "Let your own culture results inform your default agent.",
      recommendedAction:
        "Review the practice's accumulated culture and susceptibility data at least annually and use it to review the default prophylactic agent.",
      implementationSteps: [
        "Aggregate susceptibility results from surgical site infections rather than reviewing them case by case.",
        "Review the pattern at least annually alongside the surveillance report.",
        "Record any resulting change to the prophylaxis protocol and the date it took effect.",
      ],
      commonFailurePoints: [
        "Culture results used only for individual cases and never aggregated.",
        "Default agent unchanged for years despite a shifting resistance pattern.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "surgeon", responsibility: "supporting" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Using local susceptibility data to guide empirical selection is a core antimicrobial stewardship principle in veterinary guidance. Its isolated effect on surgical infection rates has not been quantified.",
      references: ["guardabassi-2010", "weese-2011-uti"],
    },
    {
      id: "documentation",
      title: "Documentation",
      summary: "Agent, dose, route, time — and the incision time.",
      recommendedAction:
        "Record agent, dose, route and administration time for every prophylactic dose, together with the incision time, in a place that supports later audit.",
      implementationSteps: [
        "Use structured fields rather than free text so the data can be reviewed in bulk.",
        "Record redoses as separate entries with their own times.",
        "Record decisions not to give prophylaxis as explicitly as decisions to give it.",
      ],
      commonFailurePoints: [
        "Free-text notes that cannot be audited without reading every record.",
        "Redoses not recorded separately, so the interval cannot be reconstructed.",
      ],
      roles: [{ role: "anaesthesia-team", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote: "Good practice and a precondition for audit of this protocol.",
    },
    {
      id: "discontinuation",
      title: "Discontinuation and duration",
      summary: "Prophylaxis stops at the end of the procedure.",
      recommendedAction:
        "Discontinue prophylaxis at the end of the procedure unless there is a recorded clinical reason to continue, and record that reason where prophylaxis is extended.",
      implementationSteps: [
        "Make discontinuation at the end of the procedure the written default.",
        "Require a recorded reason wherever prophylaxis continues postoperatively.",
        "Audit how often prophylaxis is extended and for what reasons.",
      ],
      commonFailurePoints: [
        "Postoperative continuation as an unexamined routine.",
        "Continuation described as 'cover' with no clinical indication recorded.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Human surgical guidance does not support continuing prophylaxis after the procedure for the purpose of preventing surgical site infection. Veterinary guidance is consistent with this position, though direct veterinary trial evidence is limited.",
      references: ["berrios-torres-2017", "guardabassi-2010", "weese-2008"],
    },
    {
      id: "postoperative-stewardship",
      title: "Postoperative antimicrobial stewardship",
      summary:
        "Treatment and prophylaxis are different things, and should be recorded differently.",
      recommendedAction:
        "Distinguish prophylaxis from treatment in the record, and where postoperative antimicrobials are given as treatment, record the indication, intended duration and review point.",
      implementationSteps: [
        "Record prophylaxis and treatment as distinct categories, not as one antimicrobial entry.",
        "State an intended duration and a review point whenever treatment is started.",
        "Review antimicrobial use at case review alongside infection data.",
      ],
      commonFailurePoints: [
        "Prophylaxis drifting into treatment with no decision point in between.",
        "Courses started with no stated end date.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Antimicrobial stewardship principles are well established in veterinary guidance. Evidence connecting stewardship practice specifically to surgical site infection rates is limited; the primary rationale is preservation of antimicrobial effectiveness.",
      references: ["guardabassi-2010", "weese-2011-uti", "hillier-2014"],
    },
  ],
  checklist: [
    { id: "amp-1", label: "Decision on whether prophylaxis is indicated recorded, either way", practiceId: "indication" },
    { id: "amp-2", label: "Agent matches the written default for this procedure type", practiceId: "agent-selection" },
    { id: "amp-3", label: "Dose calculated on current measured weight", practiceId: "dose" },
    { id: "amp-4", label: "Known adverse reactions and organ function checked", practiceId: "patient-considerations" },
    { id: "amp-5", label: "Administration time recorded", practiceId: "timing" },
    { id: "amp-6", label: "Incision time recorded separately", practiceId: "timing" },
    { id: "amp-7", label: "Prophylaxis timing confirmed aloud before incision", practiceId: "timing" },
    { id: "amp-8", label: "Redosing interval set and one named person tracking it", practiceId: "redosing" },
    { id: "amp-9", label: "Prophylaxis stopped at the end of the procedure, or reason recorded", practiceId: "discontinuation" },
    { id: "amp-10", label: "Any postoperative antimicrobial recorded as treatment, with duration and review point", practiceId: "postoperative-stewardship" },
  ],
  evidenceSummary:
    "The core principles here — that prophylaxis must reach tissue concentration before incision, that it should be redosed during prolonged procedures, and that it should not continue after the procedure to prevent infection — are consistent across human surgical guidance and are reflected in veterinary guidance. Direct veterinary trial evidence for the specific intervals, agents and thresholds is limited, and the numbers in any practice's protocol will come from guidance and pharmacokinetic reasoning rather than from veterinary outcome trials. VetSSI does not recommend specific agents, doses or intervals: those depend on the procedures a practice performs, its own resistance pattern and its regulatory context.",
  evidenceLevel: "moderate",
  evidenceLimitations: [
    "Optimal pre-incision intervals are agent-specific and derived largely from human surgical studies.",
    "Comparative veterinary outcome data between prophylactic agents is limited.",
    "Evidence against postoperative continuation is stronger in human than in veterinary surgery.",
    "Stewardship practices are justified primarily by preservation of antimicrobial effectiveness, not by demonstrated reduction in surgical site infection.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    { id: "amp-a1", question: "Is there a written prophylaxis protocol naming agent, dose, timing and redosing interval by procedure type?", lookFor: "A dated document with specific values, not general principles." },
    { id: "amp-a2", question: "Can the interval between administration and incision be calculated from the record?", lookFor: "Sample recent records for two separate timestamps. One timestamp means the interval is not being measured." },
    { id: "amp-a3", question: "Is prophylaxis timing confirmed aloud before incision?", lookFor: "Direct observation of several cases." },
    { id: "amp-a4", question: "How often does prophylaxis continue after the procedure, and is a reason recorded?", lookFor: "Count across a sample of recent cases rather than asking." },
    { id: "amp-a5", question: "Has the practice reviewed its own culture and susceptibility data in the last year?", lookFor: "A dated review, and any resulting change to the protocol." },
    { id: "amp-a6", question: "Are decisions not to give prophylaxis recorded?", lookFor: "If only administrations appear in the record, selective prophylaxis cannot be audited." },
  ],
  relatedProtocols: ["patient-assessment-planning", "postoperative-wound-care", "ssi-surveillance", "surgical-technique-lavage-closure"],
  resources: ["printable-protocol-pack", "evidence-summaries"],
  references: ["mangram-1999", "berrios-torres-2017", "weese-2008", "guardabassi-2010", "weese-2011-uti", "hillier-2014", "nelson-2011"],
  glossaryTerms: ["antimicrobial-prophylaxis", "antimicrobial-stewardship", "surgical-site-infection"],
};
