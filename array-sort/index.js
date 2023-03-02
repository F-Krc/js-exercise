// 1-
let numbers = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];
const sortNumbers = (arr) => {
  let result = arr.sort((a, b) => a - b);
  return result;
};

console.log(sortNumbers(numbers));

// 2-
let names = ['Fran', 'Leon', 'Ale', 'Jenna', 'Bleda', 'Hadi'];
const sortNames = (arr) => {
  let result = arr.sort((a, b) => a.localeCompare(b));
  return result;
};

console.log(sortNames(names))