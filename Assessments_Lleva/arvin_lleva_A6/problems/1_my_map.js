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

function myMapSolA(arr, cb) {
  var mapped = [];

  for (var i = 0; i < arr.length; i++) {
    mapped.push(cb(arr[i], i, arr));
  }

  return mapped;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myMap;
