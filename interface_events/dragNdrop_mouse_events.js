//Слайдер
// важность: 5
// Создайте слайдер:
//
//
// Захватите мышкой синий бегунок и двигайте его.
//
// Важные детали:
//
// Слайдер должен нормально работать при резком движении мыши влево или вправо за пределы полосы. При этом бегунок должен останавливаться чётко в нужном конце полосы.
// При нажатом бегунке мышь может выходить за пределы полосы слайдера, но слайдер пусть всё равно работает (это удобно для пользователя).


const thumb = slider.querySelector('.thumb');

thumb.addEventListener('mousedown', (event) => {
    event.preventDefault();

    const shiftX = event.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp, {once: true});

    function onMouseMove(event) {
        const moveLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
        const minMove = Math.min(moveLeft, slider.offsetWidth - thumb.offsetWidth)
        const moveLeftResult = Math.max(0, minMove);

        thumb.style.left = moveLeftResult + 'px';
    }
    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
    }
});

thumb.ondragstart = () => false;