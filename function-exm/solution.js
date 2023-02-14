// 1-
const sumIntFrom1ToN = (a) => {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumIntFrom1ToN(13));
console.log('-'.repeat(20));

// 2-
const sumOfCubes = (x, y, z) => x ** 3 + y ** 3 + z ** 3;

console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2, 8));
console.log('-'.repeat(20));

// 3-
const isStrStartOfWord = (str1, str2) => (str2.startsWith(str1) ? true : false);

console.log(isStrStartOfWord('bu', 'button'));
console.log(isStrStartOfWord('beau', 'pastry'));
console.log('-'.repeat(20));

// 4-
const isLEQZero = (a) => (a <= 0 ? true : false);

console.log(isLEQZero(3));
console.log(isLEQZero(-4));
console.log(isLEQZero(0));
console.log('-'.repeat(20));

// 5-
const countOccurrences = (str, lttr) => {
  let arr = str.split('');
  let sum = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === lttr) {
      sum += arr[i];
    }
  }
  return sum.length;
};

console.log(countOccurrences('this is a string', 'i'));
console.log('-'.repeat(20));

// 6-
const calcBaseToExponent = (a, b) => a ** b;

console.log(calcBaseToExponent(5, 3));
console.log('-'.repeat(20));

// 7-
const dogAge = (x) => {
  return `Your doggo is ${x * 7} years old in dog years!`;
};

console.log(dogAge(4));
console.log('-'.repeat(20));

// 8-
const calcLifetimeSupply = (a, b) => {
  return `The snack company should provide you with ${Math.round(
    ((100 - a) * 365 + (100 - a) / 4) * b
  )} units, until you are a ripe old age of 100. Happy snacking!`;
};
console.log(calcLifetimeSupply(25, 2));
console.log(calcLifetimeSupply(40, 3));
console.log('-'.repeat(20));

// 8- Bonus
const calcLifetimeSupply2 = (a, b, c) => {
  return `The snack company should provide you with ${Math.round(
    ((c - a) * 365 + (c - a) / 4) * b
  )} units, until you are a ripe old age of 100. Happy snacking!`;
};
console.log(calcLifetimeSupply2(32, 0.58, 65));
console.log('-'.repeat(20));

// 9-
const isWaldoHere = (str) => (str.toLowerCase().includes('waldo') ? true : false);

console.log(isWaldoHere('I found you Waldo!'));
console.log(isWaldoHere('waldo is here'));
console.log(isWaldoHere("Wait, don't you mean Wally?"));
console.log('-'.repeat(20));

// 10-
const isEqualSlices = (a, b, c) => (a >= b * c ? true : false);

console.log(isEqualSlices(8, 3, 2));
console.log(isEqualSlices(8, 3, 3));
console.log('-'.repeat(20));

// 11-
const isEqualNumXandOs = (str) => {
  let arr = str.toLowerCase().split('');
  let sum1 = '';
  let sum2 = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      sum1 += arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      sum2 += arr[i];
    }
  }
  if (sum1.length === sum2.length) {
    return true;
  } else {
    return false;
  }
};
console.log(isEqualNumXandOs('ooxXm'));
console.log(isEqualNumXandOs('xooxx'));
console.log('-'.repeat(20));

// 12-
const isPrime = (x) => {
  let prime = true;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      prime = false;
    }
  }
  if (prime) {
    return true;
  } else {
    return false;
  }
};

console.log(isPrime(7));
console.log(isPrime(10));
