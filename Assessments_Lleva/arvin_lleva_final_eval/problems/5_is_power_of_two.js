/**************************************************************************************
Write a function `isPowerOfTwo(num)` that takes in a number and returns a boolean indicating
whether or not the number is a power of two.

The powers of two are 1, 2, 4, 8, 16, 32, 64, ... etc

Examples:

console.log(isPowerOfTwo(1));  // => true
console.log(isPowerOfTwo(32)); // => true
console.log(isPowerOfTwo(12)); // => false
console.log(isPowerOfTwo(33)); // => false
console.log(isPowerOfTwo(-8)); // => false

Difficulty: Medium
*************************************************************************************/

function isPowerOfTwo(num) {
  if (num < 1) { // if num is less that one
    return false; //we return false
  }

  var i = num; // we have i obtain the num value

  while (i > 0) { // while i is more than zero
    if (i === 1) { // if i equals one
      return true; // we return true
    }

    i /= 2; // we divide i by two
  }

  return false; // we return false if i doesn't end up being one
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = isPowerOfTwo;
