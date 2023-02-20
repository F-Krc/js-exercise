// Create your solutions here

// 1-
const nameOfCity = (str) => {
  let strLower = str.toLowerCase();
  if (strLower.startsWith('los') || strLower.startsWith('new')) {
    return str;
  } else {
    return `The city name does not begin with Los or New`;
  }
};
console.log(nameOfCity('New York'));
console.log(nameOfCity('newark'));
console.log(nameOfCity('London'));
console.log('*'.repeat(20));

// 2-
const isDivisible = (num) => {
  if (num % 100 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isDivisible(1));
console.log(isDivisible(1000));
console.log('*'.repeat(20));

// 3-
function isRaining(a) {
  return a ? 'wet day - you need an umbrella!' : 'dry day - leave your umbrella at home!';
}
console.log(isRaining(true));
console.log(isRaining(false));
console.log('*'.repeat(20));

// ### Loops
// 1-

const geometricalSequence = (x) => {
  let strSeq = '';  
  for (let i = 0; i < x; i++) {
    strSeq += 2 ** i + ' ';
  }
  return strSeq;
};
console.log(geometricalSequence(5));
console.log(geometricalSequence(10));
console.log('*'.repeat(20));

// 2-

const multiplesOfThree = (n) => {
  let strMal3 = '';  
  if (n < 1) {
    return `Invalid input`;
  }
  for (let i = 1; i <= n; i++) {
    strMal3 += 3 * i + ' ';
  }
  return strMal3;
};
console.log(multiplesOfThree(5));
console.log(multiplesOfThree(10));
console.log(multiplesOfThree(-10));
console.log('*'.repeat(20));

// ### Math
// 1-

const powerOf = (num) => {
  let result = Math.pow(num, num);
  return result;
};
console.log(powerOf(3));
console.log(powerOf(4));
console.log('*'.repeat(20));

// ### Problem Solving
// 1-

const vowelCount = (str) => {
  let arr = str.toLowerCase().split('');
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
      sum++;
    }
  }
  return sum;
};
console.log(vowelCount('hello'));
console.log(vowelCount('fbw'));
console.log(vowelCount('AaEeIiOoUu'));