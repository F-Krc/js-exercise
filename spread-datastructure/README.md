# Spread the Word
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


* Work from the `index.js` file provided in this repository.

#### 1. Combining Arrays 
* Create two arrays: `euroCountries` with strings "Germany" and "France" and `asianCountries` with strings "Japan" and "Korea".
* Add `asianCountries` items to the end of the `euroCountries` array. Now, print `euroCountries` to the console.
* Once again create two arrays. This time `euroCities` with "Berlin" and "Paris" and `asiaCities` with "Tokyo" and "Seoul". 
* Save all elements of both arrays to a new array variable named `worldCities` and print it to the console. 

#### 2. Copying Arrays
* Copy the array `asiaCities` by using the spread operator. Store the copied array in a new variable and print it to the console. 

#### 3. Find the Largest
* Create a function named `findLargestNumber` which accepts an array of numbers as an argument and returns the largest number from the array.

#### 4. Find the Smallest
* Create a function named `findSmallestNumber` which accepts an array of numbers as an argument and returns the smallest number from the array.

#### 5. Clone and Merge
Given two objects:
```javascript
const person = {name: "John"}
const job = {role: "Teacher"}
```
* 5.1 Clone the `person` object and store it in a new variable. Print the variable to the console.
* 5.2 Merge both objects `person` and `job` into a new object named `employee`. Use the spread operator to do so. Now, print `employee` to the console.
* 5.3 Change the value of `role` property in the `job` object to "Plumber". Now print both `job` and `employee` separately to the console.

#### 6.  Is the average a whole number?
Create a function named `isWhole` that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
* Examples
* isWhole(1, 2, 3, 4) ➞ false
* isWhole(9, 2, 2, 5) ➞ false

* Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Combining Arrays

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | Array items of `asianCountries` are added to `euroCountries` which is printed to console |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `euroCities` and `asiaCities` are combined into new array `worldCities` which is printed to console |

### 2. Copying Arrays

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `asiaCities` is copied into new array using spread operator and printed to console |

### 3. Find The Largest..

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `findLargestNumber` function returns largest number from passed array |

### 4.Find The Smallest..

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `findSmallestNumber` function returns smallest number from passed array |

### 5. Clone and Merge

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `person` object is cloned into new variable and printed to the console |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `person` and `job` are merged into variable `employee` which is printed to the console |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | Value of `role` propperty of `job` object is changed and object is printed to console |

### 6. Is average a whole Number?

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | `isWhole` function should take 4 numbers as parameters and return `false` if their average is not a whole number |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-datastructure-spread)


[//]: # (autograding info end)