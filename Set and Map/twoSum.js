const arr = [8, 13, 31, 80]; // Input array of numbers
const value = 44; // Target value to find the sum

// Function to find two indices such that their values sum up to the target value
function twoSum() {
  // Iterate through each pair of indices in the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // Ensure the indices are not the same
      if (i !== j) {
        // Check if the sum of the two values equals the target value
        if (arr[i] + arr[j] === value) {
          return [i, j]; // Return the indices if a match is found
        }
      }
    }
  }
}

const [i, j] = twoSum(); // Call the function and destructure the result
console.log(`Values of Index ${i}, ${j} sums up ${value}`); // Print the result

// ----------------------------------------------- Approach 2
console.log("-------------Approach2-------------");

function twoSumNewApproach() {
  // create a map to store the index of the numbers as we iterate through the array
  let myMap = new Map();
  // iterate over the array of unique numbers
  for (let i = 0; i < arr.length; i++) {
    // calculate the complement by subtracting the current number from the target value
    let complement = value - arr[i];
    // check if the complement is already in the map
    // (i.e., if we previously encountered the number that would complete the sum)
    if (myMap.has(complement)) {
      // if found, return the indices: the index of complement and the current value
      return [myMap.get(complement), i];
    }
    // otherwise, store the current number along with its index in the map
    myMap.set(arr[i], i);
  }
  // if no solution is found, the function will return undefined
  return [undefined, undefined];
}
const [index1, index2] = twoSumNewApproach(); // Call the function and destructure the result
console.log(`Values of Index ${index1}, ${index2} sums up ${value}`); // Print the result
