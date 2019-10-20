/*******************************************************************************
Write a function disemvowel(string) that takes in a string and returns the
string with all vowels removed.

Examples:

disemvowel('bootcamp'); // => 'btcmp'
disemvowel('PREP'); // => 'PRP'
disemvowel('hello world'); // => 'hll wrld'
*******************************************************************************/
function isVowel(char) { // this helper function checks if the character is a vowel
  var vowels = 'aeiouAEIOU'.split(''); // this is the array of vowels

  if (vowels.indexOf(char) !== -1) { // if the character is in the vowels array
    return true; // we return true
  } else { // if not
    return false; // we return false
  }
} // good helper function  - MS

function disemvowel(string) {
  var newStr = ''; // this is the new string that we'll return

  for (var i = 0; i < string.length; i++) { // we iterate through each characters of the string
    var char = string[i]; // this is the current character of the string

    if (isVowel(char) === false) { // if the current character is not a vowel
      newStr += char; // we concatenate the string to the new string
    }
  } // good job - MS

  return newStr; // we then return the new string
}

// Great job, your code is very explicit and a joy to read. No syntax errors
// what so ever - MS

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = disemvowel;
