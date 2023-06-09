//1. Создайте дату.
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
//
// Для вывода используйте alert.
let date = new Date(2012, 1, 20, 3, 12);
alert(date);


//2. Покажите день недели
//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
//
// Например:
//
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );
const getWeekDay = (date) => ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'][date.getDay()];
let date2 = new Date(2012, 0, 3);  // 3 января 2012 года
alert(getWeekDay(date2));

//3. День недели в европейской нумерации
// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date
//
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2

const getLocalDay = (date) => date.getDay() === 0 ? 7 : date.getDay();

// 2
const getLocalDay2 = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
        return null;
    }
    const day = date.getDay();
    return day === 0 ? 7 : day;
};
console.log(getLocalDay2())