/*******************************************************************************
Write a function sum2Darray(array) that takes in a 2-Dimensional array of numbers.
The function should return the total sum of all numbers in the 2D array.

Examples:

var arr1 = [
  [1,2,3],
  [4,5],
  [6],
];
sum2DArray(arr1); // => 21

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
sum2DArray(arr2); // => 3
*******************************************************************************/

function sum2DArray(array) {
  var sum = 0; // this will be the variable that'll we'll be returning

  for (var i = 0; i < array.length; i++) { // we iterate through the arrays of arrays
    var innerArr = array[i]; // we get an inner array

    for (var j = 0; j < innerArr.length; j++) { // we iterate through the inner array
      var num = innerArr[j]; // we obtain the current number

      sum += num; // we continue to add each numer to the sum
    }
  }

  return sum; // we return the sum
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sum2DArray;
