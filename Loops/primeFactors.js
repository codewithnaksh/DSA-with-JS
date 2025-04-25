let x = 33;

const { isPrime } = require("./prime.js");

function primeFactors(n) {
  let output = `Prime factors of ${n} are : `;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0 && isPrime(i)) {
      output += i + " ";
    }
  }
  if (isPrime(n)) {
    output += n;
  }
  console.log(output);
}

primeFactors(x);
