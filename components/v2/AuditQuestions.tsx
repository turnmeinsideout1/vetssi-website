import type { AuditQuestion } from "@/content/types";

export default function AuditQuestions({
  questions,
}: {
  questions: AuditQuestion[];
}) {
  return (
    <div>
      <p className="text-sm text-text-muted leading-relaxed prose-measure mb-6">
        These are observation questions, not a score. They are written to be
        answered by looking at what happens, rather than by asking whether a
        protocol exists. A practice that answers them honestly will usually find
        a larger gap between its written protocol and its observed practice than
        it expected.
      </p>
      <ol className="space-y-px bg-warm-gray border border-warm-gray">
        {questions.map((q, i) => (
          <li key={q.id} className="bg-white px-5 sm:px-6 py-5 print-break-avoid">
            <div className="flex gap-4">
              <span
                aria-hidden="true"
                className="shrink-0 font-sans text-xs text-text-muted tabular-nums mt-1"
              >
                {i + 1}.
              </span>
              <div className="prose-measure">
                <p className="text-base text-navy leading-snug font-medium">
                  {q.question}
                </p>
                <p className="text-sm text-text-muted leading-relaxed mt-2">
                  <span className="eyebrow text-steel mr-2">Look for</span>
                  {q.lookFor}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
