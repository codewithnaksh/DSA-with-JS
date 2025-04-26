let arr = [8, 13, 69, 96, 31, 80]; // Define the array

let greatest = -Infinity,
  secondGreatest = -Infinity; // Initialize variables to track the greatest and second greatest elements

// Loop through the array to find the greatest and second greatest elements
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > greatest) {
    secondGreatest = greatest; // Update second greatest
    greatest = arr[i]; // Update greatest
  } else if (arr[i] > secondGreatest && arr[i] < greatest) {
    secondGreatest = arr[i]; // Update second greatest if the current element is smaller than greatest
  }
}

console.log(
  `Greatest element in given array is ${greatest} and second greatest is ${secondGreatest}`
); // Log the results
