/*******************************************************************************
Write a function myIndexOf(array, ele) that takes an array and an element.
Return the index of the element in the array, or -1 if it doesn't exist. Assume
the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

myIndexOf([1,2,3,4,5], 5) => 4
myIndexOf(["a", "b", "c"], "a") => 0
myIndexOf(["a", "b", "c"], "d") => -1
*******************************************************************************/

function myIndexOf(array, ele){
  for (var i = 0; i < array.length; i++) { // to iterate through the array
    var currentEle = array[i]; // current ele

    if (currentEle === ele) { // returns the index where the elements matches
      return i;
    }
  }

  return -1; // returns -1 if nothing is found
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myIndexOf;
