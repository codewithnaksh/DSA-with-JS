// Principal amount, rate of interest, and time period
let P = 25000,
  R = 10,
  T = 2;

// Function to calculate compound interest
function ci(P, R, T) {
  // Compound interest formula: A = P * (1 + R/100)^T
  let C = P * (1 + R / 100) ** T;
  return C.toFixed(2); // Return the result rounded to 2 decimal places
}

// Calculate the final amount using the compound interest function
let result = ci(P, R, T);

// Display the input values and the calculated result
console.log(`Investment Amount : ₹${P}`);
console.log("Rate of interest(in percentage) : ", R);
console.log("Time for which the money is borrowed(in years) :", T);
console.log("------------------------------------------------------");
console.log(`Final Amount to be paid : ₹${result}`);
