function createRestaurant(name) {
  return {name: name, menus: {breakfast: [], lunch: [], dinner: []}};
}

function addMenuItem(establishment, item) {
  if (!establishment.menus[item.type].includes(item)) {
    establishment.menus[item.type].push(item)
  }
}

function removeMenuItem(location, item, type) {
    var menuTypes = location.menus[type];
    for (var i = 0; i < menuTypes.length; i++) {
      if (menuTypes[i].name === item) {
        menuTypes.splice(i, 1);
        return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
      }
    }
      return `Sorry, we don't sell ${item}, try adding a new recipe!`;
}



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
 }
