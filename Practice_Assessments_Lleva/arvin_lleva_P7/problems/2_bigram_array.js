/*******************************************************************************
Write a function bigramArray(sentence) that takes in a sentence string and returns
the an array of containing all bigrams in the sentence. A bigram is a pair of
consecutive words of a sentence.

Examples:

bigramArray('today is a great day') => [ 'today is', 'is a', 'a great', 'great day' ]
bigramArray('bigrams are very useful') => [ 'bigrams are', 'are very', 'very useful' ]
*******************************************************************************/

function bigramArray(sentence) {
  var biGramArr = [];
  var words = sentence.split(' ');

  for (var i = 0; i < words.length - 1; i++) {
    var word = words[i];
    var nextWord = words[i + 1];
    var pairWords = word + ' ' + nextWord;

    biGramArr.push(pairWords);
  }

  return biGramArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bigramArray;
