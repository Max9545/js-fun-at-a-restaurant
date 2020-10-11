function createRestaurant(name) {
  return {name: name, menus: {breakfast: [], lunch: [], dinner: []}};
}

function addMenuItem(establishment, item) {
  if (item.type === 'lunch' && item != establishment.menus.lunch[0]) {
    establishment.menus.lunch.push(item);
  }
  if (item.type === 'breakfast' && item != establishment.menus.breakfast[0]) {
    establishment.menus.breakfast.push(item);
  }
  if (item.type === 'dinner' && item != establishment.menus.dinner[0]) {
    establishment.menus.dinner.push(item);
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
