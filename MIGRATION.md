# VetSSI V1 → V2 content migration

This records what happened to the V1 content during the V2 rebuild: what was
kept, what moved, what was consolidated, what still needs review, and what was
deliberately left out.

The headline change is structural. V1 presented **47 topics as standalone
protocols**. Most of them were individual practices rather than protocols. V2
reorganises them into **12 core protocols containing 142 practices**, grouped
into **4 stages** under one framework, **The Mosaic of SSI Prevention**.

---

## 1. What was retained

| V1 asset | Status in V2 |
| --- | --- |
| `data/ssi-definitions.ts` — SSI Definitions Framework | **Preserved in full.** Content untouched; only the outbound cross-reference links were repointed to V2 routes. |
| `/ssi-definitions/*` routes and components | **Preserved in full** — index, core definitions, wound classification (incl. the interactive classifier), surveillance framework. |
| `data/wound-classification.ts`, `data/surveillance.ts` | Preserved, unchanged. |
| `data/contributors.ts` and `/contributors` | Preserved, unchanged. Now linked from About rather than from primary navigation. |
| Clinical prose from the 47 V1 protocols | Rewritten into the practices of the 12 V2 protocols. Steps became `implementationSteps`, pitfalls became `commonFailurePoints`. |
| `data/pathways.ts` — 9 contamination pathways | Became the 10 tiles of the Mosaic (`content/mosaic.ts`); prose adapted. |
| V1 citations | Deduplicated into `content/references.ts` (47 entries). See §5. |
| Brand identity — VETSSI wordmark, navy/steel/cream palette, Cormorant + DM Sans | Retained and refined. Stage accent colours added. |
| Google Search Console verification tag, robots, sitemap, OG images | Retained; sitemap and protocol OG image regenerated from V2 content. |

## 2. What moved

| V1 route | V2 route | Notes |
| --- | --- | --- |
| `/protocols` | `/protocols` | Now lists 12 protocols grouped by stage, not 47 cards with filter tabs. |
| `/protocols/<47 slugs>` | `/protocols/<12 slugs>#practice-<id>` | 44 permanent redirects; 3 slugs unchanged. See §3. |
| `/contamination-pathways` | `/mosaic` | Permanent redirect. |
| `/roles` | `/roles` | Rebuilt as a filter view (`?role=`) generated from protocol data, replacing the anchor-list page. |
| `/videos` | `/resources#media` | Permanent redirect. See §6. |
| `/resources` | `/resources`, `/resources/glossary`, `/resources/references` | Expanded into categories. |
| `/about` | `/about` | Rewritten. |
| — | `/pathway/{before-surgery,during-surgery,after-surgery,measure-improve}` | New stage landing pages. |
| — | `/mosaic`, `/search` | New. |

## 3. Old → new route map

All 47 V1 protocol routes resolve. Three keep their URL because the slug also
exists in V2: `antimicrobial-prophylaxis`, `surgical-team-preparation`,
`ssi-surveillance`. The other 44 redirect permanently (308) to the practice
that replaced them.

> **Maintenance note:** a redirect whose destination pathname equals its source
> loops forever, because Next.js matches on pathname and ignores the fragment.
> `buildRedirects()` in `content/redirects.mjs` throws if such an entry is
> introduced. This was a real bug caught during the rebuild.

### Into Protocol 1 — Patient Assessment & Surgical Planning
- `patient-risk-stratification` → `#practice-patient-risk-factors`
- `case-risk-stratification` → `#practice-patient-risk-factors`
- `preoperative-patient-screening` → `#practice-existing-infections`
- `procedure-specific-planning` → `#practice-case-specific-planning`

### Into Protocol 2 — Antimicrobial Prophylaxis
- `antimicrobial-prophylaxis` → *URL unchanged*
- `antimicrobial-prophylaxis-plan` → `#practice-indication`
- `postoperative-antibiotic-decisions` → `#practice-postoperative-stewardship`

### Into Protocol 3 — Patient Preparation
- `preoperative-skin-preparation` → `#practice-initial-skin-cleaning`
- `clipping-timing-technique` → `#practice-clipping-timing`
- `surgical-site-antisepsis` → `#practice-antiseptic-application`
- `patient-admission-hygiene` → `#practice-initial-skin-cleaning`
- `transfer-after-clipping` → `#practice-transfer-protection`
- `patient-positioning-isolation` → `#practice-positioning`

### Into Protocol 4 — Surgical Team Preparation
- `surgical-team-preparation` → *URL unchanged*
- `hand-hygiene` → `#practice-routine-hand-hygiene`
- `or-attire-standards` → `#practice-or-attire`
- `gloves-outside-sterile-field` → `#practice-glove-integrity`

### Into Protocol 5 — Operating Theatre Preparation
- `or-environment-setup` → `#practice-cleaning-between-procedures`
- `or-ventilation-environment` → `#practice-ventilation`
- `sterile-instrument-setup` → `#practice-sterile-setup`
- `sterility-readiness-check` → `#practice-readiness-check`
- `medication-handling` → `#practice-medication-preparation`
- `infusion-line-preparation` → `#practice-medication-preparation`
- `iv-catheter-placement` → `#practice-medication-preparation`
- `anesthesia-vascular-access-control` → `#practice-medication-preparation`

### Into Protocol 6 — Surgical Field Isolation
- `draping-technique` → `#practice-draping-sequence`
- `sterile-field-maintenance` → `#practice-sterile-boundaries`
- `incisional-drape-policy` → `#practice-adhesive-drapes`
- `contamination-event-response` → `#practice-breached-field`
- `contamination-sensitive-phases` → `#practice-breached-field`

### Into Protocol 7 — Instruments & Implant Protection
- `instrument-sterility` → `#practice-sterilization-verification`
- `implant-handling` → `#practice-no-touch-handling`

### Into Protocol 8 — Aseptic OR Behaviour
- `or-behavior-rules` → `#practice-sterile-nonsterile-boundaries`
- `or-traffic-control` → `#practice-door-openings`
- `glove-change-protocol` → `#practice-glove-change-indications`

### Into Protocol 9 — Surgical Technique, Lavage & Closure
- `closure-technique` → `#practice-layered-closure`

### Into Protocol 10 — Postoperative Wound Care & Patient Protection
- `wound-management` → `#practice-aseptic-wound-handling`
- `incision-monitoring` → `#practice-wound-monitoring`
- `patient-self-trauma-prevention` → `#practice-self-trauma-prevention`
- `owner-discharge-instructions` → `#practice-discharge-instructions`
- `recovery-room-hygiene` → `#practice-recovery-hygiene`
- `cage-ward-hygiene` → `#practice-recovery-hygiene`
- `follow-up-schedule` → `#practice-wound-monitoring`

### Into Protocol 11 — SSI Surveillance
- `ssi-surveillance` → *URL unchanged*
- `compliance-metrics` → `#practice-overall-rate`

### Into Protocol 12 — Audit, Review & Continuous Improvement
- `case-review-triggers` → `#practice-morbidity-mortality-review`
- `protocol-deviations-escalation` → `#practice-near-miss-reporting`

### Section redirects
- `/contamination-pathways`, `/contamination-pathways/:slug` → `/mosaic`
- `/videos`, `/videos/:slug` → `/resources#media`

## 4. What was consolidated

Several V1 topics collapsed into a single V2 practice because they described
the same action from different angles:

- **`medication-handling` + `infusion-line-preparation` + `iv-catheter-placement` + `anesthesia-vascular-access-control`** → one practice, *Medication preparation considerations* (Protocol 5). All four were about aseptic handling of injectables and lines. **This is the largest consolidation and the one most worth an expert's second opinion** — if vascular access warrants its own practice, or its own protocol, it should be split back out.
- **`patient-risk-stratification` + `case-risk-stratification`** → *Patient-specific SSI risk factors*. V1 held two near-duplicate topics.
- **`recovery-room-hygiene` + `cage-ward-hygiene`** → *Recovery-area hygiene*.
- **`incision-monitoring` + `follow-up-schedule`** → *Wound monitoring*.
- **`contamination-event-response` + `contamination-sensitive-phases`** → *Management of a breached field*.
- **9 contamination pathways** → 10 Mosaic tiles (patient preparation and surveillance/improvement were added as distinct tiles).

The V1 interactive `middleBlock` widgets (risk-tier tables, screening tables,
planning checklists, go/no-go panels) were **not carried across**. Their
content was absorbed into practices and checklists. They were bespoke per
protocol, which is exactly the inconsistency V2 set out to remove. If any are
wanted back, they should return as a shared, typed component used by all 12.

## 5. References — read this before quoting anything

V1 contained **100 citation entries, 67 unique**. These are now in
`content/references.ts` as **47 deduplicated entries**.

**Only 1 is marked `verified`** — Verwilghen et al., AJVR 2026 (the SSI
definitions consensus), which has a real DOI and a live open-access URL held in
this repository.

**The other 46 are marked `unverified`.** They were carried forward from V1 and
have **not** been checked against source. The site displays a *pending
verification* marker on every one of them, on the protocol pages and in the
reference library, and does not present them as established support for any
recommendation.

Nothing in the reference library was newly authored for V2.

### Conflicts found during migration

V1 held **contradictory records for the same paper**. These are flagged on the
entries concerned and need resolving:

- **Horan et al. 1992** — two different DOIs (`10.1086/646354`, `10.1086/646955`).
- **Weese 2008** — two different DOIs (`10.3415/VCOT-07-02-0017`, `10.3415/VCOT-06-11-0093`).
- **Turk et al. 2015** — two records under different titles.
- **Cochrane CD006353** — the same DOI attributed to two different author sets (Webster & Alghamdi; Tanner et al.).

### Flagged for priority checking

Three entries could not be corroborated during migration and are marked
accordingly:

- `doherty-2020` — Chlorhexidine vs povidone-iodine meta-analysis, J Hosp Infect 2020.
- `strom-2011` — "Medication errors related to syringe reuse", Ann Intern Med 2011.
- `aorn-event-reporting` — may not correspond to a distinct published AORN guideline.

### Removed

Three V1 "citations" were **statements, not sources**, and were dropped:

- "Implant contamination during surgery is well documented"
- "Biofilm formation occurs rapidly on implant surfaces"
- "Even low bacterial loads may lead to infection in orthopedic procedures"

The claims they supported are retained in Protocol 7's evidence note, described
honestly as mechanistic reasoning rather than cited findings.

## 6. What was intentionally left out, and why

| Left out | Why |
| --- | --- |
| **`data/videos.ts` (6 video records) and the `/videos` page** | No video existed behind any of them. The page rendered a play button and a duration badge for content that had never been produced. V2 does not ship fake players. The six topics are now **Resource planned** entries under Resources → Photos and videos, and appear as labelled media slots inside the relevant practices. |
| **`downloadableTools` in `data/resources.ts`** | Three entries with invented file sizes ("148 KB", "210 KB", "95 KB") and no files. V2 does not ship download buttons for files that do not exist. They are now **Resource planned** entries. |
| **`guidelines` in `data/resources.ts`** | Three entries (ACVS 2022, ECVS 2021, ISCAID 2019) with `url: "#"`. Dead links, and the titles could not be corroborated. Not carried forward. If these documents exist, add them to `content/references.ts` with real URLs. |
| **V1 `middleBlock` widgets** | See §4. |
| **The "owner / caregiver" role** | V2's role taxonomy is the seven categories specified for the rebuild, which has no owner category. Owner-facing content was **not** lost — it lives in Protocol 10 as *Discharge instructions* and *Owner education*, owned by the recovery team. The SSI definitions module's `owner` cross-reference now points there. |
| **V1 `expertInsight` fields** | Written in a first-person editorial voice attributed to no one. Substance was folded into `whyItMatters` and evidence notes; the unattributed voice was not carried forward. |

## 7. What remains to be reviewed

**All 12 protocols carry `reviewStatus: "draft"` and `lastReviewed: null`.** The
draft label renders on every protocol page, every stage page, the protocols
index and the role view.

### Files requiring expert clinical review

All of `content/protocols/`:

| File | Protocol | Practices |
| --- | --- | --- |
| `patient-assessment-planning.ts` | 1 | 10 |
| `antimicrobial-prophylaxis.ts` | 2 | 10 |
| `patient-preparation.ts` | 3 | 13 |
| `surgical-team-preparation.ts` | 4 | 11 |
| `operating-theatre-preparation.ts` | 5 | 10 |
| `surgical-field-isolation.ts` | 6 | 9 |
| `instruments-implant-protection.ts` | 7 | 12 |
| `aseptic-or-behaviour.ts` | 8 | 12 |
| `surgical-technique-lavage-closure.ts` | 9 | 15 |
| `postoperative-wound-care.ts` | 10 | 13 |
| `ssi-surveillance.ts` | 11 | 13 |
| `audit-review-improvement.ts` | 12 | 14 |

Also requiring review: `content/references.ts` (§5), `content/glossary.ts`
(VetSSI-authored definitions; consensus-derived ones are attributed), and
`content/mosaic.ts`.

### Specific clinical decisions deferred to expert review

1. **Evidence classifications.** Every `evidenceLevel` is a provisional editorial judgement. Two in particular are deliberately assertive and should be confirmed: adhesive incisional drapes (*moderate*, evidence against) and initial scalpel blade change (*limited*, unsupported). Both contradict common practice.
2. **No agent, dose, timing or contact-time numbers are stated anywhere.** VetSSI deliberately says "the interval the product requires" rather than naming figures. If the reviewed site should carry specific values, that is a substantive editorial decision, not a gap to fill in.
3. **Vascular access consolidation** (§4) — most likely thing to need splitting back out.
4. **Protocol 9 is product-neutral by design.** It names no lavage product. If product-specific guidance is added later, it must stay visibly separate from the general principles.
5. **Antimicrobial prophylaxis** is framed around local resistance patterns and written protocols rather than recommendations, since regulatory context varies by jurisdiction. Confirm this is the right posture.
6. **UK/international English** is used throughout V2 ("anaesthesia", "behaviour", "sterilisation") while the preserved SSI Definitions module uses US spellings. This inconsistency is visible to readers and needs a decision either way.

## 8. Verification performed

- `next build` — passes, 41 static pages.
- `next lint` — clean. `tsc --noEmit` — clean.
- **Link crawl:** 39 routes, 0 non-200, 0 missing anchor targets.
- **Redirects:** all 47 V1 protocol slugs resolve to a live destination with a valid practice anchor; 4 section redirects verified.
- **Responsive + a11y sweep:** 31 routes × 3 widths (390/768/1440) — no horizontal overflow, no unlabelled inputs, no empty links, no text below 11px, contiguous heading hierarchy, 0 console errors.
- **Interaction tests:** 29/29 — keyboard tab order and focus rings, accordion keyboard operation, checklist tick/count/reset, checklist-only print isolation, search, role filter URL sync, mobile drawer incl. Escape.
