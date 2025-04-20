// Define two numbers to compare
let x = 6,
  y = 9;

// Function to find the greatest number between two numbers
function greatest(x, y) {
  // Use a ternary operator to return the greater number
  return x > y ? x : y;
}

// Log the greatest number along with the input numbers to the console
console.log(`${greatest(x, y)} is greatest among ${x} and ${y}`);
