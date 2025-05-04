const a = 16,
  b = 24; // Input numbers to find their HCF (Highest Common Factor)

// Recursive function to calculate the HCF of two numbers
function hcf(a, b) {
  // Base case: If both numbers are equal, the HCF is the number itself
  if (a == b) {
    return a;
  }
  // If a is greater than b, subtract b from a and recursively call the function
  if (a > b) {
    return hcf(a - b, b);
  }
  // If b is greater than a, subtract a from b and recursively call the function
  else {
    return hcf(b - a, a);
  }
}

// Print the HCF of the two input numbers
console.log(`HCF of ${a} and ${b} : ${hcf(a, b)}`);

// Eucdlien Approach
let badaNumber = a; // Variable to store the larger number
let chotaNumber = b; // Variable to store the smaller number

// Recursive function to calculate the GCD (Greatest Common Divisor) using Euclid's algorithm
function gcd(a, b) {
  // Base case: If the remainder is 0, return the current divisor (a)
  if (b === 0) {
    return a;
  }
  // Recursive case: Call gcd with the smaller number and the remainder of a divided by b
  return gcd(b, a % b);
}

// Determine which number is larger and assign accordingly
if (a > b) {
  badaNumber = a;
  chotaNumber = b;
} else {
  badaNumber = b;
  chotaNumber = a;
}

// Print the GCD of the two input numbers
console.log(`GCD of ${a} and ${b} : ${gcd(a, b)}`);
