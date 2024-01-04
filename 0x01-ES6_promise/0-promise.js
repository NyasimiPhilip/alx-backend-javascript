// Define a function named getResponseFromAPI
export default function getResponseFromAPI() {
  // Return a new Promise without resolve and reject
  return new Promise(() => {
      // The code inside this function is where you perform your asynchronous operation

      // Example: You can make an API call here
      // If the API call is successful, you can complete the Promise without explicitly using resolve
      // If there is an error, you can complete the Promise without explicitly using reject
      // Note: In a real-world scenario, you would typically have asynchronous code here, like an API call.
  });
}
