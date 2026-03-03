import Link from "next/link";
import { Clock, Users } from "lucide-react";
import { HealthBadge } from "./HealthBadge";
import type { Recipe } from "@/db/schema";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const totalTime = (recipe.prepMinutes ?? 0) + (recipe.cookMinutes ?? 0);

  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      {/* Image */}
      <div className="relative">
        {recipe.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-brand-50 flex items-center justify-center text-5xl">
            🍽️
          </div>
        )}

        {/* Source badge overlaid on image */}
        {recipe.sourceLabel && (
          <span className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-xs font-serif font-semibold text-brand-700 px-2 py-0.5 rounded-full shadow-sm border border-brand-100">
            {recipe.sourceLabel}
          </span>
        )}
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="font-bold text-gray-800 group-hover:text-brand-600 leading-snug text-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {recipe.title}
          </h3>
          <HealthBadge score={recipe.healthScore} />
        </div>

        {recipe.description && (
          <p className="text-sm text-gray-500 font-serif line-clamp-2 leading-relaxed">
            {recipe.description}
          </p>
        )}

        <div className="flex items-center gap-3 text-xs text-gray-400 pt-1 font-serif">
          {totalTime > 0 && (
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {totalTime} min
            </span>
          )}
          <span className="flex items-center gap-1">
            <Users size={12} />
            {recipe.servings} servings
          </span>
          <span className="capitalize text-brand-500 font-semibold ml-auto">
            {recipe.category}
          </span>
        </div>
      </div>
    </Link>
  );
}
