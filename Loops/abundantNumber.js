// An abundant number is a number for which the sum of its proper divisors (excluding itself) is greater than the number itself.
// Example: 12 is an abundant number because its divisors are 1, 2, 3, 4, and 6, and their sum is 16, which is greater than 12.

let num = 15;

function isAbundant(n) {
    let sum = 1;
    for(let i=2; i<=n/2; i++){
        if (n%i == 0) {
            sum+=i;
        }
    }
    sum > n ? console.log(n,"is an Abundant Number.") : console.log(n,"is not an Abundant Number.");
}

isAbundant(num);