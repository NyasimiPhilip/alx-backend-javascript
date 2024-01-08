/**
 * Retrieves an array containing the IDs of student objects in the given array.
 *
 * @param {Array} students - An array of student objects.
 * @returns {Array} - An array of student IDs.
 */
export default function getListStudentsIds(students) {
  // Check if the input is an array. If not, return an empty array.
  if (!Array.isArray(students)) {
    return [];
  }

  // Use the map function to create a new array containing only the IDs of the students.
  const studentIds = students.map((student) => student.id);

  // Return the array of student IDs.
  return studentIds;
}
