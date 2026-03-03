import { db } from "../client";
import { recipes, ingredients, tags, recipeTags } from "../schema";

export type IngredientInput = Omit<typeof ingredients.$inferInsert, "recipeId">;

export async function addRecipe(
  recipe: typeof recipes.$inferInsert,
  ingredientList: IngredientInput[],
  tagNames: string[],
  tagByName: Record<string, number>
) {
  const [r] = await db.insert(recipes).values(recipe).returning();
  if (ingredientList.length) {
    await db.insert(ingredients).values(ingredientList.map((i) => ({ ...i, recipeId: r.id })));
  }
  const validTags = tagNames.filter((n) => tagByName[n]);
  if (validTags.length) {
    await db.insert(recipeTags).values(validTags.map((n) => ({ recipeId: r.id, tagId: tagByName[n] })));
  }
  console.log(`  ✓ ${r.title}`);
}
