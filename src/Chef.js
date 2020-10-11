class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  
  greetCustomer(name, morning) {
    if (morning === true) {
      return `Good morning, ${name}!`;
    }
    return `Hello, ${name}!`;
  }

  checkForFood(browseItem) {
    return (this.restaurant.menus[browseItem.type].includes(browseItem) ? `Yes, we're serving ${browseItem.name} today!` : `Sorry, we aren't serving ${browseItem.name} today.`);
 };
}


module.exports = Chef;
