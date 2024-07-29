// Task 2: LinkedList class

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a node to the end of the list
    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Remove a node from the end of the list
    remove() {
        if (!this.head) return null;
        if (this.head === this.tail) {
            const value = this.head.value;
            this.head = null;
            this.tail = null;
            return value;
        }
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        const value = this.tail.value;
        this.tail = current;
        this.tail.next = null;
        return value;
    }

    // Display all nodes
    display() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

console.log("Linked List:");
const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.display();
linkedList.remove();
linkedList.display();
