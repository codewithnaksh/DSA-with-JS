// A strong number is a number for which the sum of the factorials of its digits equals the number itself.
// Example: 145 is a strong number because 1! + 4! + 5! = 145.

let num = 145; // Define the number to check

// Function to calculate the factorial of a given number
function factorial(n) {
  let fact = 1; // Initialize the factorial result to 1
  if (n == 0 || n == 1) {
    // Factorial of 0 and 1 is 1
    return fact;
  }
  for (let i = 2; i <= n; i++) {
    // Loop to calculate factorial
    fact *= i;
  }
  return fact; // Return the calculated factorial
}

// Function to check if a number is a strong number
function isStrong(n) {
  let sum = 0; // Initialize the sum of factorials of digits to 0
  while (n > 0) {
    let digit = n % 10; // Extract the last digit of the number
    sum += factorial(digit); // Add the factorial of the digit to the sum
    n = Math.floor(n / 10); // Remove the last digit from the number
  }
  // Check if the sum of factorials equals the original number
  if (num === sum) {
    return true; // The number is a strong number
  } else {
    return false; // The number is not a strong number
  }
}

// Log the result to the console
isStrong(num)
  ? console.log(`${num} is a Strong Number.`)
  : console.log(`${num} is not a Strong Number.`);
