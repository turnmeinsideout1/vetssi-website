import Link from "next/link";
import type { ReactNode } from "react";
import type {
  EvidenceLevel,
  ReviewStatus,
  RoleResponsibility,
  RoleSlug,
  StageSlug,
} from "@/content/types";
import { roleBySlug, responsibilityLabels } from "@/content/roles";
import { stageBySlug } from "@/content/stages";

// ─── Stage styling ───────────────────────────────────────────────────────────
// Stage is always conveyed by text as well as colour.

export const stageAccent: Record<StageSlug, string> = {
  "before-surgery": "text-stage-before",
  "during-surgery": "text-stage-during",
  "after-surgery": "text-stage-after",
  "measure-improve": "text-stage-measure",
};

export const stageBorder: Record<StageSlug, string> = {
  "before-surgery": "border-t-stage-before",
  "during-surgery": "border-t-stage-during",
  "after-surgery": "border-t-stage-after",
  "measure-improve": "border-t-stage-measure",
};

export const stageBg: Record<StageSlug, string> = {
  "before-surgery": "bg-stage-before",
  "during-surgery": "bg-stage-during",
  "after-surgery": "bg-stage-after",
  "measure-improve": "bg-stage-measure",
};

export function StageBadge({
  stage,
  className = "",
}: {
  stage: StageSlug;
  className?: string;
}) {
  const s = stageBySlug[stage];
  return (
    <span
      className={`inline-flex items-center gap-1.5 eyebrow ${stageAccent[stage]} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`inline-block w-2 h-2 ${stageBg[stage]}`}
      />
      {s.title}
    </span>
  );
}

// ─── Evidence ────────────────────────────────────────────────────────────────

export const evidenceLabels: Record<EvidenceLevel, string> = {
  stronger: "Stronger evidence",
  moderate: "Moderate or supportive evidence",
  limited: "Limited evidence",
  consensus: "Expert consensus / good surgical practice",
};

export const evidenceShortLabels: Record<EvidenceLevel, string> = {
  stronger: "Stronger",
  moderate: "Moderate",
  limited: "Limited",
  consensus: "Consensus",
};

const evidenceStyles: Record<EvidenceLevel, string> = {
  stronger: "bg-[#E7F0EC] text-[#1C5340] border-[#A9CBBD]",
  moderate: "bg-[#E9EFF6] text-[#1F4E75] border-[#AFC6DD]",
  limited: "bg-[#FAF0E2] text-[#7A5518] border-[#E2C596]",
  consensus: "bg-[#F0EEF4] text-[#4F4468] border-[#C6BED6]",
};

export function EvidenceBadge({
  level,
  short = false,
}: {
  level: EvidenceLevel;
  short?: boolean;
}) {
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-0.5 border ${evidenceStyles[level]}`}
    >
      {short ? evidenceShortLabels[level] : evidenceLabels[level]}
    </span>
  );
}

/**
 * Shown wherever clinical content has not completed expert review.
 * Deliberately plain and unmissable rather than styled as a decorative chip.
 */
export function DraftNotice({
  status,
  className = "",
}: {
  status: ReviewStatus;
  className?: string;
}) {
  if (status === "reviewed") return null;
  const label =
    status === "in-review"
      ? "Under expert review"
      : "Draft — requires expert and reference review";
  return (
    <p
      className={`flex items-start gap-2 text-sm border border-[#E2C596] bg-[#FAF0E2] text-[#6B4A12] px-4 py-3 ${className}`}
    >
      <span aria-hidden="true" className="font-semibold leading-tight">
        !
      </span>
      <span>
        <strong className="font-semibold">{label}.</strong> This content is
        provisional and should not be treated as a finalized guideline.
      </span>
    </p>
  );
}

// ─── Roles ───────────────────────────────────────────────────────────────────

const responsibilityStyles: Record<RoleResponsibility, string> = {
  primary: "bg-navy text-white border-navy",
  oversight: "bg-white text-navy border-navy",
  supporting: "bg-white text-text-muted border-warm-gray",
};

export function RoleChip({
  role,
  responsibility,
  asLink = false,
}: {
  role: RoleSlug;
  responsibility?: RoleResponsibility;
  asLink?: boolean;
}) {
  const r = roleBySlug[role];
  const content = (
    <>
      {r.title}
      {responsibility ? (
        <span
          className={`ml-1.5 pl-1.5 border-l ${
            responsibility === "primary" ? "border-white/30" : "border-current/30"
          }`}
        >
          {responsibilityLabels[responsibility]}
        </span>
      ) : null}
    </>
  );
  const className = `inline-flex items-center text-xs px-2 py-1 border ${
    responsibility ? responsibilityStyles[responsibility] : responsibilityStyles.supporting
  }`;

  if (!asLink) return <span className={className}>{content}</span>;
  return (
    <Link
      href={`/roles?role=${role}`}
      className={`${className} hover:opacity-80 transition-opacity`}
    >
      {content}
    </Link>
  );
}

// ─── Layout primitives ───────────────────────────────────────────────────────

export function Container({
  children,
  className = "",
  size = "wide",
}: {
  children: ReactNode;
  className?: string;
  size?: "wide" | "narrow";
}) {
  return (
    <div
      className={`mx-auto px-5 sm:px-6 lg:px-8 ${
        size === "narrow" ? "max-w-3xl" : "max-w-6xl"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  id?: string;
  as?: "h2" | "h3";
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <p className="eyebrow text-steel mb-2">{eyebrow}</p>
      ) : null}
      <As
        id={id}
        className={`font-serif text-navy ${
          As === "h2" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
        } leading-tight`}
      >
        {title}
      </As>
      {lead ? (
        <p className="mt-3 text-text-muted leading-relaxed prose-measure">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function Standard({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-[3px] border-steel bg-white px-5 py-5 sm:px-7 sm:py-6 print-break-avoid">
      <p className="eyebrow text-steel mb-3">The standard</p>
      <p className="font-serif text-xl sm:text-2xl text-navy leading-snug">
        {children}
      </p>
    </div>
  );
}

export function Callout({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="border-l-[3px] border-steel-light bg-white/70 px-5 py-4">
      {title ? (
        <p className="eyebrow text-steel mb-2">{title}</p>
      ) : null}
      <div className="text-sm text-text-primary leading-relaxed">{children}</div>
    </div>
  );
}

export function Breadcrumbs({
  trail,
}: {
  trail: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="no-print">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-muted">
        {trail.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-navy underline-offset-2 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-navy">
                {item.label}
              </span>
            )}
            {i < trail.length - 1 ? (
              <span aria-hidden="true" className="text-warm-gray">
                /
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 bg-navy text-white px-6 py-3 text-sm font-medium hover:bg-navy-mid transition-colors"
      : "inline-flex items-center justify-center gap-2 border border-navy text-navy px-6 py-3 text-sm font-medium hover:bg-navy hover:text-white transition-colors";

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
