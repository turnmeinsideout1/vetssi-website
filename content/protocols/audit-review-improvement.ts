import type { Protocol } from "../types";

export const auditReviewImprovement: Protocol = {
  slug: "audit-review-improvement",
  protocolNumber: 12,
  title: "Audit, Review & Continuous Improvement",
  shortTitle: "Audit & Improvement",
  stage: "measure-improve",
  summary:
    "Checking whether the written protocols describe what actually happens, reviewing what goes wrong, and changing practice on the basis of both.",
  whyItMatters: [
    "Surveillance tells a practice what its infection rate is. Audit tells it why. Without audit, a rising rate produces speculation rather than action.",
    "The gap between a written protocol and observed practice is usually larger than anyone in the practice expects, and it can only be measured by watching.",
    "Near misses are more numerous and more informative than infections, and they are almost always unrecorded.",
  ],
  standard:
    "Written protocols should be reviewed on a schedule, actual practice should be observed against them, contamination events and near misses should be recorded, and findings from surveillance, audit and case review should result in recorded decisions that are followed up.",
  roles: [
    { role: "practice-leadership", responsibility: "primary" },
    { role: "surgeon", responsibility: "oversight" },
    { role: "surgical-team", responsibility: "supporting" },
  ],
  reviewTimeMinutes: 10,
  reviewStatus: "draft",
  lastReviewed: null,
  practices: [
    {
      id: "protocol-review",
      title: "Written protocol review",
      summary: "Dated, owned, and reviewed on a schedule.",
      recommendedAction:
        "Maintain written protocols with a named owner, a date and a review interval, and review them on that schedule.",
      implementationSteps: [
        "Give every protocol a named owner and a review date.",
        "Keep one current version accessible where the work happens.",
        "Review on schedule rather than only when something goes wrong.",
        "Record what changed and why at each review.",
      ],
      commonFailurePoints: [
        "Undated protocols with no owner, which nobody updates.",
        "Multiple versions circulating, with staff following different ones.",
        "Review only ever triggered by an incident.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard quality management practice.",
      references: ["aorn-quality"],
    },
    {
      id: "staff-competency",
      title: "Staff competency",
      summary: "Assessed by observation, including for experienced staff.",
      recommendedAction:
        "Assess competency in the practices that matter most by observation, on joining and at a defined interval, and record it.",
      implementationSteps: [
        "Identify which practices warrant formal competency assessment.",
        "Assess by observation against the written technique rather than by discussion.",
        "Include experienced staff, locums and visiting surgeons.",
        "Re-teach where technique has drifted, rather than only recording the finding.",
      ],
      commonFailurePoints: [
        "Experienced staff exempted, though drift is often greatest there.",
        "Assessment at induction and never again.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Training and competency are components of multi-element improvement programmes associated with reduced infection in human healthcare; the component cannot be isolated.",
      references: ["gillespie-2014", "pittet-2000"],
    },
    {
      id: "observational-audit",
      title: "Direct observational audit",
      summary:
        "Watch what happens. It is the only way to find the gap.",
      recommendedAction:
        "Observe actual practice against the written protocol at defined intervals, and record what is seen rather than what should happen.",
      implementationSteps: [
        "Use the audit questions on each protocol page as the basis for observation.",
        "Observe rather than ask; self-reported compliance is consistently higher than observed compliance.",
        "Observe normal working conditions, including busy lists and out-of-hours work.",
        "Record what was seen, with numbers where possible.",
        "Feed findings back to the team as observations, not as judgements about individuals.",
      ],
      commonFailurePoints: [
        "Audit by questionnaire, which measures belief rather than behaviour.",
        "Observation only on quiet days, which measures best case rather than usual case.",
        "Findings attributed to individuals, after which behaviour changes only while being observed.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "surgical-team", responsibility: "supporting" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Direct observation is the standard method for measuring compliance in infection prevention, and the gap between self-reported and observed compliance is well documented in hand hygiene literature. Note that observation itself changes behaviour.",
      references: ["pittet-2000", "who-hand-hygiene-2009", "gillespie-2014"],
    },
    {
      id: "checklist-compliance",
      title: "Checklist compliance",
      summary:
        "Whether it was used, and whether using it meant anything.",
      recommendedAction:
        "Monitor both whether checklists are completed and whether completing them reflects what actually happened.",
      implementationSteps: [
        "Measure completion rates from records.",
        "Separately observe whether items are actually checked or simply ticked.",
        "Investigate items that are consistently ticked but rarely observed.",
        "Revise checklist items that are impractical rather than tolerating routine false completion.",
      ],
      commonFailurePoints: [
        "Completion rate reported as compliance, when the two are different.",
        "An impractical item tolerated, which teaches the team that ticking without checking is acceptable.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Checklist programmes have been associated with improved outcomes in human surgery, and implementation quality rather than mere presence has been identified as the determining factor.",
      references: ["haynes-2009", "who-safe-surgery-2009"],
    },
    {
      id: "contamination-documentation",
      title: "Documentation of contamination events",
      summary: "Recorded at the time, in a defined place.",
      recommendedAction:
        "Record contamination events at the time they occur, including what happened, what was done and at what point in the procedure.",
      implementationSteps: [
        "Define where such events are recorded, so it is not left to individual judgement.",
        "Record the event, the response and the timing.",
        "Record without attribution to an individual.",
        "Review recorded events collectively rather than case by case.",
      ],
      commonFailurePoints: [
        "No defined place to record, so events are recorded nowhere.",
        "Recording perceived as blame, which stops it.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Drawn from general safety literature on incident reporting. Not studied against veterinary surgical site infection outcomes.",
      references: ["reason-2000", "gawande-2003"],
    },
    {
      id: "near-miss-reporting",
      title: "Near-miss reporting",
      summary:
        "The most informative data a practice can collect, and the least collected.",
      recommendedAction:
        "Record near misses as well as actual events, and treat a rise in near-miss reporting as a sign the system is working.",
      implementationSteps: [
        "Make reporting quick; a long form guarantees under-reporting.",
        "Ask about near misses explicitly at debrief, since they are otherwise not mentioned.",
        "Respond to reports visibly, so reporting is seen to lead somewhere.",
        "Expect and welcome an increase in reports when the system starts working.",
      ],
      commonFailurePoints: [
        "An increase in reports interpreted as deteriorating standards, which ends the reporting.",
        "Reports submitted and never acknowledged.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "surgical-team", responsibility: "supporting" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Near-miss reporting is a well-established principle in safety-critical industries and human healthcare. Its effect on veterinary surgical infection rates has not been studied.",
      references: ["reason-2000", "gawande-2003", "pronovost-2006"],
    },
    {
      id: "environmental-monitoring",
      title: "Environmental monitoring where appropriate",
      summary:
        "Only with a predefined question and a predefined action.",
      recommendedAction:
        "Where environmental monitoring is carried out, define the question, the sampling plan and the action any result will trigger before sampling begins.",
      implementationSteps: [
        "State what the monitoring is meant to establish.",
        "Define the action threshold in advance.",
        "Trend results rather than treating each as a pass or fail.",
      ],
      commonFailurePoints: [
        "Sampling with no predefined action, producing data that changes nothing.",
        "Reactive response to a single result.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Routine environmental microbiological monitoring is not generally recommended in human perioperative guidance and its value in veterinary settings is unestablished.",
      references: ["aorn-environmental-cleaning"],
    },
    {
      id: "morbidity-mortality-review",
      title: "Morbidity and mortality review",
      summary:
        "Regular, structured, and focused on the system rather than the individual.",
      recommendedAction:
        "Hold regular structured review of surgical complications, including infections, focused on identifying system factors rather than individual fault.",
      implementationSteps: [
        "Hold the review on a schedule, not only after a serious event.",
        "Use a consistent structure so cases are examined comparably.",
        "Focus on what in the system allowed the outcome, not on who was involved.",
        "Record conclusions and actions, with an owner for each.",
        "Include the whole team, not only surgeons.",
      ],
      commonFailurePoints: [
        "Review that becomes a discussion of individual performance, after which cases stop being brought.",
        "Conclusions reached but no actions recorded or followed up.",
        "Nursing and support staff excluded, though they often saw what happened.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "surgeon", responsibility: "supporting" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Structured review is standard in surgical quality improvement. Its specific effect on infection rates has not been isolated from the wider programmes it forms part of.",
      references: ["gawande-2003", "aorn-quality"],
    },
    {
      id: "briefing-debriefing-findings",
      title: "Briefing and debriefing findings",
      summary: "Aggregate what debriefs surface, rather than losing it.",
      recommendedAction:
        "Collect what briefings and debriefings raise and review it collectively, so that recurring issues are addressed rather than repeatedly mentioned.",
      implementationSteps: [
        "Record debrief items in one place rather than in individual case notes.",
        "Review them periodically for recurring themes.",
        "Feed recurring themes into protocol review.",
        "Close the loop by telling the team what changed as a result.",
      ],
      commonFailurePoints: [
        "The same issue raised at every debrief and never addressed.",
        "Debrief items recorded per case and never aggregated.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "surgical-team", responsibility: "supporting" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Part of checklist and safety programmes associated with improved outcomes in human surgery; not separately isolated.",
      references: ["haynes-2009", "gillespie-2014"],
    },
    {
      id: "corrective-action",
      title: "Corrective-action plans",
      summary: "Specific, owned, dated, and checked.",
      recommendedAction:
        "Convert findings into specific corrective actions with a named owner and a date, and check at the next review whether they were completed and whether they worked.",
      implementationSteps: [
        "State the action specifically enough that completion is unambiguous.",
        "Assign one named owner and a date.",
        "Address the system factor rather than the individual instance.",
        "Check completion at the next review, and check whether the problem actually resolved.",
      ],
      commonFailurePoints: [
        "Actions phrased as intentions — 'be more careful with' — which cannot be completed or checked.",
        "Actions assigned to a group, which means nobody.",
        "Completion checked but effectiveness never assessed.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard quality management practice.",
      references: ["aorn-quality"],
    },
    {
      id: "staff-education",
      title: "Staff education",
      summary: "Driven by what audit found, not by what is available.",
      recommendedAction:
        "Base education on what audit and surveillance have shown, and assess whether it changed practice rather than whether it was delivered.",
      implementationSteps: [
        "Select topics from audit findings rather than from available material.",
        "Include the whole team, with content relevant to each role.",
        "Re-audit after education to see whether practice changed.",
        "Record what was delivered, to whom, and what the re-audit showed.",
      ],
      commonFailurePoints: [
        "Education delivered and recorded, with no measurement of effect.",
        "Topics chosen by availability rather than by need.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Education is a component of multi-element improvement programmes; education alone, without audit and feedback, has generally been less effective in human healthcare studies.",
      references: ["gillespie-2014", "pittet-2000"],
    },
    {
      id: "reassessment-after-change",
      title: "Reassessment after change",
      summary: "Any change is a hypothesis until it is re-measured.",
      recommendedAction:
        "Re-audit after any change to protocol, staffing, facilities or equipment, to confirm the change had the intended effect and no unintended one.",
      implementationSteps: [
        "Re-audit after protocol changes, significant staffing changes, facility changes and new equipment.",
        "Compare against the baseline measured before the change.",
        "Look for unintended consequences as well as intended effects.",
        "Record the result, including where the change did not work.",
      ],
      commonFailurePoints: [
        "Change implemented and assumed effective.",
        "No baseline measured beforehand, so the effect cannot be assessed.",
        "Changes that did not work quietly abandoned rather than recorded.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard quality improvement methodology.",
      references: ["aorn-quality", "pronovost-2006"],
    },
    {
      id: "periodic-revision",
      title: "Periodic protocol revision",
      summary: "Revise against evidence and against local findings.",
      recommendedAction:
        "Revise protocols at the review interval against both new external evidence and the practice's own audit and surveillance findings.",
      implementationSteps: [
        "Review external guidance and evidence at the review interval.",
        "Review the practice's own surveillance, audit and event data alongside it.",
        "Record what changed, why, and when it takes effect.",
        "Communicate changes to everyone affected rather than filing the new version.",
      ],
      commonFailurePoints: [
        "Protocols updated against published guidance while local findings are ignored.",
        "New version filed but never communicated, so practice does not change.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "surgeon", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard quality management practice.",
      references: ["aorn-quality"],
    },
    {
      id: "leadership-accountability",
      title: "Leadership accountability",
      summary:
        "Named responsibility, and senior staff visibly held to the same standard.",
      recommendedAction:
        "Name who is accountable for infection prevention in the practice, give them the authority to act, and have senior clinicians visibly held to the same standards as everyone else.",
      implementationSteps: [
        "Name the accountable person and give them the authority the role requires.",
        "Allocate protected time for surveillance and audit rather than expecting them to fit around clinical work.",
        "Have senior staff visibly follow the protocols, including when inconvenient.",
        "Have leadership respond visibly and without defensiveness when a standard is raised about them.",
      ],
      commonFailurePoints: [
        "Responsibility assigned without authority or time.",
        "Senior clinicians exempting themselves, which removes the standard for everyone.",
        "Infection prevention treated as a nursing responsibility.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Leadership engagement is repeatedly identified as a determining factor in the success of infection prevention programmes in human healthcare. It is a consistent qualitative finding rather than a quantified intervention.",
      references: ["pronovost-2006", "pittet-2000", "gillespie-2014"],
    },
  ],
  checklist: [
    { id: "ari-1", label: "Every protocol has a named owner, a date and a review interval", practiceId: "protocol-review" },
    { id: "ari-2", label: "One current version accessible where the work happens", practiceId: "protocol-review" },
    { id: "ari-3", label: "Competency assessed by observation, including for experienced staff", practiceId: "staff-competency" },
    { id: "ari-4", label: "Observational audit carried out under normal working conditions", practiceId: "observational-audit" },
    { id: "ari-5", label: "Checklist use observed, not just completion counted", practiceId: "checklist-compliance" },
    { id: "ari-6", label: "A defined place exists to record contamination events and near misses", practiceId: "near-miss-reporting" },
    { id: "ari-7", label: "Morbidity and mortality review held on schedule, whole team included", practiceId: "morbidity-mortality-review" },
    { id: "ari-8", label: "Recurring debrief themes aggregated and acted on", practiceId: "briefing-debriefing-findings" },
    { id: "ari-9", label: "Corrective actions are specific, owned and dated", practiceId: "corrective-action" },
    { id: "ari-10", label: "Completion and effectiveness both checked at the next review", practiceId: "corrective-action" },
    { id: "ari-11", label: "Re-audit performed after changes, against a pre-change baseline", practiceId: "reassessment-after-change" },
    { id: "ari-12", label: "A named person is accountable, with authority and protected time", practiceId: "leadership-accountability" },
  ],
  evidenceSummary:
    "This protocol draws almost entirely on human healthcare and general safety literature rather than on veterinary infection studies. The clearest findings transferred here are that self-reported compliance substantially exceeds observed compliance, that education alone is less effective than audit with feedback, and that leadership engagement repeatedly distinguishes programmes that work from those that do not. Multi-element improvement programmes have reduced infection rates in human healthcare, but their components cannot be separated, so no individual practice here can be credited with an effect size. The strongest argument for this protocol is structural rather than empirical: it is the mechanism by which everything else on this site can be checked and corrected.",
  evidenceLevel: "moderate",
  evidenceLimitations: [
    "Almost all evidence is from human healthcare; veterinary evidence for these practices is essentially absent.",
    "Multi-element programme evidence cannot be attributed to individual components.",
    "Observation changes the behaviour being observed, which limits what audit can measure.",
    "Leadership engagement findings are consistent but qualitative rather than quantified.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    { id: "ari-a1", question: "Are the practice's protocols dated, owned, and within their review interval?", lookFor: "Pick three at random and check the dates." },
    { id: "ari-a2", question: "When was practice last observed against a written protocol, and what was found?", lookFor: "A dated record with observations. A questionnaire is not observation." },
    { id: "ari-a3", question: "Is there anywhere to record a near miss, and has anyone used it?", lookFor: "Ask to see the record. An empty log usually means the route does not work." },
    { id: "ari-a4", question: "Can you trace one corrective action from finding to completion to re-check?", lookFor: "Follow one through end to end. This is the single most informative audit question here." },
    { id: "ari-a5", question: "Who is accountable for infection prevention, and do they have time allocated?", lookFor: "Ask three staff members who it is. Inconsistent answers are the finding." },
    { id: "ari-a6", question: "Are senior clinicians observed to follow the protocols?", lookFor: "Direct observation. An exception at the top removes the standard for everyone." },
  ],
  relatedProtocols: ["ssi-surveillance", "aseptic-or-behaviour", "surgical-team-preparation", "operating-theatre-preparation"],
  resources: ["observation-audit-form", "audit-questions", "role-view", "ssi-surveillance-log"],
  references: ["pittet-2000", "who-hand-hygiene-2009", "gillespie-2014", "haynes-2009", "who-safe-surgery-2009", "reason-2000", "gawande-2003", "pronovost-2006", "aorn-quality", "aorn-environmental-cleaning"],
  glossaryTerms: ["near-miss", "surveillance-effect", "protocol", "practice"],
};
