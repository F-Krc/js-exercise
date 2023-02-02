// 1-
let isDog = true;
console.log(isDog ? 'pat, pat' : 'find me a dog to pat!');

isDog = false;
console.log(isDog ? 'pat, pat' : 'find me a dog to pat!');

// 2-
let speedLimit = 50;
let yourSpeed = 60;
console.log(yourSpeed > speedLimit ? `you're going too fast!` : `You're driving below the speed limit, Oma`);

yourSpeed = 40;
console.log(yourSpeed > speedLimit ? `you're going too fast!` : `You're driving below the speed limit, Oma`);

// 3-
let age = 17;
console.log(age < 16 ? "serve butter beer" : "serve beer");

age = 15;
console.log(age < 16 ? 'serve butter beer' : 'serve beer');

// 4-
let isStudent = true;
console.log(isStudent ? 'Ticket costs €5,00' : 'Ticket costs €12,00');

isStudent =false;
console.log(isStudent ? 'Ticket costs €5,00' : 'Ticket costs €12,00');

// 5-
let okMarie = 'cake';
console.log((okMarie === 'cake' ? 'Let them eat cake' : 'Oh, bother'));

okMarie = 'chocolate';
console.log(okMarie === 'cake' ? 'Let them eat cake' : 'Oh, bother');

// 6-
let num1 = 30;
let num2 = 939;
let num3 = 40.9;
console.log(num1 % 2 === 0 ? `${num1} is even` : `${num1} is odd`);
console.log(num2 % 2 === 0 ? `${num2} is even` : `${num2} is odd`);
console.log(num3 % 2 === 0 ? `${num3} is even` : `${num3} is odd`);