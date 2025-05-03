const n = 127; // Input octal number

function octalToDecimal(n) {
  let decimalEquivalent = 0,
    i = 0; // Initialize decimal equivalent and power index

  // Loop to process each digit of the octal number
  while (n > 0) {
    let digit = n % 10; // Extract the last digit of the octal number
    let base = 8 ** i; // Calculate the power of 8 for the current position
    decimalEquivalent += digit * base; // Add the contribution of the current digit to the decimal equivalent
    i += 1; // Increment the power index
    n = Math.floor(n / 10); // Remove the last digit from the octal number
  }

  return decimalEquivalent; // Return the decimal equivalent
}

// Print the conversion result
console.log(`${n}(octal) => ${octalToDecimal(n)}(decimal)`); // Output the octal to decimal conversion
