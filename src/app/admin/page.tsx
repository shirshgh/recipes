export const dynamic = "force-dynamic";

import Link from "next/link";
import { db } from "@/db/client";
import { recipes } from "@/db/schema";
import { deleteRecipe } from "@/lib/actions";
import { HealthBadge } from "@/components/HealthBadge";
import { DeleteButton } from "@/components/admin/DeleteButton";
import { Clock, Users, Pencil } from "lucide-react";
import { asc } from "drizzle-orm";

export default async function AdminPage() {
  const allRecipes = await db.select().from(recipes).orderBy(asc(recipes.category), asc(recipes.title));

  return (
    <div className="space-y-3">
      <p className="text-sm font-serif text-gray-400">{allRecipes.length} recipes total</p>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm font-serif">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="text-left px-5 py-3 text-gray-500 font-semibold">Recipe</th>
              <th className="text-left px-3 py-3 text-gray-500 font-semibold hidden sm:table-cell">Category</th>
              <th className="text-left px-3 py-3 text-gray-500 font-semibold hidden md:table-cell">Health</th>
              <th className="text-left px-3 py-3 text-gray-500 font-semibold hidden lg:table-cell">Source</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {allRecipes.map((recipe) => {
              return (
                <tr key={recipe.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3">
                    <Link
                      href={`/recipes/${recipe.slug}`}
                      className="font-semibold text-gray-800 hover:text-brand-600 transition-colors"
                    >
                      {recipe.title}
                    </Link>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-0.5">
                      {(recipe.prepMinutes ?? 0) + (recipe.cookMinutes ?? 0) > 0 && (
                        <span className="flex items-center gap-1">
                          <Clock size={10} />
                          {(recipe.prepMinutes ?? 0) + (recipe.cookMinutes ?? 0)} min
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Users size={10} />
                        {recipe.servings}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-3 capitalize text-gray-500 hidden sm:table-cell">
                    {recipe.category}
                  </td>
                  <td className="px-3 py-3 hidden md:table-cell">
                    <HealthBadge score={recipe.healthScore} />
                  </td>
                  <td className="px-3 py-3 text-gray-400 hidden lg:table-cell">
                    {recipe.sourceLabel ?? <span className="italic text-gray-300">—</span>}
                  </td>
                  <td className="px-5 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/recipes/${recipe.id}/edit`}
                        className="flex items-center gap-1 text-xs text-brand-600 hover:text-brand-800 transition-colors px-2 py-1 rounded-lg hover:bg-brand-50"
                      >
                        <Pencil size={12} />
                        Edit
                      </Link>
                      <DeleteButton action={deleteRecipe.bind(null, recipe.id)} title={recipe.title} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
