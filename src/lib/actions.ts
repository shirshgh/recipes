"use server";

import { db } from "@/db/client";
import { recipes, ingredients, recipeTags, tags, comments, ratings } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function slugify(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseRecipeFields(data: FormData) {
  return {
    title: String(data.get("title") ?? ""),
    slug: slugify(String(data.get("title") ?? "")),
    description: String(data.get("description") ?? "") || null,
    category: String(data.get("category") ?? "dinner"),
    servings: Number(data.get("servings") ?? 4),
    prepMinutes: Number(data.get("prepMinutes") ?? 0) || null,
    cookMinutes: Number(data.get("cookMinutes") ?? 0) || null,
    healthScore: Number(data.get("healthScore") ?? 3),
    instructions: String(data.get("instructions") ?? ""),
    imageUrl: String(data.get("imageUrl") ?? "") || null,
    sourceUrl: String(data.get("sourceUrl") ?? "") || null,
    sourceLabel: String(data.get("sourceLabel") ?? "") || null,
  };
}

type IngredientRow = {
  name: string;
  amount: number;
  unit: string;
  notes?: string;
  healthTag?: string;
};

export async function createRecipe(formData: FormData) {
  const fields = parseRecipeFields(formData);

  // Ensure unique slug
  let slug = fields.slug;
  const existing = await db.query.recipes.findFirst({
    where: eq(recipes.slug, slug),
  });
  if (existing) slug = `${slug}-${Date.now()}`;

  const [recipe] = await db.insert(recipes).values({ ...fields, slug }).returning();

  const ingredientList: IngredientRow[] = JSON.parse(
    String(formData.get("ingredientsJson") ?? "[]")
  );
  if (ingredientList.length) {
    await db.insert(ingredients).values(
      ingredientList.map((i) => ({ ...i, recipeId: recipe.id }))
    );
  }

  const tagIds = String(formData.get("tagIds") ?? "")
    .split(",")
    .map(Number)
    .filter(Boolean);
  if (tagIds.length) {
    await db.insert(recipeTags).values(tagIds.map((tagId) => ({ recipeId: recipe.id, tagId })));
  }

  revalidatePath("/");
  redirect(`/recipes/${recipe.slug}`);
}

export async function updateRecipe(id: number, formData: FormData) {
  const fields = parseRecipeFields(formData);

  // Keep existing slug (don't change URL when editing)
  const existing = await db.query.recipes.findFirst({ where: eq(recipes.id, id) });
  const slug = existing?.slug ?? fields.slug;

  await db.update(recipes).set({ ...fields, slug }).where(eq(recipes.id, id));

  // Replace ingredients
  await db.delete(ingredients).where(eq(ingredients.recipeId, id));
  const ingredientList: IngredientRow[] = JSON.parse(
    String(formData.get("ingredientsJson") ?? "[]")
  );
  if (ingredientList.length) {
    await db.insert(ingredients).values(
      ingredientList.map((i) => ({ ...i, recipeId: id }))
    );
  }

  // Replace tags
  await db.delete(recipeTags).where(eq(recipeTags.recipeId, id));
  const tagIds = String(formData.get("tagIds") ?? "")
    .split(",")
    .map(Number)
    .filter(Boolean);
  if (tagIds.length) {
    await db.insert(recipeTags).values(tagIds.map((tagId) => ({ recipeId: id, tagId })));
  }

  revalidatePath("/");
  revalidatePath(`/recipes/${slug}`);
  redirect(`/recipes/${slug}`);
}

export async function deleteRecipe(id: number) {
  await db.delete(recipes).where(eq(recipes.id, id));
  revalidatePath("/");
  redirect("/admin");
}

export async function getAllTags() {
  return db.select().from(tags).orderBy(tags.name);
}

export async function addComment(formData: FormData) {
  const recipeId = Number(formData.get("recipeId"));
  const authorName = String(formData.get("authorName")).trim();
  const text = String(formData.get("text")).trim();
  if (!authorName || !text) return;
  await db.insert(comments).values({ recipeId, authorName, text });
  const slug = String(formData.get("slug"));
  revalidatePath(`/recipes/${slug}`);
}

export async function addRating(formData: FormData) {
  const recipeId = Number(formData.get("recipeId"));
  const authorName = String(formData.get("authorName")).trim();
  const score = Number(formData.get("score"));
  if (!authorName || score < 1 || score > 5) return;
  await db.insert(ratings).values({ recipeId, authorName, score });
  const slug = String(formData.get("slug"));
  revalidatePath(`/recipes/${slug}`);
}
