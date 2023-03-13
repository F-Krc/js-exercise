function personalDice(name) {
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice('Dan');
const zoesRoll = personalDice('Zoe');

dansRoll();
dansRoll();



function createBase(x) {
  return function (y) {
   return x+y;
  };
}
const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27