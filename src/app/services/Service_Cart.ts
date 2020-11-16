import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable()
export class CartService {
    products: Product[]
    cart: Product[]

    username = " "

    constructor() {
        this.products = [
            new Product(101, "Iphone 12 Max Pro", 113000,5),
            new Product(102, "OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)", 113000,5),
            new Product(103, "Samsung Galaxy Note10 Lite (Aura Glow, 6GB RAM, 128GB Storage)", 34999,5),
            new Product(104, "Google Pixel 4a (Just Black, 6GB RAM, 128GB Storage)", 43350,5),
            new Product(105, "Samsung Galaxy M51 | 7000 mAh Battery | Snapdragon 730G", 24999,5),
        ]

        this.cart=[]
    }

    public getProductList(){
        return this.products
    }

    public getCart(){
        return this.cart
    }

    public addToCart(p:Product){
        let exists=0
        for(let i=0;i<this.cart.length;i++){
            if(this.cart[i].id==p.id){
                this.cart[i].quantity+=1
                exists=1
                break
            }
        }

        if(exists==0){
            this.cart.push(new Product(p.id,p.name,p.price,1))  
        }
    }

    public removeToCart(p:Product){
        let quantity=0
        let index=0
        for(let i=0;i<this.cart.length;i++){
            if(this.cart[i].id==p.id){
                if(this.cart[i].quantity==1){
                    quantity=1
                    index=i
                    break
                }
                this.cart[i].quantity-=1   
            }
        }

        if(quantity==1){
            this.cart.splice(index,1)  
        }

        for(let i=0;i<this.products.length;i++){
            if(this.products[i].id==p.id){
                this.products[i].quantity++
                break
            }
        }
    }

}