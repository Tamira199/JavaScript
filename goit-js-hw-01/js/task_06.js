console.log('Task 6');

let total = 0;
let input;
const ENTER_NUMBER = 'Введите число';
input = prompt(ENTER_NUMBER);
let inputNum = Number(input);

if (isNaN(input)) {
    alert('Введено не число, попробуйте еще раз');
    input = prompt(ENTER_NUMBER);
}

while (input !== null) {
    inputNum = Number(input);
    total = total + inputNum;
    input = prompt(ENTER_NUMBER);

    if (isNaN(input)) {
        alert('Введено не число, попробуйте еще раз');
        input = prompt(ENTER_NUMBER);
    }

    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
    }
}