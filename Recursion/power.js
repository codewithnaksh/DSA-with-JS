// Calculate n raised to the power of p
const n = -2.0,
  p = 5; // Input base (n) and exponent (p)

// Recursive function to calculate n^p
function power(n, p) {
  // Base case: Any number raised to the power of 0 is 1
  if (p == 0) {
    return 1;
  }
  // Recursive case: Multiply n by the result of power(n, p-1)
  return power(n, p - 1) * n;
}

let result = power(n, p); // Calculate n^p using the recursive function

// If the result is not an integer, format it to 5 decimal places
if (result % Number(result.toFixed(0)) != 0) {
  result = result.toFixed(5);
}

// Print the result
console.log(`${n} raise to the power of ${p} is ${result}`);
