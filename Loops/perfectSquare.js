// Example: 25 -> 5 x 5 (25 is a perfect square)

let num = 25; // Define the number to check

// Function to check if a number is a perfect square
function isPerfectSquare(n) {
  // Array of last digits that cannot belong to a perfect square
  const nonPerfectSq = [2, 3, 7, 8];

  // Check if the last digit of the number matches any in the non-perfect square list
  for (let digit of nonPerfectSq) {
    if (n % 10 == digit) {
      return false; // If it matches, the number is not a perfect square
    }
  }

  // Calculate the square root of the number
  let sqrt = Math.sqrt(n);

  // Check if the square root is an integer
  if (sqrt % 1 !== 0) {
    return false; // If not, the number is not a perfect square
  }

  return true; // The number is a perfect square
}

// Log the result to the console
isPerfectSquare(num)
  ? console.log(`${num} is a Perfect square.`)
  : console.log(`${num} is not a Perfect square.`);
