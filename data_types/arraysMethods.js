// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string»
// в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//
// Примеры:
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на
// массив символов, потом переделайте всё как нужно и методом join соедините обратно.

const camelize = (str) => str.split('-').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
console.log(camelize("background-color"))// 'backgroundColor';

// Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со
// значениями больше или равными a и меньше или
// равными b и возвращает результат в виде массива.
//
// Функция должна возвращать новый массив и не изменять исходный.
//
// Например:
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// alert( filtered ); // 3,1 (совпадающие значения)
//
// alert( arr ); // 5,3,8,1 (без изменений)
const filterRange = (arr, a, b) => arr.filter((val) => val >= a && val <= b);
