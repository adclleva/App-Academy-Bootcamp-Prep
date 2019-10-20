/*******************************************************************************
Write a function divisibleByFivePairSum(array), that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

Examples:

divisibleByFivePairSum([1, 5, 2, 0, 4]); // => [ [ 0, 4 ], [ 1, 3 ] ]
divisibleByFivePairSum([13, 22, 8, -3, 12]); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
*******************************************************************************/

function divisibleByFivePairSum(array){
  var divByFiveArr = []; // we create this array that we'll return

  for (var i = 0; i < array.length; i++) { // we iterate through the array to get the first num to compare to
    var num1 = array[i];

    for (var j = i + 1; j < array.length; j++) { // we iterate through array to get the unique pairs
      var num2 = array[j];
      var sum = num1 + num2; // we add both numbers

      if (sum % 5 === 0) { // if the sum is divisible by 5 we push the index pairs into the array
        divByFiveArr.push([i, j]);
      }
    }
  }

  return divByFiveArr; // we return the array
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = divisibleByFivePairSum;
