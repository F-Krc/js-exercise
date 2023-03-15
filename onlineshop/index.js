// 1-
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  containedVAT() {
    let vat = (this.price / 100) * 16;
    return `${vat.toFixed(2)}€ VAT incl. (16%)`;
  }
  toText() {
    return `${this.name}, ${this.price} € in total. ` + this.containedVAT();
  }
}
const tracksuit = new Product('Adidas tracksuit', 150.0);
const shoes = new Product('Puma running shoes', 85.99);
const socks = new Product('Socks set', 4.99);
console.log(tracksuit.toText());
console.log(tracksuit.containedVAT())
console.log(shoes.toText())
console.log(socks.toText())

console.log('********************')

// 2-
class Cart {
  constructor() {
    this.products = [];
  }
  addProduct(shoppedProduct) {
    if (shoppedProduct instanceof Product === true) {
      this.products.push(shoppedProduct);
      return `The Shopping Cart now contains ${this.products.length} products`;
    } else {
      return `The Product is not available in the shop`;
    }
  }
  getProductInfoCart() {
    for (let item of this.products) {
      console.log(item.toText());
    }
  }
  getTotalItemsPrice() {
    let sum = 0;
    for (let item of this.products) {
      sum += item.price;
    }
    return `The total for ${this.products.length} items in your cart amounts to ${sum.toFixed(2)}€`;
  }
}

const cart = new Cart();

console.log(cart.addProduct('potato'));
console.log(cart.addProduct(tracksuit));
console.log(cart.addProduct(shoes)); 
console.log(cart.addProduct(socks)); 

cart.getProductInfoCart();

console.log(cart.getTotalItemsPrice());
