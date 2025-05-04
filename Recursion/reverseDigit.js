const num = 6969; // Input number to reverse its digits

function reverse(N) {
  // Base case: If the number is less than or equal to 0, return 0
  if (N <= 0) {
    return 0;
  }
  let digit = N % 10; // Extract the last digit of the number
  // Recursive case: Reverse the remaining digits and add the current digit at the correct position
  return reverse(Math.floor(N / 10)) + digit * 10 ** String(N).length; // Incorrect logic here
}

// Print the reversed number (adjusted by dividing by 10 to fix the logic)
console.log(`Reverse of ${num} : ${Math.floor(reverse(num) / 10)}`);

// Better Approach:
// The current logic is incorrect because it calculates the position of digits incorrectly.
// A better approach is to use a helper function to keep track of the reversed number and its position.

function reverseBetter(N, reversed = 0) {
  if (N === 0) {
    return reversed; // Base case: Return the reversed number when N becomes 0
  }
  let digit = N % 10; // Extract the last digit
  return reverseBetter(Math.floor(N / 10), reversed * 10 + digit); // Update the reversed number
}

console.log(`Reverse of ${num} (Better Approach): ${reverseBetter(num)}`);
