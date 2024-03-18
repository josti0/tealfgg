// Helper function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
  }
  
  // Helper function to check if a number is positive
  function isPositive(number) {
    return number > 0;
  }
  
  // Helper function to capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Example usage of the helper functions
  console.log(calculateRectangleArea(5, 3)); // Output: 15
  console.log(isPositive(-7)); // Output: false
  console.log(capitalizeFirstLetter("apple")); // Output: Apple
  