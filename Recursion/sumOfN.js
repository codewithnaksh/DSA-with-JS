const N = 5; // Input: Number of natural numbers to sum

// Recursive function to calculate the sum of the first N natural numbers
function sumOfN(N) {
  // Base case: If N is 1, return 1 (smallest natural number)
  if (N == 1) {
    return 1;
  }
  // Recursive case: Add the current number N to the sum of the first (N-1) numbers
  return N + sumOfN(N - 1);
}

// Print the result of the sum
console.log(`Sum of first ${N} natural numbers is ${sumOfN(N)}.`);
