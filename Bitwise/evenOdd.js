const n = 69; // Input number to check if it's even or odd

function checkEvenOdd() {
  // Use bitwise AND operation to check the least significant bit (LSB)
  // If the LSB is 0, the number is even; if it's 1, the number is odd.
  // Example: n = 69 (binary: 1000101)
  // n & 1 = 1000101 & 0000001 = 0000001 (1 in decimal, so it's odd)
  if ((n & 1) === 0) {
    return "Even"; // Return "Even" if the result of n & 1 is 0
  }
  return "Odd"; // Otherwise, return "Odd"
}

// Print the result of the check
console.log(`${n} is a ${checkEvenOdd()} number.`);
