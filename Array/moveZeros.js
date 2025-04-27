let arr = [0, 1, 0, 1, 0, 1]; // Define the array with zeros and ones

console.log(`Before : ${arr}`); // Log the original array

// Loop through the array to move all zeros to the end
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    // Check if the current element is zero
    arr.splice(i, 1); // Remove the zero from the current position
    arr.push(0); // Add the zero to the end of the array
  }
}

console.log(`After : ${arr}`); // Log the modified array
