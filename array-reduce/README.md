# Array Method .reduce
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)

 Let’s say we received an array of users in the form `[{id:..., name:..., age:... }]`.

* Check out `index.js`, it contains the function `groupById`
* Complete the function `groupById` so that is creates and returns an object from the passed array.
* The newly created objects property names should be created from the id of each object in the array id as the key
* The values of the properties should be the respective objects from the array

## Example:
```js 
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

console.log(usersById)

/* expected output:
{
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
``` 
* Such a function is really handy when working with server data.

* In this task we assume that id is unique. There may be no two array items with the same id.

* Please use array .reduce method in the solution.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### `groupById` function

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `groupById` exists |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `groupById` is a function |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | function takes an array and creates object with property names from ids |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | function takes an array and creates an object with array items as values |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Data-Structure-ArrayMethod-reduce)


[//]: # (autograding info end)