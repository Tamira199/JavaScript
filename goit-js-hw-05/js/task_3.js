console.log('task_03');

class Storage {
    constructor(items) {
        this.items = items;
    }

    //  возвращает массив текущих товаров
    getItems() {
        return this.items;
    }

    //  получает новый товар и добавляет его к текущим
    addItem(item) {
        this.items.push(item);
    }

    //  получет товар и, если он есть, удаляет его из текущих
    removeItem(item) {
        if (this.items.includes(item)) {
            this.items.splice(this.items.indexOf(item), 1);
        }
        this.items;
    }
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // ["Нанитоиды","Пролонгер","Железные жупи","Антигравитатор","Дроид"]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]