let arr = [1, 2, 3, 4, 5]; // Define the initial array
console.log(`Initial Array   : ${arr}`);

// ----------------------Approach 1---------------------------------
// Use `shift` to remove the first element and `push` to add it to the end
let temp = arr.shift();
arr.push(temp);

console.log(`Left shift by 1 : ${arr}`);

// ----------------------Approach 2---------------------------------
// Manually shift elements to the left
let firstEle = arr[0]; // Store the first element
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1]; // Shift each element to the left
}
arr[arr.length - 1] = firstEle; // Place the first element at the end

console.log(`Left shift by 1 : ${arr}`);

