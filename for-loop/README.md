# Programming Basics: For Loops
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


**write your answers in solution.js**

These exercises are designed for practising "for" loops. Print all your results to the console.

## Task 1 - Addition

Write a program to add up the numbers from 1 up until 20.

At the end, output the result to the console.

Expected output:

```plaintext
210
```

## Task 2 - There are i bottles of beer on the wall

Write a program that iterates over the numbers from 1 to 5.

At each iteration, output a message to the console as follows:

```plaintext
There is 1 bottle of beer on the wall
There are 2 bottles of beer on the wall 
There are 3 bottles of beer on the wall 
...
```

## Task 3 - The odd/even reporter

Write a program that iterates over the numbers from 0 to 20.

At each iteration, output a message to the console that says if a number is `even` or `odd`.

Expected output:

```plaintext
0 is even
1 is odd
2 is even
3 is odd
4 is even
5 is odd
...
```

## Task 4  - Multiplication Table of 9

Write a program that iterates over the integers from 0 to 10.

At each iteration, multiply the current number by 9 and output a message to the console showing the multiplication and its result.

Expected output:

```plaintext
0 * 9 = 0
1 * 9 = 9
2 * 9 = 18
3 * 9 = 27 
...
```

### Task 4.1 - Multiplication tables from 1 to 10

Write a program similar to the `Task 4` above, but this time use a nested for loop to show all the multiplication tables for every number from 1 to 10.

Expected result:

```plaintext
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
...
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
...
...
...
10 * 1 = 10 
10 * 2 = 20 
10 * 3 = 30 
```

In the end, you should have 100 lines output to the console.

## Task 5 - Fizz Buzz

Write a program that iterates over the integers from 1 to 100.

At each iteration it should output to the console:

- `Fizz`, if the current number is a multiple of 3
- `Buzz`, if the current number is a multiple of 5
- `FizzBuzz`, if the current number is a multiple of both 3 and 5
- the number itself in all the other cases

Expected output:

```plaintext
1
2
Fizz
4
Buzz
...
```

## Task 6 - Sum of Multiples

Write a program to calculate the sum of all the numbers from 1 up to 1000 (1000 included) that are multiples of both 3 and 5.

Expected output:

```plaintext
33165
```

## Extra tasks

If you are done with the tasks above, try using loops to obtain the different outputs below.

In some cases, you might need to write nested loops.

### Extra task 1

```plaintext
100
200
300
400
500
600
700
800
900
1000
```

### Extra task 2

```plaintext
0
2
4
6
8
10
```

### Extra task 3

```plaintext
3
6
9
12
15
```

### Extra task 4

```plaintext
9
8
7
6
5
4
3
2
1
0
```

### Extra task 5

```plaintext
1
1
1
2
2
2
3
3
3
4
4
4
```

### Extra task 6

```plaintext
0
1
2
3
4
0
1
2
3
4
0
1
2
3
4
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. Addition

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | The sum of the numbers 1 to 20 must be printed in the terminal |

### 2. Bottles on the Wall

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `There are i bottles of beer on the wall` must be printed 5 times in the terminal where i equals each number from 1 to 5 |

### 3. Odd/Even

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Each number between 0 and 20 must be printed in the terminal using the correct form ('i is even' or 'i is odd') |

### 4. Multiplication Tables

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Multiplication result of each number between 1 and 10 by 9 must be printed in the terminal |

### 5. Fizz Buzz

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | 'Fizz', 'Buzz' and 'FizzBuzz' are printed correct number of times |

### 6. Sum of Multiple

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | Sum of Multiples of 3 and 5 until 1000 is printed in the terminal |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-loops-for)


[//]: # (autograding info end)