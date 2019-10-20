/*******************************************************************************
Write a function longestBigram(sentence) that takes in a sentence string and returns
the longest bigram in the sentence. A bigram is a pair of consecutive words.
When returning the bigram, include the space between the words.
Assume there will be no punctuation. In the case of a tie, return the earlier bigram.

Examples:

longestBigram('measure twice cut once'); // => 'measure twice'
longestBigram("One must have a mind of winter"); // => 'must have'
longestBigram("go home to eat"); // => 'go home'
longestBigram("his last assessment is fun"); // => 'last assessment'
*******************************************************************************/

function longestBigram(sentence) {
  var theBigram = ''; // this will be the final bigram string that we'll return
  var currentBigram = ''; // this will be the current bigram string
  var wordsArr = sentence.split(' '); // we separate the sentence into a words array
  // good initial variables - MS
  for (var i = 0; i < wordsArr.length - 1; i++) { // we iterate through each word of the array
    var word = wordsArr[i]; // we get the current word
    var nextWord = wordsArr[i + 1]; // we get the next word

    currentBigram = word + ' ' + nextWord; // we create a string to make the bigram of the current and next word
    // good logic and varaibles inside here - MS
    if (currentBigram.length > theBigram.length) { // if the length of the current string is larger than the string that we'll return
      theBigram = currentBigram; // the one that we'll return will get the current bigram string
    }
  }

  return theBigram; // we return the bigram
}

// Great job again on this solution. By breaking down all the varaibles you need
// and manipulating them with some good logic your solution is highly readable - MS

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestBigram;
