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

function removeMenuItem(location, item, menu) {
  for (var i = 0; i < location.menus.breakfast.length; i++) {
    if (location.menus.breakfast[i].name === item) {
        location.menus.breakfast.splice(i, 1);
        return `No one is eating our ${item} - it has been removed from the ${menu} menu!`;
    }
  }
  for (var i = 0; i < location.menus.lunch.length; i++) {
    if (location.menus.lunch[i].name === item) {
        location.menus.lunch.splice(i, 1);
        return `No one is eating our ${item} - it has been removed from the ${menu} menu!`;
    }
  }
  for (var i = 0; i < location.menus.dinner.length; i++) {
    if (location.menus.dinner[i].name === item) {
        location.menus.dinner.splice(i, 1);
        return `No one is eating our ${item} - it has been removed from the ${menu} menu!`;
    }
  }
  return `Sorry, we don't sell ${item}, try adding a new recipe!`;
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
 }
