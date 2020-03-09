console.log('Task 5');

const SELECT_COUNTRY = 'Напишите название страны в которую нужно доставить товар';
const CANCEL_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В вашей стране доставка не доступна';
const CNINA = 'Китай';
const CHILE = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';

let message = prompt(SELECT_COUNTRY);
let priсe = 0;
let countryName;

if (message === null) {
    message = CANCEL_BY_USER;
} else {
    countryName = message[0].toUpperCase() + message.slice(1).toLowerCase();

    switch (countryName) {
        case CNINA:
            priсe = 100;
            break;

        case CHILE:
            priсe = 250;
            break;

        case AUSTRALIA:
            priсe = 170;
            break;

        case INDIA:
            priсe = 80;
            break;

        case JAMAICA:
            priсe = 120;
            break;

        default:
            message = NO_DELIVERY;
    }
}

if (priсe > 0) {
    const DELIVERY_PRICE = `Доставка в ${countryName} будет стоить ${priсe} кредитов`;
    message = DELIVERY_PRICE;
}
alert(message);