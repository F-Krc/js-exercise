# On the block
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)

* Work in `index.js`

#### 1. Updater
* Create a new variable named `determiner`
* Give `determiner` a value between -100 and 100 (change it to experiment)
* Create a 2nd variable named `x`
* Depending on the value of `determiner`, assign a value to `x`. 
    - If `determiner` is less than 0, `x`'s value should be the string "Less than 0"
    - If `determiner` is greater or equal 0, `x`'s value should the string "Greater or equal to 0".

#### 2. New Variables 
* Create a new variable named `updater`
* Depending on the value of `determiner`
    * If `determiner` is greater or equal to 0
        * set `updater` value to "Greater or equal to 0"
        * create another variable named `message` in your if statement
        * assign the string "Positive Integer" to `message`
        * print out `message` in the format "message: [value of message]". 
    * If `determiner` is less than 0, assign the string "Less than 0" to `updater`.
* Print out the value of `updater` in the format "updater: [value of updater]".

* **Question**: What would happen if we tried to print "message" outside of the if statement? Comment your answer in the js file.

#### 3. Ternary v.s. If statement 
* When do you use a ternary v.s. an if statement? Give an example.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Updater

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `determiner` variable exists |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | value of `determiner` is between -100 and 100 |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `x` variable exists |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | value of `x` is corectly assigned depending on `determiner` |

### 2. New Variables

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | `updater` variable exists |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | value of `updater` is correctly assigned depending on `determiner` |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | `message` is printed to the console depending on `determiner` |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | `updater` is printed to the console in the correct format |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-program-blockscope)


[//]: # (autograding info end)