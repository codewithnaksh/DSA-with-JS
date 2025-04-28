const prompt = require("prompt-sync")();

const size = Number(prompt("Enter the size of NxN matrix : "));
let matrix = Array(size).fill(Array(size).fill(6));
console.log(matrix);

// for(let i=0;i<matrix.length;i++){
//     matrix[i] = Array(size).fill(0)
// }

//taking inputs from user
const userChoice = Number(
  prompt("Press 1 if you want to give custom input\nelse Press 0.\n")
);
if (userChoice) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      matrix[i][j] = Number(prompt(`Enter element at ${i},${j} index : `));
    }
  }
}

console.log(matrix);
