
// Научиться генерировать произвольные массивы и адаптировать существующий код под ситуацию.

// Что нужно сделать
// Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m. 
// Выведите результат с помощью console.log.



let n = -2;
let m = 55;
let count = 50;

let range = Math.abs(m - n);
let massive = [];

for (let i = 0; i < count; i++) {
    let randomDigit = Math.round(Math.random() * range) + n;
    massive.push(randomDigit);
}  

console.log(massive);




