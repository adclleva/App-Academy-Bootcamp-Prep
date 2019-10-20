/******************************************************************************
Write a function firstAndLast(array) that takes in an array of numbers and
returns either:

- the sum of the first and last elements of the array if there is an even
 number of elements

- the difference between the first and last elements of the array if there is an
 odd number of elements.

You can assume the array contains at least one number.

Examples:

firstAndLast([1, 2, 3, 4]); // => 5
firstAndLast([1, 2, 3, 4, 5]); // => -4
firstAndLast([12, 5]); // => 17
firstAndLast([12]); // => 0
firstAndLast([7, 11, 3]); // => 4
*******************************************************************************/

function firstAndLast(array) {
  var firstEle = array[0]; // first element of the array
  var lastEle = array[array.length - 1]; // last element of the array

  if(array.length % 2 === 0) { // checks if the number of elements is even
    var sum = firstEle + lastEle; // add the first and last elements
    return sum;
    // Unnecessary space here. -RM
  } else { // else we assume the number of elements are odd
    var difference = firstEle - lastEle; // subtract the first and last elements
    return difference;
  }
}

// Nice work here on the logic. -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = firstAndLast;
