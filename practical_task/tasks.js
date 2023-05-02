//2) Напишите функцию для поверхностного сравнения двух объектов. Поверхностное сравнение объектов - это процесс сравнения ключей объекта и их значений, без учета уровня вложенности. То есть значение с типом object, никогда не будет равен точно такому же значению с типом object, т.к. ссылки на эти значения будут отличаться.
// Пример работы функции сравнения:
function shallowEquals(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let key of obj1Keys) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(shallowEquals({a: 1, b: "2"}, {a: 1, b: "2"})); // true
console.log(shallowEquals({a: 0}, {a: undefined})); // false
console.log(shallowEquals({a: {}}, {a: {}})); // false
console.log(shallowEquals({a: []}, {a: []})); // false
console.log(shallowEquals({a: () => {}}, {a: () => {}})); // false


//3) Напишите функцию, которая будет устанавливать значение в объекте, по переданному пути. Сигнатура функции должна быть
// следующей function ([“user”, “name”], “Sam”, obj).
// После вызова функции, для поля obj.user.name должно быть установлено значение “Sam”.

function setNestedValue(path, value, obj) {
    let current = obj;

    for (let i = 0; i < path.length; i++) {
        const key = path[i];

        if (i === path.length - 1) {
            current[key] = value;
        } else {
            if (current[key] === undefined) {
                current[key] = {};
            }
            current = current[key];
        }
    }
}

const obj = {user: {}};
setNestedValue(["user", "name"], "Sam", obj);
console.log(obj.user.name); // { user: { name: 'Sam' } }

//4) Реализуйте, на выбор, один из методов массива: map, sort, filter. Пример работы:
Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};

const arr = [1, 2, 3, 4, 5];
const mappedArr = arr.myMap(item => item * 2);
console.log(mappedArr); // [2, 4, 6, 8, 10]


// 5) Реализуйте функцию pipe. Она должна принимать неопределенное количество функций-обработчиков и возвращать функцию,
// которая будет прогонять принимаемый параметр через все обработчики, а на выходе вернет результат работы.
// Функции-обработчики должны вызываться справа налево.
const pipe = (...funcs) => (x) => funcs.reduceRight((acc, fn) => fn(acc), x);

const fillUser = pipe(
    (user) => ({...user, lastName: "Pass"}),
    (user) => ({...user, age: 29}),
    (user) => ({...user, city: "Boston"}),
);


//6) Напишите функцию для поиска значения в n-арном дереве. Если искомое значение отсутствует,
// необходимо вернуть значение -1. Найдите 11, 1 и 25 узел из дерева.


//7) Напишите упрощенную версию для нативного типа данных Set, MySet. Ваша реализация должна предоставлять методы add, has, delete, clear и свойство size. При создании MySet принимает только массив, если передать другое значение, то необходимо выдавать ошибку, что переданное значение не поддерживается. Способы реализации методов произвольные. Пример работы MySet
// const mySet = new MySet([ 0, 1, 2, 3]);
//
// console.log(mySet); // { 0, 1, 2, 3, size: 4 }
// console.log(mySet.size); // 4
// console.log(mySet.has(6)); // false
//
// mySet.add(4);
// console.log(mySet); // { 0, 1, 2, 3, 4, size: 5 }
//
// mySet.delete(2);
// console.log(mySet); // { 0, 1, 2: 3, 3: 4, size: 4 }
//
// mySet.clear();
// console.log(mySet); // { size: 0 }


// 8) Напишите две функции для преобразования приведенного массива в указанный объект и для преобразования полученного объекта в исходный массив.
// Интерфейс объекта в массиве следующий: { name: string, value: number }.
/*
*
[
  { name: "width", value: 100 },
  { name: "height", value: 50 },
]

{ width: 100, height: 50 }
*/


//9) Написать функцию asyncTimeout. Функция должна принимать значения timeout,
// по завершении которого возвращает зарезолвленный промис. Пример работы:
const asyncTimeout = (timeout) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}
// setTimeout(() => console.log(3), 2000);
//
// console.log(1);
//
// asyncTimeout(1000).then(() => console.log(2));

//10)  Напишите функцию promiseStack, которая принимает массив функций возвращающих промис и вызывает их в порядке очереди,
// пока первый промис не завершился второй не начинается. Результатом выполнения данного кода должно быть следующее:
// через 4 секунды в консоль выведется “1”
// еще через 2 секунды “2”
// еще через 1 секунду “3”
// еще через 3 секунды “4”

function promiseStack(promises) {
    let chain = Promise.resolve();

    promises.forEach((promiseFn) => {
        chain = chain.then(promiseFn);
    });

    return chain;
}

promiseStack([
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(3000).then(() => console.log(4)),
]);


// 11) Обновите функцию promiseStack, таким образом, чтобы она принимала второй необязательный аргумент отвечающий за количество параллельно обрабатываемых промисов.Результатом выполнения данного кода должно быть следующее:
// через 4 секунды в консоль выведется одновременно две “1”
// еще через 2 секунды одновременно две “2”
// еще через 1 секунду одновременно две “3”
// еще через 3 секунды “4”
// promiseStack([
//   () => asyncTimeout(4000).then(() => console.log(1)),
//   () => asyncTimeout(4000).then(() => console.log(1)),
//   () => asyncTimeout(2000).then(() => console.log(2)),
//   () => asyncTimeout(2000).then(() => console.log(2)),
//   () => asyncTimeout(1000).then(() => console.log(3)),
//   () => asyncTimeout(1000).then(() => console.log(3)),
//   () => asyncTimeout(3000).then(() => console.log(4)),
// ], 2);
