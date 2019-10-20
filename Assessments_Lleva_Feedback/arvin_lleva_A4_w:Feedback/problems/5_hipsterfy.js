/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/
function removeLastVowel(word) { // created a helper function to removeLastVowel for a word
  var vowels = "aeiouAEIOU".split(''); // created an array of vowels

  for (var i = word.length - 1; i >= 0; i--) { // we start with the last character
    var char = word[i];

    if (vowels.indexOf(char) !== -1) { // if the character is a vowel we immediately return the other characters
      return word.slice(0, i) + word.slice(i + 1);
    }
  }

  return word; // if nothing is a vowel, we just return the word
}

function hipsterfy(sentence) {
  var words = sentence.split(' '); // we separate the sentence into an array of words
  var newSentence = [];

  for (var i = 0; i < words.length; i++) { // we iterate through each word of the array
    var word = words[i];
    var newWord = removeLastVowel(word); // we used the helper function to remove the last vowel and place it in the newWord variable

    newSentence.push(newWord); // we then the newWord into the newSentence array
  }

  return newSentence.join(' '); // we "joined" the array into a string and returned it
}

// Perfect. Nice job breaking out that helper function. Keep that up! -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hipsterfy;
