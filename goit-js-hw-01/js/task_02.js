console.log('Task 2');

const total = 100;
const ordered = 50;
const orderNo = 'На складе недостаточно товаров!';
const orderYes = 'Заказ оформлен, с вами свяжется менеджер';
const message = ordered > total ? orderNo : orderYes;
console.log(message);