/*******************************************************************************
Write a function variableNameify(words) that takes in an array of words. The function
should return a string representing the variable name obtained by combining the
words and captitalizing them in mixCased style.

Examples:

variableNameify(['is', 'prime']) => 'isPrime'
variableNameify(['remove', 'last', 'vowel']) => 'removeLastVowel'
variableNameify(['MaX', 'VALUE']) => 'maxValue'
*******************************************************************************/
function firstLetterCap(name) {
  var firstChar = name[0].toUpperCase();
  var otherChar = name.slice(1).toLowerCase();

  return firstChar + otherChar;
}

function variableNameify(words) {
  var string = words[0].toLowerCase();

  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var newWord = firstLetterCap(word);

    string += newWord;
  }

  return string;
}

function variableNameifySolA(words) {
  var variableName = '';

  for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (i === 0) {
      variableName += word.toLowerCase();
    } else {
      var capWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
      variableName += capWord;
    }
  }

  return variableName;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = variableNameify;
