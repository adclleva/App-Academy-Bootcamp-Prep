/*******************************************************************************
Write a function shortestWord(sentence) that returns the shortest word of a sentence.
You can assume that the words of the sentence all have different lengths.

Examples:

shortestWord('app academy is cool') => 'is'
shortestWord('bootcamp prep') => 'prep'
*******************************************************************************/

function shortestWord(sentence) {
  var sentenceArr = sentence.split(' ');
  var currentWord = sentenceArr[0];
  var currentWordLength = sentenceArr[0].length;

  for (var i = 1; i < sentenceArr.length; i++) {
    var word = sentenceArr[i];
    var wordLength = sentenceArr[i].length;

    if (currentWordLength > wordLength) {
      var currentWord = word;
    }
  }

  return currentWord;
}

function shortestWordSolA(sentence) {
  var sentenceArr = sentence.split(' ');
  var shortestWord = null;

  for (var i = 0; i < sentenceArr.length; i++) {
    var word = sentenceArr[i];

    if (shortestWord === null || word.length < shortestWord.length) {
      shortestWord = word;
    }
  }

  return shortestWord;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = shortestWord;
