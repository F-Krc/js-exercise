# Programming Basics: Conditionals Part 3 
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Attempt this exercise using only simple "if" conditionals (and only what you have learnt this far into the course, so no loops, functions or arrays just yet!) 

- work in the file `solution.js`

**Print your results to the console**

 Aleeza and Lara both play basketball in different teams. In the latest 3 games, Aleeza's team scored *89*, *120* and *103* points, while Lara's team scored *116*, *94* and *123* points.

- 1) Calculate the average score for each team, assign them to the variables `aleezaTeamAve` and `laraTeamAve`.
- 2) Write a condition that prints this in the terminal: _"Lara's team is the winner with an average score of ...."_ or _"Aleeza's team is the winner with an average score of ...."_ or "It's a tie with an average score of ...." according to which team has the higher average score or in case of a draw. Don't forget to include the actual average score in your answer (filling the ....)
- 3) Then change the score of aleeza's first game from *89* to *200* and calculate the new average, assign it to the new variable `aleezaTeamAve2`, write a new condition (similar to the previous one) to compare `aleezaTeamAve2` to `laraTeamAve`.
- 4) Mary also plays basketball, and her team scored *200*, *134* and *105* points. Like before, log the average winner (`laraTeamAve`, `aleezaTeamAve2` or `maryTeamAve`) to the console, (in case 2 teams are tied for 1st place print this: _"....'s team and ....'s team are tied for first place with an average score of ...."_, in case all 3 teams are tied: _"All three teams are tied with an average score of ...."_ after filling the spaces with the actual teams' names.... )
- 5) Like before, change the score of mary's first game from *200* to *184* to generate different winners, assign the new average to `maryTeamAve2`, rewrite the condition, keeping in mind that there might be draws.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Team scores

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `laraTeamAve` variable exists |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `aleezaTeamAve` variable exists |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Value of `laraTeamAve` is the average of *116*, *94* and *123* |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Value of `aleezaTeamAve` is the average of *89*, *120* and *103* |

### 1. Winner message

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | Correct winner message is printed to the terminal, controlled by the condition |

### 3. New score for Aleeza's team

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | `aleezaTeamAve2` variable exists |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | 'Value of `aleezaTeamAve2` is the average of *200*, *120* and *103* |
| ![Status](../../blob/badges/.github/badges/main/status7.svg) | Winner message is printed to the terminal according to new score |

### 4. Mary's team

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status8.svg) | `maryTeamAve` variable exits |
| ![Status](../../blob/badges/.github/badges/main/status9.svg) | Value of `maryTeamAve` is average of *200*, *134* and *105* |
| ![Status](../../blob/badges/.github/badges/main/status10.svg) | Message on winner between `laraTeamAve`, `aleezaTeamAve2` and `maryTeamAve` is printed to the terminal |

### 5. New score for Mary's team

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status11.svg) | `maryTeamAve2` variable exists |
| ![Status](../../blob/badges/.github/badges/main/status12.svg) | Value of `maryTeamAve2` is average of *184*, *134* and *105* |
| ![Status](../../blob/badges/.github/badges/main/status13.svg) | `Message on winner between `laraTeamAve`, `aleezaTeamAve2` and `maryTeamAve2` is printed to the terminal |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-conditionals-pt3)


[//]: # (autograding info end)