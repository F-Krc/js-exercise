// 1-
let parkWalkStr = 'I can walk in the park all day!';
console.log(parkWalkStr.substring(parkWalkStr.indexOf("park"), parkWalkStr.indexOf("park")+4));

// 2-
let helloStr = 'Hello World';
console.log(helloStr.toUpperCase());

// 3-
let earthlingsStr = 'Hello Earthling';
console.log(earthlingsStr.toLowerCase());

// 4-
let jsStr = 'JavaScript';
console.log(jsStr.slice(3,6))

// 5-
let niceShoesStr = "nice shoes";
console.log(niceShoesStr.includes("l"));
console.log(niceShoesStr.includes("n"));

// 6-
let oldStr = 'Bananas';
let newStr = oldStr[0] + oldStr + oldStr[0];
console.log(newStr);

// 7-
let scritcherStr = 'Scritch';
let lastThreeChars = scritcherStr.slice(-3);
console.log(lastThreeChars + scritcherStr + lastThreeChars);

// 8-
let boogieNightsStr = 'BoogieWoogie';
let firstChar = boogieNightsStr.charAt(0);
let lastChar = boogieNightsStr.at(-1);
let middleWord = boogieNightsStr.slice(1, boogieNightsStr.length-1)
console.log(lastChar+middleWord+firstChar);

// 9-
const firstName = 'Maria';
const city = 'Berlin';
const job = 'teacher';
console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}.`);

// 10-
let foxStr = 'the quick brown fox';
console.log(foxStr.replace('t', 'T'));
