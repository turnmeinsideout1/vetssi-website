import type { Protocol } from "../types";

export const instrumentsImplantProtection: Protocol = {
  slug: "instruments-implant-protection",
  protocolNumber: 7,
  title: "Instruments & Implant Protection",
  shortTitle: "Instruments & Implants",
  stage: "during-surgery",
  summary:
    "Verifying that what enters the wound is sterile, and protecting implants in particular from the moment the package is opened to the moment they are placed.",
  whyItMatters: [
    "Anything entering the wound can carry bacteria into it, and instruments and implants enter it directly.",
    "Implants present a surface on which bacteria can adhere and form biofilm, which is substantially harder to clear than free-floating organisms and often leads to implant removal.",
    "Sterilisation failures are systemic rather than individual: when one has occurred, it has usually affected more than one set.",
  ],
  standard:
    "Every item entering the surgical field should have verifiable evidence of sterilisation and intact packaging at the point of use. Implants should be opened as late as possible, handled as little as possible, and placed immediately, with a glove change before handling.",
  roles: [
    { role: "scrub-team", responsibility: "primary" },
    { role: "surgeon", responsibility: "oversight" },
    { role: "practice-leadership", responsibility: "oversight" },
  ],
  reviewTimeMinutes: 9,
  reviewStatus: "draft",
  lastReviewed: null,
  practices: [
    {
      id: "sterilization-verification",
      title: "Sterilization verification",
      summary: "Check the indicator, and record the load.",
      recommendedAction:
        "Verify sterilisation indicators for every item at the point of opening, and maintain records that allow any item to be traced back to its sterilisation load.",
      implementationSteps: [
        "Check external and internal indicators at opening, not at storage.",
        "Record load contents, cycle parameters and results so items can be traced.",
        "Use biological indicators at the interval the practice's protocol defines, and record the results.",
        "Do not use an item whose indicator has not changed, whatever the circumstances.",
      ],
      commonFailurePoints: [
        "Indicators glanced at rather than checked.",
        "No load records, so a failure cannot be traced to affected items.",
        "An item used despite an ambiguous indicator because nothing else is available.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Standard practice in sterile processing guidance. Sterilisation efficacy itself is established; the practice here is about verification and traceability.",
      references: ["aorn-sterilization", "chobin-2014"],
    },
    {
      id: "packaging-integrity",
      title: "Packaging integrity",
      summary: "Inspect before opening; a compromised pack is not sterile.",
      recommendedAction:
        "Inspect packaging for damage, moisture and seal integrity before opening, and treat any compromised pack as non-sterile.",
      implementationSteps: [
        "Inspect for tears, punctures, moisture staining and seal failure before opening.",
        "Treat a pack that has been dropped or wet as non-sterile regardless of appearance.",
        "Set the pack aside and report it rather than deciding individually whether it is acceptable.",
      ],
      commonFailurePoints: [
        "Damage noticed at opening and the item used anyway.",
        "A dropped pack retrieved and used because it looks intact.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard sterile processing practice.",
      references: ["aorn-sterilization"],
    },
    {
      id: "storage",
      title: "Storage",
      summary: "Dry, enclosed, off the floor, and rotated.",
      recommendedAction:
        "Store sterile items in a dry, enclosed, temperature-stable area away from traffic, and rotate stock so older items are used first.",
      implementationSteps: [
        "Store in closed cabinets rather than on open shelving in a corridor.",
        "Keep items off the floor and away from sinks, windows and vents.",
        "Rotate stock and check expiry dates on a schedule.",
      ],
      commonFailurePoints: [
        "Sterile packs stored on open shelves in a thoroughfare.",
        "Stock never rotated, so some packs remain indefinitely.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard practice. Storage conditions affect packaging integrity over time.",
      references: ["aorn-sterilization"],
    },
    {
      id: "tray-opening",
      title: "Tray opening and setup",
      summary: "Opened by a defined technique, onto a prepared surface.",
      recommendedAction:
        "Open trays and packs by a technique that keeps the contents and the opener's hands clear of the sterile contents, onto a surface prepared for the purpose.",
      implementationSteps: [
        "Prepare and confirm the surface before opening anything onto it.",
        "Open the furthest flap first and the nearest last, keeping hands clear of the contents.",
        "Have the sterile operator take the contents; do not let the non-sterile opener reach over them.",
      ],
      commonFailurePoints: [
        "Reaching over an open sterile field while opening the next pack.",
        "Opening onto a surface that has not been confirmed clean and dry.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }, { role: "prep-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard sterile technique.",
      references: ["aorn-sterile-technique"],
    },
    {
      id: "instrument-table",
      title: "Instrument-table management",
      summary: "Organised, within the sterile boundary, and counted.",
      recommendedAction:
        "Keep the instrument table organised in a consistent layout within the sterile boundary, and perform counts at the defined points.",
      implementationSteps: [
        "Use a consistent layout so a missing or misplaced item is obvious.",
        "Keep instruments away from the table edge and above table level.",
        "Perform counts at the points the protocol defines and record them.",
        "Separate instruments that have contacted skin or contaminated tissue from the rest.",
      ],
      commonFailurePoints: [
        "Instruments at the table edge, below the sterile boundary.",
        "Counts recorded as done without actually being done.",
        "Contaminated instruments returned to the general pool.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Standard sterile technique. Counting practice is primarily about retained items rather than infection, but table discipline serves both.",
      references: ["aorn-counts", "aorn-sterile-technique"],
    },
    {
      id: "contaminated-instruments",
      title: "Recognition of contaminated instruments",
      summary: "Recognise it, say it, and remove the instrument.",
      recommendedAction:
        "Treat any instrument that contacts a non-sterile surface as contaminated, remove it from the field, and say so.",
      implementationSteps: [
        "Define what counts as contamination for an instrument, so the judgement is not made case by case.",
        "Remove the instrument immediately rather than setting it aside on the same table.",
        "Say it aloud, so the surgeon knows the instrument is no longer available.",
        "Record significant events for later review.",
      ],
      commonFailurePoints: [
        "A dropped instrument retrieved and wiped.",
        "A contaminated instrument placed at the edge of the same sterile table.",
        "Contamination recognised but not announced.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }, { role: "surgical-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard sterile technique. Depends on team culture more than on technique.",
      references: ["aorn-sterile-technique"],
    },
    {
      id: "implant-exposure-time",
      title: "Implant exposure time",
      summary: "Open last, place immediately.",
      recommendedAction:
        "Keep implants in their packaging until the moment of placement, and minimise the interval between opening and implantation.",
      implementationSteps: [
        "Plan the sequence so the implant is opened at the point of use, not during setup.",
        "Confirm the size before opening, not by opening several to compare.",
        "Place immediately once opened; do not open and then complete other steps.",
      ],
      commonFailurePoints: [
        "Several implant sizes opened so the surgeon can choose.",
        "Implant opened during setup and exposed for the whole procedure.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice based on mechanistic reasoning about airborne settlement. The relationship between exposure duration and implant infection has not been quantified.",
      references: ["stocks-2010", "weese-2008"],
    },
    {
      id: "implant-glove-change",
      title: "Glove change before implant handling",
      summary:
        "Fresh gloves before touching an implant, every time.",
      recommendedAction:
        "Change to fresh gloves immediately before handling an implant, and make this a defined, announced step in the procedure.",
      implementationSteps: [
        "Write the glove change into the implant procedure as a named step.",
        "Announce it, so the whole team knows the implant phase has begun.",
        "Change gloves again after any skin contact during implant placement.",
      ],
      commonFailurePoints: [
        "Glove change omitted when the procedure is running late.",
        "Gloves changed by the surgeon but not by the assistant who will also handle the implant.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "scrub-team", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Widely recommended in orthopaedic practice on the basis that gloves accumulate contamination during a procedure. Direct outcome evidence for this specific step is limited.",
      references: ["tanner-2006-gloves", "weese-2008"],
    },
    {
      id: "no-touch-handling",
      title: "No-touch or protected implant handling",
      summary: "Handle with instruments rather than fingers where possible.",
      recommendedAction:
        "Handle implants with instruments rather than gloved hands wherever the implant and the procedure allow it.",
      implementationSteps: [
        "Use the manufacturer's insertion instruments where they exist.",
        "Transfer implants from package to field without intermediate contact.",
        "Avoid contact between the implant and drapes, skin or the table.",
      ],
      commonFailurePoints: [
        "Implant rested on the drape before placement.",
        "Implant handled repeatedly while the site is being prepared for it.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "scrub-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote: "Good surgical practice. Not quantified in outcome studies.",
      references: ["weese-2008", "gallagher-2012"],
    },
    {
      id: "implant-storage-transfer",
      title: "Implant storage and transfer",
      summary: "Controlled storage, and a record of what went into which patient.",
      recommendedAction:
        "Store implants in controlled conditions, check expiry and packaging before use, and record type, manufacturer and batch for every implant placed.",
      implementationSteps: [
        "Store implants under the conditions the manufacturer specifies.",
        "Check expiry and packaging at the point of selection.",
        "Record type, manufacturer and batch in the surgical record.",
        "Keep the batch record accessible for surveillance and for any recall.",
      ],
      commonFailurePoints: [
        "Batch details not recorded, so a pattern involving a batch cannot be detected.",
        "Implants stored wherever there is space.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good practice and a precondition for implant-associated infection surveillance.",
      references: ["verwilghen-2026", "gallagher-2012"],
    },
    {
      id: "immediate-use-sterilization",
      title: "Immediate-use steam sterilization exceptions",
      summary: "An exception process, not a workaround for inventory gaps.",
      recommendedAction:
        "Use immediate-use steam sterilisation only for unforeseen, unavoidable need, record every use, and review the records to identify inventory problems it is concealing.",
      implementationSteps: [
        "Define the circumstances in which it is permitted.",
        "Record every use, with the reason.",
        "Do not use it for implants.",
        "Review the record periodically; repeated use for the same item indicates an inventory problem.",
      ],
      commonFailurePoints: [
        "Routine use to cover an inadequate instrument inventory.",
        "Use not recorded, so the underlying gap stays invisible.",
        "Used for implants.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }, { role: "practice-leadership", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Restriction of immediate-use sterilisation to exceptional circumstances is standard in sterile processing guidance.",
      references: ["aorn-sterilization", "chobin-2014"],
    },
    {
      id: "sterilization-failure-response",
      title: "Documentation and response to sterilization failures",
      summary:
        "A failure is a systemic event; quarantine the load, not just the item.",
      recommendedAction:
        "Define in advance what happens when a sterilisation failure is detected, including quarantine of affected loads and review of patients whose procedures used them.",
      implementationSteps: [
        "Write the response before it is needed, including who is informed.",
        "Quarantine the affected load and any subsequent loads until the cause is identified.",
        "Use the load records to identify which patients were affected.",
        "Record the failure, the investigation and the corrective action.",
      ],
      commonFailurePoints: [
        "The individual item discarded and the rest of the load used.",
        "No load records, so affected patients cannot be identified.",
        "Failures handled informally and never reviewed.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "scrub-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard sterile processing practice.",
      references: ["aorn-sterilization"],
    },
  ],
  checklist: [
    { id: "iip-1", label: "Sterilisation indicator checked at opening for every item", practiceId: "sterilization-verification" },
    { id: "iip-2", label: "Packaging inspected for damage and moisture before opening", practiceId: "packaging-integrity" },
    { id: "iip-3", label: "Packs opened without reaching over the sterile field", practiceId: "tray-opening" },
    { id: "iip-4", label: "Instrument table in the standard layout, items clear of the edge", practiceId: "instrument-table" },
    { id: "iip-5", label: "Counts performed and recorded at the defined points", practiceId: "instrument-table" },
    { id: "iip-6", label: "Instruments that contacted skin kept separate", practiceId: "contaminated-instruments" },
    { id: "iip-7", label: "Implant size confirmed before opening; only one opened", practiceId: "implant-exposure-time" },
    { id: "iip-8", label: "Gloves changed immediately before implant handling, and announced", practiceId: "implant-glove-change" },
    { id: "iip-9", label: "Implant handled with instruments; no contact with drapes or skin", practiceId: "no-touch-handling" },
    { id: "iip-10", label: "Implant type, manufacturer and batch recorded", practiceId: "implant-storage-transfer" },
    { id: "iip-11", label: "No immediate-use sterilisation, or use recorded with its reason", practiceId: "immediate-use-sterilization" },
  ],
  evidenceSummary:
    "Sterilisation itself is established; what this protocol covers is verification, traceability and handling, which are standard sterile processing practice rather than separately studied interventions. The implant practices — late opening, glove change, no-touch handling — are widely recommended in orthopaedic surgery on mechanistic grounds, and implant removal following infection is reported in the veterinary orthopaedic literature, but the individual handling steps have not been quantified against outcomes. The strongest reason to follow them is the consequence when they fail: implant-associated infection is difficult to clear and frequently ends in implant removal.",
  evidenceLevel: "consensus",
  evidenceLimitations: [
    "Individual implant handling steps have not been isolated against infection outcomes.",
    "The relationship between implant exposure duration and infection risk is not quantified.",
    "Evidence for glove change before implant handling is mechanistic rather than outcome-based.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    { id: "iip-a1", question: "Can any item used last month be traced to its sterilisation load?", lookFor: "Pick a recent case and try to trace it. If this cannot be done, a sterilisation failure could not be managed." },
    { id: "iip-a2", question: "Is the glove change before implant handling actually performed and announced?", lookFor: "Direct observation of several implant procedures." },
    { id: "iip-a3", question: "How long before placement are implants opened?", lookFor: "Observe. Note whether more than one size is opened." },
    { id: "iip-a4", question: "Are implant batch details recorded in the surgical record?", lookFor: "Sample recent implant cases." },
    { id: "iip-a5", question: "How often is immediate-use sterilisation used, and for what?", lookFor: "Review the log. Repeated use for the same item indicates an inventory gap." },
    { id: "iip-a6", question: "Is there a written response to a sterilisation failure, and does anyone know it?", lookFor: "Ask the scrub team what they would do, then compare with the document." },
  ],
  relatedProtocols: ["surgical-field-isolation", "operating-theatre-preparation", "aseptic-or-behaviour", "ssi-surveillance"],
  resources: ["observation-audit-form", "printable-protocol-pack"],
  references: ["aorn-sterilization", "aorn-sterile-technique", "aorn-counts", "chobin-2014", "stocks-2010", "weese-2008", "gallagher-2012", "tanner-2006-gloves", "verwilghen-2026"],
  glossaryTerms: ["biofilm", "implant-associated-infection", "immediate-use-steam-sterilisation", "sterile-field"],
};
