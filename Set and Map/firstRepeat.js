// Find the first character that appears twice in a string

const string = "abcccbaaacz";

function firstCharToRepeat() {
    // initialize a set to keep track of seen characters
    const mytrack = new Set();
    // loop through each character in the input string
    for (let i=0; i<string.length; i++){
        // if the character has already been seen, it's the first repeated character
        if (mytrack.has(string[i])) {
            return string[i];
        }
        // otherwise, add the character to the set
        mytrack.add(string[i]);
    }
}

console.log(firstCharToRepeat());
 
