# Destructuring
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


**Instructions**
- Work in the provided `index.js` file
#### 1. Array Destructuring
* Declare the variables `fruit`, `vegetable` and `food`.
* Assign the following values from an array to the variables respectively using restructuring assignment: `["banana", "cucumber", "bread", "cakes", "pizza"]`
* assign "bread", "cakes" and "pizza" to `food` using the rest property of destructuring assignment.

#### 2. Object Destructuring
* Declare the variables `fran`, `martina` and `camille`
* Assign the following values from an object to the variables respectively using destructurung assignment:
```javascript
{
  fran: "monster",
  martina: "ghost",
  camille: "witch"
}
```

#### 3. Parameters: Object Destructuring 
* Create an object named `musician` with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
* Then, create a function named `displayMusicianDetails` that returns all of the band/musician's info as a string. 
* The passed object should be destructured into the function's parameters.
* Example
```javascript
displayMusicianDetails(musician) → "Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is 'Us'".
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Array Destructuring

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `fruit` variable has correct value |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `vegetable` variable has correct value |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | remaining values are assigned to `food` using rest property of destructuring assignment |

### 2. Object  Destructuring

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `fran` variable has correct value |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `martina` variable has correct value |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `camille` variable has correct value |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | Object destructuring is used to assign values to variables |

### 3. Parameters: Object Destructuring

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | `musician` Object is defined |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | `displayMusicianDetails` function prints musician info as string |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-datastructure-destructuring)


[//]: # (autograding info end)