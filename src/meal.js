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

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
