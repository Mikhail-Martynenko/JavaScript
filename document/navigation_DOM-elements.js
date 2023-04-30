// Дочерние элементы в DOM
// Для страницы:
//
// <html>
// <body>
//   <div>Пользователи:</div>
//   <ul>
//     <li>Джон</li>
//     <li>Пит</li>
//   </ul>
// </body>
// </html>
// Напишите код, как получить…
//
// элемент <div>?  // document.body.firstElementChild
// <ul>? // document.body.lastElementChild
// второй <li> (с именем Пит)? // document.body.lastElementChild.lastElementChild

// Вопрос о соседях
// Если elem – произвольный узел DOM-элемента…
//
// Правда, что elem.lastChild.nextSibling всегда равен null?
// Правда, что elem.children[0].previousSibling всегда равен null ?
// решение

// Да. Элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
// Неверно. Потому что elem.children[0] – потомок-элемент, но перед ним могут быть другие узлы.