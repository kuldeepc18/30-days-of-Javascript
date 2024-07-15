// Activity 1: If-Else Statements

// Task 1
const num = -234
if (num > 0) {
    console.log(`${num} is positive`);
} else if (num < 0) {
    console.log(`${num} is negative`);
} else {
    console.log(`${num} is equal to 0`);
}

//Task 2
const age = 25
if (age >= 18) {
    console.log(`You are eligible to vote`);
} else if (age < 18) {
    console.log(`You are not eligible to vote`);
} else {
    console.log(`Enter the correct age!`);
}

// Activity 2: Nested if-Else Statements

//Task 3
const num1 = 10;
const num2 = 20;
const num3 = 15;

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(`${num1} is the largest number.`);
    } else {
        console.log(`${num3} is the largest number.`);
    }
} else {
    if (num2 >= num3) {
        console.log(`${num2} is the largest number.`);
    } else {
        console.log(`${num3} is the largest number.`);
    }
}

// Activity 3: Switch Case

//Task 4: 
const day = 3
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Number must be between (1-7)");
        break;
}

//Task 5:
const marks = 34
switch (true) {
    case marks >= 90:
        console.log("Your grade is A");
        break;
    case marks >= 80:
        console.log("Your grade is B");
        break;
    case marks >= 70:
        console.log("Your grade is C");
        break;
    case marks >= 60:
        console.log("Your grade is D");
        break;
    case marks >= 50:
        console.log("Your grade is E");
        break;
    case marks >= 35:
        console.log("Your grade is F");
        break;
    default:
        console.log("You are Unsuccessful!");
        break;
}

// Activity 4: Conditional (Ternary) Operator

//Task 6:
(24%2 == 0) ? console.log("Number is EVEN") : console.log("Number is ODD");

// Activity 5: Combining Conditions

//Task 7:
const year = 2024
if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}