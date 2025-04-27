const arr = [10, 20, 30, 40, 50]; // Define the array
const target = 30; // Define the target element to search for

// Function to perform linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // Loop through the array
    if (arr[i] === target) {
      // Check if the current element matches the target
      return i; // Return the index if the target is found
    }
  }
  return false; // Return false if the target is not found
}

const res = linearSearch(arr, target); // Call the function and store the result

// Log the result based on whether the target was found
res
  ? console.log(`Target ${target} found at index ${res}, position ${res + 1}`)
  : console.log(`Element not found!`);
