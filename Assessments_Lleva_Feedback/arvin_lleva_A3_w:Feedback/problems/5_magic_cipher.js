/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
corresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function magicCipher(sentence, cipher){
  var cipherStr = ""; // created a string to return

  for (var i = 0; i < sentence.length; i++) { //iterated through each index of the sentence string
    var char = sentence[i]; // we obtain the current character of the string
    var cipherValue = cipher[char]; // we get the key-value for the cipher object off from char

    if (cipherValue !== undefined) { // if there is a value in the object we concatenate the value to the cipherStr
      cipherStr += cipherValue;
      // Unnecessary space here. -RM
    } else { // if there isn't a value, we concatenate the char to the cipherStr
      cipherStr += char;
    }
  }

  return cipherStr; //we return the string
}

// Good work. -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
