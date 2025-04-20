// Define the sides of the triangle
let a = 7,
  b = 8,
  c = 9;

// Function to check if the given sides form a valid triangle
function isValidTriangle(a, b, c) {
  // A triangle is valid if the sum of any two sides is greater than the third side
  return a + b > c && b + c > a && c + a > b;
}

// Function to calculate the area of a triangle using Heron's formula
function area(a, b, c) {
  // Calculate the semi-perimeter
  let s = (a + b + c) / 2;
  // Calculate and return the area
  return Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
}

// Check if the triangle is valid and calculate the area if it is
if (isValidTriangle(a, b, c)) {
  console.log("Area of Triangle : ", area(a, b, c));
} else {
  console.error("Enter valid dimensions of a triangle");
}
