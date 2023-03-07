# Map, Filter, Reduce
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


* Work in the `index.js` file provided in this repository.

#### 1. Get Total Amount of Orders
* Use an array method to calculate the total amount of the `orders` array, store the resulting value(sum) in a variable named `totalAmount`. 

```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
```

#### 2. Increment by 1
* Use an array method to increment each element in the array below by 1. Store the modified array in a variable named `mappedArray`.

```javascript
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
```

#### 3. Filter Evens
* Create a function named `filterEvens` that filters an array of numbers and only returns even numbers. The function should take an array of numbers as an argument and should not use a loop.

* Examples:
```javascript
filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
```

#### 4. Filter Friends
* Create a function named `filterFriends` which accepts two arguments: an array and a string. It filters the array based on a search string and returns elements that contain the search string.

* Examples

```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
```

#### 5. Sum Up
* Write a function named `sumUp` that uses the reduce method to sum up an array of numbers. 

* Examples:
```javascript
sumUp([1,2,3,4,5]); //returns 15
sumUp([6,7,7]); //returns 20
```

#### 6. Square Root
* Write a function named `getSquareRoot` which maps an array of numbers and returns an array with the square root of each element from the passed array.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Total Amount

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `totalAmount` variable should contian the correct result of the summing function |

###  2. ArrayOfNumbers

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `mappedArray` variable should contain an array of numbers where each number from `[3, 45, 6, 56, 7, 9]` is increased by 1 |

### 3. Filter Evens

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `filterEvens` function should return filtered Array of only Even Numbers |

### 4. Friends

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `filterFriends` function should return array containing only elements from passed array that contain passed string |

###  5. Sum Up

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `sumUp` should return the sum of a passed Array of Numbers |

### 6. Square Root

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `getSquareRoot` function should return array with square root of each element from the passed Array |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-datastructure-advarray)


[//]: # (autograding info end)