// WAP to count and print the frequency of each alphabetic character present in the string.
// *ignore spaces in the string

const string = "kabhi khushi kabhi gam";
let lowercaseString = string.toLowerCase();
console.log(`Initial String : ${string}`);
// create an array of size 26 to store frequency of each alphabet
let strMap = Array(26).fill(0);
// count alphabet characters
for (let i=0;i<lowercaseString.length;i++){
    strMap[lowercaseString.charCodeAt(i)-97] += 1;
}
// print characters with non-zero frequency
for (let i=0;i<strMap.length;i++){
    if (strMap[i]!=0) {
        console.log(`${String.fromCharCode(97+i)} : ${strMap[i]}`);
    }
}
