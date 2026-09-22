import type { MosaicTile } from "./types";

// The tiles of the Mosaic. Each names an area of surgical care that can
// contribute to surgical site infection risk, and the protocols that apply
// controls to it. Prose here is adapted from the VetSSI V1 contamination
// pathways content.

export const mosaicTiles: MosaicTile[] = [
  {
    slug: "patient-health",
    name: "Patient health",
    contribution:
      "The patient arrives carrying its own flora and its own defences. Skin disease, endocrine disease, obesity, immunosuppression and prior resistant infection all change how much bacterial burden is present and how well the tissue can deal with it.",
    protocols: ["patient-assessment-planning", "antimicrobial-prophylaxis"],
  },
  {
    slug: "patient-preparation",
    name: "Patient preparation",
    contribution:
      "Skin cannot be sterilised. Clipping, cleaning and antisepsis reduce the bacterial burden at the site and avoid creating new damage, but the reduction is partial and can be undone by recontamination during transfer and positioning.",
    protocols: ["patient-preparation"],
  },
  {
    slug: "surgical-team",
    name: "Surgical team discipline",
    contribution:
      "People shed bacteria continuously from skin and respiratory tract, and hands, gloves and attire are direct routes to the wound. Preparation sets the starting condition; discipline determines whether it holds.",
    protocols: ["surgical-team-preparation", "aseptic-or-behaviour"],
  },
  {
    slug: "theatre-environment",
    name: "Operating theatre environment",
    contribution:
      "Air, surfaces, traffic and room turnover determine the microbial burden surrounding the sterile field. Environmental contamination is largely invisible, which makes it easy to stop controlling.",
    protocols: ["operating-theatre-preparation", "aseptic-or-behaviour"],
  },
  {
    slug: "field-isolation",
    name: "Surgical field isolation",
    contribution:
      "Drapes separate the operative site from the residual flora that antisepsis did not remove and from the surrounding environment. A barrier only protects while it is intact and while the team is willing to declare it when it is not.",
    protocols: ["surgical-field-isolation"],
  },
  {
    slug: "instruments-implants",
    name: "Instrument and implant protection",
    contribution:
      "Anything that enters the wound can carry bacteria into it. Implants are a particular concern because they present a surface on which bacteria can adhere and form biofilm, which is difficult to clear once established.",
    protocols: ["instruments-implant-protection"],
  },
  {
    slug: "surgical-technique",
    name: "Surgical technique",
    contribution:
      "Technique determines whether contamination that does reach the wound can establish itself. Tissue trauma, poor perfusion, haematoma, dead space and prolonged operative time all make the wound more permissive.",
    protocols: ["surgical-technique-lavage-closure"],
  },
  {
    slug: "intraoperative-adjuncts",
    name: "Intraoperative adjuncts",
    contribution:
      "Prophylaxis, lavage, vascular access and medication handling can reduce risk when used correctly and introduce it when they are not. They depend on timing and on aseptic handling, and none of them substitutes for the barriers around them.",
    protocols: [
      "antimicrobial-prophylaxis",
      "surgical-technique-lavage-closure",
    ],
  },
  {
    slug: "postoperative-care",
    name: "Postoperative care",
    contribution:
      "The incision stays vulnerable through early healing, in a ward and then a home that are not controlled environments. Self-trauma, dressing contamination and delayed recognition are the dominant risks in this window.",
    protocols: ["postoperative-wound-care"],
  },
  {
    slug: "surveillance-improvement",
    name: "Surveillance and improvement",
    contribution:
      "A practice that does not measure its surgical site infection rate cannot tell whether any of the other tiles are working. Surveillance and audit are what turn a set of recommendations into a system that can be corrected.",
    protocols: ["ssi-surveillance", "audit-review-improvement"],
  },
];

export function getMosaicTile(slug: string): MosaicTile | undefined {
  return mosaicTiles.find((t) => t.slug === slug);
}
