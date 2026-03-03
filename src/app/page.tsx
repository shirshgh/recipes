import { Suspense } from "react";
import { searchRecipes } from "@/lib/queries";
import { RecipeCard } from "@/components/RecipeCard";
import { SearchFilters } from "@/components/SearchFilters";

interface Props {
  searchParams: Promise<{ q?: string; category?: string; ingredient?: string }>;
}

export default async function HomePage({ searchParams }: Props) {
  const { q, category, ingredient } = await searchParams;
  const recipes = await searchRecipes({ query: q, category, ingredient });

  return (
    <div className="space-y-10">
      {/* Hero heading */}
      <div className="text-center space-y-3 py-4">
        <h1
          className="text-4xl sm:text-5xl font-bold text-brand-700"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Family Recipes
        </h1>
        <p className="text-gray-500 font-serif text-lg">
          {recipes.length} recipe{recipes.length !== 1 ? "s" : ""}
          {q || category || ingredient ? " found" : " and counting"}
        </p>
        {/* Gold divider */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <div className="h-px w-16 bg-accent-500" />
          <span className="text-accent-500 text-lg">✦</span>
          <div className="h-px w-16 bg-accent-500" />
        </div>
      </div>

      <Suspense>
        <SearchFilters />
      </Suspense>

      {recipes.length === 0 ? (
        <div className="text-center py-20 space-y-3">
          <p className="text-5xl">🔍</p>
          <p className="text-xl font-semibold font-serif text-gray-600">No recipes found</p>
          <p className="text-gray-400 font-serif">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
