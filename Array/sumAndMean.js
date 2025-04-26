// Program to Calculate Sum and Mean of Array Elements

const prompt = require("prompt-sync")(); // Import prompt-sync for user input

let n = Number(prompt("Enter the Size of Array : ")); // Take the size of the array as input
let arr = new Array(n); // Create an array of size 'n'

// Fill the array with user inputs
for (let i = 0; i < arr.length; i++) {
  arr[i] = Number(prompt(`Enter element at ${i} index : `)); // Take input for each element
}

console.log("Array : ", arr); // Display the array

let sum = 0; // Initialize sum to 0

// Calculate the sum of array elements
for (let element of arr) {
  sum += element; // Add each element to the sum
}

console.log(`Sum of Array elements : ${sum}`); // Display the sum
console.log(`Mean of Array elements : ${Math.floor(sum / n)}`); // Calculate and display the mean
