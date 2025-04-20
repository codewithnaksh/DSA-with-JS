// Define a positive number for which the factorial will be calculated
let positiveNum = 5;

// Function to calculate the factorial of a given number
function factorial(n) {
  let fact = 1; // Initialize the factorial result to 1

  // If the number is 0 or 1, return 1 as their factorial is 1
  if (n == 0 || n == 1) {
    return fact;
  }

  // Use a while loop to calculate the factorial for numbers greater than 1
  while (n > 1) {
    fact *= n; // Multiply the current value of fact by n
    n--; // Decrement n by 1
  }

  // Return the calculated factorial
  return fact;
}

// Log the factorial of the given number to the console
console.log(`Factorial of ${positiveNum} is ${factorial(positiveNum)}`);
