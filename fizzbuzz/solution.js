let myNum = 25;
 if(myNum%3==0 && myNum%5==0){
     console.log('Fizzbuzz');
  }  else if(myNum%5==0){
    console.log('Buzz');
  } else if(myNum%3==0 ){
     console.log('Fizz');
  }else{
     console.log(myNum);
  }

  function fizbuz(num){
   if (num % 3 == 0 && num % 5 == 0) {
     console.log('Fizzbuzz');
   } else if (num % 5 == 0) {
     console.log('Buzz');
   } else if (num % 3 == 0) {
     console.log('Fizz');
   } else {
     console.log(num);
   }
  }
fizbuz(45)
