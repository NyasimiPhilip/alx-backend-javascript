/**
 * Cleans a set of strings by removing those that do not start with a specified string,
 * and returns a hyphen-separated string of the cleaned values.
 *
 * @param {Set} set - The set of strings to clean.
 * @param {string} startString - The prefix string to filter and remove from each set element.
 * @returns {string} - A hyphen-separated string of cleaned values.
 */
export default function cleanSet(set, startString) {
    // Initialize an empty array to store the cleaned set values.
    const setRet = [];
  
    // Check if startString is an empty string or not a string. If true, return an empty string.
    if (startString === '' || typeof startString !== 'string') return '';
  
    // Iterate over each element in the set.
    set.forEach((s) => {
      // Check if the element is a string and starts with the specified startString.
      if (typeof s === 'string' && s.startsWith(startString)) {
        // If true, push the cleaned value (substring after startString) to the setRet array.
        setRet.push(s.slice(startString.length));
      }
    });
  
    // Join the cleaned set values with hyphens and return the resulting string.
    return setRet.join('-');
  }
  