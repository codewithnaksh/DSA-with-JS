// Initialize an array for bubble sort
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log(`Initial Array : ${arr}`);

// Sorting elements in ascending order using bubble sort
for (let i = 0; i < arr.length; i++) {
  let bubble = arr[0]; // Initialize the first element as the "bubble"
  for (let j = 1; j < arr.length - 1 - i; j++) {
    // Iterate through unsorted elements
    if (bubble > arr[j]) {
      // Swap if the current element is smaller than the bubble
      [arr[arr.indexOf(bubble)], arr[j]] = [arr[j], arr[arr.indexOf(bubble)]];
    } else if (bubble < arr[j]) {
      bubble = arr[j]; // Update the bubble to the current element
    }
  }
}

console.log(`Sorted Array : ${arr}`); // Log the sorted array
