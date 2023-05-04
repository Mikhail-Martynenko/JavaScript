//1. Здесь функция makeUser возвращает объект.
//
// Каким будет результат при обращении к свойству объекта ref? Почему?
//
// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }
//
// let user = makeUser();
//
// alert( user.ref.name ); // Каким будет результат?

// Ответ: завершится с ошибкой


// 2. Создайте калькулятор
// Создайте объект calculator (калькулятор) с тремя методами:
//
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

const calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 3. У нас есть объект ladder (лестница), который позволяет подниматься и спускаться:
//
let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep() { // показывает текущую ступеньку
        alert(this.step);
    }
};
// Теперь, если нам нужно выполнить несколько последовательных вызовов, мы можем сделать это так:
//
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
//
// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
// Такой подход широко используется в библиотеках JavaScript.

// Возвращаем объект из каждого вызова
let ladder2 = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() { // показывает текущую ступеньку
        alert(this.step);
        return this;
    }
};


ladder2.up().up().down().showStep().down().showStep();