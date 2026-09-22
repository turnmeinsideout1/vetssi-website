import type { Reference } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Reference library
//
// EDITORIAL POLICY
//
// Every entry below with status "unverified" was carried forward from VetSSI
// V1. The bibliographic details have NOT been re-checked against the source as
// part of the V2 rebuild, and no entry here has been newly authored. Until an
// entry is checked against the published article, the site displays it with a
// visible "pending verification" marker and does not use it to justify an
// evidence rating.
//
// Only sources whose full record is held in this repository and resolves to a
// live, open URL are marked "verified".
//
// Three V1 entries were not citations at all ("Implant contamination during
// surgery is well documented", "Biofilm formation occurs rapidly on implant
// surfaces", "Even low bacterial loads may lead to infection in orthopedic
// procedures"). They were statements, not sources, and have been dropped
// rather than carried forward. See MIGRATION.md.
// ─────────────────────────────────────────────────────────────────────────────

export const references: Reference[] = [
  // ── Verified ───────────────────────────────────────────────────────────────
  {
    id: "verwilghen-2026",
    citation:
      "Verwilghen DR, Pelosi A, Abbas M, et al. Surgical site infection definitions consensus: a first step toward improving prevention in veterinary medicine. American Journal of Veterinary Research. 2026.",
    doi: "10.2460/ajvr.25.03.0099",
    url: "https://avmajournals.avma.org/view/journals/ajvr/87/3/ajvr.25.03.0099.xml",
    status: "verified",
    note: "Open Access (CC BY-NC). The source for the VetSSI SSI Definitions Framework.",
  },

  // ── Carried from V1 — pending verification ─────────────────────────────────
  {
    id: "mangram-1999",
    citation:
      "Mangram AJ, et al. Guideline for prevention of surgical site infection, 1999. Infection Control and Hospital Epidemiology. 1999;20(4):250–278.",
    doi: "10.1086/501620",
    status: "unverified",
  },
  {
    id: "berrios-torres-2017",
    citation:
      "Berríos-Torres SI, et al. Centers for Disease Control and Prevention guideline for the prevention of surgical site infection, 2017. JAMA Surgery. 2017;152(8):784–791.",
    doi: "10.1001/jamasurg.2017.0904",
    status: "unverified",
  },
  {
    id: "horan-1992",
    citation:
      "Horan TC, et al. CDC definitions of nosocomial surgical site infections, 1992. Infection Control and Hospital Epidemiology. 1992;13(10):606–608.",
    doi: "10.1086/646354",
    status: "unverified",
    note: "V1 held two records for this paper with conflicting DOIs (the other was 10.1086/646955).",
  },
  {
    id: "nicholson-2002",
    citation:
      "Nicholson M, et al. Risk factors for surgical site infection in veterinary patients. Veterinary Surgery. 2002;31(3):228–233.",
    doi: "10.1053/jvet.2002.31617",
    status: "unverified",
  },
  {
    id: "eugster-2004",
    citation:
      "Eugster S, Schawalder P, Gaschen F, Boerlin P. A prospective study of postoperative surgical site infections in dogs and cats. Veterinary Surgery. 2004;33(5):542–550.",
    doi: "10.1111/j.1532-950X.2004.04076.x",
    status: "unverified",
  },
  {
    id: "turk-2015",
    citation:
      "Turk R, Singh A, Weese JS. Prospective surgical site infection surveillance in dogs. Veterinary Surgery. 2015;44(8):915–921.",
    doi: "10.1111/vsu.12375",
    status: "unverified",
    note: "V1 held two records for this paper under different titles; volume, pages and DOI require checking against the source.",
  },
  {
    id: "nelson-2011",
    citation:
      "Nelson LL. Surgical site infections in small animal surgery. Veterinary Clinics of North America: Small Animal Practice. 2011;41(5):1041–1056.",
    doi: "10.1016/j.cvsm.2011.05.010",
    status: "unverified",
  },
  {
    id: "weese-2008",
    citation:
      "Weese JS. A review of post-operative infections in veterinary orthopaedic surgery. Veterinary and Comparative Orthopaedics and Traumatology. 2008;21(2):99–105.",
    doi: "10.3415/VCOT-07-02-0017",
    status: "unverified",
    note: "V1 held two records for this paper with conflicting DOIs (the other was 10.3415/VCOT-06-11-0093). Which is correct has not been established.",
  },
  {
    id: "osuna-1990",
    citation:
      "Osuna DJ, DeYoung DJ, Walker RL. Comparison of three skin preparation techniques in the dog. Veterinary Surgery. 1990;19(1):14–19.",
    doi: "10.1111/j.1532-950X.1990.tb01136.x",
    status: "unverified",
  },
  {
    id: "tanner-2011-hair",
    citation:
      "Tanner J, Norrie P, Melen K. Preoperative hair removal to reduce surgical site infection. Cochrane Database of Systematic Reviews. 2011;(11):CD004122.",
    doi: "10.1002/14651858.CD004122.pub4",
    status: "unverified",
  },
  {
    id: "dumville-2015",
    citation:
      "Dumville JC, McFarlane E, Edwards P, et al. Preoperative skin antiseptics for preventing surgical wound infections after clean surgery. Cochrane Database of Systematic Reviews. 2015;(4):CD003949.",
    doi: "10.1002/14651858.CD003949.pub4",
    status: "unverified",
  },
  {
    id: "darouiche-2010",
    citation:
      "Darouiche RO, Wall MJ, Itani KMF, et al. Chlorhexidine–alcohol versus povidone–iodine for surgical-site antisepsis. New England Journal of Medicine. 2010;362(1):18–26.",
    doi: "10.1056/NEJMoa0810988",
    status: "unverified",
  },
  {
    id: "mcdonnell-1999",
    citation:
      "McDonnell G, Russell AD. Antiseptics and disinfectants: activity, action, and resistance. Clinical Microbiology Reviews. 1999;12(1):147–179.",
    doi: "10.1128/CMR.12.1.147",
    status: "unverified",
  },
  {
    id: "beal-2000",
    citation:
      "Beal MW, et al. The association between perioperative hypothermia and adverse outcomes in dogs undergoing soft tissue surgery. Journal of the American Animal Hospital Association. 2000;36(6):533–542.",
    doi: "10.5326/15473317-36-6-533",
    status: "unverified",
  },
  {
    id: "who-hand-hygiene-2009",
    citation:
      "World Health Organization. WHO Guidelines on Hand Hygiene in Health Care. Geneva: World Health Organization; 2009.",
    status: "unverified",
  },
  {
    id: "who-safe-surgery-2009",
    citation:
      "World Health Organization. WHO Guidelines on Safe Surgery: Safe Surgery Saves Lives. Geneva: World Health Organization; 2009.",
    status: "unverified",
  },
  {
    id: "pittet-2000",
    citation:
      "Pittet D, Hugonnet S, Harbarth S, et al. Effectiveness of a hospital-wide programme to improve compliance with hand hygiene. The Lancet. 2000;356(9238):1307–1312.",
    doi: "10.1016/S0140-6736(00)02814-2",
    status: "unverified",
  },
  {
    id: "tanner-2006-gloves",
    citation:
      "Tanner J, Parkinson H. Double gloving to reduce surgical cross-infection. Cochrane Database of Systematic Reviews. 2006;(3):CD003087.",
    status: "unverified",
  },
  {
    id: "webster-2015-drapes",
    citation:
      "Webster J, Alghamdi A. Use of plastic adhesive drapes during surgery for preventing surgical site infection. Cochrane Database of Systematic Reviews. 2015;(4):CD006353.",
    doi: "10.1002/14651858.CD006353.pub4",
    status: "unverified",
    note: "V1 attributed this same DOI to two different author sets (also to Tanner J, et al.); the attribution requires checking.",
  },
  {
    id: "pryor-2010",
    citation:
      "Pryor F, et al. The effect of traffic patterns in the OR on surgical site infections. AORN Journal. 2010;91(6):762–794.",
    doi: "10.1016/j.aorn.2010.02.014",
    status: "unverified",
  },
  {
    id: "stocks-2010",
    citation:
      "Stocks GW, et al. Predicting bacterial populations based on airborne particulates: a study performed in nonlaminar flow operating rooms during joint arthroplasty surgery. American Journal of Infection Control. 2010;38(3):199–204.",
    status: "unverified",
  },
  {
    id: "haynes-2009",
    citation:
      "Haynes AB, Weiser TG, Berry WR, et al. A surgical safety checklist to reduce morbidity and mortality in a global population. New England Journal of Medicine. 2009;360(5):491–499.",
    doi: "10.1056/NEJMsa0810119",
    status: "unverified",
  },
  {
    id: "gillespie-2014",
    citation:
      "Gillespie BM, Chaboyer W, Erichsen-Andersson A, et al. Reducing the risk of surgical site infection using a multidisciplinary approach: an integrative review. International Journal of Nursing Studies. 2014;51(3):375–383.",
    doi: "10.1016/j.ijnurstu.2013.06.002",
    status: "unverified",
  },
  {
    id: "reason-2000",
    citation:
      "Reason J. Human error: models and management. BMJ. 2000;320(7237):768–770.",
    doi: "10.1136/bmj.320.7237.768",
    status: "unverified",
  },
  {
    id: "gawande-2003",
    citation:
      "Gawande AA, Zinner MJ, Studdert DM, Brennan TA. Analysis of errors reported by surgeons at three teaching hospitals. Surgery. 2003;133(6):614–621.",
    doi: "10.1067/msy.2003.169",
    status: "unverified",
  },
  {
    id: "pronovost-2006",
    citation:
      "Pronovost P, Needham D, Berenholtz S, et al. An intervention to decrease catheter-related bloodstream infections in the ICU. New England Journal of Medicine. 2006;355(26):2725–2732.",
    doi: "10.1056/NEJMoa061115",
    status: "unverified",
  },
  {
    id: "ogrady-2011",
    citation:
      "O'Grady NP, Alexander M, Burns LA, et al. Guidelines for the prevention of intravascular catheter-related infections. Clinical Infectious Diseases. 2011;52(9):e162–e193.",
    doi: "10.1093/cid/cir257",
    status: "unverified",
  },
  {
    id: "guardabassi-2010",
    citation:
      "Guardabassi L, Jensen LB, Kruse H. Optimization of antimicrobial treatment to minimize resistance selection. Veterinary Microbiology. 2010;141(1–2):9–16.",
    doi: "10.1016/j.vetmic.2009.12.018",
    status: "unverified",
  },
  {
    id: "hillier-2014",
    citation:
      "Hillier A, Lloyd DH, Weese JS, et al. Guidelines for the diagnosis and antimicrobial therapy of canine superficial bacterial folliculitis. Veterinary Dermatology. 2014;25(3):163–e43.",
    doi: "10.1111/vde.12118",
    status: "unverified",
  },
  {
    id: "weese-2011-uti",
    citation:
      "Weese JS, Blondeau JM, Boothe D, et al. Antimicrobial use guidelines for treatment of urinary tract disease in dogs and cats. Veterinary Medicine International. 2011;2011:263768.",
    doi: "10.4061/2011/263768",
    status: "unverified",
  },
  {
    id: "gallagher-2012",
    citation:
      "Gallagher AD, Mertens WD. Implant removal rate from infection after stifle joint surgery for cranial cruciate ligament rupture in dogs. Veterinary Surgery. 2012;41(8):1024–1028.",
    doi: "10.1111/j.1532-950X.2012.01049.x",
    status: "unverified",
  },
  {
    id: "atiyeh-2002",
    citation:
      "Atiyeh BS, et al. Effect of moist and dry conditions on dermal repair. Journal of Trauma. 2002;52(6):1173–1180.",
    doi: "10.1097/00005373-200206000-00023",
    status: "unverified",
  },
  {
    id: "fry-2019",
    citation:
      "Fry DE. Surgical site infections and the microbiome: an updated perspective. Infection and Drug Resistance. 2019;12:3041–3054.",
    doi: "10.2147/IDR.S179887",
    status: "unverified",
  },
  {
    id: "tobias-johnston-2018",
    citation:
      "Tobias KM, Johnston SA, eds. Veterinary Surgery: Small Animal. 2nd ed. St. Louis: Elsevier; 2018.",
    status: "unverified",
  },
  {
    id: "denny-butterworth-2000",
    citation:
      "Denny HR, Butterworth SJ. A Guide to Canine and Feline Orthopaedic Surgery. 4th ed. Oxford: Blackwell Science; 2000.",
    status: "unverified",
  },
  {
    id: "aorn-attire",
    citation:
      "AORN Guidelines for Perioperative Practice: Surgical Attire. Denver: AORN, Inc.; 2023.",
    status: "unverified",
  },
  {
    id: "aorn-sterile-technique",
    citation:
      "AORN Guidelines for Perioperative Practice: Sterile Technique. Denver: AORN, Inc.; 2023.",
    status: "unverified",
  },
  {
    id: "aorn-skin-antisepsis",
    citation:
      "AORN Guidelines for Perioperative Practice: Patient Skin Antisepsis. Denver: AORN, Inc.; 2023.",
    status: "unverified",
  },
  {
    id: "aorn-environmental-cleaning",
    citation:
      "AORN Guidelines for Perioperative Practice: Environmental Cleaning. Denver: AORN, Inc.; 2023.",
    status: "unverified",
  },
  {
    id: "aorn-sterilization",
    citation:
      "AORN Guidelines for Perioperative Practice: Instrument Cleaning and Sterilization. Denver: AORN, Inc.; 2023.",
    status: "unverified",
  },
  {
    id: "aorn-drapes",
    citation:
      "AORN Guidelines for Perioperative Practice: Surgical Drapes. Denver: AORN, Inc.; 2023.",
    status: "unverified",
  },
  {
    id: "aorn-positioning",
    citation:
      "AORN Guidelines for Perioperative Practice: Positioning the Patient. Denver: AORN, Inc.; 2023.",
    status: "unverified",
  },
  {
    id: "aorn-medication-safety",
    citation:
      "AORN Guidelines for Perioperative Practice: Medication Safety. Denver: AORN, Inc.; 2023.",
    status: "unverified",
  },
  {
    id: "aorn-counts",
    citation:
      "AORN Guidelines for Perioperative Practice: Counts of Surgical Items. Denver: AORN, Inc.; 2023.",
    status: "unverified",
  },
  {
    id: "aorn-surgical-suite",
    citation:
      "AORN Guidelines for Perioperative Practice: Design and Maintenance of the Surgical Suite. Denver: AORN, Inc.; 2023.",
    status: "unverified",
  },
  {
    id: "aorn-quality",
    citation:
      "AORN Guidelines for Perioperative Practice: Quality and Performance Improvement. Denver: AORN, Inc.; 2023.",
    status: "unverified",
  },
  {
    id: "boothe-2018-suture",
    citation:
      "Boothe HW. Suture materials, tissue adhesives, staplers, and ligating clips. In: Tobias KM, Johnston SA, eds. Veterinary Surgery: Small Animal. Elsevier; 2018.",
    status: "unverified",
  },
  {
    id: "campbell-2012-bandages",
    citation:
      "Campbell BG. Bandages and drains. In: Tobias KM, Johnston SA, eds. Veterinary Surgery: Small Animal. Elsevier Saunders; 2012:221–230.",
    status: "unverified",
  },
  {
    id: "chobin-2014",
    citation:
      "Chobin N. Surgical instrument management. Surgical Technology International. 2014;24:57–65.",
    status: "unverified",
  },
  {
    id: "merck-vet-manual",
    citation:
      "Aiello SE, ed. The Merck Veterinary Manual. 12th ed. Kenilworth, NJ: Merck; 2022. Chapter: Surgical Site Infections.",
    status: "unverified",
  },
  {
    id: "mathews-2017",
    citation:
      "Mathews KA. Veterinary Emergency and Critical Care Manual. 2nd ed. Lifelearn; 2017.",
    status: "unverified",
  },
  {
    id: "memarzadeh-2000",
    citation:
      "Memarzadeh F, Manning AP. Thermal comfort, uniformity, and ventilation effectiveness in patient rooms: performance assessment using ventilation indices. HVAC&R Research. 2000;6(1):49–68.",
    status: "unverified",
  },
  {
    id: "cdc-injection-safety",
    citation:
      "Centers for Disease Control and Prevention. Injection Safety: Healthcare-associated Infection Prevention. Atlanta: CDC; 2021.",
    status: "unverified",
  },
  {
    id: "doherty-2020",
    citation:
      "Doherty C, et al. Chlorhexidine versus povidone-iodine for surgical site antisepsis: a meta-analysis. Journal of Hospital Infection. 2020;105(1):13–22.",
    doi: "10.1016/j.jhin.2019.12.021",
    status: "unverified",
    note: "Flagged for priority checking: the V1 record could not be corroborated during migration.",
  },
  {
    id: "strom-2011",
    citation:
      "Strom BL, et al. Medication errors related to syringe reuse. Annals of Internal Medicine. 2011;155(3):184–192.",
    status: "unverified",
    note: "Flagged for priority checking: the V1 record could not be corroborated during migration.",
  },
  {
    id: "aorn-event-reporting",
    citation:
      "AORN Guidelines for Perioperative Practice: Event Reporting and Near-Miss Documentation. Denver: AORN, Inc.; 2023.",
    status: "unverified",
    note: "Flagged for priority checking: this may not correspond to a distinct published AORN guideline.",
  },
];

export const referenceById = new Map(references.map((r) => [r.id, r]));

export function getReferences(ids: string[] = []): Reference[] {
  return ids
    .map((id) => referenceById.get(id))
    .filter((r): r is Reference => Boolean(r));
}

/** Ids present in protocol content but missing from the library. Used by tests. */
export function findMissingReferences(ids: string[]): string[] {
  return ids.filter((id) => !referenceById.has(id));
}
