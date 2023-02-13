// TASK 1
// Write your code here ↓↓↓↓ //
function printExponentialValues(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    let arr = [];
    for (let i = 1; i <= y; i++) {
      arr.push(x ** i);
    }
    arr = arr.join(' ');
    console.log(arr);
  } else {
    console.log('x or y is not a number');
  }
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ //
printExponentialValues(3, 5);

// TASK 2
// Write your code here ↓↓↓↓ //
let fruit = 'banana';

function printFavoriteFruit() {
 fruit = 'mango';
  console.log(`My favorite fruit is:`, fruit);
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ //
printFavoriteFruit();

// TASK 3
// Write your code here ↓↓↓↓ //
function exponent(firstArg, secondArg) {
  let result = [];
  for (let i = 1; i <= secondArg; i++) {
    result.push(firstArg ** i);
  }
  console.log(result);
}
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ //
exponent(2, 3);
exponent(3, 4);
exponent(4, 5);
