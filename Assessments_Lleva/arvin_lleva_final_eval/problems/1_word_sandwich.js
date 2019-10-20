/**************************************************************************************
Write a function `wordSandwich(outerWord, innerWord)` that takes in two strings and
returns a string representing a word sandwich. See the examples below.

Examples:

wordSandwich('bread', 'cheese');  // => 'BREADcheeseBREAD'
wordSandwich('BREAD', 'CHEESE');  // => 'BREADcheeseBREAD'
wordSandwich('HeLLo', 'worLD');   // => 'HELLOworldHELLO'

Difficulty: Easy
*************************************************************************************/

function wordSandwich(outerWord, innerWord) {
  var sandwichStr = ''; // this is our "sandwhich" string
  var outerStr = outerWord.toUpperCase(); // this will be the outside of the string which will be upper case
  var innerStr = innerWord.toLowerCase(); // this will be the inside of the string which will be lower case

  sandwichStr = outerStr + innerStr + outerStr; // we concatenate them to create the "sandwhich" string

  return sandwichStr; // we return the sandwhich string
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = wordSandwich;
