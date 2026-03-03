"use client";

import { useState } from "react";
import { addRating } from "@/lib/actions";
import type { Rating } from "@/db/schema";

interface Props {
  recipeId: number;
  slug: string;
  ratings: Rating[];
}

export function RatingsSection({ recipeId, slug, ratings }: Props) {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  const [authorName, setAuthorName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const avg =
    ratings.length > 0
      ? ratings.reduce((sum, r) => sum + r.score, 0) / ratings.length
      : 0;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selected || !authorName.trim()) return;
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    await addRating(fd);
    setSubmitting(false);
    setSubmitted(true);
    setSelected(0);
    setAuthorName("");
  }

  return (
    <section className="space-y-5">
      <h2
        className="text-2xl font-bold text-gray-700"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Ratings
      </h2>

      {/* Average display */}
      <div className="flex items-center gap-3">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <span
              key={n}
              className={`text-2xl ${n <= Math.round(avg) ? "text-accent-500" : "text-gray-300"}`}
            >
              ★
            </span>
          ))}
        </div>
        {ratings.length > 0 ? (
          <span className="font-serif text-gray-600 text-sm">
            {avg.toFixed(1)} · {ratings.length} {ratings.length === 1 ? "rating" : "ratings"}
          </span>
        ) : (
          <span className="font-serif text-gray-400 text-sm">No ratings yet</span>
        )}
      </div>

      {/* Submit form */}
      {submitted ? (
        <p className="font-serif text-brand-600 text-sm">Thanks for rating!</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4 max-w-sm">
          <input type="hidden" name="recipeId" value={recipeId} />
          <input type="hidden" name="slug" value={slug} />
          <input type="hidden" name="score" value={selected} />

          <div className="space-y-1">
            <label className="text-xs font-serif text-gray-500 uppercase tracking-wide">Your name</label>
            <input
              name="authorName"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
              placeholder="e.g. Grandma Rivka"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-serif text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-serif text-gray-500 uppercase tracking-wide">Your rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setSelected(n)}
                  onMouseEnter={() => setHovered(n)}
                  onMouseLeave={() => setHovered(0)}
                  className={`text-3xl transition-colors ${
                    n <= (hovered || selected) ? "text-accent-500" : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting || !selected || !authorName.trim()}
            className="bg-brand-600 text-white text-sm font-serif font-semibold rounded-xl px-5 py-2 hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Submitting…" : "Submit rating"}
          </button>
        </form>
      )}
    </section>
  );
}
