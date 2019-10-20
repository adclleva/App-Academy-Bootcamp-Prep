/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  var uniqueArr = [];

  for(var i = 0; i < array.length; i++) {
    var char = array[i];

    if(uniqueArr.indexOf(char) === -1) { // if the unique array doesn't have the unique element, 'push' it into the unique array
      uniqueArr.push(char);
    }
  }
  return uniqueArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
