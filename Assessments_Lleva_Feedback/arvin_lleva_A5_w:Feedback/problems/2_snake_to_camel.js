/*******************************************************************************
Write a function snakeToCamel(str) that takes in a snake_cased string and returns
the string CamelCased. snake_case is a string where each word is separated with
underscores (_). CamelCase is a string where the first char of each word
is capitalized, all other characters lowercase.

Examples:

snakeToCamel('snakes_go_hiss'); // => 'SnakesGoHiss'
snakeToCamel('say_hello_world'); // => 'SayHelloWorld'
snakeToCamel('bootcamp_prep_is_cool'); // => 'BootcampPrepIsCool'
snakeToCamel('BOOtcamp_PREP_iS_cOol'); // => 'BootcampPrepIsCool'
*******************************************************************************/
function firstLetterCapWord(word) { // this helper function to return the with the first letter capitalized and the rest is lowercase
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function snakeToCamel(str) {
  var strArr = str.split('_'); // we separated the underscored string into an array
  var newStr = ''; // this will be the new string that we'll return

  for (var i = 0; i < strArr.length; i++) { // we iterate through each word
    var word = strArr[i];
    var newWord = firstLetterCapWord(word); // each word with have their first letter capitalized and the rest lowercase

    newStr += newWord; // we then concatenate them together into this new string
  }

  return newStr; // we return the new string that we obained
}

// Looks good. That helper function is a bit redundant I think. It would
// probably be a bit cleaner to just use the line you have on 15 on line
// 24 instead, but either way works really. More of a style thing. -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = snakeToCamel;
