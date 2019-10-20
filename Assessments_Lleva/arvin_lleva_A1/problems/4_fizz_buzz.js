/******************************************************************************
Write a function fizzBuzz(max) that returns an array of numbers under
the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.

Example:

fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*******************************************************************************/

function fizzBuzz(max) {
  var arr = [];

  for(var i = 0; i < max; i++) {
    if(i % 3 === 0 && i % 5 === 0) { // if the number is divisible by both 3 and 5, 'continue' on to the next iteration of the loop
      continue;
    }
    if(i % 3 === 0 || i % 5 === 0){ // if the number is divisible by either 3 or 5, push the element into the array
      arr.push(i);
    }
  }
  return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz;
