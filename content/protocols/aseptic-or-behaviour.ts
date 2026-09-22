import type { Protocol } from "../types";

export const asepticOrBehaviour: Protocol = {
  slug: "aseptic-or-behaviour",
  protocolNumber: 8,
  title: "Aseptic OR Behaviour",
  shortTitle: "Theatre Behaviour",
  stage: "during-surgery",
  summary:
    "How people conduct themselves in the room: how many are present, how much they move and talk, and whether anyone will say something when asepsis is broken.",
  whyItMatters: [
    "Every other protocol in the theatre depends on this one. A perfect drape, a verified sterile instrument and a correct prophylactic dose are all undone by a team that does not recognise or declare contamination.",
    "Movement, door openings and conversation all raise airborne particle counts around an open field.",
    "The determining factor is usually hierarchy. If only senior people can call a contamination event, most events will go uncalled.",
  ],
  standard:
    "The number of people in the theatre, their movement, and door openings should be kept to what the procedure requires. Anyone in the room, at any level of seniority, should be able to declare a contamination event and expect it to be acted on without discussion of who caused it.",
  roles: [
    { role: "surgical-team", responsibility: "primary" },
    { role: "surgeon", responsibility: "oversight" },
    { role: "practice-leadership", responsibility: "oversight" },
  ],
  reviewTimeMinutes: 9,
  reviewStatus: "draft",
  lastReviewed: null,
  practices: [
    {
      id: "room-occupancy",
      title: "Number of people in the room",
      summary: "Only those the procedure needs.",
      recommendedAction:
        "Limit theatre occupancy to the people the procedure requires, and agree who those are before the case begins.",
      implementationSteps: [
        "Agree the necessary attendance at the briefing.",
        "Set a policy on observers, including how many and under what conditions.",
        "Make it acceptable to ask someone who is not needed to leave.",
      ],
      commonFailurePoints: [
        "Observers accumulating during interesting cases.",
        "Staff using the theatre as a route between other rooms.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Occupancy correlates with airborne particle and bacterial counts in operating room studies. Evidence connecting occupancy directly to infection rates is limited and confounded by case complexity.",
      references: ["stocks-2010", "pryor-2010"],
    },
    {
      id: "door-openings",
      title: "Door openings and traffic",
      summary: "Count them; most practices are surprised by the number.",
      recommendedAction:
        "Keep theatre doors closed during procedures and reduce openings to the unavoidable, with anything foreseeable brought in beforehand.",
      implementationSteps: [
        "Gather everything the case is likely to need before it starts.",
        "Designate one runner, so the same person handles anything unforeseen.",
        "Count door openings during a sample of procedures and feed the number back to the team.",
      ],
      commonFailurePoints: [
        "Repeated openings for items that could have been anticipated.",
        "Doors left open for ventilation or convenience.",
        "Nobody aware of how often it happens, because nobody has counted.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "prep-team", responsibility: "supporting" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Door openings disrupt ventilation and have been associated with increased airborne contamination. The link to infection rates is not directly established.",
      references: ["pryor-2010", "stocks-2010", "memarzadeh-2000"],
    },
    {
      id: "movement",
      title: "Movement",
      summary: "Deliberate, planned, and least during the critical phases.",
      recommendedAction:
        "Minimise movement around the open field, particularly during implant placement and other contamination-sensitive phases.",
      implementationSteps: [
        "Identify the contamination-sensitive phases of the procedure at the briefing.",
        "Keep non-essential activity out of those phases.",
        "Move around the room rather than past the open field where the layout allows.",
      ],
      commonFailurePoints: [
        "Cleaning or restocking started while the field is still open.",
        "Movement peaking exactly during implant placement, when it matters most.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Movement raises airborne particle counts. The specific effect on infection has not been isolated.",
      references: ["stocks-2010"],
    },
    {
      id: "conversation",
      title: "Unnecessary conversation",
      summary:
        "Not silence — but conversation that is about the case, especially at the critical moments.",
      recommendedAction:
        "Keep conversation during critical phases relevant to the procedure, without creating a silent room in which people become reluctant to speak.",
      implementationSteps: [
        "Name the phases during which conversation should be limited to the case.",
        "Distinguish this explicitly from discouraging speaking up, which must always be welcome.",
        "Let the surgeon signal the start of a critical phase rather than relying on people to infer it.",
      ],
      commonFailurePoints: [
        "A blanket 'quiet theatre' rule that also suppresses safety concerns.",
        "Critical phases never signalled, so nobody knows when to stop talking.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Speech generates airborne particles. There is no established link between theatre conversation and surgical site infection rates, and the countervailing risk of suppressing communication is real.",
      references: ["stocks-2010"],
    },
    {
      id: "devices",
      title: "Mobile phones and personal devices",
      summary: "A written policy, applied to everyone including the surgeon.",
      recommendedAction:
        "Set a written policy for personal devices in theatre, covering where they may be, who may use them and how they are cleaned.",
      implementationSteps: [
        "Write the policy rather than relying on an informal understanding.",
        "Apply it to everyone, including senior staff — an exception at the top removes the rule.",
        "Where a device is needed for imaging or reference, define who handles it and how.",
      ],
      commonFailurePoints: [
        "A policy that in practice applies only to junior staff.",
        "Devices handled mid-procedure and then returned to patient contact without hand hygiene.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Mobile devices have been shown to carry bacteria in healthcare settings. Evidence connecting device use in theatre to surgical site infection is limited.",
      references: ["who-hand-hygiene-2009"],
    },
    {
      id: "sterile-nonsterile-boundaries",
      title: "Sterile and nonsterile boundaries",
      summary:
        "Everyone knows which side of the line they are on, and how to pass.",
      recommendedAction:
        "Maintain clear separation between sterile and non-sterile personnel, with defined rules for how each moves and how they pass one another.",
      implementationSteps: [
        "State who is sterile and who is not at the start of the procedure.",
        "Have non-sterile personnel keep a defined distance from the field.",
        "Pass back-to-back or face-to-face, never brushing past.",
        "Have non-sterile personnel approach the field only from a defined direction.",
      ],
      commonFailurePoints: [
        "Non-sterile staff reaching across the field to adjust equipment.",
        "Passing close behind a sterile operator.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "scrub-team", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard sterile technique.",
      references: ["aorn-sterile-technique"],
    },
    {
      id: "glove-contamination",
      title: "Recognition of glove contamination",
      summary:
        "Know what counts as contamination before it happens, not after.",
      recommendedAction:
        "Define what constitutes glove contamination, and treat any contact meeting that definition as requiring a change regardless of how it looks.",
      implementationSteps: [
        "Write down what counts: contact with skin, with a non-sterile surface, with contaminated tissue, or suspected perforation.",
        "Treat suspected contamination the same as confirmed contamination.",
        "Make it explicit that visible cleanliness is not the test.",
      ],
      commonFailurePoints: [
        "Contamination judged by appearance rather than by what was contacted.",
        "Individual judgement applied case by case, so the threshold moves with time pressure.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard sterile technique.",
      references: ["aorn-sterile-technique", "tanner-2006-gloves"],
    },
    {
      id: "glove-change-indications",
      title: "Indications for glove change",
      summary: "A written list, so the decision is not made under pressure.",
      recommendedAction:
        "Define the situations that require a glove change, and change gloves in all of them without case-by-case negotiation.",
      implementationSteps: [
        "List the indications: contamination, suspected perforation, before implant handling, after contaminated tissue, and at defined intervals in long procedures.",
        "Keep spare gloves immediately available so changing is never a delay.",
        "Announce the change, so the team knows the field has been interrupted.",
      ],
      commonFailurePoints: [
        "Change deferred to the end of a step, which becomes the end of the procedure.",
        "Gloves not immediately to hand, making the change a real delay.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "scrub-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Standard practice, supported by evidence that gloves accumulate contamination and perforate during procedures.",
      references: ["tanner-2006-gloves", "aorn-sterile-technique"],
    },
    {
      id: "communication-of-events",
      title: "Communication of contamination events",
      summary: "Said out loud, at the time, by whoever saw it.",
      recommendedAction:
        "Declare contamination events out loud when they occur, and respond to the event rather than to who reported it.",
      implementationSteps: [
        "Agree a short, neutral form of words, so declaring is easy and unloaded.",
        "Respond to the event; do not discuss attribution during the procedure.",
        "Thank the person who declared it, particularly when they are junior.",
        "Record the event for later review.",
      ],
      commonFailurePoints: [
        "Events declared privately to the surgeon rather than to the room.",
        "The response focusing on who caused it, which teaches everyone not to declare.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Drawn from general safety literature on error reporting and speaking up rather than from infection outcome studies. The mechanism — that people stop reporting when reporting is punished — is well described.",
      references: ["reason-2000", "gawande-2003"],
    },
    {
      id: "team-briefing",
      title: "Team briefing",
      summary: "Short, structured, before preparation.",
      recommendedAction:
        "Hold a structured briefing before each procedure covering the plan, the risks, the contamination-sensitive phases and who is present.",
      implementationSteps: [
        "Use the same short structure every time.",
        "Include everyone who will be in the room.",
        "Name the contamination-sensitive phases explicitly.",
        "Invite concerns before starting, and pause for the answer.",
      ],
      commonFailurePoints: [
        "Briefings that become a surgeon's monologue.",
        "Briefing skipped on routine cases, which are most of them.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Surgical safety checklist programmes including briefing have been associated with reduced morbidity and mortality in human surgery. These were multi-element interventions and the briefing component cannot be isolated.",
      references: ["haynes-2009", "who-safe-surgery-2009", "gillespie-2014"],
    },
    {
      id: "speaking-up",
      title: "Speaking up and shared responsibility",
      summary:
        "The practice that determines whether any of the others work.",
      recommendedAction:
        "Establish explicitly that anyone in the room may stop the procedure to raise an asepsis or safety concern, and demonstrate that this is real by how such interventions are received.",
      implementationSteps: [
        "State the expectation openly, in the briefing and in the written protocol.",
        "Have senior staff respond to interventions visibly and without defensiveness.",
        "Have senior staff acknowledge their own breaches out loud, which does more than any policy.",
        "Review at debrief whether anyone held back a concern, and why.",
      ],
      commonFailurePoints: [
        "A stated open-door culture contradicted by how the first junior intervention is received.",
        "Senior staff exempting themselves from the standards they set.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "surgeon", responsibility: "primary" }, { role: "surgical-team", responsibility: "supporting" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Supported by general patient safety literature on hierarchy and error reporting. Not studied against veterinary surgical site infection outcomes.",
      references: ["reason-2000", "gawande-2003", "pronovost-2006"],
    },
    {
      id: "debriefing",
      title: "Debriefing and near-miss discussion",
      summary: "Two minutes at the end, including what nearly went wrong.",
      recommendedAction:
        "Hold a short debrief after each procedure covering what went well, what did not, and any near misses, and record anything that should change.",
      implementationSteps: [
        "Keep it short and hold it before the team disperses.",
        "Ask specifically about near misses, which otherwise go unmentioned.",
        "Record items that need action and who will take them.",
        "Feed recurring items into case review rather than raising them repeatedly.",
      ],
      commonFailurePoints: [
        "Debrief skipped because the next case is waiting.",
        "Near misses discussed but never recorded, so the pattern is lost.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Part of checklist and safety programmes associated with improved outcomes in human surgery; the component cannot be isolated.",
      references: ["haynes-2009", "gawande-2003", "gillespie-2014"],
    },
  ],
  checklist: [
    { id: "aob-1", label: "Only the people the procedure requires are in the room", practiceId: "room-occupancy" },
    { id: "aob-2", label: "Everything foreseeable gathered before the case; one named runner", practiceId: "door-openings" },
    { id: "aob-3", label: "Doors closed throughout", practiceId: "door-openings" },
    { id: "aob-4", label: "Contamination-sensitive phases named at the briefing", practiceId: "movement" },
    { id: "aob-5", label: "Non-essential activity kept out of those phases", practiceId: "movement" },
    { id: "aob-6", label: "Sterile and non-sterile personnel identified out loud", practiceId: "sterile-nonsterile-boundaries" },
    { id: "aob-7", label: "Spare gloves immediately available at the field", practiceId: "glove-change-indications" },
    { id: "aob-8", label: "Everyone knows they may stop the procedure to raise a concern", practiceId: "speaking-up" },
    { id: "aob-9", label: "Any contamination event declared out loud and recorded", practiceId: "communication-of-events" },
    { id: "aob-10", label: "Debrief held before the team dispersed, near misses asked about", practiceId: "debriefing" },
  ],
  evidenceSummary:
    "The environmental half of this protocol — occupancy, door openings, movement, conversation — rests on studies linking these behaviours to airborne particle and bacterial counts, not to infection rates. Those links are plausible but not established, and VetSSI states that rather than implying otherwise. The behavioural half — declaring contamination, speaking up, briefing and debriefing — draws on general patient safety literature and on multi-element human surgical checklist programmes, from which individual components cannot be separated. Despite the modest evidence, this is arguably the protocol that matters most, because every other protocol in the theatre depends on someone being willing to say that it has just been broken.",
  evidenceLevel: "limited",
  evidenceLimitations: [
    "Occupancy, traffic and conversation evidence concerns airborne contamination, not infection outcomes, and is confounded by case complexity.",
    "Checklist, briefing and debriefing evidence comes from multi-element human programmes; components cannot be isolated.",
    "There is no veterinary outcome evidence for any practice in this protocol.",
    "Restricting conversation carries a real countervailing risk of suppressing safety communication.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    { id: "aob-a1", question: "How many times does the theatre door open during a procedure, and for what?", lookFor: "Count during several procedures with the reason for each. Most practices substantially underestimate this." },
    { id: "aob-a2", question: "When did a junior team member last declare a contamination event?", lookFor: "Ask the junior staff directly. If nobody can recall an instance, the stated culture is not operating." },
    { id: "aob-a3", question: "Does a debrief actually happen, and are near misses raised?", lookFor: "Observe the end of several cases." },
    { id: "aob-a4", question: "Is the device policy applied to senior staff?", lookFor: "Observe. An exception at the top is the finding." },
    { id: "aob-a5", question: "Are contamination events recorded anywhere?", lookFor: "Review recent records. No entries usually means no recording, not no events." },
    { id: "aob-a6", question: "Are contamination-sensitive phases named at the briefing?", lookFor: "Observe several briefings." },
  ],
  relatedProtocols: ["surgical-field-isolation", "surgical-team-preparation", "operating-theatre-preparation", "audit-review-improvement"],
  resources: ["poster-theatre-discipline", "observation-audit-form"],
  references: ["stocks-2010", "pryor-2010", "memarzadeh-2000", "aorn-sterile-technique", "tanner-2006-gloves", "reason-2000", "gawande-2003", "pronovost-2006", "haynes-2009", "who-safe-surgery-2009", "gillespie-2014", "who-hand-hygiene-2009"],
  glossaryTerms: ["aseptic-technique", "sterile-field", "near-miss"],
};
