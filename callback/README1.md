# Callbacks
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)

- Work in `solution.js`

#### Greet Users
* Create a function named `greetMessage` which prints a greeting message for a name passed as argument
* Create a function named `greetUsers` which receives an array of users and the `greetMessage` as a callback function and greets each user.


```javascript
    greetMessage("John") // prints "Good Morning, John"

    greetUsers(["John","Peter","Mark"], greetMessage)
    // "Good Morning, John"
    // "Good Morning, Peter"
    // "Good Morning, Mark"
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Greet Message

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `greetMessage` function should be defined |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `greetMessage` should accept a `string` as a argument and print a greeting message to console |

### greetUsers

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `greetUsers` should be defined |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `greetUsers` should accept an array of users and a callback function and greet each user from array |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Functions-Callback-1)


[//]: # (autograding info end)