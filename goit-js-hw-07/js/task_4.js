const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const span = document.querySelector('#value');

let counterValue = Number(span.textContent);

const updateValue = value => {
    counterValue = counterValue + value;
    span.textContent = counterValue;
};

increment.addEventListener('click', () => {
    updateValue(1);
});

decrement.addEventListener('click', () => {
    updateValue(-1);
});