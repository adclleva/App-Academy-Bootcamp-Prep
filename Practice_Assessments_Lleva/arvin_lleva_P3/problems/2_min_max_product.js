/*******************************************************************************
Write a function `minMaxProduct(array)` that return the product between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxProduct([6, 3, 7, 2]) => 14
minMaxProduct([0, 1, -5, 3, 6]) => -30
*******************************************************************************/
function largestNum(array) {
  var largestNum = array[0] //current number

  for(var i = 1; i < array.length; i++) {
    var num = array[i];

    if(largestNum < num) {
      largestNum = num;
    }
  }

  return largestNum;
}

function smallestNum(array) {
  var smallestNum = array[0];

  for(var i = 1; i < array.length; i++) {
    var num = array[i];

    if(smallestNum > num) {
      smallestNum = num;
    }
  }

  return smallestNum;
}

function minMaxProduct(array){
  var minNum = smallestNum(array);
  var maxNum = largestNum(array);

  var product = minNum * maxNum;

  return product;
}

/* Another Solution */
function minMaxProductSolA(array) {
  var min = array[0];
  var max = array[0];

  for (var i = 0; i < array.length; i++) {
    var num = array[i];

    if (min > num) {
      min = num;
    }

    if (max < num) {
      max = num;
    }
  }

  return max * min;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxProduct;
