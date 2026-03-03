import { addRecipe } from "./helpers";

export async function seedOther(tagByName: Record<string, number>) {
  const t = tagByName;

  // ── ORIGINAL RECIPES ────────────────────────────────────────────────────────

  await addRecipe({ title: "Warm and Soothing Apple Crisp", slug: "apple-crisp", category: "dessert", servings: 10, prepMinutes: 20, cookMinutes: 60, healthScore: 2, imageUrl: "https://images.kosher.com/details.slide/w/a/warm_and_soothing_apple_crisp_shutterstock.jpg", sourceUrl: "https://www.kosher.com/recipe/warm-and-soothing-apple-crisp-recipe-4192/", sourceLabel: "kosher.com", description: "Classic baked apples under a quick three-ingredient crumb topping.", instructions: `1. Preheat oven to 350°F (175°C).\n2. Mix topping: flour, dark brown sugar, margarine until crumbly.\n3. Peel and slice apples into a 9"×13" pan. Mix with flour, sugar, vanilla sugar, cinnamon.\n4. Sprinkle topping over filling. Bake 1 hour until bubbling and golden.` }, [
    { name: "flour", amount: 1, unit: "cup", healthTag: "grain", notes: "topping" },
    { name: "dark brown sugar", amount: 0.5, unit: "cup", healthTag: "sugar", notes: "packed, topping" },
    { name: "margarine or canola oil", amount: 0.5, unit: "cup", healthTag: "fat", notes: "topping" },
    { name: "MacIntosh apples", amount: 10, unit: "medium", healthTag: "vegetable", notes: "peeled and sliced (~3 lbs)" },
    { name: "flour", amount: 0.25, unit: "cup", healthTag: "grain", notes: "filling" },
    { name: "sugar", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "vanilla sugar", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "cinnamon", amount: 1, unit: "tbsp" },
  ], ["vegetarian", "parve", "kosher", "family-favourite"], t);

  await addRecipe({ title: "Sweet and Sour Salad", slug: "sweet-and-sour-salad", category: "salad", servings: 8, prepMinutes: 20, cookMinutes: 0, healthScore: 4, imageUrl: "https://images.kosher.com/uploads/Libfroind-Efrat-Delicious-Sweet-and-Sour-Salad.jpg", sourceUrl: "https://www.kosher.com/recipe/delicious-sweet-and-sour-salad-7512", sourceLabel: "kosher.com", description: "Crunchy cabbage salad with raisins, cranberries, cashews, and a creamy almond dressing.", instructions: `1. Combine all salad ingredients in a large bowl.\n2. Blend dressing ingredients until smooth.\n3. Pour over salad, toss, and serve immediately.` }, [
    { name: "white cabbage", amount: 1, unit: "medium head", healthTag: "vegetable", notes: "thinly sliced" },
    { name: "iceberg or romaine lettuce", amount: 0.5, unit: "head", healthTag: "vegetable", notes: "sliced" },
    { name: "scallions", amount: 4, unit: "stalks", healthTag: "vegetable", notes: "chopped" },
    { name: "radishes", amount: 5, unit: "medium", healthTag: "vegetable", notes: "thinly sliced" },
    { name: "carrot", amount: 1, unit: "large", healthTag: "vegetable", notes: "ribbons" },
    { name: "raisins", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "dried cranberries", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "roasted cashews", amount: 0.25, unit: "cup", healthTag: "fat", notes: "coarsely chopped" },
    { name: "candied almonds", amount: 0.33, unit: "cup", healthTag: "fat", notes: "dressing" },
    { name: "red onion", amount: 0.25, unit: "small", healthTag: "vegetable", notes: "dressing" },
    { name: "oil", amount: 0.25, unit: "cup", healthTag: "fat", notes: "dressing" },
    { name: "vinegar", amount: 3, unit: "tbsp", notes: "dressing" },
    { name: "honey", amount: 2, unit: "tbsp", healthTag: "sugar", notes: "dressing" },
    { name: "salt", amount: 0.25, unit: "tsp" },
    { name: "black pepper", amount: 1, unit: "pinch" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Rich Decorated Rice (אורז בעיטור עשיר)", slug: "rich-decorated-rice", category: "side", servings: 12, prepMinutes: 15, cookMinutes: 30, healthScore: 3, description: "Baked rice unmoulded into a dome, topped with sautéed leek, seeds, dried fruits, and honey.", instructions: `For the rice:\n1. Heat oil in a wide pot. Fry drained rice until grains are coated.\n2. Add boiling water and salt. Cook uncovered until water is absorbed.\n3. Cover and bake at 180°C (350°F) for 15 minutes.\n4. Press into a silicone mould, cool 15 min, then unmould.\n\nFor the topping:\n5. Heat oil in pan, sauté leek strips 2–3 min.\n6. Add all remaining topping ingredients, stir-fry 3 min.\n7. Spoon topping over rice and serve. Tip: use Indian basmati.` }, [
    { name: "rice", amount: 3, unit: "cups", healthTag: "grain", notes: "basmati recommended" },
    { name: "oil", amount: 5, unit: "tbsp", healthTag: "fat" },
    { name: "boiling water", amount: 4.5, unit: "cups" },
    { name: "salt", amount: 1.5, unit: "tbsp" },
    { name: "oil", amount: 3, unit: "tbsp", healthTag: "fat", notes: "topping" },
    { name: "leek", amount: 1, unit: "small", healthTag: "vegetable", notes: "cut into diagonal strips" },
    { name: "raisins", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "dried cranberries", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "pine nuts", amount: 2, unit: "tbsp", healthTag: "fat" },
    { name: "sunflower seeds", amount: 3, unit: "tbsp", healthTag: "fat" },
    { name: "pumpkin seeds", amount: 3, unit: "tbsp", healthTag: "fat" },
    { name: "sesame seeds", amount: 2, unit: "tbsp", healthTag: "fat" },
    { name: "green onion", amount: 3, unit: "stalks", healthTag: "vegetable", notes: "chopped" },
    { name: "black pepper", amount: 0.25, unit: "tsp" },
    { name: "honey", amount: 1, unit: "tbsp", healthTag: "sugar" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "family-favourite"], t);

  await addRecipe({ title: "Pumpkin Pear Muffins", slug: "pumpkin-pear-muffins", category: "dessert", servings: 18, prepMinutes: 15, cookMinutes: 25, healthScore: 2, sourceLabel: "Richi", description: "Moist pumpkin muffins with juicy pear chunks and a crunchy pecan topping.", instructions: `1. Preheat oven to 350°F (175°C). Line muffin tin.\n2. Mix pumpkin, eggs, and oil. Add flour, sugar, vanilla, cinnamon, salt, baking powder, and baking soda.\n3. Fold in pear cubes. Fill cases ¾ full.\n4. Mix pecan topping (oil, pecans, brown sugar, cinnamon) and sprinkle over.\n5. Bake 25 minutes.` }, [
    { name: "canned pumpkin purée", amount: 425, unit: "g (1 can)", healthTag: "vegetable" },
    { name: "oil", amount: 1, unit: "cup", healthTag: "fat" },
    { name: "eggs", amount: 4, unit: "large", healthTag: "protein" },
    { name: "vanilla extract", amount: 1, unit: "tsp" },
    { name: "flour", amount: 2, unit: "cups", healthTag: "grain" },
    { name: "sugar", amount: 1.67, unit: "cups", healthTag: "sugar" },
    { name: "cinnamon", amount: 1, unit: "tsp" },
    { name: "salt", amount: 1, unit: "tsp" },
    { name: "baking powder", amount: 2, unit: "tsp" },
    { name: "baking soda", amount: 2, unit: "tsp" },
    { name: "pears", amount: 2, unit: "medium", healthTag: "vegetable", notes: "peeled and cubed" },
    { name: "oil", amount: 2, unit: "tbsp", healthTag: "fat", notes: "pecan topping" },
    { name: "pecans", amount: 1, unit: "cup", healthTag: "fat", notes: "chopped, topping" },
    { name: "brown sugar", amount: 0.5, unit: "cup", healthTag: "sugar", notes: "topping" },
    { name: "cinnamon", amount: 1, unit: "tsp", notes: "topping" },
  ], ["vegetarian", "dairy-free", "parve", "kosher", "family-favourite"], t);

  await addRecipe({ title: "Carrot Muffins", slug: "carrot-muffins", category: "dessert", servings: 24, prepMinutes: 20, cookMinutes: 30, healthScore: 2, sourceLabel: "Rachel", description: "Soft, sweet carrot muffins with a crunchy cornflake topping.", instructions: `1. Preheat oven to 350°F (175°C). Line muffin tins.\n2. Boil carrots, reserve ¾ cup cooking water, mash carrots well.\n3. Mix carrots, oil, and eggs. Add flour, sugar, salt, baking soda, baking powder, cinnamon, and carrot water.\n4. Fill cases ¾ full. Mix topping (brown sugar, melted margarine, crushed cornflakes) and sprinkle over.\n5. Bake 30 minutes.` }, [
    { name: "carrots", amount: 9, unit: "medium", healthTag: "vegetable", notes: "boiled and mashed" },
    { name: "oil", amount: 1.5, unit: "cups", healthTag: "fat" },
    { name: "eggs", amount: 6, unit: "large", healthTag: "protein" },
    { name: "flour", amount: 3, unit: "cups", healthTag: "grain" },
    { name: "sugar", amount: 3, unit: "cups", healthTag: "sugar" },
    { name: "salt", amount: 1.5, unit: "tsp" },
    { name: "carrot cooking water", amount: 0.75, unit: "cup" },
    { name: "baking soda", amount: 1.5, unit: "tsp" },
    { name: "baking powder", amount: 1.5, unit: "tsp" },
    { name: "cinnamon", amount: 1.5, unit: "tsp" },
    { name: "brown sugar", amount: 0.25, unit: "cup", healthTag: "sugar", notes: "topping" },
    { name: "margarine", amount: 0.5, unit: "cup", healthTag: "fat", notes: "melted, topping" },
    { name: "cornflakes", amount: 2, unit: "cups", healthTag: "grain", notes: "crushed, topping" },
  ], ["vegetarian", "dairy-free", "parve", "kosher", "family-favourite"], t);

  await addRecipe({ title: "Apple Cranberry Kugel", slug: "apple-cranberry-kugel", category: "dessert", servings: 10, prepMinutes: 15, cookMinutes: 45, healthScore: 3, description: "Tender apples and pears baked with cranberry sauce and an oatmeal crumble topping.", instructions: `1. Preheat oven to 350°F (175°C).\n2. Peel and slice apples and pears, lay in pan.\n3. Mix cranberry sauce, sugar, flour; spread over fruit.\n4. Mix oatmeal, brown sugar, flour, cinnamon, margarine until crumbly; spread on top.\n5. Bake 45 minutes until golden.` }, [
    { name: "apples and/or pears", amount: 6, unit: "medium", healthTag: "vegetable", notes: "peeled and sliced" },
    { name: "jellied cranberry sauce", amount: 1, unit: "can (400g)", healthTag: "sugar" },
    { name: "sugar", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "flour", amount: 2, unit: "tbsp", healthTag: "grain" },
    { name: "oatmeal", amount: 2.25, unit: "cups", healthTag: "grain" },
    { name: "brown sugar", amount: 0.5, unit: "cup", healthTag: "sugar", notes: "topping" },
    { name: "flour", amount: 0.5, unit: "cup", healthTag: "grain", notes: "topping" },
    { name: "cinnamon", amount: 1, unit: "tsp" },
    { name: "margarine", amount: 0.375, unit: "cup", healthTag: "fat" },
  ], ["vegetarian", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Potato Latkes", slug: "potato-latkes", category: "side", servings: 6, prepMinutes: 20, cookMinutes: 20, healthScore: 2, description: "Classic crispy fried potato pancakes. Perfect for Chanukah.", instructions: `1. Grate potatoes and onions. Squeeze out all water through a towel. Drain well.\n2. Mix in eggs, oil, flour, bread crumbs, salt, pepper, garlic powder.\n3. Fry in hot oil in a non-stick pan, flattening slightly. Golden on each side (~3-4 min).\n4. Drain on paper towels. Serve immediately.` }, [
    { name: "potatoes", amount: 7, unit: "medium", healthTag: "vegetable" },
    { name: "onions", amount: 1.5, unit: "large", healthTag: "vegetable" },
    { name: "eggs", amount: 2, unit: "large", healthTag: "protein" },
    { name: "oil", amount: 1, unit: "tbsp", healthTag: "fat" },
    { name: "flour", amount: 0.25, unit: "cup", healthTag: "grain" },
    { name: "bread crumbs", amount: 0.25, unit: "cup", healthTag: "grain" },
    { name: "salt", amount: 1.5, unit: "tsp" },
    { name: "black pepper", amount: 0.5, unit: "tsp" },
    { name: "garlic powder", amount: 0.25, unit: "tsp", notes: "optional" },
    { name: "oil", amount: 0.5, unit: "cup", healthTag: "fat", notes: "for frying" },
  ], ["vegetarian", "dairy-free", "parve", "kosher", "family-favourite"], t);

  await addRecipe({ title: "Kishke", slug: "kishke", category: "side", servings: 10, prepMinutes: 15, cookMinutes: 60, healthScore: 3, description: "Classic Ashkenazi vegetable-flour roll. Makes 2 loaves, great for freezing.", instructions: `1. Preheat oven to 350°F (175°C).\n2. Blend carrots, celery, onion, oil, and salt in food processor until finely chopped.\n3. Add flour, mix thoroughly with spatula.\n4. Divide into 2 logs, wrap tightly in foil.\n5. Bake 1 hour. Cool before slicing. Freezes well.` }, [
    { name: "carrots", amount: 2, unit: "medium", healthTag: "vegetable" },
    { name: "celery stalks", amount: 2, unit: "stalks", healthTag: "vegetable" },
    { name: "onion", amount: 1, unit: "medium", healthTag: "vegetable" },
    { name: "oil", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "salt", amount: 1, unit: "tsp" },
    { name: "flour", amount: 1.125, unit: "cups", healthTag: "grain", notes: "1 to 1¼ cups" },
  ], ["vegan", "vegetarian", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Mushrooms Filled with Liver", slug: "mushrooms-filled-with-liver", category: "side", servings: 6, prepMinutes: 20, cookMinutes: 20, healthScore: 3, description: "Large mushroom caps stuffed with spiced liver, breaded and fried golden.", instructions: `1. Cut liver small. Fry with onions, paprika, silan, garlic, and soy sauce until cooked. Remove from heat.\n2. Remove mushroom stems. Fill each cap with liver mixture.\n3. Dip each mushroom in beaten egg, coat with bread crumbs.\n4. Fry in hot oil until golden on both sides. Serve immediately.` }, [
    { name: "large mushroom caps", amount: 12, unit: "caps", healthTag: "vegetable" },
    { name: "chicken or beef liver", amount: 300, unit: "g", healthTag: "protein" },
    { name: "onion", amount: 1, unit: "medium", healthTag: "vegetable", notes: "diced" },
    { name: "paprika", amount: 1, unit: "tsp" },
    { name: "silan (date syrup)", amount: 1, unit: "tbsp", healthTag: "sugar" },
    { name: "garlic", amount: 2, unit: "cloves", healthTag: "vegetable", notes: "minced" },
    { name: "soy sauce", amount: 1, unit: "tbsp" },
    { name: "eggs", amount: 2, unit: "large", healthTag: "protein", notes: "beaten, for coating" },
    { name: "bread crumbs", amount: 0.5, unit: "cup", healthTag: "grain" },
    { name: "oil", amount: 0.25, unit: "cup", healthTag: "fat", notes: "for frying" },
  ], ["meat", "kosher", "dairy-free"], t);

  await addRecipe({ title: "Tamago Sushi (ביצה יפנית)", slug: "tamago-sushi", category: "side", servings: 4, prepMinutes: 10, cookMinutes: 10, healthScore: 3, description: "Japanese sweet layered egg omelette, served as sushi.", instructions: `1. Whisk eggs, water, mirin, sugar, and soy sauce.\n2. Oil a non-stick pan over medium heat. Pour a thin egg layer, roll when set.\n3. Push roll to side, oil pan, pour another layer; roll together.\n4. Repeat until all egg is used. Wrap roll tightly, shape into rectangle. Cool 5 min.\n5. Slice and serve as is or on sushi rice.` }, [
    { name: "eggs", amount: 6, unit: "large", healthTag: "protein", notes: "beaten" },
    { name: "water", amount: 1, unit: "tbsp" },
    { name: "mirin", amount: 3, unit: "tsp", notes: "sweet rice wine" },
    { name: "sugar", amount: 1, unit: "tbsp", healthTag: "sugar" },
    { name: "soy sauce", amount: 2, unit: "tsp" },
    { name: "oil", amount: 1, unit: "tsp", healthTag: "fat" },
  ], ["dairy-free", "quick"], t);

  // ── MEAT DISHES ─────────────────────────────────────────────────────────────

  await addRecipe({ title: "Mama's Chulent", slug: "mamas-chulent", category: "dinner", servings: 8, prepMinutes: 20, cookMinutes: 180, healthScore: 3, sourceLabel: "Mama", description: "The classic Shabbat stew — meat, beans, potatoes, and barley slow-cooked to perfection.", instructions: `Night before: boil the beans.\n1. In a large pot, combine onions and garlic.\n2. Add meat, then beans (checked), sweet potatoes, and potatoes.\n3. Season with salt, paprika, black pepper, ketchup, and BBQ sauce. Cover with water.\n4. Bring to a boil, then lower and cook ~2.5 hours.\n5. Add ½ cup washed barley. Cook 45 more minutes.` }, [
    { name: "dried beans", amount: 1.5, unit: "cups", healthTag: "protein", notes: "boiled night before" },
    { name: "onions", amount: 3, unit: "large", healthTag: "vegetable", notes: "chopped" },
    { name: "garlic", amount: 5, unit: "cloves", healthTag: "vegetable", notes: "chopped" },
    { name: "beef (flanken or similar)", amount: 700, unit: "g", healthTag: "protein" },
    { name: "sweet potatoes", amount: 2, unit: "medium", healthTag: "vegetable" },
    { name: "potatoes", amount: 3, unit: "medium", healthTag: "vegetable" },
    { name: "salt", amount: 1.5, unit: "tsp" },
    { name: "paprika", amount: 1, unit: "tsp" },
    { name: "black pepper", amount: 0.5, unit: "tsp" },
    { name: "ketchup", amount: 3, unit: "tbsp" },
    { name: "BBQ sauce", amount: 3, unit: "tbsp" },
    { name: "pearl barley", amount: 0.5, unit: "cup", healthTag: "grain", notes: "washed" },
  ], ["meat", "kosher", "dairy-free", "one-pot", "family-favourite"], t);

  await addRecipe({ title: "Meatballs in Sweet Sauce", slug: "meatballs", category: "dinner", servings: 6, prepMinutes: 20, cookMinutes: 30, healthScore: 2, description: "Juicy meatballs simmered in a sweet apricot-ketchup sauce.", instructions: `1. Mix meat with egg, bread crumbs, BBQ sauce, ketchup, salt, pepper, garlic powder, onion powder. Shape into balls.\n2. In a pot, combine water with ketchup, brown sugar, apricot jam, and lemon juice. Bring to a boil.\n3. Drop meatballs into boiling sauce. Cover and simmer 25-30 minutes.` }, [
    { name: "ground meat", amount: 500, unit: "g" , healthTag: "protein"},
    { name: "egg", amount: 1, unit: "large", healthTag: "protein" },
    { name: "bread crumbs", amount: 0.33, unit: "cup", healthTag: "grain" },
    { name: "BBQ sauce", amount: 3, unit: "tbsp" },
    { name: "ketchup", amount: 0.25, unit: "cup" },
    { name: "salt, pepper, garlic powder, onion powder", amount: 1, unit: "tsp each" },
    { name: "ketchup", amount: 0.25, unit: "cup", notes: "sauce" },
    { name: "brown sugar", amount: 2, unit: "tbsp", healthTag: "sugar", notes: "sauce" },
    { name: "apricot jam", amount: 2, unit: "tbsp", healthTag: "sugar", notes: "sauce" },
    { name: "lemon juice", amount: 1, unit: "tsp", notes: "sauce" },
  ], ["meat", "kosher", "dairy-free", "family-favourite"], t);

  await addRecipe({ title: "Assado with Vegetables", slug: "assado-with-vegetables", category: "dinner", servings: 8, prepMinutes: 20, cookMinutes: 150, healthScore: 3, sourceLabel: "Raishi", description: "Slow-cooked assado meat with caramelised vegetables in a rich, sweet broth.", instructions: `1. Fry onions and garlic in oil until golden.\n2. Sear assado slices on each side, then remove.\n3. In the same pot, add carrots, potatoes, sweet potato, and squash. Let them release flavour for a few minutes.\n4. Return meat. Add water to cover. Season with brown sugar, salt, black pepper, garlic powder, and mushroom/chicken soup powder.\n5. Cover and cook on low for 2-2.5 hours until very tender.` }, [
    { name: "onions", amount: 2, unit: "large", healthTag: "vegetable" },
    { name: "garlic", amount: 6, unit: "cloves", healthTag: "vegetable" },
    { name: "assado (beef brisket)", amount: 1, unit: "kg", healthTag: "protein", notes: "sliced" },
    { name: "carrots", amount: 4, unit: "medium", healthTag: "vegetable" },
    { name: "potatoes", amount: 4, unit: "medium", healthTag: "vegetable" },
    { name: "sweet potato", amount: 1, unit: "large", healthTag: "vegetable" },
    { name: "butternut squash", amount: 3, unit: "slices", healthTag: "vegetable" },
    { name: "brown sugar", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "salt", amount: 1.5, unit: "tsp" },
    { name: "black pepper", amount: 0.5, unit: "tsp" },
    { name: "garlic powder", amount: 1, unit: "tsp" },
    { name: "soup powder", amount: 1, unit: "tsp", notes: "mushroom and/or chicken" },
  ], ["meat", "kosher", "dairy-free", "one-pot", "gluten-free"], t);

  await addRecipe({ title: "String Beans Wrapped in Deli", slug: "string-beans-deli", category: "side", servings: 8, prepMinutes: 15, cookMinutes: 20, healthScore: 3, description: "Bundles of green beans wrapped in deli meat, baked in a sweet teriyaki glaze.", instructions: `1. Wrap every 5 string beans with a slice of deli.\n2. Arrange in a baking dish.\n3. Melt margarine with oil, brown sugar, soy sauce, teriyaki sauce, salt and pepper in a small pot.\n4. Pour glaze over the bundles.\n5. Bake at 375°F (190°C) for 18 minutes.` }, [
    { name: "string beans (green beans)", amount: 500, unit: "g", healthTag: "vegetable" },
    { name: "deli slices", amount: 200, unit: "g", healthTag: "protein", notes: "each slice wraps ~5 beans" },
    { name: "margarine", amount: 25, unit: "g", healthTag: "fat" },
    { name: "oil", amount: 2, unit: "tbsp", healthTag: "fat" },
    { name: "brown sugar", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "soy sauce", amount: 1, unit: "tbsp" },
    { name: "teriyaki sauce", amount: 1.5, unit: "tbsp" },
    { name: "salt and pepper", amount: 1, unit: "to taste" },
  ], ["meat", "kosher", "dairy-free"], t);

  await addRecipe({ title: "Chicken with Noodles, Chestnuts & Mushrooms", slug: "chicken-noodles-chestnuts", category: "dinner", servings: 6, prepMinutes: 20, cookMinutes: 25, healthScore: 3, description: "Stir-fried chicken breast strips with noodles, chestnuts, mushrooms, silan, and teriyaki.", instructions: `1. Cook noodles per instructions, drain.\n2. Marinate chicken strips in soy sauce, salt, pepper, cornstarch.\n3. Fry chicken in oil until golden. Remove.\n4. In same pan sauté onion and garlic until golden. Add mushrooms and chestnuts.\n5. Return chicken. Add teriyaki and silan. Toss together.\n6. Serve over noodles. Garnish with cashews and purple onion.` }, [
    { name: "noodles", amount: 1, unit: "package", healthTag: "grain", notes: "cooked per instructions" },
    { name: "chicken breast", amount: 1, unit: "large", healthTag: "protein", notes: "sliced into strips" },
    { name: "soy sauce", amount: 2, unit: "tbsp" },
    { name: "salt and black pepper", amount: 1, unit: "to taste" },
    { name: "cornstarch", amount: 2, unit: "tbsp" },
    { name: "oil", amount: 4, unit: "tbsp", healthTag: "fat" },
    { name: "onion", amount: 1, unit: "large", healthTag: "vegetable", notes: "quartered" },
    { name: "garlic", amount: 3, unit: "cloves", healthTag: "vegetable" },
    { name: "mushrooms", amount: 400, unit: "g (2 baskets)", healthTag: "vegetable" },
    { name: "peeled chestnuts", amount: 300, unit: "g", healthTag: "vegetable" },
    { name: "teriyaki sauce", amount: 0.25, unit: "cup" },
    { name: "silan (date syrup)", amount: 4, unit: "tbsp", healthTag: "sugar" },
    { name: "cashews", amount: 0.25, unit: "cup", healthTag: "fat", notes: "for garnish" },
    { name: "purple onion", amount: 0.5, unit: "small", healthTag: "vegetable", notes: "for garnish" },
  ], ["meat", "kosher", "dairy-free"], t);

  await addRecipe({ title: "Baked Chicken with Chestnuts & Mushrooms", slug: "baked-chicken-chestnuts-mushrooms", category: "dinner", servings: 6, prepMinutes: 15, cookMinutes: 90, healthScore: 3, description: "Chicken pieces baked over onions, fresh mushrooms, and chestnuts in a silan-garlic sauce.", instructions: `1. Preheat oven to 180°C (350°F).\n2. Dip each chicken piece in flour, arrange in a baking dish.\n3. Add sliced onion, mushrooms, and chestnuts around the chicken.\n4. Mix sauce: crushed garlic, water, silan, soup powder, salt, pepper. Pour over.\n5. Bake covered for 1.5 hours.` }, [
    { name: "chicken pieces", amount: 1, unit: "whole chicken or parts", healthTag: "protein", notes: "dipped in flour" },
    { name: "flour", amount: 0.5, unit: "cup", healthTag: "grain", notes: "for coating" },
    { name: "onion", amount: 1, unit: "large", healthTag: "vegetable", notes: "thinly sliced" },
    { name: "fresh mushrooms", amount: 400, unit: "g", healthTag: "vegetable", notes: "sliced" },
    { name: "peeled chestnuts", amount: 1, unit: "bag (ready to eat)", healthTag: "vegetable" },
    { name: "garlic", amount: 2, unit: "tsp", healthTag: "vegetable", notes: "crushed" },
    { name: "water", amount: 0.5, unit: "cup" },
    { name: "silan (date syrup)", amount: 3, unit: "tbsp", healthTag: "sugar" },
    { name: "soup powder", amount: 1, unit: "tsp" },
    { name: "salt", amount: 0.5, unit: "tsp" },
    { name: "black pepper", amount: 1, unit: "to taste" },
  ], ["meat", "kosher", "dairy-free"], t);

  await addRecipe({ title: "Pasta Bolognese", slug: "pasta-bolognese", category: "dinner", servings: 6, prepMinutes: 15, cookMinutes: 30, healthScore: 3, description: "A highly recommended meat pasta with two tomato sauces, vegetables, and garlic. Mixes right into the pot.", instructions: `1. Fry onion in a pot until lightly golden. Add carrot and pepper, fry a little more.\n2. Add ground meat, cook on medium heat ~5 min until browned, stirring.\n3. Add both tomato sauces, garlic, boiling water, brown sugar, salt, and pepper. Mix well.\n4. Bring to boil, cover, reduce to medium, cook 15-20 minutes, stirring occasionally.\n5. Add cooked pasta to the pot, mix well and serve.` }, [
    { name: "pasta (farfalle)", amount: 1, unit: "package (500g)", healthTag: "grain" },
    { name: "ground meat", amount: 500, unit: "g", healthTag: "protein" },
    { name: "onions", amount: 2, unit: "medium", healthTag: "vegetable", notes: "chopped" },
    { name: "carrot", amount: 1, unit: "medium", healthTag: "vegetable" },
    { name: "red bell pepper", amount: 1, unit: "medium", healthTag: "vegetable" },
    { name: "Israeli tomato sauce", amount: 1, unit: "small package", notes: "e.g. Osem" },
    { name: "American tomato sauce", amount: 1, unit: "can", notes: "crushed tomatoes" },
    { name: "garlic", amount: 5, unit: "cloves", healthTag: "vegetable", notes: "crushed" },
    { name: "boiling water", amount: 1.5, unit: "cups" },
    { name: "brown sugar", amount: 1, unit: "tbsp", healthTag: "sugar" },
    { name: "salt and black pepper", amount: 1, unit: "to taste" },
  ], ["meat", "kosher", "dairy-free", "family-favourite"], t);

  await addRecipe({ title: "Baked Schnitzel in Sweet Soy Sauce", slug: "baked-schnitzel", category: "dinner", servings: 4, prepMinutes: 15, cookMinutes: 70, healthScore: 3, description: "Chicken breasts (or veal) baked in a sweet soy-garlic sauce. Add green beans near the end.", instructions: `1. Coat each chicken breast in flour. Arrange in a baking dish.\n2. Mix soy sauce, oil, garlic, pepper, water, and brown sugar. Pour over schnitzels.\n3. Cover and bake at 180°C (350°F) for about 1 hour.\n4. Uncover, add green beans and green onion, return to oven until beans are cooked.` }, [
    { name: "chicken breasts or veal", amount: 4, unit: "pieces", healthTag: "protein" },
    { name: "flour", amount: 0.5, unit: "cup", healthTag: "grain", notes: "for coating" },
    { name: "soy sauce", amount: 0.25, unit: "cup" },
    { name: "oil", amount: 0.125, unit: "cup", healthTag: "fat" },
    { name: "garlic", amount: 3, unit: "cloves", healthTag: "vegetable", notes: "crushed" },
    { name: "black pepper", amount: 1, unit: "to taste" },
    { name: "water", amount: 0.25, unit: "cup" },
    { name: "brown sugar", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "green beans", amount: 300, unit: "g", healthTag: "vegetable" },
    { name: "green onion", amount: 3, unit: "stalks", healthTag: "vegetable" },
  ], ["meat", "kosher", "dairy-free"], t);

  await addRecipe({ title: "Mushrooms in Teriyaki", slug: "mushrooms-teriyaki", category: "side", servings: 4, prepMinutes: 5, cookMinutes: 10, healthScore: 5, description: "Quick sautéed mushrooms with garlic, teriyaki, and soy sauce. Ready in 10 minutes.", instructions: `1. Slice garlic. Heat olive oil in a pan over low heat, sauté garlic ~1 minute.\n2. Raise heat slightly, add mushrooms. Season with salt and pepper.\n3. Add teriyaki and soy sauce. Stir-fry until mushrooms soften, brown, and all flavours are absorbed.` }, [
    { name: "mushrooms", amount: 400, unit: "g (2 baskets)", healthTag: "vegetable" },
    { name: "garlic", amount: 3, unit: "cloves", healthTag: "vegetable", notes: "sliced" },
    { name: "olive oil", amount: 3, unit: "tbsp", healthTag: "fat" },
    { name: "teriyaki sauce", amount: 4, unit: "tbsp" },
    { name: "soy sauce", amount: 3, unit: "tbsp" },
    { name: "salt and black pepper", amount: 1, unit: "to taste" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  // ── FISH ────────────────────────────────────────────────────────────────────

  await addRecipe({ title: "Esti's Salmon", slug: "esti-salmon", category: "dinner", servings: 4, prepMinutes: 10, cookMinutes: 20, healthScore: 5, sourceLabel: "Esti", description: "Salmon fillets spread with a tangy sugar-mustard-vinegar marinade and topped with seasoned breadcrumbs.", instructions: `1. Preheat oven to 200°C (400°F).\n2. Mix sugar, vinegar, canola oil, mustard, salt and pepper.\n3. Spread mixture over salmon fillets.\n4. Sprinkle breadcrumbs mixed with dry pesto seasoning on top.\n5. Bake 18-20 minutes until fish flakes easily.` }, [
    { name: "salmon fillets", amount: 4, unit: "pieces (~150g each)", healthTag: "protein" },
    { name: "sugar", amount: 3, unit: "tbsp", healthTag: "sugar" },
    { name: "vinegar", amount: 3, unit: "tbsp" },
    { name: "canola oil", amount: 6, unit: "tbsp", healthTag: "fat" },
    { name: "mustard", amount: 2.5, unit: "tbsp" },
    { name: "salt and pepper", amount: 1, unit: "to taste" },
    { name: "breadcrumbs", amount: 4, unit: "tbsp", healthTag: "grain" },
    { name: "dry pesto seasoning", amount: 1, unit: "tsp" },
  ], ["gluten-free", "dairy-free", "kosher", "quick"], t);

  // ── SOUPS ───────────────────────────────────────────────────────────────────

  await addRecipe({ title: "Orange Soup (Parve)", slug: "orange-soup", category: "soup", servings: 8, prepMinutes: 15, cookMinutes: 40, healthScore: 5, sourceLabel: "Klein", description: "A vibrant, smooth orange soup with carrots, squash, zucchini, and a touch of brown sugar.", instructions: `1. Peel and chop all vegetables roughly.\n2. Put carrots, squash, onions, zucchini, potato, rice, salt, brown sugar, pepper, and soup powder in a large pot.\n3. Cover with water.\n4. Cook until everything is very soft (~40 min).\n5. Blend until smooth and serve.` }, [
    { name: "carrots", amount: 8, unit: "medium", healthTag: "vegetable" },
    { name: "butternut squash", amount: 1, unit: "small", healthTag: "vegetable" },
    { name: "onions", amount: 2, unit: "medium", healthTag: "vegetable" },
    { name: "zucchini", amount: 4, unit: "medium", healthTag: "vegetable" },
    { name: "potato", amount: 1, unit: "small", healthTag: "vegetable" },
    { name: "rice", amount: 4, unit: "tbsp", healthTag: "grain" },
    { name: "salt", amount: 1, unit: "tbsp" },
    { name: "brown sugar", amount: 1, unit: "tbsp", healthTag: "sugar" },
    { name: "black pepper", amount: 0.5, unit: "tsp" },
    { name: "chicken or vegetable soup powder", amount: 1, unit: "tsp" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "family-favourite"], t);

  // ── PASSOVER ────────────────────────────────────────────────────────────────

  await addRecipe({ title: "Passover Apple Crisp", slug: "passover-apple-crisp", category: "dessert", servings: 12, prepMinutes: 15, cookMinutes: 40, healthScore: 2, sourceLabel: "Faigy Langsam", description: "A Passover-friendly apple crisp with a potato starch and almond crumble. From Rachel via Faigy Langsam.", instructions: `1. Preheat oven to 350°F (175°C).\n2. Peel and slice green apples into a 9"×13" pan.\n3. Mix vanilla sugar, sugar, cinnamon, and lemon juice. Pour over apples.\n4. Mix topping: vanilla sugar, sugar, ground almonds/nuts, potato starch, oil until crumbly.\n5. Spread topping over apples. Bake ~40 minutes.` }, [
    { name: "green apples", amount: 8, unit: "medium", healthTag: "vegetable" },
    { name: "vanilla sugar", amount: 1, unit: "packet", healthTag: "sugar" },
    { name: "sugar", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "cinnamon", amount: 0.5, unit: "tsp" },
    { name: "lemon juice", amount: 4, unit: "tsp" },
    { name: "vanilla sugar", amount: 1, unit: "packet", healthTag: "sugar", notes: "topping" },
    { name: "sugar", amount: 0.5, unit: "cup", healthTag: "sugar", notes: "topping" },
    { name: "ground almonds or nuts", amount: 1, unit: "cup", healthTag: "fat", notes: "topping" },
    { name: "potato starch", amount: 0.75, unit: "cup", healthTag: "grain", notes: "topping" },
    { name: "oil", amount: 8, unit: "tbsp", healthTag: "fat", notes: "topping" },
  ], ["vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "pesach"], t);

  await addRecipe({ title: "Chocolate Fudge Cookies (Passover)", slug: "passover-choc-fudge-cookies", category: "dessert", servings: 48, prepMinutes: 20, cookMinutes: 9, healthScore: 1, description: "Fudgy Passover chocolate cookies rolled in powdered sugar — makes 4 dozen. Must freeze dough first.", instructions: `1. Beat oil, cocoa, and sugar. Add eggs and beat until well combined.\n2. Slowly add vanilla, potato starch, and baking powder, then chocolate chips.\n3. Freeze dough for minimum 2 hours.\n4. Preheat oven to 350°F (175°C). With wet hands, roll dough into balls, roll in powdered sugar (lightly coat — they spread).\n5. Bake 9 minutes. Do not flatten.` }, [
    { name: "oil", amount: 0.75, unit: "cup", healthTag: "fat" },
    { name: "cocoa powder", amount: 1, unit: "cup", healthTag: "sugar" },
    { name: "sugar", amount: 2, unit: "cups", healthTag: "sugar" },
    { name: "eggs", amount: 4, unit: "large", healthTag: "protein" },
    { name: "vanilla extract", amount: 1.5, unit: "tsp" },
    { name: "potato starch", amount: 2, unit: "cups", healthTag: "grain" },
    { name: "baking powder", amount: 2, unit: "tsp" },
    { name: "chocolate chips", amount: 340, unit: "g (12 oz)", healthTag: "sugar" },
    { name: "powdered sugar", amount: 1, unit: "cup", healthTag: "sugar", notes: "for coating" },
  ], ["vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "pesach"], t);

  await addRecipe({ title: "Chocolate Cake (Passover)", slug: "passover-choc-cake", category: "dessert", servings: 12, prepMinutes: 10, cookMinutes: 40, healthScore: 1, description: "Simple, rich Passover chocolate cake made with potato starch.", instructions: `1. Preheat oven to 350°F (175°C). Grease a cake pan.\n2. Mix together oil, cocoa, sugar, eggs, potato starch, and vanilla sugar until smooth.\n3. Pour into prepared pan.\n4. Bake 35-40 minutes until a toothpick comes out clean.` }, [
    { name: "oil", amount: 1.125, unit: "cups", healthTag: "fat" },
    { name: "cocoa powder", amount: 6, unit: "tbsp", healthTag: "sugar" },
    { name: "sugar", amount: 2.25, unit: "cups", healthTag: "sugar" },
    { name: "eggs", amount: 6, unit: "large", healthTag: "protein" },
    { name: "potato starch", amount: 1.25, unit: "cups", healthTag: "grain" },
    { name: "vanilla sugar", amount: 2, unit: "packets", healthTag: "sugar" },
  ], ["vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "pesach"], t);

  await addRecipe({ title: "Matza Brei", slug: "matza-brei", category: "breakfast", servings: 3, prepMinutes: 25, cookMinutes: 10, healthScore: 3, description: "Classic Passover fried matza with egg — soft and comforting.", instructions: `1. Break matza into pieces. Soak in ~5 cups boiling water for 20 min until soft.\n   (For mezonot status, use truly boiling water.)\n2. Fry onion in oil until golden.\n3. Drain water from matza thoroughly. Add eggs, milk, salt, onion and garlic powder, black pepper, and cheese.\n4. Add to the fried onion pan. Fry until set and golden.` }, [
    { name: "matza", amount: 3, unit: "sheets", healthTag: "grain", notes: "broken into pieces" },
    { name: "eggs", amount: 2, unit: "large", healthTag: "protein" },
    { name: "milk", amount: 2, unit: "tbsp", notes: "dairy or non-dairy" },
    { name: "salt", amount: 1, unit: "tsp" },
    { name: "onion", amount: 1, unit: "medium", healthTag: "vegetable", notes: "fried" },
    { name: "garlic powder and onion powder", amount: 0.5, unit: "tsp each", notes: "optional" },
    { name: "black pepper", amount: 0.25, unit: "tsp" },
    { name: "cheese", amount: 0.5, unit: "cup", notes: "mozzarella or any melting cheese, optional" },
    { name: "oil", amount: 2, unit: "tbsp", healthTag: "fat", notes: "for frying" },
  ], ["vegetarian", "kosher", "pesach"], t);

  // ── SWEETS / DAIRY ──────────────────────────────────────────────────────────

  await addRecipe({ title: "Belgian Waffles", slug: "belgian-waffles", category: "breakfast", servings: 6, prepMinutes: 10, cookMinutes: 15, healthScore: 2, sourceLabel: "Karin Goren", description: "Crispy, fluffy Belgian waffles. Serve with butter and maple syrup.", instructions: `1. Beat eggs with milk, melted butter, and sugar in a bowl.\n2. In a separate bowl, sift flour, baking powder, and salt.\n3. Make a well in the flour and pour in the liquids. Mix until just combined (don't overmix).\n4. Oil and preheat the waffle iron. Pour in batter and cook until golden and crispy.\n5. Serve immediately with butter and maple syrup.` }, [
    { name: "eggs", amount: 2, unit: "large", healthTag: "protein" },
    { name: "milk", amount: 240, unit: "ml (1 cup)", notes: "dairy" },
    { name: "butter", amount: 50, unit: "g", healthTag: "fat", notes: "melted, dairy" },
    { name: "sugar", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "flour", amount: 1.5, unit: "cups", healthTag: "grain" },
    { name: "baking powder", amount: 2, unit: "tsp" },
    { name: "salt", amount: 0.25, unit: "tsp" },
  ], ["vegetarian", "kosher", "quick", "family-favourite"], t);

  await addRecipe({ title: "Passover Cheesecake", slug: "passover-cheesecake", category: "dessert", servings: 12, prepMinutes: 20, cookMinutes: 0, healthScore: 2, description: "Creamy no-bake Passover cheesecake with a light whipped filling. Dairy.", instructions: `1. Whip 2 cartons heavy cream with vanilla pudding powder, 1 packet vanilla sugar, and 1 tbsp powdered sugar until stiff.\n2. In a separate bowl, whip white cheese with sour cream, 2 tbsp powdered sugar, 1 packet vanilla sugar, and lemon zest.\n3. Fold the two mixtures together gently.\n4. Pour over a pre-made Passover crust.\n5. Top with chopped walnuts and crumbled finger cookies.\n6. Refrigerate until set (at least 3 hours).` }, [
    { name: "ready-made Passover crust", amount: 1, unit: "crust", notes: "dairy" },
    { name: "heavy whipping cream", amount: 2, unit: "cartons (500ml)", notes: "dairy" },
    { name: "vanilla pudding powder", amount: 1, unit: "packet" },
    { name: "white cheese (5%)", amount: 500, unit: "g", notes: "dairy" },
    { name: "sour cream", amount: 1, unit: "carton", notes: "dairy" },
    { name: "vanilla sugar", amount: 2, unit: "packets", healthTag: "sugar" },
    { name: "lemon zest", amount: 1, unit: "lemon" },
    { name: "powdered sugar", amount: 3, unit: "tbsp", healthTag: "sugar" },
    { name: "walnuts", amount: 0.5, unit: "cup", healthTag: "fat", notes: "chopped, for topping" },
    { name: "finger cookies (Pesach)", amount: 0.5, unit: "cup", notes: "crumbled, for topping" },
  ], ["vegetarian", "kosher", "pesach"], t);
}
