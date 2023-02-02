// Rewrite this if using the conditional operator '?':

/* let result;
let a=3;
let b=6;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

/* _________________________________ */
let result;
let a = 3;
let b = 6;



//write your code here 
result = a + b < 4 ? 'Below' : 'Over';
console.log(result);

/* _________________________________ */


//Rewrite the code below to use the ternary operator (?:) (you should be able to condense the if-else logic into one line).
/* if (score > 1337)
{
    msg = "This is a new highscore!";
}
else
{
    msg = "You need more points to beat the highscore!";
} */

/* _________________________________ */

let score = 42;

//write your code here 
let msg = score > 1337 ? 'This is a new highcore!' : 'You need more points to beat the highcore!';
console.log(msg);


/* _________________________________ */


// Rewrite if..else using multiple ternary operators '?'.
//For readability, it’s recommended to split the code into multiple lines.

/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

/* _________________________________ */
let login = 'Director';

//write your code here 
let message = login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == '' ? 'No login' : '';
console.log(message);

/* _________________________________ */

