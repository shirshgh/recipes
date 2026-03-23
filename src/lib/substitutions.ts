// Set to false to hide the "substitute?" feature everywhere
export const SUBSTITUTIONS_ENABLED = true;

export type SubstitutionEntry = {
  sub: string;
  ratio?: string;
  context?: string;
  dietaryNote?: string;
};

const SUBSTITUTIONS: Record<string, SubstitutionEntry[]> = {
  butter: [
    { sub: "margarine", ratio: "1:1" },
    { sub: "coconut oil", ratio: "¾ cup per cup", context: "in baking", dietaryNote: "dairy-free" },
    { sub: "applesauce", ratio: "1:1", context: "in baking — reduces fat, adds moisture", dietaryNote: "vegan" },
  ],
  margarine: [
    { sub: "butter", ratio: "1:1" },
    { sub: "coconut oil", ratio: "1:1", dietaryNote: "dairy-free" },
  ],
  "sour cream": [
    { sub: "plain yogurt", ratio: "1:1", context: "works in dips, dressings, and baked goods" },
    { sub: "coconut cream", ratio: "1:1", context: "for baking", dietaryNote: "dairy-free" },
    { sub: "mayonnaise + squeeze of lemon", ratio: "1:1", context: "in dips and dressings" },
  ],
  milk: [
    { sub: "oat milk", ratio: "1:1", dietaryNote: "dairy-free" },
    { sub: "almond milk", ratio: "1:1", dietaryNote: "dairy-free" },
    { sub: "soy milk", ratio: "1:1", dietaryNote: "dairy-free" },
  ],
  "heavy cream": [
    { sub: "coconut cream", ratio: "1:1", dietaryNote: "dairy-free" },
    { sub: "evaporated milk", ratio: "1:1" },
  ],
  "cream cheese": [
    { sub: "ricotta cheese", ratio: "1:1", context: "texture will be slightly looser" },
    { sub: "cashew cream", ratio: "1:1", dietaryNote: "vegan" },
  ],
  eggs: [
    { sub: "flax egg (1 tbsp ground flax + 3 tbsp water)", ratio: "1 per egg", context: "in baking — let sit 5 min", dietaryNote: "vegan" },
    { sub: "applesauce", ratio: "¼ cup per egg", context: "in baking — adds moisture", dietaryNote: "vegan" },
    { sub: "mashed banana", ratio: "¼ cup per egg", context: "in baking — adds sweetness", dietaryNote: "vegan" },
  ],
  flour: [
    { sub: "almond flour", ratio: "1:1", context: "denser result — best in cookies and quick breads", dietaryNote: "gluten-free" },
    { sub: "oat flour", ratio: "1:1", context: "lighter texture", dietaryNote: "gluten-free if certified" },
    { sub: "gluten-free all-purpose blend", ratio: "1:1", dietaryNote: "gluten-free" },
  ],
  "spelt flour": [
    { sub: "all-purpose flour", ratio: "1:1", context: "less nutty flavour" },
    { sub: "whole wheat flour", ratio: "1:1", context: "similar texture and nutty taste" },
  ],
  sugar: [
    { sub: "honey", ratio: "¾ cup per cup", context: "reduce other liquids by ¼ cup" },
    { sub: "maple syrup", ratio: "¾ cup per cup", context: "reduce other liquids by 3 tbsp", dietaryNote: "vegan" },
    { sub: "coconut sugar", ratio: "1:1", context: "slight caramel flavour" },
  ],
  "brown sugar": [
    { sub: "white sugar + 1 tsp molasses", ratio: "per cup", context: "mix well" },
    { sub: "coconut sugar", ratio: "1:1", context: "slight caramel flavour" },
  ],
  oil: [
    { sub: "melted butter", ratio: "1:1" },
    { sub: "applesauce", ratio: "1:1", context: "in baking — reduces fat", dietaryNote: "vegan" },
    { sub: "avocado oil", ratio: "1:1" },
  ],
  "olive oil": [
    { sub: "avocado oil", ratio: "1:1", context: "neutral flavour, higher smoke point" },
    { sub: "canola oil", ratio: "1:1", context: "neutral flavour" },
  ],
  "canola oil": [
    { sub: "vegetable oil", ratio: "1:1" },
    { sub: "olive oil", ratio: "1:1", context: "adds flavour" },
  ],
  vinegar: [
    { sub: "lemon juice", ratio: "1:1", context: "milder acidity" },
    { sub: "white wine vinegar", ratio: "1:1" },
  ],
  "apple cider vinegar": [
    { sub: "white wine vinegar", ratio: "1:1" },
    { sub: "lemon juice", ratio: "1:1", context: "slightly milder" },
  ],
  "lemon juice": [
    { sub: "lime juice", ratio: "1:1" },
    { sub: "white wine vinegar", ratio: "half the amount", context: "more acidic" },
  ],
  honey: [
    { sub: "maple syrup", ratio: "1:1", dietaryNote: "vegan" },
    { sub: "agave nectar", ratio: "1:1", dietaryNote: "vegan" },
    { sub: "silan (date syrup)", ratio: "1:1", context: "richer flavour" },
  ],
  silan: [
    { sub: "honey", ratio: "1:1" },
    { sub: "maple syrup", ratio: "1:1", dietaryNote: "vegan" },
  ],
  "date syrup": [
    { sub: "honey", ratio: "1:1" },
    { sub: "maple syrup", ratio: "1:1", dietaryNote: "vegan" },
  ],
  tahini: [
    { sub: "almond butter", ratio: "1:1", context: "sweeter flavour" },
    { sub: "sunflower seed butter", ratio: "1:1", dietaryNote: "nut-free" },
  ],
  mayonnaise: [
    { sub: "Greek yogurt", ratio: "1:1", context: "lighter; works in dressings and spreads" },
    { sub: "silken tofu blended smooth", ratio: "1:1", dietaryNote: "vegan" },
  ],
  mustard: [
    { sub: "horseradish", ratio: "half the amount", context: "stronger — use sparingly" },
    { sub: "wasabi", ratio: "¼ the amount", context: "very strong — use tiny amount" },
  ],
  "soy sauce": [
    { sub: "tamari", ratio: "1:1", dietaryNote: "gluten-free" },
    { sub: "coconut aminos", ratio: "1:1", context: "milder and slightly sweeter", dietaryNote: "soy-free" },
  ],
  breadcrumbs: [
    { sub: "panko breadcrumbs", ratio: "1:1", context: "crispier result" },
    { sub: "crushed crackers", ratio: "1:1" },
    { sub: "rolled oats (blitzed)", ratio: "1:1", dietaryNote: "gluten-free if certified" },
  ],
  "baking powder": [
    { sub: "¼ tsp baking soda + ½ tsp cream of tartar", ratio: "per 1 tsp baking powder" },
  ],
  "baking soda": [
    { sub: "baking powder", ratio: "3 tsp per 1 tsp baking soda", context: "note: may affect saltiness" },
  ],
  "vanilla extract": [
    { sub: "vanilla sugar (1 packet)", ratio: "per 1 tsp extract" },
    { sub: "almond extract", ratio: "half the amount", context: "stronger flavour — use sparingly" },
  ],
  cinnamon: [
    { sub: "allspice", ratio: "half the amount", context: "stronger — use less" },
    { sub: "pumpkin pie spice", ratio: "1:1" },
  ],
  walnuts: [
    { sub: "pecans", ratio: "1:1" },
    { sub: "toasted almonds", ratio: "1:1" },
    { sub: "sunflower seeds", ratio: "1:1", dietaryNote: "nut-free" },
  ],
  pecans: [
    { sub: "walnuts", ratio: "1:1" },
    { sub: "almonds", ratio: "1:1" },
  ],
  "pine nuts": [
    { sub: "toasted slivered almonds", ratio: "1:1", context: "budget-friendly" },
    { sub: "sunflower seeds", ratio: "1:1", context: "budget-friendly", dietaryNote: "nut-free" },
  ],
  almonds: [
    { sub: "cashews", ratio: "1:1" },
    { sub: "sunflower seeds", ratio: "1:1", dietaryNote: "nut-free" },
  ],
  cashews: [
    { sub: "macadamia nuts", ratio: "1:1" },
    { sub: "almonds", ratio: "1:1" },
  ],
  "almond butter": [
    { sub: "peanut butter", ratio: "1:1" },
    { sub: "sunflower seed butter", ratio: "1:1", dietaryNote: "nut-free" },
    { sub: "tahini", ratio: "1:1", context: "more savoury flavour" },
  ],
  "cream of tartar": [
    { sub: "lemon juice", ratio: "2 tsp per ½ tsp cream of tartar", context: "when stabilising egg whites" },
    { sub: "white vinegar", ratio: "2 tsp per ½ tsp", context: "when stabilising egg whites" },
  ],
  "pomegranate molasses": [
    { sub: "balsamic glaze", ratio: "1:1" },
    { sub: "tamarind paste thinned with a little lemon", ratio: "1:1", context: "similar tang" },
  ],
  "coconut milk": [
    { sub: "oat milk", ratio: "1:1", context: "less rich" },
    { sub: "regular milk", ratio: "1:1" },
    { sub: "heavy cream + water (50/50)", ratio: "1:1" },
  ],
  "onion soup mix": [
    { sub: "garlic powder + onion powder + salt", ratio: "1 tsp each per packet", context: "adjust to taste" },
  ],
  "date spread": [
    { sub: "medjool dates blended smooth", ratio: "1:1", context: "process with 1–2 tbsp water until smooth" },
    { sub: "fig jam", ratio: "1:1", context: "slightly different flavour" },
  ],
  "marinara sauce": [
    { sub: "crushed tomatoes + Italian seasoning + garlic", ratio: "1:1", context: "simmer 10 min" },
    { sub: "tomato paste + water + seasoning", ratio: "dilute 1 part paste with 2 parts water" },
  ],
  mozzarella: [
    { sub: "provolone", ratio: "1:1", context: "melts similarly" },
    { sub: "monterey jack", ratio: "1:1", context: "mild and melty" },
  ],
};

export function getSubstitutions(ingredientName: string): SubstitutionEntry[] {
  const name = ingredientName.toLowerCase().trim();

  // 1. Exact match
  if (SUBSTITUTIONS[name]) return SUBSTITUTIONS[name];

  // 2. Ingredient name contains a known key (e.g. "shredded mozzarella" → "mozzarella")
  for (const key of Object.keys(SUBSTITUTIONS)) {
    if (name.includes(key)) return SUBSTITUTIONS[key];
  }

  // 3. A known key contains the ingredient name (e.g. "olive oil" key matches "oil")
  for (const key of Object.keys(SUBSTITUTIONS)) {
    if (key.includes(name) && name.length > 3) return SUBSTITUTIONS[key];
  }

  return [];
}
