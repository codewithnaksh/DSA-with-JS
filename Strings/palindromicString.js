// ulta seedha ek saman
// ex => naman
let str = "naman";

function isPalindromic(str) {
    // compare characters from both ends moving towards the center
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j]) {
      return false;
    }
  }
  return true;
}

isPalindromic(str)
  ? console.log(`String "${str}" is a Palindromic String`)
  : console.log(`String ${str} is not a Palindromic String.`);
