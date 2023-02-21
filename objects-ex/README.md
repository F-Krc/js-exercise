# PB-Objects-Intro

1. Benutze die dot notation um die einzelnen Werte des Objektes auszugeben.
```
const person = {
  name: "Alice",
  age: 25,
  occupation: "teacher"
};

console.log(dein code hier); // Alice
console.log(dein code hier); // 25
console.log(dein code hier); // teacher
```

2. Schreibe eine Funktion die einen String animmt und die dazugehörigen Werte des person Objekts ausgibt.
```
console.log(getProp("name")); // Alice
console.log(getProp("age")); // 25
```
3. Schreibe eine Funktion die dieses Objekt in einen Satz umwandelt.
```
const book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  pages: 214
};

console.log(makeSentence(book)); // "The Book The Catcher in the Rye was written by J.D. Salinger and has 214 pages."
```
4. Du hast folgendes Objekt:
```
const student = {
    name: "alex",
    info: {
        age: 43,
        email: "alex@mail.com"
    }, 
    subjects: ["programming basics", "ui basics"],
    teachers: [{ name: "max", email: "max@mail.com", isFavorite: false}, {name: "mo", email: "mo@mail.com", isFavorite: false}, {name: "mina", email: "mina@mail.com", isFavorite: true}]
}
```
Schreib code um folgende Sachen herauszufinden:
```
1. Was ist der Name des Students?
2. Was ist die Email des Students?
3. Was ist der Name des ersten Lehrers im teachers Array?
4. Wie viele Fächer (subjects) hat der Student?
5. Bau ein Array mit den Emails aller Lehrer im teachers array. 
6. Was ist die Email des lieblingslehrers des Students? 
```

5. Schreibe eine Funktion die alle Werte des Properties "name" der Objekte im Array ausgibt. 
```
const pets = [
  { name: "Fluffy", type: "cat" },
  { name: "Spot", type: "dog" },
  { name: "Goldie", type: "fish" }
];

console.log(printName(pets))  // Fluffy, Spot, Goldie
```

Bonus 1: Schreibe eine Funktion namens hasProperty, die zwei Parameter benötigt: ein Objekt und einen String. Die Funktion sollte true zurückgeben, wenn das Objekt eine Eigenschaft mit demselben Namen wie der String hat, und andernfalls false.
```
const car = {
  model: "Toyota",
  color: "red",
  year: 2010
};
console.log(hasProperty(car, "model")); // true
console.log(hasProperty(car, "price")); // false
```

Bonus 2: 
```
const user1 = {
    name: "max",
    yearBorn: 1990,
    contentRights: ["user", "admin", "moderator"],
    password: "1234",
}

const user2 = {
    name: "mo",
    yearBorn: 2001,
    contentRights: ["user"],
    password: "asdfj)ölkj!",
}

const user3 = {
    name: "mina",
    yearBorn: 1951,
    contentRights: ["user", "moderator"],
    password: "abc",
}

const users = [user1, user2, user3];
```
Schreibe Code um folgende Fragen zu beantworten:
```
1. Welcher user im Array hat das längste Passwort?
2. Welcher user im array ist am ältesten?
3. Gibt es einen user im array der ein passwort hat was kürzer ist als 4 buchstaben der/die admin ist?
```
