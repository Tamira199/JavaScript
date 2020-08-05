const checkInput = document.getElementById('validation-input');
checkInput.addEventListener('blur', validInput);

function validInput() {
    if (checkInput.value.length === Number(checkInput.dataset.length)) {
        checkInput.classList.add('valid');
        checkInput.classList.remove('invalid');
    } else {
        checkInput.classList.add('invalid');
        checkInput.classList.remove('valid');
    }
}