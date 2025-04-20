// Define a number to check for primality
let num = 15;

// Function to check if a number is prime
function isPrime(n) {
  // A prime number is greater than 1 and divisible only by 1 and itself
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      // If n is divisible by any number other than 1 and itself
      return false; // Not a prime number
    }
  }
  return true; // Prime number
}

// Call the function and log the result to the console
isPrime(num) // Fixed the function call by passing the number as an argument
  ? console.log(num, "is a Prime Number.")
  : console.log(num, "is not a Prime Number.");
