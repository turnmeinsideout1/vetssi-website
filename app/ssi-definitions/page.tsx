import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, ClipboardCheck, Activity, GitBranch, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import AjvrCitationFootnote from "@/components/AjvrCitationFootnote";
import { SOURCE } from "@/data/ssi-definitions";

export const metadata: Metadata = {
  title: "SSI Definitions Framework",
  description:
    "Standardized veterinary terminology for classifying, monitoring, and preventing surgical site infections. Based on the 2026 AJVR expert consensus on veterinary SSI definitions.",
  alternates: { canonical: "https://vetssi.com/ssi-definitions" },
  openGraph: {
    title: "SSI Definitions Framework | VETSSI",
    description:
      "Standardized veterinary terminology for classifying, monitoring, and preventing surgical site infections.",
    url: "https://vetssi.com/ssi-definitions",
    type: "article",
  },
};

const entryCards = [
  {
    href: "/ssi-definitions/core",
    title: "Core SSI Definitions",
    body: "The five tissue-layer definitions — SSI (parent), Superficial, Deep, Organ/Bone/Space, and Implant-Associated — each rendered through a shared template with two voices: consensus and clinical interpretation.",
    cta: "Browse definitions",
    icon: Layers,
  },
  {
    href: "/ssi-definitions/wound-classification",
    title: "Wound Classification",
    body: "SWC I–IV with clinical interpretation, risk profiles, and an interactive 'Classify This Wound' decision tool. Includes the contamination → colonization → infection biology spectrum.",
    cta: "Open classification",
    icon: ClipboardCheck,
  },
  {
    href: "/ssi-definitions/surveillance",
    title: "Surveillance Framework",
    body: "Active vs. passive surveillance, the 30-day timeline (Day 0 → Day 10–14 → Week 4 → Day 30), surveillance terms, and the 'surveillance effect.'",
    cta: "Open surveillance",
    icon: Activity,
  },
  {
    href: "/mosaic",
    title: "The Mosaic of SSI Prevention",
    body: "The areas of surgical care through which infection reaches the surgical site — the system these definitions describe and that the twelve protocols act on. Cross-linked from every Core Definition.",
    cta: "Open the Mosaic",
    icon: GitBranch,
  },
];

export default function SsiDefinitionsLandingPage() {
  return (
    <>
      <PageHeader
        title="SSI Definitions Framework"
        subtitle="Standardized veterinary terminology for classifying, monitoring, and preventing surgical site infections."
      />

      {/* Provenance. This is the one part of VetSSI that derives from a
          published expert consensus rather than from draft editorial content,
          and it says so before anything else on the page. */}
      <section className="bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10 sm:py-12">
          <p className="eyebrow text-steel-light mb-4">
            The source of this framework
          </p>
          <div className="grid lg:grid-cols-[1.3fr,1fr] gap-8 lg:gap-12 items-start">
            <div>
              <p className="font-serif text-2xl sm:text-3xl leading-snug mb-4">
                {SOURCE.title}
              </p>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                {SOURCE.authors} &middot;{" "}
                <span className="italic">{SOURCE.journal}</span>, {SOURCE.year}
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                {SOURCE.panelDescription}
              </p>
            </div>

            <dl className="border-t border-white/15 divide-y divide-white/15 text-sm">
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-white/50">Method</dt>
                <dd className="text-right">{SOURCE.method}</dd>
              </div>
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-white/50">Expert panel</dt>
                <dd className="text-right">{SOURCE.panelSize} specialists</dd>
              </div>
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-white/50">Definitions agreed</dt>
                <dd className="text-right">{SOURCE.definitionsAgreed}</dd>
              </div>
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-white/50">Access</dt>
                <dd className="text-right">{SOURCE.license}</dd>
              </div>
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-white/50">DOI</dt>
                <dd className="text-right">
                  <a
                    href={SOURCE.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-light underline underline-offset-2 hover:text-white break-all"
                  >
                    {SOURCE.doi}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <p className="text-sm text-white/50 leading-relaxed mt-8 max-w-3xl border-t border-white/10 pt-6">
            Content marked as consensus paraphrases the paper&rsquo;s defined
            terms. VetSSI&rsquo;s own clinical interpretation, gray zones,
            misclassification scenarios and examples are editorial and are
            labelled as such throughout this module.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white border-b border-warm-gray">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-14">
          <p className="text-base text-text-primary leading-relaxed">
            Reliable SSI prevention begins with a shared language. This framework translates expert consensus terminology into clinically usable definitions — linked to contamination pathways, protocols, surgical workflows, surveillance systems, and team responsibilities.
          </p>
          <p className="nav-link text-steel mt-6">
            Based on the{" "}
            <a
              href={SOURCE.journalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy transition-colors inline-flex items-center gap-1"
            >
              {SOURCE.short}
              <ExternalLink size={11} />
            </a>
            .
          </p>
        </div>
      </section>

      {/* Entry cards */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <p className="nav-link text-steel mb-2">Enter the framework</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-10">
            Four dimensions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {entryCards.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.href}
                  href={c.href}
                  className="card bg-white border border-warm-gray p-6 group hover:border-steel transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <Icon size={18} className="text-steel" />
                    <h3 className="font-serif text-xl font-medium text-navy">{c.title}</h3>
                  </div>
                  <p className="text-sm text-text-primary leading-relaxed mb-5">{c.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs nav-link text-steel group-hover:text-navy transition-colors">
                    {c.cta}
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <AjvrCitationFootnote variant="full" />
    </>
  );
}
