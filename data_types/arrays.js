//1. Что выведет следующий код?
//
// let fruits = ["Яблоки", "Груша", "Апельсин"];
//
// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
//
// // что в fruits?
// alert( fruits.length ); // ?

//Ответ = 4

//2. Операции с массивами
// Давайте произведём 5 операций с массивом.
//
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:
//
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
const styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
styles[Math.floor(styles.length / 2)] = 'Классика'
console.log(styles)
let firstElement = styles.shift()
console.log(firstElement)
console.log(styles)
styles.unshift('Рэп', 'Регги')
console.log(styles)

//3. Вызов в контексте массива
// Каков результат? Почему?
//
// let arr = ["a", "b"];
//
// arr.push(function() {
//   alert( this );
// });
//
// arr[2]();

// Ответ
// a,b,function(){ alert( this );}
//у нас есть вызов функции arr[2] как метода объекта. Он получает в качестве this объект arr и выводит массив


//4. Сумма введённых чисел
// Напишите функцию sumInput(), которая:
//
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
const sumInput = () => prompt("Введите числа через запятую", "").split(",").reduce((sum, val) => sum + (+val || 0), 0);