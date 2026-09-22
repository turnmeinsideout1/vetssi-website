import Link from "next/link";
import type { Metadata } from "next";
import { protocols, practiceCount } from "@/content/protocols";
import { references } from "@/content/references";
import {
  Breadcrumbs,
  Container,
  SectionHeading,
  EvidenceBadge,
  evidenceLabels,
} from "@/components/v2/ui";

export const metadata: Metadata = {
  title: "About VetSSI",
  description:
    "VetSSI is an independent educational resource that helps veterinary surgical teams translate surgical site infection prevention evidence into consistent everyday practice.",
  alternates: { canonical: "https://vetssi.com/about" },
  openGraph: {
    title: "About VetSSI",
    url: "https://vetssi.com/about",
    type: "article",
  },
};

export default function AboutPage() {
  const unverifiedCount = references.filter(
    (r) => r.status === "unverified",
  ).length;

  return (
    <>
      <section className="bg-white border-b border-warm-gray">
        <Container className="py-10 sm:py-14">
          <Breadcrumbs
            trail={[{ label: "Home", href: "/" }, { label: "About VetSSI" }]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow text-steel mb-3">About</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-navy leading-tight mb-5">
              About VetSSI
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              An independent educational resource that helps veterinary surgical
              teams translate surgical site infection prevention evidence into
              consistent everyday practice.
            </p>
          </div>
        </Container>
      </section>

      <Container size="narrow" className="py-14 sm:py-20">
        {/* Prominent prototype disclaimer */}
        <div className="border-l-[3px] border-[#E2C596] bg-[#FAF0E2] px-6 py-5 mb-14">
          <p className="font-serif text-xl text-[#6B4A12] leading-snug">
            VetSSI Version 2 is currently under expert review. Clinical content
            should not yet be treated as a finalized guideline.
          </p>
        </div>

        <div className="space-y-14">
          <section>
            <SectionHeading
              eyebrow="Purpose"
              title="What this resource is for"
              as="h2"
            />
            <div className="space-y-4 leading-relaxed">
              <p>
                There is no shortage of information about surgical site
                infection prevention. What is harder to find is a way of holding
                it together &mdash; something that tells a surgical team what
                the standard should be, who does what, how to tell whether it is
                actually happening, and how much confidence each recommendation
                deserves.
              </p>
              <p>
                VetSSI is an attempt at that. It is educational, independent,
                and not affiliated with any commercial entity. It is aimed at
                veterinary surgeons and the whole perioperative team rather than
                at a general audience.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Framework"
              title="The Mosaic"
              as="h2"
            />
            <div className="space-y-4 leading-relaxed">
              <p>
                Surgical site infection prevention is not one intervention. It
                is a series of protective barriers applied consistently
                throughout surgical care, and every individual practice is one
                tile in that Mosaic. No tile is sufficient by itself.
              </p>
              <p>
                This version organises {practiceCount} individual practices into{" "}
                {protocols.length} core protocols across four stages, replacing
                a previous structure that presented 47 separate topics as though
                each were a protocol in its own right.{" "}
                <Link
                  href="/mosaic"
                  className="text-steel underline underline-offset-2"
                >
                  The Mosaic page
                </Link>{" "}
                sets out the framework in full.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Approach"
              title="Built for implementation"
              as="h2"
            />
            <div className="space-y-4 leading-relaxed">
              <p>
                A recommendation that cannot be implemented is not much use. So
                every protocol here states a standard, breaks it into practices
                that an identified person performs at an identified moment,
                assigns ownership, and ends with audit questions written to be
                answered by watching rather than by asking.
              </p>
              <p>
                The emphasis throughout is on finding the gap between what a
                hospital has written down and what actually happens. That gap is
                usually larger than expected, and closing it tends to matter
                more than adopting anything new.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Evidence"
              title="How evidence is communicated"
              as="h2"
            />
            <div className="space-y-4 leading-relaxed">
              <p>
                Much of what is done to prevent surgical site infection in
                veterinary surgery has never been tested against infection
                outcomes in veterinary patients. Treating all of it as equally
                well established would be misleading, and so would omitting
                everything that has not been proven.
              </p>
              <p>
                So each protocol and each practice carries an explicit
                classification:
              </p>
              <ul className="space-y-2 my-6">
                {(["stronger", "moderate", "limited", "consensus"] as const).map(
                  (level) => (
                    <li key={level} className="flex items-center gap-3">
                      <EvidenceBadge level={level} short />
                      <span className="text-sm text-text-muted">
                        {evidenceLabels[level]}
                      </span>
                    </li>
                  ),
                )}
              </ul>
              <p>
                Where evidence points against a common practice, the site says
                so. Where a recommendation rests on reasoning and consensus
                rather than on data, it says that too. Limitations are stated on
                every protocol rather than collected out of sight.
              </p>
              <p>
                References are handled the same way. Of the{" "}
                {references.length} sources in the{" "}
                <Link
                  href="/resources/references"
                  className="text-steel underline underline-offset-2"
                >
                  reference library
                </Link>
                , {unverifiedCount} are marked <em>pending verification</em>
                &nbsp;&mdash; carried forward from the previous version of this
                site and not yet checked against source. That status is shown on
                the protocol pages as well, rather than presented as settled
                support.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Teamwork"
              title="A multidisciplinary responsibility"
              as="h2"
            />
            <div className="space-y-4 leading-relaxed">
              <p>
                Surgical site infection prevention is not a surgical
                responsibility with nursing support. Prep, anaesthesia, scrub,
                recovery and ward teams each own steps that no one else can
                cover, and practice leadership owns the protocols, training and
                measurement that hold the rest together.
              </p>
              <p>
                Every practice on this site names who performs it, who oversees
                it and who supports it, stored as structured data so that{" "}
                <Link
                  href="/roles"
                  className="text-steel underline underline-offset-2"
                >
                  any team member can see their own responsibilities
                </Link>{" "}
                across the whole pathway.
              </p>
              <p>
                One practice underpins all the others: that anybody in the room,
                at any level of seniority, can declare a break in asepsis and
                expect it to be acted on without reference to who caused it.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Review"
              title="Expert review"
              as="h2"
            />
            <div className="space-y-4 leading-relaxed">
              <p>
                The clinical content in this version has not completed expert
                review. Every protocol is labelled accordingly, on the page
                itself rather than in a footnote, and the labels will be removed
                protocol by protocol as review is completed rather than all at
                once.
              </p>
              <p>
                The SSI Definitions Framework is the exception in one respect:
                its consensus content derives from a published international
                expert consensus and is attributed to that source throughout,
                with VetSSI&rsquo;s own clinical interpretation clearly
                distinguished from it within the module.
              </p>
              <p>
                People who have contributed to VetSSI are listed on the{" "}
                <Link
                  href="/contributors"
                  className="text-steel underline underline-offset-2"
                >
                  contributors page
                </Link>
                . Listing a contributor is not an endorsement by them of the
                draft content in this version.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Scope"
              title="What this resource does not do"
              as="h2"
            />
            <div className="border border-warm-gray bg-white px-6 py-6 space-y-4 leading-relaxed">
              <p>
                VetSSI does not replace patient-specific clinical judgment. Every
                recommendation here has to be weighed against the patient in
                front of you, and there will be cases where the right decision
                departs from it.
              </p>
              <p>
                It does not override applicable regulatory requirements,
                national or regional guidance, licensing conditions, or a
                hospital&rsquo;s own protocols. Where this site and any of those
                differ, they take precedence.
              </p>
              <p>
                It does not recommend specific commercial products. Where a
                hospital uses one, that product&rsquo;s own instructions govern
                its use, and the general principles here should be kept distinct
                from them.
              </p>
              <p>
                It does not claim that following these protocols eliminates
                surgical site infection. Skin cannot be sterilised, gloves
                perforate, and no protocol reduces risk to zero.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
