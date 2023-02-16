// The Fortune Teller
const tellFortune = (job , geoLoc, parName, numChild) => {
 return `You will be a ${job} in ${geoLoc}, and married to ${parName} with ${numChild} kids.`;
};
console.log(tellFortune('ball player','spain', 'Shaq', 3 ));

// The Puppy Age Calculator
const calculateDogAge = (age, con = 7) => {
 return `Your doggie is ${age * con} years old in dog year`;
};
console.log(calculateDogAge(1));
console.log(calculateDogAge(5));
console.log(calculateDogAge(3));

// The Lifetime Supply Calculator
const calculateSupply = (a, b) => {
  return `You will need ${Math.round((100 - a) * 365 * b)} to last you until the ripe old age 100`;
};

console.log(calculateSupply(28, 36));

// Bonus
const calculateSupply2 = (a, b, c) => {
  return `You will need ${Math.round((c - a) * 365 * b)} to last you until the ripe old age 100`;
};

console.log(calculateSupply2(25, 2, 90));
console.log(calculateSupply2(40, 3, 88));

// The Geometrizer
const calcCircumference = (r) => {
  return `The circumference is ${2 * Math.PI * r}`;
};

console.log(calcCircumference(5));
const calcArea = (r) => {
  return `The area is ${Math.PI * r ** 2}`;
};
console.log(calcArea(5));

// The Temperature Converter
const celsiusToFahrenheit = (c) => {
  let toFahr = (c / 5) * 9 + 32;
 return `${c}°C is ${toFahr}°F`;
};
 console.log(celsiusToFahrenheit(30))

const fahrenheitToCelsius = (f) => {
  let toCelc = (f-32)*5/9 ;
 return `${f}°F is ${toCelc}°C`;
};
 console.log(fahrenheitToCelsius(86))