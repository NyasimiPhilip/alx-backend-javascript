/**
 * Filters an array of student objects to get only those located in a specified city.
 *
 * @param {Array} students - An array of student objects.
 * @param {string} city - The city for which to filter students.
 * @returns {Array} - An array of student objects located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  // Use the filter function to create a new array containing only students located in the specified city.
  const studentsInCity = students.filter((student) => student.location === city);

  // Return the array of student objects located in the specified city.
  return studentsInCity;
}
