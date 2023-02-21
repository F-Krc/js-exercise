let i = 1;
const exNum = () => console.log(`Exercise ${i++}:`);
const exEnd = () => console.log('-'.repeat(20));

// 1-
exNum();
const person = {
  name: 'Alice',
  age: 25,
  occupation: 'teacher',
};

console.log(person.name); // Alice
console.log(person.age); // 25
console.log(person.occupation); // teacher
exEnd();

// 2-
exNum();
const getProp = (key) => person[key];

console.log(getProp('name')); // Alice
console.log(getProp('age')); // 25
exEnd();

// 3-
exNum();
const book = {
  title: 'The Catcher in the Rye',
  author: 'J.D. Salinger',
  pages: 214,
};

const makeSentence = (bookInfo) => {
  return `The Book ${bookInfo.title} was  written by ${bookInfo.author} and has ${bookInfo.pages} pages.`;
};
console.log(makeSentence(book)); // "The Book The Catcher in the Rye was written by J.D. Salinger and has 214 pages."
exEnd();

// 4-
exNum();
const student = {
  name: 'alex',
  info: {
    age: 43,
    email: 'alex@mail.com',
  },
  subjects: ['programming basics', 'ui basics'],
  teachers: [
    { name: 'max', email: 'max@mail.com', isFavorite: false },
    { name: 'mo', email: 'mo@mail.com', isFavorite: false },
    { name: 'mina', email: 'mina@mail.com', isFavorite: true },
  ],
};

console.log('name:', student.name);
console.log('email:', student.info.email);
console.log('Teachers Array:', student.teachers[0]);
console.log('Wie viele Fächer:', student.subjects.length);

let teacherEmail = [];
for (let i = 0; i < student.teachers.length; i++) {
  teacherEmail.push(student.teachers[i].email);
}
console.log('Teachers email:', teacherEmail);

let teacherEmailFav = [];
for (let i = 0; i < student.teachers.length; i++) {
  if (student.teachers[i].isFavorite === true) {
    teacherEmailFav.push(student.teachers[i].email);
  }
}
console.log('Favorite Teachers email:', teacherEmailFav);
exEnd();

// 5-
exNum();
const pets = [
  { name: 'Fluffy', type: 'cat' },
  { name: 'Spot', type: 'dog' },
  { name: 'Goldie', type: 'fish' },
];

const printName = (arr) => {
  let names = '';
  for (let i = 0; i < arr.length; i++) {
    names += arr[i].name + ', ';
  }
  return names;
};

console.log(printName(pets)); // Fluffy, Spot, Goldie
exEnd();

// Bonus-1
exNum();
const car = {
  model: 'Toyota',
  color: 'red',
  year: 2010,
};

const hasProperty = (arr, key) => (Object.keys(arr).includes(key) ? true : false);

console.log(hasProperty(car, 'model')); // true
console.log(hasProperty(car, 'price')); // false
exEnd();

// Bonus 2-
exNum();
const user1 = {
  name: 'max',
  yearBorn: 1990,
  contentRights: ['user', 'admin', 'moderator'],
  password: '1234',
};

const user2 = {
  name: 'mo',
  yearBorn: 2001,
  contentRights: ['user'],
  password: 'asdfj)ölkj!',
};

const user3 = {
  name: 'mina',
  yearBorn: 1951,
  contentRights: ['user', 'moderator'],
  password: 'abc',
};

const users = [user1, user2, user3];

const longestPassword = (arr) => {
  let longPass = '';
  let userName = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].password.length > longPass.length) {
      longPass = arr[i].password;
      userName = arr[i].name;
    }
  }
  return userName;
};
console.log('User mit dem längsten Passwort:', longestPassword(users));

const userAge = (arr) => {
  let age = 0;
  let userName = '';
  let year = new Date().getFullYear();
  for (let i = 0; i < arr.length; i++) {
    if (year - arr[i].yearBorn > age) {
      age = year - arr[i].yearBorn;
      userName = arr[i].name;
    }
  }
  return userName;
};
console.log('ältester User:', userAge(users));

const adminUserPass = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].password.length < 4 && arr[i].contentRights.includes('admin')) {
      return arr[i].name;
    } else {
      return `Es gibt keinen User, dessen Passwort weniger als 4 Buchstaben und admin ist.`;
    }
  }
};
console.log(adminUserPass(users));
exEnd();
