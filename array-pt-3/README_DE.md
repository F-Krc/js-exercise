#### Arbeiten Sie mit der in diesem Repository bereitgestellten Datei `solution.js`.

**1. Where Have My Four Letter Words Gone?**
Erstellen Sie eine Funktion, die ein `Array` von `strings` annimmt. Gib alle Wörter im Array zurück, die aus genau vier Buchstaben bestehen.

Beispiele:
 
* isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
* isVierBuchstaben(["Tomate", "Mais", "Kopfsalat"]) ➞ ["Mais"]
* isVierBuchstaben(["Hund", "Katze", "Reh"]) ➞ ["Reh"]

**2. Months.**
Erstellen Sie eine Funktion, die eine Zahl (von 1 bis 12) annimmt und den entsprechenden Monatsnamen als String zurückgibt.

Beispiele:
* monthName(3) ➞ "March"
* monthName(12) ➞ "December"
* monthName(6) ➞ "June"

**3. Verstärken Sie die Vielfachen von 4.**
Erstellen Sie eine Funktion, die eine ganze Zahl annimmt und ein Array von ganzen Zahlen zurückgibt, die von 1 bis zur angegebenen Zahl aufsteigend sind, wobei:

* Für jede Zahl im Array, die gleichmäßig durch 4 geteilt werden kann, wird diese Zahl um 10 multipliziert (d.h. es wird das 10-fache der Zahl zurückgegeben).
* Wenn die Zahl nicht gleichmäßig durch 4 teilbar ist, wird einfach die Zahl zurückgegeben.
* Die angegebene ganze Zahl ist immer gleich oder größer als 1.
* Die angegebene Zahl (die Zahl in den Parametern) einbeziehen.

Beispiele:
* amplify(4) ➞ [1, 2, 3, 40]
* amplify(3) ➞ [1, 2, 3]
* amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

**4. Eine ist nicht wie die anderen...**
Erstelle eine Funktion, die ein Array von Zahlen annimmt und die Zahl zurückgibt, die eindeutig ist.

Beispiele:
* unique([3, 3, 3, 7, 3, 3]) ➞ 7
* unique([0, 0, 0.77, 0, 0]) ➞ 0.77
* unique([0, 1, 1, 1, 1, 1, 1, 1, 1]) ➞ 0

**5. Wort-Ranking.**
Erstelle eine Funktion, die eine Reihe von Wörtern annimmt und das Wort mit der höchsten Punktzahl zurückgibt. Jeder Buchstabe eines Wortes erhält Punkte entsprechend seiner Position im Alphabet: a = 1, b = 2, c = 3, usw.
* Die zurückgegebene `string` sollte nur alphabetische Zeichen (a-z) enthalten.
* Die Groß- und Kleinschreibung in der zurückgegebenen `string` muss beachtet werden (siehe 4. Beispiel unten).

Beispiele:
* wordRank("The quick brown fox.") ➞ "brown"
* wordRank("Nancy is very pretty.") ➞ "pretty"
* wordRank("Check back tomorrow, man!") ➞ "tomorrow"
* wordRank("Today is Wednesday.") ➞ "Wednesday"

**6. c4n y0u r34d th15?**
Erstellen Sie eine Funktion, die eine `string` als Argument nimmt und eine kodierte (h4ck3r 5p34k) Version der Zeichenkette zurückgibt. **NB:** Damit Ihr Programm richtig funktioniert, sollte die Funktion alle 'a's durch 4, 'e's durch 3, 'i's durch 1, 'o's durch 0 und 's's durch 5 ersetzen.

Beispiele:
* code("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
* code("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
* code("become a coder") ➞ "b3c0m3 4 c0d3r"

## Bonusfragen

**1. Ist es symmetrisch?**
Erstellen Sie eine Funktion, die eine Zahl als Argument nimmt und `true oder false` zurückgibt, je nachdem, ob die Zahl symmetrisch ist oder nicht. **NB:** Eine Zahl ist symmetrisch, wenn sie genauso groß ist wie ihr Gegenteil.

Beispiele:
* isSymmetrical(7227) ➞ true
* isSymmetrical(12567) ➞ false
* isSymmetrical(44444444) ➞ true
* isSymmetrical(9939) ➞ false
* isSymmetrical(1112111) ➞ true

**2. snake_case ➞ camelCase**
Erstellen Sie eine Funktion mit dem Namen `toCamelCase()`, die eine einzelne string in `snake_case` in `camelCase` umwandelt. 

Beispiele:
* toCamelCase("hello_world") ➞ "helloWorld"
* toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"

**3. Schweinelatein-Übersetzung.** 
Erstellen Sie eine Funktion, die eine string von Wörtern nimmt und den ersten Buchstaben jedes Wortes an das Ende der Zeichenkette verschiebt und dann "ay" an das Ende des Wortes anfügt. Dies ist eine Grundform von "Schweinelatein". 

* Den ersten Buchstaben eines jeden Wortes an das Ende des Wortes verschieben.
* Hinzufügen von "ay" am Ende des Wortes.
* Wörter, die mit einem Vokal beginnen (A, E, I, O, U), werden stattdessen mit "way" angehängt.

**Zusätzliche Übung**
* Behalten Sie die korrekte Großschreibung bei, wie in den folgenden Beispielen.

Beispiele:
* pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
* pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
* pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."