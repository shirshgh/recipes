"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState, useEffect } from "react";
import { Search, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  "all",
  "breakfast",
  "lunch",
  "dinner",
  "dessert",
  "snack",
  "soup",
  "salad",
  "side",
  "bread",
  "cookies",
  "cakes",
  "drink",
];

export function SearchFilters() {
  const router = useRouter();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [query, setQuery] = useState(params.get("q") ?? "");
  const [ingredient, setIngredient] = useState(params.get("ingredient") ?? "");
  const category = params.get("category") ?? "all";

  useEffect(() => {
    const t = setTimeout(() => push({ q: query, ingredient, category }), 350);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, ingredient]);

  function push(updates: { q?: string; ingredient?: string; category?: string }) {
    const sp = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(updates)) {
      if (v && v !== "all") sp.set(k, v);
      else sp.delete(k);
    }
    startTransition(() => router.replace(`/?${sp.toString()}`));
  }

  function setCategory(cat: string) {
    push({ q: query, ingredient, category: cat });
  }

  return (
    <div className="space-y-4">
      {/* Text search row */}
      <div className="flex flex-col sm:flex-row gap-3">
        <label className="relative flex-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search recipes…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white font-serif text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
          />
        </label>

        <label className="relative flex-1">
          <Leaf size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Filter by ingredient…"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white font-serif text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
          />
        </label>
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-serif capitalize transition-colors border",
              category === cat
                ? "bg-brand-600 text-white border-brand-600"
                : "bg-white text-gray-600 border-gray-200 hover:border-brand-400 hover:text-brand-600"
            )}
          >
            {cat === "all" ? "All" : cat}
          </button>
        ))}
        {isPending && (
          <span className="text-xs text-gray-400 self-center font-serif ml-1">loading…</span>
        )}
      </div>
    </div>
  );
}
