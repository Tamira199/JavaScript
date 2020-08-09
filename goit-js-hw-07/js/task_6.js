const input = document.querySelector('#validation-input');
const inputLength = Number(input.getAttribute('data-length'));
input.addEventListener('blur', handleInputBlur);

const isValid = value => {
    return value === inputLength;
};

function handleInputBlur(event) {
    const input = event.target;
    if (isValid(input.value.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}