import { db } from "../src/db/client";
import { recipes, ingredients, tags, recipeTags } from "../src/db/schema";
import { eq } from "drizzle-orm";

async function main() {
  // Full relational query — same as the detail page uses
  const recipe = await db.query.recipes.findFirst({
    where: eq(recipes.slug, "chicken-meatballs-in-amazing-sauce-for-kids"),
    with: { ingredients: true, recipeTags: { with: { tag: true } } },
  });

  if (!recipe) {
    console.log("Recipe NOT FOUND in Turso DB");
    process.exit(1);
  }

  console.log("Recipe found:");
  console.log("  id:", recipe.id);
  console.log("  title:", recipe.title);
  console.log("  slug:", recipe.slug);
  console.log("  category:", recipe.category);
  console.log("  healthScore:", recipe.healthScore);
  console.log("  imageUrl:", recipe.imageUrl);
  console.log("  sourceUrl:", recipe.sourceUrl);
  console.log("  createdAt:", recipe.createdAt);
  console.log("  updatedAt:", recipe.updatedAt);
  console.log("  ingredients count:", recipe.ingredients.length);
  console.log("  tags:", recipe.recipeTags.map((rt: any) => rt.tag.name));

  // Check for any null/bad values in ingredients
  for (const ing of recipe.ingredients) {
    if (ing.amount === null || ing.amount === undefined) {
      console.log("  ⚠️  NULL amount on ingredient:", ing.name);
    }
  }

  console.log("\nAll good — recipe is queryable.");
  process.exit(0);
}
main().catch((err) => {
  console.error("Query failed:", err);
  process.exit(1);
});
