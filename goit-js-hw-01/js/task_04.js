console.log('Task 4');

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
const canceled = 'Отменено пользователем!';
const incorrect = 'Incorrect value';
const incorrectValue = 'Некорректное значение totalPrice';
const noMoney = 'Недостаточно средств на счету!';

const quantityDroid = prompt('How many droids do you want to buy?');

if (quantityDroid === null) {
    console.log(canceled);
} else {
    Number(quantityDroid);
    if (quantityDroid > 0) {
        totalPrice = quantityDroid * pricePerDroid;
    } else {
        console.log(incorrect);
    }
}
if (totalPrice === undefined) {
    console.log(incorrectValue, totalPrice);
} else if (credits < totalPrice) {
    console.log(noMoney);
} else {
    const buyDroid = `Вы купили ${quantityDroid} 
  дроидов, на счету осталось ${credits - totalPrice} кредитов.`;
    console.log(buyDroid);
}