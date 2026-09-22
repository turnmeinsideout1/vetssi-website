import type { Protocol } from "../types";

export const surgicalFieldIsolation: Protocol = {
  slug: "surgical-field-isolation",
  protocolNumber: 6,
  title: "Surgical Field Isolation",
  shortTitle: "Field Isolation",
  stage: "during-surgery",
  summary:
    "Establishing a sterile barrier between the operative site and everything else, keeping it intact, and dealing with it honestly when it fails.",
  whyItMatters: [
    "Antisepsis reduces the bacterial burden on the skin but does not remove it. Draping is what keeps the organisms that remain — and the surrounding environment — away from the open wound.",
    "Barriers fail quietly. A lifted drape edge, a soaked wrapper or a glove that brushed an unprepared area does not announce itself, and the consequence appears days later.",
    "This protocol depends more on team culture than on materials. The determining factor is usually whether the person who saw the breach is willing to say so.",
  ],
  standard:
    "The surgical site should be isolated by a sterile barrier that is established in a defined sequence, maintained for the duration of the procedure, and monitored by the whole team. Any breach of that barrier should be declared out loud and managed, regardless of who caused it or what stage the procedure has reached.",
  roles: [
    { role: "scrub-team", responsibility: "primary" },
    { role: "surgeon", responsibility: "oversight" },
    { role: "prep-team", responsibility: "supporting" },
    { role: "surgical-team", responsibility: "supporting" },
  ],
  reviewTimeMinutes: 11,
  reviewStatus: "draft",
  lastReviewed: null,
  practices: [
    {
      id: "limb-site-isolation",
      title: "Limb or site isolation",
      summary:
        "A limb has no natural boundary, so one has to be created before draping.",
      recommendedAction:
        "Isolate a limb or other circumferential site with a sterile barrier applied from the distal end, so that no unprepared skin remains exposed within the field.",
      implementationSteps: [
        "Cover the distal extremity — foot, digits, nails — before the limb enters the field.",
        "Have a non-sterile assistant suspend the limb so the sterile operator handles only prepared skin.",
        "Apply the isolation barrier from distal to proximal, and secure it so it cannot slide during manipulation.",
        "Check that the barrier extends beyond the proximal limit of the intended field.",
        "Confirm that no unprepared skin is visible within the draped boundary before proceeding.",
      ],
      commonFailurePoints: [
        "The foot left uncovered because the incision is at the stifle.",
        "An isolation barrier that slides distally once the limb is manipulated.",
        "The sterile operator taking the limb directly from a non-sterile handler.",
      ],
      roles: [
        { role: "scrub-team", responsibility: "primary" },
        { role: "prep-team", responsibility: "supporting" },
        { role: "surgeon", responsibility: "oversight" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. Limb isolation technique is standard in orthopaedic surgery but has not been isolated as a variable in outcome studies.",
      references: ["aorn-drapes", "denny-butterworth-2000"],
      media: [
        {
          kind: "video",
          caption: "Distal-to-proximal limb isolation and hand-off technique.",
          status: "planned",
        },
      ],
    },
    {
      id: "draping-sequence",
      title: "Draping sequence",
      summary:
        "Drape in a defined order, from the incision outwards, and never back.",
      recommendedAction:
        "Apply drapes in a defined sequence that moves from the surgical site outwards, positioning each drape once and not repositioning it towards the field.",
      implementationSteps: [
        "Agree and write down the draping sequence for each common procedure type.",
        "Place the field drapes defining the incision boundary first, then the outer drapes.",
        "Hold drapes above the level of the field and let them fall into position; do not drag them across the patient.",
        "Once a drape has touched the patient, do not move it towards the incision — only further away, or replace it.",
        "Keep gloved hands above waist level and protected by the drape as each one is placed.",
      ],
      commonFailurePoints: [
        "A misplaced drape pulled back towards the incision to correct it.",
        "Drapes dragged across unprepared skin as they are unfolded.",
        "Hands dropping below the field while handling a large drape.",
      ],
      roles: [
        { role: "scrub-team", responsibility: "primary" },
        { role: "surgeon", responsibility: "supporting" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice reflected in perioperative guidance. Draping sequence has not been studied as an independent variable in relation to infection outcomes.",
      references: ["aorn-drapes", "aorn-sterile-technique"],
      media: [
        {
          kind: "video",
          caption: "Four-drape sequence and hand position during placement.",
          status: "planned",
        },
      ],
    },
    {
      id: "sterile-boundaries",
      title: "Maintaining sterile boundaries",
      summary:
        "Everyone needs the same mental picture of where the sterile area ends.",
      recommendedAction:
        "Define the sterile boundary explicitly at the start of the procedure and treat anything outside it — including drape edges, the area below table level and the operator's back — as non-sterile.",
      implementationSteps: [
        "State the sterile boundary out loud once draping is complete, so the whole room shares one definition.",
        "Treat the drape edge itself and anything hanging below the table surface as non-sterile.",
        "Keep sterile team members facing the field, and pass back-to-back or front-to-front when moving.",
        "Keep hands above waist level and in front of the body.",
        "Treat any area of uncertain status as non-sterile rather than assuming it is clean.",
      ],
      commonFailurePoints: [
        "Different team members holding different ideas of where the boundary is.",
        "A drape edge handled as though it were sterile.",
        "Turning the back to the field while moving around the table.",
      ],
      roles: [
        { role: "surgical-team", responsibility: "primary" },
        { role: "scrub-team", responsibility: "oversight" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. The conventions are long-established and near-universal but rest on mechanistic reasoning rather than on comparative outcome data.",
      references: ["aorn-sterile-technique"],
    },
    {
      id: "adhesive-drapes",
      title: "Adhesive and incisional drapes",
      summary:
        "Optional, and evidence does not support using them to reduce infection.",
      recommendedAction:
        "Do not use plain adhesive incisional drapes as an infection-prevention measure. Where they are used for another reason, such as field organisation, apply them to fully dry skin without tension.",
      implementationSteps: [
        "State the practice's position on incisional drapes in the written protocol, including whether and when they are used.",
        "Where used, confirm the antiseptic is completely dry before application.",
        "Apply from the centre outwards without stretching the drape, and smooth out air pockets.",
        "Check adhesion around the whole intended incision line before making the incision.",
        "Do not use an incisional drape to compensate for a preparation you are unsure about.",
      ],
      commonFailurePoints: [
        "Applied to skin that is still damp, so it lifts as soon as the incision is made.",
        "Applied under tension, which causes it to peel back from the wound margin.",
        "Used as reassurance after a preparation the team is not confident in.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "scrub-team", responsibility: "supporting" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Human systematic review evidence has not found that plain adhesive incisional drapes reduce surgical site infection, and has raised the possibility that they may increase it. This is one of the clearer negative findings in the field. Iodophor-impregnated drapes are a separate product with a separate and less settled evidence base, and no recommendation is made here about them.",
      references: ["webster-2015-drapes", "aorn-drapes"],
    },
    {
      id: "drape-lift",
      title: "Recognition and management of drape lift",
      summary:
        "When a drape lifts, skin flora is back at the wound margin.",
      recommendedAction:
        "Watch for separation of drapes from the skin throughout the procedure, say so when it happens, and re-establish the barrier before continuing at that margin.",
      implementationSteps: [
        "Make drape margins a specific thing the scrub team watches, not something noticed incidentally.",
        "Check margins again after any repositioning, retractor placement or change of approach.",
        "Say it out loud when a drape lifts, rather than quietly pressing it back down.",
        "Re-establish the barrier with additional sterile drapes; do not simply re-adhere a contaminated edge.",
        "Note significant drape lift in the surgical record so it can be reviewed later.",
      ],
      commonFailurePoints: [
        "Lift noticed and pressed back without anyone being told.",
        "Margins never re-checked after the field is extended.",
        "Fluid pooling at a margin, lifting it progressively over a long procedure.",
      ],
      roles: [
        { role: "scrub-team", responsibility: "primary" },
        { role: "surgeon", responsibility: "oversight" },
        { role: "surgical-team", responsibility: "supporting" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. Drape lift re-exposing skin flora at the wound margin is mechanistically clear; the infection consequence has not been directly quantified.",
      references: ["webster-2015-drapes"],
    },
    {
      id: "avoiding-skin-contact",
      title: "Avoiding contact with exposed skin",
      summary:
        "Gloves and instruments that touch skin have touched the least-sterile surface in the field.",
      recommendedAction:
        "Avoid contact between gloves, instruments and exposed skin during the procedure, and treat any such contact as contamination requiring a response.",
      implementationSteps: [
        "Cover exposed skin at the wound margin with drapes or towels once the incision is made.",
        "Keep instruments that have contacted skin separate from those entering deeper tissue.",
        "Change gloves after unavoidable skin contact, particularly before handling deeper tissue or implants.",
        "Be specific about this at the start of implant procedures, where the consequence is greatest.",
        "Say when it happens rather than deciding privately whether it mattered.",
      ],
      commonFailurePoints: [
        "Skin contact treated as too minor to mention.",
        "The same instrument used at skin level and then in bone or joint.",
        "Gloves not changed after skin contact because the procedure is nearly finished.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "scrub-team", responsibility: "oversight" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. Skin as a reservoir of residual flora after antisepsis is well established; the effect of individual contact events is not quantified.",
      references: ["mangram-1999", "aorn-sterile-technique"],
    },
    {
      id: "contamination-prone-anatomy",
      title: "Isolation of contamination-prone anatomy",
      summary:
        "Prepuce, perineum, mouth and open wounds need separate handling.",
      recommendedAction:
        "Identify contamination-prone anatomy within or adjacent to the field before draping, and isolate or exclude it with a dedicated barrier.",
      implementationSteps: [
        "Identify prepuce, vulva, perineum, anus, mouth or existing wounds near the planned field during planning, not during draping.",
        "Isolate them with a dedicated sealed barrier rather than relying on the main drapes.",
        "Where such anatomy must be included in the field, plan the sequence so it is addressed last.",
        "Change gloves and instruments after any deliberate contact with these areas.",
        "Record the isolation method used, so it can be repeated and reviewed.",
      ],
      commonFailurePoints: [
        "Prepuce included in a ventral midline field without separate isolation.",
        "An existing wound draped over rather than isolated.",
        "Contaminated anatomy addressed first, carrying contamination into the clean part of the procedure.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "scrub-team", responsibility: "supporting" },
        { role: "prep-team", responsibility: "supporting" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice, consistent with surgical wound classification principles. Not directly studied as an isolated variable.",
      references: ["mangram-1999", "verwilghen-2026"],
    },
    {
      id: "breached-field",
      title: "Management of a breached field",
      summary:
        "There should be an agreed response, decided before it happens.",
      recommendedAction:
        "Agree in advance what the team does when the sterile field is breached, so the response does not depend on who noticed or how far the procedure has progressed.",
      implementationSteps: [
        "Write down the response for the common breaches: contaminated glove, contaminated instrument, strike-through, dropped implant, drape displacement.",
        "Make it explicit that anyone in the room may call a breach, including the most junior person present.",
        "Re-establish the barrier and replace affected items before continuing.",
        "Record what happened, what was done and at what point in the procedure.",
        "Review recorded breaches at case review rather than treating each one as an isolated incident.",
      ],
      commonFailurePoints: [
        "The response negotiated case by case, so it depends on time pressure and seniority.",
        "Junior staff who see a breach and say nothing.",
        "Breaches managed correctly but never recorded, so the pattern is invisible.",
      ],
      roles: [
        { role: "surgical-team", responsibility: "primary" },
        { role: "surgeon", responsibility: "oversight" },
        { role: "practice-leadership", responsibility: "oversight" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Expert consensus and good surgical practice, supported by general safety literature on error reporting and speaking up rather than by veterinary infection outcome data.",
      references: ["reason-2000", "gawande-2003"],
    },
    {
      id: "scalpel-blade-change",
      title: "Use or change of the initial scalpel blade",
      summary:
        "Commonly done, and the evidence does not support it.",
      recommendedAction:
        "Do not rely on changing the skin incision blade as an infection-prevention measure. Where the practice chooses to do it, record it as convention rather than as an evidence-based control.",
      implementationSteps: [
        "State the practice's position explicitly in the written protocol, either way.",
        "If the blade is changed, do so as part of the routine rather than selectively.",
        "Do not allow the blade change to substitute for glove changes or instrument separation, which address the same concern more directly.",
        "Revisit the position if better evidence becomes available.",
      ],
      commonFailurePoints: [
        "Treated as a meaningful infection control step, displacing attention from measures that matter more.",
        "Done inconsistently, so it is neither a reliable habit nor a considered decision.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "scrub-team", responsibility: "supporting" },
      ],
      evidenceLevel: "limited",
      evidenceNote:
        "Evidence does not support routine change of the skin incision blade as an infection-prevention measure in human surgery, and there is no veterinary outcome evidence for it. It remains a widespread convention. VetSSI includes it here so that practices can make a deliberate decision rather than an unexamined one, and takes no position beyond recommending that the decision be written down.",
    },
  ],
  checklist: [
    {
      id: "sfi-1",
      label: "Distal extremity isolated before the limb entered the field",
      practiceId: "limb-site-isolation",
    },
    {
      id: "sfi-2",
      label: "Drapes applied in the agreed sequence, from the site outwards",
      practiceId: "draping-sequence",
    },
    {
      id: "sfi-3",
      label: "No drape repositioned towards the incision",
      practiceId: "draping-sequence",
    },
    {
      id: "sfi-4",
      label: "Sterile boundary stated out loud once draping was complete",
      practiceId: "sterile-boundaries",
    },
    {
      id: "sfi-5",
      label: "No unprepared skin visible inside the draped boundary",
      practiceId: "limb-site-isolation",
    },
    {
      id: "sfi-6",
      label: "Contamination-prone anatomy identified and separately isolated",
      note: "Prepuce, vulva, perineum, anus, mouth, existing wounds.",
      practiceId: "contamination-prone-anatomy",
    },
    {
      id: "sfi-7",
      label: "Skin at the wound margin covered after incision",
      practiceId: "avoiding-skin-contact",
    },
    {
      id: "sfi-8",
      label: "Drape margins re-checked after repositioning or field extension",
      practiceId: "drape-lift",
    },
    {
      id: "sfi-9",
      label: "Any drape lift declared out loud and the barrier re-established",
      practiceId: "drape-lift",
    },
    {
      id: "sfi-10",
      label: "Breach response is known to everyone in the room",
      practiceId: "breached-field",
    },
    {
      id: "sfi-11",
      label: "Any breach recorded in the surgical record",
      practiceId: "breached-field",
    },
  ],
  evidenceSummary:
    "Surgical field isolation is mostly a consensus protocol, with two important exceptions where evidence points the other way. Human systematic review evidence does not support plain adhesive incisional drapes as an infection-prevention measure, and routine change of the skin incision blade is likewise unsupported. Both are common practice. The core of the protocol — draping sequence, boundary discipline, recognition of drape lift, and an agreed response to breaches — is good surgical practice grounded in mechanistic reasoning and the general safety literature on speaking up, rather than in veterinary outcome trials. VetSSI's position is that the team's willingness to declare a breach matters more than the barrier materials it uses.",
  evidenceLevel: "consensus",
  evidenceLimitations: [
    "Draping sequence and boundary conventions have not been tested as independent variables against infection outcomes.",
    "Evidence on incisional drapes comes from human surgery and concerns plain adhesive drapes; iodophor-impregnated drapes are a separate and less settled question.",
    "The infection consequence of an individual breach event is not quantified, which makes it hard to weigh a response against the cost of delay.",
    "Evidence on speaking up and error reporting is drawn from general safety literature, not from veterinary theatres.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    {
      id: "sfi-a1",
      question: "Is there a written draping sequence for the procedures this practice performs most often?",
      lookFor:
        "A document that names the sequence, not just a statement that drapes are applied.",
    },
    {
      id: "sfi-a2",
      question: "Can every member of the scrub team state where the sterile boundary is?",
      lookFor:
        "Ask separately during a procedure. Compare the answers for consistency.",
    },
    {
      id: "sfi-a3",
      question: "Are drape margins actually re-checked after repositioning or field extension?",
      lookFor:
        "Direct observation across several procedures, particularly longer ones.",
    },
    {
      id: "sfi-a4",
      question: "When a breach occurs, is it declared out loud?",
      lookFor:
        "Observe. Also note who declares it — if only senior staff ever do, the protocol is not working.",
    },
    {
      id: "sfi-a5",
      question: "Are contamination events recorded anywhere?",
      lookFor:
        "Review recent surgical records for any breach entries. An absence of entries usually means they are not being recorded rather than not occurring.",
    },
    {
      id: "sfi-a6",
      question: "Has the practice made and written down a deliberate decision about incisional drapes and blade changes?",
      lookFor:
        "A written position either way. Unexamined habit is the finding here, not the particular choice.",
    },
  ],
  relatedProtocols: [
    "patient-preparation",
    "instruments-implant-protection",
    "aseptic-or-behaviour",
    "surgical-technique-lavage-closure",
  ],
  resources: ["video-draping", "laminated-checklist-set", "observation-audit-form"],
  references: [
    "webster-2015-drapes",
    "aorn-drapes",
    "aorn-sterile-technique",
    "mangram-1999",
    "reason-2000",
    "gawande-2003",
    "denny-butterworth-2000",
    "verwilghen-2026",
  ],
  glossaryTerms: [
    "sterile-field",
    "drape-lift",
    "strike-through",
    "aseptic-technique",
    "near-miss",
  ],
};
