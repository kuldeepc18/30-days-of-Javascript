// Activity 1 : Variable Declaration

var num1 = 25
console.log(num1);

let string1 = "Kuldeep"
console.log(string1);

// Activity 2 : Constant Declaration
const bool1 = true
console.log(bool1);

// Activity 3 : Data Types
const num2 = 50
const string2 = "Shaktimaan"
const bool2= false
const obj1 = {
    email: "kuldeep@google.com",
    idNo: 143
} 
const myArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(typeof num2);
console.log(typeof string2);
console.log(typeof bool2);
console.log(typeof obj1);
console.log(typeof myArr1);

// Activity 4 : Reassigning Values

let var1 = 10
console.log(`Initial value : ${var1}`);
var1 = 20
console.log(`New Value : ${var1}`);

//Activity 5 : Understanding Const

const myVar = 33
console.log(myVar);
myVar = 66      //Type Error : cannot assign value to constant variable
console.log(myVar);     