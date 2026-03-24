# Recipe Project — Rules for Claude

## Tagging Rules

### `dairy` tag
Only apply the `dairy` tag when a recipe contains **actual dairy products** such as:
- milk, cream, sour cream, yogurt, cheese (any kind), butter*

**Do NOT add `dairy`** if the only "dairy-ish" ingredient is **butter or margarine**.
- Butter/margarine can be pareve or dairy depending on the brand; in this family's context, recipes that only have butter or margarine should **not** be tagged `dairy`.
- Exception: if the recipe explicitly uses dairy butter alongside other dairy ingredients, `dairy` is appropriate.

### `referredBy` field
- Only populate `referredBy` when the user explicitly provides a name ("referred by [Name]").
- Leave `null` if not specified — do not guess or infer.

## Category List
breakfast, lunch, dinner, dessert, snack, soup, salad, side, bread, cookies, cakes, drink

**Do NOT use `passover` as a category.** Use the proper food category (dessert, side, breakfast, etc.) and add `passover` as a **tag** instead. This allows passover recipes to appear both in the Passover filter AND their food category filter.

## Passover Recipes
Always set the food category (dessert, side, breakfast, etc.) AND add `passover` to the tags array.
Example: Passover Pear Crumble → `category: "dessert"`, `tags: ["pareve", "passover"]`

## Adding Recipes via Voice
The user can provide a WhatsApp audio file path. Run:
```
whisper '<path>' --language English --output_dir /tmp/whisper_out --output_format txt
```
Then read the transcription from `/tmp/whisper_out/*.txt` and proceed as normal.

## Image Handling
- Recipe images are stored in `public/images/` and referenced as `/images/filename.jpg` in `imageUrl`.
- When the user says "add photo" and provides a filename in `public/images/`, use `/images/filename` as the `imageUrl`.
