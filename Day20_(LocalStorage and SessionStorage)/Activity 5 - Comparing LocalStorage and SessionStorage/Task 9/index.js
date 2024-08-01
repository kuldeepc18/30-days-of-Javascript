// Function to save a value to both `localStorage` and `sessionStorage`  
function saveToBothStorages(key, value) {
    // Save to localStorage
    localStorage.setItem(key, value);

    // Save to sessionStorage
    sessionStorage.setItem(key, value);

    // Retrieve from localStorage
    const localStorageValue = localStorage.getItem(key);

    // Retrieve from sessionStorage
    const sessionStorageValue = sessionStorage.getItem(key);

    // Log the values from both storages
    console.log(`LocalStorage: ${localStorageValue}`);
    console.log(`SessionStorage: ${sessionStorageValue}`);
}

// Save a value to both `localStorage` and `sessionStorage`
saveToBothStorages('name', 'Kuldeep Choudhary');

