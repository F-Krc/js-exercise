let e = 1;
const exerciseNumber = () => console.log(`Exercise ${e++}:`);
const exerciseEnd = () => console.log('-'.repeat(20));

// 1-
exerciseNumber();
const findGreatest = (arr, num) => {
  let result = arr.filter((item) => item > num);
  return result.join(', ');
};

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
exerciseEnd();

// 2-
exerciseNumber();
const getLongestWord = (str) => {
  let arr = str.split(' ');
  let longStr = '';
  arr.forEach((item) => {
    if (item.length > longStr.length) {
      longStr = item;
    }
  });
  return longStr;
};

// const getLongestWord = (str) => {
//   let arr = str.split(' ');
//   return arr.reduce((a, b) => (a.length > b.length ? a : b));
// };

console.log(getLongestWord('this is a web development course'));

exerciseEnd();

// 3-
exerciseNumber();
const reverseNum = (num) => {
let result = parseInt(num.toString().split('').reverse().join(''))
    if(num<0){
        result = -result
    }
  return result ;
};

console.log(reverseNum(-34532));
exerciseEnd();

// 4-
exerciseNumber();
const vowelCounter = (str) => {
  let arr = [...str];
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let sum = 0;
  arr.forEach((letter) => {
    if (vowels.includes(letter)) {
      sum++;
    }
  });
  return sum;
};

console.log(vowelCounter('this is a string'));
console.log(vowelCounter('adee '));
exerciseEnd();

// 5-
exerciseNumber();
const findMissingNum = (arr) => {
  let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
return  originalArray.find((num) =>  (!arr.includes(num)) );
  
};

console.log(findMissingNum([1, 2, 3, 4, 7, 8, 9, 10]));
console.log(findMissingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log(findMissingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));
exerciseEnd();

// 6-
exerciseNumber();
const sumOfCubes = (arr) => {
  let sum = 0;
  arr.forEach((num) => {
    sum += num ** 3;
  });
  return sum;
};

// const sumOfCubes = (arr) =>{
//  return  arr.reduce((acc, item) => acc+=(item**3),0)
// }

console.log(sumOfCubes([1, 5, 9]));
console.log(sumOfCubes([2, 3]));
console.log(sumOfCubes([]));
exerciseEnd();

// 7-
exerciseNumber();
const dictionary = (str, arr) => {
  let result = arr.filter((item) => item.startsWith(str));
  return result;
};

console.log(dictionary('bu', ['button', 'breakfast', 'border']));
console.log(dictionary('tri', ['triplet', 'tries', 'trip', 'piano', 'tree']));
console.log(dictionary('beau', ['pastry', 'delicious', 'name', 'boring']));
exerciseEnd();

// 8-
exerciseNumber();
const getEvenNums = (num) => {
  let arr = [];
  for (let i = 2; i <= num; i += 2) {
    arr.push(i);
  }
  return arr;
};

console.log(getEvenNums(8));
console.log(getEvenNums(4));
console.log(getEvenNums(2));
exerciseEnd();

// 9-
exerciseNumber();
const alphabetise = (str) => {
  let arr = [...str];
  return arr.sort().join('');
};

console.log(alphabetise('webdev'));
