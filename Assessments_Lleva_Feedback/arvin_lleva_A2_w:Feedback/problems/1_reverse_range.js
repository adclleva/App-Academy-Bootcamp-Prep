// 10/10 specs passed.

// Hey Arvin, my comments will be marked with '-RM'

// Nice work on this assessment. Your logic is looking pretty strong,
// so definitely keep that up. Going forward I would just recommend spending
// a few minutes to review your code when you are finished to see if you can iron
// out any styling issues that might pop out at you. Great work overall! -RM

/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  var revArr = [];

  for(var i = end - 1; i > start; i--) { // we push the values from 'end' counting down to 'start'
    revArr.push(i);
  }
  return revArr;
}

// Looks good! -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
