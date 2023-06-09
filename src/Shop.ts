import Item from "./Item";
import User from "./User";

export default class Shop{
    private static _myUser: User;
    
    private _items: Item[] = [];
    constructor(
        private _item1: Item,
        private _item2: Item,
        private _item3: Item,
        private _item4: Item,
        private _item5: Item,
        private _item6: Item
    ){
        this._items.push(this._item1)
        this._items.push(this._item2)
        this._items.push(this._item3)
        this._items.push(this._item4)
        this._items.push(this._item5)
        this._items.push(this._item6)
        this.showItems()        
        this.updateCart()
        
    }
    public static get myUser(): User {
        return Shop._myUser;
    }
    public static set myUser(value: User) {
        Shop._myUser = value;
    }   
    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
    public get item6(): Item {
        return this._item6;
    }
    public set item6(value: Item) {
        this._item6 = value;
    }
    public get item5(): Item {
        return this._item5;
    }
    public set item5(value: Item) {
        this._item5 = value;
    }
    public get item4(): Item {
        return this._item4;
    }
    public set item4(value: Item) {
        this._item4 = value;
    }
    
    public get item3(): Item {
        return this._item3;
    }
    public set item3(value: Item) {
        this._item3 = value;
    }
    public get item2(): Item {
        return this._item2;
    }
    public set item2(value: Item) {
        this._item2 = value;
    }
    public get item1(): Item {
        return this._item1;
    }
    public set item1(value: Item) {
        this._item1 = value;
    }
    showItems():HTMLDivElement{
        const div = (document.querySelector('.shop') as HTMLDivElement)
        for(let e of this.items){
            div.append(e.itemElement())
        }
        return div
    }
    updateCart(){
        if(Shop.myUser == undefined || Shop.myUser == null){
            const div = (document.querySelector('.cart') as HTMLDivElement)
            return div

        }else if (Shop.myUser != undefined && Shop.myUser != null && Shop.myUser.cart.length == 0){
            const div = (document.querySelector('.cart') as HTMLDivElement)
            div.innerHTML = '<p>Your Cart is Empty</p>'
            return div
        }else{
            
            return Shop.myUser.cartHTMLElement()
            
        }

    }
    static loginUser(shop:Shop):User{
            
        
            const user = User.createUser()
            Shop.myUser = user
            shop.updateCart()
            return Shop.myUser
        
        
        }
        
}