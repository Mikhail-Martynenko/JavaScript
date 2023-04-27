//Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
//
// ucFirst("вася") == "Вася";

const ucFirst = (str) => str[0].toUpperCase() + str.slice(1);

console.log(ucFirst('вася'))


//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//
// Функция должна быть нечувствительна к регистру:
//
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false
const badWords = ['viagra', 'xxx']
const checkSpam = (str) => {
    let lowerStr = str.toLowerCase()
    const lowerArray = badWords.map(word => word.toLowerCase())
    return lowerArray.includes(lowerStr)
}

console.log(checkSpam('xxX'))
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
//
// Например:
//
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
//
// truncate("Всем привет!", 20) = "Всем привет!"

const truncate = (str, maxlength) => (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;


//Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
//
// Например:
//alert( extractCurrencyValue('$120') === 120 ); // true
const extractCurrencyValue = (str) =>  +str.match(/\d+/);
console.log(extractCurrencyValue('USD: 400, -40%'))