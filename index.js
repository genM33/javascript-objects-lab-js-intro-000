const recipes = {
  'Bacon': '3 strips',
  'Eggs': 3,
  'Flour': '3 cups',
  'Pasta': ['Spaghetti', 'Fetuccini'],
  'Cooking Oil': '1 cup',
  'Mushroom Soup': '1 can'
};

// console.log(recipes);

function updateObjectWithKeyAndValue(obj, key, value) {
  const newRecipes = Object.assign({}, obj, {[key]: value});
  return newRecipes;
};

// console.log(updateObjectWithKeyAndValue(recipes, 'Sauce', 'Tomato'));
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  recipes[key] = value;
  return recipes;
};

// console.log(destructivelyUpdateObjectWithKeyAndValue(recipes, 'Mushroom Soup', '3 cans'));
