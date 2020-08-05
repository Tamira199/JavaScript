const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const addList = document.getElementById('ingredients');

const list = ingredients.map(liContent => {
    const li = document.createElement('li');
    li.textContent = liContent;
    return li.outerHTML;
});

addList.innerHTML = list.join('\n\r');