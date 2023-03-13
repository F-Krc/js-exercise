// 1-
console.log('Question 1');
function closureOne() {
  const a = 1;  
  console.log(a);
  function foo() {
    return 2;
  }
   console.log(foo());
}

closureOne();

// 2-
console.log('Question 2');
let a = 1;

function closureTwo(number) {
  function inner(input) {
    return a;
  }

  a = 5;

  return inner;
}

const resultOfClosureTwo = closureTwo(9);
const result = resultOfClosureTwo(2);
console.log(result)


// 3-
console.log('Question 3');
const fullname = 'John Doe';
const user = {
  fullname: 'Colin Ihrig',
  name: {
    fullname: 'Aurelio De Rosa',
    getFullname: function () {
      return this.fullname;
    },
  },
};
console.log(user.name.getFullname());

const test = user.name.getFullname();
console.log(test);

// 4-
console.log('Question 4');
let interesting = 1;
function doSomeStuff() {
  interesting = 10;
}
doSomeStuff();
console.log(interesting);