/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  var sentArr = sentence.split(' ');
  var newSentence = [];

  for(var i = sentArr.length - 1; i >= 0; i--) { //starts at the last element of the array
    var word = sentArr[i];
    newSentence.push(word);
  }

  newSentence = newSentence.join(' '); // this returns the array and combines them into a string with a space in between each element
  return newSentence;
// Unnecessary space here. -RM
}

// Good job. -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence;
