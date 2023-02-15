# BMI-Rechner als Funktion
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)

## 1. Berechne den BMI
- Erstelle eine Funktion namens `calculateBMI`.
- Sie benötigt zwei Argumente:
  - `weight` (number) and
  - `height` (number)
- Sie gibt den BMI-Wert zurück, der wie folgt berechnet wird:   
BMI = `weight / ( height / 100 * height / 100 )`
* Achte darauf, die Ausgabe auf 2 Dezimalstellen zu runden.

Beispiel:
`console.log(calculateBMI(80,175))` => 26.12

## 2. BMI vergleichen
- Erstelle eine Funktion namens `whoIsBiggest`
- Sie benötigt vier Argumente:
  - zwei Namensstrings und
  - zwei BMI-Zahlen
- Sie gibt den Namen der größeren Person zurück  

Beispiel:  
`whoIsBiggest("Frank", "Mark", 26.72, 28.33)` => "Mark"

**Bonus**

- Schreibe die Funktion **whoIsBiggest** so um (erzeuge dazu einfach eine zweite Funktion namens **whoIsBiggest1**), dass sie sechs Argumente benötigt: `Person 1 name`, `Person 2 name`, `Person 1 weight`, `Person 2 weight`, `Person 1 height`, `Person 2 height`
- Die Funktion **whoIsBiggest** sollte die Funktion **calculateBMI** verwenden, um den BMI für beide Personen zu berechnen, bevor sie diese vergleicht und den Namen der Person mit dem größeren BMI zurückgibt (das bedeutet, dass im globalen Bereich nur die Funktion **whoIsBiggest** aufgerufen wird)

Beispiel:
`whoIsBiggest1('Frank', 'Mark', 80, 75, 175, 176)` => "Frank" 

## Bonus Bonus
Für die Schnellen unter euch, damit keine Langweile entsteht. Diese Aufgabe werden wir voraussichtlich NICHT durchgehen. Code Buddy ignoriert sie übrigens auch.

1. BMI-Klassifizierung: 
Erstelle eine Funktion mit dem Namen "BMI_Classification", die ein Argument (BMI-Zahl) annimmt und einen String zurückgibt, der die BMI-Klassifikation nach den Kategorien der Weltgesundheitsorganisation (WHO) angibt. Du musst im Internet schauen, wie die Klassifikation aktuell aussieht. Sie sollte ungefähr wie folgt lauten:

- Unter 18,5 ist Untergewicht
- 18,5 - 24,9 ist Normalgewicht
- 25 - 29,9 ist Übergewicht


2. Finde den durchschnittlichen BMI:
Erstelle eine Funktion namens `findAverageBMI`, die den durchschnittlichen BMI von mehreren Personen berechnet. Die Funktion sollte ein Array von Personen aufnehmen, wobei jede Person durch ein Array mit ihrem Gewicht und ihrer Größe repräsentiert wird

Beispiel:
```
let people = [
  [70, 170],
  [80, 180],
  [75, 175]
];
function findAverageBMI(people) { ... }

console.log(findAverageBMI(people)); // =>"24.47"
```



[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Calculate BMI

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `calculateBMI` function exists |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | function accepts 2 arguments |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | function returns the BMI of a person |

### 2. Compare BMIs

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | `whoIsBiggest` fuction exists |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | function accepts 4 arguments |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | function returns name of the person with the highest BMI |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-functions-revisit-bmi-calculator)
