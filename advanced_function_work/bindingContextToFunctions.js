//1. Связанная функция как метод.
// Что выведет функция?
//
// function f() {
//   alert( this ); // ?
// }
//
// let user = {
//   g: f.bind(null)
// };
//
// user.g();

//Answer = null

//2. Повторный bind
// Можем ли мы изменить this дополнительным связыванием?
//
// Что выведет этот код?
//
// function f() {
//   alert(this.name);
// }
//
// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
//
// f();

//Answer = Вася, изменить this дополнительным связыванием нельзя

//3. Свойство функции после bind
// В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
//
// function sayHi() {
//   alert( this.name );
// }
// sayHi.test = 5;
//
// let bound = sayHi.bind({
//   name: "Вася"
// });
//
// alert( bound.test ); // что выведет? почему?

//Answer = undefined.
//
// Результатом работы bind является другой объект у которого нет свойства test