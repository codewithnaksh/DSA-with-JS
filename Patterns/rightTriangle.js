// Right Triangle - Star Pattern
// Example for n = 5:
// *
// * *
// * * *
// * * * *
// * * * * *

function rightTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let cols = ""; // Initialize an empty string for the current row
    for (let j = 0; j <= i; j++) {
      cols += "* "; // Append a star for each column in the current row
    }
    console.log(cols); // Print the current row
  }
}

rightTriangle(5); // Call the function to print the pattern for 5 rows
