import type { Protocol } from "../types";

export const surgicalTeamPreparation: Protocol = {
  slug: "surgical-team-preparation",
  protocolNumber: 4,
  title: "Surgical Team Preparation",
  shortTitle: "Team Preparation",
  stage: "before-surgery",
  summary:
    "How the people who will be closest to the open wound prepare themselves, and the standards that make that preparation reliable rather than individual.",
  whyItMatters: [
    "Personnel shed bacteria continuously from skin and respiratory tract, and hands are the most direct route from a person to a wound.",
    "Hand preparation reduces resident and transient flora; it does not sterilise hands, and gloves can and do fail during procedures.",
    "This is one of the few protocols where an individual's personal habits directly determine a patient outcome, which makes written standards and competency assessment more important than exhortation.",
  ],
  standard:
    "Everyone entering the operating theatre should meet a documented standard for hand hygiene, attire and hair covering, and everyone who will be sterile should perform surgical hand preparation, gowning and gloving by a documented technique in which they have been assessed as competent.",
  roles: [
    { role: "surgical-team", responsibility: "primary" },
    { role: "scrub-team", responsibility: "supporting" },
    { role: "practice-leadership", responsibility: "oversight" },
  ],
  reviewTimeMinutes: 9,
  reviewStatus: "draft",
  lastReviewed: null,
  practices: [
    {
      id: "routine-hand-hygiene",
      title: "Routine hand hygiene",
      summary:
        "The baseline that applies to everyone in the building, not only to the sterile team.",
      recommendedAction:
        "Perform hand hygiene at defined moments throughout perioperative care, and make the product and technique available at the point of care.",
      implementationSteps: [
        "Define the moments at which hand hygiene is required and display them where care happens.",
        "Place product where it is actually used, not only at sinks.",
        "Include non-sterile staff — anaesthesia, prep, recovery, reception — in the standard.",
      ],
      commonFailurePoints: [
        "Hand hygiene treated as the scrub team's concern only.",
        "Product placed where it is convenient to stock rather than where care happens.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }],
      evidenceLevel: "stronger",
      evidenceNote:
        "Hand hygiene is among the best-supported interventions in healthcare-associated infection prevention, with large human programme evaluations showing reduced infection alongside improved compliance. Evidence specific to veterinary surgical site infection is limited, but the mechanism and the general finding transfer straightforwardly.",
      references: ["who-hand-hygiene-2009", "pittet-2000"],
    },
    {
      id: "surgical-hand-preparation",
      title: "Surgical hand preparation",
      summary:
        "One documented technique and one product, used the same way by everyone.",
      recommendedAction:
        "Perform surgical hand preparation using a single documented technique and product, observing the duration that product requires.",
      implementationSteps: [
        "Choose one method and product and write it into the protocol, including duration.",
        "Display the technique and duration at the scrub sink.",
        "Use a timer rather than estimating duration.",
        "Ensure hands are fully dry before gowning where an alcohol-based rub is used.",
      ],
      commonFailurePoints: [
        "Duration shortened when theatre is waiting.",
        "Different individuals using different techniques learned elsewhere.",
        "Gowning with hands still wet.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Surgical hand preparation is universally recommended, and alcohol-based rubs and aqueous scrubs have both been found acceptable in human guidance. Comparative outcome evidence between techniques is limited, and evidence in veterinary surgery is limited.",
      references: ["who-hand-hygiene-2009", "aorn-sterile-technique"],
      media: [{ kind: "video", caption: "Surgical hand preparation technique and timing.", status: "planned" }],
    },
    {
      id: "nails-jewellery",
      title: "Fingernails and jewellery",
      summary: "Short, clean, bare below the wrist.",
      recommendedAction:
        "Keep fingernails short and free of artificial nails or polish, and remove rings, watches and wrist jewellery before hand preparation.",
      implementationSteps: [
        "State the standard explicitly in the written protocol rather than assuming it is understood.",
        "Provide somewhere secure to leave jewellery, so removal is practical.",
        "Include the standard in induction for new staff and locums.",
      ],
      commonFailurePoints: [
        "A single ring retained as an exception, which then becomes the norm.",
        "The standard applied to permanent staff but not to visitors or locums.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Human studies have found higher bacterial counts associated with rings, artificial nails and long nails. Evidence directly linking these to surgical site infection is weaker than evidence for the bacterial burden itself.",
      references: ["who-hand-hygiene-2009", "aorn-attire"],
    },
    {
      id: "or-attire",
      title: "Operating-room attire",
      summary:
        "Dedicated theatre clothing that does not travel through the rest of the building.",
      recommendedAction:
        "Wear dedicated theatre attire that is changed into on entering the surgical area and not worn outside it.",
      implementationSteps: [
        "Provide enough sets that changing is practical for the actual list volume.",
        "Define where attire is changed and where it must not be worn.",
        "Define what happens when attire becomes visibly soiled during a list.",
      ],
      commonFailurePoints: [
        "Theatre attire worn to consult, to the car park and back.",
        "Insufficient stock, so changing becomes impractical and the standard lapses.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Attire standards are near-universal in perioperative guidance, but evidence linking specific attire practices to surgical site infection rates is limited and, in human surgery, has been actively debated. This practice rests largely on convention and precaution.",
      references: ["aorn-attire"],
    },
    {
      id: "hair-covering",
      title: "Hair covering",
      summary: "Cover hair fully, including facial hair where relevant.",
      recommendedAction:
        "Cover all scalp hair before entering the theatre, and cover facial hair where the covering used is designed to do so.",
      implementationSteps: [
        "Provide coverings that fully contain the hair of everyone on the team.",
        "Apply the standard to everyone entering the room, including observers.",
        "Put coverings on before entering rather than at the door.",
      ],
      commonFailurePoints: [
        "Hair partially covered, with the fringe or nape left out.",
        "Observers and visiting staff exempted informally.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Hair covering is standard perioperative practice, but comparative evidence on covering type and on the effect on infection rates is limited and contested in the human literature.",
      references: ["aorn-attire"],
    },
    {
      id: "masks",
      title: "Masks",
      summary: "Worn correctly, and changed rather than reused.",
      recommendedAction:
        "Wear a mask covering nose and mouth for procedures, put it on before entering the sterile area, and change it between procedures rather than lowering and reusing it.",
      implementationSteps: [
        "Fit the mask over nose and mouth and shape it to the face before entering.",
        "Change masks between procedures and when they become damp.",
        "Do not lower a mask to the neck and raise it again.",
      ],
      commonFailurePoints: [
        "Mask worn below the nose.",
        "The same mask lowered between cases and reused.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Masks are standard in surgical practice, but human evidence on their effect on surgical site infection rates specifically is limited and has been debated. They are retained here as conventional practice and for personnel protection.",
      references: ["aorn-attire"],
    },
    {
      id: "gowning",
      title: "Gowning",
      summary:
        "Sterile gown handled only by its inner surface, with assistance for the back.",
      recommendedAction:
        "Don a sterile gown by touching only its inner surface, with a non-sterile assistant securing it behind, and treat the back of the gown as non-sterile thereafter.",
      implementationSteps: [
        "Open the gown pack on a surface that will not be needed for anything else.",
        "Handle the gown by its inner surface only.",
        "Have an assistant secure the neck and back without contacting the front.",
        "Treat the back, and anything below waist level, as non-sterile from that point on.",
      ],
      commonFailurePoints: [
        "Gown touched on its outer surface while donning.",
        "The back of the gown treated as sterile once tied.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }, { role: "surgical-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice, universal in perioperative guidance. Not studied as an independent variable.",
      references: ["aorn-sterile-technique"],
      media: [{ kind: "video", caption: "Gowning and closed gloving sequence.", status: "planned" }],
    },
    {
      id: "gloving",
      title: "Closed gloving or appropriate gloving technique",
      summary: "One documented technique, performed without skin contact.",
      recommendedAction:
        "Use a documented gloving technique — closed gloving where the gown allows it — performed so that bare skin does not contact the outer glove surface.",
      implementationSteps: [
        "Write down the technique the practice uses and teach it consistently.",
        "Keep hands within the gown cuffs until the gloves are in place, where closed gloving is used.",
        "Have a second person assist where a sterile operator is gloving another.",
      ],
      commonFailurePoints: [
        "Bare fingers contacting the outer glove surface during donning.",
        "Technique varying between individuals with no documented standard.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. Gloving technique is standard in perioperative guidance but not isolated in outcome studies.",
      references: ["aorn-sterile-technique"],
    },
    {
      id: "glove-integrity",
      title: "Glove integrity",
      summary:
        "Gloves perforate during procedures more often than people notice.",
      recommendedAction:
        "Consider double gloving for procedures where perforation risk is higher, check gloves during long procedures, and change them immediately on any suspected breach.",
      implementationSteps: [
        "Define when double gloving is used in this practice, particularly for orthopaedic and prolonged procedures.",
        "Check gloves at defined points during long procedures rather than only when something is felt.",
        "Change immediately on any suspected perforation, and say so.",
      ],
      commonFailurePoints: [
        "Perforation noticed at the end of the case rather than during it.",
        "A suspected breach not declared because the procedure is nearly finished.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }, { role: "scrub-team", responsibility: "oversight" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Human systematic review evidence supports double gloving for reducing perforations of the innermost glove. Whether that translates into reduced surgical site infection is less well established.",
      references: ["tanner-2006-gloves"],
    },
    {
      id: "pre-field-behaviour",
      title: "Behaviour before entering the sterile field",
      summary:
        "The gap between scrubbing and reaching the table is where preparation is most often lost.",
      recommendedAction:
        "Move directly from hand preparation to gowning and to the field, without touching doors, equipment or personal items in between.",
      implementationSteps: [
        "Arrange the route so that no door needs to be opened after hand preparation.",
        "Have a non-sterile assistant available to open, fetch and adjust.",
        "Keep hands above waist level and in front of the body throughout.",
      ],
      commonFailurePoints: [
        "A door pushed open with a shoulder, forearm or hand after scrubbing.",
        "Adjusting a mask, cap or glasses with prepared hands.",
      ],
      roles: [{ role: "surgical-team", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote: "Good surgical practice. Not separately studied.",
      references: ["aorn-sterile-technique"],
    },
    {
      id: "training-competency",
      title: "Training and competency",
      summary:
        "Assessed competency, not just an assumption that everyone was taught somewhere.",
      recommendedAction:
        "Assess every team member's competency in hand preparation, gowning and gloving on joining and at a defined interval thereafter, and record the assessment.",
      implementationSteps: [
        "Assess competency by observation against the written technique, not by asking.",
        "Include locums, visiting surgeons and students.",
        "Record the assessment and the date, and set a reassessment interval.",
        "Re-teach rather than only re-assess where the technique has drifted.",
      ],
      commonFailurePoints: [
        "Competency assumed for experienced staff, who are often where drift is greatest.",
        "Assessment done at induction and never repeated.",
        "Locums and visitors never assessed at all.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "surgical-team", responsibility: "supporting" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Training and competency assessment are components of multi-element improvement programmes associated with reduced infection in human healthcare. The contribution of the training component alone cannot be isolated.",
      references: ["gillespie-2014", "pittet-2000"],
    },
  ],
  checklist: [
    { id: "stp-1", label: "Nails short, no artificial nails or polish, bare below the wrist", practiceId: "nails-jewellery" },
    { id: "stp-2", label: "Dedicated theatre attire changed into on entering the surgical area", practiceId: "or-attire" },
    { id: "stp-3", label: "All scalp hair covered before entering", practiceId: "hair-covering" },
    { id: "stp-4", label: "Mask covering nose and mouth, fresh for this procedure", practiceId: "masks" },
    { id: "stp-5", label: "Surgical hand preparation performed for the full required duration", practiceId: "surgical-hand-preparation" },
    { id: "stp-6", label: "Nothing touched between hand preparation and gowning", practiceId: "pre-field-behaviour" },
    { id: "stp-7", label: "Gown handled by its inner surface only, secured by an assistant", practiceId: "gowning" },
    { id: "stp-8", label: "Gloves donned without bare skin contacting the outer surface", practiceId: "gloving" },
    { id: "stp-9", label: "Double gloving used where this procedure calls for it", practiceId: "glove-integrity" },
    { id: "stp-10", label: "Everyone in the room meets the same standard, including observers", practiceId: "hair-covering" },
  ],
  evidenceSummary:
    "This protocol contains the site's best-supported practice and some of its least-supported. Hand hygiene has strong evidence behind it from human healthcare programme evaluations. Double gloving has systematic review support for reducing glove perforation, though not clearly for reducing infection. Attire, hair covering and mask practices are near-universal convention with limited and, in human surgery, actively debated evidence for their effect on infection rates; VetSSI retains them as precautionary and conventional practice and says so rather than implying they are established. Gowning and gloving technique is good surgical practice that has not been studied as an independent variable.",
  evidenceLevel: "moderate",
  evidenceLimitations: [
    "Evidence for attire, hair covering and mask practices affecting infection rates is limited and contested in the human literature.",
    "Double gloving evidence concerns glove perforation rather than infection outcomes.",
    "Comparative evidence between hand preparation techniques and products is limited.",
    "Almost all of the evidence here is from human surgery.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    { id: "stp-a1", question: "Is there a written standard for hand preparation naming the product and its duration?", lookFor: "A dated document, and the same information displayed at the scrub sink." },
    { id: "stp-a2", question: "Is the full duration actually observed?", lookFor: "Time several preparations with a watch, including when the list is running late." },
    { id: "stp-a3", question: "Does anyone touch a door or equipment between scrubbing and gowning?", lookFor: "Direct observation of the route from sink to table." },
    { id: "stp-a4", question: "Has competency been assessed and recorded for everyone, including locums?", lookFor: "Records with dates. Check whether the most experienced staff have been assessed." },
    { id: "stp-a5", question: "Does the attire and hair covering standard apply to observers and visitors?", lookFor: "Observe a day with visitors present." },
    { id: "stp-a6", question: "When a glove breach is suspected, is it declared and acted on?", lookFor: "Ask the scrub team when this last happened and what was done." },
  ],
  relatedProtocols: ["aseptic-or-behaviour", "operating-theatre-preparation", "surgical-field-isolation", "audit-review-improvement"],
  resources: ["poster-hand-prep", "video-hand-prep", "observation-audit-form"],
  references: ["who-hand-hygiene-2009", "pittet-2000", "tanner-2006-gloves", "aorn-attire", "aorn-sterile-technique", "gillespie-2014", "mangram-1999"],
  glossaryTerms: ["aseptic-technique", "sterile-field"],
};
