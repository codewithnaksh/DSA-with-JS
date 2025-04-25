// The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones.
// The sequence starts with 0 and 1.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, ...

let noOfTerms = 5; // Define the number of terms to generate in the Fibonacci series

// Function to generate the Fibonacci series up to the given number of terms
function fibonacciSeries(terms) {
  let firstTerm = 0, // Initialize the first term of the series
    secondTerm = 1; // Initialize the second term of the series

  let output = `Your Fibonacci series of ${terms} terms : `; // Initialize the output string

  // Handle the case where only 1 term is requested
  if (terms == 1) {
    output += "0"; // The first term is 0
  }

  // Handle the case where 2 terms are requested
  if (terms == 2) {
    output += "0, 1"; // The first two terms are 0 and 1
  }

  // Start the series with "0, 1" for terms greater than 2
  output += "0, 1";

  // Loop to calculate the remaining terms of the series
  for (let i = 3; i <= terms; i++) {
    output += `, ${firstTerm + secondTerm}`; // Append the next term to the output string
    secondTerm = firstTerm + secondTerm; // Update the second term
    firstTerm = secondTerm - firstTerm; // Update the first term
  }

  console.log(output); // Log the final Fibonacci series
}

// Call the function to generate and display the Fibonacci series
fibonacciSeries(noOfTerms);


// -----------------------------------------------------------------------------------------------

// Sum of even indexed Fibonacci numbers : N = 4 : Output = 33

let N = 4;

function evenIndexedSum(N) {
    let sum = 0;
    let first = 0; //0th index
    let second = 1; //1st index
    for (let i=2; i<=N*2;i++){
        // looping from 2nd index upto Nx2th index
        second = first + second;
        first = second - first;
        if (i%2==0) {
            sum+= second;
        }
    }
    console.log(`Sum of Fibonacci numbers at even indices upto ${2*N}(Nx2) : ${sum}✅`);
}
evenIndexedSum(N);