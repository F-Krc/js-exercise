# forEach() und map()

* Arbeite mit der Datei `solution.js`, die in diesem Repository bereitgestellt wird.

**1.** Schreibe eine Funktion namens `doubleValues`, die ein Array annimmt und ein neues Array mit den doppelten Werten in dem Array zurückgibt

Beispiele:
```
doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
```

**2.** Schreibe eine Funktion namens `onlyEvenValues`, die ein Array annimmt und ein neues Array zurückgibt, das nur die geraden Werte des Arrays enthält, das der Funktion übergeben wurde.

Beispiele:
```
onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]
```

**3.** Schreibe eine Funktion namens `showFirstAndLast`, die ein Array von Strings akzeptiert und ein neues Array zurückgibt, das nur das erste und letzte Zeichen jedes Strings enthält

Beispiele:
```
showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
```

**4.** Schreibe eine Funktion namens `addKeyAndValue`, die ein Array von Objekten, einen Schlüssel und einen Wert akzeptiert und dann das an die Funktion übergebene Array mit dem neuen Schlüssel und Wert für jedes Objekt zurückgibt

Beispiele:
```
addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
```

**5.** Schreibe eine Funktion namens `vowelCount`, die eine Zeichenkette annimmt und ein Objekt zurückgibt, dessen Schlüssel der Vokal ist und dessen Wert die Anzahl der Vokale in der Zeichenkette angibt. Diese Funktion sollte Groß- und Kleinschreibung nicht berücksichtigen, sodass sowohl Klein- als auch Großbuchstaben gezählt werden.

Beispiele:
```
vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
```

[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnisabzeichen](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-datastructure-forEach-map/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/PB-datastructure-forEach-map/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/PB-datastructure-forEach-map/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
