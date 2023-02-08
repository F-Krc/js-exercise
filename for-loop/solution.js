// 1-
let sum = 0;
for (let i = 0; i <= 20; i++) {
  sum += i;
}
console.log(sum);
console.log('-'.repeat(20));

// 2-
for (let i = 1; i <= 5; i++) {
  if (i === 1) {
    console.log(`There is ${i} bottle of beer on the wall`);
  } else {
    console.log(`There are ${i} bottles of beer on the wall`);
  }
}
console.log('-'.repeat(20));

// 3-
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
console.log('-'.repeat(20));

// 4-
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * 9 = ${i * 9}`);
}
console.log('-'.repeat(20));

// 4-1
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j} `);
  }
}
console.log('-'.repeat(20));

// 5-
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}
console.log('-'.repeat(20));

// 6-
let sum2 = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum2 += i;
  }
}
console.log(sum2);
console.log('-'.repeat(20));

// Extra-1
for (let m = 1; m <= 10; m++) {
  console.log(m * 100);
}
console.log('-'.repeat(20));

// Extra-2
for (let m = 0; m <= 10; m = m + 2) {
  console.log(m);
}
console.log('-'.repeat(20));

// Extra-3
for (let m = 3; m <= 15; m = m + 3) {
  console.log(m);
}
console.log('-'.repeat(20));

// Extra-4
for (let m = 9; m >= 0; m--) {
  console.log(m);
}
console.log('-'.repeat(20));

// Extra-5
for (let k = 1; k <= 4; k++) {
  for (let l = 1; l <= 3; l++) {
    console.log(k);
  }
}
console.log('-'.repeat(20));

// Extra-6
for (let m = 1; m <= 3; m++) {
  for (let n = 0; n <= 4; n++) {
    console.log(n);
  }
}
