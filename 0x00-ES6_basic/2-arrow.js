export default function getNeighborhoodsList() {
    // Initialize an array property 'sanFranciscoNeighborhoods' on the 'this' object
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    // Capture the value of 'this' in the outer scope
    const self = this;
  
    // Define a method 'addNeighborhood' on 'this' using an arrow function
    this.addNeighborhood = (newNeighborhood) => {
      // Access the 'sanFranciscoNeighborhoods' property using 'self' (captured value of 'this')
      self.sanFranciscoNeighborhoods.push(newNeighborhood);
  
      // Return the updated array
      return self.sanFranciscoNeighborhoods;
    };
  }  