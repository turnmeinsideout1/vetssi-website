import type { Protocol } from "../types";

export const postoperativeWoundCare: Protocol = {
  slug: "postoperative-wound-care",
  protocolNumber: 10,
  title: "Postoperative Wound Care & Patient Protection",
  shortTitle: "Postoperative Care",
  stage: "after-surgery",
  summary:
    "Protecting the incision through recovery and at home, recognising problems early, and handing over clearly to the owner.",
  whyItMatters: [
    "The incision remains vulnerable through early healing, in a ward and then a home that are not controlled environments.",
    "Responsibility changes hands twice in this stage — from theatre to ward, and from ward to owner — and each handover is a point at which information is lost.",
    "Most surgical site infections present after discharge, when the person observing the wound is the owner rather than a clinician.",
  ],
  standard:
    "The incision should be protected from contamination and self-trauma until healed, handled aseptically whenever it is examined or dressed, monitored against defined criteria, and the owner should be given specific written instructions on what to do, what to watch for and when to make contact.",
  roles: [
    { role: "recovery-team", responsibility: "primary" },
    { role: "surgeon", responsibility: "oversight" },
    { role: "practice-leadership", responsibility: "oversight" },
  ],
  reviewTimeMinutes: 9,
  reviewStatus: "draft",
  lastReviewed: null,
  practiceGroups: [
    {
      id: "protect",
      title: "Protect the incision",
      summary:
        "The wound stays vulnerable in an environment nobody controls.",
      practices: [
        "initial-dressing",
        "incision-protection",
        "self-trauma-prevention",
        "recovery-hygiene",
      ],
    },
    {
      id: "aseptic-handling",
      title: "Handle the wound aseptically",
      summary:
        "Dressing changes are a procedure, not a task between other tasks.",
      practices: [
        "hand-hygiene-wound-handling",
        "aseptic-wound-handling",
      ],
    },
    {
      id: "handover",
      title: "Hand over to the owner",
      summary:
        "The person who will actually see the early signs.",
      practices: [
        "discharge-instructions",
        "owner-education",
      ],
    },
    {
      id: "watch",
      title: "Watch, and respond",
      summary:
        "Most surgical site infections present after discharge.",
      practices: [
        "wound-monitoring",
        "remote-monitoring",
        "concerning-signs",
        "escalation",
        "postoperative-stewardship",
      ],
    },
  ],
  practices: [
    {
      id: "initial-dressing",
      title: "Initial dressing",
      summary: "Applied sterile, in theatre, before the drapes come off.",
      recommendedAction:
        "Apply the initial dressing with sterile technique before the drapes are removed, and record what was applied.",
      implementationSteps: [
        "Apply the dressing while the sterile field is still intact.",
        "Select a dressing appropriate to the wound and to the patient's likely behaviour.",
        "Record what was applied and when it is due to be checked.",
      ],
      commonFailurePoints: [
        "Dressing applied in recovery, after the incision has been exposed to the ward.",
        "What was applied not recorded, so the ward team does not know what to expect.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }, { role: "recovery-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. Optimal dressing type and duration for veterinary surgical wounds is not well established.",
      references: ["campbell-2012-bandages", "mangram-1999"],
    },
    {
      id: "incision-protection",
      title: "Incision protection",
      summary: "Between the incision and everything the patient lies on.",
      recommendedAction:
        "Keep the incision covered or otherwise protected from contact with bedding, floors and surfaces during the early postoperative period.",
      implementationSteps: [
        "Provide clean, dry bedding and change it when soiled.",
        "Position the patient so the incision is not in contact with bedding where possible.",
        "Check the dressing at defined intervals rather than only when it looks displaced.",
      ],
      commonFailurePoints: [
        "Dressing displaced during recovery and not noticed until the next check.",
        "Incision in direct contact with bedding that has been soiled.",
      ],
      roles: [{ role: "recovery-team", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote: "Good practice. Not separately studied.",
    },
    {
      id: "self-trauma-prevention",
      title: "Prevention of licking or self-trauma",
      summary:
        "Fitted before recovery, and not removed because the patient dislikes it.",
      recommendedAction:
        "Fit an appropriate protective device before the patient recovers, confirm it prevents access to the incision, and instruct the owner that it stays on continuously.",
      implementationSteps: [
        "Fit the device before recovery rather than after the first attempt at licking.",
        "Confirm the patient cannot reach the incision with the device in place.",
        "Provide the device the patient will tolerate for the required duration, which may not be the cheapest option.",
        "Tell the owner explicitly that it remains on at all times, including supervised periods.",
      ],
      commonFailurePoints: [
        "Device too short to prevent access.",
        "Removed for feeding or supervision and not replaced.",
        "Owner told to use it 'if the patient bothers the wound', which is too late.",
      ],
      roles: [{ role: "recovery-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Widely recommended and mechanistically clear. The contribution of self-trauma prevention to infection rates has not been quantified in veterinary studies.",
    },
    {
      id: "recovery-hygiene",
      title: "Recovery-area hygiene",
      summary: "Cleaned to a defined standard, on a defined schedule.",
      recommendedAction:
        "Clean recovery and ward areas to a written standard between patients, and separate surgical patients from patients with known infections.",
      implementationSteps: [
        "Write down the cleaning standard for kennels, bedding and surfaces, including products and contact times.",
        "Clean between patients rather than at the end of the day.",
        "House surgical patients away from patients with known infections or contaminated wounds.",
      ],
      commonFailurePoints: [
        "Surgical and infectious patients housed adjacently for convenience.",
        "Cleaning standard defined for theatre but not for the ward.",
      ],
      roles: [{ role: "recovery-team", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard infection control practice. Not quantified against surgical site infection outcomes.",
      references: ["aorn-environmental-cleaning", "mcdonnell-1999"],
    },
    {
      id: "hand-hygiene-wound-handling",
      title: "Hand hygiene before wound handling",
      summary:
        "The same standard as theatre, applied in a place where it usually slips.",
      recommendedAction:
        "Perform hand hygiene before and after every contact with a surgical wound or dressing, and make product available at the kennel.",
      implementationSteps: [
        "Place hand hygiene product at the point of patient contact, not only at the ward sink.",
        "Apply the requirement to every contact, including brief checks.",
        "Include the ward team in hand hygiene audit, not only theatre staff.",
      ],
      commonFailurePoints: [
        "Hand hygiene treated as a theatre practice that ends at the recovery door.",
        "Product available at the sink but not where patients are handled.",
      ],
      roles: [{ role: "recovery-team", responsibility: "primary" }],
      evidenceLevel: "stronger",
      evidenceNote:
        "Hand hygiene has the strongest evidence base of any single practice in healthcare-associated infection prevention, from human programme evaluations. Veterinary-specific surgical site infection evidence is limited.",
      references: ["who-hand-hygiene-2009", "pittet-2000"],
    },
    {
      id: "aseptic-wound-handling",
      title: "Aseptic wound handling",
      summary:
        "Dressing changes are a procedure, not a task.",
      recommendedAction:
        "Handle surgical wounds aseptically at every dressing change and examination, using sterile materials and a no-touch technique.",
      implementationSteps: [
        "Prepare everything needed before starting, so the procedure is not interrupted.",
        "Use gloves and sterile dressing materials.",
        "Use a no-touch technique; do not contact the incision directly.",
        "Record the wound's appearance at each change.",
      ],
      commonFailurePoints: [
        "Dressing changes performed between other tasks, without preparation.",
        "Non-sterile materials used because sterile ones were not to hand.",
        "Appearance noted verbally and never recorded.",
      ],
      roles: [{ role: "recovery-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard practice. Not separately quantified.",
      references: ["mangram-1999", "campbell-2012-bandages"],
    },
    {
      id: "discharge-instructions",
      title: "Discharge instructions",
      summary: "Written, specific, and given with time to ask questions.",
      recommendedAction:
        "Give written discharge instructions covering incision care, activity restriction, medication, protective device use, what to watch for and how to make contact, and go through them with the owner.",
      implementationSteps: [
        "Provide instructions in writing; verbal instructions at discharge are poorly retained.",
        "Be specific — 'lead walks only, five minutes, three times daily' rather than 'restrict activity'.",
        "Go through them with the owner rather than handing them over at the desk.",
        "Include explicit contact details and out-of-hours arrangements.",
        "Record that they were given and discussed.",
      ],
      commonFailurePoints: [
        "Verbal instructions only, delivered while the owner is paying.",
        "Generic instructions that do not reflect this patient's procedure.",
        "No out-of-hours contact route, so concerns wait until Monday.",
      ],
      roles: [{ role: "recovery-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good practice. Written instruction improving retention is supported in general patient communication literature rather than in veterinary infection studies.",
    },
    {
      id: "owner-education",
      title: "Owner education",
      summary:
        "The owner is the person who will actually see the early signs.",
      recommendedAction:
        "Show the owner what the incision looks like now and describe specifically what change would be concerning, rather than asking them to watch for infection.",
      implementationSteps: [
        "Show the owner the incision at discharge so they have a baseline.",
        "Describe specific changes: increasing swelling, discharge, increasing pain, heat, gaping.",
        "Explain what is normal in the first days, so normal healing does not prompt alarm.",
        "Check the owner's understanding by asking them to say it back.",
      ],
      commonFailurePoints: [
        "Owner asked to watch for 'signs of infection' with no description of what those are.",
        "No baseline shown, so the owner cannot judge change.",
      ],
      roles: [{ role: "recovery-team", responsibility: "primary" }, { role: "surgeon", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote: "Good practice. Not separately studied.",
    },
    {
      id: "wound-monitoring",
      title: "Wound monitoring",
      summary: "Scheduled checks against defined criteria, recorded.",
      recommendedAction:
        "Examine the incision at defined intervals against defined criteria, and record the findings each time rather than only when something is wrong.",
      implementationSteps: [
        "Set the examination schedule at discharge and communicate it to the owner.",
        "Use consistent criteria so findings can be compared between examinations.",
        "Record findings at every check, including normal ones.",
        "Feed findings into surveillance rather than treating them as individual clinical notes.",
      ],
      commonFailurePoints: [
        "Only abnormal findings recorded, so change cannot be assessed.",
        "Checks depending on whether the owner books them.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "recovery-team", responsibility: "supporting" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Active follow-up detects more infections than passive systems in veterinary surveillance studies. The effect of monitoring on outcomes, as opposed to detection, is a separate question.",
      references: ["turk-2015", "eugster-2004"],
    },
    {
      id: "remote-monitoring",
      title: "Photographic or remote monitoring where appropriate",
      summary: "Useful as a supplement; not a substitute for examination.",
      recommendedAction:
        "Where photographic or remote monitoring is used, define what it is used for and be explicit that it supplements rather than replaces physical examination.",
      implementationSteps: [
        "Tell owners how to take a useful photograph — lighting, distance, consistent angle.",
        "Define who reviews submitted images and within what time.",
        "Be explicit that photographs cannot assess heat, pain or depth.",
        "Record reviewed images in the clinical record.",
      ],
      commonFailurePoints: [
        "Images sent with no defined review route, so they are seen late or not at all.",
        "A reassuring photograph used to defer an examination that was indicated.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "recovery-team", responsibility: "supporting" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Remote wound assessment is an emerging area with limited veterinary evidence. Its limitations — no assessment of heat, pain or depth — are inherent rather than technical.",
    },
    {
      id: "concerning-signs",
      title: "Recognition of concerning signs",
      summary: "Defined criteria, known to the ward team and the owner.",
      recommendedAction:
        "Define the signs that should prompt reassessment, and make sure both the ward team and the owner know them in specific terms.",
      implementationSteps: [
        "Define the criteria in the written protocol rather than leaving them to judgement.",
        "Distinguish expected early inflammation from signs that warrant reassessment.",
        "Give the owner the same criteria in plain language.",
        "Use the standard SSI definitions when classifying what is found.",
      ],
      commonFailurePoints: [
        "Criteria that rely on clinical experience the owner does not have.",
        "Normal early inflammation misread as infection, or infection dismissed as normal.",
      ],
      roles: [{ role: "recovery-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "The clinical signs used are those in the 2026 consensus definitions. Their use as a prompt for reassessment is practical guidance rather than a studied intervention.",
      references: ["verwilghen-2026"],
    },
    {
      id: "escalation",
      title: "Escalation and reassessment",
      summary: "A defined route, including out of hours.",
      recommendedAction:
        "Define how concerns are escalated, who assesses them and within what timeframe, including outside normal hours.",
      implementationSteps: [
        "Define the escalation route and put it in the discharge instructions.",
        "Make out-of-hours arrangements explicit.",
        "Examine physically rather than advising by telephone where signs are present.",
        "Record the concern, the assessment and the outcome.",
      ],
      commonFailurePoints: [
        "Concerns managed by telephone advice and antibiotics without examination.",
        "No out-of-hours route, so problems present later and worse.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote: "Good practice. Not separately studied.",
    },
    {
      id: "postoperative-stewardship",
      title: "Postoperative antimicrobial stewardship",
      summary:
        "Treat infection; do not treat the possibility of infection.",
      recommendedAction:
        "Base any postoperative antimicrobial treatment on assessment and, where possible, culture, rather than on the presence of a surgical wound.",
      implementationSteps: [
        "Examine before prescribing rather than prescribing on a described appearance.",
        "Sample for culture before starting treatment where infection is suspected.",
        "Record the indication, intended duration and review point.",
        "Review the practice's postoperative antimicrobial use alongside its infection data.",
      ],
      commonFailurePoints: [
        "Antimicrobials started on the telephone for a described appearance.",
        "Courses started without culture and continued without review.",
        "Prophylaxis continued for days as a substitute for monitoring.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Stewardship principles are well established in veterinary guidance. Evidence connecting stewardship specifically to surgical site infection outcomes is limited; the primary rationale is preservation of antimicrobial effectiveness.",
      references: ["guardabassi-2010", "weese-2011-uti", "hillier-2014"],
    },
  ],
  checklist: [
    { id: "powc-1", label: "Dressing applied with sterile technique before drapes removed, and recorded", practiceId: "initial-dressing" },
    { id: "powc-2", label: "Protective device fitted before recovery and confirmed effective", practiceId: "self-trauma-prevention" },
    { id: "powc-3", label: "Clean dry bedding; incision not in contact with soiled surfaces", practiceId: "incision-protection" },
    { id: "powc-4", label: "Hand hygiene performed before and after every wound contact", practiceId: "hand-hygiene-wound-handling" },
    { id: "powc-5", label: "Dressing changes performed aseptically with sterile materials", practiceId: "aseptic-wound-handling" },
    { id: "powc-6", label: "Wound appearance recorded at every check, including normal ones", practiceId: "wound-monitoring" },
    { id: "powc-7", label: "Written discharge instructions given and gone through with the owner", practiceId: "discharge-instructions" },
    { id: "powc-8", label: "Owner shown the incision and told what specific change to watch for", practiceId: "owner-education" },
    { id: "powc-9", label: "Owner told the device stays on at all times", practiceId: "self-trauma-prevention" },
    { id: "powc-10", label: "Contact route given, including out of hours", practiceId: "escalation" },
    { id: "powc-11", label: "Follow-up examination scheduled before discharge", practiceId: "wound-monitoring" },
  ],
  evidenceSummary:
    "Hand hygiene is the best-supported practice in this protocol, carried over from general healthcare-associated infection evidence. Active follow-up is supported by veterinary surveillance studies showing that passive detection under-counts infections, though that is evidence about detection rather than about outcome. The rest — dressing practice, self-trauma prevention, ward hygiene, owner education — is good practice with limited direct evidence, largely because these things are difficult to study and rarely isolated. Optimal dressing type and duration for veterinary surgical wounds is genuinely unestablished. The antimicrobial stewardship element is justified primarily by preservation of antimicrobial effectiveness rather than by demonstrated effect on infection rates.",
  evidenceLevel: "moderate",
  evidenceLimitations: [
    "Optimal dressing type and duration for veterinary surgical wounds is not established.",
    "The contribution of self-trauma prevention to infection rates has not been quantified.",
    "Follow-up evidence concerns detection of infection rather than prevention of it.",
    "Remote monitoring is an emerging area with limited veterinary evidence and inherent limitations.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    { id: "powc-a1", question: "Are written discharge instructions given, and are they specific to the procedure?", lookFor: "Read a sample. Generic templates with no procedure-specific detail are the common finding." },
    { id: "powc-a2", question: "Is hand hygiene performed before wound contact in the ward?", lookFor: "Direct observation in the ward, not in theatre. Note where the product is placed." },
    { id: "powc-a3", question: "Is wound appearance recorded at every check, or only when abnormal?", lookFor: "Sample records for normal checks." },
    { id: "powc-a4", question: "How often are postoperative antimicrobials started without examination?", lookFor: "Review recent cases for prescriptions with no corresponding examination record." },
    { id: "powc-a5", question: "Do owners know what specific change should prompt contact?", lookFor: "Ask an owner at a follow-up appointment what they were told to watch for." },
    { id: "powc-a6", question: "Is there a working out-of-hours escalation route in the discharge instructions?", lookFor: "Read the instructions and confirm the route actually operates." },
  ],
  relatedProtocols: ["surgical-technique-lavage-closure", "ssi-surveillance", "antimicrobial-prophylaxis", "audit-review-improvement"],
  resources: ["laminated-checklist-set", "printable-protocol-pack"],
  references: ["who-hand-hygiene-2009", "pittet-2000", "turk-2015", "eugster-2004", "campbell-2012-bandages", "mangram-1999", "mcdonnell-1999", "aorn-environmental-cleaning", "guardabassi-2010", "weese-2011-uti", "hillier-2014", "verwilghen-2026"],
  glossaryTerms: ["surgical-site-infection", "superficial-incisional-ssi", "antimicrobial-stewardship", "surveillance-period"],
};
