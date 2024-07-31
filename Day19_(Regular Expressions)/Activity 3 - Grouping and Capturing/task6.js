// Define the regular expression pattern to capture the username and domain from an email address
const regex = /(\w+)@(\w+\.\w+)/;

// Define an email address
const email = 'kuldeep@google.com';

// Use the match() method to find the captures
const captures = email.match(regex);

// Log the captures
console.log(captures); 