import { Items, Item, User,Shop,Users } from './types';
import products from './products';

export const shop:Object[] = []
let cust
export function createUser(name:string, age:number):User{
    return new User(name,age)
}

export function createUserForm(){
    let form = document.getElementById('login-form')
    form!.addEventListener('submit', (e)=>{
        
        let user = document.getElementById('name') as HTMLInputElement
        let age = document.getElementById('age') as HTMLFormElement

        console.log(user.value, age.value)
        console.log("Form: "+form)

        if(user.value == "" || age.value == ""){
            alert("Please fill out both fields")
        }else{
            let customer = createUser(user.value,age.value)
            cust = JSON.stringify(customer)
            localStorage.setItem('user',cust)
            sessionStorage.setItem('user',cust)
        }
        e.preventDefault()

    })
}

export function createItem(name:string, price:number, description:string,img:string):Item{
    return new Item(name,price,description,img)
}

export function addToCart(item:Items | undefined, user:User | undefined, quantity:number):void{
    console.log("ITEM: "+item)
    const index = user!.cart.findIndex((cartItem)=> cartItem.id == item!.id)
    console.log("INDEX: "+index)

    if(index == -1){
        item!.quantity = quantity
        user!.cart.push(item!)
    }else{
        item!.quantity += 1
    }
    
}

export function removeItem(item:Items,user:User):void{
    user.cart = user.cart.filter((cartItem)=> cartItem.id !== item.id)
}


export function changeCartItemQuantity(user:User,item:Items,quantity:number):void{
    const index = user.cart.findIndex((cartItem)=> cartItem.id == item.id)

    if(index !== -1){
        if(user.cart[index]!.quantity > quantity){
            user.cart[index]!.quantity -= quantity
        }else{
            user.cart[index]!.quantity += quantity
        }
    }
}

export function cartTotal(user:User):number{
    return user.cart.reduce((total:number,item:Items) => total+item.price*item.quantity,0)
}

export function printCart(user:User):void{
    user.cart.forEach((item)=>{
        console.log("Item: "+item.name)
        console.log("Price: $"+item.price)
        console.log("Quantity: "+item.quantity)
        console.log("Description: "+item.description+"\n")
    })
    console.log("Cart Total: $"+cartTotal(user).toFixed(2)+"\n\n")
}

export function getCart(user:User):Items[]{
    return user.cart
}

export function createProducts(){
    for(var product of products){
        product.shortName = new Item(product.name, product.price,product.description,product.img)
        shop.push(product.shortName)
    }
    localStorage.setItem('shop',JSON.stringify(shop))
}

export function displayProducts(){
    let x = 0
    var usr = localStorage.getItem('user')!
    var user = JSON.parse(usr)
    var shp = localStorage.getItem('shop')!
    var shop = JSON.parse(shp)
    console.log(shop[x])
    let prodDiv = document.getElementById('product-div')!
    shop.forEach((product:Items)=>{
        var prod = JSON.stringify(product)
        prodDiv.innerHTML += `
        <div class="col-md-4">
        <div class="card">
        <div class="ccc">
            <p class="text-center"><img src=${product.img} class="imw"></p> 
        </div>
        <div class="card-body">
            <h5  class="text-center">${product.name}</h5> 
            <p  class="text-center">Price: $${product.price}</p>
            <input type="hidden" class="prod-id" value="${product.id}" />
            <p class="text-center"><input type="button" 
            name="buy" 
            value="Add to Cart" 
            class=" cc1 product-click"
            id="product-${x}"
            >      
        </p>
        </div>
        </div>
    </div>
      `
        x++
    })
}


export function displayLoginForm(){
    const formDiv = document.getElementById('form-div')
    formDiv!.innerHTML = 
    `<form id="login-form">
    <div class="form-group mb-4">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" aria-describedby="firstName">
      <small id="name-help" class="form-text text-muted">Enter your first name</small>
    </div>
    <div class="form-group mb-4">
      <label for="age">Age</label>
      <input type="number" class="form-control" id="age">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`
    
}
