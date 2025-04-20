// Function to generate a random single-digit number (0-9)
function randomNum() {
  return Math.floor(Math.random() * 10);
}

// Function to generate an OTP of specified length
function otpGen(len) {
  let otp = ""; // Initialize an empty string to store the OTP
  while (len > 0) {
    otp += randomNum(); // Append a random digit to the OTP
    len--; // Decrease the length counter
  }
  return otp; // Return the generated OTP
}

// Generate and log a 6-digit OTP
console.log("Your OTP is", otpGen(6));
