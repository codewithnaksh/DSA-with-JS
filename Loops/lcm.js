let x = 12,
  y = 15; // Define the two numbers to calculate the LCM

const { gcd } = require("./gcd.js"); // Import the HCF function from hcf.js

// Function to calculate the LCM using the formula: LCM(x, y) = (x * y) / HCF(x, y)
function lcm(x, y) {
  return Math.floor((x * y) / hcf(x, y)); // Calculate and return the LCM
}

console.log(`LCM of ${x} and ${y} is ${lcm(x, y)}`); // Log the result
