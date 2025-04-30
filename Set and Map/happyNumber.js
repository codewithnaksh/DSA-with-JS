// A happy number is a number defined by the following process:
/*
    Starting with any positive integer, replace the number by the sum of the squares of its digits, 
    and repeat the process until the number equals 1 (where it will stay), or it loops endlessly 
    in a cycle that does not include 1. Numbers that end with 1 are happy numbers.
*/

const num = 2; // Input number to check if it's a happy number

// Function to calculate the sum of the squares of the digits of a number
function sumOfSq(N) {
  let sum = 0;
  while (N > 0) {
    let digit = N % 10; // Extract the last digit
    sum += digit * digit; // Add the square of the digit to the sum
    N = Math.floor(N / 10); // Remove the last digit
  }
  return sum; // Return the sum of squares
}

// Function to determine if a number is a happy number
function isHappy(N) {
  let log = new Set(); // Set to track numbers we've already seen to detect cycles
  let sumOfSquares = sumOfSq(N); // Calculate the initial sum of squares

  // Continue the process until the sum of squares equals 1
  while (sumOfSquares !== 1) {
    sumOfSquares = sumOfSq(sumOfSquares); // Calculate the sum of squares of the current number

    // If the sum is already in the Set, it means we're in a cycle
    if (log.has(sumOfSquares)) {
      return false; // Not a happy number
    }

    log.add(sumOfSquares); // Add the current sum to the Set
  }

  return true; // If we reach 1, it's a happy number
}

// Check if the input number is a happy number and print the result
isHappy(num)
  ? console.log(`${num} is a Happy number.`) // If true, print happy number message
  : console.log(`${num} is not a happy number.`); // Otherwise, print not happy number message
