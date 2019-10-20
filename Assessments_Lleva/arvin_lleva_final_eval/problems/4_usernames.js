/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/
function username(name) { // this is a helper function to get the user name
  var fullName = name.toLowerCase().split(' '); // we separate the first and last name into an array and have it lower case
  var firstNameChar = fullName[0][0]; // we get the first character of the fist name
  var lastName = fullName[1]; // we get the last name
  var userName = firstNameChar + lastName; // we concatenate the first character of the first name with the whole last name

  return userName; // we return concatenated string as the user name
}

function usernames(names) {
  var userNamesArr = []; // this will be our user name array

  for (var i = 0; i < names.length; i++) { // we iterate through the array to get each name
    var name = names[i]; // this is the current name
    var userName = username(name); // we obtain the user name

    userNamesArr.push(userName); // we push the user name to the array
  }

  return userNamesArr; // we return our user names array
}

/******************** DO NOT MODIFY ANYTHING UNDER THIS LINE *************************/

module.exports = usernames;
