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

## Image Handling
- Recipe images are stored in `public/images/` and referenced as `/images/filename.jpg` in `imageUrl`.
- When the user says "add photo" and provides a filename in `public/images/`, use `/images/filename` as the `imageUrl`.
