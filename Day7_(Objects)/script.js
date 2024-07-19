// Activity 1: Object Creation and Access

// Task 1
// const book = {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     year: 1960
// };

// console.log(book);

// Task 2
// console.log(`Title: ${book.title}`);
// console.log(`Author: ${book.author}`);

// Activity 2: Object Methods

// Task 3
// const book = {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     year: 1960,
//     getDetails: function () {
//         return `${this.title} by ${this.author}`;
//     }
// };

// console.log(book.getDetails());

// Task 4
// const book = {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     year: 1960,
//     getDetails: function () {
//         return `${this.title} by ${this.author}`;
//     },
//     updateYear: function (newYear) {
//         this.year = newYear;
//     }
// };

// book.updateYear(1961);
// console.log(book);

// Activity 3: Nested Objects

// Task 5
const library = {
    name: 'City Library',
    books: [
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            year: 1960
        },
        {
            title: '1984',
            author: 'George Orwell',
            year: 1949
        }
    ]
};

console.log(library);

// Task 6
console.log(`Library Name: ${library.name}`);
library.books.forEach(book => {
    console.log(`Book Title: ${book.title}`);
});

// Activity 4:  The `this` Keyword

// Task 7
const book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    getTitleAndYear: function () {
        return `${this.title} was published in ${this.year}`;
    }
};

console.log(book.getTitleAndYear());

// Activity 5: Object Iteration

// Task 8
for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}

// Task 9
console.log('Keys:', Object.keys(book));
console.log('Values:', Object.values(book));
