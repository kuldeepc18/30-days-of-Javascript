// Import the axios module
const axios = require("axios");

// Define the URL for the API request
const url = "https://jsonplaceholder.typicode.com/posts/1";

// Make a GET request to the API
async function fetchData() {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Call the fetchData function
fetchData();

  