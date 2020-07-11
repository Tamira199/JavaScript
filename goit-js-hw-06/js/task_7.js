import users from './users.js';
console.log('Task 7');
const calculateTotalBalance = users => users.reduce((acc, { balance }) => acc + balance, 0);

console.log(calculateTotalBalance(users)); // 20916