// 1-
const doubleValues = (arr) => {
  let result = arr.map((item) => item * 2);
  return result;
};

console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([5, 1, 2, 3, 10]));

// 2-
const onlyEvenValues = (arr) => {
  let result = arr.filter((item) => item % 2 === 0);
  return result;
};

console.log(onlyEvenValues([1, 2, 3]));
console.log(onlyEvenValues([5, 1, 2, 3, 10]));

// 3-

const showFirstAndLast = (arr) => {
  let result = arr.map((item) => item[0] + item[item.length - 1]);
  return result;
};

console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']));
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));

// 4-
const addKeyAndValue = (arr, str1, str2) => {
  let result = arr.map((item) => {
    item[str1] = str2;
    return item;
  });
  return result;
};

console.log(
  addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor')
);

// 5-
const vowelCount = (str) => {
  let strArray = str.toLowerCase().split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = {};
  strArray.forEach((element) => {
    if (vowels.includes(element)) {
      result[element] ? result[element]++ : (result[element] = 1);
    }
  });
  return result;
};

console.log(vowelCount('I Am awesome and so are you'));
