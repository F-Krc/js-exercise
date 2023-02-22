/**
 * Implement your solutions here
 */
let i = 1;
const exNum = () => console.log(`Exercise ${i++}:`);
const exEnd = () => console.log('-'.repeat(20));

// 1. Get Properties
exNum();
const getProperties = (obj) => Object.keys(obj);

console.log(getProperties({ name: 'Mike', class: '4A', course: 'English' }));
exEnd();

// 2. Get Values
exNum();
const getValues = (obj) => Object.values(obj);

console.log(getValues({ choice1: 'tea', choice2: 'coffee', choice3: 'milk' }));
exEnd();

// 3. Convert Keys and Values into arrays
exNum();
const getKeyValuePairs = (obj) => Object.entries(obj);

console.log(getKeyValuePairs({ cats: 1, dogs: 2, turtles: 4 }));
exEnd();

// 4. Convert keys and values into objects
exNum();
let person = {
  firstName: 'Michael',
  lastName: 'Smith',
  citizenship: 'Germany',
  city: 'Berlin',
  gender: 'male',
  job: 'driver',
  age: 28,
  height: 178,
  'eye colour': 'brown',
  printDetails: function () {
    return `${this.firstName} ${this.lastName} is a citizen of ${this.citizenship}. They are ${this.gender}, ${this.height}cm tall and ${this['eye colour']} eyes.`;
  },
};

function getKeyValueObjects(obj) {
  let keyValueArray = [];

  for (const key in obj) {
    let keyValueObj = {};
    keyValueObj[key] = obj[key];
    keyValueArray.push(keyValueObj);
  }
  return keyValueArray;
}

console.log(getKeyValueObjects(person));
exEnd();

// 5. Add A Method
exNum();

console.log(person.printDetails());
exEnd();

// 6. Merge
exNum();
let firstObject = { firstName: 'John' };
let secondObject = { lastName: 'Smith' };
const mergeObjects = (obj1, obj2) => {
  return Object.assign(obj1, obj2);
};

console.log(mergeObjects(firstObject, secondObject));
exEnd();

/**
 * Bonus Questions
 */

// 7. What happens if you merge two objects with the same property values?
exNum();
// Do you expect to change either or both of the original objects by combining these two objects?
// Why or why not? Comment your answers.

/**
 * Wenn Sie jedoch die Object.assign()-Methode verwenden, um zwei Objekte zu kombinieren, können sich die Originalobjekte ändern.
 * 
 * Wenn Sie zwei Objekte mithilfe des Spread-Operators (...) zu einem neuen Objekt zusammenführen, werden die Originalobjekte nicht geändert.
 * 
 * const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); //{ a: 1, b: 2, c: 3, d: 4 }
console.log(obj1) //{ a: 1, b: 2 }
console.log(obj2) //{ c: 3, d: 4 }

const mergedObj2 = Object.assign(obj1, obj2);
console.log(mergedObj2); //{ a: 1, b: 2, c: 3, d: 4 }
console.log(obj1); // Changed { a: 1, b: 2, c: 3, d: 4 }
console.log(obj2); // not Changed { c: 3, d: 4 }
 */

exEnd();

// 8. Switch Keys and Values
exNum();
const switchedCopy = (obj) => {
  let result = {};
  for (let key in obj) {
    result[obj[key]] = key;
  }
  return result;
};

console.log(switchedCopy({ location: 'berlin', status: 'occupied' }));
exEnd();

// 9 Return Keys and Values
exNum();
const getKeysAndValues = (obj) => {
  let arr = [];
  arr.push(Object.keys(obj));
  arr.push(Object.values(obj));
  return arr;
};

console.log(getKeysAndValues({ a: 1, b: 2, c: 3 }));
console.log(getKeysAndValues({ key: true }));
exEnd();
