import type { Protocol } from "../types";

export const operatingTheatrePreparation: Protocol = {
  slug: "operating-theatre-preparation",
  protocolNumber: 5,
  title: "Operating Theatre Preparation",
  shortTitle: "Theatre Preparation",
  stage: "before-surgery",
  summary:
    "Making the room ready — cleaning, airflow, layout, sterile setup and a readiness check — before the patient arrives.",
  whyItMatters: [
    "Environmental contamination is largely invisible, which makes it the easiest thing in the pathway to stop controlling without noticing.",
    "Room layout decided during the procedure creates movement, and movement around an open field raises airborne contamination.",
    "A sterile setup opened early and left waiting is exposed for the whole of that wait.",
  ],
  standard:
    "The operating theatre should be cleaned to a documented standard between procedures and on a scheduled basis, laid out before the patient enters so that movement during the procedure is minimised, and confirmed ready by an explicit check before the patient is admitted to the room.",
  roles: [
    { role: "prep-team", responsibility: "primary" },
    { role: "scrub-team", responsibility: "supporting" },
    { role: "practice-leadership", responsibility: "oversight" },
  ],
  reviewTimeMinutes: 8,
  reviewStatus: "draft",
  lastReviewed: null,
  practiceGroups: [
    {
      id: "clean",
      title: "Clean the room",
      summary:
        "Turnover and scheduled cleaning, to a written standard with observed contact times.",
      practices: [
        "cleaning-between-procedures",
        "scheduled-cleaning",
      ],
    },
    {
      id: "environment",
      title: "Control the environment",
      summary:
        "Airflow, movement and layout, decided before the case rather than during it.",
      practices: [
        "ventilation",
        "traffic-planning",
        "equipment-placement",
      ],
    },
    {
      id: "set-up",
      title: "Set up for the case",
      summary:
        "Opening as late as practical, and keeping what is open attended.",
      practices: [
        "sterile-setup",
        "implant-equipment-readiness",
        "medication-preparation",
      ],
    },
    {
      id: "confirm",
      title: "Confirm before the patient arrives",
      summary:
        "One explicit check, while findings can still be acted on.",
      practices: [
        "environmental-monitoring",
        "readiness-check",
      ],
    },
  ],
  practices: [
    {
      id: "cleaning-between-procedures",
      title: "Cleaning between procedures",
      summary: "A defined turnover clean, with defined contact times.",
      recommendedAction:
        "Clean the theatre between every procedure to a written standard that names the product, the surfaces and the contact time.",
      implementationSteps: [
        "Write down which surfaces are cleaned at turnover and with what product.",
        "State the product's contact time and build it into the turnover time allowed in the schedule.",
        "Include equipment surfaces, cables and the anaesthesia machine, which are often omitted.",
      ],
      commonFailurePoints: [
        "Turnover time in the schedule shorter than the cleaning the standard requires.",
        "Contact time not observed because the next patient is already at the door.",
        "Equipment surfaces omitted because the standard only names the table and floor.",
      ],
      roles: [{ role: "prep-team", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Environmental cleaning is universal in perioperative guidance. Evidence connecting specific cleaning practices to surgical site infection rates is limited.",
      references: ["aorn-environmental-cleaning", "mcdonnell-1999"],
    },
    {
      id: "scheduled-cleaning",
      title: "Scheduled environmental cleaning",
      summary: "Beyond turnover: the deeper clean, on a schedule, recorded.",
      recommendedAction:
        "Carry out scheduled cleaning of the whole theatre beyond turnover cleaning, and record when it was done.",
      implementationSteps: [
        "Define what the scheduled clean covers, including areas turnover cleaning never reaches.",
        "Set the interval and assign responsibility for it.",
        "Record completion, so gaps are visible rather than assumed not to exist.",
      ],
      commonFailurePoints: [
        "Deep cleaning done when someone has time rather than on a schedule.",
        "Completion not recorded, so nobody knows when it last happened.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "prep-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote: "Standard perioperative practice. Not separately studied against infection outcomes.",
      references: ["aorn-environmental-cleaning"],
    },
    {
      id: "ventilation",
      title: "Ventilation and airflow",
      summary: "Know what your room actually does, and keep the doors shut.",
      recommendedAction:
        "Establish what ventilation the theatre provides, maintain it, and keep doors closed during procedures so that the airflow behaves as intended.",
      implementationSteps: [
        "Establish and record the room's ventilation arrangement and air change rate if known.",
        "Maintain and service the system on a schedule, and record it.",
        "Keep doors closed during procedures; opening a door disrupts whatever airflow the room has.",
        "Avoid placing equipment where it obstructs supply or extract vents.",
      ],
      commonFailurePoints: [
        "Nobody in the practice knows what the ventilation system does.",
        "Doors propped open for convenience, particularly in warm weather.",
        "Storage stacked against vents.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }, { role: "surgical-team", responsibility: "supporting" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Airborne particles correlate with bacterial counts in operating rooms, and ventilation standards are established in human surgical facility guidance. Evidence connecting specific ventilation arrangements to veterinary surgical site infection rates is limited, and most veterinary theatres do not meet human facility standards.",
      references: ["stocks-2010", "memarzadeh-2000", "aorn-surgical-suite"],
    },
    {
      id: "traffic-planning",
      title: "Room traffic planning",
      summary: "Plan who needs to be in the room, and what they will need.",
      recommendedAction:
        "Plan before the case who needs to be in the room and what they will need, so that traffic during the procedure is reduced to the unavoidable.",
      implementationSteps: [
        "Agree at the briefing who will be present for the case.",
        "Gather everything the case is likely to need before it starts, including contingency items.",
        "Designate one person to fetch anything unexpected, rather than whoever is nearest leaving.",
      ],
      commonFailurePoints: [
        "Repeated door openings to fetch items that could have been anticipated.",
        "Observers arriving and leaving during the procedure.",
      ],
      roles: [{ role: "prep-team", responsibility: "primary" }, { role: "surgical-team", responsibility: "supporting" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Operating room traffic has been associated with airborne contamination and studied in human surgery, but the evidence connecting traffic volume to infection rates is limited and confounded.",
      references: ["pryor-2010", "stocks-2010"],
    },
    {
      id: "equipment-placement",
      title: "Equipment placement",
      summary: "Position it before draping, not around the sterile field.",
      recommendedAction:
        "Position lighting, suction, diathermy and imaging equipment before the sterile setup is opened, so that adjustments do not have to be made around a draped field.",
      implementationSteps: [
        "Position and test equipment before the setup is opened.",
        "Route cables and tubing so they do not cross the sterile field or the team's movement path.",
        "Set lighting for the planned approach before draping.",
      ],
      commonFailurePoints: [
        "Equipment repositioned over the open field mid-procedure.",
        "Cables crossing the path the team has to walk.",
      ],
      roles: [{ role: "prep-team", responsibility: "primary" }, { role: "scrub-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote: "Good practice. Acts indirectly, by reducing movement around the field.",
      references: ["aorn-surgical-suite"],
    },
    {
      id: "sterile-setup",
      title: "Sterile instrument setup",
      summary: "Open as late as practical, and do not leave it unattended.",
      recommendedAction:
        "Open the sterile setup as close to the start of the procedure as practical, and keep it attended and covered by line of sight from the moment it is opened.",
      implementationSteps: [
        "Open the setup once the patient is in the room and preparation is nearly complete, not at the start of the list.",
        "Keep someone in the room with the open setup at all times.",
        "Record the setup time where exposure duration is being audited.",
      ],
      commonFailurePoints: [
        "Setups opened at the start of the list for efficiency and left exposed for hours.",
        "The room left empty with an open setup while the patient is fetched.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Airborne settlement onto exposed sterile surfaces over time is mechanistically established and supported by particle and settle-plate studies. The threshold at which exposure duration affects infection risk has not been established.",
      references: ["stocks-2010", "aorn-sterile-technique"],
    },
    {
      id: "implant-equipment-readiness",
      title: "Implant and equipment readiness",
      summary: "Present and checked, but not opened.",
      recommendedAction:
        "Confirm that implants and specialist equipment are present, correct and within date before the procedure begins, without opening them.",
      implementationSteps: [
        "Check implant sizes, expiry and packaging integrity against the plan before the case.",
        "Keep implants unopened until the point of use.",
        "Confirm that any backup sizes the contingency plan requires are also present.",
      ],
      commonFailurePoints: [
        "Implants opened at setup 'to save time', maximising their exposure.",
        "Presence confirmed but size range and expiry not checked.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }, { role: "surgeon", responsibility: "oversight" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. Minimising implant exposure is mechanistically reasoned; the effect of exposure duration on infection is not quantified.",
      references: ["aorn-sterilization", "aorn-counts"],
    },
    {
      id: "medication-preparation",
      title: "Medication preparation considerations",
      summary:
        "Aseptic preparation, single-patient use, and a clean surface to do it on.",
      recommendedAction:
        "Prepare medications aseptically on a designated clean surface, label them, and use single-patient vials and syringes.",
      implementationSteps: [
        "Designate and keep clear a surface for medication preparation.",
        "Disinfect vial and port surfaces before access and allow them to dry.",
        "Label every syringe with drug and concentration.",
        "Do not reuse syringes or needles between patients, and do not share vials between patients.",
      ],
      commonFailurePoints: [
        "Multi-dose vials shared across a list.",
        "Syringes prepared in advance and left unlabelled.",
        "Preparation done on whatever surface is free.",
      ],
      roles: [{ role: "anaesthesia-team", responsibility: "primary" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Unsafe injection practices have caused documented outbreaks in human healthcare and are addressed in injection safety guidance. Evidence specific to veterinary surgical site infection is limited, but the mechanism is direct.",
      references: ["cdc-injection-safety", "aorn-medication-safety", "ogrady-2011"],
    },
    {
      id: "environmental-monitoring",
      title: "Environmental monitoring where appropriate",
      summary:
        "Optional, and only worth doing if you have decided what you will do with the result.",
      recommendedAction:
        "Where environmental monitoring is used, decide in advance what will be sampled, how often, and what action any given result will trigger.",
      implementationSteps: [
        "Decide first what question the monitoring is meant to answer.",
        "Define what result would prompt action and what that action would be.",
        "Record results over time rather than treating each as a pass or fail.",
      ],
      commonFailurePoints: [
        "Sampling carried out with no predefined action threshold, so results change nothing.",
        "A single adverse result triggering an unplanned response.",
      ],
      roles: [{ role: "practice-leadership", responsibility: "primary" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Routine environmental microbiological monitoring is not recommended as standard practice in most human perioperative guidance, and its value in veterinary settings is unestablished. It is included here so that practices that choose to do it do so deliberately.",
      references: ["aorn-environmental-cleaning"],
    },
    {
      id: "readiness-check",
      title: "Preoperative room-readiness check",
      summary: "One explicit check before the patient enters.",
      recommendedAction:
        "Complete an explicit room-readiness check before the patient is admitted to the theatre, covering cleaning, equipment, setup, implants and the people present.",
      implementationSteps: [
        "Use a short written check rather than a general look around.",
        "Complete it before the patient enters, so findings can still be acted on.",
        "Assign one named person to complete it.",
      ],
      commonFailurePoints: [
        "Check performed after the patient is already in the room.",
        "Everyone assuming someone else has checked.",
      ],
      roles: [{ role: "prep-team", responsibility: "primary" }, { role: "scrub-team", responsibility: "supporting" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Structured preoperative checks are part of surgical safety checklist programmes associated with reduced morbidity in human surgery. The room-readiness component cannot be isolated from those programmes.",
      references: ["haynes-2009", "who-safe-surgery-2009"],
    },
  ],
  checklist: [
    { id: "otp-1", label: "Turnover clean completed to the written standard, contact times observed", practiceId: "cleaning-between-procedures" },
    { id: "otp-2", label: "Equipment surfaces, cables and anaesthesia machine included in the clean", practiceId: "cleaning-between-procedures" },
    { id: "otp-3", label: "Doors closed; nothing obstructing vents", practiceId: "ventilation" },
    { id: "otp-4", label: "Everyone needed for the case is present; no one else", practiceId: "traffic-planning" },
    { id: "otp-5", label: "Lighting, suction and diathermy positioned and tested before setup", practiceId: "equipment-placement" },
    { id: "otp-6", label: "Cables routed clear of the field and of walking routes", practiceId: "equipment-placement" },
    { id: "otp-7", label: "Sterile setup opened only once preparation was nearly complete", practiceId: "sterile-setup" },
    { id: "otp-8", label: "Open setup attended at all times", practiceId: "sterile-setup" },
    { id: "otp-9", label: "Implants present, correct size range, in date, unopened", practiceId: "implant-equipment-readiness" },
    { id: "otp-10", label: "Medications prepared aseptically and labelled; no shared vials", practiceId: "medication-preparation" },
    { id: "otp-11", label: "Room-readiness check completed by a named person before the patient entered", practiceId: "readiness-check" },
  ],
  evidenceSummary:
    "This protocol is mostly consensus and precaution. Environmental cleaning, ventilation standards and traffic control are universal in perioperative guidance, but the evidence connecting any of them specifically to surgical site infection rates is limited, and almost all of it comes from human facilities that most veterinary theatres do not resemble. The better-supported elements are the injection safety practices under medication preparation, where unsafe practice has caused documented outbreaks, and structured preoperative checks, which come from multi-element human checklist programmes. VetSSI's position is that a practice should know what its room actually does and control what it can, rather than assume a standard it has never measured.",
  evidenceLevel: "limited",
  evidenceLimitations: [
    "Ventilation evidence comes from human surgical facilities with engineering standards most veterinary theatres do not meet.",
    "Traffic and infection studies are confounded by case complexity and duration.",
    "Cleaning practices are near-universal but not connected to infection outcomes by direct evidence.",
    "Routine environmental microbiological monitoring is not established as useful and is included only as an optional, deliberate choice.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    { id: "otp-a1", question: "Is there a written turnover cleaning standard naming products, surfaces and contact times?", lookFor: "A dated document, and whether the schedule actually allows the time it requires." },
    { id: "otp-a2", question: "Does anyone in the practice know what the theatre ventilation provides?", lookFor: "Ask. A recorded air change rate or system description, or an honest 'we don't know'." },
    { id: "otp-a3", question: "How long before the procedure is the sterile setup opened?", lookFor: "Observe across a list. Note whether setups are opened for later cases in advance." },
    { id: "otp-a4", question: "How many times does the theatre door open during a procedure, and why?", lookFor: "Count during several procedures and record the reason each time." },
    { id: "otp-a5", question: "Are multi-dose vials or syringes shared between patients?", lookFor: "Observe a list. This is rarely admitted but readily seen." },
    { id: "otp-a6", question: "Is the room-readiness check completed before the patient enters, by a named person?", lookFor: "Observe the sequence, not the form." },
  ],
  relatedProtocols: ["surgical-team-preparation", "aseptic-or-behaviour", "instruments-implant-protection", "patient-preparation"],
  resources: ["poster-theatre-discipline", "observation-audit-form"],
  references: ["aorn-environmental-cleaning", "aorn-surgical-suite", "aorn-sterile-technique", "aorn-sterilization", "aorn-counts", "aorn-medication-safety", "stocks-2010", "memarzadeh-2000", "pryor-2010", "mcdonnell-1999", "cdc-injection-safety", "ogrady-2011", "haynes-2009", "who-safe-surgery-2009"],
  glossaryTerms: ["sterile-field", "aseptic-technique"],
};
