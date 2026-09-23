import type { Protocol } from "../types";

export const ssiSurveillance: Protocol = {
  slug: "ssi-surveillance",
  protocolNumber: 11,
  title: "SSI Surveillance",
  shortTitle: "Surveillance",
  stage: "measure-improve",
  summary:
    "Counting surgical site infections against a reliable denominator, using standard definitions, so that the practice knows its own rate and can tell whether it is changing.",
  whyItMatters: [
    "A practice that does not measure its surgical site infection rate has no way of knowing whether any of the other eleven protocols are working. Everything else on this site is unverifiable without this one.",
    "Rates cannot be compared — between practices, or within one practice over time — unless everyone is using the same definitions and the same surveillance period. This is what the 2026 AJVR consensus exists to make possible.",
    "Most surgical site infections present after discharge. A practice that counts only the infections it happens to see will substantially underestimate its own rate.",
  ],
  standard:
    "Surgical site infections should be identified using standard definitions, counted over a defined surveillance period against a reliable denominator of procedures performed, and reported internally at a regular interval. The rate should be known to the surgical team, not only to the person who calculates it.",
  roles: [
    { role: "practice-leadership", responsibility: "primary" },
    { role: "surgeon", responsibility: "oversight" },
    { role: "recovery-team", responsibility: "supporting" },
    { role: "surgical-team", responsibility: "supporting" },
  ],
  reviewTimeMinutes: 12,
  reviewStatus: "draft",
  lastReviewed: null,
  practiceGroups: [
    {
      id: "agree",
      title: "Agree what you are counting",
      summary:
        "Rates cannot be compared unless everyone is using the same definitions.",
      practices: [
        "standard-definitions",
        "wound-classification",
        "surveillance-period",
      ],
    },
    {
      id: "capture",
      title: "Capture every case",
      summary:
        "A rate is only as good as the cases that reach the log.",
      practices: [
        "case-tracking",
        "follow-up-process",
        "infection-classification",
      ],
    },
    {
      id: "calculate",
      title: "Calculate the rates",
      summary:
        "The number underneath matters as much as the number on top.",
      practices: [
        "denominator",
        "overall-rate",
        "procedure-specific-rates",
        "implant-infections",
      ],
    },
    {
      id: "act",
      title: "Act on what you find",
      summary:
        "Surveillance that nobody sees does not change anything.",
      practices: [
        "culture-susceptibility",
        "internal-reporting",
        "definitions-module",
      ],
    },
  ],
  practices: [
    {
      id: "standard-definitions",
      title: "Standard SSI definitions",
      summary:
        "Use the consensus definitions rather than local ones, so the numbers mean something.",
      recommendedAction:
        "Adopt the standardised veterinary SSI definitions and classify every case against them, rather than using an informal local description of what counts as an infection.",
      implementationSteps: [
        "Adopt the consensus definitions for surgical site infection and its superficial incisional, deep incisional, organ/bone/space and implant-associated subdivisions.",
        "Make the definitions physically available to whoever classifies cases.",
        "Classify by the deepest tissue layer involved, and record which definition was applied.",
        "Have a second person classify a sample of cases and compare, to check the definitions are being applied consistently.",
        "Record the rationale for cases that were difficult to classify, rather than only the conclusion.",
      ],
      commonFailurePoints: [
        "Local shorthand such as 'a bit of discharge' standing in for a definition.",
        "Classification by who reported it rather than by tissue layer involved.",
        "Difficult cases decided informally and not recorded, so the same question is re-argued each time.",
      ],
      roles: [
        { role: "practice-leadership", responsibility: "primary" },
        { role: "surgeon", responsibility: "supporting" },
      ],
      evidenceLevel: "stronger",
      evidenceNote:
        "The definitions themselves are the product of a published international Delphi consensus of 32 expert specialists, which is the strongest form of agreement currently available in this area. Note that this rates the standing of the definitions, not evidence that using them reduces infection rates.",
      references: ["verwilghen-2026", "horan-1992"],
    },
    {
      id: "wound-classification",
      title: "Surgical wound classification",
      summary:
        "Record the wound class for every procedure, at the time, not afterwards.",
      recommendedAction:
        "Assign and record a surgical wound classification for every procedure at the time of surgery, so that infection rates can be interpreted against the contamination risk of the case mix.",
      implementationSteps: [
        "Add wound classification as a required field in the surgical record.",
        "Assign the class at the end of the procedure, based on what actually happened rather than what was planned.",
        "Make clear who assigns it — usually the surgeon — so it is not left to whoever completes the record.",
        "Use the classification when reporting rates, so that a rise in contaminated cases is not read as a fall in standards.",
        "Review a sample of assigned classes periodically for consistency.",
      ],
      commonFailurePoints: [
        "Class assigned from the booked procedure rather than from the event.",
        "Field completed retrospectively by someone who was not present.",
        "Rates reported without reference to case mix, making them uninterpretable.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "practice-leadership", responsibility: "oversight" },
      ],
      evidenceLevel: "stronger",
      evidenceNote:
        "Surgical wound classification is a long-established component of surveillance in human healthcare and is defined for veterinary use in the 2026 consensus. Its association with infection risk is one of the better-established relationships in this field.",
      references: ["verwilghen-2026", "mangram-1999", "horan-1992"],
    },
    {
      id: "surveillance-period",
      title: "Surveillance period",
      summary:
        "Decide the window, apply it to every case, and state it whenever you quote a rate.",
      recommendedAction:
        "Define the surveillance period the practice uses, apply it consistently, and state it alongside any rate that is reported or compared.",
      implementationSteps: [
        "Adopt the surveillance periods set out in the consensus definitions, including the longer period that applies where an implant is present.",
        "Apply the same period to every case rather than following some cases longer than others.",
        "State the surveillance period every time a rate is quoted, internally or externally.",
        "Where a case is lost to follow-up before the period ends, record it as such rather than as no infection.",
        "Do not compare the practice's rate with a published rate calculated over a different period.",
      ],
      commonFailurePoints: [
        "Complicated cases followed for longer than uncomplicated ones, which biases the rate downwards.",
        "A rate quoted with no period attached, which makes it meaningless.",
        "Loss to follow-up counted as absence of infection.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }],
      evidenceLevel: "stronger",
      evidenceNote:
        "Surveillance periods are defined in the 2026 consensus and in established human surveillance systems. The specific periods are a matter of definition rather than of outcome evidence.",
      references: ["verwilghen-2026", "horan-1992"],
    },
    {
      id: "case-tracking",
      title: "Case and procedure tracking",
      summary:
        "Every procedure needs to enter the count, not only the ones that go wrong.",
      recommendedAction:
        "Record every surgical procedure in a single log at the time it is performed, capturing the fields that surveillance will later need.",
      implementationSteps: [
        "Keep one log of all procedures rather than assembling the list retrospectively from appointment or billing records.",
        "Capture at minimum: date, patient, procedure, surgeon, wound classification, implant used, and whether prophylaxis was given.",
        "Enter the case at the time of surgery, as part of closing the record.",
        "Include cases performed out of hours and by locum or visiting surgeons.",
        "Check periodically that the log's case count matches the practice's actual surgical volume.",
      ],
      commonFailurePoints: [
        "Emergency and out-of-hours procedures missing from the log.",
        "The log reconstructed at the end of the quarter from memory and invoices.",
        "Fields present but frequently left blank, so they cannot be used in analysis.",
      ],
      roles: [
        { role: "practice-leadership", responsibility: "primary" },
        { role: "surgeon", responsibility: "supporting" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good practice. Complete case capture is a precondition for a valid denominator rather than an intervention with its own evidence base.",
    },
    {
      id: "follow-up-process",
      title: "Follow-up process",
      summary:
        "Most infections appear after the patient has gone home.",
      recommendedAction:
        "Establish an active follow-up process that contacts owners at defined points within the surveillance period, rather than relying on owners to contact the practice.",
      implementationSteps: [
        "Define the follow-up contact points within the surveillance period and who makes the contact.",
        "Contact every case at those points, not only the ones that seemed likely to have a problem.",
        "Ask specific questions about the incision rather than asking whether everything is fine.",
        "Record the outcome of each contact, including cases where the owner could not be reached.",
        "Capture infections diagnosed elsewhere — by a referring practice or an out-of-hours provider — which are otherwise invisible.",
      ],
      commonFailurePoints: [
        "Passive follow-up, which detects only the infections severe enough to prompt a call.",
        "Open questions that invite a reassuring answer.",
        "Cases treated at another practice never counted.",
      ],
      roles: [
        { role: "recovery-team", responsibility: "primary" },
        { role: "practice-leadership", responsibility: "oversight" },
        { role: "surgeon", responsibility: "supporting" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Veterinary surveillance studies using active follow-up have reported higher infection rates than passive detection, which supports the conclusion that passive systems under-detect. The size of that gap varies between studies and settings.",
      references: ["turk-2015", "eugster-2004", "nelson-2011"],
    },
    {
      id: "infection-classification",
      title: "Infection classification",
      summary:
        "Classify each detected infection by depth and record what it was based on.",
      recommendedAction:
        "Classify every detected infection against the standard definitions by the deepest tissue layer involved, and record the findings the classification was based on.",
      implementationSteps: [
        "Classify as superficial incisional, deep incisional, organ/bone/space or implant-associated.",
        "Record the specific clinical findings that met the definition, not only the conclusion.",
        "Where an infection progresses, record the deepest layer eventually involved.",
        "Note where classification was uncertain and why.",
        "Review classifications at case review rather than treating them as settled once entered.",
      ],
      commonFailurePoints: [
        "Depth assigned by severity impression rather than by the definition's criteria.",
        "Only the conclusion recorded, so the classification cannot be checked later.",
        "An infection that deepened over time still recorded at its initial classification.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "practice-leadership", responsibility: "oversight" },
      ],
      evidenceLevel: "stronger",
      evidenceNote:
        "The classification scheme is defined by the 2026 consensus. As above, this reflects the standing of the definitions rather than evidence that classification changes outcomes.",
      references: ["verwilghen-2026"],
    },
    {
      id: "denominator",
      title: "Case-volume denominator",
      summary:
        "The number underneath the rate matters as much as the number on top.",
      recommendedAction:
        "Calculate rates against the total number of procedures performed in the same period and under the same inclusion rules as the numerator.",
      implementationSteps: [
        "Use the procedure log as the denominator source, and state what it includes and excludes.",
        "Apply the same inclusion rules to numerator and denominator — if a case type is excluded from one, exclude it from the other.",
        "Report the denominator alongside the rate; a rate from twelve procedures is not a rate.",
        "Do not switch denominator definitions between reporting periods without saying so.",
      ],
      commonFailurePoints: [
        "Numerator drawn from clinical records and denominator from billing, with different inclusion rules.",
        "Rates quoted as percentages without the underlying counts.",
        "Denominator definition changed quietly between periods, creating an apparent trend.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Basic surveillance methodology. Not an intervention with its own outcome evidence.",
    },
    {
      id: "overall-rate",
      title: "Overall SSI rate",
      summary:
        "One number for the whole practice, tracked over time rather than judged in isolation.",
      recommendedAction:
        "Calculate an overall surgical site infection rate at a regular interval and track it over time, treating the trend as more informative than any single period's figure.",
      implementationSteps: [
        "Choose a reporting interval the practice can sustain — quarterly is usually workable.",
        "Calculate the rate the same way each time.",
        "Plot it over time rather than presenting it as a standalone figure.",
        "Expect the rate to rise when surveillance first improves, and say so in advance so the rise is not misread.",
        "Interpret change against case volume; small denominators produce large swings that mean little.",
      ],
      commonFailurePoints: [
        "Reading a single quarter's movement as a real change.",
        "An improvement in detection interpreted as a deterioration in care, which discourages surveillance.",
        "Rate calculated but never shown to the surgical team.",
      ],
      roles: [
        { role: "practice-leadership", responsibility: "primary" },
        { role: "surgeon", responsibility: "supporting" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Published veterinary SSI rates vary widely with study design, surveillance intensity and case mix, which limits their use as benchmarks. A practice's own rate tracked consistently over time is more informative than comparison against a published figure.",
      references: ["turk-2015", "eugster-2004", "nelson-2011", "weese-2008"],
    },
    {
      id: "procedure-specific-rates",
      title: "Procedure-specific SSI rates",
      summary:
        "An overall rate hides where the problem actually is.",
      recommendedAction:
        "Break the rate down by procedure type where case volume allows, so that a problem confined to one procedure is not diluted by the rest of the caseload.",
      implementationSteps: [
        "Group procedures into categories with enough volume to be meaningful.",
        "Report rates by category alongside the overall rate.",
        "Compare categories against their own history rather than against each other.",
        "Where a category has too few cases to produce a rate, report the counts instead of a percentage.",
      ],
      commonFailurePoints: [
        "Categories so granular that every rate is based on a handful of cases.",
        "Clean and contaminated procedures compared directly as though the difference were a quality signal.",
        "Breakdown calculated once and never repeated.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Standard surveillance methodology. The stratification itself is not an intervention with outcome evidence.",
      references: ["mangram-1999"],
    },
    {
      id: "implant-infections",
      title: "Implant-associated infections",
      summary:
        "Track these separately; they behave differently and matter more.",
      recommendedAction:
        "Record implant-associated infections separately, follow implant cases for the longer surveillance period, and record implant details so that a pattern involving a particular implant or batch can be seen.",
      implementationSteps: [
        "Flag every procedure involving an implant in the procedure log.",
        "Apply the longer surveillance period that implant cases require.",
        "Record implant type, manufacturer and batch where available.",
        "Record whether infection led to implant removal or revision, and when.",
        "Review implant infections individually rather than only as part of the aggregate rate.",
      ],
      commonFailurePoints: [
        "Implant cases followed for the same period as non-implant cases, missing late presentations.",
        "Implant details not recorded, so a batch problem cannot be identified.",
        "Late implant infections attributed to the interval rather than counted.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "practice-leadership", responsibility: "oversight" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Implant-associated infection is separately defined in the 2026 consensus, and veterinary orthopaedic studies report implant removal following infection. The longer surveillance period for implant cases reflects definitional convention and clinical experience of late presentation.",
      references: ["verwilghen-2026", "gallagher-2012", "weese-2008"],
    },
    {
      id: "culture-susceptibility",
      title: "Culture and susceptibility information",
      summary:
        "Culture results are surveillance data, not just treatment decisions.",
      recommendedAction:
        "Record culture and susceptibility results from infected surgical sites and review them collectively, so that the practice's own resistance pattern informs its prophylaxis protocol.",
      implementationSteps: [
        "Obtain samples for culture before starting antimicrobial treatment wherever practical.",
        "Record organism and susceptibility results in the surveillance log, not only in the clinical record.",
        "Review the collected results at least annually.",
        "Feed what the review shows back into the antimicrobial prophylaxis protocol.",
        "Flag resistant isolates for discussion at case review when they appear.",
      ],
      commonFailurePoints: [
        "Cultures taken after treatment has started, producing uninformative results.",
        "Results used for the individual case and never aggregated.",
        "Prophylaxis protocol never revisited despite a changing resistance pattern.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "practice-leadership", responsibility: "oversight" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Using local susceptibility data to guide antimicrobial selection is a core stewardship principle supported by veterinary antimicrobial use guidance. Its specific effect on surgical site infection rates has not been isolated.",
      references: ["guardabassi-2010", "weese-2011-uti", "hillier-2014"],
    },
    {
      id: "internal-reporting",
      title: "Internal reporting",
      summary:
        "Surveillance that nobody sees does not change anything.",
      recommendedAction:
        "Report surveillance results to the whole surgical team at a regular interval, in a form that supports discussion rather than attribution of blame.",
      implementationSteps: [
        "Set a fixed reporting interval and keep to it.",
        "Report to the whole team, including nursing, prep and recovery staff, not only to surgeons.",
        "Present rates at practice level rather than by individual surgeon, unless the practice has explicitly agreed otherwise.",
        "Pair each report with one specific thing the team is going to look at next.",
        "Record what was reported and what was decided, so the next report can pick it up.",
      ],
      commonFailurePoints: [
        "Results circulated by email and never discussed.",
        "Individual-level reporting that makes people stop reporting infections.",
        "Reports that describe the rate but propose nothing.",
      ],
      roles: [
        { role: "practice-leadership", responsibility: "primary" },
        { role: "surgical-team", responsibility: "supporting" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Feedback of infection data to clinical teams is a component of multi-element improvement programmes that have reduced infection rates in human healthcare. The contribution of the feedback component alone cannot be separated from the rest of those programmes.",
      references: ["pronovost-2006", "gillespie-2014"],
    },
    {
      id: "definitions-module",
      title: "Using the VetSSI SSI Definitions Framework",
      summary:
        "The definitions, wound classification tool and surveillance framework in full.",
      recommendedAction:
        "Use the VetSSI SSI Definitions Framework as the practice's reference for classification, and make it available to whoever performs surveillance.",
      implementationSteps: [
        "Work through the core definitions, which cover the five tissue-layer definitions with clinical interpretation and common misclassification scenarios.",
        "Use the wound classification section, which includes an interactive classifier, when a case is difficult to classify.",
        "Use the surveillance section for the timeline, surveillance terms and the surveillance effect.",
        "Bookmark it wherever classification is actually done.",
      ],
      commonFailurePoints: [
        "Definitions consulted once during setup and then worked from memory.",
        "The framework known to the person who set up surveillance but not to whoever took it over.",
      ],
      roles: [
        { role: "practice-leadership", responsibility: "primary" },
        { role: "surgeon", responsibility: "supporting" },
      ],
      evidenceLevel: "stronger",
      evidenceNote:
        "The framework's consensus content is drawn from the 2026 AJVR expert consensus and attributed to it throughout. VetSSI's clinical interpretation, gray zones and misclassification scenarios are editorial and are labelled as such within the module.",
      references: ["verwilghen-2026"],
    },
  ],
  checklist: [
    {
      id: "surv-1",
      label: "Standard consensus definitions are adopted and available to whoever classifies cases",
      practiceId: "standard-definitions",
    },
    {
      id: "surv-2",
      label: "Wound classification recorded for every procedure, at the time",
      practiceId: "wound-classification",
    },
    {
      id: "surv-3",
      label: "Surveillance period defined, written down and applied to every case",
      practiceId: "surveillance-period",
    },
    {
      id: "surv-4",
      label: "Longer surveillance period applied to implant cases",
      practiceId: "implant-infections",
    },
    {
      id: "surv-5",
      label: "Every procedure entered in one log at the time of surgery",
      practiceId: "case-tracking",
    },
    {
      id: "surv-6",
      label: "Active follow-up contact made for every case, not only concerning ones",
      practiceId: "follow-up-process",
    },
    {
      id: "surv-7",
      label: "Infections classified by deepest tissue layer, with findings recorded",
      practiceId: "infection-classification",
    },
    {
      id: "surv-8",
      label: "Numerator and denominator use the same inclusion rules",
      practiceId: "denominator",
    },
    {
      id: "surv-9",
      label: "Rate reported with its denominator and surveillance period attached",
      practiceId: "overall-rate",
    },
    {
      id: "surv-10",
      label: "Culture and susceptibility results recorded in the surveillance log",
      practiceId: "culture-susceptibility",
    },
    {
      id: "surv-11",
      label: "Results reported to the whole surgical team at a fixed interval",
      practiceId: "internal-reporting",
    },
    {
      id: "surv-12",
      label: "Each report names one thing the team will look at next",
      practiceId: "internal-reporting",
    },
  ],
  evidenceSummary:
    "This protocol rests on firmer ground than most of the site, but in a particular way. The definitions, wound classification and surveillance periods come from a published international Delphi consensus of 32 expert specialists — the strongest available agreement in veterinary SSI terminology. That is evidence about the standing of the definitions, not evidence that surveillance itself reduces infection. The case for surveillance is that it is a precondition for knowing whether anything else works, together with evidence from human healthcare that multi-element programmes including data feedback have reduced infection rates. Published veterinary SSI rates vary widely with surveillance intensity and case mix, which is itself the reason to measure locally rather than to benchmark against them.",
  evidenceLevel: "stronger",
  evidenceLimitations: [
    "Consensus definitions establish shared terminology; they are not evidence that any particular prevention practice works.",
    "Published veterinary SSI rates vary too widely with study design and surveillance intensity to serve as benchmarks.",
    "Evidence that data feedback changes behaviour comes from multi-element human healthcare programmes, from which the feedback component cannot be isolated.",
    "Small practices may not have the case volume to produce a stable rate, and procedure-specific rates may not be calculable at all.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    {
      id: "surv-a1",
      question: "Does the practice know its own SSI rate, and over what surveillance period?",
      lookFor:
        "Ask for the current figure and the period. If either is not immediately available, surveillance is not operating.",
    },
    {
      id: "surv-a2",
      question: "Is wound classification recorded for every procedure?",
      lookFor:
        "Sample recent surgical records and count how many have the field completed.",
    },
    {
      id: "surv-a3",
      question: "Is follow-up active, or does it wait for the owner to call?",
      lookFor:
        "Look for recorded contact attempts at defined points, including for cases with no problem.",
    },
    {
      id: "surv-a4",
      question: "Do the numerator and denominator come from sources with the same inclusion rules?",
      lookFor:
        "Trace one reporting period's figures back to their sources and compare what each includes.",
    },
    {
      id: "surv-a5",
      question: "Does the surgical team see the results?",
      lookFor:
        "Ask two members of nursing or prep staff what the practice's rate is. If only leadership knows, reporting is not reaching the people who affect it.",
    },
    {
      id: "surv-a6",
      question: "Has anything changed as a result of surveillance in the last twelve months?",
      lookFor:
        "A specific recorded decision traceable to a surveillance finding. This is the question that distinguishes surveillance from data collection.",
    },
  ],
  relatedProtocols: [
    "audit-review-improvement",
    "postoperative-wound-care",
    "antimicrobial-prophylaxis",
    "instruments-implant-protection",
  ],
  resources: [
    "ssi-definitions-framework",
    "ssi-surveillance-log",
    "ajvr-consensus",
    "observation-audit-form",
  ],
  references: [
    "verwilghen-2026",
    "horan-1992",
    "mangram-1999",
    "turk-2015",
    "eugster-2004",
    "nelson-2011",
    "weese-2008",
    "gallagher-2012",
    "guardabassi-2010",
    "weese-2011-uti",
    "hillier-2014",
    "pronovost-2006",
    "gillespie-2014",
  ],
  glossaryTerms: [
    "surgical-site-infection",
    "superficial-incisional-ssi",
    "deep-incisional-ssi",
    "organ-space-ssi",
    "implant-associated-infection",
    "surgical-wound-classification",
    "surveillance-period",
    "denominator",
    "surveillance-effect",
  ],
};
