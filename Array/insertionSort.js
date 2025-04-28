/**
 * Insertion sort works by dividing the array into a sorted and an unsorted part.
 * Initially, the sorted part contains the first element, and the rest is unsorted.
 * The algorithm iterates through the unsorted part, picking one element at a time,
 * and places it in its correct position in the sorted part by shifting elements.
 * 
 * Steps:
 * 1. Start from the second element (index 1) as the first element is considered sorted.
 * 2. Compare the current element with elements in the sorted part (to its left).
 * 3. Shift elements in the sorted part to the right until the correct position is found.
 * 4. Insert the current element into its correct position.
 * 5. Repeat until the entire array is sorted.
 * 
 * Time Complexity: O(n^2)
 */

// Initialize an array for insertion sorting
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(`Initial Array : ${arr}`);

// Perform insertion sort
// Iterate from the second element to the last
for (let i = 1; i < arr.length; i++) {
  let j = i - 1; // Start comparing from the previous element
  while (j >= 0) {
    if (arr[j] > arr[j + 1]) {
      // Swap if the current element is greater than the next
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
    j--; // Move to the previous element
  }
}

console.log(`Sorted Array  : ${arr}`); // Log the sorted array
