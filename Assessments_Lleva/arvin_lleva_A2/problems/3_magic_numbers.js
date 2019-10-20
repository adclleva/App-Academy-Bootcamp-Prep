/*******************************************************************************
Write a function magicNumbers(max) that returns an array of numbers up to
the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

Example:

magicNumbers(20) => [4, 6, 8, 16, 18]
*******************************************************************************/

function magicNumbers(max) {
  var newArr = [];

  for(var i = 0; i < max; i++) {

    if((i % 4 === 0) && (i % 6 === 0)) { // continues the iteration if divisible by both 6 & 4
      continue;
    }
    if((i % 4 === 0) || (i % 6 === 0)) { // pushes the values into the new array if the if statement above didnt pass
      newArr.push(i);
    }
  }
  return newArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicNumbers;
