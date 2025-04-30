// LeetCode Problem: Jewels and Stones
// You're given strings `jewels` representing the types of stones that are jewels, 
// and `stones` representing the stones you have. Each character in `stones` is a type of stone you have. 
// You want to know how many of the stones you have are also jewels.


let jewels = "aA"; //string representing types of jewels
let stones = "aAAbbbb" //string representing the stones you have

// we need to count the stones that are jewels
function countJewelsInStones(jewels, stones) {
    // create a set to store unique jewel characters
    const jewelSet = new Set(jewels);
    // initialize a counter to keep track of jewels found in stones
    let count = 0;
    // iterate through each character in the stones string
    for(let char of stones){
        // check if the current character (stone) is a jewel
        if (jewelSet.has(char)) {
            // if it's a jewel, increment the count
            count++;
        } 
    }
    return count;
}
console.log(countJewelsInStones(jewels, stones));

























// function numJewelsInStones(jewels, stones) {
//     let jewelSet = new Set(jewels);
//     let count = 0;

//     for (let stone of stones) {
//         if (jewelSet.has(stone)) {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage:
// const jewels = "aA";
// const stones = "aAAbbbb";
// console.log(numJewelsInStones(jewels, stones)); // Output: 3