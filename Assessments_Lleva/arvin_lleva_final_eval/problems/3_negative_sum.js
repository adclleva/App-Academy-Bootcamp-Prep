/**************************************************************************************
Write a function `negativeSum` that takes in an array of numbers and returns a number
representing the sum of all negative numbers in the given array.

Examples:

negativeSum([-3, 12, -5, -2, 3]); // => -10
negativeSum([2, 1, 7]);           // => 0

Difficulty: Easy
*************************************************************************************/

function negativeSum(arr) {
  var sum = 0; // we start the sum to zero

  for (var i = 0; i < arr.length; i++) { // we iterate through each number
    var num = arr[i]; // this is the current number

    if (num < 0) { // if the number is less than zero
      sum += num; // we add the number to the sum
    }
  }

  return sum; // we return the sum
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = negativeSum;
