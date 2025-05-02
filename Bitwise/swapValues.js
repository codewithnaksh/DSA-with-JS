let a = 6,
  b = 9; // Initialize two numbers to be swapped
console.log(`Before Swap : a -> ${a}   b -> ${b}`);

// Function to swap two numbers using XOR bitwise operation
function swapNumbers() {
  // Step 1: a = a ^ b
  // XOR operation compares each bit of a and b:
  // If bits are the same, result is 0; if different, result is 1.
  // Example: a = 6 (0110), b = 9 (1001)
  // a = 0110 ^ 1001 = 1111 (15 in decimal)
  a = a ^ b;

  // Step 2: b = a ^ b
  // Now, a holds the XOR result (1111), and b is still 9 (1001).
  // b = 1111 ^ 1001 = 0110 (6 in decimal, original value of a)
  b = a ^ b;

  // Step 3: a = a ^ b
  // Now, a is 1111 (15), and b is 0110 (6).
  // a = 1111 ^ 0110 = 1001 (9 in decimal, original value of b)
  a = a ^ b;

  // Return the swapped values
  return [a, b];
}

// Call the function to swap the numbers
[a, b] = swapNumbers();
console.log(`After Swap  : a -> ${a}   b -> ${b}`);
