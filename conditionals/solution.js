// --1--

let int1 = 15;
let int2 = 80;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

// --2--

let int3 = 136;
if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99) || (int3 >= 50 && int3 <= 99)) {
  console.log(true);
}

// --3--

// function größte(a, b, c) {
//   if (Math.max(a, b, c) === a){
//     console.log('a ist die größte Zahl: ', a);
//   } else if (Math.max(a, b, c) === b) {
//     console.log('b ist die größte Zahl: ', b);
//   } else {
//     console.log('c ist die größte Zahl: ', c);
//   }
// }
// größte(58, 15, 36);
// größte(int1, int2, int3);

let a = 58;
let b = 21;
let c = 36;

console.log(Math.max(a, b, c));
console.log(Math.max(int1, int2, int3));

// --4--
let prefix = 'Py';

// function strControll(str) {
//   if (str.substring(0, 2) === prefix) {
//     console.log(str);
//   } else {
//     console.log('Py' + str);
//   }
// }

// strControll('thon');
// strControll('Pyxx');

let str ='thon';
if (str.substring(0, 2) === prefix) {
    console.log(str);
  } else {
    console.log('Py' + str);
  }


// --5--

if (50 <= int1 + int2 && int1 + int2 <= 80) {
  console.log(65);
} else {
  console.log(80);
}

// --6--
let int4 = 12;
let int5 = 5;

if (int4 + int5 === 8 && int4 - int5 === 8) {
  console.log(true);
} else {
  console.log(false);
}

// --7--
if (int4 === 15 || int5 === 15 || int4 + int5 === 15) {
  console.log(true);
} else {
  console.log(false);
}

// --8--
if (int4 % 7 === 0 || int4 % 11 === 0 || int5 % 7 === 0 || int5 % 11 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// --9--

let sum = int4 + int5;

if (int4 === int5) {
  console.log(sum * 3);
} else {
  console.log(sum);
}

// --10--

let difference = int5 - 19;

if (difference > 0) {
  console.log(difference * 2);
} else {
  console.log(difference);
}

// --11--
let firstName;
let age;

function ageControll(firstName, age) {
  if (age < 13) {
    console.log(`${firstName} is a child.`);
  } else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager.`);
  } else if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young adult.`);
  } else {
    console.log(`${firstName} is a  adult.`);
  }
}

ageControll('John', 23);
ageControll('Max', 10);

// --12--
// mit function
