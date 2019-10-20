/*******************************************************************************
Write a function reverseOddRange(start, end) that returns an array containing all
odd numbers between 'start' and 'end'  in reverse-sequential order. Use a
loop to do this.

Examples:

reverseOddRange(10, 20) => [ 19, 17, 15, 13, 11 ]
reverseOddRange(3, 7) => [ 7, 5, 3 ]
reverseOddRange(9, 5) => []
*******************************************************************************/

function reverseOddRange(start, end) {
  var arr = [];

  for (var i = end; i >= start; i--) {
    if (i % 2 === 1) {
      arr.push(i);
    }
  }

  return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseOddRange;
