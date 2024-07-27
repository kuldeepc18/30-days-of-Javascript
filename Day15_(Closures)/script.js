// Activity 1: Understanding Closures

// Task 1: Function that returns another function accessing an outer variable

function outerFunction() {
    let outerVariable = "Hello, Closure!"
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction()
}

outerFunction()

// Task 2: Closure that maintains a private counter
function createCounter() {
    let counter = 0
    return {
        increment: function () {
            counter++
        },
        getCounter: function () {
            return counter
        }
    }
}

const counter = createCounter();
counter.increment();
console.log(counter.getCounter());

// Activity 2: Practical Closures

// Task 3: Function that generates unique IDs
function createUniqueIdGenerator() {
    let lastId = 0
    return function () {
        lastId++;
        return lastId;
    }
}

const generateId = createUniqueIdGenerator()
console.log(generateId());
console.log(generateId());

// Task 4: Closure that captures a user's name and returns a greeting function
function createGreeter(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    };
}

const greetJohn = createGreeter('John');
greetJohn();

// Activity 3: Closures in Loops

// Task 5: Loop that creates an array of functions logging their index
function createFunctions(length) {
    let functions = [];
    for (let i = 0; i < length; i++) {
        functions.push(function () {
            console.log(i);
        });
    }
    return functions;
}

const functionsArray = createFunctions(5);
functionsArray[0]();
functionsArray[1]();

// Activity 4: Module Pattern

// Task 6: Simple module for managing a collection of items
function createItemManager() {
    let items = [];
    return {
        addItem: function (item) {
            items.push(item);
        },
        removeItem: function (item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        listItems: function () {
            return items;
        }
    };
}

const itemManager = createItemManager();
itemManager.addItem('item1');
itemManager.addItem('item2');
console.log(itemManager.listItems()); // Logs: ['item1', 'item2']
itemManager.removeItem('item1');
console.log(itemManager.listItems()); // Logs: ['item2']

// Activity 5: Memoization

// Task 7: Function that memoizes the results of another function
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Task 8: Memoized version of a function that calculates the factorial of a number
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Logs: 120
console.log(memoizedFactorial(5)); // Logs: 120 (cached result)

