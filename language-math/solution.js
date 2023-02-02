// --1a--
console.log(Math.min(-1, 4));

// --1b--
console.log(Math.max(-1, 4));

// --2a-- Round up
console.log(Math.ceil(3321.32321));
console.log(Math.ceil(326.76));
console.log(Math.ceil(76788.7));
console.log(Math.ceil(-9.78));
console.log(Math.ceil(43.342));

// --2b-- Round down
console.log(Math.floor(3321.32321));
console.log(Math.floor(326.76));
console.log(Math.floor(76788.7));
console.log(Math.floor(-9.78));
console.log(Math.floor(28.329));

// --3-- Dice Roll! (betwenn 1 and 6)
// (max - min +1 ) + min
console.log(Math.floor(Math.random() * 6) + 1);
