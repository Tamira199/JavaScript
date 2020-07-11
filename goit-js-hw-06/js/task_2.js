import users from './users.js';
console.log('Task 2');
const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]