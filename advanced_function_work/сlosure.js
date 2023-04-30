//1. Независимы ли счётчики?
// Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
//
// Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?
//
// function makeCounter() {
//   let count = 0;
//
//   return function() {
//     return count++;
//   };
// }
//
// let counter = makeCounter();
// let counter2 = makeCounter();
//
// alert( counter() ); // 0
// alert( counter() ); // 1
//
// alert( counter2() ); // ? Answer = 0
// alert( counter2() ); // ? Answer = 1


//2.Объект счётчика
// Здесь объект счётчика создан с помощью функции-конструктора.
//
// Будет ли он работать? Что покажет?
//
// function Counter() {
//   let count = 0;
//
//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }
//
// let counter = new Counter();
//
// alert( counter.up() ); // ? Answer = 1
// alert( counter.up() ); // ? Answer = 2
// alert( counter.down() ); // ? Answer = 1

//3. Посмотрите на код. Какой будет результат у вызова на последней строке?
// let phrase = "Hello";
//
// if (true) {
//   let user = "John";
//
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }
//
// sayHi(); // Ошибка, так как функция объявлена внутри блока if и живёт только внутри этого блока

//4. Сумма с помощью замыканий.
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
//
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
//
// Например:
//
// sum(1)(2) = 3
// sum(5)(-1) = 4

const sum = (a) => (b) => a + b;


console.log(sum(1)(20))