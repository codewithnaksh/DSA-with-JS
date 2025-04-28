// if, Uppercase => Lowercase
// if, Lowercase => Uppercase

const str = "ToggleCase69";
let newStr = "";
console.log(`Original String : ${str}`);
// Loop through each character
for(let i=0;i<str.length;i++){
    let charCode = str.charCodeAt(i);
    // check if uppercase letter
    if (charCode>=65 && charCode<=90) {
        newStr += String.fromCharCode(charCode+32); //convert to lowercase
    }
    // check if lowercase letter
    else if (charCode>=97 && charCode<=127) {
        newStr += String.fromCharCode(charCode-32); //convert to uppercase
    }
    // for non-alphabetic character
    else newStr += str[i]; //keep as it is
}

console.log(`After Toggle    : ${newStr}`);
