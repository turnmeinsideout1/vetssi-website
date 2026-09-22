import type { GlossaryTerm } from "./types";
import { SOURCE } from "@/data/ssi-definitions";

// Terms whose definitions come from the 2026 AJVR consensus are attributed to
// it and link into the preserved SSI Definitions Framework. Everything else is
// VetSSI editorial wording describing how the term is used on this site.

const CONSENSUS = `${SOURCE.shortCitation}`;

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "surgical-site-infection",
    term: "Surgical site infection (SSI)",
    definition:
      "An infection occurring at or near a surgical incision, within a defined surveillance period after the procedure. The consensus framework subdivides it by the deepest tissue layer involved.",
    source: CONSENSUS,
    href: "/ssi-definitions/core/surgical-site-infection",
  },
  {
    slug: "superficial-incisional-ssi",
    term: "Superficial incisional SSI",
    definition:
      "Infection involving only the skin and subcutaneous tissue of the incision.",
    source: CONSENSUS,
    href: "/ssi-definitions/core/superficial-incisional-ssi",
  },
  {
    slug: "deep-incisional-ssi",
    term: "Deep incisional SSI",
    definition:
      "Infection involving the deep soft tissues of the incision, such as fascia and muscle layers.",
    source: CONSENSUS,
    href: "/ssi-definitions/core/deep-incisional-ssi",
  },
  {
    slug: "organ-space-ssi",
    term: "Organ / bone / space SSI",
    definition:
      "Infection involving any part of the anatomy opened or manipulated during the procedure, other than the incised layers themselves.",
    source: CONSENSUS,
    href: "/ssi-definitions/core/organ-bone-space-ssi",
  },
  {
    slug: "implant-associated-infection",
    term: "Implant-associated infection",
    definition:
      "Infection involving an implanted device, in which the implant surface itself is part of the infection.",
    source: CONSENSUS,
    href: "/ssi-definitions/core/implant-associated-infection",
  },
  {
    slug: "surgical-wound-classification",
    term: "Surgical wound classification (SWC)",
    definition:
      "The classification of a surgical wound as clean, clean-contaminated, contaminated or dirty, based on the degree of contamination expected or encountered during the procedure.",
    source: CONSENSUS,
    href: "/ssi-definitions/wound-classification",
  },
  {
    slug: "surveillance-period",
    term: "Surveillance period",
    definition:
      "The defined window after surgery during which an infection at the surgical site is counted as a surgical site infection for surveillance purposes.",
    source: CONSENSUS,
    href: "/ssi-definitions/surveillance",
  },
  {
    slug: "contamination",
    term: "Contamination",
    definition:
      "The presence of bacteria at the surgical site without established growth or host response. Contamination is not infection, and most contamination does not become infection.",
    href: "/ssi-definitions/wound-classification",
  },
  {
    slug: "colonisation",
    term: "Colonisation",
    definition:
      "Bacteria multiplying at a site without provoking a host inflammatory response or clinical signs.",
    href: "/ssi-definitions/wound-classification",
  },
  {
    slug: "antimicrobial-prophylaxis",
    term: "Antimicrobial prophylaxis",
    definition:
      "Antimicrobial given to reduce the risk of infection in a procedure where infection is not already present. It is an adjunct to aseptic practice, not a substitute for it.",
    href: "/protocols/antimicrobial-prophylaxis",
  },
  {
    slug: "antimicrobial-stewardship",
    term: "Antimicrobial stewardship",
    definition:
      "Coordinated effort to use antimicrobials only where indicated, at an appropriate agent, dose and duration, in order to preserve their effectiveness.",
    href: "/protocols/postoperative-wound-care",
  },
  {
    slug: "aseptic-technique",
    term: "Aseptic technique",
    definition:
      "The set of practices intended to prevent microorganisms reaching a susceptible site. It reduces risk; it does not produce a sterile patient or guarantee a sterile field.",
    href: "/protocols/aseptic-or-behaviour",
  },
  {
    slug: "sterile-field",
    term: "Sterile field",
    definition:
      "The draped area, instrument tables and gowned team members that are maintained free of contaminating microorganisms for the duration of the procedure.",
    href: "/protocols/surgical-field-isolation",
  },
  {
    slug: "drape-lift",
    term: "Drape lift",
    definition:
      "Separation of an adhesive or incisional drape from the skin during a procedure, which re-exposes skin flora at the wound margin.",
    href: "/protocols/surgical-field-isolation#practice-drape-lift",
  },
  {
    slug: "strike-through",
    term: "Strike-through",
    definition:
      "Passage of fluid through a drape, gown or wrapper, creating a continuous moist route between a non-sterile surface and the sterile field.",
    href: "/protocols/surgical-field-isolation",
  },
  {
    slug: "biofilm",
    term: "Biofilm",
    definition:
      "A structured community of bacteria attached to a surface within a self-produced matrix. Biofilm on an implant is substantially harder to clear than free-floating bacteria.",
    href: "/protocols/instruments-implant-protection",
  },
  {
    slug: "dead-space",
    term: "Dead space",
    definition:
      "A potential cavity left within a closed wound, which can fill with fluid and support bacterial growth.",
    href: "/protocols/surgical-technique-lavage-closure",
  },
  {
    slug: "immediate-use-steam-sterilisation",
    term: "Immediate-use steam sterilisation",
    definition:
      "Sterilisation of an unwrapped item for immediate use in an ongoing procedure. It is an exception process for unforeseen need, not a substitute for adequate instrument inventory.",
    href: "/protocols/instruments-implant-protection",
  },
  {
    slug: "near-miss",
    term: "Near miss",
    definition:
      "An event that could have caused a breach in asepsis or patient harm but did not, either by chance or because it was caught. Near misses are the most informative events a practice can record.",
    href: "/protocols/audit-review-improvement",
  },
  {
    slug: "denominator",
    term: "Denominator",
    definition:
      "The total number of procedures against which infections are counted. An SSI rate without a reliable denominator cannot be interpreted or compared.",
    href: "/protocols/ssi-surveillance",
  },
  {
    slug: "surveillance-effect",
    term: "Surveillance effect",
    definition:
      "The apparent rise in a practice's SSI rate when surveillance begins or improves. It usually reflects better detection rather than worse care, and it is expected.",
    href: "/ssi-definitions/surveillance",
  },
  {
    slug: "protocol",
    term: "Protocol (as used on this site)",
    definition:
      "One of the twelve coordinated areas of the prevention pathway. A protocol states a standard and contains the individual practices that meet it.",
    href: "/mosaic",
  },
  {
    slug: "practice",
    term: "Practice (as used on this site)",
    definition:
      "A single recommended action within a protocol — something an identified person does at an identified moment, which can be observed and audited.",
    href: "/mosaic",
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getGlossaryTerms(slugs: string[] = []): GlossaryTerm[] {
  return slugs
    .map((s) => getGlossaryTerm(s))
    .filter((t): t is GlossaryTerm => Boolean(t));
}
