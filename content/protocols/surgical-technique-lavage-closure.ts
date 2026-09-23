import type { Protocol } from "../types";

export const surgicalTechniqueLavageClosure: Protocol = {
  slug: "surgical-technique-lavage-closure",
  protocolNumber: 9,
  title: "Surgical Technique, Lavage & Closure",
  shortTitle: "Technique & Closure",
  stage: "during-surgery",
  summary:
    "How tissue is handled, irrigated and closed — the factors that determine whether contamination that does reach the wound can establish itself.",
  whyItMatters: [
    "Asepsis limits how much contamination reaches the wound. Technique determines whether that contamination finds conditions in which it can grow.",
    "Devitalised tissue, haematoma, dead space and poor perfusion create exactly those conditions, and they are produced by the surgery itself.",
    "Prolonged operative time is among the more consistently reported risk factors across studies, and efficiency is a technique issue.",
  ],
  standard:
    "Tissue should be handled so as to preserve its blood supply and viability, dead space and haematoma should be managed, and the wound should be closed in a way that restores tissue layers without tension or strangulation. Where lavage is used, it should follow the instructions for the solution chosen.",
  roles: [
    { role: "surgeon", responsibility: "primary" },
    { role: "scrub-team", responsibility: "supporting" },
  ],
  reviewTimeMinutes: 10,
  reviewStatus: "draft",
  lastReviewed: null,
  practiceGroups: [
    {
      id: "tissue",
      title: "Handle tissue well",
      summary:
        "Whether contamination that does reach the wound finds conditions it can grow in.",
      practices: [
        "gentle-tissue-handling",
        "blood-supply",
        "haemostasis",
        "devitalized-tissue",
        "dead-space",
        "tissue-hydration",
      ],
    },
    {
      id: "conduct",
      title: "Conduct of the procedure",
      summary:
        "Efficiency, stability and materials — the decisions that shape the wound environment.",
      practices: [
        "procedural-efficiency",
        "stable-fixation",
        "suture-handling",
      ],
    },
    {
      id: "lavage",
      title: "Lavage",
      summary:
        "The mechanical effect is accepted; the additives are not settled. This site is product-neutral.",
      practices: [
        "mechanical-irrigation",
        "lavage-selection",
        "dwell-rinse-instructions",
      ],
    },
    {
      id: "closure",
      title: "Closure",
      summary:
        "The field is still sterile until the dressing is on.",
      practices: [
        "preclosure-contamination",
        "layered-closure",
        "closure-field-management",
      ],
    },
  ],
  practices: [
    {
      id: "gentle-tissue-handling",
      title: "Gentle tissue handling",
      summary: "Crushed tissue is tissue that cannot defend itself.",
      recommendedAction:
        "Handle tissue with appropriate instruments and minimal force, avoiding repeated grasping and crushing of tissue that will remain in the patient.",
      implementationSteps: [
        "Select instruments appropriate to the tissue rather than to what is nearest.",
        "Grasp tissue that is to be removed rather than tissue that will remain.",
        "Limit repeated handling of the same tissue.",
      ],
      commonFailurePoints: [
        "Heavy instruments used on delicate tissue.",
        "Wound edges repeatedly grasped during a long procedure.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Foundational surgical principle. Tissue trauma reducing local resistance to infection is well accepted, though not quantified as an isolated variable.",
      references: ["tobias-johnston-2018"],
    },
    {
      id: "blood-supply",
      title: "Preservation of blood supply",
      summary: "Perfused tissue resists infection; stripped tissue does not.",
      recommendedAction:
        "Preserve the blood supply to tissues that will remain, limiting periosteal stripping and soft tissue dissection to what the procedure requires.",
      implementationSteps: [
        "Plan the approach to limit soft tissue disruption.",
        "Limit periosteal stripping to the extent needed for the procedure.",
        "Preserve identifiable vascular structures where possible.",
      ],
      commonFailurePoints: [
        "Exposure extended beyond what the procedure needs, for convenience.",
        "Periosteal stripping beyond the fixation site.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Foundational surgical and orthopaedic principle. Widely accepted; not isolated in infection outcome studies.",
      references: ["denny-butterworth-2000", "tobias-johnston-2018"],
    },
    {
      id: "haemostasis",
      title: "Haemostasis",
      summary: "A haematoma is a culture medium in a closed space.",
      recommendedAction:
        "Achieve haemostasis before closure, using the least tissue-damaging method that will control the bleeding.",
      implementationSteps: [
        "Control bleeding as it occurs rather than deferring it to closure.",
        "Use the least damaging effective method; limit the extent of thermal injury.",
        "Inspect the field before closure specifically for bleeding points.",
      ],
      commonFailurePoints: [
        "Extensive electrosurgery leaving a rim of devitalised tissue.",
        "Bleeding accepted at closure on the expectation it will stop.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Foundational surgical principle. Haematoma as a substrate for bacterial growth is well accepted.",
      references: ["tobias-johnston-2018"],
    },
    {
      id: "devitalized-tissue",
      title: "Removal or management of devitalized tissue",
      summary: "It will not recover, and it supports growth.",
      recommendedAction:
        "Identify and remove devitalised tissue before closure, and reassess viability where it is uncertain.",
      implementationSteps: [
        "Assess viability by colour, bleeding and texture before closing.",
        "Remove clearly non-viable tissue.",
        "Where viability is uncertain, consider staged reassessment rather than definitive closure.",
      ],
      commonFailurePoints: [
        "Marginal tissue retained and closed over.",
        "Viability assessed at exposure rather than at closure.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote: "Foundational surgical principle, reflected in wound classification concepts.",
      references: ["tobias-johnston-2018", "verwilghen-2026"],
    },
    {
      id: "dead-space",
      title: "Dead-space management",
      summary: "Close it, drain it, or accept what fills it.",
      recommendedAction:
        "Manage dead space at closure by apposing tissue layers, and where that is not achievable, consider drainage with a clear plan for its management.",
      implementationSteps: [
        "Appose tissue layers to eliminate potential space where anatomy allows.",
        "Where a drain is used, decide in advance how it will be managed and when removed.",
        "Handle drains aseptically and record their placement and removal.",
      ],
      commonFailurePoints: [
        "Layers closed without apposition, leaving a potential cavity.",
        "A drain placed with no plan for its management.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Widely accepted surgical principle. Drain use itself is a debated topic with its own trade-offs, and no recommendation for or against routine drainage is made here.",
      references: ["campbell-2012-bandages", "tobias-johnston-2018"],
    },
    {
      id: "tissue-hydration",
      title: "Tissue hydration",
      summary: "Exposed tissue desiccates, particularly in long procedures.",
      recommendedAction:
        "Keep exposed tissue moist during prolonged procedures.",
      implementationSteps: [
        "Cover exposed tissue with moistened swabs during pauses.",
        "Irrigate periodically during long exposures.",
        "Limit unnecessary exposure time.",
      ],
      commonFailurePoints: [
        "Tissue left exposed and drying during imaging or equipment problems.",
        "Swabs allowed to dry onto tissue and then pulled away.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "scrub-team", responsibility: "supporting" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Moist wound environment is supported in the wound healing literature. Its specific effect on surgical site infection is not established.",
      references: ["atiyeh-2002"],
    },
    {
      id: "procedural-efficiency",
      title: "Procedural efficiency",
      summary: "Not speed — the absence of avoidable delay.",
      recommendedAction:
        "Reduce avoidable operative time through planning and preparation, without hurrying the surgery itself.",
      implementationSteps: [
        "Address the common causes of delay — missing equipment, unclear plan, unfamiliar instrumentation — before the case.",
        "Record actual operative times and review them.",
        "Distinguish planning delays from surgical time when reviewing.",
      ],
      commonFailurePoints: [
        "Efficiency pursued by rushing technique rather than by removing delays.",
        "Operative time not recorded, so causes of delay are never identified.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "surgical-team", responsibility: "supporting" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "Prolonged operative time is among the more consistently reported risk factors for surgical site infection in both human and veterinary studies. Whether reducing it reduces infection is a different question and has not been directly demonstrated.",
      references: ["eugster-2004", "nelson-2011", "beal-2000"],
    },
    {
      id: "stable-fixation",
      title: "Stable fixation",
      summary: "Motion at an implant interface is an infection problem.",
      recommendedAction:
        "Achieve stable fixation appropriate to the construct, since instability contributes both to mechanical failure and to persistent implant-associated infection.",
      implementationSteps: [
        "Plan the construct to the loading the patient will apply to it.",
        "Confirm stability before closure.",
        "Record any intraoperative compromise to the planned construct.",
      ],
      commonFailurePoints: [
        "Construct compromised intraoperatively and the compromise not recorded.",
        "Stability assumed rather than tested before closure.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Accepted orthopaedic principle. Implant removal following infection is reported in the veterinary literature, though the contribution of instability is not separately quantified.",
      references: ["denny-butterworth-2000", "gallagher-2012", "weese-2008"],
    },
    {
      id: "suture-handling",
      title: "Suture handling",
      summary: "Appropriate material, appropriate tension.",
      recommendedAction:
        "Select suture material appropriate to the tissue and handle it so that tissue is apposed without strangulation.",
      implementationSteps: [
        "Select material and size appropriate to the tissue and its healing time.",
        "Appose rather than constrict; tension should close the layer, not blanch it.",
        "Use the minimum number of throws and the minimum material that will hold.",
      ],
      commonFailurePoints: [
        "Sutures tied under tension, strangulating the wound edge.",
        "Excess buried material in a contaminated wound.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Standard surgical practice. Comparative evidence between suture materials for infection outcomes exists in human surgery but is not consistent, and no recommendation between materials is made here.",
      references: ["boothe-2018-suture"],
    },
    {
      id: "mechanical-irrigation",
      title: "Mechanical irrigation",
      summary: "Volume and mechanical effect, not the additive.",
      recommendedAction:
        "Irrigate to remove debris and reduce bacterial burden mechanically, using adequate volume at a pressure that does not drive contamination into tissue.",
      implementationSteps: [
        "Use adequate volume; the mechanical effect depends on it.",
        "Use a pressure appropriate to the tissue, avoiding high pressure into soft tissue planes.",
        "Irrigate before closure as well as during the procedure.",
        "Remove irrigation fluid rather than closing over a pooled volume.",
      ],
      commonFailurePoints: [
        "Small volumes used, producing no meaningful mechanical effect.",
        "High pressure driving contamination deeper.",
        "Fluid left pooled in the wound at closure.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "scrub-team", responsibility: "supporting" }],
      evidenceLevel: "moderate",
      evidenceNote:
        "The mechanical removal effect of irrigation is well accepted. Optimal volume and pressure are debated, and much of the comparative evidence comes from human surgery with inconsistent results.",
      references: ["mangram-1999", "berrios-torres-2017"],
    },
    {
      id: "lavage-selection",
      title: "Selection and use of intraoperative lavage",
      summary:
        "If an additive is used, it should be because a decision was made about it.",
      recommendedAction:
        "Decide and record whether the practice uses plain or additive-containing lavage, and where an additive is used, follow that product's instructions rather than general irrigation habit.",
      implementationSteps: [
        "State the practice's lavage position in the written protocol.",
        "Where a product is used, record what it is and why it was chosen.",
        "Confirm compatibility with the tissues involved, particularly for joints, neural tissue and open fractures.",
        "Distinguish clearly in training between general irrigation principles and product-specific instructions.",
      ],
      commonFailurePoints: [
        "Additives used by habit with no recorded rationale.",
        "Product-specific instructions applied to a different product.",
        "Tissue compatibility not considered.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "limited",
      evidenceNote:
        "Evidence on antiseptic and antibiotic lavage additives is mixed and largely from human surgery, with differing findings by agent, concentration and procedure. VetSSI takes no position on any specific lavage product and recommends only that the choice be deliberate and documented. This site is product-neutral; where a practice uses a commercial product, its instructions govern its use and should be kept distinct from these general principles.",
      references: ["mangram-1999", "berrios-torres-2017", "mcdonnell-1999"],
    },
    {
      id: "dwell-rinse-instructions",
      title: "Following product-specific dwell and rinse instructions",
      summary:
        "A product used outside its instructions is not the product that was tested.",
      recommendedAction:
        "Where a lavage or wound product specifies a dwell time, concentration or rinse step, follow those instructions exactly, and make them available in the theatre.",
      implementationSteps: [
        "Keep the product's instructions physically available where it is used.",
        "Time dwell periods rather than estimating them.",
        "Perform any specified rinse step; do not omit it.",
        "Do not extrapolate one product's instructions to another.",
      ],
      commonFailurePoints: [
        "Dwell time estimated, and usually shortened.",
        "Rinse step omitted as an unnecessary delay.",
        "Instructions known to one surgeon and not written down anywhere.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "scrub-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote:
        "Using a product according to its instructions is a general principle rather than a finding. Where a product's evidence exists, it applies to use as instructed.",
    },
    {
      id: "preclosure-contamination",
      title: "Preclosure contamination reduction",
      summary: "A deliberate pause before closing.",
      recommendedAction:
        "Pause before closure to inspect the wound for debris, devitalised tissue and bleeding, and to change gloves and instruments where the procedure has been contaminated.",
      implementationSteps: [
        "Make preclosure inspection an explicit step rather than an incidental look.",
        "Remove debris, loose suture material, hair and bone fragments.",
        "Change gloves and use clean instruments for closure after a contaminated phase.",
      ],
      commonFailurePoints: [
        "Closure started while the team is already moving on.",
        "Instruments used in a contaminated phase carried through to closure.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }, { role: "scrub-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote: "Good surgical practice. Not isolated in outcome studies.",
      references: ["mangram-1999"],
    },
    {
      id: "layered-closure",
      title: "Layered closure",
      summary: "Restore the layers, without tension.",
      recommendedAction:
        "Close tissue in anatomical layers without tension, so that each layer is apposed and no potential space remains between them.",
      implementationSteps: [
        "Identify and appose each anatomical layer.",
        "Release tension by undermining or by a tension-relieving pattern rather than pulling harder.",
        "Confirm at each layer that no space remains beneath it.",
      ],
      commonFailurePoints: [
        "Layers skipped to save time, leaving dead space.",
        "Tension managed by tighter sutures, compromising perfusion at the wound edge.",
      ],
      roles: [{ role: "surgeon", responsibility: "primary" }],
      evidenceLevel: "consensus",
      evidenceNote: "Foundational surgical principle.",
      references: ["tobias-johnston-2018", "boothe-2018-suture"],
    },
    {
      id: "closure-field-management",
      title: "Closure-field management",
      summary: "The field is still sterile until the dressing is on.",
      recommendedAction:
        "Maintain sterile discipline through closure and until the dressing is applied, rather than relaxing it once the procedure is technically complete.",
      implementationSteps: [
        "Keep drapes in place until closure is complete and the dressing applied.",
        "Keep non-sterile activity out of the room until then.",
        "Apply the initial dressing with sterile technique, before drapes are removed.",
      ],
      commonFailurePoints: [
        "Drapes removed before the dressing is applied.",
        "Cleaning and restocking started while closure is still under way.",
        "Sterile discipline relaxing as soon as the implant is in.",
      ],
      roles: [{ role: "scrub-team", responsibility: "primary" }, { role: "surgical-team", responsibility: "supporting" }],
      evidenceLevel: "consensus",
      evidenceNote: "Good surgical practice.",
      references: ["aorn-sterile-technique"],
    },
  ],
  checklist: [
    { id: "stlc-1", label: "Blood supply preserved; dissection limited to what the procedure required", practiceId: "blood-supply" },
    { id: "stlc-2", label: "Haemostasis achieved and the field inspected for bleeding points", practiceId: "haemostasis" },
    { id: "stlc-3", label: "Devitalised tissue identified and removed", practiceId: "devitalized-tissue" },
    { id: "stlc-4", label: "Exposed tissue kept moist through prolonged exposure", practiceId: "tissue-hydration" },
    { id: "stlc-5", label: "Irrigation volume adequate; fluid not left pooled", practiceId: "mechanical-irrigation" },
    { id: "stlc-6", label: "Any lavage product used per its own instructions, timed", practiceId: "dwell-rinse-instructions" },
    { id: "stlc-7", label: "Preclosure inspection performed as an explicit step", practiceId: "preclosure-contamination" },
    { id: "stlc-8", label: "Gloves and instruments changed for closure after a contaminated phase", practiceId: "preclosure-contamination" },
    { id: "stlc-9", label: "Dead space managed; layers apposed without tension", practiceId: "dead-space" },
    { id: "stlc-10", label: "Fixation stability confirmed before closure", practiceId: "stable-fixation" },
    { id: "stlc-11", label: "Dressing applied with sterile technique before drapes removed", practiceId: "closure-field-management" },
  ],
  evidenceSummary:
    "The tissue-handling principles here are foundational surgical teaching — preserve perfusion, avoid crushing, remove devitalised tissue, manage dead space, close without tension. They are near-universally accepted and almost never isolated as variables in infection outcome studies, so they sit as consensus rather than as demonstrated interventions. Prolonged operative time is the exception: it is one of the more consistently reported risk factors in both human and veterinary studies, though reducing it has not been shown to reduce infection. Lavage is the least settled area. The mechanical effect of adequate-volume irrigation is accepted; the evidence on antiseptic and antibiotic additives is mixed and mostly human, and VetSSI takes no position on any specific product. This protocol is deliberately product-neutral.",
  evidenceLevel: "consensus",
  evidenceLimitations: [
    "Tissue-handling principles are universally taught but almost never isolated as variables against infection outcomes.",
    "Evidence on lavage additives is mixed, largely human, and varies by agent, concentration and procedure.",
    "Operative time is an established risk marker, but reducing it has not been shown to reduce infection.",
    "Comparative suture material evidence is inconsistent and no recommendation is made.",
    "This protocol has not yet completed expert and reference review.",
  ],
  auditQuestions: [
    { id: "stlc-a1", question: "Is operative time recorded, and has anyone looked at what drives the long cases?", lookFor: "Recorded times, and any analysis distinguishing planning delay from surgical time." },
    { id: "stlc-a2", question: "Has the practice made and written down a deliberate decision about lavage?", lookFor: "A written position. Habit with no recorded rationale is the finding." },
    { id: "stlc-a3", question: "Are product instructions for any lavage or wound product available in the theatre?", lookFor: "Look for them physically. Ask the scrub team for the dwell time." },
    { id: "stlc-a4", question: "Is preclosure inspection a distinct step, or does closure just begin?", lookFor: "Direct observation of several procedures." },
    { id: "stlc-a5", question: "Are gloves and instruments changed for closure after contaminated phases?", lookFor: "Direct observation, particularly on contaminated cases." },
    { id: "stlc-a6", question: "Is the dressing applied before the drapes come off?", lookFor: "Observe the end of several procedures." },
  ],
  relatedProtocols: ["surgical-field-isolation", "instruments-implant-protection", "postoperative-wound-care", "antimicrobial-prophylaxis"],
  resources: ["evidence-summaries", "printable-protocol-pack"],
  references: ["tobias-johnston-2018", "denny-butterworth-2000", "boothe-2018-suture", "campbell-2012-bandages", "atiyeh-2002", "eugster-2004", "nelson-2011", "beal-2000", "mangram-1999", "berrios-torres-2017", "mcdonnell-1999", "gallagher-2012", "weese-2008", "aorn-sterile-technique", "verwilghen-2026"],
  glossaryTerms: ["dead-space", "contamination", "sterile-field"],
};
