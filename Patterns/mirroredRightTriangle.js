/* Problem Statement:
 Create a Mirrored Right Triangle pattern using asterisks (*) for a given number of rows.
 For example, if the number of rows is 5, the output should be:
     *
    **
   ***
  ****
 *****
*/

function mirroredRightTri(rows) {
  for (let i = 0; i < rows; i++) {
    let cols = ""; // Initialize an empty string for the current row

    // Add spaces to align the stars to the right
    for (let j = 0; j < rows - i - 1; j++) {
      cols += "  ";
    }

    // Add stars for the current row
    for (let k = 0; k <= i; k++) {
      cols += "* ";
    }

    console.log(cols); // Print the current row
  }
}

mirroredRightTri(5); // Call the function to print the pattern for 5 rows
