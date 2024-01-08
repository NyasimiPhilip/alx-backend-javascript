/**
 * Updates unique items in a Map by setting their quantity to 100.
 *
 * @param {Map} item - The Map representing items and their quantities.
 * @returns {Map} - The updated Map with unique items set to a quantity of 100.
 * @throws {TypeError} - Throws an error if the input is not a Map.
 */
export default function updateUniqueItems(item) {
    // Check if the input is a Map. If not, throw a TypeError.
    if (Object.getPrototypeOf(item) !== Map.prototype) {
      throw new TypeError('Cannot process');
    }
  
    // Iterate over each entry in the Map.
    item.forEach((quantity, name) => {
      // Check if the quantity is 1 (indicating a unique item).
      if (quantity === 1) {
        // If true, set the quantity to 100 for the unique item.
        item.set(name, 100);
      }
    });
  
    // Return the updated Map.
    return item;
  }
  