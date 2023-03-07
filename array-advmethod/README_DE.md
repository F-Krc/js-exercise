# Map, Filter, Reduce

* Arbeite mit der Datei `index.js`, die in diesem Repository bereitgestellt wird.

#### 1. Get total orders
* Gib die Gesamtzahl der Bestellungen zurück.

```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
```

#### 2. Inkrementieren um 1
```javascript 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
```
* Erstelle eine Funktion, die jedes Element im `arrayOfNumbers` um 1 erhöht. Gib ein neues Array mit geänderten Elementen zurück.

#### 3. Evens filtern
* Erstelle eine Funktion namens filterEvens, die ein Array filtert und nur gerade Zahlen zurückgibt. Die Funktion sollte ein Array mit Zahlen als Argument erhalten und keine Schleife verwenden.

* Beispiele:
```javascript
filterEvens([1,2,3,11,12,13]); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
```

#### 4. Freunde filtern
* Erstelle aus einem Array eine Funktion, die das Array auf der Grundlage einer Suchanfrage filtert.

* Beispiele

```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
```

#### 5. Summe
* Schreibe eine Funktion namens sum, die die Methode reduce benutzt, um eine Reihe von Zahlen zu summieren.

* Beispiele:
```javascript
sum([1,2,3,4,5]); //returns 15
sum([6,7,7]); //returns 20
```

#### 6. Quadratwurzel
* Finde die Quadratwurzel jedes Elements in einem Array von Zahlen.

[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnisabzeichen](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-datastructure-advarray/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/PB-datastructure-advarray/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/PB-datastructure-advarray/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
