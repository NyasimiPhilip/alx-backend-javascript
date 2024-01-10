/**
 * Returns a predefined list of student objects.
 *
 * @returns {Array} - An array containing student objects.
 */
export default function getListStudents() {
  // Predefined list of student objects with properties like id, firstName, and location.
  const listStudents = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena           ', location: 'San Francisco' },
  ];

  // Return the array of student objects.
  return listStudents;
}
