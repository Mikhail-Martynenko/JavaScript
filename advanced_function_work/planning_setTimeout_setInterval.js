// Вывод каждую секунду.
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//
// Сделайте два варианта решения.
//
// Используя setInterval.
// Используя рекурсивный setTimeout.


// Используя setInterval.
function printNumbers1(from, to) {
    let timer = setInterval(() => {
        if (from === to) clearInterval(timer)
        console.log(from)
        from++;
    }, 1000)
}

printNumbers1(1, 18)

// Используя рекурсивный setTimeout.
function printNumbers2(from, to) {
    setTimeout(function foo() {
        console.log(from);
        if (from < to) setTimeout(foo, 1000);
        from++;
    }, 1000);
}
printNumbers2(1, 18)