export const dynamic = "force-dynamic";

import { notFound } from "next/navigation";
import { getAllTags, updateRecipe } from "@/lib/actions";
import { RecipeForm } from "@/components/admin/RecipeForm";
import { db } from "@/db/client";
import { recipes } from "@/db/schema";
import { eq } from "drizzle-orm";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditRecipePage({ params }: Props) {
  const { id } = await params;
  const recipe = await db.query.recipes.findFirst({
    where: eq(recipes.id, Number(id)),
    with: { ingredients: true, recipeTags: { with: { tag: true } } },
  });

  if (!recipe) notFound();

  const allTags = await getAllTags();
  const updateWithId = updateRecipe.bind(null, recipe.id);

  return (
    <div className="max-w-3xl space-y-2">
      <h2 className="text-xl font-serif text-gray-500">Editing: {recipe.title}</h2>
      <RecipeForm action={updateWithId} allTags={allTags} recipe={recipe} />
    </div>
  );
}
