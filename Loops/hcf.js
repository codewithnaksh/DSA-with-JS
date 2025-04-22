let a = 105,
  b = 36; // Define two numbers to calculate their HCF

// Function to calculate the HCF (Highest Common Factor) using Euclid's algorithm
function hcf(x, y) {
  // Ensure x is the larger number
  if (x < y) {
    [x, y] = [y, x]; // Swap x and y if x is smaller
  }

  let r = x % y; // Calculate the remainder of x divided by y

  // Repeat until the remainder becomes 0
  while (r !== 0) {
    x = y; // Assign y to x
    y = r; // Assign the remainder to y
    r = x % y; // Recalculate the remainder
  }

  return y; //return the result
}

console.log(`HCF of ${a} and ${b} = ${hcf(a, b)}`); // Call the function and console the result
