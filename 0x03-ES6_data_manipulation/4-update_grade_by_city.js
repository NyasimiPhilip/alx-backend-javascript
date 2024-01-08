/**
 * Updates the grades of students in a specified city based on new grade information.
 *
 * @param {Array} students - An array of student objects.
 * @param {string} city - The city for which to update student grades.
 * @param {Array} newGrades - An array of objects containing new grades and corresponding student IDs.
 * @returns {Array} - An array of updated student objects with grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students who belong to the specified city.
  const studentsInCity = students.filter((student) => student.location === city);

  // Map over the students in the specified city and update their grades.
  const newStudentsGrade = studentsInCity.map((student) => {
    // Create a copy of the student object to avoid modifying the original object directly.
    const studentCopy = { ...student };

    // Iterate through the newGrades array to find a matching student ID.
    for (const grade of newGrades) {
      // If a matching student ID is found, update the student's grade and return the modified student object.
      if (grade.studentId === studentCopy.id) {
        studentCopy.grade = grade.grade;
        return studentCopy;
      }
    }

    // If no matching student ID is found, set the grade to 'N/A' and return the modified student object.
    studentCopy.grade = 'N/A';
    return studentCopy;
  });

  // Return the array of updated student objects with grades.
  return newStudentsGrade;
}
