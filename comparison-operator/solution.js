// 0-
let apples = 20;
let oranges = 30;

// 1-
let firstEqu = apples === oranges ? 'gleich' : 'ungleich';
console.log(`1. Equality is ${firstEqu}`);

// 2-
let secondEqu = apples !== oranges ? 'ungleich' : 'gleich';
console.log(`2. Equality is ${secondEqu}`);

// 3-
let greater = apples > oranges ? 'groß' : 'klein';
console.log(`3. ${apples} is ${greater} than ${oranges}`);

// 4-
let less = apples <= oranges ? 'klein' : 'groß';
console.log(`4. ${apples} is ${less} than ${oranges}`);

// 5-
let greater2 = oranges > apples ? 'groß' : 'klein';
console.log(`5. ${oranges} is ${greater2} than ${apples}`);

// 6-
let mangoes = 5;
let greater3 = mangoes * apples > mangoes + oranges ? 'groß' : 'klein';
console.log(`6. mangoes*apples is ${greater3} than mangoes+oranges`);

// 7-
let less2 = apples - mangoes < oranges / mangoes ? 'klein' : 'groß';
console.log(`7. apples-mangoes is ${less2} than oranges/mangoes`);

// 8-
let thirdEqu =
  mangoes === oranges && oranges === apples
    ? `oranges, mangoes and apples are equal.`
    : `oranges, mangoes and apples are not equal.`;
console.log(`8. ${thirdEqu}`);

console.log((mangoes === apples ? apples === oranges : false))

// 9-
let fourthEqu = apples % mangoes === oranges % mangoes ? 'gleich' : 'ungleich';
console.log(`9. Equality is ${fourthEqu}`);

// 10-
let fifthEqu = apples + mangoes === oranges - mangoes ? 'gleich' : 'ungleich';
let sixthEqu = apples + mangoes > oranges - mangoes ? 'correct' : 'not correct';
console.log(`10. Equality is ${fifthEqu}`);
console.log(`10. Equality is ${sixthEqu}`);
