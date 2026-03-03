"use client";

import { useState } from "react";
import { addComment } from "@/lib/actions";
import type { Comment } from "@/db/schema";

interface Props {
  recipeId: number;
  slug: string;
  comments: Comment[];
}

export function CommentsSection({ recipeId, slug, comments }: Props) {
  const [authorName, setAuthorName] = useState("");
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!authorName.trim() || !text.trim()) return;
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    await addComment(fd);
    setSubmitting(false);
    setSubmitted(true);
    setAuthorName("");
    setText("");
  }

  return (
    <section className="space-y-5">
      <h2
        className="text-2xl font-bold text-gray-700"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Comments
      </h2>

      {/* Comment list */}
      {comments.length > 0 ? (
        <ul className="space-y-4">
          {comments.map((c) => (
            <li key={c.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="font-serif font-semibold text-brand-700 text-sm">{c.authorName}</span>
                {c.createdAt && (
                  <span className="text-xs text-gray-400 font-serif">
                    {new Date(c.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>
              <p className="font-serif text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">{c.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-serif text-gray-400 text-sm">No comments yet. Be the first!</p>
      )}

      {/* Submit form */}
      {submitted ? (
        <p className="font-serif text-brand-600 text-sm">Comment posted — thanks!</p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4 max-w-lg">
          <input type="hidden" name="recipeId" value={recipeId} />
          <input type="hidden" name="slug" value={slug} />

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
            <label className="text-xs font-serif text-gray-500 uppercase tracking-wide">Comment</label>
            <textarea
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              rows={3}
              placeholder="Share your thoughts on this recipe…"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-serif text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting || !authorName.trim() || !text.trim()}
            className="bg-brand-600 text-white text-sm font-serif font-semibold rounded-xl px-5 py-2 hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Posting…" : "Post comment"}
          </button>
        </form>
      )}
    </section>
  );
}
