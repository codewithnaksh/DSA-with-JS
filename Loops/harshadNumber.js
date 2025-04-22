// A Harshad number (or Niven number) is a number that is divisible by the sum of its digits.
// Example: 18 is a Harshad number because the sum of its digits is 1 + 8 = 9, and 18 is divisible by 9.

let num = 18; // Define the number to check

// Function to check if a number is a Harshad number
function isHarshad(num) {
  let n = num; // Store the original number
  let sum = 0; // Initialize the sum of digits to 0

  // Loop to calculate the sum of the digits of the number
  while (n > 0) {
    let digit = n % 10; // Extract the last digit
    sum += digit; // Add the digit to the sum
    n = Math.floor(n / 10); // Remove the last digit from the number
  }

  // Check if the number is divisible by the sum of its digits
  num % sum
    ? console.log(`${num} is not a Harshad Number.`) // Not divisible
    : console.log(`${num} is a Harshad Number.`); // Divisible
}

// Call the function to check if the number is a Harshad number
isHarshad(num);
