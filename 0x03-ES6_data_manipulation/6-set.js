/**
 * Creates a new Set from an array of values.
 *
 * @param {Array} arr - The array of values to create a Set from.
 * @returns {Set} - A new Set containing the values from the array.
 */
export default function setFromArray(arr) {
  /*
    The `Set` constructor is used to create a new Set.
    The Set is initialized with the values from the provided array (`arr`).

    Example:
    If arr = [1, 2, 3], setFromArray(arr) returns a new Set: Set { 1, 2, 3 }
  */
  return new Set(arr);
}
