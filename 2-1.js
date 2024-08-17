//Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка; x2, y2 — вторая точка. 
// Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. 
// Выведите результат с помощью console.log. Напомним, что площадь прямоугольника — это произведение ширины и высоты.

let x1 = 2;
let y1 = 3;

let x2 = 10;
let y2 = 5;


let width = Math.abs( x2 - x1);
let height = Math.abs(y2 - y1);

let area = width * height;

console.log(area)

//Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log.
//  Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.

let first = 13.123456789;
let second = 2.123;
let precision = 5;

let firstNormalized = Math.round(
    first * Math.pow(10, precision)
)

console.log (firstNormalized)

let secondNormalized = Math.round(
    second * Math.pow(10, precision)
)

console.log(first === second)
console.log(firstNormalized === secondNormalized );
console.log(firstNormalized > secondNormalized );
console.log(firstNormalized < secondNormalized );


// -------------------------------------3
// Напишите генератор двух случайных чисел в диапазоне между n и m включительно. 
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Выведите два произвольных числа в консоль с помощью console.log.
// Сравните два полученных числа. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.

let n = 0;
let m = 100;


let range = Math.abs(m - n);

let firstRandomDigit = Math.round(Math.random() * range);
let secondRandomDigit = Math.round(Math.random() * range);

let min = Math.min(n, m)
let max = Math.max(n, m)

console.log(min)
console.log(max)

console.log(firstRandomDigit)
console.log(secondRandomDigit)
console.log(firstRandomDigit === secondRandomDigit)
console.log(firstRandomDigit > secondRandomDigit)
console.log(firstRandomDigit < secondRandomDigit)
console.log(firstRandomDigit !== secondRandomDigit)


