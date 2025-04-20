// Define the base number and the power to which it will be raised
let num = 2,
  pow = 3;

// Function to calculate the result of raising a number to a power
function raiseToThePower(num, pow) {
  // Handle the case where both the base and power are 0 (undefined result)
  if (num == 0 && pow == 0) {
    return undefined;
  }

  // If the power is 0, return 1 (any number raised to the power of 0 is 1)
  if (pow == 0) {
    return 1;
  }

  // If the power is 1, return the number itself
  if (pow == 1) return num;

  // Initialize the result with the base number
  let res = num;

  // Multiply the base number by itself (pow - 1) times
  for (let i = 2; i <= pow; i++) {
    res *= num;
  }

  // Return the calculated result
  return res;
}

// Log the result of raising the number to the given power
console.log(
  `${num} raise to the power of ${pow} = ${raiseToThePower(num, pow)}`
);
