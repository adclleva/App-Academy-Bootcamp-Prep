/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
  var newSent = sentence.split(' ').join(''); // this is to take away the spaces and have all the characters in the string altogether

  for (var i = 0; i < newSent.length; i++) { // we iterate through the left and right of the new sentence string
    var leftMostEle = newSent[i]; // these elements start on the left
    var rightMostEle = newSent[newSent.length - 1 - i]; // these elements start on the right

    if (leftMostEle !== rightMostEle) { // if the left and right dont match
      return false; // we return false
    }
  }

  return true; // we return true if we iterated through most of the arrays
}

function isPalindromeSolA(sentence) {
  var noSpaces = sentence.split(' ').join(''); // takes away the spaces
  var reversed = '';

  for (var i = noSpaces.length - 1; i >= 0; i -= 1) { // starts from the end of the string
    var char = noSpaces[i]; // we get the current character of the string
    reversed += char; // we concatenate it into the reversed string
  }

  return reversed === noSpaces; // we return if it's true or false
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
