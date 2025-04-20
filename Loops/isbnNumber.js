// An ISBN (International Standard Book Number) is a unique identifier for books.
// It is typically a 10-digit or 13-digit number.
// For a 10-digit ISBN, the last digit is a checksum calculated using the formula:
// (1*d1 + 2*d2 + 3*d3 + ... + 10*d10) % 11 == 0, where d1, d2, ..., d10 are the digits of the ISBN.

let num = "0471958697"; // Define the ISBN number to check

// Function to check if a given number is a valid 10-digit ISBN
function isISBN(num) {
  let sum = 0; // Initialize the sum to 0

  // Loop through each digit of the number
  for (let i = 1; i <= num.length; i++) {
    sum += Number(num[i - 1]) * i; // Multiply the digit by its position and add to the sum
  }

  // Check if the sum is divisible by 11
  if (sum % 11 == 0) {
    return true; // The number is a valid ISBN
  }
  return false; // The number is not a valid ISBN
}

// Log the result to the console
isISBN(num)
  ? console.log(`${num} is an ISBN number.`)
  : console.log(`${num} is not an ISBN number.`);
