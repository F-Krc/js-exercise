const greetMessage = (name) => {
  console.log(`Good Morning, ${name}`);
}

// const greetUsers = (arr, callback) => {
//   for (let name of arr) {
//     callback(name);
//   }
// }

const greetUsers = (arr, callback) => arr.forEach(callback);
//const greetUsers = (arr, callback) => arr.map(callback);


greetUsers(['John', 'Peter', 'Mark'], greetMessage);



// 2-
const squareNumber = (num) => num ** 2;
const square = (array, callback) => array.map(callback);

const array = [1, 2, 3, 4, 5];
console.log(square(array, squareNumber));