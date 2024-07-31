// Define the regular expression pattern to validate a URL
const regex = /^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]{2,}){1,2}$/;

// Define the test URL
const url = 'https://www.google.com';

// Test the URL against the regular expression
const isValid = regex.test(url);

// Log whether the URL is valid
console.log(`URL is valid: ${isValid}`); // Output: URL is valid: true