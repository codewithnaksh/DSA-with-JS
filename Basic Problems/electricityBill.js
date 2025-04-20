// Problem Statement:
// Calculate the electricity bill based on the following rates:
// unit              price
// upto 100          4.2/unit
// 101-200           6/unit
// 201-400           8/unit
// more than 400     13/unit

let units = 350;

// Function to calculate the electricity bill based on the number of units consumed
function billCalc(units) {
  let bill = 0; // Initialize the bill amount to 0

  // Calculate the cost for units above 400
  if (units > 400) {
    bill += 13 * (units - 400); // ₹13 per unit for units above 400
    units = 400; // Reduce units to 400 for further calculations
  }

  // Calculate the cost for units between 201 and 400
  if (units > 200 && units <= 400) {
    bill += 8 * (units - 200); // ₹8 per unit for units between 201 and 400
    units = 200; // Reduce units to 200 for further calculations
  }

  // Calculate the cost for units between 101 and 200
  if (units > 100 && units <= 200) {
    bill += 6 * (units - 100); // ₹6 per unit for units between 101 and 200
    units = 100; // Reduce units to 100 for further calculations
  }

  // Calculate the cost for units up to 100
  if (units <= 100) {
    bill += units * 4.2; // ₹4.2 per unit for units up to 100
  }

  // Return the total bill amount rounded to 2 decimal places
  return bill.toFixed(2);
}

// Log the final bill amount to the console
console.log(`Your final bill is ₹${billCalc(units)}`);
