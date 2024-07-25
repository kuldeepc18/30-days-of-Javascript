// Activity 1: Template Literals

// Task 1
const myName = 'Alice';
const myAge = 19;
const greeting = `Hello, my name is ${myName} and I am ${myAge} years old.`;
console.log(greeting);

// Task 2
const multiLineString = `This is a multi-line string.
It can span multiple lines.
Each line is preserved.`;
console.log(multiLineString);

// Activity 2: Destructuring

// Task 3
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second); // Output: 1 2

// Task 4
const book = {
    title: '1984',
    author: 'George Orwell',
    year: 1949
};
const { title, author } = book;
console.log(title, author); // Output: 1984 George Orwell

// Activity 3: Spread and Rest Operators

// Task 5
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];
console.log(newArray); // Output: [1, 2, 3, 4, 5]

// Task 6
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// Activity 4: Default Parameters

// Task 7
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5));    // Output: 5

// Activity 5: Enhanced Object Literals

// Task 8
const name = 'Bob';
const age = 30;

const person = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person); // Output: { name: 'Bob', age: 30, greet: [Function: greet] }
person.greet(); // Output: Hello, my name is Bob and I am 30 years old.

// Task 9
const propName = 'age';
const user = {
    name: 'Charlie',
    [propName]: 28
};

console.log(user); // Output: { name: 'Charlie', age: 28 }
