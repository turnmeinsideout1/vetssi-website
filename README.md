# VetSSI

An independent educational resource that helps veterinary surgical teams
translate surgical-site-infection prevention evidence into consistent everyday
practice.

> **VetSSI Version 2 is currently under expert review. Clinical content should
> not yet be treated as a finalized guideline.**

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

Next.js 14 (App Router) · TypeScript (strict) · Tailwind CSS 3 · lucide-react.
No database, no CMS, no authentication. All content is typed data compiled into
the build, so every page is statically generated.

## The architecture

One hierarchy runs through the whole site:

```
Mosaic → 4 stages → 12 protocols → 142 practices → implementation → evidence
```

- **The Mosaic** is the framework: prevention is a set of coordinated
  protective barriers, and every practice is one tile.
- **Four stages** — Before Surgery (5 protocols), During Surgery (4), After
  Surgery (1), Measure & Improve (2). The fourth is a feedback loop around the
  other three, not a chronological phase, and the UI treats it differently.
- **Twelve protocols**, each stating one standard.
- **Practices** live inside protocols. They are never presented as standalone
  protocols — that was the main problem with V1, which had 47 of them. See
  [MIGRATION.md](MIGRATION.md).

## Where the content lives

```
content/
  types.ts              Content model. Start here.
  stages.ts             The 4 stages
  roles.ts              The 7 role categories
  protocols/            One file per protocol + index.ts (aggregation)
  references.ts         Reference library with verification status
  glossary.ts           Glossary terms
  mosaic.ts             Mosaic tiles
  resources.ts          Resources (available vs planned)
  search.ts             Search index, derived from everything above
  redirects.mjs         V1 → V2 route map (imported by next.config.mjs)

data/                   PRESERVED V1 — the SSI Definitions Framework
components/v2/          V2 component library
components/             PRESERVED V1 — SSI Definitions components only
```

The role filter at `/roles` and the search index are both **derived from the
protocol data**, so they cannot drift from what the protocol pages render. Add
a practice and it appears in both automatically.

### Adding or editing a protocol

Edit the file in `content/protocols/`. The type system enforces the required
fields. `content/protocols/index.ts` picks it up; routes, sitemap, search, role
filter and OG images all follow.

Practice `id`s are URL anchors (`#practice-<id>`) and are referenced by
`content/redirects.mjs` — changing one breaks an inbound redirect from V1.

### Practice groups

Each protocol declares `practiceGroups`: labelled clusters that break a long
run of practices into a few scannable sections. A group is an ordered list of
practice ids, so **group order drives display order** — the `practices` array
order is not what renders.

Grouping is presentational only. Practices in one cluster frequently carry
different evidence levels, roles and references, which is why they are grouped
rather than merged.

If you add a practice, add its id to a group. `validatePracticeGroups()` throws
at module load — and therefore fails the build — on an id that matches no
practice, a practice in no group, or a practice in two groups. Without that
check an ungrouped practice would silently vanish from the page.

## Editorial rules this codebase enforces

These are not style preferences. They are the reason the site can be trusted.

1. **No fabricated citations.** Every entry in `content/references.ts` carries
   a `status`. Only sources whose full record is held in this repository and
   resolves to a live open URL are `verified` — currently one. The other 46
   were carried from V1 and render with a visible *pending verification*
   marker. Do not mark anything verified without checking it against source.
2. **No confident evidence ratings without support.** Every practice has an
   `evidenceLevel` and an `evidenceNote` that says what it actually rests on,
   including where evidence is absent or points the other way.
3. **Draft content is labelled.** Any protocol with `reviewStatus: "draft"`
   renders a visible notice. All twelve currently do.
4. **No fake functionality.** No download buttons for files that do not exist,
   no video players with no video. Resources are either `available` with a real
   destination, or `planned` and labelled as such.
5. **Checklists are not records.** Tick state is React state only. It is never
   persisted, and the UI says so, because a checklist that looked persistent
   could be mistaken for a medical or legal record.
6. **Product-neutral.** No commercial product is recommended. Where product
   instructions matter, they are kept visibly distinct from general principles.
7. **Plain clinical language.** "Surgical site infection" is established before
   "SSI" is used on general-audience entry pages. No claims like "eliminates
   infection" or "guarantees sterility".

## Accessibility

Semantic HTML, contiguous heading levels, keyboard-operable controls (practice
accordions are native `<details>`), a visible focus ring on every focusable
element, a skip link, no information conveyed by colour alone, reduced-motion
support, and no text below 11px.

Checklists print on their own: **Print checklist** isolates the checklist, hides
the rest of the page and its own buttons, and restates the protocol's standard
on the sheet.

## Testing

There is no test runner in the project. Verification for the V2 rebuild was
done with throwaway Puppeteer scripts against a production build — a link
crawl, a redirect check, a responsive/a11y sweep (31 routes × 3 widths) and 29
interaction tests. Results are recorded in
[MIGRATION.md §8](MIGRATION.md#8-verification-performed). Worth making
permanent if this moves past prototype.
