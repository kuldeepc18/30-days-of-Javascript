// Save an object to `sessionStorage` by converting it to a JSON string 
const user = {
    name: 'Kuldeep Choudhary',
    email: 'kuldeep@gmail.com',
    age: 20
};

// Convert the object to a JSON string and save it to `sessionStorage`
sessionStorage.setItem('user', JSON.stringify(user));

// Retrieve the saved object from `sessionStorage`
const retrievedSavedUser = sessionStorage.getItem('user');

// Parse the retrieved JSON string to an object
const savedUser = JSON.parse(retrievedSavedUser);

// Log the parsed object
console.log(savedUser);  // Output: { name: 'Kuldeep Choudhary', email: 'kuldeep@gmail.com', age: 22 }