/* Inverted Right Triangle
 Example for n = 5
 *****
 ****
 ***
 **
 *
*/

function invertedRightTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let cols = ""; // Initialize an empty string for the current row
    for (let j = rows - i; j > 0; j--) {
      cols += "* "; // Append a star for each column in the current row
    }
    console.log(cols); // Print the current row
  }
}

invertedRightTriangle(5); // Call the function to print the pattern for 5 rows
