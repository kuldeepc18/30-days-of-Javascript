// Import the entire module as an object
const math = require('./mathModule');

// Use the properties of the imported module
console.log(`PI: ${math.PI}`);
console.log(`E: ${math.E}`);
console.log(`Add: ${math.add(5, 3)}`);
console.log(`Subtract: ${math.subtract(5, 3)}`);