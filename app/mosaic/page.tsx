import Link from "next/link";
import type { Metadata } from "next";
import { mosaicTiles } from "@/content/mosaic";
import { getProtocols, practiceCount, protocols } from "@/content/protocols";
import { stages } from "@/content/stages";
import {
  Breadcrumbs,
  ButtonLink,
  Container,
  SectionHeading,
} from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "The Mosaic",
  description:
    "Why surgical site infection cannot be prevented by one intervention, how coordinated protective barriers work across the perioperative pathway, and the distinction between a protocol and a practice.",
  alternates: { canonical: "https://vetssi.com/mosaic" },
  openGraph: {
    title: "The Mosaic of SSI Prevention | VetSSI",
    url: "https://vetssi.com/mosaic",
    type: "article",
  },
};

const hierarchy = [
  {
    label: "Mosaic",
    body: "The whole system of prevention — every protective barrier, taken together.",
  },
  {
    label: "Surgical pathway",
    body: "Four stages: before, during and after surgery, with measurement surrounding all three.",
  },
  {
    label: "Protocols",
    body: "Twelve coordinated areas of practice. Each states one standard.",
  },
  {
    label: "Practices",
    body: `${practiceCount} individual actions inside those protocols. Each has an owner and can be observed.`,
  },
  {
    label: "Measurement",
    body: "Surveillance and audit, which feed back and change the protocols.",
  },
];

export default function MosaicPage() {
  return (
    <>
      <section className="bg-navy text-white mosaic-grid-bg">
        <Container className="py-14 sm:py-20">
          <div className="mb-8 [&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white">
            <Breadcrumbs
              trail={[{ label: "Home", href: "/" }, { label: "The Mosaic" }]}
            />
          </div>
          <div className="max-w-3xl">
            <p className="eyebrow text-steel-light mb-4">The framework</p>
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight mb-6">
              The Mosaic of SSI Prevention
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
              Surgical site infection prevention is not one intervention. It is
              a series of protective barriers applied consistently throughout
              surgical care.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Why not one intervention ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-warm-gray">
        <Container size="narrow">
          <SectionHeading
            eyebrow="The problem"
            title="Why one intervention is not enough"
          />
          <div className="space-y-5 leading-relaxed">
            <p>
              A surgical site infection is the result of bacteria reaching
              tissue that cannot clear them. Both halves of that sentence matter,
              and both have many contributing causes.
            </p>
            <p>
              Bacteria can reach the wound from the patient&rsquo;s own skin and
              flora, from the surgical team&rsquo;s hands and respiratory tract,
              from the air and surfaces of the operating theatre, from
              instruments and implants, from intravenous lines and prepared
              medications, and from the ward and home environment after closure.
              Whether they then establish an infection depends on the tissue
              they land in &mdash; how well perfused it is, whether it was
              crushed or devitalised during surgery, whether there is haematoma
              or dead space, and how long the procedure took.
            </p>
            <p>
              An intervention that addresses one of those routes leaves the
              others open. This is why single-measure approaches disappoint:
              a practice that adopts one new product or one new rule, and
              changes nothing else, is usually addressing a route that was not
              the limiting one.
            </p>
            <p className="text-text-muted">
              It is also why VetSSI avoids language like &ldquo;eliminates
              infection&rdquo; or &ldquo;guarantees sterility.&rdquo; Skin
              cannot be sterilised, gloves perforate, and no protocol reduces
              risk to zero. The aim is to reduce it, across every route at once,
              and to know whether that is working.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── The tiles ────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-warm-gray bg-white">
        <Container>
          <SectionHeading
            eyebrow="The tiles"
            title="Ten areas that contribute to risk"
            lead="Each tile names an area of surgical care that can contribute to infection risk, and the protocols that apply controls to it. No tile is sufficient by itself."
          />

          <ul className="grid gap-px bg-warm-gray border border-warm-gray md:grid-cols-2">
            {mosaicTiles.map((tile) => (
              <li
                key={tile.slug}
                id={`tile-${tile.slug}`}
                className="bg-white p-6 scroll-mt-24"
              >
                <h3 className="font-serif text-xl text-navy leading-snug mb-2">
                  {tile.name}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-4">
                  {tile.contribution}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {getProtocols(tile.protocols).map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/protocols/${p.slug}`}
                        className="inline-block text-xs border border-warm-gray px-2 py-1 text-navy hover:border-steel hover:text-steel transition-colors"
                      >
                        {p.protocolNumber}. {p.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ─── Coordinated barriers ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-warm-gray">
        <Container size="narrow">
          <SectionHeading
            eyebrow="How it works"
            title="Coordinated barriers, not stacked precautions"
          />
          <div className="space-y-5 leading-relaxed">
            <p>
              Barriers work together, and they fail together. A drape protects
              the wound from residual skin flora only while the antiseptic
              underneath it has done its work and only while the drape stays
              adhered. Prophylaxis reaches tissue concentration only if it was
              given before incision and redosed during a long procedure. Each
              barrier assumes the others are in place.
            </p>
            <p>
              Coordination is therefore not the same as doing more. Adding a
              precaution to a pathway where an earlier step is unreliable rarely
              helps. It is usually more productive to find the step that is
              being skipped under time pressure and fix that.
            </p>
            <p>
              This has a practical consequence for how a hospital should use
              this site. The twelve protocols are not a checklist to adopt
              wholesale. They are a map for finding where your own pathway is
              weakest.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Hierarchy diagram ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-warm-gray bg-white">
        <Container>
          <SectionHeading
            eyebrow="How this site is organised"
            title="Mosaic → pathway → protocols → practices → measurement"
            lead="One hierarchy runs through the whole site. Knowing where you are in it is usually enough to find what you need."
          />

          <ol className="space-y-px bg-warm-gray border border-warm-gray">
            {hierarchy.map((level, i) => (
              <li
                key={level.label}
                className="bg-white flex items-start gap-4 sm:gap-6 px-5 sm:px-8 py-5"
                style={{ paddingLeft: `calc(1.25rem + ${i * 1.25}rem)` }}
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 mt-2 w-2 h-2 bg-steel"
                />
                <div>
                  <h3 className="font-serif text-xl text-navy leading-snug">
                    {level.label}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mt-1">
                    {level.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="border-l-[3px] border-steel bg-cream px-5 py-5">
              <h3 className="font-serif text-xl text-navy mb-2">
                A protocol
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                One of the twelve coordinated areas of the pathway. A protocol
                states a single standard &mdash; what good practice looks like
                in that area &mdash; and contains the practices that meet it. A
                hospital adopts a protocol.
              </p>
            </div>
            <div className="border-l-[3px] border-steel-light bg-cream px-5 py-5">
              <h3 className="font-serif text-xl text-navy mb-2">
                A practice
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                A single action within a protocol: something an identified
                person does at an identified moment. A practice can be watched,
                taught and audited. An individual performs a practice.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-text-muted prose-measure">
            The previous version of this site presented 47 separate topics as
            though each were a protocol in its own right. Most of them were
            practices. Reorganising them into {protocols.length} protocols is
            the main change in this version.
          </p>
        </Container>
      </section>

      {/* ─── Evidence principle ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-b border-warm-gray">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Evidence"
            title="Limited evidence is not the same as no reason to act"
          />

          <blockquote className="border-l-[3px] border-steel bg-white px-6 py-5 my-8">
            <p className="font-serif text-xl sm:text-2xl text-navy leading-snug">
              Recommendations should reflect the best available evidence, sound
              clinical judgment, feasibility, and the need to measure results in
              practice.
            </p>
          </blockquote>

          <div className="space-y-5 leading-relaxed">
            <p>
              Much of what is done to prevent surgical site infection in
              veterinary surgery has never been tested against infection
              outcomes in veterinary patients, and some of it never will be.
              Trials of individual aseptic practices are difficult to run, need
              very large numbers to detect differences in an uncommon outcome,
              and raise obvious problems when the control arm involves
              deliberately doing less.
            </p>
            <p>
              That does not make an individual measure inappropriate. Where the
              mechanism is clear, the cost is low and the potential harm is
              serious, acting on reasoning and consensus is a defensible
              position &mdash; provided it is described as what it is.
            </p>
            <p>
              So this site labels every protocol and every practice with what it
              actually rests on: stronger evidence, moderate or supportive
              evidence, limited evidence, or expert consensus and good surgical
              practice. Where evidence points against a common practice &mdash;
              as it does for plain adhesive incisional drapes, and for routine
              change of the skin incision blade &mdash; the site says so rather
              than quietly omitting it.
            </p>
            <p className="text-text-muted">
              The Mosaic organises prevention. It does not imply that every tile
              in it has the same evidentiary support, and reading it that way
              would be a mistake.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Responsibility ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Ownership"
            title="A hospital-wide responsibility, led from the top"
          />
          <div className="space-y-5 leading-relaxed">
            <p>
              Infection prevention fails most often where nobody owns the step.
              Every practice on this site names who performs it, who oversees it
              and who supports it, and those roles are structured data rather
              than prose &mdash; so any team member can see{" "}
              <Link
                href="/roles"
                className="text-steel underline underline-offset-2"
              >
                their own responsibilities across the entire pathway
              </Link>
              .
            </p>
            <p>
              Two things determine whether that works. The first is that
              responsibility is named rather than assumed. The second is that
              surgical leadership is visibly held to the same standards as
              everyone else. A senior clinician who exempts themselves from a
              protocol removes it for the whole team, whatever the document
              says.
            </p>
            <p>
              This is also why the most important practice on this site may be
              the least technical one: that anybody in the room, at any level of
              seniority, can declare a break in asepsis and expect it to be
              acted on.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <ButtonLink href="/protocols">View all twelve protocols</ButtonLink>
            <ButtonLink href={`/pathway/${stages[0].slug}`} variant="secondary">
              Start at Before Surgery
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
