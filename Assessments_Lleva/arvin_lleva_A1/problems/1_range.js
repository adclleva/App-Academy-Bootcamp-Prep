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

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range;
