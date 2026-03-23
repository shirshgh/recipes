"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { getSubstitutions, SUBSTITUTIONS_ENABLED } from "@/lib/substitutions";

interface Props {
  ingredientName: string;
}

export function SubstitutePanel({ ingredientName }: Props) {
  const [open, setOpen] = useState(false);
  if (!SUBSTITUTIONS_ENABLED || !ingredientName?.trim()) return null;
  let subs: ReturnType<typeof getSubstitutions> = [];
  try {
    subs = getSubstitutions(ingredientName);
  } catch {
    return null;
  }

  if (subs.length === 0) return null;

  return (
    <div className="mt-0.5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title="See substitutes"
        className="flex items-center gap-1 text-xs font-serif text-brand-400 hover:text-brand-600 transition-colors"
      >
        <ArrowLeftRight size={12} />
      </button>

      {open && (
        <div className="mt-2 ml-1 bg-brand-50 border border-brand-100 rounded-xl p-3 space-y-2 text-xs font-serif">
          <p className="font-semibold text-brand-700 mb-1">
            Instead of <span className="italic">{ingredientName}</span>:
          </p>
          {subs.map((s, i) => (
            <div key={i} className="pl-2 border-l-2 border-brand-200">
              <p className="text-gray-700 font-semibold">
                {s.sub}
                {s.ratio && <span className="font-normal text-gray-500 ml-1">— {s.ratio}</span>}
              </p>
              {s.context && <p className="text-gray-400 italic">{s.context}</p>}
              {s.dietaryNote && (
                <span className="inline-block mt-0.5 px-1.5 py-0.5 rounded-full bg-accent-300 text-gray-600 text-[10px] font-semibold">
                  {s.dietaryNote}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
