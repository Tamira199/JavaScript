const YOUR_NUMBER = 'Введите число';
const NO_NUMBER = 'Было введено не число, попробуйте еще раз';
let input;
let total = 0;
const numbers = [];

while (input !== null) {
    input = prompt(YOUR_NUMBER, 'Введите число ');
    if (input === null) break;
    const userNumber = +input;
    if (Number.isNaN(userNumber) || userNumber === 0) {
        alert(NO_NUMBER);
    } else {
        numbers.push(userNumber);
    }
}

if (numbers.length > 0) {
    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i] * 100;
    }
}
const inputSum = total / 100;
const message = `Общая сумма чисел равна ${inputSum}`;
alert(message);