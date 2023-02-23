let i = 1;
const exNum = () => console.log(`Exercise ${i++}:`);
const exEnd = () => console.log('-'.repeat(20));

// 1-
exNum();
const isWithinRange = (num, { min: a, max: b }) => {
  return num >= a && num <= b ? true : false;
};

console.log(isWithinRange(4, { min: 0, max: 5 }));
console.log(isWithinRange(4, { min: 6, max: 10 }));
exEnd();

// 2-
exNum();
const scrabbleHand = [
  { tile: 'N', score: 1 },
  { tile: 'K', score: 5 },
  { tile: 'Z', score: 10 },
  { tile: 'X', score: 8 },
  { tile: 'D', score: 2 },
  { tile: 'A', score: 1 },
  { tile: 'E', score: 1 },
];

const calcMaxScrabbleScore = (scrabbleArray) => {
  let sum = 0;  
  for (let scrabble of scrabbleArray) {
    sum += scrabble.score;
  }
  return sum;
};

console.log(calcMaxScrabbleScore(scrabbleHand));
exEnd();

// 3-
exNum();
let isEmptyObject = (obj) => {
  let keys = Object.keys(obj);
  return keys.length === 0 ? true : false;
};

console.log(isEmptyObject({}));
console.log(isEmptyObject({ a: 1 }));
exEnd();

// 4-
exNum();
const countLetters = (str) => {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    result[letter] ? result[letter]++ : (result[letter] = 1);
  }
  return result;
};
console.log(countLetters('tree'));
exEnd();

// 5-
exNum();
const freeShipping = (obj) => {
  let sum = 0;
  let values = Object.values(obj);
  for (let value of values) {
    sum += value;
  }
  return sum > 50 ? true : false;
};

console.log(freeShipping({ Sponge: 3.5, Soap: 5.99 }));
console.log(freeShipping({ 'Surround Sound Equipment': 499.99 }));
console.log(freeShipping({ Wool: 13.99, 'Knitting Needles': 15.5, Bag: 13.99 }));
exEnd();

// 6-
exNum();
const programming = {
  languages: ['JavaScript', 'Python', 'Ruby'],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: 'https://www.quora.com/What-are-the-most-popular-computer-programming-jokes',
};

programming.languages.push('Go');
console.log(programming.languages);
exEnd();

programming.difficulty = 7;
console.log(programming.difficulty);
exEnd();

delete programming.jokes;
console.log(programming);
exEnd();

programming.isFun = true;
console.log(programming);
exEnd();

for (const language of programming.languages) {
  console.log(language);
}
exEnd();

for (const key in programming) {
  console.log(key);
}
exEnd();

for (const key in programming) {
  console.log(programming[key]);
}
exEnd();

programming.worthwhile = function () {
  if (programming.isChallenging === true && programming.isRewarding === true) {
    return `Learning the programming languages: ${this.languages.join(', ')} is rewarding and challenging`;
  } else {
    return false;
  }
};

console.log(programming.worthwhile());

console.log(programming.worthwhile); // [Function (anonymous)]
Object.freeze(programming);
