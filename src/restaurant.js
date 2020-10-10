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

module.exports = {
  createRestaurant,
  addMenuItem,
//   removeMenuItem
 }
