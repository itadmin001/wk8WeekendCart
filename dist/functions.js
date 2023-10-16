import { Item, User } from './types.js';
import products from './products.js';
export function createUser(name, age) {
    return new User(name, age);
}
export function createItem(name, price, description) {
    return new Item(name, price, description);
}
export function addToCart(item, user, quantity) {
    const index = user.cart.findIndex((cartItem) => cartItem.id == item.id);
    if (index == -1) {
        item.quantity = quantity;
        user.cart.push(item);
    }
    else {
        item.quantity += quantity;
    }
}
export function removeItem(item, user) {
    user.cart = user.cart.filter((cartItem) => cartItem.id !== item.id);
}
export function changeCartItemQuantity(user, item, quantity) {
    const index = user.cart.findIndex((cartItem) => cartItem.id == item.id);
    if (index !== -1) {
        if (user.cart[index].quantity > quantity) {
            user.cart[index].quantity -= quantity;
        }
        else {
            user.cart[index].quantity += quantity;
        }
    }
}
export function cartTotal(user) {
    return user.cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
export function printCart(user) {
    user.cart.forEach((item) => {
        console.log("Item: " + item.name);
        console.log("Price: $" + item.price);
        console.log("Quantity: " + item.quantity);
        console.log("Description: " + item.description + "\n");
    });
    console.log("Cart Total: $" + cartTotal(user).toFixed(2) + "\n\n");
}
export function getCart(user) {
    return user.cart;
}
export var shop;
export function createProducts() {
    for (var product of products) {
        product.shortName = new Item(product.name, product.price, product.description);
        shop.push(product.shortName);
    }
    console.log(shop)
}

