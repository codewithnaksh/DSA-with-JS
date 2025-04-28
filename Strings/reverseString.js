// Since strings are immutable, hence we need to create a new string and copy character from original string in reverse order

const str = "Hello World";
console.log(`Original String : ${str}`);

let newStr = "";
for (let i=str.length-1; i>=0; i--){
    newStr += str[i];
}

console.log(`Reversed String : ${newStr}`);


// Now, we need to reverse the individual words while not discturbing their order
console.log("----------------------------------");


const sentence = "Interview Question";
console.log("Oringinal string :",sentence);

const words = sentence.split(" ");
let newSentence = "";

for(let word of words){
    for (let i=word.length-1;i>=0; i--){
        newSentence += word[i]; 
    }
    newSentence += " ";
}

console.log(`Reversed String : ${newSentence}`);


