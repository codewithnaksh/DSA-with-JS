// capitalize First and Last character of each and every word in the given String.

// Input string
const string = "This is a Random String";
console.log(`Original String : ${string}`);

// Split the string into an array of words
const words = string.split(" ");
let newString = "";

// Loop through each word in the array
for (let word of words) {
  // Loop through each character in the word
  for (let i = 0; i < word.length; i++) {
    // Capitalize the first and last character of the word
    if (i == 0 || i == word.length - 1) {
      newString += word[i].toUpperCase();
    }
    // Append other characters as they are
    else newString += word[i];
  }
  // Add a space after processing each word
  newString += " ";
}

// Output the final string with capitalized first and last characters of each word
console.log(`Final String    : ${newString}`);
