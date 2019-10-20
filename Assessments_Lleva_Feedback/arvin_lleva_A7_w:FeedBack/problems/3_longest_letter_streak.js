/*******************************************************************************
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: A string of uppercase characters.
 - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])

The function should return the length of the longest streak of letters (consecutive
letters) in the `str` that are in the `searchLetters`.

Note that a streak does not have to consist of the same letter repeated, a streak
just needs to contains letters from the `searchLetters` array.

Examples:

longestLetterStreak("ACCA", ["C"]); // => 2
longestLetterStreak("YACCADCA", ["C", "A"]); // => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]); // => 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]); // => 5
*******************************************************************************/

function longestLetterStreak(str, searchLetters) {
  var longestStreak = 0; // we create a longest streak variable
  var currentStreak = 0; // this will be our current streak
  // great initial variables - MS
  for (var i = 0; i < str.length; i++) { // we iterate through each character
    var char = str[i]; // we get the character of that particular index
    var charMatchValue = searchLetters.indexOf(char); // we get the value if the character matches with one of the other characters in the search letters array

    if (charMatchValue !== -1) { // if the characters do match
      currentStreak += 1; // we increase the current streak by one

      if (longestStreak < currentStreak) { // if the current streak is larger than the longest streak
        longestStreak = currentStreak; // the longest streak will get the current streak
      } // good logic - MS
    } else { // if they dont match
      currentStreak = 0; // we bring the current streak back to zero
    } // good - MS
  }

  return longestStreak; // we then return the longest streak
}

// Grea job again. Similar to the last problem, breaking down the problem using several
// variables makes the solution easy to understand (and to form), great comments too - MS

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestLetterStreak;
