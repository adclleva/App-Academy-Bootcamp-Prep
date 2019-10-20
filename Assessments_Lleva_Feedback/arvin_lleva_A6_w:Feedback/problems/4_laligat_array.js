/*******************************************************************************
Write a function laligatArray(array) that takes in an array of numbers and returns
a new array where each number is replaced with its laligat sum.

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

Examples:
laligatArray([10, 11, 20, 15]); // => [ 17, 28, 77, 41 ]
laligatArray([1, 2, 3, 4, 5]); // => [ 0, 2, 5, 5, 10 ]
*******************************************************************************/
function isPrime(num) { // this helper function determines if the number is a prime

  if (num < 2) { // if the number is less than 2
    return false; // we return false
  }

  for (var i = 2; i < num; i++) { // start at 2 and increment by one until we reach the number before the given num
    if (num % i === 0) { // if the current number is divisible by the given num
      return false; // we return false
    }
  }

  return true; // if no whole number is divisble, we return true
} // perfect isPrime - MS

function laligatSum(num) { // this helper function gets the laligat sum of the given number
  var sum = 0; // we have this sum variable that we'll return

  for (var i = 0; i <= num; i++) { // starting at 0, and incrementing to the given number

    if (isPrime(i)) { // if the current number is prime
      sum += i; // we add that current number to the sum
    }
  } // grat second helper function - MS

  return sum; // we return the laligat sum
}

function laligatArray(array) {
  var newArr = []; // we create this array for our laligat sums of the array of numbers given

  for (var i = 0; i < array.length; i++) { // we go through each number of the givem array
    var num = array[i]; // this is the current number of that array
    var laligatSumNum = laligatSum(num);  // we get the laligat sum of that current number

    newArr.push(laligatSumNum); // we push that laligat sum of the current number to the new array
  }

  return newArr; // we return the new array
} // perfect main functin - MS

// Fantastic job. Using helper function you really did a grat job breaking down the larger problem
// into smaller ones. It makes your code very readable and clean - MS

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = laligatArray;
