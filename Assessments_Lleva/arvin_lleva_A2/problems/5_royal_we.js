/*******************************************************************************
Write a function royalWe(sentence) that returns an string where every word
'I' is replaced with 'we', every word 'mine' is replaced with 'ours', every
word 'my' is replaced with 'our', and every word 'me' is replaced with "us"

Examples:

royalWe("I want to go to the store") => "we want to go to the store"
royalWe("This is my house and you will respect me") => "This is our house and you will respect us"
royalWe("This is mine") => "This is ours"
royalWe("Jump for my love") => "Jump for our love"
*******************************************************************************/

function royalWe(sentence) {
  var sentenceArr = sentence.split(' '); // separted the sentence into an array of words
  var newSent = []; // empty array for the final output

  for(var i = 0; i < sentenceArr.length; i++) { // we iterate through the array of words
    var word = sentenceArr[i]; // we have the word of that particular index

    if(word === 'I') { // if the word matches the string 'I'
      newSent.push('we');

    } else if(word === 'mine') { // if word matches the string 'mine'
      newSent.push('ours');

    } else if(word === 'my') { //if word matches the string 'my'
      newSent.push('our');

    } else if(word.indexOf('me') === 0) { // here I wanted to check if using this method of indexOf() works as well, and it does
      newSent.push('us');

    } else { // pushes the word into the newSent array
      newSent.push(word);
    }
  }
  return newSent.join(' '); // we return the newSent array as a sentence string
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = royalWe;
