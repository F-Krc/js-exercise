// --1--
console.log(isNaN('hello'));
console.log(isNaN('3'));
console.log(isNaN(3));
console.log(typeof NaN);
// NaN : In JavaScript, NaN is short for "Not-a-Number".
// Die isNaN() Methode prüft, ob ein Wert NaN ist.

// --2--
console.log(0.1 * 0.2);
console.log((0.1 * 0.2).toFixed(2));
console.log((0.1 * 0.2).toPrecision(1));

// --3--
console.log(Infinity / 0);
console.log(Infinity / Infinity);
console.log(1 / 0);
