/*******************************************************************************
Write a function greatestCommonFactor(num1, num2) that returns the largest number
that is divides both `num1` and `num2`.

Examples:

greatestCommonFactor(15, 25) => 5
greatestCommonFactor(16, 24) => 8
greatestCommonFactor(7, 11) => 1
*******************************************************************************/

function greatestCommonFactor(num1, num2) {
  var largerNum = num2;

  if (num1 > num2) {
    largerNum = num2;
  }
  //we can technically get rid of the lines above since it doesnt matter which numbers we used

  for (var i = largerNum; i > 0; i--) {
    if ((num1 % i === 0) && (num2 % i === 0)) {
      return i;
    }
  }
}

functin greatestCommonFactorSolA(num1, num2) {
  var i = 1;
  var gcf;

  while (i < num2 && i < num1) {
    if (num2 % i === 0 && num2 % i === 0) {
      gcf = i;
    }

    i++
  }

  return gcf;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = greatestCommonFactor;
