import { v4 as uuidv4 } from 'uuid';
export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = uuidv4();
        this.cart = [];
    }
}
export class Item {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.id = uuidv4();
        this.quantity = 0;
        this.shortName;
    }
}
