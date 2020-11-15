// Счетчик состоит из спана и кнопок, 
// которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса




let counterValue = 0;

function decrement() {
    counterValue -= 1;

    render()
}

function increment() {
    counterValue += 1;

    render()
}

function render() {
    htmlValue.textContent = counterValue;
}

const decrementButton = document.querySelector('[data-action="decrement"]');
console.log(decrementButton);

const incrementButton = document.querySelector('[data-action="increment"]');
console.log(incrementButton);

const htmlValue = document.querySelector('#value');
console.log(htmlValue);

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);

