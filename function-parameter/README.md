# Parametrics
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Complete the following tasks:

1. Complete the function in [`twofer.js`](./twofer.js) so that it returns "Two for me and one for you" when no arguments are passed\
e.g\
`console.log(twofer("Fran")) ---> "Two for me and one for Fran" ` \
`console.log(twofer()) ---> "Two for me and one for you" `
    
1. Complete the function in [`exponent.js`](./exponent.js) so that it still calculates the power of a 
number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.\
e.g\
`console.log(exponent(3, 3)) ---> 27 `\
`console.log(exponent(3)) ---> 9`

1. Create a function in [`howManyArgs.js`](./howManyArgs.js) which returns the total amount of arguments passed to it.\
e.g\
`console.log(howManyArgs()) ---> 0 `\
`console.log(howManyArgs(1, false, "hello")) ---> 3` \
`console.log(howManyArgs("better")) ---> 1`

1. Create a function in [`sum.js`](./sum.js) which accepts any amount of numbers and return the sum of their addition\
e.g\
`console.log(sum(1)) ---> 1`\
 `console.log(sum(1, 15)) ---> 16`\
`console.log(sum(25, 25, 20)) ---> 70`

1. **Bonus:** Create a function in [`average.js`](./average.js) which accepts any amount of numbers and returns their mean average.\
e.g\
`console.log(average(0)) ---> 0`\
`console.log(average(1, 2)) ---> 1.5`\
`console.log(average(1, 3, 6, 10)) ---> 5`\
`console.log(average(12, 14, 16)) ---> 14`

_**Note:** Feel free to add more `console.log()`s to each file to test your function further. but please do not delete the exisiting `console.log`s or rename the function._

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1.`twofer.js`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Should return Two for me + Argument |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Should return Two for me one for you, if no Arguments passed |

### 2. `exponent.js`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Should return 2 to the power of 2 |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Should return 2 to the power of 4 |

### 3. `howManyArgs.js`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | Should return the number of Arguments passed |

### 4.`sum.js`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | Should take any amount of number as Argument and return their sum |

### 5. `average.js`

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | Should take any amount of number as Argument and return their average |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Function-Parametrics)


[//]: # (autograding info end)