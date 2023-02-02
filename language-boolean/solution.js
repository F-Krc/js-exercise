// 1-
console.log(3 == '3');
console.log(3 === '3');


// 2-
/*
 Which of the following is used to compare the VALUE of two variables/values?
1.  =         
2.  ==          true
3.  ===         
4.  all of the above 
* Which of the following is used to compare the VALUE and TYPE of two variables/values?
5.  =         
6.  ==          
7.  ===         true
8.  none of the above 
* Which of the following is used to ASSIGN a value to a variable?
9.  =         true
10.  ==          
11.  ===         
12.  const 
*/
console.log(2);
console.log(7);
console.log(9);


// 3-
let myVar = true;
console.log(!myVar ? 'good morning' : 'good evening');


// 4-
let firstName = '' || 'John' || 0;
let emptyStr = '' && false && 'Hello World';
let zero = '' || false || 0;
let seven = (75 || 'nine') && 7;

console.log(firstName, emptyStr, zero, seven);
