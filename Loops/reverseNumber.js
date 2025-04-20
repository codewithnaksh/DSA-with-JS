// Define a number to be reversed
let num = 1308;

// Function to reverse the digits of a given number
function reverse(num) {
  console.log(`Before : ${num}`); // Log the original number

  let reverseNum = 0; // Initialize the reversed number to 0
  let numLength = String(num).length - 1; // Calculate the number of digits minus 1

  // Loop until the number becomes 0
  while (num > 0) {
    let digit = num % 10; // Extract the last digit of the number
    reverseNum += digit * 10 ** numLength; // Add the digit to its reversed position
    num = Math.floor(num / 10); // Remove the last digit from the number
    numLength--; // Decrease the position multiplier
  }

  // Return the reversed number
  return reverseNum;
}

// Log the reversed number to the console
console.log(`After : ${reverse(num)}`);


// __________________________________________________________________________________________________


// Better approach
function efficientReverse(num) {
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + num%10;
        num = Math.floor(num/10);
    }
    return rev;
}

console.log(`Efficient Reverse : ${efficientReverse(num)}`);
