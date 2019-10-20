/*******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of `arr` for which the given callback
returns a truthy value.

Examples:

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
result1; // => [ 'BOOTCAMP', 'COOL' ]

var result2 = mySelect([1, 2, 4, 7, 8], isEven);
result2; // => [ 2, 4, 8 ]
*******************************************************************************/

function mySelect(arr, cb) {
  var newArr = []; // this new array is what we're going to return

  for (var i = 0; i < arr.length; i++) { // we iterate through the array
    var ele = arr[i]; // we get the current element

    if(cb(ele)) { // if the callback returns true // Make sure that you are passing the element, its index, and the array itself to this function like the problem is asking. -RM
      newArr.push(ele); // we push the element into the new array
    }
  }

  return newArr; // we return the new array
}

// Great work here, just missing out on one part of the solution as the problem
// asks for it. Take a look at my comment and you should be able
// to fix it up. -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = mySelect;
