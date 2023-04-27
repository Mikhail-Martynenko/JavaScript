/*
* <body>

  <button onclick="showPrompt('Введите что-то', (value) => {
      if (value) {
        alert('Вы ввели: ' + value);
      } else {
        alert('Вы отменили ввод');
      }
    });">Клик!</button>


</body>
* */
function showPrompt(html, callback) {
    const dialog = document.createElement('dialog');
    dialog.innerHTML = `
    <form>
      <label>${html}</label>
      <input type="text" required>
      <button>OK</button>
      <button>Отмена</button>
    </form>
  `;

    const form = dialog.querySelector('form');
    const cancelButton = dialog.querySelector('button:last-of-type');
    const input = dialog.querySelector('input');

    input.focus();
    const onCancel = () => {
        dialog.close();
        callback(null);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        dialog.close();
        callback(input.value);
    };


    form.elements[form.elements.length - 1].onkeydown = (e) => {
        if (e.key === 'Tab' && !e.shiftKey) {
            form.elements[0].focus();
            return false;
        }
    };

    form.elements[0].onkeydown = (e) => {
        if (e.key === 'Tab' && e.shiftKey) {
            form.elements[form.elements.length - 1].focus();
            return false;
        }
    };

    form.addEventListener('submit', onSubmit);
    cancelButton.addEventListener('click', onCancel);
    dialog.addEventListener('cancel', onCancel);

    document.body.appendChild(dialog);
    dialog.showModal();
}