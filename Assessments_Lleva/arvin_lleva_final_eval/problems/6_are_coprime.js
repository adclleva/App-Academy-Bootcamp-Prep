/**************************************************************************************
Write a function `areCoprime(num1, num2)` that takes in two numbers and returns a boolean
indicating whether or not the given numbers are coprime. Two numbers are said to be coprime
if the only common factor between them is the number 1.

For example,
  16 and 25 are coprime because 1 is the only number that divides both of them
  14 and 21 are not coprime because 7 divides both of them

Examples:

areCoprime(16, 25); // => true
areCoprime(15, 14); // => true
areCoprime(14, 21); // => false
areCoprime(15, 6);  // => false
areCoprime(15, 5);  // => false

Difficulty: Medium
*************************************************************************************/

function areCoprime(num1, num2) {
  for (var i = num1; i > 1; i--) { // we can use either num1 or num2 since we get the same result either way
    if (num1 % i === 0 && num2 % i === 0) { // if num1 and num2  are divisble by i
      return false; // we return false
    }
  }

  return true; // we return true if it goes through the tests above
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = areCoprime;
