let N = 548928; // Define the number to find the largest digit

function largestDigit(N) {
  let largest = -Infinity; // Initialize the largest digit to the smallest possible value

  // Loop through each digit of the number
  while (N > 0) {
    let digit = N % 10; // Extract the last digit
    if (digit > largest) {
      largest = digit; // Update the largest digit if the current digit is greater
    }
    N = Math.floor(N / 10); // Remove the last digit
  }

  return largest; // Return the largest digit
}

console.log(`Largest Digit of ${N} is ${largestDigit(N)}`); // Log the result
