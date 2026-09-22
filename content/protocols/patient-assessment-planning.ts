import type { Protocol } from "../types";

export const patientAssessmentPlanning: Protocol = {
  slug: "patient-assessment-planning",
  protocolNumber: 1,
  title: "Patient Assessment & Surgical Planning",
  shortTitle: "Assessment & Planning",
  stage: "before-surgery",
  summary:
    "Identifying what this patient and this procedure bring to the case, and planning around it before the patient reaches the theatre.",
  whyItMatters: [
    "The most preventable surgical site infections are often in patients who were operated on electively in a condition that should first have been addressed.",
    "Risk identified before scheduling can change the plan. The same risk identified after induction usually cannot.",
    "Planning failures surface as time — missing equipment, an unavailable implant, an unanticipated approach — and prolonged operative time is itself associated with infection.",
  ],
  standard:
    "Every surgical patient should have a documented assessment of the factors that raise its infection risk, and every procedure should have a plan that anticipates its equipment, implant and duration requirements before the patient is admitted for surgery.",
  roles: [
    { role: "surgeon", responsibility: "primary" },
    { role: "anaesthesia-team", responsibility: "supporting" },
    { role: "practice-leadership", responsibility: "oversight" },
    { role: "surgical-team", responsibility: "supporting" },
  ],
  reviewTimeMinutes: 8,
  reviewStatus: "draft",
  lastReviewed: null,
  practices: [
    {
      id: "patient-risk-factors",
      title: "Patient-specific SSI risk factors",
      summary:
        "Record the factors that raise this patient's risk, where the whole team can see them.",
      recommendedAction:
        "Assess and document patient-specific infection risk factors before scheduling, and make the assessment visible to the whole surgical team.",
      implementationSteps: [
        "Review history for endocrine disease, immunosuppressive therapy, prior resistant infection and concurrent disease.",
        "Record body condition and physical status classification in the surgical record.",
        "Make the assessment visible on the day — on the board, the record or the briefing — rather than leaving it in the clinical notes.",
      ],
      commonFailurePoints: [
        "Risk factors documented in the history but never surfaced to the theatre team.",
        "Assessment performed on the day of surgery, when the plan can no longer change.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "anaesthesia-team", responsibility: "supporting" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Veterinary studies have reported associations between patient factors and postoperative infection, with findings varying between studies and populations. The associations are more consistently reported than they are quantified.",
      references: ["nicholson-2002", "eugster-2004", "turk-2015", "nelson-2011"],
    },
    {
      id: "existing-infections",
      title: "Existing or remote infections",
      summary:
        "An infection elsewhere is a reason to treat first and operate afterwards.",
      recommendedAction:
        "Identify and address active infection at any site before elective surgery, and record the decision where the procedure is not deferred.",
      implementationSteps: [
        "Examine for active infection including skin, ear, urinary tract and dental disease before scheduling.",
        "Treat and confirm resolution before elective procedures, particularly where an implant is planned.",
        "Where surgery proceeds despite active infection, record the reasoning and what was modified as a result.",
      ],
      commonFailurePoints: [
        "A remote infection judged unrelated to the surgical site and not addressed.",
        "Deferral avoided because the appointment is already booked.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice, and standard in human preoperative guidance. Direct veterinary evidence on remote infection as a risk factor for surgical site infection is limited.",
      references: ["mangram-1999"],
    },
    {
      id: "skin-disease",
      title: "Skin disease and surgical-site condition",
      summary: "Look at the skin you intend to cut, before the day.",
      recommendedAction:
        "Examine the intended surgical site for dermatitis, pyoderma, wounds or other skin disease at the time of scheduling, and treat before proceeding electively.",
      implementationSteps: [
        "Examine the planned site specifically, not only the patient generally.",
        "Treat active skin disease at or near the site and confirm resolution before an elective procedure.",
        "Re-examine the site on the day, since skin condition can change between consultation and surgery.",
      ],
      commonFailurePoints: [
        "The site not examined until it is clipped.",
        "Skin disease treated but resolution never confirmed.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "prep-team", responsibility: "supporting" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. Skin disease at the surgical site is widely regarded as a contraindication to elective surgery, though the effect size in veterinary patients is not established.",
      references: ["hillier-2014"],
    },
    {
      id: "resistant-organisms",
      title: "Resistant-organism considerations",
      summary:
        "Known carriage or prior resistant infection changes the plan.",
      recommendedAction:
        "Identify patients with known resistant-organism carriage or prior resistant infection, and plan prophylaxis, handling and scheduling accordingly.",
      implementationSteps: [
        "Ask about prior resistant infection and about recent hospitalisation or antimicrobial courses.",
        "Flag identified patients in the record and in the theatre schedule.",
        "Agree in advance what changes for these patients — prophylaxis choice, scheduling position, handling precautions.",
      ],
      commonFailurePoints: [
        "Prior resistant infection recorded historically but not reviewed at scheduling.",
        "A flag applied but no agreed change in practice attached to it.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "practice-leadership", responsibility: "oversight" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Veterinary antimicrobial use guidance supports accounting for known resistance in treatment selection. Evidence specific to surgical prophylaxis in known carriers is limited.",
      references: ["guardabassi-2010", "weese-2011-uti"],
    },
    {
      id: "procedure-implant-risk",
      title: "Procedure and implant risk",
      summary:
        "The procedure carries its own risk, independent of the patient.",
      recommendedAction:
        "Assess the procedure's own contamination and implant risk during planning, and apply enhanced measures where an implant is involved.",
      implementationSteps: [
        "Anticipate the wound classification the procedure is likely to produce.",
        "Identify whether an implant will be placed and plan handling accordingly.",
        "Agree which enhanced measures apply to higher-risk procedures and record them in the plan.",
      ],
      commonFailurePoints: [
        "Implant procedures managed with the same measures as soft tissue procedures.",
        "Contamination risk anticipated by the surgeon but not communicated to the team.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "scrub-team", responsibility: "supporting" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Wound classification is an established correlate of infection risk. Implant-associated infection is separately defined in the 2026 consensus and reported in veterinary orthopaedic literature.",
      references: ["verwilghen-2026", "weese-2008", "gallagher-2012"],
    },
    {
      id: "case-specific-planning",
      title: "Case-specific surgical planning",
      summary:
        "Plan the approach before the day, not at the table.",
      recommendedAction:
        "Plan the surgical approach, likely findings and intended technique before the day of surgery, and record the plan where the team can see it.",
      implementationSteps: [
        "Review imaging and plan the approach and technique in advance.",
        "Identify the decision points at which the plan might change and what the alternatives are.",
        "Record the plan in a form the scrub and prep teams can read before the case starts.",
      ],
      commonFailurePoints: [
        "Planning done mentally and never shared, so the team cannot prepare.",
        "Imaging reviewed for the first time in theatre.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "scrub-team", responsibility: "supporting" },
      ],
      evidenceLevel: "consensus",
      evidenceNote: "Good surgical practice. Not separately studied.",
    },
    {
      id: "anticipated-duration",
      title: "Anticipated procedural duration",
      summary:
        "Duration drives redosing, scheduling and warming decisions.",
      recommendedAction:
        "Estimate the expected duration during planning and use it to plan prophylaxis redosing, theatre scheduling and temperature management.",
      implementationSteps: [
        "Record an expected duration for the procedure at scheduling.",
        "Use it to set redosing intervals in advance rather than during the case.",
        "Compare actual against expected duration periodically, so estimates improve.",
      ],
      commonFailurePoints: [
        "Redosing worked out mid-procedure, when nobody is watching the clock.",
        "Estimates never reviewed against reality, so scheduling stays unrealistic.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "anaesthesia-team", responsibility: "supporting" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Prolonged operative time is among the more consistently reported risk factors for surgical site infection across human and veterinary studies, although thresholds vary by procedure.",
      references: ["eugster-2004", "beal-2000", "nelson-2011"],
    },
    {
      id: "equipment-implant-availability",
      title: "Equipment and implant availability",
      summary:
        "Confirm it is in the building, sterile, and the right size.",
      recommendedAction:
        "Confirm before the day of surgery that the required instruments and implants are available, sterile and of the correct size range.",
      implementationSteps: [
        "Check the required sets and implant sizes against the plan before the day.",
        "Confirm sterilisation status and expiry rather than assuming availability.",
        "Confirm a size range, not a single size, where the exact requirement may change intraoperatively.",
      ],
      commonFailurePoints: [
        "Discovery during the procedure that the needed size is not stocked.",
        "A set assumed available that is still in reprocessing.",
      ],
      roles: [
        { role: "scrub-team", responsibility: "primary" },
        { role: "surgeon", responsibility: "oversight" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good practice. The link to infection is indirect, through prolonged operative time and improvised workarounds.",
      references: ["aorn-counts"],
    },
    {
      id: "contingency-planning",
      title: "Contingency planning",
      summary:
        "Decide in advance what happens if the plan does not hold.",
      recommendedAction:
        "Identify the plausible ways the procedure could deviate from plan and agree the response before starting.",
      implementationSteps: [
        "Name the likely complications and decision points during planning.",
        "Agree what is done for each — including the decision to stage or abandon.",
        "Confirm that any equipment a contingency would require is actually available.",
      ],
      commonFailurePoints: [
        "Contingencies considered by the surgeon alone, so the team cannot act on them.",
        "A contingency plan that depends on equipment the practice does not hold.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "surgical-team", responsibility: "supporting" },
      ],
      evidenceLevel: "consensus",
      evidenceNote: "Good surgical practice. Not separately studied.",
    },
    {
      id: "team-briefing",
      title: "Team briefing and case readiness",
      summary:
        "A short structured briefing before the patient is prepared.",
      recommendedAction:
        "Hold a short structured briefing before each case covering the plan, the patient's risk factors, prophylaxis, equipment and anticipated duration.",
      implementationSteps: [
        "Use a consistent short structure so the briefing takes minutes rather than being skipped.",
        "Hold it with everyone present who will be in the room, before preparation begins.",
        "Include an explicit invitation for anyone to raise a concern.",
      ],
      commonFailurePoints: [
        "Briefing held after preparation has already started, when its conclusions cannot change anything.",
        "Only senior staff speak, so the briefing confirms rather than checks.",
      ],
      roles: [
        { role: "surgical-team", responsibility: "primary" },
        { role: "surgeon", responsibility: "oversight" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Surgical safety checklists including preoperative briefing have been associated with reduced morbidity and mortality in human surgery. These were multi-element interventions, and the briefing component cannot be isolated. Veterinary evidence is limited.",
      references: ["haynes-2009", "who-safe-surgery-2009"],
    },
  ],
  checklist: [
    { id: "pap-1", label: "Patient risk factors documented and visible to the theatre team", practiceId: "patient-risk-factors" },
    { id: "pap-2", label: "No active infection at any site, or reasoning recorded", practiceId: "existing-infections" },
    { id: "pap-3", label: "Surgical site examined for skin disease, and again on the day", practiceId: "skin-disease" },
    { id: "pap-4", label: "Resistant-organism history reviewed and flagged", practiceId: "resistant-organisms" },
    { id: "pap-5", label: "Implant involvement identified and enhanced measures agreed", practiceId: "procedure-implant-risk" },
    { id: "pap-6", label: "Surgical plan recorded where the scrub and prep teams can read it", practiceId: "case-specific-planning" },
    { id: "pap-7", label: "Expected duration recorded and redosing interval set in advance", practiceId: "anticipated-duration" },
    { id: "pap-8", label: "Instruments and implant sizes confirmed available and sterile", practiceId: "equipment-implant-availability" },
    { id: "pap-9", label: "Contingencies agreed and their equipment confirmed", practiceId: "contingency-planning" },
    { id: "pap-10", label: "Team briefing held before preparation began", practiceId: "team-briefing" },
  ],
  evidenceSummary:
    "Associations between patient factors, procedure factors, operative duration and surgical site infection are reported across veterinary and human studies, though effect sizes vary and are rarely quantified in veterinary populations. Preoperative briefing sits on human evidence from multi-element safety checklist programmes, from which the briefing component cannot be separated. Most of the planning practices in this protocol are good surgical practice whose link to infection is indirect — they act by preventing the improvisation, delay and prolonged operative time that follow from being unprepared.",
  evidenceLevel: "moderate",
  evidenceLimitations: [
    "Risk factor associations reported in veterinary studies vary with population and study design and are rarely quantified.",
    "Checklist and briefing evidence comes from multi-element human programmes; the briefing component cannot be isolated.",
    "The link between planning quality and infection is indirect, mediated through operative time.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    { id: "pap-a1", question: "Is there a current written preoperative assessment standard?", lookFor: "A dated document naming what must be assessed and recorded." },
    { id: "pap-a2", question: "Can the theatre team state this patient's risk factors before the case begins?", lookFor: "Ask a nurse, not the surgeon. If the answer requires opening the clinical record, the information is not reaching the team." },
    { id: "pap-a3", question: "Does a briefing actually happen, and does anyone other than the surgeon speak?", lookFor: "Observe several cases and note who contributes." },
    { id: "pap-a4", question: "Are elective procedures deferred when active infection or skin disease is present?", lookFor: "Look for recorded deferrals. None at all suggests the standard is not being applied." },
    { id: "pap-a5", question: "Is expected duration recorded, and is it compared with actual?", lookFor: "Sample records for both fields." },
    { id: "pap-a6", question: "How often does a case start without equipment or implants that turn out to be needed?", lookFor: "Ask the scrub team rather than looking for records; these events are rarely documented." },
  ],
  relatedProtocols: ["antimicrobial-prophylaxis", "patient-preparation", "operating-theatre-preparation", "ssi-surveillance"],
  resources: ["printable-protocol-pack", "observation-audit-form"],
  references: ["nicholson-2002", "eugster-2004", "turk-2015", "nelson-2011", "weese-2008", "gallagher-2012", "guardabassi-2010", "weese-2011-uti", "hillier-2014", "haynes-2009", "who-safe-surgery-2009", "mangram-1999", "beal-2000", "verwilghen-2026", "aorn-counts"],
  glossaryTerms: ["surgical-wound-classification", "surgical-site-infection", "antimicrobial-prophylaxis"],
};
