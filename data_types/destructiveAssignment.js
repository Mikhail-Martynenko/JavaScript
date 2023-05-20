//1. Деструктурирующее присваивание
// У нас есть объект:
//
let user = {
    name: "John",
    years: 30
};
// Напишите деструктурирующее присваивание, которое:
//
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:
//
// // ваш код должен быть с левой стороны:
const {name, years: age, isAdmin = false} = user;
//
// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false


//2. Максимальная зарплата
// У нас есть объект salaries с зарплатами:
//
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

const topSalary = (salaries) => {
    let max = 0;
    let maxNameSal = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxNameSal = name;
        }
    }
    return maxNameSal;
}

const topSalary2 = (salaries) => Object.entries(salaries).reduce((acc, [name, salary]) => acc.salary > salary ? acc : { name, salary }, { name: null, salary: 0 }).name;
console.log(topSalary2(salaries))


const salaryReducer = (maxFirst = true) => [
    (acc, [name, salary]) => (maxFirst ? acc.salary > salary : acc.salary < salary) ? acc : { name, salary },
    { name: null, salary: 0 }
]

const findSalaryRecord = (maxFirst, salaries) => Object.entries(salaries).reduce(...salaryReducer(maxFirst))

const topSalaryRecord = findSalaryRecord.bind(null, true)

const topSalaryUser = (salaries) => topSalaryRecord(salaries).name;

const topSalaryUserInRamda = (salaries) => prop('name', topSalaryRecord(salaries))

const minSalaryRecord = findSalaryRecord.bind(null, false)

const minSalaryUser = (salaries) => minSalaryRecord(salaries).name;