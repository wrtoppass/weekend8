import Item from "./Item";
import Shop from "./Shop";
import {v4 as uuidv4} from 'uuid'


const gunpla = new Item(uuidv4(),'PG ZAKU II',200,'1:60 Scale Mech Model Kit')

const diablo = new Item(uuidv4(),'Diablo 4',80,'New installment of the Diablo video game franchise')

const ender = new Item(uuidv4(),'Ender 3 V2 Pro',400,'Crealitys newer 3D Printer')

const titos = new Item(uuidv4(),'Titos Vodka',20,'A neutral grain alcohol')

const watch = new Item(uuidv4(),'Apple Watch',500,'A watch with a screen')

const keyboard = new Item(uuidv4(),'Mechanical Keyboard',10,'Click Clack')



function Driver(){
    const shop = new Shop(gunpla,diablo,ender,titos,watch,keyboard)
    const button = (document.getElementById('button')as HTMLButtonElement)
    
    button.addEventListener('click', (event)=>{
        event.preventDefault()
        
        
        Shop.loginUser(shop)
        
        
        

        
    })
    
    

}
Driver() 