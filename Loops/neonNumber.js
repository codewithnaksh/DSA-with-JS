// A neon number is a number where the sum of the digits of its square is equal to the number itself.
// Example: 9 is a neon number because 9^2 = 81, and 8 + 1 = 9.

let num = 9; // Define the number to check

// Function to check if a number is a neon number
function isNeon(num) {
  let numSq = Math.pow(num, 2); // Calculate the square of the number
  let sum = 0; // Initialize the sum of the digits of the square

  // Loop to calculate the sum of the digits of the square
  while (numSq > 0) {
    let digit = numSq % 10; // Extract the last digit of the square
    sum += digit; // Add the digit to the sum
    numSq = Math.floor(numSq / 10); // Remove the last digit from the square
  }

  // Check if the sum of the digits equals the original number
  sum === num
    ? console.log(`${num} is a Neon Number.`) // If true, log that it is a neon number
    : console.log(`${num} is not a Neon Number.`); // Otherwise, log that it is not a neon number
}

// Call the function to check if the number is a neon number
isNeon(num);
