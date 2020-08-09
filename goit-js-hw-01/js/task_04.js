console.log('Task 4');

let credits = 23580;
const pricePerDroid = 3000;
const canceled = 'Отменено пользователем!';
const incorrect = 'Incorrect value';
const noMoney = 'Недостаточно средств на счету!';
const quantityDroid = prompt('How many droids do you want to buy?');
let totalPrice;

if (quantityDroid === null) {
    console.log(canceled);
} else {
    if (quantityDroid > 0) {
        let totalPrice = quantityDroid * pricePerDroid;
        if (totalPrice > credits) {
            console.log(noMoney);
        } else {
            let balance = credits - totalPrice;
            console.log(`Вы купили ${quantityDroid} дроидов, на счету осталось ${balance} кредитов`);
        }
    } else {
        console.log(incorrect);
    }
}