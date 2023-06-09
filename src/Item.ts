import Shop from "./Shop";

export default class Item{
    constructor(
        private _id: string,
        private _name: string,
        private _price: number,
        private _desc: string
    ){}
    public get desc(): string {
        return this._desc;
    }
    public set desc(value: string) {
        this._desc = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    addToCart(){
        Shop.myUser.cart.push(this)
    }
    reload(){
        var container = document.getElementById("cart")
        var content = container.innerHTML
        container.innerHTML= content 
        
       //this line is to watch the result in console , you can remove it later	
        console.log("Refreshed"); 
    }
    itemElement():HTMLDivElement{

        const div = document.createElement('div')

        const button = document.createElement('button')

        const list = document.createElement('ul')

        const listItem1 = document.createElement('li')

        const listItem2 = document.createElement('li')

        const listItem3 = document.createElement('li')

        listItem1.innerText = this.name

        listItem2.innerText = this.desc

        listItem3.innerText = this.price.toString()

        list.append(listItem1,listItem2,listItem3)

        button.addEventListener('click',()=>{
            this.addToCart()


        })
        
        div.append(list,button)
        return div

    }
}