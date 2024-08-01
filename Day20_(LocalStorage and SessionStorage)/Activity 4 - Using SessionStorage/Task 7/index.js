// On page load, retrieve and display saved data from sessionStorage
window.onload = function() {
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');

    if (name && email) {
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;
    }
};

// Function to save form data to sessionStorage
function saveData() {
    // Get form data and save to sessionStorage
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    document.getElementById('display').innerText = `Name: ${name}, Email: ${email}`;

    // clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}