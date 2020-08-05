const fontSize = document.getElementById('font-size-control');
const chengedText = document.getElementById('text');
fontSize.addEventListener('input', inputRange);

function inputRange(e) {
    chengedText.style.fontSize = `${e.target.value}px`;
}