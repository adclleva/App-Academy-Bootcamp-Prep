/*******************************************************************************
Write a function valueConcat(array, obj) that takes in an array and object
The function should return a new array where each element is concatenated with
it's corresponding value from the object.

Examples:

valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'})
=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], {b: 2, c: 3})
=> [ 'a', 'b2', 'c3' ]
*******************************************************************************/

function valueConcat(array, obj) {
  var concatArr = [];

  for (var i = 0; i < array.length; i++) {
    var ele = array[i];

    if (obj[ele] !== undefined) {
      var keyValue = obj[ele];
      var concatStr = ele + keyValue;

      concatArr.push(concatStr);
    } else {
      concatArr.push(ele);
    }
  }

  return concatArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = valueConcat;
