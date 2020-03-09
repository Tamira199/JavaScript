console.log('Task 6');

let total = 0;
let input;
const ENTER_NUMBER = 'Введите число';

while (input !== Number) {
    input = +(prompt(ENTER_NUMBER, '') * 10);
    if (input === 0) break;
    if (Number.isNaN(input)) {
        alert(ENTER_NUMBER);
    } else {
        total += input;
    }
}

alert(`Общая сумма чисел равна ${total / 10}`);