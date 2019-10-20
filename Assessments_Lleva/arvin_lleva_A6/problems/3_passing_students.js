/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/
function scoreAvg(student) { // this helper function gets the average score per student
  var total = 0;
  var grades = student.grades; // this gets the key-values of grades for the student

  for (var i = 0; i < grades.length; i++) { // we iterate through the grades
    var score = grades[i].score; // we get each grade

    total += score; // we add the total score together
  }

  var avgScore = total / grades.length; // we then get the average score by getting the total and dividing it by the length of the grades object array

  return avgScore; // we return the average score
}

function passingStudents(students) {
  var passedStudents = []; // this is the array that we'll return of the passing students

  for (var i = 0; i < students.length; i++) { // we iterate through student objects array
    var student = students[i]; // we get each student object
    var name = student.name; // we get the name of each student
    var avgScore = scoreAvg(student); // we get the average score for each student

    if (avgScore >= 70) { // if the average score is 70 or more
      passedStudents.push(name); // we push the name into the passed students array
    }
  }

  return passedStudents; // we return the array of students that passed
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = passingStudents;
