[![Statusübersicht-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](#results)
### Array Methode .filter

#### 1. Schreibe eine Funktion filterRange(arr, a, b), die ein Array arr erhält, nach Elementen mit Werten größer oder gleich a und kleiner oder gleich b sucht und ein Ergebnis als Array zurückgibt.

* Die Funktion sollte das Array nicht verändern. Sie sollte das neue Array zurückgeben.

Zum Beispiel:
```js
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)
```

#### 2. Schreibe eine Funktion filterRangeInPlace(arr, a, b), die ein Array arr erhält und daraus alle Werte außer denen entfernt, die zwischen a und b liegen. Der Test lautet: a ≤ arr[i] ≤ b.

* Die Funktion sollte nur das Array verändern. Sie sollte nichts zurückgeben.

Zum Beispiel:
```js
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]
```

[//]: # (autograding info start)
## Ergebnisse


### 1. Funktion filterBereich

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Funktion sollte nach Elementen suchen, deren Werte größer oder gleich a und kleiner oder gleich b sind, und ein Ergebnis als Array zurückgeben |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | Array sollte nicht verändert werden |

### 2. Funktion filterRangeInPlace

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | Die Funktion sollte ein Array arr erhalten und daraus alle Werte außer denen entfernen, die zwischen a und b liegen. |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | arr sollte geändert werden. |



[Ergebnisdetails](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-filter/actions)

### Debugging deines Codes
> [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
#### 1. Tests lokal ausführen
- Führe `npm install` aus
- Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.

#### 2. Überprüfen der Testausgabe auf GitHub
- Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-filter/actions)
- Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
- Klicke auf "Autograding".
- Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
- Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
