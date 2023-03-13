# Closure
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


1. Create an `index.js` file
2. Define "closure" in your own words. (1-2 sentences).

3. Study the following code, then answer the questions below.

```js
function personalDice(name) {
   return function () {
      // generate random number between 1 and 6
      const newRoll = Math.floor(Math.random() * 6) + 1;
      console.log(`${name} rolled a ${newRoll}`);
   };
}

const dansRoll = personalDice("Dan");
const zoesRoll = personalDice("Zoe");

dansRoll();
dansRoll();
```

-  a. Where is closure used in this code? How can you tell?

-  b. Compare and contrast calling `dansRoll` the first and second time. What is always the same? What could change?

-  c. What is the lexical scope of `newRoll`?

4. Write a function named `createBase` that would allow you to do the following using a closure:

```js
const addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Solution file

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `index.js` exists |

### Closure

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `createBase` function should return function pre-configured with passed base number |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Functions-Closure)


[//]: # (autograding info end)