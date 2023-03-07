let e = 1;
const exerciseNumber = () => console.log(`Exercise ${e++}:`);
const exerciseEnd = () => console.log('-'.repeat(20));

// 1-
exerciseNumber()
const orders = [{ amount: 250 }, { amount: 400 }, { amount: 100 }, { amount: 325 }];

const totalAmount = orders.reduce((acc, item) => acc + item.amount, 0)

console.log(totalAmount);
exerciseEnd()

// 2-
exerciseNumber();
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const mappedArray = arrayOfNumbers.map((item) => item + 1);

console.log(mappedArray);
exerciseEnd();

// 3-
exerciseNumber();
const filterEvens =(arr) =>{
  return arr.filter((item) => item % 2 === 0);
}

console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]
exerciseEnd();

// 4-
exerciseNumber();
const filterFriends = (arr, str) => {
  return arr.filter((item) => item.includes(str));
};

const friends = ['rika', 'jenna', 'bleda', 'oliver', 'itamar'];

console.log(filterFriends(friends, 'ka')); // ["Rika"];
console.log(filterFriends(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
exerciseEnd();

// 5-
exerciseNumber();
const sumUp = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

console.log(sumUp([1, 2, 3, 4, 5])); //returns 15
console.log(sumUp([6, 7, 7])); //returns 20
exerciseEnd();

// 6-
exerciseNumber();
let numbers = [2, 6, 5, 7, 9];

const getSquareRoot =(arr) => {
  return arr.map((item) => Math.sqrt(item));
}

console.log(getSquareRoot(numbers));
