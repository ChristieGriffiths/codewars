# Codewars Practice with Jest and Ruby Tests

## Overview

This repository contains a collection of Codewars katas implemented in JavaScript and tested using Jest. It also includes one Ruby kata with corresponding tests. The purpose of this repository is to practice Test Driven Development (TDD) and improve coding fluency through daily kata challenges.

## Requirements

To run the JavaScript tests, you need to have [Node.js](https://nodejs.org/) installed on your machine.

To run the Ruby tests, you need to have [Ruby](https://www.ruby-lang.org/en/) installed.

## Installation and Setup

1. Clone the "Codewars" repository from GitHub:

```bash
git clone https://github.com/your-username/Codewars.git
cd Codewars
```

## JavaScript Tests with Jest

### Running Jest Tests

To run the Jest tests for each JavaScript kata, follow these steps:

1. Navigate to the kata's folder:

```bash
cd Kata-Name
```

Replace "Kata-Name" with the name of the specific kata, such as "openOrSenior" or "parse."

2. Install the required dependencies:

```bash
npm install
```

3. Run the Jest tests:

```bash
npm test
```

### Description of JavaScript Katas

1. **openOrSenior**: Given an array of arrays representing members of a golf club, where each inner array contains two elements (age and handicap), the function `openOrSenior` classifies each member as "Senior" if they are 55 or older and have a handicap of 7 or less, otherwise, they are classified as "Open."

2. **parse**: The `parse` function takes a string containing characters "i," "o," "s," and "d" and performs corresponding operations. "i" increments a counter, "o" pushes the current counter value to the result array, "s" squares the counter, and "d" decrements the counter. The function returns the result array after processing the input string.

3. **evenOrOdd**: The `evenOrOdd` function takes a number as input and returns "Even" if it's even, and "Odd" if it's odd.

4. **maskify**: The `maskify` function takes a credit card number as input and replaces all characters with "#" except for the last four digits. The function returns the masked credit card number.

5. **persistence**: The `persistence` function calculates the multiplicative persistence of a number, which is the number of times you must multiply its digits until you reach a single digit.

6. **isValidWalk**: The `isValidWalk` function takes an array of directions ("n," "s," "e," or "w") and checks if the walk represents a valid sequence, meaning it starts and ends at the same point after exactly ten steps.

7. **validBraces**: The `validBraces` function takes a string containing braces ("(" and ")"), brackets ("[" and "]"), and curly brackets ("{" and "}") and checks if the string has a valid combination of braces.

8. **toWeirdCase**: The `toWeirdCase` function takes a string and converts it to "Weird Case," where each word's even-indexed characters are in uppercase and odd-indexed characters are in lowercase.

9. **alphabetPosition**: The `alphabetPosition` function takes a string and returns a space-separated sequence of numbers, representing the alphabetical position of each letter (a=1, b=2, ..., z=26). Non-alphabet characters are ignored.

10. **addBinary**: The `addBinary` function takes two decimal numbers as input and returns their sum in binary format.

11. **toCamelCase**: The `toCamelCase` function takes a string with hyphens or underscores as word separators and converts it to camelCase.

12. **moveZeros**: The `moveZeros` function takes an array of numbers and moves all the zeros to the end while maintaining the relative order of other non-zero elements.

13. **snail**: The `snail` function takes a 2D array and returns the elements of the array in a "snail" pattern, starting from the top left and moving clockwise.

14. **uniqueInOrder**: The `uniqueInOrder` function takes an iterable (either a string or an array) and returns a list of items in the same order as the original but with consecutive duplicates removed.

## Ruby Tests

### Running Ruby Tests

To run the Ruby tests for the corresponding kata, follow these steps:

1. Navigate to the Ruby kata folder:

```bash
cd Ruby-Kata-Name
```

Replace "Ruby-Kata-Name" with the name of the specific Ruby kata, such as "duplicate_count."

2. Run the Ruby tests:

```bash
ruby tests.rb
```

### Description of Ruby Kata

1. **duplicate_count**: The `duplicate_count` function takes a string as input and counts the number of characters that appear more than once (case insensitive). The function returns the count of duplicated characters.