//Скрыть элемент по нажатию кнопки
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
/*
<!DOCTYPE HTML>
<html>

<head>
<meta charset="utf-8">
    </head>

<body>

<input type="button" id="hider" value="Нажмите, чтобы спрятать текст" />

<div id="text">Текст</div>

<script>

 \
}
</script>

</body>

 */

const element = document.getElementById("hider");
const text = document.getElementById('text')
if (element) {
    element.addEventListener('click', () => text ? text.hidden = true : '')
}

//Спрятать себя
// Создайте кнопку, которая будет скрывать себя по нажатию.
//
// Например:
//
// решение
//<button onClick="this.hidden=true">Hide</button>


//Какой обработчик запустится?
// В переменной button находится кнопка. Изначально на ней нет обработчиков.
//
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?
//
// button.addEventListener("click", () => alert("1"));
//
// button.removeEventListener("click", () => alert("1"));
//
// button.onclick = () => alert(2);

// решение
// 1,2
//при вызове removeEventListener мы передаем анонимную функцию, которая не совпадает с функцией обработчика, добавленной ранее, то никакого эффекта от этой команды не будет.