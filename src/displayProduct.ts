import products from "./products"
import { Items } from "./types"

export function displayProducts(){
  
    let prodDiv = document.getElementById('product-div')!
    
    products.forEach((product:Items)=>{
        prodDiv.innerHTML += `
        <div class="col-md-4 ">
        <div class="card">
        <div class="ccc">
            <p class="text-center"><img src="${product.img}" class="imw"></p> 
<!--                               <div class="overlay">
            <div class="text">View Details</div>
            </div> -->
        </div>
        <div class="card-body">
            <h5  class="text-center">${product.name}</h5> 
            <p  class="text-center">Price: $${product.price}</p>
            <p class="text-center"><input type="submit" name="buy" value="Add to Cart" class=" cc1"></p>
        </div>
        </div>
    </div>
        `
    })
}