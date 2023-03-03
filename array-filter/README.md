# Array Method .filter
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


- Work in the provided `index.js` file
#### 1. Write a function `filterRange(arr, a, b)` that takes an array `arr`, looks for elements with values higher or equal to `a` and lower or equal to `b` and returns a array containing only matching values.

* The function should not modify the array. It should return a new array.

For instance:
```js
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)
```

#### 2. Write a function `filterRangeInPlace(arr, a, b)` that gets an array `arr` and removes from it all values except those that are between `a` and `b`. The test is: a ≤ arr[i] ≤ b.

* The function should only modify the original array. It should not return anything.

For instance:
```js
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. filterRange

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `filterRange` function should return an array containing only the elements within the specified range |

### 2. filterRangeInPlace

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `filterRangeInPlace` function should remove the elements with values outside of the range from original array |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-Data-Structure-ArrayMethod-filter)


[//]: # (autograding info end)