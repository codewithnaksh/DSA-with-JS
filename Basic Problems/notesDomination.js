// Dominations available: ₹2000, ₹500, ₹200, ₹100, ₹50, ₹20, ₹10, ₹5, ₹2, ₹1

// Define the total amount to be broken into denominations
let amount = 4327;

// Function to calculate the number of notes/coins for each denomination
function notes(amount) {
  // Check for ₹2000 denomination
  if (amount >= 2000) {
    console.log("₹2000 x", Math.floor(amount / 2000)); // Calculate and log the count of ₹2000 notes
    amount %= 2000; // Update the remaining amount
  }
  // Check for ₹500 denomination
  if (amount >= 500) {
    console.log("₹500 x", Math.floor(amount / 500)); // Calculate and log the count of ₹500 notes
    amount %= 500; // Update the remaining amount
  }
  // Check for ₹200 denomination
  if (amount >= 200) {
    console.log("₹200 x", Math.floor(amount / 200)); // Calculate and log the count of ₹200 notes
    amount %= 200; // Update the remaining amount
  }
  // Check for ₹100 denomination
  if (amount >= 100) {
    console.log("₹100 x", Math.floor(amount / 100)); // Calculate and log the count of ₹100 notes
    amount %= 100; // Update the remaining amount
  }
  // Check for ₹50 denomination
  if (amount >= 50) {
    console.log("₹50 x", Math.floor(amount / 50)); // Calculate and log the count of ₹50 notes
    amount %= 50; // Update the remaining amount
  }
  // Check for ₹20 denomination
  if (amount >= 20) {
    console.log("₹20 x", Math.floor(amount / 20)); // Calculate and log the count of ₹20 notes
    amount %= 20; // Update the remaining amount
  }
  // Check for ₹10 denomination
  if (amount >= 10) {
    console.log("₹10 x", Math.floor(amount / 10)); // Calculate and log the count of ₹10 notes
    amount %= 10; // Update the remaining amount
  }
  // Check for ₹5 denomination
  if (amount >= 5) {
    console.log("₹5 x", Math.floor(amount / 5)); // Calculate and log the count of ₹5 coins
    amount %= 5; // Update the remaining amount
  }
  // Check for ₹2 denomination
  if (amount >= 2) {
    console.log("₹2 x", Math.floor(amount / 2)); // Calculate and log the count of ₹2 coins
    amount %= 2; // Update the remaining amount
  }
  // Check for ₹1 denomination
  if (amount >= 1) {
    console.log("₹1 x", Math.floor(amount / 1)); // Calculate and log the count of ₹1 coins
    amount %= 1; // Update the remaining amount
  }
}

// Call the function with the given amount
notes(amount);
