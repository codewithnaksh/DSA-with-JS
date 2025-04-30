// Input string to analyze character frequency
const str = "Hakuna Mathata";

// Function to calculate and print the frequency of each character in the sentence
function characterFrequency(sentence) {
  // Create a Set to store unique characters from the sentence
  let mySet = new Set(sentence);

  // Iterate over each unique character in the Set
  for (let char of mySet) {
    // Check if the character is an alphabet (either uppercase or lowercase)
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
      let frequency = 0; // Initialize frequency counter for the character

      // Iterate over the sentence to count occurrences of the character
      for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === char) {
          frequency++; // Increment frequency if the character matches
        }
      }

      // Print the character and its frequency
      console.log(`${char} : ${frequency}`);
    }
  }
}

// Call the function with the input string
characterFrequency(str);

console.log("----------------------------------------------------------");
// -------------------------------------------------------------------- Method 2

function characterFreqMap(sentence) {
    const freqMap = new Map();
    for (let char of sentence){
        if (char >= 'A' && char <='Z' || char >= 'a' && char <= 'z') {
            freqMap.set(char, (freqMap.get(char) || 0)+1);
        }
    }

    // sort keys aplhabetically and print frequencies
    const sortedKeys = [...freqMap.keys()].sort();
    for (let key of sortedKeys) {
        console.log(`${key} : ${freqMap.get(key)}`);
    }
}
characterFreqMap(str);