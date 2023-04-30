// createTextNode vs innerHTML vs textContent
// У нас есть пустой DOM-элемент elem и строка text.
//
// Какие из этих 3-х команд работают одинаково?
//
// elem.append(document.createTextNode(text))
// elem.innerHTML = text
// elem.textContent = text

// Answer: 1,3



// Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
//
// <ol id="elem">
//   <li>Привет</li>
//   <li>Мир</li>
// </ol>
//
// <script>
//   function clear(elem) { /* ваш код */ }
//
//   clear(elem); // очищает список
// </script>

// Answer:
function clear(elem) {
    elem.innerHTML = '';
}

//Почему остаётся "aaa"?
// В примере ниже вызов table.remove() удаляет таблицу из документа.
//
// Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.
//
// Почему так происходит?
//
// <table id="table">
//   aaa
//   <tr>
//     <td>Тест</td>
//   </tr>
// </table>
//
// <script>
//   alert(table); // таблица, как и должно быть
//
//   table.remove();
//   // почему в документе остался текст "ааа"?
// </script>

// Answer: HTML в задаче некорректен




//Вставьте HTML в список
// важность: 5
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
//
// <ul id="ul">
//   <li id="one">1</li>
//   <li id="two">4</li>
// </ul>

//  Answer: one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');