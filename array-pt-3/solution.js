// Create your solutions here
let e = 1;
const exerciseNumber = () => console.log(`Exercise ${e++}:`);
const exerciseEnd = () => console.log('-'.repeat(20));

// 1-
exerciseNumber();
const isFourLetters = (arr) => arr.filter((item) => item.length === 4);

let array = ['John', 'James', 'Jack', 'Jeanne'];
console.log(isFourLetters(array));
exerciseEnd();

// 2-
exerciseNumber();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const getMonthName = (num) => {
  if (1 <= num && num <= 12) {
    return months[num - 1];
  } else {
    return 'Enter a number between 1 and 12';
  }
};

// const getMonthName = (num) => {
//
//     switch (num) {
//       case 1:
//         console.log('January');
//         break;
//       case 2:
//         console.log('February');
//         break;
//       case 3:
//         console.log('March');
//         break;
//       case 4:
//         console.log('April');
//         break;
//       case 5:
//         console.log('May');
//         break;
//       case 6:
//         console.log('June');
//         break;
//       case 7:
//         console.log('July');
//         break;
//       case 8:
//         console.log('August');
//         break;
//       case 9:
//         console.log('September');
//         break;
//       case 10:
//         console.log('October');
//         break;
//       case 11:
//         console.log('November');
//         break;
//       case 12:
//         console.log('December');
//     }
//   } else {
//     console.log('Enter a number between 1 and 12');
//   }
// };

console.log(getMonthName(3));
console.log(getMonthName(13));
exerciseEnd();

// 3-
exerciseNumber();
const amplifyMultiplesOfFour = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      arr.push(i * 10);
    } else {
      arr.push(i);
    }
  }
  return arr;
};
console.log(amplifyMultiplesOfFour(25));
exerciseEnd();

//4-
exerciseNumber();
const unique = (arr) => {
  let numCounts = arr.reduce((acc, num) => {
    acc[num] ? acc[num]++ : (acc[num] = 1);
    return acc;
  }, {});

  let uniqueNums = [];
  for (let num in numCounts) {
    if (numCounts[num] === 1) {
      uniqueNums.push(Number(num));
    }
  }
  return uniqueNums.sort((a,b)=>a-b);
};

console.log(unique([3, 3, 3, 7, 3, 3]));
console.log(unique([0, 0, 0.77, 0, 0, 5]));
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));
exerciseEnd();

// 5-
exerciseNumber();
const code = (str) => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      newStr += '4';
    } else if (str[i] === 'e') {
      newStr += '3';
    } else if (str[i] === 'i') {
      newStr += '1';
    } else if (str[i] === 'o') {
      newStr += '0';
    } else if (str[i] === 's') {
      newStr += '5';
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(code('javascript is cool'));
console.log(code('programming is fun'));
console.log(code('become a coder'));
exerciseEnd();

// 6-
exerciseNumber();
const isSymmetrical = (num) => {
  let str = num.toString();
  let arr = [...str];
  for (let i = 0; i <= arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - (i + 1)]) {
      return false;
    } else {
      return true;
    }
  }
};

console.log(isSymmetrical(7227));
console.log(isSymmetrical(12567));
exerciseEnd()

// 7-
exerciseNumber()
const toCamelCase = (str) => {
  return str
    .split('_')
    .map((word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('');
};

console.log(toCamelCase('hello_world'));
console.log(toCamelCase('javascript_is_fun'));
exerciseEnd()

// 8-
exerciseNumber()
const pigLatin=(str) =>{
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const words = str.toLowerCase().split(' ');
  const pigLatinWords = words.map(function (word) {
    if (vowels.includes(word[0])) {
      return word + 'way';
    } else {
      return word.slice(1) + word[0] + 'ay';
    }
  });
  return pigLatinWords.join(' ');
}

console.log(pigLatin("Cats are great pets.")); 
console.log(pigLatin("Tom got a small piece of pie.")); 
console.log(pigLatin("He told us a very exciting tale."));
