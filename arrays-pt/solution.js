// 1-
let euroCities = ['Paris', 'London', 'Valletta', 'Prague', 'Rome'];
let secondCity = euroCities[1];

// 2-
euroCities[0] = 'Berlin';
console.log(euroCities);

// 3-
console.log(euroCities.length);

// 4-
console.log(euroCities.pop());

// 5-
console.log(euroCities.push('Budapest'));

// 6-
let asianCities = ['Tokyo', 'Shanghai', 'Seoul', 'Hong Kong', 'Bangkok'];

// 7-
let worldCities = euroCities.concat(asianCities);
console.log(worldCities);

// 8-
console.table(worldCities.reverse());

// 9-
console.table(euroCities.splice(2, 1));
console.table(euroCities);

// 10-
let asianCities2 = asianCities.slice(1, 4);
console.table(asianCities2);

// 11-
worldCities.splice(2, 1, 'Toronto');
console.table(worldCities);

// 12-
worldCities[1] ='Washington';
console.table(worldCities);

// 13-
console.log(worldCities.join());
console.log(worldCities.join('+'));

// Extra Bonus
let str = 'Hello World';
console.log(str.split('').reverse().join(''));

// Extra Practice

// 1-
let charactersNames = ['Neo', 'John Wick'];

// 2-
let begrussenNames = ['Hallo', 'Moin'];

// 3-
let begrussenCharacters = charactersNames.concat(begrussenNames);
console.log(begrussenCharacters);

// 4-
let addPetsNames = begrussenCharacters.push('xyz', '123');
console.log(begrussenCharacters);

// 5-
console.log(begrussenCharacters.reverse());

// 6-
console.log(begrussenCharacters[3]);

// 7-
begrussenCharacters.splice(3, 1, 'Hi');
console.log(begrussenCharacters);