// 5/5 specs passing
// find my comments with "-MS"
// Your code and logic are perfect, you really did a great job on this assessment
// The commments are very helpful both for the reader of the code and i think
// for yourself to think through what you've written  - MS

/*******************************************************************************
Write a function `myMap(arr, cb)` that accepts an array and a callback. It should
pass each element, its corresponding index, and the array itself to the callback.
Do not use the built in `Array.prototype.map` method. It should return an array
where each element is the return value of the callback given the element in the
corresponding position. See the examples.

Examples:

myMap([9, 25, 100, 36, 81], Math.sqrt); // => [ 3, 5, 10, 6, 9 ]

function multiply(num1, num2) {
  return num1 * num2;
}

myMap([2, 4, 6, 6], multiply); // => [ 0, 4, 12, 18 ]
*******************************************************************************/

function myMap(arr, cb) {
  var newArr = []; // this is the array that we are going to return

  for (var i = 0; i < arr.length; i++) { // we iterate through the input array
    var ele = arr[i]; // get each element of the array
    var newNum = cb(ele, i, arr); // the new number is the result that we'll get from the call back functions

    newArr.push(newNum); // we push each element to the array that we're going to return
  }

  return newArr; // return the new array
}

// Great code and great comments. I can see you have a good understanding of what
// to pass into the call back and what to push into the array. Great job! - MS

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myMap;
