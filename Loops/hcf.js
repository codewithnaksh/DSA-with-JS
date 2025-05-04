let a = 105,
  b = 36; // Define two numbers to calculate their HCF

// Function to calculate the HCF (Highest Common Factor) using Euclid's algorithm
export function gcd(x, y) {
  // Ensure x is the larger number
  if (x < y) {
    [x, y] = [y, x]; // Swap x and y if x is smaller
  }

  let r = x % y; // Calculate the remainder of x divided by y

  // Repeat until the remainder becomes 0
  while (r !== 0) {
    x = y; // Assign y to x
    y = r; // Assign the remainder to y
    r = x % y; // Recalculate the remainder
  }

  return y; //return the result
}

console.log(`GCD of ${a} and ${b} = ${gcd(a, b)}`); // Call the function and console the result

// Approach 2

function hcf(x, y) {
  for (let num = Math.min(x, y); num >= 1; num--) {
    if (x % num == 0 && y % num == 0) {
      return num;
    }
  }
}
console.log(`HCF of ${a} and ${b} = ${hcf(a, b)}`); // Call the function and console the result

// Approach 3
// Bdey mai se chota number minus krdoo

function simpleHCF(chotaNumber, badaNumber) {
  if (badaNumber < chotaNumber) {
    [badaNumber, chotaNumber] = [chotaNumber, badaNumber];
  }
  while (badaNumber !== chotaNumber) {
    let temp = badaNumber - chotaNumber;
    if (temp < chotaNumber) {
      chotaNumber = temp;
    } else badaNumber = temp;
  }
  return chotaNumber;
}
console.log(`HCF of ${a} and ${b} = ${simpleHCF(a, b)}`); // Call the function and console the result
