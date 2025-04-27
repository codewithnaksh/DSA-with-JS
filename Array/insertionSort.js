// Initialize an array for insertion sorting
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(`Initial Array : ${arr}`);

// Perform insertion sort
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
