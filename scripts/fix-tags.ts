import { db } from "../src/db/client";
import { tags, recipeTags } from "../src/db/schema";
import { eq } from "drizzle-orm";

async function main() {
  for (const tagName of ["meat", "kosher"]) {
    let tag = await db.query.tags.findFirst({ where: eq(tags.name, tagName) });
    if (!tag) {
      [tag] = await db.insert(tags).values({ name: tagName }).returning();
      console.log(`  Created tag: ${tagName}`);
    }
    await db.insert(recipeTags).values({ recipeId: 66, tagId: tag.id }).catch(() => {
      console.log(`  Tag ${tagName} already linked (skipping)`);
    });
    console.log(`✓ Tag: ${tagName}`);
  }
  console.log("Done!");
  process.exit(0);
}
main().catch(console.error);
