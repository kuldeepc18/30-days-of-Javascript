// On page load, retrieve and display saved data from localStorage
window.onload = function() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (name && email) {
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;

        document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;
    }
};

// Function to save form data to localStorage
function saveData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;

    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}