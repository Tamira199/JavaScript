console.log('Task 3');

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Please enter password');
const approved = 'Добро пожаловать!';
const denied = 'Доступ запрещен, неверный пароль!';
const canceled = 'Отменено пользователем!';

// if (message === null) {
//     message = canceled;
//     console.log(canceled);
// } else if (message === ADMIN_PASSWORD) {
//     message = approved;
//     console.log(approved);
// } else {
//     message = denied;
//     console.log(denied);
// }

if (message === null) {
    message = canceled;
} else if (message === ADMIN_PASSWORD) {
    message = approved;
} else {
    message = denied;
}

console.log(message);
alert(message);