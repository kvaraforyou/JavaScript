// Given array
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log("Ordered Array:", arr);
// Function to shuffle the array
function shuffleArray(arr) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Generate random index j within the range [0, arr.length-1]
        let j = Math.floor(Math.random() * arr.length);
        
        // Swap elements arr[i] and arr[j] using a temporary variable
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    // Return the shuffled array
    return arr;
}

// Shuffle the array
let shuffledArray = shuffleArray(arr);
console.log("Shuffled Array:", shuffledArray);
