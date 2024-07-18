// Activity 1: Array Creation and Access

// Task 1
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Task 2
console.log("First element:", numbers[0]);
console.log("Last element:", numbers[4]);

// Activity 2: Array Methods (Basic)

// Task 3
numbers.push(6);
console.log(numbers);

// Task 4
numbers.pop();
console.log(numbers);

// Task 5
numbers.shift();
console.log(numbers);

// Task 6
numbers.unshift(0);
console.log(numbers);

// Activity 3: Array Methods (Intermediate)

// Task 7
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// Task 8
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

// Task 9
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// Activity 4: Array Iteration

// Task 10
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Task 11
numbers.forEach(num => console.log(num));

// Activity 5: Multi-dimensional Arrays

// Task 12
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);

// Task 13
console.log("Element at [1][2]:", matrix[1][2]); // Accessing element at second row, third column
