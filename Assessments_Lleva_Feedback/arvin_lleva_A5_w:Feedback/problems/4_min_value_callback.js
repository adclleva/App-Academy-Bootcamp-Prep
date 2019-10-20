/*******************************************************************************
Write a funtion minValueCallback(array, cb) that takes in an array of numbers and
a callback. The function should call `cb`, passing in the minimum number of the array.
`minValueCallback` should return the return value of `cb`. If the array is empty,
then pass `null` into `cb`.

Examples:

// Math.abs is a built in function to get the absolute value of anumber
var array1 = [-2, -7, 0, 8];
minValueCallback(array1, Math.abs); // => 7

// example cb
function double(n) {
  return n * 2
}
var array2 = [12, 9, 20, 13, 14];
minValueCallback(array2, double); // => 18
*******************************************************************************/
function findMinVal(array) { // this helper function finds the smallest number in the array
  var min = null;

  for (var i = 0; i < array.length; i++) { // we iterate through the array of numbers
    var num = array[i]; // this is the current number

    if (min === null || min > num) { // if min is null or if the current number is smaller than the min
      min = num; // the min gets the current num
    }
  }

  return min; // return the min
}

function minValueCallback(array, cb) {
  var min = findMinVal(array); // we obtain the minimum value through the helper function
  var result = cb(min); // we get the result of the call back function with the min value as parameters

  return result; // return the result
}

// Nice work on this solution, but I would give a similar ciriticism to the
// what I gave on your snake_to_camel solution. It would be better style
// to just return cb(min) on line 31 instead of breaking out this
// helper funciton below, although I do like that you are thinking to
// break out helper functions. -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minValueCallback;
