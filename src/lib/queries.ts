import { db } from "@/db/client";
import { recipes, ingredients, tags, recipeTags } from "@/db/schema";
import { eq, like, or, inArray, and } from "drizzle-orm";

export type RecipeWithIngredients = Awaited<ReturnType<typeof getRecipeBySlug>>;
export type RecipeSummary = Awaited<ReturnType<typeof searchRecipes>>[number];

export async function searchRecipes(opts: {
  query?: string;
  category?: string;
  ingredient?: string;
}) {
  const { query, category, ingredient } = opts;

  // If filtering by ingredient name, first find matching recipeIds
  let ingredientRecipeIds: number[] | undefined;
  if (ingredient && ingredient.trim()) {
    const rows = await db
      .select({ recipeId: ingredients.recipeId })
      .from(ingredients)
      .where(like(ingredients.name, `%${ingredient.trim()}%`));
    ingredientRecipeIds = rows.map((r) => r.recipeId);
    if (ingredientRecipeIds.length === 0) return [];
  }

  const conditions = [];

  if (query && query.trim()) {
    conditions.push(
      or(
        like(recipes.title, `%${query.trim()}%`),
        like(recipes.description, `%${query.trim()}%`)
      )
    );
  }

  if (category && category !== "all") {
    conditions.push(eq(recipes.category, category));
  }

  if (ingredientRecipeIds) {
    conditions.push(inArray(recipes.id, ingredientRecipeIds));
  }

  const rows =
    conditions.length > 0
      ? await db
          .select()
          .from(recipes)
          .where(and(...conditions))
      : await db.select().from(recipes);

  return rows;
}

export async function getRecipeBySlug(slug: string) {
  const recipe = await db.query.recipes.findFirst({
    where: eq(recipes.slug, slug),
    with: { ingredients: true, recipeTags: { with: { tag: true } } },
  });
  return recipe ?? null;
}

export async function getAllCategories(): Promise<string[]> {
  const rows = await db
    .selectDistinct({ category: recipes.category })
    .from(recipes);
  return rows.map((r) => r.category).sort();
}

export async function getAllTags() {
  return db.select().from(tags);
}
