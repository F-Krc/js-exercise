let i = 1;
const exNum = () => console.log(`Exercise ${i++}:`);
const exEnd = () => console.log('-'.repeat(20));

// 1-
exNum();
let euroCountries = ['Germany', 'France'];
let asianCountries = ['Japan', 'Korea'];

euroCountries = ['Germany', 'France', ...asianCountries];
console.log(euroCountries);

let euroCities = ['Berlin', 'Paris'];
let asiaCities = ['Tokyo', 'Seoul'];
let worldCities = [...euroCities, ...asiaCities];
console.log(worldCities);
exEnd();

// 2-
exNum();
console.log([...asiaCities]);
exEnd();

// 3-
exNum();
const findLargestNumber = (args) => {
  let num = Math.max(...args);
  return num;
};

let whichIsLargest = [1, 2, 13, 5];
console.log(findLargestNumber(whichIsLargest));
exEnd();

// 4-
exNum();
const findSmallestNumber = (args) => {
  let num = Math.min(...args);
  return num;
};

let whichIsSmallest = [1, 2, 13, 5];
console.log(findSmallestNumber(whichIsSmallest));
exEnd();

// 5-
exNum();
const person = { name: 'John' };
const job = { role: 'Teacher' };

// 5.1-
const copyOfPerson = { ...person };
console.log(copyOfPerson);
exEnd();

// 5.2-
const employee = { ...person, ...job };
console.log(employee);
exEnd();

// 5.3-
job.role= 'Plumber';
console.log(job);
console.log(employee);
exEnd();

// 6-
exNum();
const isWhole = (a, b, c, d) =>{
  let sum = a + b + c + d;
  let average = sum / 4;
  return average % 1 === 0;
}

console.log(isWhole(1, 2, 3, 4))
console.log(isWhole(9, 2, 2, 5))
console.log(isWhole(4, 8, 12, 16))
exEnd();

// input als number


// input als array
const isWholeInArray = (args) => {
  let sum = 0;
  for (const value of args) {
    sum += value;
  }
  let average = sum / args.length;
  return average % 1 === 0;
};

console.log(isWholeInArray([1, 2, 3, 4]));
console.log(isWholeInArray([9, 2, 2, 5]));
console.log(isWholeInArray([4, 8, 12, 16]));