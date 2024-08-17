// ---------------------------------------------------

// Создайте с помощью цикла for массив упорядоченных чисел с количеством чисел, равным count. Например:
// count = 5; соответствует массив [1,2,3,4,5];
// count = 7; соответствует массив [1,2,3,4,5,6,7];
// count = 3; соответствует массив [1,2,3].
// С помощью второго цикла перемешайте этот массив. 
// Выведите получившийся результат на экран с помощью console.log.
let count = 7;
let arr = [];
//    1-საიდან  2-სანამდე  3 რამდენით
for (let i = 1; i <= count; i++) {
    arr.push(i);
}

console.log("Ordered Array:", arr);


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1));
        // Swap values between array[i] and array[j]
        let temp = arr[i]
        arr[i]= arr[j]
        arr[j] = temp  
        // [arr[i], arr[j]] = [arr[j], arr[i]]; same
    }
}
// Shuffle the array
shuffleArray(arr);

console.log("Shuffled Array:", arr);
