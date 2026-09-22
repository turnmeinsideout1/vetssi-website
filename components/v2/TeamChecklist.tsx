"use client";

import { useCallback, useId, useState } from "react";
import { Printer, RotateCcw } from "lucide-react";
import type { ChecklistItem } from "@/content/types";

/**
 * Point-of-care checklist.
 *
 * State is deliberately held in React only — it is not persisted. The UI says
 * so explicitly, because a checklist that looked persistent could be mistaken
 * for a record.
 */
export default function TeamChecklist({
  items,
  protocolTitle,
  protocolNumber,
  standard,
}: {
  items: ChecklistItem[];
  protocolTitle: string;
  protocolNumber: number;
  standard: string;
}) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const baseId = useId();
  const completed = items.filter((i) => checked[i.id]).length;

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const reset = () => setChecked({});

  const print = useCallback(() => {
    const body = document.body;
    body.classList.add("printing-checklist");
    const cleanup = () => {
      body.classList.remove("printing-checklist");
      window.removeEventListener("afterprint", cleanup);
    };
    window.addEventListener("afterprint", cleanup);
    window.print();
    // Safari and some browsers do not fire afterprint reliably.
    window.setTimeout(cleanup, 1000);
  }, []);

  return (
    <div className="print-keep border border-warm-gray bg-white">
      <div className="px-5 sm:px-6 py-5 border-b border-warm-gray flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-steel mb-1">
            Protocol {protocolNumber} — team checklist
          </p>
          <h3 className="font-serif text-2xl text-navy leading-tight">
            {protocolTitle}
          </h3>
          <p
            className="text-sm text-text-muted mt-2 max-w-prose"
            aria-live="polite"
          >
            {completed} of {items.length} items checked
          </p>
        </div>
        <div className="flex gap-2 no-print no-print-in-checklist">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 border border-warm-gray text-text-muted px-3 py-2 text-sm hover:text-navy hover:border-navy transition-colors"
          >
            <RotateCcw size={14} aria-hidden="true" />
            Reset
          </button>
          <button
            type="button"
            onClick={print}
            className="inline-flex items-center gap-2 bg-navy text-white px-4 py-2 text-sm font-medium hover:bg-navy-mid transition-colors"
          >
            <Printer size={14} aria-hidden="true" />
            Print checklist
          </button>
        </div>
      </div>

      {/* Printed sheets need the standard restated; on screen it is already above. */}
      <p className="hidden print:block px-6 pt-4 text-sm italic border-b border-warm-gray pb-4">
        {standard}
      </p>

      <ul className="divide-y divide-warm-gray">
        {items.map((item) => {
          const id = `${baseId}-${item.id}`;
          return (
            <li key={item.id} className="print-break-avoid">
              <div className="flex items-start gap-3 px-5 sm:px-6 py-3.5">
                <input
                  type="checkbox"
                  id={id}
                  checked={Boolean(checked[item.id])}
                  onChange={() => toggle(item.id)}
                  className="print-checkbox mt-1 h-4 w-4 shrink-0 accent-navy cursor-pointer"
                />
                <label
                  htmlFor={id}
                  className="text-sm leading-relaxed cursor-pointer select-none"
                >
                  <span
                    className={
                      checked[item.id]
                        ? "text-text-muted line-through print:no-underline print:text-black"
                        : "text-text-primary"
                    }
                  >
                    {item.label}
                  </span>
                  {item.note ? (
                    <span className="block text-xs text-text-muted mt-1 no-underline">
                      {item.note}
                    </span>
                  ) : null}
                </label>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="px-5 sm:px-6 py-4 border-t border-warm-gray bg-cream/60">
        <p className="text-xs text-text-muted leading-relaxed">
          <strong className="font-semibold text-text-primary">
            Tick state is temporary.
          </strong>{" "}
          Nothing on this page is saved, and it is cleared when you reload or
          navigate away. Completing this checklist does not create a medical or
          legal record. Use your hospital&rsquo;s own documentation for that.
        </p>
      </div>
    </div>
  );
}
