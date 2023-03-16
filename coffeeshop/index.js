class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders || [];
  }

  shopName() {
    return this.name;
  }

  addOrder(item) {
    const menuItem = this.menu.find((m) => m.item === item);
    if (!menuItem) {
      return 'This item is currently unavailable!';
    }
    this.orders.push(item);
    return 'Order added!';
  }

  fulfillOrder() {
    if (this.orders.length === 0) {
      return 'All orders have been fulfilled!';
    }
    const firstItem = this.orders.shift();
    return `The ${firstItem} is ready!`;
  }

  listOrders() {
    return this.orders;
  }

  dueAmount() {
    return this.orders
      .reduce((total, item) => {
        const menuItem = this.menu.find((m) => m.item === item);
        return total + menuItem.price;
      }, 0);
  }

  cheapestItem() {
    const cheapestList = this.menu.sort((a, b) => a.price - b.price);

    return cheapestList[0].item;
  }

  drinksOnly() {
    return this.menu.filter((item) => item.type === 'drink').map((item) => item.item);
  }

  foodOnly() {
    return this.menu.filter((item) => item.type === 'food').map((item) => item.item);
  }
}

const tcs = new CoffeeShop("Tesha's Coffee Shop", [
  { item: 'tuna sandwich', type: 'food', price: 4.99 },
  { item: 'ham and cheese sandwich', type: 'food', price: 5.99 },
  { item: 'bacon and egg', type: 'food', price: 3.99 },
  { item: 'steak', type: 'food', price: 8.99 },
  { item: 'hamburger', type: 'food', price: 6.99 },
  { item: 'cinnamon roll', type: 'food', price: 1.99 },
  { item: 'orange juice', type: 'drink', price: 2.49 },
  { item: 'lemonade', type: 'drink', price: 1.99 },
  { item: 'cranberry juice', type: 'drink', price: 2.99 },
  { item: 'pineapple juice', type: 'drink', price: 2.49 },
  { item: 'lemon iced tea', type: 'drink', price: 1.99 },
  { item: 'vanilla chai latte', type: 'drink', price: 3.49 },
  { item: 'hot chocolate', type: 'drink', price: 2.99 },
  { item: 'iced coffee', type: 'drink', price: 2.99 },
]);

console.log(tcs.addOrder('hot cocoa')); //➞ "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
console.log(tcs.addOrder('iced tea')); //➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process

console.log(tcs.addOrder('cinnamon roll')); // ➞  "Order added!"
console.log(tcs.addOrder('iced coffee')); // ➞ "Order added!"

console.log(tcs.listOrders()); //➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order

console.log(tcs.dueAmount()); //➞ 4.98

console.log(tcs.fulfillOrder()); // ➞ "The cinnamon roll is ready!"
console.log(tcs.fulfillOrder()); // ➞ "The iced coffee is ready!"
console.log(tcs.fulfillOrder()); //➞ "All orders have been fulfilled!"
// all orders have been presumably served

console.log(tcs.listOrders()); //➞ []
// an empty array is returned if all orders have been exhausted

console.log(tcs.dueAmount()); //➞ 0.0
// no new orders taken, expect a zero payable

console.log(tcs.cheapestItem()); //➞ "lemonade"

console.log(tcs.drinksOnly()); // ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
console.log(tcs.foodOnly()); //➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
