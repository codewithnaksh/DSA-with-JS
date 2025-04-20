// Approach 3 : Using JS specific, Array Destructuring

// Initialize variables x and y with values
let x = 6,
  y = 9;

// Log the values of x and y before swapping
console.log("---Before---");
console.log("x : ", x);
console.log("y : ", y);

// Function to swap two numbers using array destructuring
function swap(x, y) {
  // Return an array with the values swapped
  return [y, x];
}

// Call the swap function and destructure the returned array to update x and y
[x, y] = swap(x, y);

// Log the values of x and y after swapping
console.log("---After---");
console.log("x : ", x);
console.log("y : ", y);
