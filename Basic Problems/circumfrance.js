// Define the radius of the circle
let r = 5;

// Function to calculate the circumference of a circle given its radius
function circumfrance(r) {
  // Formula: Circumference = 2 * π * radius, rounded to 2 decimal places
  return (2 * Math.PI * r).toFixed(2);
}

// Log the result to the console
console.log("The circumfrance of circle with radius", r, "is", circumfrance(r));
