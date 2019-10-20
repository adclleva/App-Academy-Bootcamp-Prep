// 7/7 specs passed.

// Hey Arvin, my comments will be marked with '-RM'

// Nice work on this first assessment. Your logic is looking good, and I like
// that you are commenting your steps in so that you can follow through with
// each step. Just a few minor styling issues to iron out, but great job
// all around. Keep up the good work! -RM

/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/

function range(start, end) {
  var rangeArr = [];

  for(var i = start; i <= end; i++) { //iterated from start to end
    rangeArr.push(i); //pushed each number into the Array
  }
  return rangeArr;
}

// Nice work here. -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range;
