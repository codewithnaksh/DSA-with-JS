function printFibonacci(n) {
  // Handle invalid or zero input
  if (n <= 0) {
    return;
  }
  // Handle the case where n is 1
  if (n === 1) {
    process.stdout.write("0\n");
    return;
  }
  // Handle the case where n is 2
  if (n === 2) {
    process.stdout.write("0 1\n");
    return;
  }

  // Recursive function to calculate the nth Fibonacci number
  function fibonacci(num) {
    if (num <= 1) {
      return num;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  // Loop to print the first n Fibonacci numbers
  for (let i = 0; i < n; i++) {
    process.stdout.write(fibonacci(i) + " ");
  }
  process.stdout.write("\n"); // Add a newline at the end for proper formatting
}

printFibonacci(5);
