/*******************************************************************************
Write a function sillyCipher(sentence, cipher) that takes in an string (sentence)
and an object (cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use a dot (.)

Examples:

sillyCipher("apple" , { a : "c", p : "x", l : "r", e : "o"}) //=> 'cxxro'
sillyCipher("apple", { a : "c", p : "x"}) //=> 'cxx..'
sillyCipher("bootcamp prep?", { o : "e", p : "q" , "?" : "!"}) //=> '.ee....q.q..q!'
sillyCipher("twmce", { m : "n", t : "d", w : "a"}) //=> 'dan..''
*******************************************************************************/

function sillyCipher(sentence, cipher){
    var string = ""; // we create an empty string

    for (var i = 0; i < sentence.length; i++) {
      var char = sentence[i]; // we get and iterated through each character of the sentence
      var charKey = cipher[char]; // this obtains the value of the cipher object

      if (charKey !== undefined) { // we check if the character has a key value in the cipher object
        string += charKey; // if it does, we concatenate it to the string
      } else {
        string += "." // if not, we concatenate "."
      }
    }

    return string;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = sillyCipher;
