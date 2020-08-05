let counterValue = 0;
const value = document.getElementById('value');
const clickBlock = document.getElementById('counter');
clickBlock.addEventListener('click', buttonClick);

function buttonClick(e) {
    if (e.target === e.currentTarget || e.target.tagName === 'SPAN') {
        return;
    }
    if (e.target.dataset.action === 'decrement') {
        counterValue -= 1;
    }
    if (e.target.dataset.action === 'increment') {
        counterValue += 1;
    }
    value.textContent = counterValue;
}