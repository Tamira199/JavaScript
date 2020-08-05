console.log('task_01');
const categories = document.querySelectorAll('ul>li.item').length;
console.log(`В списке ${categories} категории.`);
const list = document.querySelectorAll('ul>li.item');
for (const title of list) {
    const titleText = title.querySelectorAll('h2');
    for (const text of titleText) {
        console.log('Категория:', text.textContent);
    }
    console.log('Количество элементов:', title.querySelectorAll('ul>li').length);
}