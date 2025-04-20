// Approach 2 : By using simple maths

// Initialize variables x and y with values
let x = 6,
  y = 9;

// Log the values of x and y before swapping
console.log("---Before---");
console.log("x : ", x);
console.log("y : ", y);

// Function to swap two numbers using arithmetic operations
function swap(x, y) {
  // Add x and y, and assign the result to x
  x = x + y;
  // Subtract the new value of x by y to get the original value of x, and assign it to y
  y = x - y;
  // Subtract the new value of y from x to get the original value of y, and assign it to x
  x = x - y;
  // Return the swapped values as an array
  return [x, y];
}

// Call the swap function and destructure the returned array to update x and y
[x, y] = swap(x, y);

// Log the values of x and y after swapping
console.log("---After---");
console.log("x : ", x);
console.log("y : ", y);
