const N = 5; // Input: Number to calculate the factorial of

// Recursive function to calculate the factorial of a number
function factorial(N) {
  // Base case: If N is 1, return 1 (factorial of 1 is 1)
  if (N == 1) {
    return 1;
  }
  // Recursive case: Multiply the current number N by the factorial of (N-1)
  return factorial(N - 1) * N;
}

// Print the result of the factorial calculation
console.log(`Factorial of ${N} is ${factorial(N)}.`);
