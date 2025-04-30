// A panagram is a sentence where every letter of the English alphabet appears at least once.

const sentence = "Aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz"; // Input sentence
const alphabets = "abcdefghijklmnopqrstuvwxyz"; // Reference string containing all alphabets

// Convert the sentence to lowercase, split into characters, and sort them
let sortedSentenceArray = [...sentence.toLowerCase()].sort();

// Create a Set to remove duplicate characters from the sorted array
let sortedSentenceSet = new Set(sortedSentenceArray);

// Convert the Set back to a string
let myFinalString = [...sortedSentenceSet].join("");

// Compare the final string with the reference alphabets string to check if it's a panagram
alphabets === myFinalString
  ? console.log("This sentence is Panagram") // If they match, it's a panagram
  : console.log("This sentence is not Panagram"); // Otherwise, it's not a panagram
