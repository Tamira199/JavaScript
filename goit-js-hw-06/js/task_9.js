import users from './users.js';
console.log('Task 9');
const getNamesSortedByFriendsCount = users =>
    users.sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]