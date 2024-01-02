export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    // Modify each array element in place by appending the string
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
