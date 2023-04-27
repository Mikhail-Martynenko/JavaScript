// Две функции - один объект
// Возможно ли создать функции A и B, чтобы new A() == new B()?
//
// function A() { ... }
// function B() { ... }
//
// let a = new A();
// let b = new B();
//
// alert( a == b ); // true
// Если да – приведите пример вашего кода.

// Возможно.
//
// Если функция возвращает объект, то new вернёт его вместо this.

const object = {};

function A() {
    return object
}

function B() {
    return object
}

