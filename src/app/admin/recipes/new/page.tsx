import { getAllTags, createRecipe } from "@/lib/actions";
import { RecipeForm } from "@/components/admin/RecipeForm";

export default async function NewRecipePage() {
  const allTags = await getAllTags();

  return (
    <div className="max-w-3xl space-y-2">
      <h2 className="text-xl font-serif text-gray-500">New recipe</h2>
      <RecipeForm action={createRecipe} allTags={allTags} />
    </div>
  );
}
