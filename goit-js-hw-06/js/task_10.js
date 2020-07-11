import users from './users.js';
console.log('Task 10');
const getSortedUniqueSkills = users =>
    users
    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    .filter((elem, index, arr) => arr.indexOf(elem) === index)
    .sort((a, b) => a.localeCompare(b, 'en'));

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]