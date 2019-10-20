/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
*******************************************************************************/
function isPrime(num) { // this is the helper function to check if the number is prime
  if (num < 2) { // if the number is less than 2
    return false; // we return false
  }

  for (var i = 2; i < num; i++) { // we iterate from 2 until the number
    if (num % i === 0) { // if the number is divisible by i
      return false; // we return false
    }
  }

  return true; // we return true if the other cases aren't true
}

function previousPrime(num) { // this helper function is to give the previous prime number from the current number
  if (num <= 2) { // if the number is less than or equal to 2
    return null; // we return null
  }

  for (var i = num - 1; i >= 0; i--) { // we start from the one less than the number and increment down until we reach 0
    if (isPrime(i)) { // if the number is prime
      return i; // we return prime
    }
  }
}

function previousPrimeArray(array) {
  var prevPrimeArr = []; // this is the array that we'll return

  for (var i = 0; i < array.length; i++) { // we iterate though each number
    var num = array[i]; // we get the current number

    if (isPrime(num)) { // if the current number is prime
      var prevPrimeNum = previousPrime(num); // we get the previous prime value

      prevPrimeArr.push(prevPrimeNum); // we push the previous prime value into the end of the array that we'll return
    } else { // if not prime
      prevPrimeArr.push(num); // we just push the current number into the back of the return array
    }
  }

  return prevPrimeArr; // we return the previous prime numbers array
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
