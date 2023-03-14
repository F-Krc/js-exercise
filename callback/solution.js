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
