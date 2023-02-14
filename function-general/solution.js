// 1-
let triplet = (a) => {
  let text = '';
  for (let i = 0; i < 3; i++) {
    text += a;
  }
  console.log(text);
};

triplet('Cat');
console.log('-'.repeat(20));

// 2-
let quintuplet = (b) => {
  let text = '';
  for (let i = 0; i < 5; i++) {
    text += b;
  }
  return text;
};

console.log(quintuplet('Cat'));
console.log('-'.repeat(20));

// 3-
let multiStr = (a, b) => {
  return b.repeat(a);
};

console.log(multiStr(3, 'Woah'));
console.log('-'.repeat(20));

// 4-
let myArr = [1, 6, 83, 91, 0, -4, 1337, 5];
const largestNumInArray = (arr) => {
  return Math.max(...arr);
};
console.log(largestNumInArray(myArr));
console.log('-'.repeat(20));

// 5-
// 5a-
const printIfDivisibleByTen = (x) => {
  if (typeof x === 'number' && x % 10 === 0) {
    console.log('Even 10!');
  }
};

printIfDivisibleByTen(10);
printIfDivisibleByTen(111);
console.log('-'.repeat(20));

// 5b-
for (let i = 0; i < 125; i++) {
  printIfDivisibleByTen(i);
}
console.log('-'.repeat(20));

// 6-
let largestNum = (a, b, c, d, e) => {
  const largest = Math.max(a, b, c, d, e);
  return largest;
};

console.log(largestNum(11, 2, 3, 4, 5));
console.log('-'.repeat(20));

// 7-
let isString = (a) => {
  if (typeof a === 'string') {
    return true;
  }
};

console.log(isString('test'));
console.log('-'.repeat(20));

// 8-
let areStrings = (a, b) => {
  if (typeof a === 'string' && typeof b === 'string') {
    return true;
  }
};

console.log(areStrings('test', 'str'));
console.log('-'.repeat(20));

// 9-
let getFirstWord = (a) => {
  let arr = a.split(' ');
  return arr[0];
};

console.log(getFirstWord('this is an example sentence'));
console.log('-'.repeat(20));

// 10-
const wordRepeater = (str) => {
  let arr = str.split(' ');
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      result.push(arr[i]);
    }
  }
  return result.join(' ');
};

console.log(wordRepeater('O M G ?'));
console.log('-'.repeat(20));

// 11-
let firstLetter = (a) => a.charAt(0);

console.log(firstLetter('this is a exc-11'));
console.log('-'.repeat(20));

// 12-
const firstLetters = (a) => {
  let arr = a.split(' ');
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i][0];
  }
  return result;
};

console.log(firstLetters('What You See Is What You Get'));
console.log('-'.repeat(20));

// 13-
const len = (a) => {
  if (typeof a === 'string' || typeof a === 'object') {
    return a.length;
  } else {
    return null;
  }
};

console.log(len('das ist ein string'));
console.log(len([1, 2, 3]));
console.log(len(15));
console.log('-'.repeat(20));

// 14-
const explode = (a) => {
  if (typeof a === 'string') {
    return a.split('');
  } else {
    return null;
  }
};

console.log(explode('Ar-Ge'));
console.log(explode(''));
console.log(explode(14));
console.log('-'.repeat(20));

// 15-
const foo = (a) => (a[a.length - 1] === 'o' ? true : false);

console.log(foo(''));
console.log(foo('o'));
console.log(foo('Cat'));
console.log(foo('Tomato'));
console.log(foo(''));
console.log('-'.repeat(20));

// --16--

const bar = (a) => `Cat${a.slice(2)}`;

console.log(bar('Potato'));
console.log(bar(''));
console.log(bar('International Space Station"'));
