/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10
*******************************************************************************/

function minMaxDifference(array){
  /* we have min and max containt the first elements so we can use them to
     compare to the next elements of the array */
  var min = array[0];
  var max = array[0];

  for (var i = 1; i < array.length; i++) {
    var num = array[i]; // the current element

    if (max < num) { // if num is greater than max, max gets the new num
      max = num;
    }

    if (min > num) { // if num is less than min, min get the new num
      min = num;
    }
  }

  var difference = max - min; // we subtract the max from the min

  return difference; // return the difference
}

// Well done. -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxDifference;
