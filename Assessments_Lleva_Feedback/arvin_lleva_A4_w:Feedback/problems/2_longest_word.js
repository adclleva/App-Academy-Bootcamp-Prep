/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  var words = sentence.split(' '); // we split the string into an array of words
  var longWord = null; // we have this variable be nothing

  for (var i = 0; i < words.length; i++) {
    var word = words[i]; // we get each word of the array

    if (longWord === null || longWord.length <= word.length) { // the lessthan equals would get the latest word that is the longest
      longWord = word; // longWord gets the word if the condition above is true
    }
  }

  return longWord;
}

// Nice job here. Great way of taking into considerations the ties as well. -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
