// 7/7 specs passed.

// Hey Arvin, my comments will be marked with '-RM'.

// Great job here on this assessment. Everything is looking very nice
// in the logic department here. And nice job using that helper function
// in the final problem. It really helps to break out those subproblems
// whenever you see an area where it is applicable. Keep that up going forward.
// Great job all around! -RM

/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/

function arrayBuilder(count) {
  var array = [];

  for (var ele in count) { // we loop through the object
    var num = count[ele]; // we create a variable that keeps the number of times that we repeat

    for (var i = 0; i < num; i++) { // we repeat the element to push into the array
      array.push(ele);
    }
  }

  return array;
}

// Perfect. -RM

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
