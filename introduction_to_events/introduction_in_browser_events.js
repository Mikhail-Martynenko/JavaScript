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

}
</script>

</body>

 */
document.getElementById('hider').onclick = () => {
    document.getElementById('text').innerHTML = ''
//или document.getElementById('text').hidden = true;
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