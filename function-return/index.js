// The following function returns true if the parameter age is greater than 18.
// Otherwise returns false:
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
console.log(checkAge(10));
console.log(checkAge(19));
// Write a function min(a,b) which returns the least of two numbers a and b.
function min(a, b) {
  return Math.min(a, b);
}
console.log(min(2, 5));
console.log(min(3, -1));
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// console.log(3,3) should return 27 .

function pow(x, n) {
  return Math.pow(x, n);
}

console.log(pow(3, 2));

// Bonus 1-
const numbers = [2, 8, 9, 5, 1, 7, 4, 6, 10, 3];
function maxOfArray(arr) {
  let max = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(maxOfArray(numbers));

// Bonus 2-
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}
evenOrOdd(6);
evenOrOdd(7);

// Bonus 3-
function factorial(num) {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  console.log(fac);
}
factorial(5);

// Bonus 4-
function longestWord(sentence) {
  let words = sentence.split(' ');
  let longWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longWord.length) {
      longWord = words[i];
    }
  }
  return longWord;
}

console.log(longestWord('Ich bin ein Satz und irgendein Wort wird das längste sein'));

// Bonus 5-
function isPalindrome(str){
  let strLower = str.toLowerCase();
  let rvrStr = strLower.split('').reverse().join('');
  if(strLower.includes('ö')){
return `Pfui, ein 'ö'. Ich verweigere die Arbeit`;
  }else if(strLower === rvrStr){
    return true;
  } else{
    return false;
  }
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('AwaaWa'));
console.log(isPalindrome('Awööwa'));