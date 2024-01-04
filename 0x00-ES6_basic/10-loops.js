export default function appendToEachArrayValue(array, appendString) {
  // Create a new array to store modified values
  const newArray = [];

  // Use for...of loop to iterate through the array
  for (const value of array) {
    // Modify each array element and push it to the new array
    newArray.push(appendString + value);
  }

  return newArray;
}
