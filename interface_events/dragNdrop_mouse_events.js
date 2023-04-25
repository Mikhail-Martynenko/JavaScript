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


let thumb = slider.querySelector('.thumb');

thumb.addEventListener('mousedown', (event) => {
    event.preventDefault();

    let shiftX = event.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp, {once: true});

    function onMouseMove(event) {
        let moveL = event.clientX - shiftX - slider.getBoundingClientRect().left;
        moveL = Math.max(0, Math.min(moveL, slider.offsetWidth - thumb.offsetWidth));

        thumb.style.left = moveL + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
    }
});

thumb.ondragstart = () => false;