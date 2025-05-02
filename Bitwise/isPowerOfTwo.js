const n = 64; // Input number to check if it's a power of 2

function isPowerOfTwo() {
  // A number is a power of 2 if it has only one bit set in its binary representation.
  // The condition (n & (n - 1)) === 0 checks this:
  // Example: n = 64 (binary: 1000000)
  // n - 1 = 63 (binary: 0111111)
  // n & (n - 1) = 1000000 & 0111111 = 0000000 (0 in decimal, so it's a power of 2)
  if ((n & (n - 1)) === 0) {
    return true; // Return true if the condition is satisfied
  }
  return false; // Otherwise, return false
}

// Print the result of the check
isPowerOfTwo()
  ? console.log(`${n} is Power of 2.`) // If true, print that n is a power of 2
  : console.log(`${n} is not Power of 2.`); // Otherwise, print that n is not a power of 2
