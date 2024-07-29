// Task 6: Simulate a printer queue

// Task 5: Queue class
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function simulatePrinterQueue(jobs) {
    const printerQueue = new Queue();
    for (let job of jobs) {
        printerQueue.enqueue(job);
        console.log(`Added job: ${job}`);
    }
    console.log("Processing jobs:");
    while (!printerQueue.isEmpty()) {
        const job = printerQueue.dequeue();
        console.log(`Printing: ${job}`);
    }
}

simulatePrinterQueue(["Job1", "Job2", "Job3"]);