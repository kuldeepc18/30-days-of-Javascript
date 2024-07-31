// Define the regular expression pattern to validate a simple password
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9\s]).{8,}$/;

// Define the test password
const password = 'kuldeep@123';

// Test the password against the regular expression
const isValid = regex.test(password);

// Log whether the password is valid
console.log(`Password is valid: ${isValid}`);