// Create a new WeakMap to store the number of queries for each API endpoint.
export const weakMap = new WeakMap();

/**
 * Queries an API endpoint and tracks the number of times the endpoint is queried.
 *
 * @param {Object} endpoint - The API endpoint to query.
 * @throws {Error} - Throws an error if the endpoint is queried more than five times.
 */
export function queryAPI(endpoint) {
  // Check if the WeakMap contains information for the given endpoint.
  if (!weakMap.has(endpoint)) {
    // If not, initialize the count for the endpoint to 0.
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the given endpoint.
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  // Check if the endpoint has been queried more than or equal to five times.
  if (weakMap.get(endpoint) >= 5) {
    // If true, throw an error indicating that the endpoint load is high.
    throw new Error('Endpoint load is high');
  }
}