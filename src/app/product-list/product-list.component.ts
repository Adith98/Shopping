import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { CartService } from '../services/Service_Cart';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Error;
  products:Product[]
  /*
  =[
    new Product(101, "Iphone 12 Max Pro", 113000,5),
    new Product(102, "OnePlus Nord 5G (Gray Onyx, 12GB RAM, 256GB Storage)", 113000,5),
    new Product(103, "Samsung Galaxy Note10 Lite (Aura Glow, 6GB RAM, 128GB Storage)", 34999,5),
    new Product(104, "Google Pixel 4a (Just Black, 6GB RAM, 128GB Storage)", 43350,5),
    new Product(105, "Samsung Galaxy M51 | 7000 mAh Battery | Snapdragon 730G", 24999,5),
  ]
 */

  constructor(private router:Router, private cart:CartService) { }

  AddToCart(i:number){

    let p = this.products[i]
    if(p.quantity==0){
      alert("Product is Out of Stock")
      this.Error="Product is Out of Stock. Sorry!"
    }
    else{
      p.quantity--;
      this.cart.addToCart(p)
      this.router.navigate(['/Your-Cart'])
    }
  }

  ngOnInit(): void {
    this.products=this.cart.getProductList()
  }

}
