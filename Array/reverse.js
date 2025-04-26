let arr = [8, 13, 69, 96, 31, 80]; // Define the original array
console.log(`Original Array : ${arr}`);

// Reversing by using a new array
let newArr = Array(arr.length); // Create a new array of the same length
for (let i = 0; i < arr.length; i++) {
  newArr[i] = arr[arr.length - 1 - i]; // Assign elements in reverse order
}
console.log(`Reversed Array : ${newArr}`);

// Reversing by using the Two-pointer algorithm
let i = 0,
  j = arr.length - 1; // Initialize two pointers at the start and end of the array
while (i < j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap the elements at the two pointers
  i++; // Move the start pointer forward
  j--; // Move the end pointer backward
}
console.log(`Reversed Array : ${arr}`); // Log the reversed array
