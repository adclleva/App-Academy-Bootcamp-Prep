/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

function bestWinStreak(str) {
  var longestWinStreak = 0;
  var currentWinStreak = 0;

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char === 'W') {
      currentWinStreak += 1;
    } else if (currentWinStreak > longestWinStreak) {
      longestWinStreak = currentWinStreak;
      currentWinStreak = 0;
    } else {
      currentWinStreak = 0;
    }

    if (i === str.length - 1 && longestWinStreak < currentWinStreak) {
      longestWinStreak = currentWinStreak;
    }
  }

  return longestWinStreak;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = bestWinStreak;
