/******************************************************************************
Write a function totalNumProblems(assessments) that takes in an object of assessment
objects. The function should return the total number of problems in all assessments.

Example:

var assessments = {
  w1d5: {
    totalPoints: 7,
    problems: ['range', 'reverseSentence', 'unique', 'fizzBuzz', 'stringRange']
  },
  w2d1: {
    totalPoints: 10,
    problems: ['reverseRange', 'isPrime', 'magicNumbers', 'firstAndLast', 'royalWe']
  },
  w2d5: {
    totalPoints: 7,
    problems: ['myIndexOf', 'minMaxDifference', 'divisibleBy', 'dynamicFizzBuzz', 'magicCipher']
  },
  w3d1: {
    totalPoints: 7,
    problems: ['arrayBuilder', 'longestWord', 'leastCommonMultiple', 'sillyCipher', 'hipsterfy']
  },
  w3d5: {
    totalPoints: 5,
    problems: ['highestScore', 'snakeToCamel', 'sum2DArray', 'minValueCallback', 'mySelect']
  },
  w4d1: {
    totalPoints: 5,
    problems: ['not', 'so', 'fast']
  },
  w4d5: {
    totalPoints: 4,
    problems: [':)']
  }
};

totalNumProblems(assessments) => 29
*******************************************************************************/

function totalNumProblems(assessments) {
  var count = 0;

  for (var key in assessments) {
    var currentObj = assessments[key];
    var problems =currentObj["problems"];

    for (var i = 0; i < problems.length; i++) {
      count += 1;
    }
  }

  return count;
}

function totalNumProblemsSolA(assessments) {
  var numProblems = 0;

  for (var date in assessments) {
    var assessment = assessments[date];
    numProblems += assessment.problems.length;
  }

  return numProblems;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = totalNumProblems;
