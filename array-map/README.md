# Array Method .map
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


- work in the provided `index.js` file
#### 1. Write a function named `camelize` that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

* This function removes all dashes, and each word after dash becomes upper-case.

Examples:
```js
console.log(camelize("background-color")) == 'backgroundColor';
console.log(camelize("list-style-image")) == 'listStyleImage';
console.log(camelize("-webkit-transition")) == 'WebkitTransition';
``` 

#### 2. You have three user objects. Each user has 3 properties: `name`, `surname` and `id`. See below:

```js

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

```
#### Now we have three users in an array named `users`.

```js
let users = [ john, pete, mary ];
```

 #### Write the code to create an array named `usersMapped`. 
 
* This array contains objects with two properties: `fullName` and `id`. 
* To have these in `usersMapped`, map the `users` array and access each user's object properties. (Hint: you can get `fullName` by combining `name` and `surname`.)

* When printed to the console, the output of `userMapped` is as below: 

```js
 [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Camelize

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `camelize` function should accept a string and return camelized version |

### 2. User Object

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `usersMapped` function should return a new user object with `id`,and `fullName` |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Data-Structure-ArrayMethod-map)


[//]: # (autograding info end)