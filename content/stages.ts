import type { Stage, StageSlug } from "./types";

export const stages: Stage[] = [
  {
    slug: "before-surgery",
    order: 1,
    title: "Before Surgery",
    shortTitle: "Before",
    tagline:
      "Decisions and preparation made before the incision set the ceiling on how safe the procedure can be.",
    intro:
      "Most of what determines surgical site infection risk is decided before the first incision. This stage covers how the patient is assessed and the case planned, how antimicrobial prophylaxis is decided and delivered, how the patient and the surgical team are prepared, and how the operating theatre is made ready. Work done here cannot be recovered later: a patient operated on with untreated skin disease, an antibiotic given too late, or a theatre that was never properly prepared cannot be corrected once the procedure is under way.",
    kind: "sequential",
  },
  {
    slug: "during-surgery",
    order: 2,
    title: "During Surgery",
    shortTitle: "During",
    tagline:
      "Inside the theatre, protection depends on barriers that hold and on how the team behaves around them.",
    intro:
      "Once the procedure begins, prevention becomes a matter of maintaining barriers and handling tissue well. This stage covers isolation of the surgical field, protection of instruments and implants, the behaviour of everyone in the room, and the surgical technique, lavage and closure that determine whether any contamination that does occur can establish itself. These protocols depend heavily on shared recognition: a barrier only works if someone notices and says so when it fails.",
    kind: "sequential",
  },
  {
    slug: "after-surgery",
    order: 3,
    title: "After Surgery",
    shortTitle: "After",
    tagline:
      "The incision stays vulnerable after closure, and responsibility passes to the ward team and the owner.",
    intro:
      "Closure is not the end of the prevention pathway. The incision remains vulnerable through early healing, and the people responsible for protecting it change — first the recovery and ward team, then the owner at home. This stage covers dressing and incision protection, prevention of self-trauma, aseptic wound handling, discharge education, wound monitoring, and the decisions about postoperative antimicrobials that follow.",
    kind: "sequential",
  },
  {
    slug: "measure-improve",
    order: 4,
    title: "Measure & Improve",
    shortTitle: "Measure",
    tagline:
      "The feedback loop around the whole pathway: know your rate, observe your practice, and change what is not working.",
    intro:
      "Measure & Improve is not a fourth phase of surgery. It surrounds the entire perioperative pathway and feeds back into every stage. Without surveillance, a practice does not know its own surgical site infection rate; without audit, it does not know whether its written protocols describe what actually happens in the theatre. These two protocols turn the rest of the site from a set of recommendations into a system a hospital can manage.",
    kind: "loop",
  },
];

export const stageBySlug: Record<StageSlug, Stage> = stages.reduce(
  (acc, stage) => {
    acc[stage.slug] = stage;
    return acc;
  },
  {} as Record<StageSlug, Stage>,
);

export function getStage(slug: string): Stage | undefined {
  return stages.find((s) => s.slug === slug);
}

/** The three chronological stages, in order. Excludes the feedback loop. */
export const sequentialStages = stages.filter((s) => s.kind === "sequential");

/** Next stage in the pathway, wrapping from Measure & Improve back to the start. */
export function getNextStage(slug: StageSlug): Stage {
  const index = stages.findIndex((s) => s.slug === slug);
  return stages[(index + 1) % stages.length];
}
