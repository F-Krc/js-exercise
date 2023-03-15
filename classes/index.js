let e = 1;
const exerciseNumber = () => console.log(`Exercise ${e++}:`);
const exerciseEnd = () => console.log('-'.repeat(20));

// 1-
exerciseNumber();
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `${this.name}, ${this.age} years old.`;
  }
}
const person = new Person('Fran', 25);
console.log(person.describe());
exerciseEnd();

// 2-
exerciseNumber();
class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }
  getVolume() {
    return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
  }
}

let cyclinder = new Cylinder(7, 9);
console.log(cyclinder.getVolume());
exerciseEnd()

// 3-
exerciseNumber()
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

    console.log(output);
  }
  start(){
    this.render()
  }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
exerciseEnd()

// 4-
exerciseNumber()
class TV {
  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }

  increaseVolume() {
    if (this.volume < 100) {
      this.volume++;
    }
  }

  decreaseVolume() {
    if (this.volume > 0) {
      this.volume--;
    }
  }

  getNewChannel() {
    this.channel = Math.floor(Math.random() * 50) + 1;
  }

  resetTV() {
    this.channel = 1;
    this.volume = 50;
  }

  getTVstatus() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}

const myTV = new TV("Panasonic", 10, 20);

console.log(myTV.getTVstatus()); 

myTV.increaseVolume();
myTV.increaseVolume();
myTV.increaseVolume();
myTV.increaseVolume();
console.log(myTV.getTVstatus()); 

myTV.decreaseVolume();
myTV.decreaseVolume();
console.log(myTV.getTVstatus());


myTV.getNewChannel();
console.log(myTV.getTVstatus());
myTV.getNewChannel();
console.log(myTV.getTVstatus());
myTV.getNewChannel();
console.log(myTV.getTVstatus());

myTV.resetTV();
console.log(myTV.getTVstatus()); 
