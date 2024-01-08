/**
 * Calculates the sum of student IDs in the given array of student objects.
 *
 * @param {Array} students - An array of student objects.
 * @returns {number} - The sum of student IDs.
 */
export default function getStudentIdsSum(students) {
  // Use the reduce function to calculate the sum of student IDs.
  // The accumulator starts at 0, and for each student, their ID is added to the accumulator.
  const sumOfIds = students.reduce((accumulator, current) => accumulator + current.id, 0);

  // Return the calculated sum of student IDs.
  return sumOfIds;
}
