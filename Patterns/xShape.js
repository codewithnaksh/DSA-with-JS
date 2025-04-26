/**
 * Solves the "X shape pattern" problem by generating a pattern

 * Example for `n = 5` and symbol `*`:
 * ```
 * *   *
 *  * *
 *   *
 *  * *
 * *   *
 * ```
 *
 * Constraints:
 * - `n` should be a positive odd integer.
 *
 * @param {number} n - The size of the grid (must be a positive odd integer).
 * @returns {string} The generated 'X' shape pattern as a string.
 */

function xShape(rows) {
  for (let i = 0; i < rows; i++) {
    let cols = ""; // Initialize an empty string for the current row

    // Loop to construct the columns for the current row
    for (let j = 0; j < rows; j++) {
      if (i == j || j == rows - 1 - i) {
        cols += "* "; // Add a star at the diagonal positions
      } else {
        cols += "  "; // Add spaces for other positions
      }
    }

    console.log(cols); // Print the current row
  }
}

xShape(5); // Call the function to print the X-shaped pattern for 5 rows
