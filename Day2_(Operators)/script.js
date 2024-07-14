// Activity 1: Arithmetic Operations
const num1 = 5
const num2 = 6
console.log(num1 + num2);   //addition
console.log(num1 - num2);   //subtraction
console.log(num1 * num2);   //multiplication
console.log(num1 / num2);   //division
console.log(num1 % num2);   //remainder

// Activity 2: Assignment Operators
let num3 = 12
num3 += 3
console.log(num3);
let num4 = 18
num4 -= 8
console.log(num4);

// Activity 3: Comparison Operators
console.log(num1 > num2);   //false
console.log(num1 < num2);   //true
console.log(10 >= 11);      //false
console.log(10 <= 10);      //true
console.log("2" == 2);      //true as JS will convert "2" ---> 2
console.log("2" === 2);     //false as strict check is used as it will compare two numbers along with their datatypes

// Activity 4: Logical Operators
console.log(5>2 && 5>3);    //true as both conditions is true
console.log(8<=12 || 8>12);     //true as one of the condition is true
console.log(!num1==5);      //condition is true but negate it to false

// Activity 5: Ternary Operator
(3 > 0) ? console.log("Positive number") : console.log("Negative number");
(-3 > 0) ? console.log("Positive number") : console.log("Negative number");