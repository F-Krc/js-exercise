// 1. Write a function that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

function camelize(str) {
  let arr = str.split('-');
  let arrCamel = arr.slice(1)
  let result = arrCamel.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return `${arr[0]}${result.join('')}`;
}
 
 console.log(camelize("background-color"))
 console.log(camelize("list-style-image"))
 console.log(camelize("-webkit-transition"))
 
 // 2. Write the code to create an array with two properties: fullName and id 

 let john = { name: "John", surname: "Smith", id: 1 };
 let pete = { name: "Pete", surname: "Hunt", id: 2 };
 let mary = { name: "Mary", surname: "Key", id: 3 };

 let users = [john, pete, mary];

 let usersMapped = users.map((user) => {
   return { fullName: `${user.name} ${user.surname}`, id: user.id };
 });
 
 /*   usersMapped = [
     { fullName: "John Smith", id: 1 },
     { fullName: "Pete Hunt", id: 2 },
     { fullName: "Mary Key", id: 3 }
   ] */


 console.log(usersMapped)
 console.log(usersMapped[0].id); // 1
 console.log(usersMapped[0].fullName); // John Smith