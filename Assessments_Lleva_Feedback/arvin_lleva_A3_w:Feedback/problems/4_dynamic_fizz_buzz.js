/*******************************************************************************
Write a function that dynamicFizzBuzz(max, num1, num2) that returns an array
of numbers up to the max. Each number should be either divisible by num1 or num2,
BUT NOT BOTH.

Examples:

dynamicFizzBuzz(20, 5, 3) => [3, 5, 6, 9, 10, 12, 18]
dynamicFizzBuzz(20, 4, 6) => [4, 6, 8, 16, 18]
*******************************************************************************/

function dynamicFizzBuzz(max, num1, num2){
  var array = [];

  for (var i = 0; i < max; i++) { // we iterate through the array until the max num
    if (i % num1 === 0 && i % num2 !== 0) { // we push the index if it's divisible by num1 and not num2
      array.push(i);
      // Unnecessary space here. -RM
    } else if (i % num2 === 0 && i % num1 !== 0) { // we push the index if it's divisible by num2 and not num1
      array.push(i);
    }
  }

  return array;
}

// Nice logic here. -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = dynamicFizzBuzz;
