import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { relations } from "drizzle-orm";

// ─── Recipes ────────────────────────────────────────────────────────────────

export const recipes = sqliteTable("recipes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  category: text("category").notNull(), // e.g. "breakfast", "dinner", "dessert"
  imageUrl: text("image_url"),

  // Servings — the "base" serving size stored in DB
  servings: integer("servings").notNull().default(4),

  // Time
  prepMinutes: integer("prep_minutes"),
  cookMinutes: integer("cook_minutes"),

  // Health score: 1 (indulgent) – 5 (very healthy)
  // Calculated from ingredients but can be overridden
  healthScore: integer("health_score").notNull().default(3),

  instructions: text("instructions").notNull(), // plain text or markdown

  // Source attribution
  sourceUrl: text("source_url"),       // e.g. "https://www.kosher.com/recipe/..."
  sourceLabel: text("source_label"),   // e.g. "kosher.com" or "Grandma Rivka"
  referredBy: text("referred_by"),     // e.g. "Esti Fertel"

  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date()),
});

// ─── Ingredients ─────────────────────────────────────────────────────────────
// Each row = one ingredient line for a recipe at its BASE serving size.

export const ingredients = sqliteTable("ingredients", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  recipeId: integer("recipe_id")
    .notNull()
    .references(() => recipes.id, { onDelete: "cascade" }),
  name: text("name").notNull(),       // "flour"
  amount: real("amount").notNull(),    // 2.5
  unit: text("unit").notNull(),        // "cups"
  notes: text("notes"),               // "sifted", "room temperature"
  // Used to classify ingredient for health scoring
  healthTag: text("health_tag"),      // "protein", "vegetable", "sugar", "fat", "grain"
});

// ─── Tags ────────────────────────────────────────────────────────────────────

export const tags = sqliteTable("tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(), // "vegan", "gluten-free", "quick"
});

export const recipeTags = sqliteTable("recipe_tags", {
  recipeId: integer("recipe_id")
    .notNull()
    .references(() => recipes.id, { onDelete: "cascade" }),
  tagId: integer("tag_id")
    .notNull()
    .references(() => tags.id, { onDelete: "cascade" }),
});

// ─── Comments ────────────────────────────────────────────────────────────────

export const comments = sqliteTable("comments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  recipeId: integer("recipe_id").notNull().references(() => recipes.id, { onDelete: "cascade" }),
  authorName: text("author_name").notNull(),
  text: text("text").notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ─── Ratings ─────────────────────────────────────────────────────────────────

export const ratings = sqliteTable("ratings", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  recipeId: integer("recipe_id").notNull().references(() => recipes.id, { onDelete: "cascade" }),
  authorName: text("author_name").notNull(),
  score: integer("score").notNull(), // 1–5
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ─── Relations ───────────────────────────────────────────────────────────────

export const recipesRelations = relations(recipes, ({ many }) => ({
  ingredients: many(ingredients),
  recipeTags: many(recipeTags),
  comments: many(comments),
  ratings: many(ratings),
}));

export const ingredientsRelations = relations(ingredients, ({ one }) => ({
  recipe: one(recipes, { fields: [ingredients.recipeId], references: [recipes.id] }),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  recipeTags: many(recipeTags),
}));

export const recipeTagsRelations = relations(recipeTags, ({ one }) => ({
  recipe: one(recipes, { fields: [recipeTags.recipeId], references: [recipes.id] }),
  tag: one(tags, { fields: [recipeTags.tagId], references: [tags.id] }),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  recipe: one(recipes, { fields: [comments.recipeId], references: [recipes.id] }),
}));

export const ratingsRelations = relations(ratings, ({ one }) => ({
  recipe: one(recipes, { fields: [ratings.recipeId], references: [recipes.id] }),
}));

// ─── Types ───────────────────────────────────────────────────────────────────

export type Recipe = typeof recipes.$inferSelect;
export type NewRecipe = typeof recipes.$inferInsert;
export type Ingredient = typeof ingredients.$inferSelect;
export type NewIngredient = typeof ingredients.$inferInsert;
export type Tag = typeof tags.$inferSelect;
export type Comment = typeof comments.$inferSelect;
export type Rating = typeof ratings.$inferSelect;
