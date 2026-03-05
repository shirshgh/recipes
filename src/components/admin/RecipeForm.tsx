"use client";

import { useRef, useState, useTransition } from "react";
import { Plus, Trash2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Recipe, Ingredient } from "@/db/schema";

const CATEGORIES = ["breakfast", "lunch", "dinner", "dessert", "snack", "soup", "salad", "side", "bread", "drink"];
const HEALTH_TAGS = ["", "protein", "vegetable", "sugar", "fat", "grain"];
const HEALTH_SCORES = [
  { value: 1, label: "1 — Indulgent" },
  { value: 2, label: "2 — Treat" },
  { value: 3, label: "3 — Balanced" },
  { value: 4, label: "4 — Healthy" },
  { value: 5, label: "5 — Very Healthy" },
];

type Tag = { id: number; name: string };
type IngredientRow = { name: string; amount: string; unit: string; notes: string; healthTag: string };

const emptyIngredient = (): IngredientRow => ({ name: "", amount: "", unit: "", notes: "", healthTag: "" });

interface Props {
  action: (formData: FormData) => Promise<void>;
  allTags: Tag[];
  recipe?: Recipe & { ingredients: Ingredient[]; recipeTags: { tag: Tag }[] };
}

export function RecipeForm({ action, allTags, recipe }: Props) {
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const [ingredients, setIngredients] = useState<IngredientRow[]>(
    recipe?.ingredients.map((i) => ({
      name: i.name,
      amount: String(i.amount),
      unit: i.unit,
      notes: i.notes ?? "",
      healthTag: i.healthTag ?? "",
    })) ?? [emptyIngredient()]
  );

  const [selectedTagIds, setSelectedTagIds] = useState<Set<number>>(
    new Set(recipe?.recipeTags.map((rt) => rt.tag.id) ?? [])
  );

  function addIngredient() {
    setIngredients((prev) => [...prev, emptyIngredient()]);
  }

  function removeIngredient(idx: number) {
    setIngredients((prev) => prev.filter((_, i) => i !== idx));
  }

  function updateIngredient(idx: number, field: keyof IngredientRow, value: string) {
    setIngredients((prev) => prev.map((ing, i) => (i === idx ? { ...ing, [field]: value } : ing)));
  }

  function toggleTag(id: number) {
    setSelectedTagIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(formRef.current!);

    const validIngredients = ingredients
      .filter((i) => i.name.trim() && i.amount && i.unit.trim())
      .map((i) => ({
        name: i.name.trim(),
        amount: parseFloat(i.amount),
        unit: i.unit.trim(),
        notes: i.notes.trim() || undefined,
        healthTag: i.healthTag || undefined,
      }));

    fd.set("ingredientsJson", JSON.stringify(validIngredients));
    fd.set("tagIds", [...selectedTagIds].join(","));

    startTransition(() => action(fd));
  }

  const input = "w-full rounded-xl border border-gray-200 px-3 py-2 text-sm font-serif focus:outline-none focus:ring-2 focus:ring-brand-400";
  const label = "block text-sm font-serif font-semibold text-gray-600 mb-1";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

      {/* ── Basic info ──────────────────────────────────────────── */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
        <h2 className="font-bold text-gray-700 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
          Basic Info
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className={label}>Title *</label>
            <input name="title" required defaultValue={recipe?.title} className={input} placeholder="e.g. Grandma's Chicken Soup" />
          </div>

          <div className="sm:col-span-2">
            <label className={label}>Description</label>
            <input name="description" defaultValue={recipe?.description ?? ""} className={input} placeholder="A short one-line description" />
          </div>

          <div>
            <label className={label}>Category *</label>
            <select name="category" defaultValue={recipe?.category ?? "dinner"} className={input}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c} className="capitalize">{c.charAt(0).toUpperCase() + c.slice(1)}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={label}>Health Score</label>
            <select name="healthScore" defaultValue={recipe?.healthScore ?? 3} className={input}>
              {HEALTH_SCORES.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={label}>Servings *</label>
            <input name="servings" type="number" min={1} required defaultValue={recipe?.servings ?? 4} className={input} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={label}>Prep (min)</label>
              <input name="prepMinutes" type="number" min={0} defaultValue={recipe?.prepMinutes ?? ""} className={input} placeholder="15" />
            </div>
            <div>
              <label className={label}>Cook (min)</label>
              <input name="cookMinutes" type="number" min={0} defaultValue={recipe?.cookMinutes ?? ""} className={input} placeholder="30" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Ingredients ─────────────────────────────────────────── */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <h2 className="font-bold text-gray-700 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ingredients
        </h2>

        <div className="space-y-3">
          {/* Header row */}
          <div className="hidden sm:grid sm:grid-cols-[2fr_1fr_1fr_2fr_1.5fr_auto] gap-2 text-xs font-serif font-semibold text-gray-400 uppercase tracking-wide px-1">
            <span>Name</span><span>Amount</span><span>Unit</span><span>Notes</span><span>Health tag</span><span />
          </div>

          {ingredients.map((ing, idx) => (
            <div key={idx} className="grid grid-cols-[2fr_1fr_1fr] sm:grid-cols-[2fr_1fr_1fr_2fr_1.5fr_auto] gap-2 items-center">
              <input value={ing.name} onChange={(e) => updateIngredient(idx, "name", e.target.value)}
                className={input} placeholder="e.g. flour" />
              <input value={ing.amount} onChange={(e) => updateIngredient(idx, "amount", e.target.value)}
                className={input} placeholder="2.5" type="number" step="any" min="0" />
              <input value={ing.unit} onChange={(e) => updateIngredient(idx, "unit", e.target.value)}
                className={input} placeholder="cups" list="units-list" />
              <input value={ing.notes} onChange={(e) => updateIngredient(idx, "notes", e.target.value)}
                className={cn(input, "col-span-3 sm:col-span-1")} placeholder="sifted, optional…" />
              <select value={ing.healthTag} onChange={(e) => updateIngredient(idx, "healthTag", e.target.value)}
                className={cn(input, "col-span-2 sm:col-span-1")}>
                {HEALTH_TAGS.map((t) => (
                  <option key={t} value={t}>{t || "— no tag —"}</option>
                ))}
              </select>
              <button type="button" onClick={() => removeIngredient(idx)}
                className="text-gray-300 hover:text-red-400 transition-colors p-1">
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>

        <datalist id="units-list">
          {["g", "kg", "ml", "l", "cup", "cups", "tbsp", "tsp", "oz", "lb", "piece", "pieces", "medium", "large", "small", "can", "bunch", "cloves", "stalks", "slices", "pinch", "handful"].map((u) => (
            <option key={u} value={u} />
          ))}
        </datalist>

        <button type="button" onClick={addIngredient}
          className="flex items-center gap-2 text-sm font-serif text-brand-600 hover:text-brand-800 transition-colors">
          <Plus size={15} /> Add ingredient
        </button>
      </section>

      {/* ── Instructions ────────────────────────────────────────── */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-3">
        <h2 className="font-bold text-gray-700 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
          Instructions
        </h2>
        <textarea name="instructions" required rows={10} defaultValue={recipe?.instructions ?? ""}
          className={cn(input, "resize-y")}
          placeholder={"1. Preheat oven to 350°F.\n2. Mix ingredients...\n3. Bake for 30 minutes."} />
      </section>

      {/* ── Tags ────────────────────────────────────────────────── */}
      {allTags.length > 0 && (
        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-3">
          <h2 className="font-bold text-gray-700 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button key={tag.id} type="button" onClick={() => toggleTag(tag.id)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-serif border transition-colors",
                  selectedTagIds.has(tag.id)
                    ? "bg-brand-600 text-white border-brand-600"
                    : "bg-white text-gray-600 border-gray-200 hover:border-brand-400"
                )}>
                #{tag.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ── Source & image ──────────────────────────────────────── */}
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
        <h2 className="font-bold text-gray-700 text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
          Source & Image
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={label}>Source label</label>
            <input name="sourceLabel" defaultValue={recipe?.sourceLabel ?? ""} className={input} placeholder="e.g. Grandma Rivka, kosher.com" />
          </div>
          <div>
            <label className={label}>Source URL</label>
            <input name="sourceUrl" type="url" defaultValue={recipe?.sourceUrl ?? ""} className={input} placeholder="https://..." />
          </div>
          <div className="sm:col-span-2">
            <label className={label}>Image URL</label>
            <input name="imageUrl" type="url" defaultValue={recipe?.imageUrl ?? ""} className={input} placeholder="https://..." />
          </div>
        </div>
      </section>

      {/* ── Submit ──────────────────────────────────────────────── */}
      <div className="flex items-center gap-4 pb-4">
        <button type="submit" disabled={isPending}
          className="flex items-center gap-2 bg-brand-600 text-white font-serif font-semibold px-8 py-3 rounded-xl hover:bg-brand-700 disabled:opacity-60 transition-colors shadow-sm">
          {isPending && <Loader2 size={16} className="animate-spin" />}
          {recipe ? "Save changes" : "Add recipe"}
        </button>
        <a href="/admin" className="text-sm font-serif text-gray-400 hover:text-gray-600 transition-colors">
          Cancel
        </a>
      </div>
    </form>
  );
}
