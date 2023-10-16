
import { createProducts,shop,displayProducts, displayLoginForm,createUserForm,addToCart} from './functions'



if(!localStorage.getItem('shop')){
    console.log(shop.length)
    createProducts()
    localStorage.setItem('shop',JSON.stringify(shop))
    console.log("created "+shop.length)
}else{
    // console.log(localStorage.getItem('shop'))
}

displayLoginForm()
createUserForm()

if(localStorage.getItem('user')){
    console.log(localStorage.getItem('user'))
}else{
    console.log('no user')
}
