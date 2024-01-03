// Define a function named getResponseFromAPI
export default function getResponseFromAPI() {
  // Return a new Promise
  return new Promise((resolve, reject) => {
      // The code inside this function is where you perform your asynchronous operation

      // Example: You can make an API call here
      // If the API call is successful, call resolve with the result
      // If there is an error, call reject with the error     
      // Note: In a real-world scenario, you would typically have asynchronous code here, like an API call.
      // You would call resolve(data) when the operation is successful, and reject(error) when there's an error.
  });
}
