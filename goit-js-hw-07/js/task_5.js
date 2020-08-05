const checkInput = document.getElementById('name-input');
const checkOutput = document.getElementById('name-output');
checkInput.addEventListener('input', inputText);
let enteredName = '';

function inputText() {
    if (checkInput.value === checkInput.defaultValue) {
        enteredName = 'Незнакомец';
    } else {
        enteredName = checkInput.value;
    }
    return (checkOutput.textContent = enteredName);
}