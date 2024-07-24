// Activity 1: Basic Error Handling with Try-Catch

// Task 1: 
function throwError() {
    try {
        throw new Error("This is an error!");
    } catch (e) {
        console.log("Caught an error: ", e.message);
    }
}

throwError();

// Task 2:
function divide(a, b) {
    try {
        if (b == 0) {
            throw new Error("Division by 0 is not allowed!")
        }
        return a / b;
    } catch (e) {
        console.log(e.message);
    }
}

console.log(divide(10, 2));     //5
console.log(divide(10, 0));     //error

// Activity 2: Finally Block

// Task 3:
function tryCatchFinally() {
    try {
        console.log("this is try block!");
        throw new Error("An error occurred")
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log("This is finally block!");
    }
}

tryCatchFinally()

// Activity 3: Custom Error Objects

// Task 4:
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    try {
        throw new CustomError("This is a custom error");
    } catch (e) {
        console.log(`${e.name}: ${e.message}`);
    }
}

throwCustomError();

// Task 5:
class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

function validateInput(input) {
    try {
        if (input.trim() === "") {
            throw new ValidationError("Input string cannot be empty.");
        }
        console.log("Valid input: ", input);
    } catch (e) {
        console.log(`${e.name}: ${e.message}`);
    }
}

validateInput("Javascript Challenge")
validateInput("")   //prints error message

// Activity 4: Error Handling in Promises

// Task 6:
function randomPromise() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve("Promise resolved successfully.")
        } else {
            reject(new Error("Promise rejected!"))
        }
    })
}

randomPromise()
    .then(result => console.log(result))
    .catch(e => console.log("Caught an error: ", e.message))

// Task 7:
async function handleRandomPromise() {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

handleRandomPromise();

// Activity 5: Graceful Error Handling in Fetch

// Task 8:
fetch('https://invalid.url')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Caught an error:", error.message));


// Task 9: 
async function fetchData() {
    try {
        const response = await fetch('https://invalid.url');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
}

fetchData();

