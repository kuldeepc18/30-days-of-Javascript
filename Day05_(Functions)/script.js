// Activity 1: Function Declaration

// Task 1
function evenOdd(num) {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
evenOdd(8)

// Task 2
function square(num) {
    const result = (num * num)
    return result
}
const numSquare = square(12)
console.log(`The square is: ${numSquare}`);

// Activity 2: Function Expression

// Task 3
const max = function (number1, number2) {
    if (number1 > number2) {
        console.log(`${number1} is greater than ${number2}`);
    } else if (number2 > number1) {
        console.log(`${number2} is greater than ${number1}`);
    } else {
        console.log("Both are Equal!");
    }
}
max(12, 24)

// Task 4
const concatenateStrings = function (str1, str2) {
    return str1 + str2;
};

const result = concatenateStrings("Hello, ", "World!");
console.log(result); // Output: Hello, World!

// Activity 3: Arrow Functions

// Task 5
const calculateSum = (num1, num2) => num1 + num2;

const reqSum = calculateSum(5, 3);
console.log(reqSum); // Output: 8

// Task 6
const checkCharacter = (str, char) => str.includes(char);

const containsChar = checkCharacter("hello", "e");
console.log(containsChar); // Output: true

// Activity 4: Function Parameters and Default Values

// Task 7
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 3)); // Output: 15
console.log(multiply(7));    // Output: 7 (default value of b is 1)

// Task 8
function greet(name, age = 30) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Raju")); // Output: Hello, Alice! You are 30 years old.
console.log(greet("Dheeraj", 25)); // Output: Hello, Bob! You are 25 years old.

// Activity 5: Higher-Order Functions

// Task 9
function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
const sayHello = () => console.log("Hello!");

repeatFunction(sayHello, 3);

// Task 10
function applyFunctions(func1, func2, value) {
    const intermediateResult = func1(value);
    return func2(intermediateResult);
}

const addTwo = (x) => x + 2;
const multiplyByThree = (x) => x * 3;

const myResult = applyFunctions(addTwo, multiplyByThree, 5);
console.log(myResult); // Output: 21



