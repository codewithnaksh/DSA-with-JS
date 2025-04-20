// Define the year to check
let year = 2025;

// Function to determine if a given year is a leap year
function isLeap(year) {
  // A year is a leap year if it is divisible by 4
  if (year % 4 == 0) {
    // If the year is divisible by 100, it must also be divisible by 400 to be a leap year
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true; // Leap year
      } else return false; // Not a leap year
    } else return true; // Leap year
  } else return false; // Not a leap year
}

// Log the result to the console with an appropriate message
isLeap(year)
  ? console.log(
      "Hurray!",
      year,
      "is a leap year. Enjoy 1 extra day of the year."
    ) // Corrected "I" to "1"
  : console.log(year, "is not a leap year.");
