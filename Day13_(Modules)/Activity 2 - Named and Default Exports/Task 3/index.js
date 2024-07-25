// Import the sum and diff functions from the math module
const { sum, diff, product } = require('./mathModule');

// Define two numbers
const num1 = 10;
const num2 = 5;

// Call the add function and log the result
let ans1 = sum(num1, num2);
console.log(`${num1} + ${num2} = ${ans1}`);

// Call the diff function and log the result
let ans2 = diff(num1, num2);
console.log(`${num1} - ${num2} = ${ans2}`);

// Call the prod function and log the result
let ans3 = product(num1, num2);
console.log(`${num1} * ${num2} = ${ans3}`);