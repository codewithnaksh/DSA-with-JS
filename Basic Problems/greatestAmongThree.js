// Define three numbers to compare
let a = 6,
  b = 9,
  c = 8;

// Function to find the greatest number among three numbers
function greatest(a, b, c) {
  // Compare the first two numbers to find the larger one
  let big = a > b ? a : b;
  // Compare the larger of the first two numbers with the third number
  let bigger = big > c ? big : c;
  // Return the greatest number
  return bigger;
}

// Log the greatest number along with the input numbers to the console
console.log(`${greatest(a, b, c)} is greatest among ${a}, ${b} and ${c}`);
