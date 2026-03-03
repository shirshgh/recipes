export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Users, ChefHat, ExternalLink } from "lucide-react";
import Link from "next/link";
import { getRecipeBySlug } from "@/lib/queries";
import { HealthBadge } from "@/components/HealthBadge";
import { IngredientScaler } from "@/components/IngredientScaler";
import { RatingsSection } from "@/components/RatingsSection";
import { CommentsSection } from "@/components/CommentsSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);

  if (!recipe) notFound();

  const totalTime = (recipe.prepMinutes ?? 0) + (recipe.cookMinutes ?? 0);

  return (
    <article className="space-y-8">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-serif text-brand-600 hover:text-brand-800 transition-colors"
      >
        <ArrowLeft size={14} />
        All recipes
      </Link>

      {/* Hero image */}
      {recipe.imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-64 sm:h-80 object-cover rounded-2xl"
        />
      ) : (
        <div className="w-full h-52 bg-brand-50 rounded-2xl flex items-center justify-center text-7xl">
          🍽️
        </div>
      )}

      {/* Title + health */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <p className="text-sm font-serif uppercase tracking-widest text-accent-600 font-semibold">
            {recipe.category}
          </p>
          <h1
            className="text-4xl font-bold text-gray-800 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {recipe.title}
          </h1>
          {recipe.description && (
            <p className="text-gray-500 font-serif text-lg leading-relaxed max-w-2xl">
              {recipe.description}
            </p>
          )}
          {recipe.sourceUrl && (
            <a
              href={recipe.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-serif text-brand-600 hover:text-brand-800 hover:underline transition-colors"
            >
              <ExternalLink size={13} />
              Original recipe on {recipe.sourceLabel ?? recipe.sourceUrl}
            </a>
          )}
        </div>
        <HealthBadge score={recipe.healthScore} />
      </div>

      {/* Gold divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-accent-400" />
        <span className="text-accent-500">✦</span>
        <div className="h-px flex-1 bg-accent-400" />
      </div>

      {/* Meta chips */}
      <div className="flex flex-wrap gap-3 text-sm font-serif text-gray-600">
        {recipe.prepMinutes != null && (
          <span className="flex items-center gap-1.5 bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-sm">
            <ChefHat size={14} className="text-brand-500" />
            Prep: {recipe.prepMinutes} min
          </span>
        )}
        {recipe.cookMinutes != null && (
          <span className="flex items-center gap-1.5 bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-sm">
            <Clock size={14} className="text-brand-500" />
            Cook: {recipe.cookMinutes} min
          </span>
        )}
        {totalTime > 0 && (
          <span className="flex items-center gap-1.5 bg-brand-600 text-white rounded-xl px-4 py-2 font-semibold shadow-sm">
            Total: {totalTime} min
          </span>
        )}
        <span className="flex items-center gap-1.5 bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-sm">
          <Users size={14} className="text-brand-500" />
          Base: {recipe.servings} servings
        </span>
      </div>

      {/* Tags */}
      {recipe.recipeTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {recipe.recipeTags.map(({ tag }) => (
            <span
              key={tag.id}
              className="text-xs px-3 py-1 rounded-full bg-accent-300 text-gray-700 font-serif font-semibold"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      )}

      {/* Main 2-col layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Ingredients with scaler */}
        <section className="lg:col-span-2 space-y-4">
          <h2
            className="text-2xl font-bold text-gray-700"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ingredients
          </h2>
          <IngredientScaler
            baseServings={recipe.servings}
            ingredients={recipe.ingredients}
          />
        </section>

        {/* Instructions */}
        <section className="lg:col-span-3 space-y-4">
          <h2
            className="text-2xl font-bold text-gray-700"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Instructions
          </h2>
          <div className="font-serif text-gray-700 leading-relaxed whitespace-pre-wrap bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-[15px]">
            {recipe.instructions}
          </div>
        </section>
      </div>

      {/* Gold divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-accent-400" />
        <span className="text-accent-500">✦</span>
        <div className="h-px flex-1 bg-accent-400" />
      </div>

      {/* Ratings */}
      <RatingsSection recipeId={recipe.id} slug={slug} ratings={recipe.ratings} />

      {/* Gold divider */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-accent-400" />
        <span className="text-accent-500">✦</span>
        <div className="h-px flex-1 bg-accent-400" />
      </div>

      {/* Comments */}
      <CommentsSection recipeId={recipe.id} slug={slug} comments={recipe.comments} />
    </article>
  );
}
