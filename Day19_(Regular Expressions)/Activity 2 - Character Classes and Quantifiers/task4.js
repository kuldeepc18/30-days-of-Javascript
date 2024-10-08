// Define the regular expression pattern to match all sequences of one or more digits
const regex = /\d+/g;

// Define the test string with sequences of digits
const testString = 'The numbers 123, 456, and 789 are examples of sequences of digits.';

// Use the match() method to find the matches
const matches = testString.match(regex);

// Log the matches
console.log(matches); // Output: [ '123', '456', '789' ]