/******************************************************************************
Write a function fuzzBizz(max) that returns an array of numbers under
the max. Each number should be either divisible by 2 or 7, BUT NOT BOTH.

Examples:

fuzzBizz(17) => [ 2, 4, 6, 7, 8, 10, 12, 16 ]
fuzzBizz(30) => [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]
*******************************************************************************/

function fuzzBizzSolA(max) {
  var fuzzBizzArr = [];

  for(var i = 1; i < max; i++) {
    if(i % 2 === 0 && i % 7 !== 0) {
      fuzzBizzArr.push(i);
    } else {
      if(i % 7 === 0 && i & 2 !== 0) {
        fuzzBizzArr.push(i);
      }
    }
  }
  return fuzzBizzArr;
}

function fuzzBizz(max){
  var fuzzBizzArr = [];

  for(var i = 1; i < max; i++) {
    if(i % 2 === 0 && i % 7 === 0) {
      continue;
    }
    if(i % 2 === 0 || i % 7 === 0) {
      fuzzBizzArr.push(i);
    }
  }
  return fuzzBizzArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fuzzBizz;
