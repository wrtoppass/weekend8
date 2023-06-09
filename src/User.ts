import { v4 as uuidv4 } from "uuid"
import Shop from "./Shop"
import Item from "./Item"

export default class User{
    constructor(
        private _userid: string = uuidv4(),
        private _name: string,
        private _age: number,
        private _cart: Item[] 
    ){}
    public get cart(): Item[] {
        return this._cart
    }

    public set cart(value: Item[]) {
        this._cart = value
    }

    public get age(): number {
        return this._age
    }

    public set age(value: number) {
        this._age = value
    }

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value
    }

    public get userid(): string {
        return this._userid
    }
    
    public set userid(value: string) {
        this._userid = value
    }
    
    
    cartTotal(user:User){
        console.log(`total price in ${user.name}'s cart is: ${user.cart.reduce((acc,item)=> acc+item.price,0)}$`)
        return user.cart.reduce((acc,item)=> acc+item.price,0)
        
    }

    static createUser():User{
        const name = (document.querySelector('#name') as HTMLInputElement).value
        const age:number = parseFloat((<HTMLInputElement>document.querySelector('#age')).value)

        const user = new User(uuidv4(),name,age,[])
        return user
    }
    cartHTMLElement():HTMLDivElement{
        
        const div = (document.querySelector('.cart') as HTMLDivElement)
        
        for(let e of Shop.myUser.cart){
        const button = document.createElement('button')

        const list = document.createElement('ul')

        const listItem1 = document.createElement('li')

        const listItem2 = document.createElement('li')

        const listItem3 = document.createElement('li')

            button.addEventListener('click',(event) =>{
                event.preventDefault()
                const n = Shop.myUser.cart.indexOf(e)
                Shop.myUser.cart.splice(n,1)
            })
            list.append(button)

            listItem1.innerText = e.name

            listItem2.innerText = e.desc

            listItem3.innerText = e.price.toString()

            list.append(listItem1,listItem2,listItem3)

            const button2 = document.createElement('button')

            button2.addEventListener('click',(event)=>{
                event.preventDefault
                Shop.myUser.cart.splice(0,Shop.myUser.cart.length)
        })
            div.append(button2)
            div.append(list)
            
        

    }
    console.log(Shop.myUser.cart)
    return div 
}
    
    
}