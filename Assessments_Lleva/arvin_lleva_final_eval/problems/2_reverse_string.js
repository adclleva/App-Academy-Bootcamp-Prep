/**************************************************************************************
Write a function `reverseString(str)` that takes in a string and returns the given string
with its characters in reverse order.

Examples:

reverseString('taco');        // => 'ocat'
reverseString('hello world'); // => 'dlrow olleh'

Difficulty: Easy
*************************************************************************************/

function reverseString(str) {
  var revStr = ''; // this is our reverse string

  for (var i = str.length -1 ; i >= 0; i--) { // we start at the end of the array and iterate downwards
    var char = str[i]; // this will be the current number

    revStr += char; // we concatenate the character to the reverse string
  }

  return revStr; // we then return the reverse string
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = reverseString;
