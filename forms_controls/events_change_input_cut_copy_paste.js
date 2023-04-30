// Депозитный калькулятор.
// Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, а затем рассчитать, какая это будет сумма через заданный промежуток времени.

const form = document.getElementsByTagName('form').calculator;
const calculate = () => {
    const initial = +form.money.value;
    const interest = form.interest.value * 0.01;
    const years = form.months.value / 12;
    if (interest && initial && years) {
        let result = Math.round(initial * (1 + interest) ** years);
        document.getElementById('height-after').style.height = result / initial * 100 + 'px';
        document.getElementById('money-before').innerHTML = initial;
        document.getElementById('money-after').innerHTML = result;
    }
}
form.months.onchange = calculate;
form.money.oninput = calculate;
form.interest.oninput = calculate;

calculate();