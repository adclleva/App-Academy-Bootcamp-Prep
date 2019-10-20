/*******************************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if `number`
is prime or not.

Examples:

isPrime(-7): // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false
*******************************************************************************/

function isPrime(number) {

  if(number < 2) { // numbers less than 2 are not prime
    return false;
  }

  for(var i = 2; i < number; i++) { // this iterates to check if there are any values that are divisible by the number besides 1 and itself
    if(number % i === 0) { // returns false if there are other values that are divisible by the number
      return false;
    }
  }
  return true; //returns true if the other conditions don't go through
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPrime;
