import users from './users.js';
console.log('Task 4');
const getInactiveUsers = users => users.filter(({ isActive }) => isActive === true);
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]