/**
 * A function that handles the response from an API promise.
 * @param {Promise} promise - The promise returned by an API request.
 * @returns {Promise} A promise that resolves to an object containing the status and body.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // Log a message indicating a successful response from the API.
      console.log('Got a response from the API');

      // Return an object with a status of 200 and a success message in the body.
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => new Error()); // Catch any errors and return a new Error object.
}
