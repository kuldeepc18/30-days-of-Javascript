// Function to clear all data from both `localStorage` and `sessionStorage`
function clearAllDataFromStorages() {
    // Clear all data from localStorage
    localStorage.clear();

    // Clear all data from sessionStorage
    sessionStorage.clear();

    // Verify that both storages are empty
    console.log(`LocalStorage: ${localStorage.length}`);
    console.log(`SessionStorage: ${sessionStorage.length}`);
}

// Clear all data from both `localStorage` and `sessionStorage`
clearAllDataFromStorages();  // Output: LocalStorage: 0, SessionStorage: 0
