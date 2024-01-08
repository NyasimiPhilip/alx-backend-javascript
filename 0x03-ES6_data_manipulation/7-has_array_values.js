/**
 * Checks if every value in the array is present in the Set.
 *
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array of values to check.
 * @returns {boolean} - True if every value in the array is in the Set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
    /*
      The `every` method is used to check if every element in the array
      satisfies the condition specified by the callback function.
  
      The callback function takes a value from the array and checks if it exists in the set.
      The `set.has(value)` method returns true if the set contains the specified value.
      If every value in the array satisfies this condition, the `every` method returns true.
      If at least one value does not satisfy the condition, it returns false.
    */
    return array.every((value) => set.has(value));
  }
  