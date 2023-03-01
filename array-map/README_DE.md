### Array Methode .map

#### 1. Schreibe die Funktion camelize(str), die Bindestrich-getrennte Wörter wie "my-short-string" in camel-cased "myShortString" umwandelt.

* Das heißt: Alle Bindestriche werden entfernt, jedes Wort nach dem Bindestrich wird großgeschrieben.

Beispiele:
```js
console.log(camelize("background-color")) == 'backgroundColor';
console.log(camelize("list-style-image")) == 'listStyleImage';
console.log(camelize("-webkit-transition")) == 'WebkitTransition';
``` 

#### 2. Du hast ein Array von Benutzerobjekten, jedes hat einen Namen, einen Nachnamen und eine ID.

* Schreibe den Code, um daraus ein weiteres Array mit Objekten mit id und fullName zu erstellen, wobei fullName aus vorname und nachname generiert wird.

Zum Beispiel:
```js
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */


/* usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith
``` 
* Du musst also ein Array von Objekten auf ein anderes mappen. Versuche es hier mit =>. Es gibt einen kleinen Haken.

[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnisabzeichen](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-map/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-map/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-map/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
