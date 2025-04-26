/**
 * Generates a V-shaped star pattern based on the given number of rows.
 *
 * Problem Statement:
 * - The function creates a star pattern in the shape of the letter "V".
 * - For a given number of rows `n`, the pattern starts with stars at the
 *   outermost positions and gradually moves inward, forming a V shape.
 * - Each row contains spaces followed by two stars, with the number of
 *   spaces decreasing as the rows progress.
 *
 * Example for n = 5:
 *
 *     *       *
 *      *     *
 *       *   *
 *        * *
 *         *
 *
 * @param {number} n - The number of rows for the V-shaped star pattern.
 * @returns {void} - Prints the V-shaped star pattern to the console.
 */

function vShape(rows) {
  for (let i = 1; i <= rows; i++) {
    let cols = ""; // Initialize an empty string for the current row

    // Loop to construct the columns for the current row
    for (let j = 1; j <= rows * 2 - i; j++) {
      if (i == j || j == rows * 2 - i) {
        cols += "*"; // Add a star at the required positions
      } else {
        cols += " "; // Add spaces for other positions
      }
    }

    console.log(cols); // Print the current row
  }
}

vShape(5); // Call the function to print the V-shaped pattern for 5 rows
