// Approach 1 : Using 3rd variable

// Initialize variables x and y with values
let x = 6,
  y = 9;

// Log the values of x and y before swapping
console.log("---Before---");
console.log("x : ", x);
console.log("y : ", y);

// Function to swap two numbers using a temporary variable
function swap(x, y) {
  // Store the value of x in a temporary variable
  let temp = x;
  // Assign the value of y to x
  x = y;
  // Assign the value of the temporary variable (original x) to y
  y = temp;
  // Return the swapped values as an array
  return [x, y];
}

// Call the swap function and destructure the returned array to update x and y
[x, y] = swap(x, y);

// Log the values of x and y after swapping
console.log("---After---");
console.log("x : ", x);
console.log("y : ", y);
