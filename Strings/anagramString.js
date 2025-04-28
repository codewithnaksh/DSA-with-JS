/*
 Two words are considered anagrams if :
    ✅They are of equal length
    ✅They have the same frequency of each character
*/

let s1 = "arc", s2 = "car";

function isAnagram(s1,s2) {
    // if lengths are different, they can't be anagrams
    if (s1.length !== s2.length) {
        return false;
    }
    // convert both strings to lowercase
    s1 = s1.toLowerCase(); 
    s2 = s2.toLowerCase(); 
    // sort both strings to lowercase
    let sorted1 = s1.split("").sort().join("");
    let sorted2 = s2.split("").sort().join("");

    return sorted1 === sorted2;
}
isAnagram(s1,s2) ? console.log(`"${s1}" and "${s2}" are Anagram strings.`) : console.log(`"${s1}" and "${s2}" are not Anagram strings.`);
