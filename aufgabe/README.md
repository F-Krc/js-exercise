# Programming Basics - Exam 1

-  Work in the `main` branch
-  Commit your changes to the `solution.js` file and push them to your repository
-  You are allowed to research online, but write your own code - don't use AI
-  You are not allowed to receive help from classmates or teachers to complete the tasks
-  You are allowed to ask the teacher or assistant teacher to clarify a task (within reason)
-  Follow the instructions below to complete the test
-  **Important**: make sure that the _names_ of your variables/functions match the names in the instructions below
-  All your functions should return a value
-  Good luck!

### Conditional Algorithms

#### 1. Los or New?

Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.

##### Examples

```javascript
nameOfCity("New York"); // 'New York'
nameOfCity("newark"); // 'newark'
nameOfCity("London"); // 'The city name does not begin with Los or New'
```

#### 2. isDivisible?

Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false.

##### Examples

```javascript
isDivisible(1); // false
isDivisible(1000); // true
isDivisible(100); // true
```

#### 3. What's the weather?

Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_".

##### Example

```javascript
isRaining(true); // 'wet day - you need an umbrella'
```

### Loops

#### 1. Sequence

Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64`_. Concatenate each value to a string and return a string.

##### Example

```javascript
geometricalSequence(5); // '1 2 4 8 16'
geometricalSequence(10); // '1 2 4 8 16 32 64 128 256 512'
```

#### 2. Multiples

Create a function named "_multiplesOfThree_" and **use a loop** to return the first 'n' multiples of three: _`3 6 9 12 15 ...`_. Concatenate each value to a string and return a string. In the case of n < 1, the function should return "Invalid input".

##### Example

```javascript
multiplesOfThree(5); // '3 6 9 12 15'
multiplesOfThree(10); // '3 6 9 12 15 18 21 24 27 30'
```

### Math

#### 1. You've got the power

Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation.

##### Examples

```javascript
powerOf(3); // 27
powerOf(4); // 256
```

### Problem Solving

#### 1. How many?

Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string.

##### Examples

```javascript
vowelCount("hello"); // 2
vowelCount("test"); // 1
vowelCount("fbw"); // 0
```
