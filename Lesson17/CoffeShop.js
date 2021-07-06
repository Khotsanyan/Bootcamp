class CoffeeShop {
  constructor(name, menu = []) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }

  addOrder(foodName) {
    this.menu.forEach((Element) => {
      if (foodName === Element) {
        this.orders.push(foodName);
      } else throw new Error("This item is currently unavailable!");
    });
  }

  fulfillOrder(foodName) {
    if (this.orders.length !== 0) {
      console.log("The {item} is ready!");
    } else console.log("All orders have been fulfilled!");
  }

  dueAmount() {
    let prices = [];
    this.menu.forEach((item) => {
      prices.push(item.price);
    });
    return prices.reduce((acc, item) => acc + item, 0);
  }

  cheapestItem() {
    let productsPrices = [];
    this.menu.forEach((item) => {
      productsPrices.push(item.price);
    });
    return Math.min(...productsPrices);
  }

  drinksOnly() {
    let drinks = [];
    menu.forEach((item) => {
      if (typeof drink === "drink") {
        drinks.push(item.name);
      }
    });
    return drinks;
  }

  foodOnly() {
    let foods = [];
    menu.forEach((item) => {
      foods.push(item.name);
    });
    return foods;
  }
}
let cola = {
  name: "cola",
  type: "drink",
  price: 200,
};
