const num = 69; // Input number to calculate the sum of its digits

// Recursive function to calculate the sum of digits of a number
function sumOfDigits(N) {
  // Base case: If the number is less than or equal to 0, return 0
  if (N <= 0) {
    return 0;
  }
  let digit = N % 10; // Extract the last digit of the number
  // Recursive case: Add the last digit to the sum of digits of the remaining number
  return digit + sumOfDigits(Math.floor(N / 10));
}

// Print the result of the sum of digits
console.log(`Sum of digits of ${num} is ${sumOfDigits(num)}.`);
