// Define a number whose digits will be summed
let num = 69;

// Function to calculate the sum of digits of a given number
function sumOfDigits(num) {
  let sum = 0; // Initialize the sum to 0

  // Loop until the number becomes 0
  while (num > 0) {
    let digit = num % 10; // Extract the last digit of the number
    sum += digit; // Add the digit to the sum
    num = Math.floor(num / 10); // Remove the last digit from the number
  }

  // Return the calculated sum of digits
  return sum;
}

// Log the sum of digits of the given number to the console
console.log(`Sum of digits of ${num} = ${sumOfDigits(num)}`);
