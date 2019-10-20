/*******************************************************************************
Write a function hasSymmetry(array) that takes in an array. The function should
return true if the array has symmetry, false otherwise. For an array to have symmetry,
it should be the same forwards and backwards.

TIP:
In JavaScript, it is not possible to compare arrays for equality with `===`.
In other words, `[1, 2, 3] === [1, 2, 3]` evaluates to false.

Examples:

hasSymmetry([1, 2, 3, 3, 2, 1]) => true
hasSymmetry([1, 2, 3, 3, 4, 1]) => false
hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) => true
hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) => false
*******************************************************************************/
function hasSymmetry(array) {
  var leftSide = '';
  var rightSide = '';

  if (array.length % 2 === 0) {
    var cutOff = array.length / 2;

    for (var i = 0; i < cutOff; i++) {
      var ele1 = array[i];

      leftSide += ele1;
    }

    for (var j = array.length - 1; j >= cutOff; j--) {
      var ele2= array[j];

      rightSide += ele2;
    }
  } else {
    var cutOff = Math.floor(array.length / 2);

    for (var i = 0; i < cutOff; i++) {
      var ele1 = array[i];

      leftSide += ele1;
    }

    for (var j = array.length - 1; j > cutOff; j--) {
      var ele2 = array[j];

      rightSide += ele2;
    }
  }

  if (leftSide === rightSide) {
    return true;
  } else {
    return false;
  }
}

function hasSymmetrySolA(array) {

  for (var i = 0; i < array.length; i++) {
    var front = array[i];
    var back = array[array.length - 1 - i]; // this will start with the last element and will going from the right most element to the left

    if (front !== back) {
      return false;
    }
  }

  return true;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = hasSymmetry;
