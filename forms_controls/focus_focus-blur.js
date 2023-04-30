// Редактируемый div
// Создайте <div>, который превращается в <textarea>, если на него кликнуть.
//
// <textarea> позволяет редактировать HTML в элементе <div>.
//
// Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.


// Простой вариант редактируемого div
<div id="editable" className="editable" contentEditable="true">Текст</div>

let editable = document.getElementById('editable');
editable.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        editable.blur();
    }
});

