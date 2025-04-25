// Define a number for which the factors will be calculated
let num = 49;

// Function to find and print all factors of a given number
function factors(n) {
  console.log("Factors of", n, "are ->"); // Print the header message
  if (n==1) {
    console.log(1);
    return;
  }
  console.log(1); // 1 is always a factor of any number

  // Loop from 2 to n/2 to find factors
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      // Check if i is a factor of n
      console.log(i); // Print the factor
    }
  }

  console.log(n); // The number itself is always a factor
}

// Call the function to print factors of the given number
factors(num);
