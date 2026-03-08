Add one or more recipes to the family recipe database from URLs, text descriptions, or any other source the user provides.

## Instructions

The user will provide one or more recipe sources. These can be:
- URLs (e.g. kosher.com, a blog, any recipe site)
- A pasted block of text with a recipe
- A description ("add grandma's apple cake — here are the ingredients: ...")
- A mix of the above

For each recipe source:

1. **If it's a URL**, use WebFetch to retrieve the page content and extract the recipe.
2. **If it's text/description**, parse it directly.

Extract the following fields for each recipe:
- `title` (required)
- `description` (one-line summary, optional)
- `category` — one of: breakfast, lunch, dinner, dessert, snack, soup, salad, side, drink
- `servings` (number, default 4)
- `prepMinutes` (optional)
- `cookMinutes` (optional)
- `healthScore` — 1 (indulgent) to 5 (very healthy), estimate based on ingredients
- `instructions` (plain text, numbered steps)
- `sourceUrl` (the URL if one was provided)
- `sourceLabel` (domain name or person's name if known, e.g. "kosher.com" or "Grandma Rivka")
- `imageUrl` (if found on the page, optional)
- `ingredients` — array of: `{ name, amount, unit, notes?, healthTag? }`
  - healthTag is one of: protein, vegetable, sugar, fat, grain (or omit if unclear)
- `tags` — array of tag names that fit from: dairy, meat, pareve, vegan, vegetarian, gluten-free, quick, passover, shabbat, kosher (only include ones that clearly apply)

After extracting all recipes, show the user a summary of what you found (title, category, number of ingredients) and ask them to confirm before inserting.

Once confirmed, write a TypeScript script to `scripts/insert-recipes-temp.ts` that inserts all the recipes using Drizzle ORM, then run it with:

```bash
cd /Users/shirsh/Library/CloudStorage/OneDrive-Mobileye/documents/recipe
tsx --env-file=.env.local scripts/insert-recipes-temp.ts
```

The script should:
1. Import `db` from `@/db/client` (use the alias or relative path `../../src/db/client` from scripts/)
2. Import the schema tables: `recipes`, `ingredients`, `tags`, `recipeTags`
3. Use `eq` from `drizzle-orm` for lookups
4. For each recipe:
   a. Generate a slug from the title (lowercase, hyphens, no special chars)
   b. Check for slug collision and append `-2`, `-3` etc. if needed
   c. Insert the recipe and get its id
   d. Insert all ingredients
   e. For each tag name: find or create the tag, then insert into recipeTags
5. Log each recipe title as it's inserted
6. Log total count at the end

After running, delete the temp script file, then tell the user the recipes are live and they can view them at /admin.

## Script template to follow

```typescript
import { db } from "../src/db/client";
import { recipes, ingredients, tags, recipeTags } from "../src/db/schema";
import { eq } from "drizzle-orm";

async function main() {
  // recipe data goes here as an array
  const recipesToInsert = [ /* ... */ ];

  for (const r of recipesToInsert) {
    // slug
    let slug = r.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const existing = await db.query.recipes.findFirst({ where: eq(recipes.slug, slug) });
    if (existing) slug = `${slug}-${Date.now()}`;

    const [recipe] = await db.insert(recipes).values({
      title: r.title,
      slug,
      description: r.description ?? null,
      category: r.category,
      servings: r.servings ?? 4,
      prepMinutes: r.prepMinutes ?? null,
      cookMinutes: r.cookMinutes ?? null,
      healthScore: r.healthScore ?? 3,
      instructions: r.instructions,
      sourceUrl: r.sourceUrl ?? null,
      sourceLabel: r.sourceLabel ?? null,
      imageUrl: r.imageUrl ?? null,
    }).returning();

    if (r.ingredients?.length) {
      await db.insert(ingredients).values(
        r.ingredients.map((i: any) => ({ ...i, recipeId: recipe.id }))
      );
    }

    for (const tagName of (r.tags ?? [])) {
      let tag = await db.query.tags.findFirst({ where: eq(tags.name, tagName) });
      if (!tag) {
        [tag] = await db.insert(tags).values({ name: tagName }).returning();
      }
      await db.insert(recipeTags).values({ recipeId: recipe.id, tagId: tag.id });
    }

    console.log(`✓ ${recipe.title}`);
  }

  console.log(`\nDone! ${recipesToInsert.length} recipe(s) added.`);
  process.exit(0);
}

main().catch(console.error);
```
