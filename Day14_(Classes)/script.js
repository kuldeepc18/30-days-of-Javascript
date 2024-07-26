// Activity 1: Class Definition
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Method to update the age property and log the updated age
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

// Creating an instance of the Person class and logging the greeting message
const person1 = new Person('Alice', 30);
console.log(person1.greet());
person1.updateAge(31);


// Activity 2: Class Inheritance
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age); // Calling the constructor of the Person class
        this.studentId = studentId;
    }

    // Method to return the student ID
    getStudentId() {
        return this.studentId;
    }

    // Overriding the greet method to include the student ID in the message
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

// Creating an instance of the Student class and logging the student ID and overridden greeting message
const student1 = new Student('Bob', 20, 'S12345');
console.log(student1.getStudentId());
console.log(student1.greet());


// Activity 3: Static Methods and Properties
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Static method to return a generic greeting message
    static genericGreet() {
        return 'Hello from Person class!';
    }
}

class Student extends Person {
    static studentCount = 0; // Static property to keep track of the number of students created

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++; // Incrementing the static property
        console.log(`Total number of students: ${Student.studentCount}`);
    }

    // Method to return the student ID
    getStudentId() {
        return this.studentId;
    }

    // Overriding the greet method to include the student ID in the message
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

// Calling the static method and logging the message
console.log(Person.genericGreet());

// Creating instances of the Student class and logging the total number of students
const student2 = new Student('Charlie', 22, 'S12346');
const student3 = new Student('Dave', 23, 'S12347');


// Activity 4: Getters and Setters
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Getter method to return the full name
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter method to update the name properties
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to return a greeting message
    greet() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
}

// Creating an instance of the Person class, logging the full name using the getter, updating the name using the setter, and logging the updated full name
const person2 = new Person('Alice', 'Smith', 30);
console.log(person2.fullName);

person2.fullName = 'John Doe';
console.log(person2.fullName);


// Activity 5: Private Fields (Optional)
class Account {
    #balance; // Private field

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    // Method to deposit money and log the new balance
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    }

    // Method to withdraw money and log the new balance or insufficient funds message
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log('Insufficient funds.');
        }
    }

    // Method to get the current balance
    getBalance() {
        return this.#balance;
    }
}

// Creating an instance of the Account class, testing the deposit and withdraw methods, and logging the balance after each operation
const account1 = new Account(1000);
account1.deposit(500);
account1.withdraw(200);
account1.withdraw(1500); // This should show an insufficient funds message
console.log(`Final balance: ${account1.getBalance()}`);
