// 1-
const student = {
  firstName: 'John',
  lastName: 'Smith',
  class: 12,
  printDetails: function () {
    return 'John Smith is a student in class 12';
  },
};
console.log(student.printDetails());

// 2-
const person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 41,
  job: 'engineer',
  city: 'France',
  printDetails: function () {
    return `${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} living in ${this.city}`;
  },
};
console.log(person.printDetails());

// 3-
console.log(Object.keys(person).length);
// 3- for in loop
let keys = [];
for (const key in person) {
  keys.push(key);
}
console.log(keys);
console.log(keys.length);
