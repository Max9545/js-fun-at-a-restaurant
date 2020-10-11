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
   for (var i = 0; i < this.restaurant.menus.breakfast.length; i++) {
     if (this.restaurant.menus.breakfast[i].name === browseItem.name) {
       return `Yes, we're serving ${browseItem.name} today!`;
     }
   }
   for (var i = 0; i < this.restaurant.menus.lunch.length; i++) {
     if (this.restaurant.menus.lunch[i].name === browseItem.name) {
       return `Yes, we're serving ${browseItem.name} today!`;
     }
   }
   for (var i = 0; i < this.restaurant.menus.dinner.length; i++) {
     if (this.restaurant.menus.dinner[i].name === browseItem.name) {
       return `Yes, we're serving ${browseItem.name} today!`;
     }
   }
   return `Sorry, we aren't serving ${browseItem.name} today.`;
 }


}


module.exports = Chef;
