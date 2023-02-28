# Nests
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


#### 1. 2D Array
* Given the 2D Array below, **loop** through the arrays to print all values to the console.

```javascript
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];
```

#### 2. Doggo

* 2.1 Create an object named `doggo`. Add `name` and `breed` properties to the object.
* 2.2 Create an array in the `favoriteFoods` property of the `doggo` object and add the doggo's favorite foods to the array.
* 2.3 Access the second element of the doggo's favorite foods. 
* 2.4 Add a method named `showFavorites` that loops through and prints all the doggo's favorite foods.

#### 3. Recipe
* 3.1 Create an object named `recipe`. Add `name` and `preparationTime` properties to the object.
* 3.2 Inside this object, you should create another object in the `ingredients` property and store ingredients and amounts as properties: butter, sugar, flour etc. Each property should have a string as its value. Example:
  ```js
     {
      butter: '1 tbsp' 
     }
  ```
* 3.3 Without changing the previous code, add another ingredient - let's add `ginger` with amount(value) '1 tsp'. 
* 3.4 Change the amount(value) of ingredient `ginger` to `2 tsp`. 
* 3.5 Write a method in the recipe object named `showIngredients` that prints each ingredient and amount from the ingredients object to the console.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. 2D Array

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | All values of sub-arrays are printed to console |

### 2. Doggo

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `doggo` object has `name` and `breed` properties |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `doggo` object has `favoriteFoods` property containing array of strings |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Access and log the second element of doggo's favorite foods |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `doggo` object has `showFavorites` method that loops through favorite foods and prints them to the console |

### 3. Recipe

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `recipe` object has `name` and `prepatationTime` properties |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `recipe` object has `ingredients` property containing object with ingredients |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | 'ginger' was added as property to `ingredients` of `recipe` |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | Value of `ginger` in `ingredients` was changed |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | `recipe` has `showIngredients` method that prints the value of each ingredient in the `ingredients` object to the console |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-datastructure-nesting)


[//]: # (autograding info end)