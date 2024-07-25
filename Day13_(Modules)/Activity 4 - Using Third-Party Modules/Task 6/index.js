// Import the lodash module
const _ = require('lodash');

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Use the sum function from lodash
let sum = _.sum(numbers);

// Log the sum of the numbers
console.log(`Sum of numbers: ${sum}`);

// Use the mean function from lodash
let mean = _.mean(numbers);

// Log the mean of the numbers
console.log(`Mean of numbers: ${mean}`);