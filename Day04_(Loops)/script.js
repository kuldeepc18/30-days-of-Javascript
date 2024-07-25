// Activity 1: For Loop

// Task 1
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

// Task 2
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} =`, 5 * i);
}

// Activity 2: While Loop

// Task 3
let sum = 0
let temp = 1
while (temp <= 10) {
    sum += temp
    temp++
}
console.log(`Addition of 1 to 10 is: ${sum}`);

// Task 4
reverseNum = 10
while (reverseNum >= 1) {
    console.log(reverseNum);
    reverseNum--
}

console.log("\n");

// Activity 3: Do… While Loop

// Task 5
num = 1
do {
    console.log(num);
    num++
} while (num <= 5);

// Task 6
myNum = 6
factorial = 1
i = 1
do {
    factorial *= i
    i++
} while (i <= myNum);

console.log(`Factorial of ${myNum} is ${factorial}`);

// Activity 4: Nested Loops

// Task 7
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}

// Activity 5: Loop Control Statements

// Task 8
for (let i = 1; i <= 10; i++) {
    if (i == 5) continue
    console.log(i);
}

console.log("\n");

// Task 9
for (let i = 1; i <= 10; i++) {
    if (i == 7) break
    console.log(i);
}

