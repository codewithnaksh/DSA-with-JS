// An automorphic number is a number whose square ends with the same digits as the number itself.
// Example: 25 is an automorphic number because 25^2 = 625, which ends with 25.

let num = 25; // Define the number to check

// Function to check if a number is automorphic
function isAutomorphic(n) {
  let square = Math.pow(n, 2); // Calculate the square of the number

  // Loop to compare the digits of the number and its square
  while (n > 0) {
    if (n % 10 !== square % 10) {
      // Compare the last digits of the number and its square
      return false; // If they don't match, it's not an automorphic number
    }
    n = Math.floor(n / 10); // Remove the last digit from the number
    square = Math.floor(square / 10); // Remove the last digit from the square
  }

  return true; // If all digits match, it's an automorphic number
}

// Log the result to the console
isAutomorphic(num)
  ? console.log(`${num} is an Automorphic number.`)
  : console.log(`${num} is not an Automorphic number.`);
