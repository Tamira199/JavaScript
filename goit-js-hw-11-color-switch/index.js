const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const buttonSection = document.querySelector('body');
const startButton = document.getElementById('start-button');

buttonSection.addEventListener('click', changeColor);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomColor = null;

function changeColor(buttonPosition) {
    if (buttonPosition.target === buttonPosition.currentTarget) {
        return;
    }
    if (buttonPosition.target.dataset.action === 'start' && startButton.value !== 'started') {
        startButton.setAttribute('value', 'started');
        randomColor = setInterval(() => {
            buttonSection.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
        }, 1000);
    }
    if (buttonPosition.target.dataset.action === 'stop') {
        startButton.setAttribute('value', 'stoped');
        clearInterval(randomColor);
    }
}