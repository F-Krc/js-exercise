# Programming Basics: Logical Operators
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


- work in `solution.js`

## 1. What type?

Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison.

## 2. Questions

Print out the number of the correct answer in the terminal one by one

- Which of the following is the loose equality operator?

    1.  =
    2.  ==
    3.  ===
    4.  all of the above

- Which of the following is the strict equality operator?

    5.  =
    6.  ==
    7.  ===
    8.  none of the above

* Which of the following is used to ASSIGN a value to a variable?

    9.   =
    10.  ==
    11.  ===
    12.  const

## 3. Not

Complete the following code to print out 'good evening' using 'myVar':

```javascript
const myVar = true

console.log(.............. ? 'good morning' : 'good evening')
```

## 4. Short Circuit

Complete the following code by filling the spaces with '&&' or '||' to get the value that fits the variable's name.

*Hint: these values will always return false: `false` , `0`, `''`*

```javascript
const firstName = '' .... 'John' .... 0
const emptyStr  = '' .... false .... 'Hello World'
const zero  = '' .... false .... 0
const seven = 75 .... 'nine' .... 7

console.log(firstName, emptyStr, zero, seven)
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. What type

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | loose and strict comparison between 3 and "3" |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Which is used to compare the VALUE |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Which is used to compare the VALUE and TYPE |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Which is used to ASSIGN a value |

### 2. Not

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | Code was changed to print "good evening" |

### 3. Short Circuit

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `firstName` must be "John" |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `emptyStr` must be "" |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | `zero` must be `0` |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | `seven` must be `7` |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-language-boolean)


[//]: # (autograding info end)