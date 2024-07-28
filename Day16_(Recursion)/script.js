// Activity 1: Basic Recursion

// Task 1: Factorial of a number
// Function to calculate the factorial of a number using recursion
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial of (n-1)
    return n * factorial(n - 1);
}

// Logging the factorial of 5 for test case
console.log("Factorial of 5:", factorial(5)); // 120

// Task 2: nth Fibonacci number
// Function to calculate the nth Fibonacci number using recursion
function fibonacci(n) {
    // Base cases: Fibonacci of 0 is 0, Fibonacci of 1 is 1
    if (n <= 1) {
        return n;
    }
    // Recursive case: sum of the previous two Fibonacci numbers
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Logging the 10th Fibonacci number for test case
console.log("10th Fibonacci number:", fibonacci(10)); // 55

// Activity 2: Recursion with Arrays

// Task 3: Sum of all elements in an array
// Function to find the sum of all elements in an array using recursion
function sumArray(arr, n) {
    // Base case: sum of zero elements is 0
    if (n <= 0) {
        return 0;
    }
    // Recursive case: sum of (n-1) elements + nth element
    return sumArray(arr, n - 1) + arr[n - 1];
}

// Array for testing sum function
const arr1 = [1, 2, 3, 4, 5];
// Logging the sum of array elements for test case
console.log("Sum of array elements:", sumArray(arr1, arr1.length)); // 15

// Task 4: Maximum element in an array
// Function to find the maximum element in an array using recursion
function maxArray(arr, n) {
    // Base case: if only one element, it's the maximum
    if (n === 1) {
        return arr[0];
    }
    // Recursive case: maximum of (n-1) elements vs nth element
    return Math.max(arr[n - 1], maxArray(arr, n - 1));
}

// Array for testing max function
const arr2 = [1, 2, 3, 4, 5];
// Logging the maximum element in array for test case
console.log("Maximum element in array:", maxArray(arr2, arr2.length)); // 5

// Activity 3: String Manipulation with Recursion

// Task 5: Reverse a string
// Function to reverse a string using recursion
function reverseString(str) {
    // Base case: empty string is already reversed
    if (str === "") {
        return "";
    }
    // Recursive case: reverse the rest of the string + first character
    return reverseString(str.substr(1)) + str.charAt(0);
}

// Logging the reversed string for test case
console.log("Reversed string:", reverseString("hello")); // "olleh"

// Task 6: Check if a string is a palindrome
// Function to check if a string is a palindrome using recursion
function isPalindrome(str) {
    // Base case: if the string is empty or has one character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    // Check if the first and last characters are the same
    if (str.charAt(0) !== str.charAt(str.length - 1)) {
        return false;
    }
    // Recursive case: check the substring without the first and last characters
    return isPalindrome(str.substr(1, str.length - 2));
}

// Logging the palindrome check for test case
console.log("Is 'racecar' a palindrome?:", isPalindrome("racecar")); // true

// Activity 4: Recursive Search

// Task 7: Binary search on a sorted array
// Function to perform a binary search on a sorted array using recursion
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    // Base case: if the range is invalid, target is not in array
    if (low > high) {
        return -1;
    }
    // Calculate the midpoint of the current range
    const mid = Math.floor((low + high) / 2);
    // If the target is at the midpoint, return the midpoint index
    if (arr[mid] === target) {
        return mid;
    }
    // If the target is less than the midpoint, search the left half
    if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    }
    // If the target is greater than the midpoint, search the right half
    return binarySearch(arr, target, mid + 1, high);
}

// Array for testing binary search function
const arr3 = [1, 2, 3, 4, 5];
// Logging the index of 3 in array for test case
console.log("Index of 3 in array:", binarySearch(arr3, 3)); // 2

// Task 8: Count the occurrences of a target element in an array
// Function to count the occurrences of a target element in an array using recursion
function countOccurrences(arr, target, n) {
    // Base case: if no elements left, count is 0
    if (n === 0) {
        return 0;
    }
    // Recursive case: count occurrences in (n-1) elements + (1 if nth element is target)
    return (arr[n - 1] === target ? 1 : 0) + countOccurrences(arr, target, n - 1);
}

// Array for testing count occurrences function
const arr4 = [1, 2, 3, 4, 5, 3, 3];
// Logging the occurrences of 3 in array for test case
console.log("Occurrences of 3 in array:", countOccurrences(arr4, 3, arr4.length)); // 3

// Activity 5: Tree Traversal (Optional)

// Node class for Tree
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Task 9: In-order traversal of a binary tree
// Function to perform an in-order traversal of a binary tree using recursion
function inOrderTraversal(node) {
    // Base case: if node is null, do nothing
    if (node === null) {
        return;
    }
    // Traverse the left subtree
    inOrderTraversal(node.left);
    // Visit the node
    console.log(node.value);
    // Traverse the right subtree
    inOrderTraversal(node.right);
}

// Task 10: Calculate the depth of a binary tree
// Function to calculate the depth of a binary tree using recursion
function treeDepth(node) {
    // Base case: if node is null, depth is 0
    if (node === null) {
        return 0;
    }
    // Recursive case: depth is 1 + maximum depth of left and right subtrees
    return 1 + Math.max(treeDepth(node.left), treeDepth(node.right));
}

// Creating a sample tree: 
//        1
//       / \
//      2   3
//     / \
//    4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Logging in-order traversal of the tree for test case
console.log("In-order traversal of the tree:");
inOrderTraversal(root); // 4 2 5 1 3

// Logging the depth of the tree for test case
console.log("Depth of the tree:", treeDepth(root)); // 3
