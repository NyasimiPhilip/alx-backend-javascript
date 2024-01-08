/**
 * Creates and returns a grocery list using a Map.
 *
 * @returns {Map} - A Map representing a grocery list with items and quantities.
 */
export default function groceriesList() {
    // Create a new Map to represent the grocery list.
    const myMap = new Map();
  
    // Add items and quantities to the grocery list using key-value pairs.
    myMap.set('Apples', 10);
    myMap.set('Tomatoes', 10);
    myMap.set('Pasta', 1);
    myMap.set('Rice', 1);
    myMap.set('Banana', 5);
  
    // Return the grocery list represented by the Map.
    return myMap;
  }
  