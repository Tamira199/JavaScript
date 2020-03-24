console.log('Task 6');

let total = 0;
let input;
let inputNum = Number(input);
const ENTER_NUMBER = 'Введите число';

while (input !== Number) {
    input = +(prompt(ENTER_NUMBER, '') * 10);
    if (input === null) break;
    if (!isNaN(inputNum)) {
        alert(ENTER_NUMBER);
    } else {
        total += inputNum;
    }
}
alert(`Общая сумма чисел равна ${total / 10}`);