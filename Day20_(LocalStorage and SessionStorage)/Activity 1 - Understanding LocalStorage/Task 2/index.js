// Save an object to `localStorage` by converting it to a JSON string
const user = {
    name: 'Kuldeep Choudhary',
    email: 'kuldeep@gmail.com',
    age: 22
};

// Convert the object to a JSON string and save it to `localStorage`
localStorage.setItem('user', JSON.stringify(user));

// Retrieve the saved object from `localStorage`
const retrievedSavedUser = localStorage.getItem('user');

// Parse the retrieved JSON string to an object
const savedUser = JSON.parse(retrievedSavedUser);

// Log the parsed object
console.log(savedUser);  // Output: { name: 'Kuldeep Choudhary', email: 'kuldeep@gmail.com', age: 22 }