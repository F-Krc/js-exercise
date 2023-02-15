### Funktion Rückgabe

## 1. Alter prüfen
* Schreibe eine Funktion namens `checkAge`, die true zurückgibt, wenn die übergebene Zahl größer als 18 ist.
    Andernfalls gibt sie false zurück:
    ```js
  checkAge(10) → false;
  checkAge(19) → true;
  checkAge(18) → false;
 
    ```

## 2. Kleinere Zahl
* Schreibe eine Funktion `min(a,b)`, die die niedrigere von zwei Zahlen zurückgibt.

    Zum Beispiel:
    ```js
        min(2, 5) → 2
        min(3, -1) → -1
        min(1, 1) → 1
    ``` 

## 3. In der Potenz von
* Schreibe eine Funktion `pow(x,n)`, die x in der Potenz n zurückgibt. Oder anders ausgedrückt: Sie multipliziert x n-mal mit sich selbst und gibt das Ergebnis zurück.
    ```js
    pow(3, 2) (3 * 3) → 9
    pow(3, 3) (3 * 3 * 3) → 27
    pow(1, 100) (1 * 1 * ...* 1) → 1
    ```


# Zusatz
Wird von codebuddy ignoriert, wir machen aber dennoch die Lösung zusammen

## 1. Max von Array
Schreibe eine Funktion `maxOfArray(arr)`, die ein Array mit einer beliebigen Anzahl von Zahlen als Argumente annimmt und die größte Zahl zurückgibt. Verwende keine Methoden wie Math.max. Verwende stattdessen eine for-Schleife.

Beispiel:
```
const numbers = [2, 8, 9, 5, 1, 7, 4, 6, 10, 3];
const maxNumber = maxOfArray(numbers);
console.log(maxNumber); => 10
```


## 2. Gerade oder Ungerade
Schreibe eine Funktion `evenOrOdd(num)`, die eine Zahl als Argument annimmt und "gerade" zurückgibt, wenn die Zahl gerade ist, und "ungerade", wenn die Zahl ungerade ist.

## 3. Fakultät
Schreibe eine Funktion `factorial(num)`, die eine Zahl als Argument annimmt und die Fakultät dieser Zahl zurückgibt.

## 4. Längstes Wort
Schreibe eine Funktion `longestWord(sentence)`, die einen ganzen Satz als String als Argument annimmt und das längste Wort dieses Satzes zurückgibt.

Beispiel:
`longestWord("Ich bin ein Satz und irgendein Wort wird das längste sein"); // => returned "irgendein"`

## 5. Special Palindrom
Schreibe eine Funktion namens `isPalindrome`, die einen String als Argument annimmt und true zurückgibt, wenn dieser String ein Palindrom ist, und false, wenn er es nicht ist. Ein Palindrom ist ein Wort oder ein Satz, der vorwärts und rückwärts dasselbe ist.

Die Palindrom Funktion hat aber eine Besonderheit: Sie mag den Buchstaben "ö" nicht. Das heißt, sobald das Wort den Buchstaben "ö" (groß oder klein) enthält, gibt sie folgenden String zurück: "Pfui, ein 'w'. Ich verweigere die Arbeit".
(Sinn: es kommt in der Realität oft vor, dass du einen String zunächst nach verbotenen Zeichen untersuchst, bevor du etwas mit ihm machst)

Beispiel:
```
isPalindrome("racecar") → true
isPalindrome("hello") → false
isPalindrome("madam") → true
isPalindrome("AwaaWa") → "Pfui, ein 'ö'. Ich verweigere die Arbeit"
```
