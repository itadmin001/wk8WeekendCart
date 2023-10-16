import {v4 as uuidv4} from 'uuid'

export type Shop = {
    shop:Item[]
}

export type ItemShortName = {
    shortName:Item | undefined
}

export type Items = {
    id:string
    shortName:ItemShortName
    name:string
    price:number
    quantity:number
    description:string
    img:string
}

export type Users = {
    id:string
    name:string
    age: number
    cart:Items[]
}

export class User{
    constructor(public name:string, public age:number){
        this.id = uuidv4()
        this.cart = []
    }

    id:string
    cart:Items[]

}

export class Item{
    constructor(public name:string, public price:number, public description:string, public img:string){
        this.id = uuidv4()
        this.quantity = 0
        this.shortName
        this.img
    }
    shortName:Item | undefined
    id:string
    quantity:number
}