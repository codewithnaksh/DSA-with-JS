// Define a sentence to reverse its words
let sentence = "Hello Hi";
console.log("Before :", sentence); // Log the original sentence

// Function to reverse each word in a sentence
function sentenceReverse(str) {
  let strArr = str.split(" "); // Split the sentence into an array of words
  let newStr = ""; // Initialize the reversed sentence

  // Loop through each word in the array
  for (let item of strArr) {
    let j = item.length - 1; // Start from the last character of the word
    while (j >= 0) {
      newStr += item[j]; // Append the character to the new string
      j--; // Move to the previous character
    }
    newStr += " "; // Add a space after each reversed word
  }

  return newStr; // Return the reversed sentence
}

let newStr = sentenceReverse(sentence); // Call the function to reverse the sentence
console.log("After  :", newStr); // Log the reversed sentence
