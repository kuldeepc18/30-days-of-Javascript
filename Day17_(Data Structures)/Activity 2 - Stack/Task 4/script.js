// Task 4: Reverse a string using Stack

// Task 3: Stack class
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function reverseString(str) {
    const stack = new Stack();
    // Push all characters onto the stack
    for (let char of str) {
        stack.push(char);
    }
    let reversed = '';
    // Pop characters off the stack to form the reversed string
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }
    return reversed;
}

console.log(reverseString("Hello, World!"));