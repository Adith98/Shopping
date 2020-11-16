import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../services/Service_Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Product[]
  constructor(private cartService:CartService) { }  

  removeFromCart(i:number){
    this.cartService.removeToCart(this.cart[i])
  }
  ngOnInit(): void {
    this.cart=this.cartService.getCart();
  }

}
