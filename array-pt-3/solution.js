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






// // 1. Where Have My Four Letter Words Gone?

// function isFourLetters(arr) {
//     const fourLetterArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].length === 4) {
//         fourLetterArr.push(arr[i]);
//       }
//     }
  
//     return fourLetterArr;
//   }
  
//   console.log(isFourLetters(['Deer', 'Duck', 'Dog', 'Elephant'])); // [ 'Deer', 'Duck' ]
  
//   // 2. Print Month Name
  
//   function getMonthName(num) {
//     if (num < 1 || num > 12) return 'Invalid input';
  
//     const months = [
//       'January',
//       'February',
//       'March',
//       'April',
//       'May',
//       'June',
//       'July',
//       'August',
//       'September',
//       'October',
//       'November',
//       'December',
//     ];
  
//     return months[num - 1];
//   }
  
//   console.log(getMonthName(8)); // 'August'
  
//   // 3. Amplify the Multiples of 4
  
//   function amplifyMultiplesOfFour(num) {
//     const numArr = [];
//     for (let i = 1; i <= num; i++) {
//       if (i % 4 === 0) {
//         let ampByTen = i * 10;
//         numArr.push(ampByTen);
//       } else {
//         numArr.push(i);
//       }
//     }
  
//     return numArr;
//   }
  
//   console.log(amplifyMultiplesOfFour(8)); // [1, 2, 3, 40, 5, 6, 7, 80]
  
//   // 4. Being unique is cool...
  
//   function unique(arr) {
//     const uniqueNumbers = [];
//     for (let i = 0; i < arr.length; i++) {
//       const currentElement = arr[i];
//       if (arr.indexOf(currentElement) === arr.lastIndexOf(currentElement)) {
//         uniqueNumbers.push(currentElement);
//       }
//     }
  
//     return uniqueNumbers;
//   }
  
//   console.log(unique([3, 3, 3, 7, 3, 3, 5])); // [7, 5]
  
//   // 5. c4n y0u r34d th15?
  
//   function code(str) {
//     const lowerStr = str.toLowerCase();
//     const letters = lowerStr.split('');
  
//     const hackerLetters = ['a', 'e', 'i', 'o', 's'];
//     const replacements = ['4', '3', '1', '0', '5'];
  
//     for (let i = 0; i < letters.length; i++) {
//       const index = hackerLetters.indexOf(letters[i]);
//       if (index !== -1) {
//         letters[i] = replacements[index];
//       }
//     }
  
//     return letters.join('');
//   }
  
//   console.log(code('do you even code, sis')); // d0 y0u 3v3n c0d3, 515
  
//   // Bonus Questions
  
//   // 6. Is it Symmetrical?
  
//   function isSymmetrical(num) {
//     const numForwards = num.toString();
//     const numSplit = numForwards.split('');
//     const reverse = numSplit.reverse();
//     const numReverse = reverse.join('');
  
//     return numForwards === numReverse ? true : false;
//   }
  
//   console.log(isSymmetrical(111)); // true
  
//   // 7. snake_case => camelCase
  
//   function toCamelCase(snakeStr) {
//     const splitStr = snakeStr.split('_');
  
//     const camelCaseArray = [];
//     for (let i = 0; i < splitStr.length; i++) {
//       if (i === 0) {
//         camelCaseArray.push(splitStr[i]);
//       } else {
//         const firstChar = splitStr[i].slice(0, 1).toUpperCase();
//         const remainder = splitStr[i].slice(1);
//         camelCaseArray.push(firstChar + remainder);
//       }
//     }
  
//     return camelCaseArray.join('');
//   }
  
//   console.log(toCamelCase('this_is_francesca_borg')); // thisIsFrancescaBorg
  
//   // 8. Pig Latin Translation
  
//   function pigLatin(str) {
//     const cleanedString = str.replace(/[^\w\s]/gi, '');
//     const splitStr = cleanedString.split(' ');
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
  
//     const pigTranslation = [];
//     for (let i = 0; i < splitStr.length; i++) {
//       const firstChar = splitStr[i][0];
//       let remainder = splitStr[i].slice(1);
  
//       if (vowels.includes(firstChar.toLowerCase())) {
//         pigTranslation.push(firstChar + remainder + 'way');
//       } else {
//         pigTranslation.push(remainder + firstChar + 'ay');
//       }
//     }
  
//     return pigTranslation.join(' ') + '.';
//   }
//   console.log(code("do you even code, sis"));
  
//   // BONUS: Is it Symmetrical?
//   console.log("")
//   console.log("--- BONUS Task 1: Is it Symmetrical? ---")
//   function isSymmetrical(num) {
//       const numForwards = num.toString();
//       const numSplit = numForwards.split("");
//       const reverse = numSplit.reverse();
//       const numReverse = reverse.join("");
  
//       if (numForwards === numReverse) {
//           return true;
//       } else {
//           return false;
//       }
//   }
//   console.log(isSymmetrical(111));
  
//   // camelCase -> snake_case
//   console.log("")
//   console.log("--- BONUS Task 2: camelCase -> snake_case ---")
//   function toCamelCase(snakeStr) {
//       const splitStr = snakeStr.split("_");
//       const camelCaseArray = [];
//       for (let i = 0; i < splitStr.length; i++) {
//           let firstChar, remainder;
//           if (splitStr[i] === splitStr[0]) {
//               camelCaseArray.push(splitStr[0]);
//               continue;
//           } else {
//              firstChar = splitStr[i].slice(0, 1);
//               remainder = splitStr[i].slice(1, splitStr[i].length);
//           }
//           const currentWord = firstChar.toUpperCase() + remainder;
//           camelCaseArray.push(currentWord);
//       }
//       const camelCaseText = camelCaseArray.join("");
//       return camelCaseText;
//   }
//   console.log(toCamelCase("this_is_francesca_borg"));
  
//   console.log(pigLatin('this pig latin')); // histay igpay atinlay
//   console.log(pigLatin('Cats are great pets.')); // atsCay areway reatgay etspay.
  