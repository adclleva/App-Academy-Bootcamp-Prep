// 4/4 specs passing
// find my comments wiht "-MS"
// Excellent job on this assessment, your code is highly readable
// especially with the comments. Keep it up! - MS


/*******************************************************************************
Write a function numberPrimes(n) that takes in a number, `n`. The function should
return the number of prime numbers less than or equal to `n`. For example,
there are 4 prime numbers less that or equal to 10: 2, 3, 5, 7.

Examples:

numberPrimes(10); // => 4
numberPrimes(12); // => 5
numberPrimes(20); // => 8
numberPrimes(100); // => 25
*******************************************************************************/
function isPrime(num) { // this is a helper function to find the prime numbers
  if (num < 2) { // if the number is less than two
    return false; // return false
  }

  for (var i = 2; i < num; i++) { // we iterate through each number starting from 2 until the number
    if (num % i === 0) { // if the number is divisible by i
      return false; // we return false
    }
  }

  return true; // if all else isnt true, we return true
} // great job building out isPrime, great comments - MS

function numberPrimes(n) {
  var primeCounter = 0; // we initialize the prime counter to 0

  for (var i = 0; i <= n; i++) { // we iterate through each number starting from 0 to and up to the number
    if (isPrime(i)) { // if the number is prime
      primeCounter += 1; // we increase the counter by one
    } // good logic - MS
  }

  return primeCounter; // we return the prime counter
}

// Great job on this solution and great comments. Good job using a helepr function
// in order to keep your code clean and readable - MS

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numberPrimes;
