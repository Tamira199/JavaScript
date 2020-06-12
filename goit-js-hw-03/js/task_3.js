console.log('task_03');

const findBestEmployee = function(employees) {
    for (const key in employees) {
        if (employees[key] === Math.max(...Object.values(employees))) return key;
    }
};

console.log(
    findBestEmployee({
        ann: 29,
        david: 3500,
        helen: 1,
        lorence: 99,
    }),
); // david

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux