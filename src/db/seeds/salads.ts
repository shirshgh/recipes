import { addRecipe } from "./helpers";

export async function seedSalads(tagByName: Record<string, number>) {
  const t = tagByName;

  await addRecipe({ title: "Angel Hair Pasta Salad", slug: "angel-hair-pasta-salad", category: "salad", servings: 8, prepMinutes: 15, cookMinutes: 10, healthScore: 3, sourceLabel: "Batya Meyer", description: "Thin pasta with purple cabbage, toasted almonds and scallions in a tangy vinegar dressing.", instructions: `1. Cook pasta, drain and cool.\n2. Combine pasta, purple cabbage, toasted almonds, and scallions in a large bowl.\n3. Whisk dressing: sugar, vinegar, oil, salt and pepper.\n4. Pour dressing over salad, toss and serve.` }, [
    { name: "thin pasta (angel hair)", amount: 5, unit: "oz", healthTag: "grain", notes: "cooked" },
    { name: "purple cabbage", amount: 1.5, unit: "packages Bodek", healthTag: "vegetable" },
    { name: "slivered almonds", amount: 1, unit: "cup", healthTag: "fat", notes: "toasted" },
    { name: "scallions", amount: 1, unit: "bunch", healthTag: "vegetable", notes: "sliced" },
    { name: "sugar", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "vinegar", amount: 0.25, unit: "cup", notes: "red wine or apple cider" },
    { name: "oil", amount: 0.33, unit: "cup", healthTag: "fat" },
    { name: "salt", amount: 1, unit: "tsp" },
    { name: "black pepper", amount: 1, unit: "tsp" },
  ], ["vegetarian", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Apple Cranberry Salad", slug: "apple-cranberry-salad", category: "salad", servings: 8, prepMinutes: 20, cookMinutes: 0, healthScore: 4, sourceLabel: "Rachel Klein", description: "Fresh apple slices with walnuts, cranberry dressing, and balsamic. Keep apple slices in lemon water until ready to serve.", instructions: `1. Slice apples thin, keep in cold water with lemon juice until serving.\n2. Blend all dressing ingredients until smooth. Taste and adjust sweet/salty.\n3. Combine lettuce, tomatoes, drained apples, and toasted walnuts.\n4. Pour dressing over salad just before serving.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "tomatoes", amount: 2, unit: "medium", healthTag: "vegetable" },
    { name: "red apple", amount: 1, unit: "medium", healthTag: "vegetable", notes: "thinly sliced" },
    { name: "green apple", amount: 1, unit: "medium", healthTag: "vegetable", notes: "thinly sliced" },
    { name: "walnuts", amount: 0.5, unit: "cup", healthTag: "fat", notes: "chopped and toasted with a little salt" },
    { name: "cranberry sauce", amount: 0.25, unit: "can (whole or jelly)", healthTag: "sugar" },
    { name: "balsamic vinegar", amount: 0.25, unit: "cup" },
    { name: "red onion", amount: 1, unit: "tbsp", healthTag: "vegetable", notes: "chopped" },
    { name: "sugar", amount: 1.25, unit: "tbsp", healthTag: "sugar" },
    { name: "mustard", amount: 1, unit: "tsp" },
    { name: "oil", amount: 0.25, unit: "cup", healthTag: "fat" },
    { name: "water", amount: 0.25, unit: "cup" },
    { name: "salt and pepper", amount: 1, unit: "pinch" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Basic Cabbage Salad", slug: "basic-cabbage-salad", category: "salad", servings: 8, prepMinutes: 10, cookMinutes: 0, healthScore: 4, sourceLabel: "Mommy", description: "Simple white cabbage salad with Chinese pecans, croutons and a classic soy-vinegar dressing.", instructions: `1. Combine cabbage, Chinese pecans, croutons, and chives/scallions in a large bowl.\n2. Whisk together oil, vinegar, sugar, and soy sauce.\n3. Pour dressing over salad and toss. Serve immediately.` }, [
    { name: "white cabbage", amount: 0.5, unit: "head", healthTag: "vegetable", notes: "shredded" },
    { name: "Chinese pecans", amount: 1, unit: "handful", healthTag: "fat" },
    { name: "croutons", amount: 1, unit: "handful" },
    { name: "chives or scallions", amount: 3, unit: "stalks", healthTag: "vegetable", notes: "chopped" },
    { name: "oil", amount: 0.33, unit: "cup", healthTag: "fat" },
    { name: "vinegar", amount: 0.33, unit: "cup" },
    { name: "sugar", amount: 0.33, unit: "cup", healthTag: "sugar" },
    { name: "soy sauce", amount: 2, unit: "tbsp" },
  ], ["vegan", "vegetarian", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Lettuce Craisins Salad", slug: "lettuce-craisins-salad", category: "salad", servings: 10, prepMinutes: 20, cookMinutes: 5, healthScore: 3, sourceLabel: "Batya Mayer", description: "Lettuce with mandarin oranges, craisins, glazed cashews, and a creamy honey-mustard dressing.", instructions: `1. Make glazed cashews: stir cashews with sugar in a pan on medium heat until sugar melts. Pour onto parchment and cool, then crumble.\n2. Chop lettuce and cucumber.\n3. Mix dressing: mayo, honey, Dijon mustard, water.\n4. Combine all salad ingredients, pour dressing over and mix. Top with glazed cashews.` }, [
    { name: "lettuce", amount: 2, unit: "bags", healthTag: "vegetable" },
    { name: "mandarin oranges", amount: 1, unit: "can (large)", notes: "drained" },
    { name: "craisins (dried cranberries)", amount: 0.75, unit: "cup", healthTag: "sugar" },
    { name: "cucumber", amount: 1, unit: "medium", healthTag: "vegetable", notes: "optional" },
    { name: "cashews", amount: 1, unit: "cup", healthTag: "fat", notes: "chopped" },
    { name: "sugar", amount: 0.25, unit: "cup", healthTag: "sugar", notes: "for glazing cashews" },
    { name: "mayonnaise", amount: 0.75, unit: "cup", healthTag: "fat" },
    { name: "honey", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "Dijon mustard", amount: 2, unit: "tbsp" },
    { name: "water", amount: 0.125, unit: "cup" },
  ], ["vegetarian", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Batya Meir's Mandarin Salad", slug: "batya-meir-mandarin-salad", category: "salad", servings: 10, prepMinutes: 20, cookMinutes: 5, healthScore: 3, sourceLabel: "Batya Meir", description: "Lettuce with mandarin oranges, raisins, tomatoes, glazed cashews, and honey-mustard dressing.", instructions: `1. Glaze cashews: stir cashews with sugar over medium heat until sugar melts. Pour on a lined baking sheet, cool, then crumble.\n2. Chop tomatoes and cucumber. Combine all salad ingredients.\n3. Mix dressing ingredients together. Pour over salad and mix.` }, [
    { name: "lettuce", amount: 2, unit: "bags", healthTag: "vegetable" },
    { name: "mandarin oranges", amount: 1, unit: "can", notes: "drained" },
    { name: "raisins or craisins", amount: 0.75, unit: "cup", healthTag: "sugar" },
    { name: "tomatoes", amount: 2, unit: "medium", healthTag: "vegetable", notes: "optional" },
    { name: "cucumber", amount: 1, unit: "medium", healthTag: "vegetable", notes: "optional" },
    { name: "cashews", amount: 1, unit: "cup", healthTag: "fat", notes: "glazed: melt ¼ cup sugar over cashews" },
    { name: "mayonnaise", amount: 0.75, unit: "cup", healthTag: "fat" },
    { name: "honey", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "Dijon mustard", amount: 2, unit: "tbsp" },
    { name: "water", amount: 0.125, unit: "cup" },
  ], ["vegetarian", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Broccoli Salad", slug: "broccoli-salad", category: "salad", servings: 6, prepMinutes: 15, cookMinutes: 0, healthScore: 5, sourceLabel: "Bubby Hirsch", description: "Bodek broccoli with purple onion, cranberries, almonds, and a bright lemony mayo dressing.", instructions: `1. Combine broccoli, purple onion rings, cranberries, and almonds in a large bowl.\n2. Whisk together mayo, lemon juice, sugar, salt and pepper.\n3. Pour dressing over salad and toss well.` }, [
    { name: "broccoli", amount: 1, unit: "large bag (Bodek)", healthTag: "vegetable" },
    { name: "purple onion", amount: 1, unit: "medium", healthTag: "vegetable", notes: "cut into half rings" },
    { name: "dried cranberries", amount: 170, unit: "g (6 oz)", healthTag: "sugar" },
    { name: "sliced almonds", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "mayonnaise", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "lemon juice", amount: 1, unit: "lemon" },
    { name: "sugar", amount: 0.33, unit: "cup", healthTag: "sugar" },
    { name: "salt and pepper", amount: 1, unit: "to taste" },
  ], ["vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Celery Salad", slug: "celery-salad", category: "salad", servings: 6, prepMinutes: 15, cookMinutes: 0, healthScore: 5, sourceLabel: "Yated Ne'eman", description: "Crisp celery with sour pickles, garlic, and a creamy dill dressing. Best chilled for 2 hours.", instructions: `1. Slice celery and pickles. Mince the garlic.\n2. Combine mayo, lemon juice, and dried dill.\n3. Stir the dressing into the celery mixture. Mix well.\n4. Chill for at least 2 hours before serving.` }, [
    { name: "celery", amount: 1, unit: "bunch", healthTag: "vegetable", notes: "sliced" },
    { name: "sour pickles", amount: 7, unit: "medium", notes: "sliced" },
    { name: "garlic", amount: 6, unit: "cloves", healthTag: "vegetable", notes: "minced" },
    { name: "mayonnaise", amount: 4, unit: "tbsp", healthTag: "fat" },
    { name: "lemon juice", amount: 1, unit: "lemon" },
    { name: "dried dill", amount: 3, unit: "tbsp" },
  ], ["vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Cherry Tomato Salad", slug: "cherry-tomato-salad", category: "salad", servings: 4, prepMinutes: 10, cookMinutes: 0, healthScore: 5, sourceLabel: "Sara Leah Dershowitz", description: "Simple, bright salad of cherry tomatoes, scallions, and fresh parsley with a lemon-sugar dressing.", instructions: `1. Halve the tomatoes. Chop scallions and parsley.\n2. Whisk lemon juice, salt, oil, and sugar.\n3. Combine vegetables, pour dressing over just before serving.` }, [
    { name: "cherry tomatoes", amount: 0.5, unit: "container (~250g)", healthTag: "vegetable" },
    { name: "scallions", amount: 4, unit: "stalks", healthTag: "vegetable" },
    { name: "fresh parsley", amount: 1, unit: "large handful", healthTag: "vegetable" },
    { name: "lemon juice", amount: 1, unit: "large lemon" },
    { name: "salt", amount: 1, unit: "tsp" },
    { name: "oil", amount: 0.25, unit: "cup", healthTag: "fat" },
    { name: "sugar", amount: 3.5, unit: "tbsp", healthTag: "sugar" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Chinese Rice Salad", slug: "chinese-rice-salad", category: "salad", servings: 8, prepMinutes: 15, cookMinutes: 20, healthScore: 4, sourceLabel: "Batya Meir", description: "Hearty rice salad with cashews, cranberries, red pepper, scallions, and a sesame-soy dressing.", instructions: `1. Cook rice. Drain and cool completely.\n2. Whisk soy sauce, sesame oil, pepper, vinegar, sugar, and garlic.\n3. Pour dressing over cooled rice and mix gently.\n4. Add scallions, red peppers, cashews, and cranberries.\n5. Chill for several hours before serving.` }, [
    { name: "white or brown rice", amount: 1.5, unit: "cups", healthTag: "grain" },
    { name: "soy sauce", amount: 0.25, unit: "cup" },
    { name: "sesame oil", amount: 0.25, unit: "cup", healthTag: "fat" },
    { name: "black pepper", amount: 1, unit: "tsp" },
    { name: "vinegar", amount: 0.5, unit: "tbsp" },
    { name: "sugar", amount: 2, unit: "tbsp", healthTag: "sugar" },
    { name: "garlic", amount: 1, unit: "clove", healthTag: "vegetable", notes: "crushed" },
    { name: "scallions", amount: 4, unit: "stalks", healthTag: "vegetable", notes: "sliced" },
    { name: "red peppers", amount: 1.5, unit: "medium", healthTag: "vegetable", notes: "sliced" },
    { name: "cashews", amount: 170, unit: "g (6 oz)", healthTag: "fat" },
    { name: "dried cranberries", amount: 1, unit: "cup", healthTag: "sugar" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Classic Coleslaw", slug: "classic-coleslaw", category: "salad", servings: 6, prepMinutes: 10, cookMinutes: 0, healthScore: 3, sourceLabel: "Hellman's", description: "Classic creamy coleslaw with cabbage, carrots, and green pepper.", instructions: `1. Combine mayo, lemon juice, sugar, and salt.\n2. Stir in cabbage, carrots, and green pepper.\n3. Cover and chill before serving.` }, [
    { name: "mayonnaise", amount: 1, unit: "cup", healthTag: "fat" },
    { name: "lemon juice", amount: 3, unit: "tbsp" },
    { name: "sugar", amount: 2, unit: "tbsp", healthTag: "sugar" },
    { name: "salt", amount: 1, unit: "tsp" },
    { name: "cabbage", amount: 6, unit: "cups", healthTag: "vegetable", notes: "shredded" },
    { name: "carrots", amount: 1, unit: "cup", healthTag: "vegetable", notes: "shredded" },
    { name: "green pepper", amount: 0.5, unit: "cup", healthTag: "vegetable", notes: "thinly sliced" },
  ], ["vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Crispy Noodles Lettuce & Pomegranate Salad", slug: "crispy-noodles-pomegranate-salad", category: "salad", servings: 8, prepMinutes: 20, cookMinutes: 10, healthScore: 4, sourceLabel: "Raishi Klein", description: "Crunchy sautéed noodles with lettuce, pomegranate seeds, purple onion, carrot, and a sweet soy dressing.", instructions: `1. Make crispy noodles: sauté noodles in 1-2 tbsp oil with 3 crushed garlic cloves for 10 minutes until golden. Add almonds and sesame, cool.\n2. Boil dressing ingredients (olive oil, sugar, soy sauce, apple cider vinegar), then cool in fridge.\n3. Combine lettuce, pomegranate, purple onion, and shredded carrot.\n4. Add crispy noodles right before serving. Pour cooled dressing over and toss.` }, [
    { name: "instant noodles", amount: 0.5, unit: "package", healthTag: "grain", notes: "raw, broken up" },
    { name: "oil", amount: 1.5, unit: "tbsp", healthTag: "fat", notes: "for sautéing noodles" },
    { name: "garlic", amount: 3, unit: "cloves", healthTag: "vegetable", notes: "crushed" },
    { name: "almond sticks", amount: 0.25, unit: "cup", healthTag: "fat" },
    { name: "sesame seeds", amount: 0.25, unit: "cup", healthTag: "fat" },
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "pomegranate seeds", amount: 0.5, unit: "cup", healthTag: "vegetable" },
    { name: "purple onion", amount: 0.5, unit: "medium", healthTag: "vegetable" },
    { name: "carrot", amount: 1, unit: "medium", healthTag: "vegetable", notes: "shredded" },
    { name: "olive oil", amount: 0.5, unit: "cup", healthTag: "fat", notes: "for dressing (can reduce, add water)" },
    { name: "sugar", amount: 0.5, unit: "cup", healthTag: "sugar", notes: "for dressing" },
    { name: "soy sauce", amount: 2, unit: "tsp", notes: "for dressing" },
    { name: "apple cider vinegar", amount: 0.25, unit: "cup", notes: "for dressing" },
  ], ["vegan", "vegetarian", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Dill Salad", slug: "dill-salad", category: "salad", servings: 6, prepMinutes: 15, cookMinutes: 5, healthScore: 4, sourceLabel: "Rachel Klein", description: "Lettuce with a fresh dill dressing and garlicky sautéed slivered almonds.", instructions: `1. Sauté almonds with oil and sliced garlic until golden. Cool.\n2. Whisk lemon juice, vinegar, salt, sugar, oil, and chopped dill.\n3. Toss lettuce with dressing. Top with cooled garlic almonds.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "fresh dill", amount: 1, unit: "bunch", healthTag: "vegetable" },
    { name: "slivered almonds", amount: 0.75, unit: "cup", healthTag: "fat" },
    { name: "oil", amount: 1, unit: "tbsp", healthTag: "fat", notes: "for sautéing almonds" },
    { name: "garlic", amount: 4, unit: "cloves", healthTag: "vegetable", notes: "sliced" },
    { name: "lemon juice", amount: 2.5, unit: "tbsp" },
    { name: "vinegar", amount: 1.5, unit: "tbsp" },
    { name: "salt", amount: 1, unit: "tsp" },
    { name: "sugar", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "oil", amount: 0.5, unit: "cup", healthTag: "fat", notes: "for dressing" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Euro Salad", slug: "euro-salad", category: "salad", servings: 6, prepMinutes: 10, cookMinutes: 0, healthScore: 4, sourceLabel: "Chaya Schorr", description: "Lettuce with mango, peaches, craisins, and nuts in a peanut-garlic dressing.", instructions: `1. Combine lettuce, mango, canned peaches or mandarins, craisins, and nuts/granola.\n2. Whisk dressing: oil, garlic, peanut butter, sugar, soy sauce, vinegar, pepper.\n3. Pour over salad and toss.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "mango", amount: 1, unit: "medium", healthTag: "vegetable" },
    { name: "canned peaches or mandarins", amount: 1, unit: "small can", notes: "drained" },
    { name: "craisins", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "nuts or granola", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "oil", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "garlic", amount: 1, unit: "clove", healthTag: "vegetable", notes: "crushed" },
    { name: "peanut butter", amount: 1, unit: "tsp", healthTag: "fat" },
    { name: "sugar", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "soy sauce", amount: 0.125, unit: "cup" },
    { name: "vinegar", amount: 0.125, unit: "cup" },
    { name: "black pepper", amount: 1, unit: "dash" },
  ], ["vegan", "vegetarian", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Kohlrabi Salad", slug: "kohlrabi-salad", category: "salad", servings: 8, prepMinutes: 15, cookMinutes: 0, healthScore: 5, sourceLabel: "Chavi Reich", description: "Crunchy shredded kohlrabi, cucumber, green pepper, and carrot with a sweet vinegar dressing.", instructions: `1. Shred kohlrabi. Slice cucumbers, green peppers, and carrots.\n2. Whisk together oil, vinegar, water, sugar, and salt.\n3. Pour dressing over vegetables, toss and chill before serving.` }, [
    { name: "kohlrabi", amount: 3, unit: "medium", healthTag: "vegetable", notes: "shredded" },
    { name: "cucumbers", amount: 2, unit: "medium", healthTag: "vegetable", notes: "sliced" },
    { name: "green peppers", amount: 2, unit: "medium", healthTag: "vegetable", notes: "sliced" },
    { name: "carrots", amount: 4, unit: "medium", healthTag: "vegetable", notes: "sliced" },
    { name: "oil", amount: 150, unit: "ml (5 oz)", healthTag: "fat" },
    { name: "vinegar", amount: 200, unit: "ml (7 oz)" },
    { name: "water", amount: 60, unit: "ml (2 oz)" },
    { name: "sugar", amount: 0.67, unit: "cup", healthTag: "sugar" },
    { name: "salt", amount: 0.125, unit: "tsp" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Lettuce & Chinese Pecan Salad", slug: "lettuce-chinese-pecan-salad", category: "salad", servings: 6, prepMinutes: 10, cookMinutes: 0, healthScore: 3, sourceLabel: "Rachel Klein", description: "Lettuce with purple cabbage, craisins, Chinese pecans, and a creamy soy dressing.", instructions: `1. Combine lettuce, purple cabbage, scallions, croutons, craisins, and crushed Chinese pecans.\n2. Blend dressing: mayo, oil, sugar, soy sauce, mustard, water.\n3. Pour over salad and toss.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "purple cabbage", amount: 1, unit: "handful", healthTag: "vegetable" },
    { name: "scallions", amount: 3, unit: "stalks", healthTag: "vegetable" },
    { name: "mini croutons", amount: 1, unit: "handful" },
    { name: "craisins", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "Chinese pecans", amount: 0.5, unit: "cup", healthTag: "fat", notes: "crushed" },
    { name: "mayonnaise", amount: 3, unit: "tbsp", healthTag: "fat" },
    { name: "oil", amount: 2, unit: "tbsp", healthTag: "fat" },
    { name: "sugar", amount: 2, unit: "tbsp", healthTag: "sugar" },
    { name: "soy sauce", amount: 1, unit: "tbsp" },
    { name: "mustard", amount: 0.5, unit: "tsp" },
    { name: "water", amount: 0.25, unit: "cup" },
  ], ["vegetarian", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Lettuce Cabbage Broccoli Salad", slug: "lettuce-cabbage-broccoli-salad", category: "salad", servings: 10, prepMinutes: 15, cookMinutes: 0, healthScore: 4, description: "A hearty layered salad with cabbage, broccoli, mushrooms, Chinese pecans, and a creamy garlicky dressing.", instructions: `1. Combine white cabbage, red cabbage, romaine, sliced mushrooms, broccoli, scallions, Chinese pecans, and croutons.\n2. Blend dressing: mayo, garlic cubes, dill cube, vinegar, salt, sugar, water.\n3. Pour over salad and toss well.` }, [
    { name: "white cabbage", amount: 1, unit: "bag", healthTag: "vegetable" },
    { name: "red cabbage", amount: 1, unit: "bag", healthTag: "vegetable" },
    { name: "romaine lettuce", amount: 1, unit: "bag", healthTag: "vegetable" },
    { name: "mushrooms", amount: 1, unit: "box", healthTag: "vegetable", notes: "sliced" },
    { name: "broccoli", amount: 2, unit: "handfuls", healthTag: "vegetable", notes: "small florets" },
    { name: "scallions", amount: 4, unit: "stalks", healthTag: "vegetable" },
    { name: "Chinese pecans", amount: 1, unit: "cup", healthTag: "fat", notes: "crushed" },
    { name: "croutons", amount: 1, unit: "cup" },
    { name: "mayonnaise", amount: 1, unit: "cup", healthTag: "fat" },
    { name: "garlic", amount: 2, unit: "cubes or cloves" },
    { name: "dill", amount: 1, unit: "cube or tbsp fresh" },
    { name: "vinegar", amount: 0.25, unit: "cup" },
    { name: "salt", amount: 0.25, unit: "tsp" },
    { name: "sugar", amount: 0.75, unit: "cup", healthTag: "sugar" },
    { name: "water", amount: 0.33, unit: "cup" },
  ], ["vegetarian", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Lettuce Cashew Chinese Sprout Salad", slug: "lettuce-cashew-sprout-salad", category: "salad", servings: 6, prepMinutes: 10, cookMinutes: 0, healthScore: 4, sourceLabel: "Yehudit Simons", description: "Lettuce with cashews, raisins, and bean sprouts in a tangy vinegar-garlic dressing. Dress an hour before serving.", instructions: `1. Combine lettuce, cashews, raisins, and bean sprouts.\n2. Whisk dressing: vinegar, lemon juice, mayo, sugar, minced garlic.\n3. Pour dressing over salad an hour before serving.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "cashews", amount: 100, unit: "g", healthTag: "fat", notes: "chopped" },
    { name: "raisins", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "bean sprouts", amount: 1, unit: "cup", healthTag: "vegetable" },
    { name: "vinegar", amount: 0.33, unit: "cup" },
    { name: "lemon juice", amount: 0.33, unit: "cup" },
    { name: "mayonnaise", amount: 0.33, unit: "cup", healthTag: "fat" },
    { name: "sugar", amount: 0.33, unit: "cup", healthTag: "sugar" },
    { name: "garlic", amount: 2, unit: "cloves", healthTag: "vegetable", notes: "minced" },
  ], ["vegetarian", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Mushroom Lettuce Salad with Almonds", slug: "mushroom-lettuce-almond-salad", category: "salad", servings: 6, prepMinutes: 15, cookMinutes: 5, healthScore: 4, sourceLabel: "Rachel Klein", description: "Sautéed mushrooms on lettuce with caramelized almonds, red onion, and a Dijon-ketchup dressing.", instructions: `1. Sauté mushrooms until golden. Cool slightly.\n2. Caramelize almonds: cook with sugar until coated. Cool on parchment.\n3. Shake dressing ingredients in a jar.\n4. Combine lettuce, mushrooms, terra sticks, red onion, and almonds. Dress and toss.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "fresh mushrooms", amount: 1, unit: "box", healthTag: "vegetable", notes: "sautéed" },
    { name: "terra sticks or croutons", amount: 1, unit: "handful" },
    { name: "red onion", amount: 0.25, unit: "small", healthTag: "vegetable" },
    { name: "almonds", amount: 0.5, unit: "cup", healthTag: "fat", notes: "caramelized" },
    { name: "oil", amount: 0.25, unit: "cup", healthTag: "fat" },
    { name: "ketchup", amount: 0.125, unit: "cup" },
    { name: "sugar", amount: 2, unit: "tbsp", healthTag: "sugar" },
    { name: "garlic", amount: 1, unit: "clove", healthTag: "vegetable", notes: "crushed" },
    { name: "red wine vinegar", amount: 3, unit: "tbsp" },
    { name: "water", amount: 2, unit: "tbsp" },
    { name: "Dijon mustard", amount: 0.5, unit: "tbsp" },
  ], ["vegetarian", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Mexican Salad", slug: "mexican-salad", category: "salad", servings: 8, prepMinutes: 15, cookMinutes: 0, healthScore: 4, sourceLabel: "Rachel Klein", description: "Lettuce with cucumber, carrot, mushrooms, and toasted mixed nuts in a spicy soy dressing.", instructions: `1. Combine lettuce, cucumber sticks, scallions, carrot sticks, mushrooms, and toasted nuts.\n2. Whisk dressing: paprika, salt, garlic, sugar, vinegar, soy sauce, oil, pepper.\n3. Pour over salad. For a large salad, double all ingredients except garlic.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "cucumber", amount: 1, unit: "medium", healthTag: "vegetable", notes: "cut into sticks" },
    { name: "scallions", amount: 4, unit: "stalks", healthTag: "vegetable" },
    { name: "carrots", amount: 2, unit: "medium", healthTag: "vegetable", notes: "peeled into sticks" },
    { name: "mushrooms", amount: 1, unit: "cup", healthTag: "vegetable" },
    { name: "almonds, walnuts and cashews", amount: 0.5, unit: "cup", healthTag: "fat", notes: "toasted" },
    { name: "hot paprika", amount: 0.5, unit: "tsp" },
    { name: "salt", amount: 0.5, unit: "tsp" },
    { name: "garlic", amount: 5, unit: "cloves", healthTag: "vegetable", notes: "crushed" },
    { name: "sugar", amount: 2, unit: "tbsp", healthTag: "sugar" },
    { name: "vinegar", amount: 3, unit: "tbsp" },
    { name: "soy sauce", amount: 2, unit: "tbsp" },
    { name: "oil", amount: 1, unit: "tbsp", healthTag: "fat" },
    { name: "black pepper", amount: 1, unit: "pinch" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Mushroom Lettuce Salad", slug: "mushroom-lettuce-salad", category: "salad", servings: 6, prepMinutes: 10, cookMinutes: 0, healthScore: 4, sourceLabel: "Rachel Klein", description: "Lettuce with mushrooms, Chinese pecans, croutons, and carrot strips in a tangy ketchup dressing.", instructions: `1. Combine lettuce, mushrooms, Chinese pecans, croutons, and carrot strips.\n2. Whisk dressing: ketchup, sugar, vinegar, garlic powder, paprika, salt, oil, dry mustard.\n3. Pour over salad and toss.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "mushrooms", amount: 1, unit: "cup", healthTag: "vegetable" },
    { name: "Chinese pecans", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "croutons", amount: 0.5, unit: "cup" },
    { name: "carrot", amount: 1, unit: "medium", healthTag: "vegetable", notes: "strips" },
    { name: "ketchup", amount: 0.25, unit: "cup" },
    { name: "sugar", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "vinegar", amount: 0.25, unit: "cup" },
    { name: "garlic powder", amount: 1, unit: "tsp" },
    { name: "paprika", amount: 0.25, unit: "tsp" },
    { name: "salt", amount: 0.5, unit: "tsp" },
    { name: "oil", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "dry mustard", amount: 0.25, unit: "tsp" },
  ], ["vegetarian", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Nissel's Lettuce Coleslaw Cashew Salad", slug: "nissel-lettuce-coleslaw-cashew", category: "salad", servings: 6, prepMinutes: 10, cookMinutes: 0, healthScore: 4, sourceLabel: "Nissel", description: "Baby leaves with coleslaw mix, cashews, and a balsamic-honey-mustard dressing.", instructions: `1. Combine baby leaves, coleslaw mix, and cashews.\n2. Whisk balsamic vinegar, soy sauce, mustard, honey, garlic, and olive oil.\n3. Dress and toss just before serving.` }, [
    { name: "baby leaf lettuce", amount: 1, unit: "bag", healthTag: "vegetable" },
    { name: "coleslaw mix", amount: 1, unit: "bag", healthTag: "vegetable" },
    { name: "cashews", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "balsamic vinegar", amount: 1, unit: "tbsp" },
    { name: "soy sauce", amount: 1, unit: "tbsp" },
    { name: "mustard", amount: 1, unit: "tbsp" },
    { name: "honey", amount: 2, unit: "tbsp", healthTag: "sugar" },
    { name: "garlic", amount: 2, unit: "cloves", healthTag: "vegetable" },
    { name: "olive oil", amount: 0.25, unit: "cup", healthTag: "fat" },
  ], ["vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Pasta Purple Cabbage Salad", slug: "pasta-purple-cabbage-salad", category: "salad", servings: 12, prepMinutes: 20, cookMinutes: 10, healthScore: 3, sourceLabel: "Rachel Klein", description: "A stunning layered salad with lettuce, purple cabbage, pasta, deli, and terra chips in a creamy dressing. Serve in a trifle bowl.", instructions: `1. Cook pasta, drain and cool.\n2. Layer in a trifle bowl: lettuce, purple cabbage, pasta, deli/chicken, terra chips.\n3. Blend dressing: mayo, sugar, water, vinegar, mustard, garlic.\n4. Pour dressing over layers. Makes a lot — halve the dressing if needed.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "purple cabbage", amount: 1, unit: "small head", healthTag: "vegetable" },
    { name: "thin pasta", amount: 1, unit: "cup cooked", healthTag: "grain" },
    { name: "deli, chicken, or schnitzel", amount: 1, unit: "cup", healthTag: "protein", notes: "sliced into strips" },
    { name: "terra chips or croutons", amount: 1, unit: "cup" },
    { name: "mayonnaise", amount: 1, unit: "cup", healthTag: "fat" },
    { name: "sugar", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "water", amount: 0.25, unit: "cup" },
    { name: "vinegar", amount: 0.25, unit: "cup" },
    { name: "mustard", amount: 1, unit: "tbsp" },
    { name: "garlic", amount: 1, unit: "clove", healthTag: "vegetable", notes: "crushed" },
  ], ["dairy-free", "kosher"], t);

  await addRecipe({ title: "Pecan Lettuce Salad", slug: "pecan-lettuce-salad", category: "salad", servings: 6, prepMinutes: 10, cookMinutes: 0, healthScore: 3, description: "Simple lettuce salad with sugared pecans and croutons in a mayo-vinegar dressing.", instructions: `1. Combine lettuce, sugared pecans, and croutons.\n2. Whisk garlic powder, sugar, mayo, and vinegar.\n3. Toss with dressing and serve.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "sugared pecans", amount: 1, unit: "cup", healthTag: "fat" },
    { name: "croutons", amount: 1, unit: "cup" },
    { name: "garlic powder", amount: 1, unit: "tsp" },
    { name: "sugar", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "mayonnaise", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "vinegar", amount: 0.25, unit: "cup" },
  ], ["vegetarian", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Pomegranate Seed Salad", slug: "pomegranate-seed-salad", category: "salad", servings: 6, prepMinutes: 10, cookMinutes: 0, healthScore: 4, sourceLabel: "Sora Leah Dershowitz", description: "Lettuce with mandarin oranges, cherry tomatoes, croutons, and pomegranate seeds in a honey-lemon dressing.", instructions: `1. Combine lettuce, mandarin oranges, cherry tomatoes, croutons, and pomegranate seeds (or craisins).\n2. Whisk mayo, oil, garlic powder, lemon juice, and honey.\n3. Pour dressing over and toss.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "mandarin oranges", amount: 1, unit: "can", notes: "drained" },
    { name: "cherry tomatoes", amount: 0.5, unit: "cup", healthTag: "vegetable" },
    { name: "croutons", amount: 0.5, unit: "cup" },
    { name: "pomegranate seeds", amount: 0.5, unit: "cup", healthTag: "vegetable", notes: "or craisins if not sweet enough" },
    { name: "mayonnaise", amount: 1, unit: "tbsp", healthTag: "fat" },
    { name: "oil", amount: 2, unit: "tbsp", healthTag: "fat" },
    { name: "garlic powder", amount: 1, unit: "dash" },
    { name: "lemon juice", amount: 3, unit: "tbsp" },
    { name: "honey", amount: 3, unit: "tbsp", healthTag: "sugar" },
  ], ["vegetarian", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Purple Cabbage Munches Salad", slug: "purple-cabbage-munches-salad", category: "salad", servings: 6, prepMinutes: 10, cookMinutes: 0, healthScore: 4, sourceLabel: "Dassi Shwinger", description: "Purple cabbage with scallions and crunchy munches in a sweet garlic dressing.", instructions: `1. Shred purple cabbage. Combine with scallions and munches.\n2. Mix dressing: oil, brown sugar, boiling water, lots of garlic powder/crystals.\n3. Pour over salad and toss.` }, [
    { name: "purple cabbage", amount: 1, unit: "head", healthTag: "vegetable", notes: "shredded" },
    { name: "scallions", amount: 4, unit: "stalks", healthTag: "vegetable" },
    { name: "munches (Israeli crunchy snack)", amount: 1, unit: "bag" },
    { name: "oil", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "brown sugar", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "boiling water", amount: 2, unit: "tbsp" },
    { name: "garlic powder", amount: 2, unit: "tsp", notes: "lots" },
  ], ["vegan", "vegetarian", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Purple Cabbage with Dried Mango", slug: "purple-cabbage-dried-mango", category: "salad", servings: 8, prepMinutes: 15, cookMinutes: 0, healthScore: 4, description: "Purple cabbage with red pepper, scallions, dried mango, honey-glazed pecans, and seeds in a mustard-ketchup dressing.", instructions: `1. Shred purple cabbage. Slice red pepper into strips. Chop scallions.\n2. Combine cabbage, pepper, scallions, dried mango, Chinese pecans, sunflower seeds, and pumpkin seeds.\n3. Whisk dressing: oil, water, ketchup, garlic, mustard, salt, sugar.\n4. Pour over salad and toss.` }, [
    { name: "purple cabbage", amount: 1, unit: "small head", healthTag: "vegetable", notes: "shredded" },
    { name: "red pepper", amount: 1, unit: "medium", healthTag: "vegetable", notes: "sliced into strips" },
    { name: "scallions", amount: 4, unit: "stalks", healthTag: "vegetable" },
    { name: "dried mango", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "honey-glazed Chinese pecans", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "sunflower seeds", amount: 0.25, unit: "cup", healthTag: "fat", notes: "roasted" },
    { name: "pumpkin seeds", amount: 0.25, unit: "cup", healthTag: "fat", notes: "roasted" },
    { name: "oil", amount: 0.33, unit: "cup", healthTag: "fat" },
    { name: "water", amount: 2, unit: "tbsp" },
    { name: "ketchup", amount: 2, unit: "tbsp" },
    { name: "garlic", amount: 1, unit: "clove/cube", healthTag: "vegetable" },
    { name: "mustard", amount: 1.5, unit: "tbsp" },
    { name: "salt", amount: 0.5, unit: "tsp" },
    { name: "sugar", amount: 3, unit: "tbsp", healthTag: "sugar" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Rachel's Cabbage and Persimmon Salad", slug: "cabbage-persimmon-salad", category: "salad", servings: 8, prepMinutes: 15, cookMinutes: 0, healthScore: 4, sourceLabel: "Rachel", description: "Cabbage with persimmon (or mango), craisins, Chinese pecans, and a tangy mustard dressing.", instructions: `1. Shred cabbage, slice purple onion and scallions. Cut persimmon (or mango) into pieces.\n2. Combine with craisins and Chinese pecans.\n3. Whisk dressing: brown sugar, mustard, oil, vinegar, salt, pepper.\n4. Pour over salad and toss.` }, [
    { name: "white cabbage", amount: 1, unit: "head", healthTag: "vegetable", notes: "shredded" },
    { name: "purple onion", amount: 0.5, unit: "medium", healthTag: "vegetable", notes: "sliced" },
    { name: "scallions", amount: 3, unit: "stalks", healthTag: "vegetable" },
    { name: "persimmon or mango", amount: 2, unit: "medium", notes: "or mandarin oranges" },
    { name: "craisins", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "Chinese pecans", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "brown sugar", amount: 4, unit: "tbsp", healthTag: "sugar" },
    { name: "mustard", amount: 2, unit: "tbsp" },
    { name: "oil", amount: 0.33, unit: "cup", healthTag: "fat" },
    { name: "vinegar", amount: 0.5, unit: "cup" },
    { name: "salt and pepper", amount: 1, unit: "to taste" },
  ], ["vegan", "vegetarian", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Rachel's Lettuce & Pomegranate Salad", slug: "rachel-lettuce-pomegranate", category: "salad", servings: 8, prepMinutes: 20, cookMinutes: 10, healthScore: 4, sourceLabel: "Rachel", description: "Lettuce with pomegranate, purple onion, carrot, and crispy sautéed noodles with a sweet soy dressing.", instructions: `1. Sauté noodles with oil, garlic, almonds, and sesame until golden. Cool.\n2. Boil dressing (olive oil, sugar, soy sauce, apple cider vinegar), cool.\n3. Combine lettuce, pomegranate, purple onion, and carrot.\n4. Add noodles right before serving, pour dressing and toss.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "pomegranate seeds", amount: 1, unit: "cup", healthTag: "vegetable" },
    { name: "purple onion", amount: 0.5, unit: "small", healthTag: "vegetable" },
    { name: "carrot", amount: 1, unit: "medium", healthTag: "vegetable", notes: "shredded" },
    { name: "instant noodles", amount: 0.5, unit: "package", healthTag: "grain", notes: "raw, sautéed" },
    { name: "oil", amount: 1.5, unit: "tbsp", healthTag: "fat" },
    { name: "garlic", amount: 3, unit: "cloves", healthTag: "vegetable", notes: "crushed" },
    { name: "almond sticks", amount: 0.25, unit: "cup", healthTag: "fat" },
    { name: "sesame seeds", amount: 0.25, unit: "cup", healthTag: "fat" },
    { name: "olive oil", amount: 0.5, unit: "cup", healthTag: "fat", notes: "for dressing" },
    { name: "sugar", amount: 0.5, unit: "cup", healthTag: "sugar", notes: "for dressing" },
    { name: "soy sauce", amount: 2, unit: "tsp", notes: "for dressing" },
    { name: "apple cider vinegar", amount: 0.25, unit: "cup", notes: "for dressing" },
  ], ["vegan", "vegetarian", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Raishi's Deli Salad", slug: "raishi-deli-salad", category: "salad", servings: 6, prepMinutes: 10, cookMinutes: 0, healthScore: 3, sourceLabel: "Raishi", description: "Lettuce and deli strips with a bold ketchup-mayo-salsa dressing.", instructions: `1. Layer lettuce and deli strips in a bowl.\n2. Mix ketchup, mayo, salsa, and shata spice.\n3. Drizzle dressing over and serve.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "deli slices", amount: 200, unit: "g", healthTag: "protein", notes: "cut into strips" },
    { name: "ketchup", amount: 0.33, unit: "cup" },
    { name: "mayonnaise", amount: 0.33, unit: "cup", healthTag: "fat" },
    { name: "salsa", amount: 0.33, unit: "cup" },
    { name: "shata spice (hot sauce)", amount: 0.5, unit: "tsp" },
  ], ["dairy-free", "kosher", "quick"], t);

  await addRecipe({ title: "Raichi's Deli & Schnitzel Stripes Salad", slug: "deli-schnitzel-stripes-salad", category: "salad", servings: 6, prepMinutes: 15, cookMinutes: 0, healthScore: 3, sourceLabel: "Raichi", description: "Lettuce with mushrooms, cherry tomatoes, purple onion, croutons, and deli or schnitzel strips in a honey-garlic dressing.", instructions: `1. Combine lettuce, mushrooms, cherry tomatoes, purple onion, and croutons/chowmain.\n2. Blend dressing in food processor: oil, honey, water, garlic clove, salt, pepper.\n3. Slice deli or schnitzel into strips, add to salad, pour dressing and toss.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "mushrooms", amount: 1, unit: "cup", healthTag: "vegetable" },
    { name: "cherry tomatoes", amount: 0.5, unit: "cup", healthTag: "vegetable" },
    { name: "purple onion", amount: 1, unit: "small", healthTag: "vegetable" },
    { name: "croutons or chowmain noodles", amount: 1, unit: "cup" },
    { name: "deli or schnitzel", amount: 200, unit: "g", healthTag: "protein", notes: "sliced into strips" },
    { name: "oil", amount: 0.25, unit: "cup", healthTag: "fat" },
    { name: "honey", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "water", amount: 0.25, unit: "cup" },
    { name: "garlic", amount: 1, unit: "clove", healthTag: "vegetable" },
    { name: "salt and pepper", amount: 1, unit: "to taste" },
  ], ["dairy-free", "kosher", "quick"], t);

  await addRecipe({ title: "Rainbow Salad (סלט קשת)", slug: "rainbow-salad", category: "salad", servings: 10, prepMinutes: 20, cookMinutes: 0, healthScore: 5, description: "A stunning layered salad of purple cabbage, carrots, and red pepper with a tangy vinegar-mayo dressing.", instructions: `1. In a clear bowl, alternate layers of shredded purple cabbage, grated carrots, and sliced red pepper.\n2. Blend dressing: oil, vinegar, mayo, scallions, garlic, sugar, salt.\n3. Pour dressing over salad. Top with optional alfalfa sprouts, peas, red radishes, sesame seeds.` }, [
    { name: "purple cabbage", amount: 1, unit: "head", healthTag: "vegetable", notes: "shredded" },
    { name: "carrots", amount: 900, unit: "g (2 lbs)", healthTag: "vegetable", notes: "coarsely grated" },
    { name: "red pepper", amount: 1, unit: "large", healthTag: "vegetable", notes: "thinly sliced" },
    { name: "red radishes", amount: 5, unit: "optional", healthTag: "vegetable" },
    { name: "scallions", amount: 5, unit: "stalks", healthTag: "vegetable" },
    { name: "oil", amount: 0.75, unit: "cup", healthTag: "fat" },
    { name: "vinegar", amount: 0.75, unit: "cup" },
    { name: "mayonnaise", amount: 6, unit: "tbsp", healthTag: "fat" },
    { name: "garlic", amount: 1, unit: "clove", healthTag: "vegetable", notes: "crushed" },
    { name: "sugar", amount: 6, unit: "tbsp", healthTag: "sugar" },
    { name: "salt", amount: 1, unit: "tbsp" },
  ], ["vegetarian", "gluten-free", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Salad with Parsley Dressing", slug: "salad-with-parsley-dressing", category: "salad", servings: 6, prepMinutes: 15, cookMinutes: 5, healthScore: 4, description: "Lettuce with caramelized carrot ribbons and slivered almonds in a fresh parsley dressing.", instructions: `1. Peel carrots with a peeler to make ribbons, then caramelize: sauté with a little sugar until golden.\n2. Caramelize almonds with 1 tbsp + 1 tsp sugar in a dry pan until coated. Cool.\n3. Whisk oil, sugar, vinegar, fresh parsley, and salt.\n4. Combine lettuce, carrots, and almonds. Pour dressing and toss.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "carrots", amount: 5, unit: "medium", healthTag: "vegetable", notes: "peeled into ribbons" },
    { name: "slivered almonds", amount: 0.25, unit: "cup", healthTag: "fat", notes: "caramelized with sugar" },
    { name: "oil", amount: 0.25, unit: "cup", healthTag: "fat" },
    { name: "sugar", amount: 2, unit: "tbsp", healthTag: "sugar" },
    { name: "vinegar", amount: 2, unit: "tbsp" },
    { name: "fresh parsley", amount: 1, unit: "tbsp", healthTag: "vegetable", notes: "chopped" },
    { name: "salt", amount: 0.5, unit: "tsp" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher"], t);

  await addRecipe({ title: "Sushi Salad", slug: "sushi-salad", category: "salad", servings: 6, prepMinutes: 20, cookMinutes: 15, healthScore: 3, sourceLabel: "Raichi", description: "Amazing sushi rice salad with spicy mayo, teriyaki-mirin sauce, avocado, cucumber, and carrot strips.", instructions: `1. Cook sushi rice with water and salt (~15 min low flame, pot slightly open). Off heat, add rice vinegar. Refrigerate.\n2. Make spicy mayo: mix mayo with red hot sauce.\n3. Make mirin sauce: boil mirin, soy sauce, and sugar together. Remove, cool in fridge.\n4. Assemble: put cooled rice in bowl, drizzle spicy mayo and mirin sauce, add avocado, cucumber, and carrot strips.\n5. Drizzle remaining sauces on top.` }, [
    { name: "sushi rice", amount: 2, unit: "cups", healthTag: "grain" },
    { name: "water", amount: 4, unit: "cups (slightly less)" },
    { name: "salt", amount: 2, unit: "tsp" },
    { name: "rice vinegar", amount: 1.5, unit: "tbsp" },
    { name: "mayonnaise", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "red hot sauce", amount: 0.5, unit: "tsp" },
    { name: "mirin", amount: 0.33, unit: "cup" },
    { name: "soy sauce", amount: 0.33, unit: "cup" },
    { name: "sugar", amount: 0.33, unit: "cup", healthTag: "sugar" },
    { name: "avocado", amount: 1, unit: "medium", healthTag: "fat", notes: "sliced into strips" },
    { name: "cucumber", amount: 1, unit: "medium", healthTag: "vegetable", notes: "strips" },
    { name: "carrot", amount: 1, unit: "medium", healthTag: "vegetable", notes: "strips" },
  ], ["dairy-free", "kosher"], t);

  await addRecipe({ title: "Purple Cabbage, Seeds & Peppers Salad", slug: "purple-cabbage-seeds-peppers", category: "salad", servings: 8, prepMinutes: 15, cookMinutes: 0, healthScore: 5, description: "Fresh purple cabbage with red pepper, scallions, dried mango, Chinese pecans, and roasted seeds.", instructions: `1. Shred cabbage. Slice red pepper into strips. Chop scallions.\n2. Combine with dried mango, Chinese pecans, roasted sunflower seeds, and roasted pumpkin seeds.\n3. Whisk dressing: oil, water, ketchup, crushed garlic, mustard, salt, sugar.\n4. Toss with dressing just before serving.` }, [
    { name: "purple cabbage", amount: 1, unit: "head", healthTag: "vegetable", notes: "fresh, shredded" },
    { name: "red pepper", amount: 1, unit: "large", healthTag: "vegetable", notes: "sliced" },
    { name: "scallions", amount: 3, unit: "stalks", healthTag: "vegetable" },
    { name: "Chinese pecans", amount: 0.5, unit: "cup", healthTag: "fat" },
    { name: "dried mango", amount: 0.5, unit: "cup", healthTag: "sugar" },
    { name: "sunflower seeds", amount: 3, unit: "tbsp", healthTag: "fat", notes: "roasted" },
    { name: "pumpkin seeds", amount: 3, unit: "tbsp", healthTag: "fat", notes: "roasted" },
    { name: "oil", amount: 0.33, unit: "cup", healthTag: "fat" },
    { name: "water", amount: 2, unit: "tbsp" },
    { name: "ketchup", amount: 2, unit: "tbsp" },
    { name: "garlic", amount: 1, unit: "clove/cube", healthTag: "vegetable", notes: "crushed" },
    { name: "mustard", amount: 1.5, unit: "tbsp" },
    { name: "salt", amount: 0.5, unit: "tsp" },
    { name: "sugar", amount: 3, unit: "tbsp", healthTag: "sugar" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Cabbage Pomegranate Mango Salad", slug: "cabbage-pomegranate-mango", category: "salad", servings: 8, prepMinutes: 20, cookMinutes: 0, healthScore: 5, description: "Cabbage with Chinese sprouts, mango, pomegranate seeds, coriander, celery, and a mirin dressing.", instructions: `1. Shred cabbage. Combine with Chinese sprouts, coriander (or parsley), celery, mango, and pomegranate seeds.\n2. Whisk canola oil, salt, mirin sauce, and vinegar.\n3. Pour dressing over, toss, and top with chopped Chinese pecans.` }, [
    { name: "white cabbage", amount: 1, unit: "medium head", healthTag: "vegetable", notes: "shredded" },
    { name: "Chinese bean sprouts", amount: 1, unit: "package", healthTag: "vegetable" },
    { name: "coriander or parsley", amount: 0.5, unit: "cup", healthTag: "vegetable", notes: "chopped" },
    { name: "celery stalks", amount: 3, unit: "stalks", healthTag: "vegetable" },
    { name: "mango", amount: 1, unit: "ripe", healthTag: "vegetable" },
    { name: "pomegranate seeds", amount: 1, unit: "cup", healthTag: "vegetable" },
    { name: "canola oil", amount: 2, unit: "tbsp", healthTag: "fat" },
    { name: "salt", amount: 1, unit: "tsp" },
    { name: "mirin sauce", amount: 0.25, unit: "cup" },
    { name: "vinegar", amount: 2, unit: "tbsp" },
    { name: "Chinese pecans", amount: 50, unit: "g", healthTag: "fat", notes: "coarsely chopped" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Mango Lettuce Salad", slug: "mango-lettuce-salad", category: "salad", servings: 6, prepMinutes: 10, cookMinutes: 5, healthScore: 4, sourceLabel: "Talenski", description: "Lettuce with mango, purple onion, cranberries, and toasted almond sticks in a soy-brown sugar dressing.", instructions: `1. Lightly toast almond sticks in the oven.\n2. Combine lettuce, mango, purple onion, cranberries, and toasted almonds.\n3. Whisk oil, vinegar, brown sugar, soy sauce, garlic powder (and a little water if desired).\n4. Toss with dressing before serving.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "mango", amount: 1, unit: "ripe", healthTag: "vegetable" },
    { name: "purple onion", amount: 0.5, unit: "small", healthTag: "vegetable" },
    { name: "dried cranberries", amount: 0.25, unit: "cup", healthTag: "sugar" },
    { name: "almond sticks", amount: 0.5, unit: "cup", healthTag: "fat", notes: "lightly toasted" },
    { name: "oil", amount: 0.33, unit: "cup", healthTag: "fat" },
    { name: "vinegar", amount: 0.33, unit: "cup" },
    { name: "brown sugar", amount: 2, unit: "tbsp", healthTag: "sugar" },
    { name: "soy sauce", amount: 1, unit: "tbsp" },
    { name: "garlic powder", amount: 1, unit: "tsp" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Root Vegetable Salad (סלט שורשים)", slug: "root-vegetable-salad", category: "salad", servings: 4, prepMinutes: 20, cookMinutes: 0, healthScore: 5, description: "Julienned carrots, beet, and kohlrabi with walnuts and coriander in a honey-balsamic dressing.", instructions: `1. Peel and cut carrots, beet, and kohlrabi into thin matchsticks.\n2. Combine in a bowl with broken walnuts.\n3. Mix dressing: crushed garlic, olive oil, balsamic, lemon juice, mustard, honey, salt, pepper.\n4. Pour dressing over vegetables and mix. Add coriander leaves last.` }, [
    { name: "carrots", amount: 2, unit: "medium", healthTag: "vegetable", notes: "peeled, julienned" },
    { name: "beet", amount: 1, unit: "medium", healthTag: "vegetable", notes: "peeled, julienned" },
    { name: "kohlrabi", amount: 1, unit: "medium", healthTag: "vegetable", notes: "peeled, julienned" },
    { name: "walnuts", amount: 0.5, unit: "cup", healthTag: "fat", notes: "broken" },
    { name: "fresh coriander leaves", amount: 0.5, unit: "cup", healthTag: "vegetable" },
    { name: "garlic", amount: 1, unit: "clove", healthTag: "vegetable", notes: "crushed" },
    { name: "olive oil", amount: 2, unit: "tbsp", healthTag: "fat" },
    { name: "balsamic vinegar", amount: 1, unit: "tbsp" },
    { name: "lemon juice", amount: 0.5, unit: "lemon" },
    { name: "mustard", amount: 1, unit: "tsp" },
    { name: "honey", amount: 1, unit: "tsp", healthTag: "sugar" },
    { name: "salt and pepper", amount: 1, unit: "to taste" },
  ], ["vegan", "vegetarian", "gluten-free", "dairy-free", "parve", "kosher", "quick"], t);

  await addRecipe({ title: "Mama's Layered Salad (סלט שכבות)", slug: "mama-layered-salad", category: "salad", servings: 10, prepMinutes: 20, cookMinutes: 0, healthScore: 4, sourceLabel: "Mama", description: "Beautiful layered salad of lettuce, cabbage, cucumber, carrot, and sprouts with a tangy dressing. Topped with a healthy seed mix.", instructions: `1. In a large clear bowl, create layers: lettuce, purple cabbage, shredded cucumber, shredded carrot, bean sprouts.\n2. Blend dressing: vinegar, oil, mayo, green onions, garlic, sugar, salt.\n3. Pour dressing over layers. Top with health seed/granola mix.` }, [
    { name: "lettuce", amount: 1, unit: "head", healthTag: "vegetable" },
    { name: "purple cabbage", amount: 0.5, unit: "head", healthTag: "vegetable", notes: "shredded layer" },
    { name: "cucumber", amount: 1, unit: "large", healthTag: "vegetable", notes: "shredded layer" },
    { name: "carrots", amount: 2, unit: "medium", healthTag: "vegetable", notes: "shredded layer" },
    { name: "bean sprouts", amount: 1, unit: "cup", healthTag: "vegetable" },
    { name: "health seed/granola mix", amount: 0.5, unit: "cup", healthTag: "fat", notes: "for topping" },
    { name: "vinegar", amount: 0.75, unit: "cup" },
    { name: "oil", amount: 0.75, unit: "cup", healthTag: "fat" },
    { name: "mayonnaise", amount: 6, unit: "tbsp", healthTag: "fat" },
    { name: "scallions", amount: 2, unit: "stalks", healthTag: "vegetable", notes: "chopped" },
    { name: "garlic", amount: 1, unit: "clove", healthTag: "vegetable" },
    { name: "sugar", amount: 6, unit: "tbsp", healthTag: "sugar" },
    { name: "salt", amount: 1, unit: "tbsp" },
  ], ["vegetarian", "dairy-free", "parve", "kosher"], t);
}
