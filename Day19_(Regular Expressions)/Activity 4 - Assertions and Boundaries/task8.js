// Define the word to match at the end of the string
const wordToMatch = 'language';

// Define the regular expression pattern to match a word at the end of a string
const regex = new RegExp(`\\b${wordToMatch}$`);

// Define the test string with words at the end
const testString = 'Hello, World! JavaScript is a popular programming language';

// Use the match() method to find the matches
const matches = testString.match(regex);

// Log the matches, handle case where no matches are found
if (matches) {
    console.log(matches);
} else {
    console.log('No matches found.');
}
