// Отследить одновременное нажатие
// Создайте функцию runOnKeys(func, code1, code2, ... code_n), которая запускает func при одновременном нажатии клавиш с кодами code1, code2, …, code_n.
//
// Например, код ниже выведет alert при одновременном нажатии клавиш "Q" и "W" (в любом регистре, в любой раскладке)
//
// runOnKeys(
//   () => alert("Привет!"),
//   "KeyQ",
//   "KeyW"
// );

function runOnKeys(func, ...codes) {

    const pressedKeys = new Set();
    document.addEventListener('keydown', (event) => {
        const {code} = event;
        pressedKeys.add(code);

        if (codes.some((code) => !pressedKeys.has(code))) return;
        pressedKeys.clear();
        func();
    });

    document.addEventListener('keyup', (event) => {
        pressedKeys.delete(event.code);
    });
}


runOnKeys(
    () => alert("Привет!"),
    "KeyQ",
    "KeyW"
);