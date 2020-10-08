function nameMenuItem(name) {
  return `Delicious ${name}`;
};

function createMenuItem(name, price, type) {
  return {name: name, price: price, type: type};
};

function addIngredients(topper, pizza) {
    if (!pizza.includes(topper)) {
        pizza.push(topper);
  }
};

function formatPrice(number) {
  return `$${number}`;
};

function decreasePrice(saleItem) {
  return saleItem * .9;
}

function createRecipe(name, recipe, meal) {
  return {title: name, ingredients: recipe, type: meal};
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
