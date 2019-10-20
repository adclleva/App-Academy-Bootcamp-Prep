/*******************************************************************************
Write a function numsToWords(numString) that takes in a string representing a number.
The function should return a new string where each digit character is replaced with
it's "word" respresentation. Assume the input string only contains numeric characters.

Examples:

numsToWords('42') => 'FourTwo'
numsToWords('123') => 'OneTwoThree'
numsToWords('159598') => 'OneFiveNineFiveNineEight'
*******************************************************************************/
function numToWord(num) {
  switch(num) {
    case 0:
      return "Zero";
      break;
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six";
      break;
    case 7:
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;
    case 9:
      return "Nine";
      break;
  }
}

function numsToWords(numString) {
  var stringWords = "";

  for (var i = 0; i < numString.length; i++) {
    var num = parseInt(numString[i]);
    var numWord = numToWord(num);

    stringWords += numWord;
  }

  return stringWords;
}

function numToWordsSolA(numString) {
  var numWords = {
    0 : "Zero",
    1 : "One",
    2 : "Two",
    3 : "Three",
    4 : "Four",
    5 : "Five",
    6 : "Six",
    7 : "Seven",
    8 : "Eight",
    9 : "Nine"
  }

  var newStr = "";

  for (var i = 0; i < numString.length; i++) {
    var num = numString[i];
    var numWord = numWords[num];

    newStr += numWord;
  }

  return newStr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numsToWords;
