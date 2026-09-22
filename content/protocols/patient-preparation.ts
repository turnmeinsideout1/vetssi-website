import type { Protocol } from "../types";

export const patientPreparation: Protocol = {
  slug: "patient-preparation",
  protocolNumber: 3,
  title: "Patient Preparation",
  shortTitle: "Patient Preparation",
  stage: "before-surgery",
  summary:
    "Reducing the bacterial burden at the surgical site without damaging the skin, and keeping the prepared site clean until the drapes go on.",
  whyItMatters: [
    "Skin cannot be sterilised. Preparation reduces the number of organisms at the site; it does not eliminate them, and bacteria persist in hair follicles and sebaceous glands whatever technique is used.",
    "Preparation can create risk as well as remove it. Clipper abrasions, a wet site under drapes, and recontamination during transfer all undo the work that has just been done.",
    "This protocol is performed by the people with the least seniority and the most time pressure, which makes a documented, consistently performed process more important here than almost anywhere else in the pathway.",
  ],
  standard:
    "The surgical site should be prepared using a documented, consistently performed process that protects skin integrity, removes visible contamination, and applies the selected antiseptic according to its required technique and contact time. The prepared site should then be protected from recontamination until draping is complete.",
  roles: [
    { role: "prep-team", responsibility: "primary" },
    { role: "surgeon", responsibility: "oversight" },
    { role: "anaesthesia-team", responsibility: "supporting" },
    { role: "scrub-team", responsibility: "supporting" },
  ],
  reviewTimeMinutes: 12,
  reviewStatus: "draft",
  lastReviewed: null,
  practices: [
    {
      id: "clipping-timing",
      title: "Timing and location of clipping",
      summary:
        "Clip as close to the procedure as practical, and outside the operating theatre.",
      recommendedAction:
        "Clip after induction, in a dedicated preparation area rather than in the operating theatre, and as close to the time of incision as the workflow allows.",
      implementationSteps: [
        "Designate a preparation area separate from the operating theatre and use it for all clipping.",
        "Clip after induction where the procedure and patient allow it, rather than the evening before or on admission.",
        "Record the clipping time in the anaesthesia or surgical record so the interval to incision is visible.",
        "Where a patient must be clipped early for imaging or assessment, note it and inspect the site again before preparation.",
      ],
      commonFailurePoints: [
        "Clipping the night before to save theatre time.",
        "Clipping inside the operating theatre, which releases hair and skin scale into the room.",
        "No record of when clipping happened, so the interval cannot be audited.",
      ],
      roles: [
        { role: "prep-team", responsibility: "primary" },
        { role: "surgeon", responsibility: "oversight" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Human systematic review evidence supports clipping over shaving for hair removal. The separate question of how long before incision clipping should happen is supported more by mechanistic reasoning and consensus than by direct veterinary outcome data, and the optimal interval has not been established.",
      references: ["tanner-2011-hair", "mangram-1999"],
    },
    {
      id: "clipping-technique",
      title: "Clipping technique and margin",
      summary:
        "Remove hair over an adequate margin without abrading the skin.",
      recommendedAction:
        "Clip with a sharp, appropriately sized blade held flat to the skin, over a margin wide enough that the incision and any planned extension stay well inside the prepared area.",
      implementationSteps: [
        "Agree a standard margin for each procedure type and record it in the written protocol.",
        "Use a sharp blade and replace blades before they begin to pull.",
        "Keep the blade flat against the skin and clip with, then against, the lie of the hair as needed rather than pressing.",
        "Inspect the clipped skin under good light for abrasions, nicks or existing lesions before moving on.",
        "Report any skin damage to the surgeon before preparation continues.",
      ],
      commonFailurePoints: [
        "A margin clipped to the planned incision rather than to the possible incision, so the field has to be extended after draping.",
        "Blunt or hot blades causing clipper burn, which is often not noticed until the skin reacts.",
        "Skin damage found during clipping but not reported.",
      ],
      roles: [
        { role: "prep-team", responsibility: "primary" },
        { role: "surgeon", responsibility: "oversight" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. The relationship between clipper-induced skin trauma and subsequent infection is biologically plausible and widely accepted, but the size of the effect in veterinary patients has not been quantified.",
      references: ["tanner-2011-hair"],
      media: [
        {
          kind: "video",
          caption: "Blade angle, margin and skin inspection during clipping.",
          status: "planned",
        },
      ],
    },
    {
      id: "clipper-hygiene",
      title: "Clipper cleaning and disinfection",
      summary:
        "Clippers move between patients and are a plausible route of transfer.",
      recommendedAction:
        "Clean and disinfect clipper blades between every patient using a documented method, and take contaminated blades out of use.",
      implementationSteps: [
        "Write down the cleaning and disinfection method for blades and clipper bodies, including the product and its contact time.",
        "Remove hair and debris from the blade before disinfecting it.",
        "Hold a stock of blades large enough that a set can be out of circulation being processed.",
        "Keep clipper bodies and cords clean; they are handled constantly and rarely cleaned.",
        "Take blades used on infected or contaminated sites out of circulation until fully processed.",
      ],
      commonFailurePoints: [
        "Brushing hair off a blade and moving straight to the next patient.",
        "Disinfectant applied but the required contact time not observed.",
        "Clipper bodies never cleaned because only blades are covered by the protocol.",
      ],
      roles: [
        { role: "prep-team", responsibility: "primary" },
        { role: "practice-leadership", responsibility: "oversight" },
      ],
      evidenceLevel: "limited",
      evidenceNote:
        "Clippers have been shown to harbour bacteria in veterinary settings and transfer is plausible, but direct evidence linking clipper hygiene practice to surgical site infection rates is limited. This practice is recommended on precautionary grounds.",
      references: ["mcdonnell-1999"],
    },
    {
      id: "hand-glove-precautions",
      title: "Hand and glove precautions during preparation",
      summary:
        "The hands doing the preparation are themselves a contamination route.",
      recommendedAction:
        "Perform hand hygiene before starting, wear gloves for clipping and cleaning, and change gloves between the dirty and clean phases of preparation.",
      implementationSteps: [
        "Perform hand hygiene before touching the patient or the preparation trolley.",
        "Wear examination gloves for clipping and for the initial gross clean.",
        "Discard those gloves and perform hand hygiene before beginning antiseptic preparation.",
        "Use a fresh pair of gloves, or sterile gloves where the protocol calls for it, for the antiseptic phase.",
        "Do not touch the clipper, bin, table or record between glove changes without repeating hand hygiene.",
      ],
      commonFailurePoints: [
        "One pair of gloves worn from clipping through to final antisepsis.",
        "Gloves changed but hands not decontaminated in between.",
        "Touching phone, notes or equipment mid-preparation and continuing.",
      ],
      roles: [
        { role: "prep-team", responsibility: "primary" },
        { role: "surgical-team", responsibility: "supporting" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Hand hygiene is among the better-supported interventions in healthcare-associated infection prevention generally. Its specific contribution during veterinary patient preparation has not been measured separately.",
      references: ["who-hand-hygiene-2009", "pittet-2000"],
    },
    {
      id: "hair-debris-removal",
      title: "Removal of loose hair and debris",
      summary:
        "Loose hair carries bacteria and will otherwise end up under the drapes.",
      recommendedAction:
        "Remove all loose hair and gross debris from the site and the surrounding coat before antiseptic preparation begins, using suction rather than brushing.",
      implementationSteps: [
        "Vacuum the clipped area and the surrounding coat.",
        "Check skin folds, the axilla or groin, and the edges of the clipped margin, where hair collects.",
        "Remove gross dirt, discharge or faecal contamination before antisepsis rather than expecting the antiseptic to deal with it.",
        "Change the patient's bedding or table cover if it is covered in clipped hair.",
      ],
      commonFailurePoints: [
        "Brushing or blowing hair, which redistributes it onto the site.",
        "Hair trapped at the edge of the clip and carried under the drape during positioning.",
        "Gross contamination left for the antiseptic phase to handle.",
      ],
      roles: [{ role: "prep-team", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. No veterinary outcome data specifically addresses hair and debris removal technique.",
    },
    {
      id: "initial-skin-cleaning",
      title: "Initial skin cleaning",
      summary:
        "A gross clean before antisepsis, so the antiseptic acts on skin rather than on dirt.",
      recommendedAction:
        "Clean the site to remove visible soiling before applying the antiseptic, and work from the planned incision outwards.",
      implementationSteps: [
        "Begin at the planned incision line and work outwards to the edge of the clipped margin.",
        "Do not return a used swab to an area already cleaned.",
        "Use enough swabs; change them as they become soiled rather than continuing with one.",
        "Pay particular attention to interdigital spaces, prepuce, ventral abdomen and any skin folds within the field.",
        "Reassess the site under light after cleaning and repeat if soiling remains.",
      ],
      commonFailurePoints: [
        "Working inwards towards the incision, carrying peripheral contamination to the most important area.",
        "Too few swabs, so soiling is moved around rather than removed.",
        "Skipping the gross clean entirely on a site that looks clean at a glance.",
      ],
      roles: [{ role: "prep-team", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice, consistent with published preparation techniques. The centrifugal technique is long-established convention rather than a directly tested variable in veterinary patients.",
      references: ["osuna-1990"],
    },
    {
      id: "antiseptic-selection",
      title: "Antiseptic selection",
      summary:
        "Choose one agent, document why, and make sure the whole team uses it the same way.",
      recommendedAction:
        "Select a documented antiseptic agent for the practice, record the rationale and any patient-specific exceptions, and make the choice and its technique explicit in the written protocol.",
      implementationSteps: [
        "Decide on a primary agent and record it in the written protocol along with its required technique and contact time.",
        "Document exceptions — open wounds, mucous membranes, ophthalmic and neural tissue, neonates — and what to use instead.",
        "Note any patient-specific contraindications, such as known reaction to an agent, in the record before preparation.",
        "Do not mix or sequence agents in ways the manufacturers do not describe.",
        "Review the choice periodically rather than treating it as fixed.",
      ],
      commonFailurePoints: [
        "Different staff using different agents depending on what is to hand.",
        "An agent selected for the practice but no written statement of technique or contact time, so application varies.",
        "Agents combined without a basis for the combination.",
      ],
      roles: [
        { role: "surgeon", responsibility: "primary" },
        { role: "practice-leadership", responsibility: "oversight" },
        { role: "prep-team", responsibility: "supporting" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Human trial and systematic review evidence compares chlorhexidine-alcohol with povidone-iodine formulations, with results that vary by formulation, procedure and outcome definition. Extrapolation to veterinary patients and to haired skin is not direct, and VetSSI does not recommend one agent over another on the strength of this evidence. What matters most here is that the practice makes a documented choice and applies it consistently.",
      references: ["darouiche-2010", "dumville-2015", "aorn-skin-antisepsis"],
    },
    {
      id: "antiseptic-application",
      title: "Antiseptic application technique",
      summary:
        "Apply the agent the way its instructions require, not the way habit requires.",
      recommendedAction:
        "Apply the selected antiseptic using the technique specified for that product, covering the whole clipped field, and without returning to an area already treated.",
      implementationSteps: [
        "Read and follow the product's stated application method; scrub-and-rinse and paint-on products are not applied the same way.",
        "Cover the entire clipped area, not only the area around the planned incision.",
        "Work from the incision line outwards and discard each swab at the periphery.",
        "Use a fresh applicator for each cycle where the product calls for repeated cycles.",
        "Keep the final application within the field; do not let a used applicator return to the centre.",
      ],
      commonFailurePoints: [
        "Applying a product with the technique learned for a different product.",
        "Treating only the area near the incision, so extension of the field exposes untreated skin.",
        "Returning to the centre with a peripheral swab.",
      ],
      roles: [{ role: "prep-team", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. Application technique is specified by manufacturers and reflected in perioperative guidance, but has not been isolated as a variable in veterinary outcome studies.",
      references: ["aorn-skin-antisepsis", "osuna-1990"],
      media: [
        {
          kind: "video",
          caption:
            "Centrifugal application technique and handling of used swabs.",
          status: "planned",
        },
      ],
    },
    {
      id: "contact-time",
      title: "Required contact and drying time",
      summary:
        "An antiseptic that has not had its contact time has not done its job.",
      recommendedAction:
        "Observe the contact time the product requires, and allow alcohol-containing preparations to dry completely before draping.",
      implementationSteps: [
        "Write the required contact time for the selected product into the protocol and onto any prep-area poster.",
        "Time the contact period rather than estimating it; use a visible timer in the prep area.",
        "Allow alcohol-based preparations to dry fully — do not fan, wipe or blot them dry.",
        "Build the contact and drying time into the theatre schedule so it is not the step that absorbs delay.",
        "Do not begin draping until drying is complete.",
      ],
      commonFailurePoints: [
        "Contact time shortened because the theatre is waiting.",
        "Alcohol preparation wiped off or covered while still wet.",
        "Contact time known by senior staff but not written down anywhere.",
      ],
      roles: [
        { role: "prep-team", responsibility: "primary" },
        { role: "surgeon", responsibility: "oversight" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Antiseptic efficacy is contact-time dependent, which is established in laboratory and product testing. The clinical consequence of a shortened contact time in veterinary surgery has not been directly quantified. Note also that a wet alcohol preparation under drapes is a diathermy fire risk, which is a separate and immediate safety reason to allow drying.",
      references: ["mcdonnell-1999", "aorn-skin-antisepsis"],
    },
    {
      id: "final-sterile-prep",
      title: "Final sterile preparation",
      summary:
        "The last application is made by a sterile operator, in the theatre, before draping.",
      recommendedAction:
        "Perform the final antiseptic application with sterile gloves and sterile materials once the patient is positioned in theatre, immediately before draping.",
      implementationSteps: [
        "Position the patient first, then perform the final preparation, so positioning cannot disturb it.",
        "Use sterile gloves and sterile swabs or applicators for this application.",
        "Work outwards from the incision line as before.",
        "Inspect the field one final time for missed hair, soiling or skin damage.",
        "Move directly to draping once drying is complete.",
      ],
      commonFailurePoints: [
        "Final preparation done before positioning, so the site is dragged across the table.",
        "Non-sterile gloves used for the final application.",
        "A gap between final preparation and draping during which the site is left exposed and unattended.",
      ],
      roles: [
        { role: "scrub-team", responsibility: "primary" },
        { role: "prep-team", responsibility: "supporting" },
        { role: "surgeon", responsibility: "oversight" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice, consistent with perioperative guidance. Not isolated as a variable in veterinary outcome studies.",
      references: ["aorn-skin-antisepsis", "aorn-sterile-technique"],
    },
    {
      id: "transfer-protection",
      title: "Protection during transfer",
      summary:
        "A prepared site can be recontaminated in the seconds it takes to move the patient.",
      recommendedAction:
        "Protect the prepared site during transfer from the preparation area to the theatre, and treat any contact with a non-sterile surface as a reason to repeat preparation.",
      implementationSteps: [
        "Cover the prepared site for transfer, or plan the transfer so that nothing contacts it.",
        "Use a clean trolley surface and clean bedding for the transfer; do not move the patient onto the trolley it was clipped on.",
        "Assign enough people to the lift that the patient does not need to be dragged or rested against a handler.",
        "Keep the prepared site uppermost and away from handlers' clothing.",
        "If the site contacts a non-sterile surface, say so and repeat the preparation rather than proceeding.",
      ],
      commonFailurePoints: [
        "The prepared site pressed against the handler's scrubs during the lift.",
        "Transfer on the same hair-covered surface used for clipping.",
        "Contact noticed but not declared, because repeating preparation would delay the list.",
      ],
      roles: [
        { role: "prep-team", responsibility: "primary" },
        { role: "anaesthesia-team", responsibility: "supporting" },
        { role: "surgical-team", responsibility: "supporting" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. Recontamination during transfer is a recognised practical problem but has not been quantified in the veterinary literature.",
    },
    {
      id: "positioning",
      title: "Patient positioning",
      summary:
        "Position for the procedure and for the field, before the final preparation.",
      recommendedAction:
        "Position and secure the patient before the final antiseptic application, so that the prepared field is not disturbed and the surgeon has the access the procedure requires.",
      implementationSteps: [
        "Confirm the intended position and the planned incision with the surgeon before securing the patient.",
        "Secure the patient so that it cannot shift during the procedure.",
        "Check that positioning aids, ties and cables are clear of the clipped field.",
        "Confirm that padding and support protect pressure points and peripheral nerves.",
        "Confirm the field is still adequate for the planned approach and any likely extension.",
      ],
      commonFailurePoints: [
        "Repositioning after the final preparation and draping, which breaks the field.",
        "Ties or cables crossing the clipped margin.",
        "A position that suits the prep team but restricts the surgeon's access.",
      ],
      roles: [
        { role: "prep-team", responsibility: "primary" },
        { role: "anaesthesia-team", responsibility: "supporting" },
        { role: "surgeon", responsibility: "oversight" },
      ],
      evidenceLevel: "consensus",
      evidenceNote:
        "Good surgical practice. Positioning guidance in the perioperative literature is driven mainly by pressure-injury and nerve-injury prevention rather than by infection outcomes.",
      references: ["aorn-positioning"],
    },
    {
      id: "body-temperature",
      title: "Maintenance of body temperature",
      summary:
        "Preparation is one of the points at which patients lose most heat.",
      recommendedAction:
        "Monitor temperature from induction and actively maintain normothermia through preparation, transfer and the procedure.",
      implementationSteps: [
        "Measure temperature at induction and record it through the procedure rather than only at recovery.",
        "Limit the volume of antiseptic and rinse solution left on the patient, and dry surrounding areas.",
        "Use active warming from induction rather than starting it once the patient is already cold.",
        "Insulate the patient during transfer between preparation area and theatre.",
        "Record intraoperative temperatures so cooling trends are visible while they can still be corrected.",
      ],
      commonFailurePoints: [
        "Warming started in recovery, after the heat has already been lost.",
        "Patient left wet after preparation.",
        "Temperature measured at induction and again at recovery, with nothing in between.",
      ],
      roles: [
        { role: "anaesthesia-team", responsibility: "primary" },
        { role: "prep-team", responsibility: "supporting" },
      ],
      evidenceLevel: "moderate",
      evidenceNote:
        "Perioperative hypothermia has been associated with adverse postoperative outcomes including wound infection in both human and veterinary studies. The strength of the association in veterinary surgery, and how much of it is modifiable, is less well established than in human surgery.",
      references: ["beal-2000"],
    },
  ],
  checklist: [
    {
      id: "pp-1",
      label: "Clipping was done outside the theatre, after induction",
      practiceId: "clipping-timing",
    },
    {
      id: "pp-2",
      label: "Clipped margin covers the incision and any likely extension",
      practiceId: "clipping-technique",
    },
    {
      id: "pp-3",
      label: "Skin inspected after clipping; any damage reported to the surgeon",
      practiceId: "clipping-technique",
    },
    {
      id: "pp-4",
      label: "Clipper blade was cleaned and disinfected before this patient",
      practiceId: "clipper-hygiene",
    },
    {
      id: "pp-5",
      label: "Gloves changed and hands decontaminated between dirty and clean phases",
      practiceId: "hand-glove-precautions",
    },
    {
      id: "pp-6",
      label: "Loose hair and gross debris removed by suction",
      practiceId: "hair-debris-removal",
    },
    {
      id: "pp-7",
      label: "Initial clean worked outwards from the incision line",
      practiceId: "initial-skin-cleaning",
    },
    {
      id: "pp-8",
      label: "Antiseptic applied by the technique that product requires",
      practiceId: "antiseptic-application",
    },
    {
      id: "pp-9",
      label: "Contact time observed and timed",
      note: "Record the product's required time on the prep-area poster.",
      practiceId: "contact-time",
    },
    {
      id: "pp-10",
      label: "Alcohol-based preparation fully dry before draping",
      note: "Also a diathermy fire precaution.",
      practiceId: "contact-time",
    },
    {
      id: "pp-11",
      label: "Patient positioned and secured before final preparation",
      practiceId: "positioning",
    },
    {
      id: "pp-12",
      label: "Final application made with sterile gloves and sterile materials",
      practiceId: "final-sterile-prep",
    },
    {
      id: "pp-13",
      label: "Prepared site protected during transfer; no contact declared",
      practiceId: "transfer-protection",
    },
    {
      id: "pp-14",
      label: "Active warming in place and temperature being recorded",
      practiceId: "body-temperature",
    },
  ],
  evidenceSummary:
    "Patient preparation rests on a mixture of evidence types. Clipping rather than shaving for hair removal is supported by human systematic review evidence. Antiseptic agent comparisons come largely from human trials whose results vary by formulation and outcome definition, and do not translate directly to haired veterinary patients. Most of the remaining practices in this protocol — technique, sequence, glove changes, transfer protection — are good surgical practice supported by mechanistic reasoning and perioperative guidance rather than by veterinary outcome data. VetSSI's position is that consistency of a documented process matters more here than the choice between reasonable agents.",
  evidenceLevel: "moderate",
  evidenceLimitations: [
    "The optimal interval between clipping and incision has not been established in veterinary patients.",
    "Antiseptic comparisons are dominated by human trials in non-haired skin; extrapolation is indirect.",
    "Required contact times come from product testing rather than from clinical outcome studies.",
    "The contribution of clipper hygiene to infection rates has not been quantified.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    {
      id: "pp-a1",
      question: "Is there a current written patient preparation protocol that names the antiseptic agent, its technique and its contact time?",
      lookFor:
        "A document in the prep area, dated, naming a specific product rather than a category.",
    },
    {
      id: "pp-a2",
      question: "Can prep staff describe the expected sequence without referring to the document?",
      lookFor:
        "Ask two members of staff separately and compare their answers with each other and with the protocol.",
    },
    {
      id: "pp-a3",
      question: "Is the contact time actually observed?",
      lookFor:
        "Observe several preparations with a watch. Note whether a timer is used and what happens when theatre is waiting.",
    },
    {
      id: "pp-a4",
      question: "Are gloves changed between the dirty and clean phases?",
      lookFor:
        "Direct observation. This is one of the most reliable indicators of whether the written protocol is being followed.",
    },
    {
      id: "pp-a5",
      question: "Is the prepared site protected during transfer to theatre?",
      lookFor:
        "Watch a transfer. Note what the site contacts and whether anyone comments if it contacts something.",
    },
    {
      id: "pp-a6",
      question: "Are clipping time and intraoperative temperatures recorded?",
      lookFor:
        "Review a sample of recent records for both fields rather than asking whether they are recorded.",
    },
  ],
  relatedProtocols: [
    "patient-assessment-planning",
    "surgical-field-isolation",
    "surgical-team-preparation",
    "operating-theatre-preparation",
  ],
  resources: [
    "poster-patient-prep",
    "video-patient-prep",
    "laminated-checklist-set",
  ],
  references: [
    "tanner-2011-hair",
    "dumville-2015",
    "darouiche-2010",
    "osuna-1990",
    "mcdonnell-1999",
    "beal-2000",
    "who-hand-hygiene-2009",
    "pittet-2000",
    "mangram-1999",
    "aorn-skin-antisepsis",
    "aorn-positioning",
    "aorn-sterile-technique",
  ],
  glossaryTerms: ["aseptic-technique", "contamination", "sterile-field"],
};
