import { db } from "../src/db/client";
import { recipes } from "../src/db/schema";
import { like } from "drizzle-orm";

async function main() {
  const rows = await db.select({ id: recipes.id, title: recipes.title, slug: recipes.slug, imageUrl: recipes.imageUrl })
    .from(recipes)
    .where(like(recipes.title, "%Chicken Meatball%"));
  console.log(JSON.stringify(rows, null, 2));
  process.exit(0);
}
main().catch(console.error);
