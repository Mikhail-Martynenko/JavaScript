//1. Установка и уменьшение значения счётчика.
// Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:
//
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
// Посмотрите код из песочницы с полным примером использования.
//
// P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    Object.defineProperty(counter, 'get', {
        get: function() { return count; }
    });

    Object.defineProperty(counter, "set", {
        set: function(value) { count = value; }
    });

    Object.defineProperty(counter, "decrease", {
        value: function() { count--; }
    });

    return counter;
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

console.log(counter.get);// 3
counter.set = 24;
console.log(counter.get); // 24
counter.decrease();
counter.decrease();
console.log(counter.get);// 22

