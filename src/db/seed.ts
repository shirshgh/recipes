import { db } from "./client";
import { tags } from "./schema";
import { seedOther } from "./seeds/other";
import { seedSalads } from "./seeds/salads";

async function seed() {
  console.log("Seeding database…\n");

  const tagRows = await db
    .insert(tags)
    .values([
      { name: "vegan" },
      { name: "vegetarian" },
      { name: "gluten-free" },
      { name: "quick" },
      { name: "family-favourite" },
      { name: "dairy-free" },
      { name: "parve" },
      { name: "kosher" },
      { name: "meat" },
      { name: "pesach" },
      { name: "one-pot" },
    ])
    .returning();

  const tagByName = Object.fromEntries(tagRows.map((t) => [t.name, t.id]));

  console.log("── Side dishes, meat, fish, soups, desserts ──");
  await seedOther(tagByName);

  console.log("\n── Salads ──");
  await seedSalads(tagByName);

  const total = (await db.query.recipes.findMany()).length;
  console.log(`\nDone! ${total} recipes in the database.`);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
