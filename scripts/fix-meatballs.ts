import { db } from "../src/db/client";
import { recipes, ingredients, recipeTags } from "../src/db/schema";
import { eq, inArray } from "drizzle-orm";

async function main() {
  // Delete the duplicate (id 67) and its related data
  await db.delete(recipeTags).where(eq(recipeTags.recipeId, 67));
  await db.delete(ingredients).where(eq(ingredients.recipeId, 67));
  await db.delete(recipes).where(eq(recipes.id, 67));
  console.log("✓ Deleted duplicate recipe (id 67)");

  // Check ingredients on id 66 (first insert - ingredients may have been missing)
  const ing = await db.select().from(ingredients).where(eq(ingredients.recipeId, 66));
  console.log(`  Recipe 66 has ${ing.length} ingredients`);

  if (ing.length === 0) {
    // Re-insert ingredients for id 66
    await db.insert(ingredients).values([
      { recipeId: 66, name: "ground chicken breast", amount: 500, unit: "g", healthTag: "protein" },
      { recipeId: 66, name: "onion", amount: 2, unit: "", notes: "for meatballs" },
      { recipeId: 66, name: "potato", amount: 1, unit: "medium", notes: "grated" },
      { recipeId: 66, name: "eggs", amount: 2, unit: "" },
      { recipeId: 66, name: "seasoned breadcrumbs", amount: 3, unit: "tbsp", healthTag: "grain" },
      { recipeId: 66, name: "salt", amount: 0, unit: "", notes: "to taste" },
      { recipeId: 66, name: "pepper", amount: 0, unit: "", notes: "to taste" },
      { recipeId: 66, name: "fresh parsley", amount: 0, unit: "", notes: "to taste", healthTag: "vegetable" },
      { recipeId: 66, name: "onion", amount: 3, unit: "", notes: "for sauce", healthTag: "vegetable" },
      { recipeId: 66, name: "teriyaki sauce", amount: 1, unit: "tbsp" },
      { recipeId: 66, name: "tahini", amount: 1, unit: "tbsp", healthTag: "fat" },
      { recipeId: 66, name: "turmeric", amount: 1, unit: "tsp" },
      { recipeId: 66, name: "hot water", amount: 1.5, unit: "cups" },
      { recipeId: 66, name: "chicken broth", amount: 0, unit: "", notes: "small amount" },
      { recipeId: 66, name: "coarse black pepper", amount: 0, unit: "", notes: "to taste" },
    ]);
    console.log("✓ Re-inserted ingredients for recipe 66");
  }

  // Fix the imageUrl — encode the Hebrew filename
  const fixedImageUrl =
    "https://metukimil.co.il/wp-content/uploads/2020/02/" +
    encodeURIComponent("\u05e7\u05e6\u05d9\u05e6\u05d5\u05ea-\u05e2\u05d5\u05e3-\u05d1\u05e8\u05d5\u05d8\u05d1-\u05d0\u05d9\u05dc\u05e0\u05d9\u05ea-\u05db\u05e8\u05d1\u05d911.jpg");
  await db.update(recipes).set({ imageUrl: fixedImageUrl }).where(eq(recipes.id, 66));
  console.log("✓ Fixed image URL encoding for recipe 66");

  console.log("\nDone!");
  process.exit(0);
}
main().catch(console.error);
