let N = 3; // Number of positions to rotate the array
let arr = [1, 2, 3, 4, 5]; // Define the initial array
console.log(`Initial Array   : ${arr}`);

// Function to perform left rotation by N positions
function leftRotate(arr, N) {
  if (N % arr.length === 0) {
    // If N is a multiple of the array length, no rotation is needed
    return arr;
  }
  if (N > arr.length) {
    // If N is greater than the array length, reduce it using modulo
    N = N % arr.length;
  }
  let elements = arr.splice(0, N); // Remove the first N elements
  arr.push(elements); // Append the removed elements to the end of the array
  return arr;
}

console.log(`Left shift by ${N} : ${leftRotate(arr, N)}`); // Log the rotated array
