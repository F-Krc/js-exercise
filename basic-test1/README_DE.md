# Test - Grundlagen der Programmierung

## Test Anweisungen

-  Arbeite im `main` Branch.
-  Arbeite in der Datei `solution.js` und pushe die Änderungen in deinem Repository
-  Befolge die folgenden Anweisungen, um den Test abzuschließen. **Wichtig**: Achte darauf, dass die Namen deiner Variablen/Funktionen mit den Namen in den folgenden Anweisungen übereinstimmen.
-  Alle deine Funktionen sollten einen Wert zurückgeben.
-  Viel Erfolg!

### Konditionale Algorithmen

#### 1. Los oder New?

Erstelle eine Funktion namens "nameOfCity". Wenn eine übergebene Zeichenkette mit "Los" oder "New" beginnt, gibt sie die vollständige Zeichenkette zurück. Wenn nicht, gib "The city name does not begin with Los or New" zurück. Die Funktion sollte keinen Unterschied wischen **Groß- und Kleinschreibung** machen.

##### Beispiele

```javascript
nameOfCity("New York"); // 'New York'
nameOfCity("newark"); // 'newark'
nameOfCity("London"); // 'The city name does not begin with Los or New'
```

#### 2. isDivisible?

Erstelle eine Funktion namens "isDivisible". Die Funktion sollte eine ganze Zahl als Argument annehmen. Wenn die ganze Zahl durch 100 teilbar ist, wird `true` zurückgegeben. Wenn nicht, gib `false` zurück.

##### Beispiele

```javascript
isDivisible(1); // false
isDivisible(1000); // true
isDivisible(100); // true
```

#### 3. Wie ist das Wetter?

Verwende einen **ternary operator**, um diese Aufgabe zu lösen. Erstelle eine Funktion namens "isRaining". Wenn `true` übergeben wird, gibt sie "wet day - you need an umbrella" zurück. Wenn `false` übergeben wird, gibst du "dry day - leave your umbrella at home" zurück.

##### Beispiel

```javascript
isRaining(true); // 'wet day - you need an umbrella'
```

### Schleifen

#### 1. Sequenz

Erstelle eine Funktion mit dem Namen "geometricalSequence" und **verwende eine Schleife**, um die folgende Folge zurückzugeben: `1 2 4 8 16 32 64`. Verkette alle Werte zu einem String und gib diesen zurück.

##### Beispiel

```javascript
geometricalSequence(5); // '1 2 4 8 16'
geometricalSequence(10); // '1 2 4 8 16 32 64 128 256 512'
```

#### 2. Vielfaches

Erstelle eine Funktion namens "multiplesOfThree" und **benutze eine Schleife**, um die ersten 'n' Vielfachen von drei zurückzugeben: `3 6 9 12 15 ...`. Verkette alle Werte zu einem String und gib diesen zurück. Falls n < 1 ist, dann soll die Funktion "Invalid input" zurückgeben.

##### Beispiel

```javascript
multiplesOfThree(5); // '3 6 9 12 15'
multiplesOfThree(10); // '3 6 9 12 15 18 21 24 27 30'
```

### Mathe

#### 1. Du hast die Macht

Erstelle eine Funktion namens "powerOf", die eine ganze Zahl als Argument annimmt und sie als Potenz von sich selbst zurückgibt. Du solltest **eine Methode des Math-Objekts** verwenden, um die Berechnung durchzuführen.

##### Beispiele

```javascript
powerOf(3); // 27
powerOf(4); // 256
```

### Problemlösung

#### 1. Wie viele?

Erstelle eine Funktion namens "vowelCount", die eine Zeichenkette als Argument annimmt. Prüfe, wie viele Vokale (A, a, E, e, I, i, O, o, U, u) die Zeichenkette enthält, falls vorhanden. **Gebe die Anzahl der Vokale** der Zeichenkette zurück.

##### Beispiele

```javascript
vowelCount("hello"); // 2
vowelCount("test"); // 1
vowelCount("fbw"); // 0
```
