/**************************************************************************************
Write a function `pyramidScheme(base)` that takes in an array of numbers representing
the base of a pyramid. The function should return a two-dimensional array representing
the completed pyramid. To generate an element of the next level of the pyramid,
we sum the elements below and to the left and below and to the right.

For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:

          85
        37  48
      15  22  26
   5   10   12   14
 2   3    7    5    9

Example:

var p1 = pyramidScheme([2, 3, 7, 5, 9]);
p1 // =>
 [
   [ 85 ],
   [ 37, 48 ],
   [ 15, 22, 26 ],
   [ 5, 10, 12, 14 ],
   [ 2, 3, 7, 5, 9 ]
 ]

var p2 = pyramidScheme([2, 2, 2, 2]);
p2 // =>
 [
   [ 16 ],
   [ 8, 8 ],
   [ 4, 4, 4 ],
   [ 2, 2, 2, 2 ]
 ]


Hint:
  array.unshift is a method we can use to add an element to the front of an array:
    var arr = ['b', 'c'];
    arr.unshift('a');
    arr; // => [ 'a', 'b', 'c' ]

Difficulty: Hard
*************************************************************************************/
function pyramidNextBase(array) { // this function creates the next base of the array with the sums
  var pyramidSumBase = []; // we create the array that we'll return

  for (var i = 0; i <= array.length - 2; i++) { // we iterate through each pair sums, it's the length minus two because we don't want the NaN sum result
    var currentNum = array[i]; // the current number
    var nextNum = array[i + 1]; // the next number
    var sum = currentNum + nextNum; // we add those two together

    pyramidSumBase.push(sum); // we push the sum to the back of the array
  }

  return pyramidSumBase; // we return the array
}

function pyramidScheme(base) {
  var pyramidArr = [pyramidNextBase(base), base]; // here we have our base with the next base "on top of it" (which is the next sums of the pairs)

  for (var i = 0; i < base.length - 2; i++) { // we iterate through two less than the size of the base because we already have the first and second base
    var currentBase = pyramidArr[0]; // we always use the "first" index of the array since it always gets 'unshifted' to the front of the array
    var nextBase = pyramidNextBase(currentBase); // we obtain the next base of the pyramid

    pyramidArr.unshift(nextBase); // we 'unshift' the next base to the front of the array
  }

  return pyramidArr; // we return the pyrmid array
}

// Note: I had around 50 minutes left when I started this problem and I ended up having 4 minutes left.
//       This definitely took a lot of time, thinking, and paper. lol

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = pyramidScheme;
