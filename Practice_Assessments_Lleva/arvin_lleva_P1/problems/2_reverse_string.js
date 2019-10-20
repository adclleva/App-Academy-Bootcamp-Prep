/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
  var arr = string.split('-');
  var newString = [];

  for(var i = arr.length - 1; i >= 0; i--){
    var word = arr[i];
    newString.push(word);
  }
  newString = newString.join('-');

  return newString;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseString;
