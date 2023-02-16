# Parametrik
[![Statusübersicht-Badge](../../blob/badges/.github/badges/main/badge.svg)](#-Ergebnisse)


Erledige die folgenden Aufgaben:

1. Vervollständige die Funktion in [`twofer.js`](./twofer.js) so, dass sie "Two for me and one for you" zurückgibt, wenn keine Argumente übergeben werden.

Beispiel:
```
console.log(twofer("Fran")) ---> "Two for me and one for Fran"
console.log(twofer()) ---> "Two for me and one for you" 
```
    
1. Ergänze die Funktion in [`exponent.js`](./exponent.js) so, dass sie auch dann die Potenz einer 
Zahl berechnet, auch wenn das Argument `exp` nicht übergeben wird. Der Standardwert für `exp` sollte auf 2 gesetzt werden.
```
console.log(exponent(3, 3)) ---> 27
console.log(exponent(3)) ---> 9
```

1. Erstelle eine Funktion in [`howManyArgs.js`](./howManyArgs.js), die die Gesamtzahl der ihr übergebenen Argumente zurückgibt.
```
console.log(howManyArgs()) ---> 0 
console.log(howManyArgs(1, false, "hello")) ---> 3
console.log(howManyArgs("besser")) ---> 1
```

1. Erstelle eine Funktion in [`sum.js`](./sum.js), die eine beliebige Anzahl von Zahlen annimmt und die Summe ihrer Addition zurückgibt
```
console.log(sum(1)) ---> 1
console.log(sum(1, 15)) ---> 16
`console.log(sum(25, 25, 20)) ---> 70
```

1. **Bonus:** Erstelle eine Funktion in [`average.js`](./average.js), die eine beliebige Anzahl von Zahlen akzeptiert und deren Mittelwert zurückgibt.
```
console.log(average(0)) ---> 0
console.log(average(1, 2)) ---> 1.5
console.log(average(1, 3, 6, 10)) ---> 5
console.log(average(12, 14, 16)) ---> 14
```

**Hinweis:** Du kannst gerne weitere `console.log()`s in jede Datei einfügen, um deine Funktion weiter zu testen. Aber bitte lösche nicht die vorhandene `console.log` oder benenne die Funktion um.

**Beachte**: Codebuddy funktioniert hier eventuell nicht richtig, sorry!
