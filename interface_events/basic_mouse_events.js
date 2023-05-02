//Выделяемый список.
// Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.
//
// При клике на элемент списка выделяется только этот элемент (добавляется класс .selected), отменяется выделение остальных элементов.
// Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе, но остальные элементы при этом не изменяются.
// Демо:
//
//
// P.S. В этом задании все элементы списка содержат только текст. Без вложенных тегов.
//
// P.P.S. Предотвратите стандартное для браузера выделение текста при кликах.


ul.addEventListener('click', (event) => {
    const target = event.target.closest('li');

    if (!target) return;
    if (!event.ctrlKey || !event.metaKey) return;

    target.classList.toggle('selected');

    ul.querySelectorAll('li.selected').forEach((li) => {
        if (li === target) return;
        li.classList.remove('selected');
    });

});

ul.addEventListener('mousedown', (event) => {
    if (!event.target.closest('li')) return;
    event.preventDefault();
});