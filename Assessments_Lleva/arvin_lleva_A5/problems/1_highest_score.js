/*******************************************************************************
Write a function highestScore(students) that takes in an array of student objects
as a parameter. It should return a string that corresponds to the student with
the highest score. The string should contain that student's initials
concatenated with their id. Assume the array contains at least 1 student object and
the student with the highest score is unique (there are no ties).
Example:

var students = [
 {name: 'Alvin Zablan', id: 128, score: -42},
 {name: 'Eliot Bradshaw', id: 32, score: 57},
 {name: 'Tommy Duek', id: 2, score: 99},
 {name: 'Fred Sladkey', id: 256, score: 94}
];

highestScore(students); //=> 'TD2'
*******************************************************************************/
function getInitialAndId(student) { // this helper function returns the student initials with the id
  var name = student.name.split(' '); // we separate the first and last name into an array
  var initial = name[0][0] + name[1][0]; // we obtain the initials through the array
  var id = student.id; // this gets the student id

  return initial + id; // we return the initials with the id
}

function highestScore(students) {
  var bestScore = null; // this is for the best score
  var bestStudent = null; // this is for returning the student with their initial and id

  for (var i = 0; i < students.length; i++) { // we iterate through the array of objects
    var student = students[i]; // this is an object
    var score = student.score; // we get the score of the object

    if (bestScore === null || bestScore < score) { // if the best score is null or less than score
      bestScore = score; // the new bestScore gets the current score
      bestStudent = getInitialAndId(student); // we get the initial and id of the current student
    }
  }

  return bestStudent; // we return the student's initials and id
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = highestScore;
